import csv
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def read_csv(filename):
    with open(f'medication/{filename}', 'r') as file:
        reader = csv.DictReader(file)
        return list(reader)

medications = read_csv('Medication.csv')
interactions = {
    'A': read_csv('Interaction_A.csv'),
    'B': read_csv('Interaction_B.csv'),
    'C': read_csv('Interaction_C.csv'),
    'D': read_csv('Interaction_D.csv'),
    'E': read_csv('Interaction_E.csv'),
    'F': read_csv('Interaction_F.csv'),
    'G': read_csv('Interaction_G.csv'),
    'H': read_csv('Interaction_H.csv'),
}

@app.route('/api/medications')
def get_medications():
    return jsonify(medications)

@app.route('/api/interactions/<category>')
def get_interactions(category):
    return jsonify(interactions.get(category, []))

if __name__ == '__main__':
    app.run(debug=True)