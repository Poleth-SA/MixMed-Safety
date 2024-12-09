from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Load CSV files
def load_medication_data():
    try:
        df = pd.read_csv('data/Medication.csv')
        print(f"Loaded medications: {len(df)} rows")  # Debug log
        print(f"Columns: {df.columns.tolist()}")  # Debug log
        return df
    except FileNotFoundError:
        print("Warning: Medication.csv not found in data directory")
        return pd.DataFrame()

def load_interaction_data():
    try:
        interaction_files = [f for f in os.listdir('data') if f.startswith('Interaction_')]
        if not interaction_files:
            print("Warning: No interaction files found in data directory")
            return pd.DataFrame()
        
        print(f"Found interaction files: {interaction_files}")  # Debug log
        
        dfs = []
        expected_columns = ['DrugA_ID', 'DrugA_Name', 'DrugB_ID', 'DrugB_Name', 'Description', 'Level']
        
        for file in interaction_files:
            print(f"Loading file: {file}")  # Debug log
            df = pd.read_csv(f'data/{file}')
            
            if not all(col in df.columns for col in expected_columns):
                print(f"Warning: {file} does not have all expected columns: {expected_columns}")
                print(f"Found columns: {df.columns.tolist()}")
                continue
                
            dfs.append(df)
        
        if not dfs:
            print("No valid interaction files were loaded")
            return pd.DataFrame()
            
        final_df = pd.concat(dfs, ignore_index=True)
        print(f"Total interactions loaded: {len(final_df)}")  # Debug log
        return final_df
    except Exception as e:
        print(f"Error loading interaction data: {e}")
        return pd.DataFrame()

def validate_medication(drug_name):
    df = load_medication_data()
    if df.empty:
        return False
    return drug_name.lower().strip() in df['Drug_Name'].str.lower().str.strip().values

@app.route('/')
def home():
    return jsonify({"message": "MixMed Safety API is running"})

@app.route('/api/medications', methods=['GET'])
def get_medications():
    try:
        df = load_medication_data()
        medications = df.to_dict('records')
        return jsonify(medications)
    except Exception as e:
        print(f"Error in get_medications: {e}")  # Debug log
        return jsonify({'error': str(e)}), 500

@app.route('/api/medication/<drug_name>', methods=['GET'])
def get_medication_info(drug_name):
    try:
        df = load_medication_data()
        print(f"Searching for drug: {drug_name}")  # Debug log
        # Make search case-insensitive and strip whitespace
        drug_name = drug_name.lower().strip()
        
        # First validate if medication exists
        if not validate_medication(drug_name):
            return jsonify({'error': 'Invalid medication name'}), 404
            
        medication = df[df['Drug_Name'].str.lower().str.strip() == drug_name].to_dict('records')
        print(f"Found medication: {medication}")  # Debug log
        if medication:
            return jsonify(medication[0])
        return jsonify({'error': 'Medication not found'}), 404
    except Exception as e:
        print(f"Error in get_medication_info: {e}")  # Debug log
        return jsonify({'error': str(e)}), 500

@app.route('/api/validate-medication/<drug_name>', methods=['GET'])
def validate_medication_route(drug_name):
    is_valid = validate_medication(drug_name)
    return jsonify({'valid': is_valid})

@app.route('/api/interactions', methods=['GET'])
def get_all_interactions():
    try:
        df = load_interaction_data()
        if df.empty:
            return jsonify({'error': 'No interaction data available'}), 404
        interactions = df.to_dict('records')
        return jsonify(interactions)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    if not os.path.exists('data'):
        os.makedirs('data')
        print("Created data directory. Please add your CSV files to the data folder.")
    
    print("Starting MixMed Safety API...")
    app.run(debug=True)