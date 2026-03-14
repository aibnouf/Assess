# 🏥 Pre-Anesthetic Screening Form — Improved Edition

A multilingual, feature-rich pre-anesthetic screening web application for anesthesia teams.

---

## ✨ New Features & Improvements

### UI/UX
- 🌙 **Dark Mode** toggle (persisted in localStorage)
- 📊 **Gradient Progress Bar** – shows form completion percentage in real time
- ✅ **Section Completion Checkmarks** – each section shows a ✔ when filled
- 🔝 **Scroll-to-Top button** – appears after scrolling 400 px
- 🖨️ **Print / PDF button** – clean print stylesheet hides non-essential UI
- 📏 **BMI Calculator** – auto-calculates and color-codes BMI when weight + height are entered
- 🩺 **Vital Signs Range Indicator** – color-codes each vital (green/orange/red) with text hint
- 💾 **Auto-Save to localStorage** – saves every 30 s and on every change; restores on reload
- 📅 **Assessment Date** field with today's date pre-filled

### Medical Content
- 🏷️ **ASA Physical Status Estimator** – displays estimated ASA I–IV badge in the sidebar
- 🚫 **NPO Status** (fasting) dropdown
- ⚠️ **Previous Anesthetic Complications** textarea
- 🔥 **Family History of Malignant Hyperthermia** checkbox
- ✅ **"No Symptoms" mutual exclusivity** – selecting "No Symptoms" clears all others and vice versa
- 💊 **Medications Word Counter** – live word count below the medications textarea

### Code Quality
- 🐛 **Fixed Urdu RTL** – Urdu (`ur`) now correctly sets `dir="rtl"`
- 🐛 **Fixed Placeholder Translations** – all `data-i18n-placeholder` attributes now properly translated
- 🌍 **Bengali & Nepali translations** – all new UI keys added for both languages
- 🔗 **All 9 languages** fully updated: Arabic, English, Urdu, Hindi, Bengali, Nepali, French, Spanish, Indonesian

---

## 🌐 Supported Languages

| Language | Code | RTL |
|----------|------|-----|
| Arabic | `ar` | ✅ |
| English | `en` | ❌ |
| Urdu | `ur` | ✅ |
| Hindi | `hi` | ❌ |
| Bengali | `bn` | ❌ |
| Nepali | `ne` | ❌ |
| French | `fr` | ❌ |
| Spanish | `es` | ❌ |
| Indonesian | `id` | ❌ |

---

## 🗂️ Project Structure

```
/
├── index.html          ← Main page (RTL Arabic by default)
├── style.css           ← Styles (dark mode, BMI, vitals, print CSS)
├── script.js           ← All JS: i18n, BMI, ASA, vitals, auto-save, OCR, submission
├── api/
│   └── ocr.js          ← Vercel serverless function (Gemini 1.5 Flash OCR)
├── package.json
├── vercel.json
└── CNAME
```

---

## 🚀 Quick Start

1. **Clone** this repository
2. **Setup Google Sheet** → go to https://sheets.new, create a sheet with these columns:
   ```
   Timestamp | Name | Age | Sex | Weight | Height | BMI | ASA | Contact | Date | NPO | ...
   ```
3. **Deploy Apps Script** → in your Google Sheet, go to Extensions → Apps Script, paste the provided `doPost` handler, and deploy as a Web App
4. **Replace URL** → in `script.js`, replace `'YOUR_APPS_SCRIPT_WEB_APP_URL'` with your deployed URL
5. **Set up OCR** → add a `GEMINI_API_KEY` environment variable in Vercel
6. **Deploy to Vercel** (or GitHub Pages for static-only version)

---

## 🏥 ASA Classification Logic

| ASA | Criteria |
|-----|---------|
| I   | No medical conditions |
| II  | Age ≥ 60, mild HTN, DM, COPD, BMI 30–39, smoking history |
| III | CAD, HF, AF, stroke, CKD, liver disease, age ≥ 70, BMI ≥ 40 |
| IV  | HF + dyspnea/syncope, or CAD + chest pain |

---

## 📋 Recommendation Logic

Real-time recommendations update based on patient input:

- **Cardiology Consult** – age > 70, CAD, HF, AF, HTN, BP > 160, chest pain, palpitations, dyspnea, syncope, murmur
- **Neurology Consult** – prior stroke, carotid bruit
- **Echo** – HF, AF, murmur, dyspnea
- **ECG** – age > 65, HTN, DM, CAD, HF, AF, palpitations, chest pain, dyspnea
- **Carotid Doppler** – stroke, carotid bruit, age > 70 with ≥2 risk factors
- **Lab Tests** – age > 65, DM, CKD, liver disease, bleeding disorder, anticoagulants
- **Haematology** – bleeding disorder, anticoagulants
- **Nephrology** – CKD
- **Pulmonary** – sleep apnea, COPD/asthma

---

## 🙏 Credits

Built by the **Anesthesia Team** — empowering safer perioperative care.
