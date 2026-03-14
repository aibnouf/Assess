# Pre-Anesthetic Screening Form

A multilingual, static web application for pre‑anesthetic patient screening. Designed for anesthesiologists, it helps collect patient data, provides real‑time recommendations for consultations and investigations, and stores all entries in a Google Sheet. Built with HTML, CSS, and JavaScript – fully client‑side and ready to host on GitHub Pages.

![Screenshot](screenshot.png) <!-- optional: add a screenshot later -->

## 🌟 Features

- **Multilingual support** – Arabic (simplified for patients), English, Urdu, Hindi, Bengali, Nepali, French, Spanish, and Indonesian.
- **System‑grouped medical history** – Card format with icons for cardiac, neurological, respiratory, renal, metabolic, and other conditions.
- **Real‑time recommendations** – Automatically suggests cardiology, neurology, echo, ECG, carotid Doppler, lab tests, haematology, nephrology, and pulmonary consults based on entered data. The panel hides when no recommendations are active.
- **OCR medication scanner** – Patients can take a photo or upload an image of their medication; a secure serverless function (powered by Gemini 1.5 Flash) extracts the medication name and appends it to the medications field.
- **Consent checkbox** – Legally informed consent with translated text.
- **Google Sheets integration** – Each submission appends a row to your Google Sheet (via Apps Script). All fields, including recommendations, are saved.
- **Mobile‑friendly design** – Clean, responsive layout with a sticky header and language selector.

## 📁 Project Structure
-index.html # Main HTML file (form structure) 
-style.css # All styling (based on provided design) 
-script.js # JavaScript logic (translations, recommendations, OCR, form submission) 
-api/ocr.js # Serverless function for Gemini OCR (Vercel) 
-package.json # Dependencies for the serverless function 
-README.md # This file


## 🚀 Quick Start

1. **Clone or download** this repository.
2. **Set up a Google Sheet** (see [Google Sheets Setup](#google-sheets-setup)).
3. **Deploy Google Apps Script** (see [Apps Script Deployment](#apps-script-deployment)).
4. **Deploy the serverless function** on Vercel (see [Serverless Function Deployment](#serverless-function-deployment)).
5. **Replace the Apps Script URL** and the OCR endpoint in `script.js`.
6. **Host the frontend** on GitHub Pages or any static server.

---

## 🔧 Google Sheets Setup

1. Go to [sheets.new](https://sheets.new) to create a new spreadsheet.
2. Name it (e.g., “PreAnesthetic Screening”).
3. In the first row, paste the following headers (in this exact order):
Name, Age, Sex, Weight, Height, Contact, Hypertension, Diabetes, CAD, HeartFailure, AtrialFib, Stroke, COPD, CKD, LiverDisease, BleedingDisorder, Murmur CarotidBruit, Anticoagulants, OtherMedical, SleepApnea, GERD, ChestPain, 
Palpitations, Dyspnea, Syncope, Fatigue, NoSymptoms, SystolicBP, DiastolicBP, HeartRate, RespRate, Sp02, Temperature, Medications, Allergies, Smoking, Alcohol, SurgicalHistory, Dental, Timestamp, CardiologyConsult, NeurologyConsult, Echo, ECG, CarotidDoppler, LabTests, HaematologyConsult, NephrologyConsult, PulmonaryConsult



4. Copy the **Sheet ID** from the URL:  
   `https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit`

---

## 📜 Apps Script Deployment

1. In your Google Sheet, go to **Extensions → Apps Script**.
2. Delete any default code and paste the following (replace `YOUR_SHEET_ID` with your actual Sheet ID):

```javascript
function doPost(e) {
  return handleRequest(e);
}

function doGet(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    const params = e.parameter;
    const data = JSON.parse(params.data);

    const row = [
      data.name, data.age, data.sex, data.weight, data.height, data.contact,
      data.hypertension ? 'Yes' : 'No',
      data.diabetes ? 'Yes' : 'No',
      data.cad ? 'Yes' : 'No',
      data.heartFailure ? 'Yes' : 'No',
      data.atrialFib ? 'Yes' : 'No',
      data.stroke ? 'Yes' : 'No',
      data.copd ? 'Yes' : 'No',
      data.ckd ? 'Yes' : 'No',
      data.liverDisease ? 'Yes' : 'No',
      data.bleedingDisorder ? 'Yes' : 'No',
      data.murmur ? 'Yes' : 'No',
      data.carotidBruit ? 'Yes' : 'No',
      data.anticoagulants ? 'Yes' : 'No',
      data.otherMedical || '',
      data.sleepApnea ? 'Yes' : 'No',
      data.gerd ? 'Yes' : 'No',
      data.chestPain ? 'Yes' : 'No',
      data.palpitations ? 'Yes' : 'No',
      data.dyspnea ? 'Yes' : 'No',
      data.syncope ? 'Yes' : 'No',
      data.fatigue ? 'Yes' : 'No',
      data.noSymptoms ? 'Yes' : 'No',
      data.bpSystolic || '',
      data.bpDiastolic || '',
      data.heartRate || '',
      data.respRate || '',
      data.spo2 || '',
      data.temperature || '',
      data.medications || '',
      data.allergies || '',
      data.smoking || '',
      data.alcohol || '',
      data.surgicalHistory || '',
      data.dental || '',
      new Date(),
      data.cardioConsult ? 'Yes' : 'No',
      data.neuroConsult ? 'Yes' : 'No',
      data.echo ? 'Yes' : 'No',
      data.ecg ? 'Yes' : 'No',
      data.carotidDoppler ? 'Yes' : 'No',
      data.labTests ? 'Yes' : 'No',
      data.haematologyConsult ? 'Yes' : 'No',
      data.nephrologyConsult ? 'Yes' : 'No',
      data.pulmonaryConsult ? 'Yes' : 'No'
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
