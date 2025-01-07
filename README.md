# MixMed Safety
MixMed Safety is a web application designed to help users access simplified medication information and check potential drug interactions in easy-to-understand language. This project aims to make medication information more accessible to those who may find traditional medical resources overwhelming or difficult to navigate. This web application was part of my undergraduate capstone project

## Purpose 
The application addresses the growing need for accessible medication information, especially for individuals who:
- Have limited access to healthcare resources
- Find existing medical resources too complex
- Need quick, reliable information about medication interactions
- Are unfamiliar with medical terminology
- Are caregivers managing medications for others

## Features
- Medication Information Lookup: Search and view simplified descriptions of medication purposes
- Drug Interaction Checker: Check potential interactions between multiple medications
- User-Friendly Interface: Clean, simple design with easy navigation
- Autocomplete Functionality: Helps users find correct medication names
- Risk Level Indicators: Clear visual indicators for interaction risk levels
- Sample Data Loading: Option to load example medications for demonstration
- Mobile Responsive: Accessible across various devices

## How to Run (Execute)
    1. Start the Backend Server (Flask)
        # Navigate to your backend directory on terminal
        cd backend

        # Install Python dependencies (first time only)
        pip install -r requirements.txt

        # Run the Flask server
        python app.py

    2. Start the Frontend Server (React)
        # In a new terminal, navigate to your frontend directory
        cd frontend

        # Install dependencies (first time only)
        npm install

        # Start the development server
        npm run dev

## Important Notes
    - Make sure you installed all the dependencies.
    - Keep both servers running.
    - You'll need two terminal windows, one for each server.
    - The frontend and backend must run simultaneously for the application to work properly.

## Disclaimer
MixMed Safety is designed to be an informational tool only. Always consult healthcare professionals for medical decisions. The application should not be used as a substitute for professional medical advice, diagnosis, or treatment.

## Resources
- Drugs.com
- FDA Drugs Database
- Journal of Research in Medical Sciences
