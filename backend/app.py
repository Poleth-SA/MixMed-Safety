from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Load CSV files
def load_medication_data():
    return pd.read_csv('data/Medication.csv')

def load_interaction_data():
    interaction_files = [f for f in os.listdir('data') if f.startswith('Interaction_')]
    dfs = []
    for file in interaction_files:
        df = pd.read_csv(f'data/{file}')
        dfs.append(df)
    return pd.concat(dfs, ignore_index=True)

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
        interactions = df.to_dict('records')
        return jsonify(interactions)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)