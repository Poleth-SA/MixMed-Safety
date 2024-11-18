from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Load CSV files
def load_medication_data():
    try:
        return pd.read_csv('data/Medication.csv')
    except FileNotFoundError:
        print("Warning: Medication.csv not found in data directory")
        return pd.DataFrame()

def load_interaction_data():
    try:
        interaction_files = [f for f in os.listdir('data') if f.startswith('Interaction_A.cvs','Interaction_B.cvs','Interaction_C.cvs','Interaction_D.cvs','Interaction_E.cvs','Interaction_F.cvs','Interaction_G.cvs','Interaction_H.cvs')]
        if not interaction_files:
            print("Warning: No interaction files found in data directory")
            return pd.DataFrame()
        
        print(f"Found interaction files: {interaction_files}")  # Debug log
        
        dfs = []
        expected_columns = ['DrugA_ID', 'DrugA_Name', 'DrugB_ID', 'DrugB_Name', 'Description', 'Level']
        
        for file in interaction_files:
            print(f"Loading file: {file}")  # Debug log
            df = pd.read_csv(f'data/{file}')
            
            # Verify columns match expected format
            if not all(col in df.columns for col in expected_columns):
                print(f"Warning: {file} does not have all expected columns: {expected_columns}")
                print(f"Found columns: {df.columns.tolist()}")
                continue
                
            print(f"Columns in {file}: {df.columns.tolist()}")  # Debug log
            print(f"Number of rows in {file}: {len(df)}")  # Debug log
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

# Root route for testing
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
        return jsonify({'error': str(e)}), 500

@app.route('/api/medication/<drug_name>', methods=['GET'])
def get_medication_info(drug_name):
    try:
        df = load_medication_data()
        medication = df[df['Drug_Name'].str.lower() == drug_name.lower()].to_dict('records')
        if medication:
            return jsonify(medication[0])
        return jsonify({'error': 'Medication not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/interactions', methods=['GET'])
def get_all_interactions():
    try:
        df = load_interaction_data()
        if df.empty:
            return jsonify({'error': 'No interaction data available'}), 404
        interactions = df.to_dict('records')
        print(f"Sending {len(interactions)} interactions")  # Debug log
        return jsonify(interactions)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Make sure the data directory exists
    if not os.path.exists('data'):
        os.makedirs('data')
        print("Created data directory. Please add your CSV files to the data folder.")
    
    print("Starting MixMed Safety API...")
    app.run(debug=True)