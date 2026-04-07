# Pre‑Anesthetic Screening System

A multilingual, two‑interface web application for collecting pre‑anesthetic patient assessments and providing a secure doctor dashboard with real‑time notifications, data filtering, PDF/Excel export, and admin management.

## Features

### Patient Form (`patient.html`)
- 9 languages (Arabic, English, Urdu, Hindi, Bengali, Nepali, French, Spanish, Indonesian)
- Full medical history, symptoms, medications, vitals, BMI, ASA estimation
- Dark mode, auto‑save, print, progress bar, OCR medication scanning
- **No recommendations panel** (for patients only)
- Data saved directly to Supabase (no Google Sheets)

### Doctor Dashboard (`doctor.html`)
- Secure login (email/password via Supabase Auth)
- View all patient submissions (all doctors see all data)
- Filter by today, last 7 days, last 30 days
- Real‑time notifications when a new patient submits
- Export filtered data as PDF or Excel
- Admin panel: add/delete doctors (only visible to admin users)

### Landing Page (`index.html`)
- Simple choice between Patient Form and Doctor Login

## Technology Stack

- **Frontend**: HTML/CSS/JS (static, hosted on GitHub Pages)
- **Backend & Database**: Supabase (PostgreSQL, Auth, Realtime)
- **PDF generation**: jsPDF + autoTable
- **Excel export**: SheetJS (XLSX)
- **OCR**: Gemini API via Vercel serverless function (optional)

## Setup Instructions

### 1. Create Supabase Project
- Sign up at [supabase.com](https://supabase.com)
- Create a new project, note your **Project URL** and **anon key**
- Run the SQL schema (provided in the documentation) to create `assessments` and `doctors` tables

### 2. Configure Authentication
- In Supabase → Authentication → Providers → enable Email
- Disable email confirmation (or keep it)
- Create an admin user: Authentication → Users → Add User (email/password)
- Then in the `doctors` table, insert a row with:
  - `id` = the user's UUID
  - `email` = same email
  - `full_name` = admin name
  - `is_admin` = true

### 3. Create `config.js`
In the root folder of your GitHub repository, create `config.js`:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
