// ==================== IMPORTS ====================
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

// ==================== SUPABASE CLIENT ====================
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabase = supabase;

// ==================== NEW TRANSLATION KEYS (merged later) ====================
const newKeys = {
    ar:  { 'label-assessmentDate':'\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u062a\u0642\u064a\u064a\u0645','label-fileNumber':'\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641','placeholder-fileNumber':'\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641','label-npoStatus':'\u062d\u0627\u0644\u0629 \u0627\u0644\u0635\u064a\u0627\u0645 (NPO)','npo-unknown':'\u063a\u064a\u0631 \u0645\u062d\u062f\u062f','npo-yes':'\u0635\u0627\u0626\u0645 \u2714','npo-no':'\u063a\u064a\u0631 \u0635\u0627\u0626\u0645 \u2718','label-prevAnesthesia':'\u0645\u0636\u0627\u0639\u0641\u0627\u062a \u062a\u062e\u062f\u064a\u0631 \u0633\u0627\u0628\u0642\u0629','placeholder-prevAnesthesia':'\u0635\u0641\u0647\u0627 \u0625\u0646 \u0648\u064f\u062c\u062f\u062a','label-familyMH':'\u062a\u0627\u0631\u064a\u062e \u0639\u0627\u0626\u0644\u064a - \u062d\u0631\u0627\u0631\u0629 \u062e\u0628\u064a\u062b\u0629 (MH)','bmi-label':'\u0645\u0624\u0634\u0631 \u0643\u062a\u0644\u0629 \u0627\u0644\u062c\u0633\u0645','bmi-underweight':'\u0646\u0642\u0635 \u0648\u0632\u0646','bmi-normal':'\u0648\u0632\u0646 \u0637\u0628\u064a\u0639\u064a','bmi-overweight':'\u0632\u064a\u0627\u062f\u0629 \u0648\u0632\u0646','bmi-obese':'\u0633\u0645\u0646\u0629','bmi-morbid':'\u0633\u0645\u0646\u0629 \u0645\u0641\u0631\u0637\u0629','bmi-airway':'\u26a0 \u062e\u0637\u0631 \u0645\u0633\u0627\u0644\u0643 \u0647\u0648\u0627\u0626\u064a\u0629','asa-label':'\u062a\u0635\u0646\u064a\u0641 ASA \u0627\u0644\u062a\u0642\u062f\u064a\u0631\u064a','asa-1-desc':'\u0645\u0631\u064a\u0636 \u0633\u0644\u064a\u0645 \u0628\u062f\u0648\u0646 \u0623\u0645\u0631\u0627\u0636','asa-2-desc':'\u0645\u0631\u0636 \u062e\u0641\u064a\u0641 \u0648\u0645\u0633\u062a\u0642\u0631','asa-3-desc':'\u0645\u0631\u0636 \u0646\u0638\u0627\u0645\u064a \u0634\u062f\u064a\u062f','asa-4-desc':'\u062a\u0647\u062f\u064a\u062f \u0645\u0633\u062a\u0645\u0631 \u0644\u0644\u062d\u064a\u0627\u0629','print-btn-text':'\u0637\u0628\u0627\u0639\u0629','autosave-text':'\u062a\u0645 \u0627\u0644\u062d\u0641\u0638 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a','meds-word-count-label':'\u0643\u0644\u0645\u0629','vital-normal':'\u0637\u0628\u064a\u0639\u064a','vital-high':'\u0645\u0631\u062a\u0641\u0639','vital-low':'\u0645\u0646\u062e\u0641\u0636','vital-critical':'\u062d\u0631\u062c' },
    en:  { 'label-assessmentDate':'Assessment Date','label-fileNumber':'File Number','placeholder-fileNumber':'File number','label-npoStatus':'NPO Status','npo-unknown':'Unknown','npo-yes':'Fasting','npo-no':'Not Fasting','label-prevAnesthesia':'Previous Anesthetic Complications','placeholder-prevAnesthesia':'Describe if any','label-familyMH':'Family History - Malignant Hyperthermia','bmi-label':'BMI','bmi-underweight':'Underweight','bmi-normal':'Normal','bmi-overweight':'Overweight','bmi-obese':'Obese','bmi-morbid':'Morbidly Obese','bmi-airway':'Airway Risk','asa-label':'Estimated ASA Class','asa-1-desc':'Healthy patient, no disease','asa-2-desc':'Mild systemic disease','asa-3-desc':'Severe systemic disease','asa-4-desc':'Constant threat to life','print-btn-text':'Print','autosave-text':'Auto-saved','meds-word-count-label':'words','vital-normal':'Normal','vital-high':'High','vital-low':'Low','vital-critical':'Critical' },
    ur:  { 'label-assessmentDate':'\u062a\u0634\u062e\u06cc\u0635 \u06a9\u06cc \u062a\u0627\u0631\u06cc\u062e','label-fileNumber':'\u0641\u0627\u0626\u0644 \u0646\u0645\u0628\u0631','placeholder-fileNumber':'\u0641\u0627\u0626\u0644 \u0646\u0645\u0628\u0631','label-npoStatus':'NPO \u062d\u06cc\u062b\u06cc\u062a','npo-unknown':'\u063a\u06cc\u0631 \u0645\u0639\u0644\u0648\u0645','npo-yes':'\u0631\u0648\u0632\u06c1','npo-no':'\u0631\u0648\u0632\u06c1 \u0646\u06c1\u06cc\u06ba','label-prevAnesthesia':'\u067e\u06c1\u0644\u06d2 \u0628\u06d2 \u06c1\u0648\u0634\u06cc \u06a9\u06cc \u067e\u06cc\u0686\u06cc\u062f\u06af\u06cc\u0627\u06ba','placeholder-prevAnesthesia':'\u0627\u06af\u0631 \u06a9\u0648\u0626\u06cc \u06c1\u0648 \u062a\u0648 \u0628\u06cc\u0627\u0646 \u06a9\u0631\u06cc\u06ba','label-familyMH':'\u062e\u0627\u0646\u062f\u0627\u0646\u06cc \u062a\u0627\u0631\u06cc\u062e - MH','bmi-label':'BMI','bmi-underweight':'\u06a9\u0645 \u0648\u0632\u0646','bmi-normal':'\u0637\u0628\u06cc\u0639\u06cc','bmi-overweight':'\u0632\u06cc\u0627\u062f\u06c1 \u0648\u0632\u0646','bmi-obese':'\u0645\u0648\u0679\u0627\u067e\u0627','bmi-morbid':'\u0627\u0646\u062a\u06c1\u0627\u0626\u06cc \u0645\u0648\u0679\u0627\u067e\u0627','bmi-airway':'\u0633\u0627\u0646\u0633 \u06a9\u06cc \u0646\u0627\u0644\u06cc \u06a9\u0627 \u062e\u0637\u0631\u06c1','asa-label':'ASA \u062f\u0631\u062c\u06c1 \u0628\u0646\u062f\u06cc','asa-1-desc':'\u0635\u062d\u062a \u0645\u0646\u062f','asa-2-desc':'\u0645\u0639\u0645\u0648\u0644\u06cc \u0628\u06cc\u0645\u0627\u0631\u06cc','asa-3-desc':'\u0634\u062f\u06cc\u062f \u0628\u06cc\u0645\u0627\u0631\u06cc','asa-4-desc':'\u0632\u0646\u062f\u06af\u06cc \u06a9\u0648 \u062e\u0637\u0631\u06c1','print-btn-text':'\u067e\u0631\u0646\u0679','autosave-text':'\u062e\u0648\u062f\u06a9\u0627\u0631 \u0645\u062d\u0641\u0648\u0638','meds-word-count-label':'\u0627\u0644\u0641\u0627\u0638','vital-normal':'\u0646\u0627\u0631\u0645\u0644','vital-high':'\u0632\u06cc\u0627\u062f\u06c1','vital-low':'\u06a9\u0645','vital-critical':'\u062e\u0637\u0631\u0646\u0627\u06a9' },
    fr:  { 'label-assessmentDate':"Date d'evaluation",'label-fileNumber':'Numero de dossier','placeholder-fileNumber':'Numero de dossier','label-npoStatus':'Statut NPO','npo-unknown':'Inconnu','npo-yes':'A jeun','npo-no':'Pas a jeun','label-prevAnesthesia':'Complications anesthesiques anterieures','placeholder-prevAnesthesia':'Decrivez si necessaire','label-familyMH':'Antecedents familiaux - Hyperthermie maligne','bmi-label':'IMC','bmi-underweight':'Insuffisance ponderale','bmi-normal':'Normal','bmi-overweight':'Surpoids','bmi-obese':'Obese','bmi-morbid':'Obesite morbide','bmi-airway':'Risque voies aeriennes','asa-label':'Classe ASA estimee','asa-1-desc':'Patient sain','asa-2-desc':'Maladie legere','asa-3-desc':'Maladie grave','asa-4-desc':'Menace vitale constante','print-btn-text':'Imprimer','autosave-text':'Sauvegarde auto','meds-word-count-label':'mots','vital-normal':'Normal','vital-high':'Eleve','vital-low':'Bas','vital-critical':'Critique' },
    es:  { 'label-assessmentDate':'Fecha de evaluacion','label-fileNumber':'Numero de expediente','placeholder-fileNumber':'Numero de expediente','label-npoStatus':'Estado NPO','npo-unknown':'Desconocido','npo-yes':'En ayunas','npo-no':'Sin ayunas','label-prevAnesthesia':'Complicaciones anestesicas previas','placeholder-prevAnesthesia':'Describa si las hay','label-familyMH':'Antecedentes familiares - Hipertermia maligna','bmi-label':'IMC','bmi-underweight':'Bajo peso','bmi-normal':'Normal','bmi-overweight':'Sobrepeso','bmi-obese':'Obeso','bmi-morbid':'Obesidad morbida','bmi-airway':'Riesgo via aerea','asa-label':'Clase ASA estimada','asa-1-desc':'Paciente sano','asa-2-desc':'Enfermedad leve','asa-3-desc':'Enfermedad grave','asa-4-desc':'Amenaza constante a la vida','print-btn-text':'Imprimir','autosave-text':'Guardado auto','meds-word-count-label':'palabras','vital-normal':'Normal','vital-high':'Alto','vital-low':'Bajo','vital-critical':'Critico' },
    id:  { 'label-assessmentDate':'Tanggal Penilaian','label-fileNumber':'Nomor Berkas','placeholder-fileNumber':'Nomor berkas','label-npoStatus':'Status NPO','npo-unknown':'Tidak Diketahui','npo-yes':'Puasa','npo-no':'Tidak Puasa','label-prevAnesthesia':'Komplikasi Anestesi Sebelumnya','placeholder-prevAnesthesia':'Jelaskan jika ada','label-familyMH':'Riwayat Keluarga - Hipertermia Maligna','bmi-label':'IMT','bmi-underweight':'Berat Badan Kurang','bmi-normal':'Normal','bmi-overweight':'Kelebihan Berat Badan','bmi-obese':'Obesitas','bmi-morbid':'Obesitas Morbid','bmi-airway':'Risiko Jalan Napas','asa-label':'Perkiraan Kelas ASA','asa-1-desc':'Pasien sehat','asa-2-desc':'Penyakit ringan','asa-3-desc':'Penyakit berat','asa-4-desc':'Ancaman jiwa terus-menerus','print-btn-text':'Cetak','autosave-text':'Tersimpan otomatis','meds-word-count-label':'kata','vital-normal':'Normal','vital-high':'Tinggi','vital-low':'Rendah','vital-critical':'Kritis' },
    hi:  { 'label-assessmentDate':'\u092e\u0942\u0932\u094d\u092f\u093e\u0902\u0915\u0928 \u0924\u093f\u0925\u093f','label-fileNumber':'\u092b\u093c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930','placeholder-fileNumber':'\u092b\u093c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930','label-npoStatus':'NPO \u0938\u094d\u0925\u093f\u0924\u093f','npo-unknown':'\u0905\u091c\u094d\u091e\u093e\u0924','npo-yes':'\u0909\u092a\u0935\u093e\u0938','npo-no':'\u0909\u092a\u0935\u093e\u0938 \u0928\u0939\u0940\u0902','label-prevAnesthesia':'\u092a\u093f\u091b\u0932\u0940 \u090f\u0928\u0947\u0938\u094d\u0925\u0940\u0938\u093f\u092f\u093e \u091c\u091f\u093f\u0932\u0924\u093e\u090f\u0902','placeholder-prevAnesthesia':'\u092f\u0926\u093f \u0915\u094b\u0908 \u0939\u094b \u0924\u094b \u0935\u0930\u094d\u0923\u0928 \u0915\u0930\u0947\u0902','label-familyMH':'\u092a\u093e\u0930\u093f\u0935\u093e\u0930\u093f\u0915 \u0907\u0924\u093f\u0939\u093e\u0938 - MH','bmi-label':'BMI','bmi-underweight':'\u0915\u092e \u0935\u091c\u0928','bmi-normal':'\u0938\u093e\u092e\u093e\u0928\u094d\u092f','bmi-overweight':'\u0905\u0927\u093f\u0915 \u0935\u091c\u0928','bmi-obese':'\u092e\u094b\u091f\u093e\u092a\u093e','bmi-morbid':'\u0917\u0902\u092d\u0940\u0930 \u092e\u094b\u091f\u093e\u092a\u093e','bmi-airway':'\u0936\u094d\u0935\u093e\u0938 \u092e\u093e\u0930\u094d\u0917 \u091c\u094b\u0916\u093f\u092e','asa-label':'\u0905\u0928\u0941\u092e\u093e\u0928\u093f\u0924 ASA \u0935\u0930\u094d\u0917','asa-1-desc':'\u0938\u094d\u0935\u0938\u094d\u0925 \u092e\u0930\u0940\u091c','asa-2-desc':'\u0939\u0932\u094d\u0915\u0940 \u092c\u0940\u092e\u093e\u0930\u0940','asa-3-desc':'\u0917\u0902\u092d\u0940\u0930 \u092c\u0940\u092e\u093e\u0930\u0940','asa-4-desc':'\u091c\u0940\u0935\u0928 \u0915\u094b \u0928\u093f\u0930\u0902\u0924\u0930 \u0916\u0924\u0930\u093e','print-btn-text':'\u092a\u094d\u0930\u093f\u0902\u091f','autosave-text':'\u0938\u094d\u0935\u0924\u0903 \u0938\u0939\u0947\u091c\u093e','meds-word-count-label':'\u0936\u092c\u094d\u0926','vital-normal':'\u0938\u093e\u092e\u093e\u0928\u094d\u092f','vital-high':'\u0909\u091a\u094d\u091a','vital-low':'\u0928\u093f\u092e\u094d\u0928','vital-critical':'\u0917\u0902\u092d\u0940\u0930' },
    bn:  { 'label-assessmentDate':'\u09ae\u09c2\u09b2\u09cd\u09af\u09be\u09af\u09bc\u09a8\u09c7\u09b0 \u09a4\u09be\u09b0\u09bf\u0996','label-fileNumber':'\u09ab\u09be\u0987\u09b2 \u09a8\u09ae\u09cd\u09ac\u09b0','placeholder-fileNumber':'\u09ab\u09be\u0987\u09b2 \u09a8\u09ae\u09cd\u09ac\u09b0','label-npoStatus':'NPO \u0985\u09ac\u09b8\u09cd\u09a5\u09be','npo-unknown':'\u0985\u099c\u09be\u09a8\u09be','npo-yes':'\u0989\u09aa\u09ac\u09be\u09b8','npo-no':'\u0989\u09aa\u09ac\u09be\u09b8 \u09a8\u09c7\u0987','label-prevAnesthesia':'\u09aa\u09c2\u09b0\u09cd\u09ac\u09ac\u09b0\u09cd\u09a4\u09c0 \u0985\u09cd\u09af\u09be\u09a8\u09c7\u09b8\u09cd\u09a5\u09c7\u09b6\u09bf\u09af\u09bc\u09be \u099c\u099f\u09bf\u09b2\u09a4\u09be','placeholder-prevAnesthesia':'\u09a5\u09be\u0995\u09b2\u09c7 \u09ac\u09b0\u09cd\u09a3\u09a8\u09be \u0995\u09b0\u09c1\u09a8','label-familyMH':'\u09aa\u09be\u09b0\u09bf\u09ac\u09be\u09b0\u09bf\u0995 \u0987\u09a4\u09bf\u09b9\u09be\u09b8 - MH','bmi-label':'BMI','bmi-underweight':'\u0995\u09ae \u0993\u099c\u09a8','bmi-normal':'\u09b8\u09cd\u09ac\u09be\u09ad\u09be\u09ac\u09bf\u0995','bmi-overweight':'\u0985\u09a4\u09bf\u09b0\u09bf\u0995\u09cd\u09a4 \u0993\u099c\u09a8','bmi-obese':'\u09b8\u09cd\u09a5\u09c2\u09b2\u09a4\u09be','bmi-morbid':'\u0997\u09c1\u09b0\u09c1\u09a4\u09b0','bmi-airway':'\u09b6\u09cd\u09ac\u09be\u09b8\u09a8\u09be\u09b2\u09c0\u09b0 \u099d\u09c1\u0981\u0995\u09bf','asa-label':'ASA \u09b6\u09cd\u09b0\u09c7\u09a3\u09c0','asa-1-desc':'\u09b8\u09c1\u09b8\u09cd\u09a5','asa-2-desc':'\u09b9\u09be\u09b2\u0995\u09be \u09b0\u09cb\u0997','asa-3-desc':'\u0997\u09c1\u09b0\u09c1\u09a4\u09b0 \u09b0\u09cb\u0997','asa-4-desc':'\u099c\u09c0\u09ac\u09a8\u09c7\u09b0 \u09b9\u09c1\u09ae\u0995\u09bf','print-btn-text':'\u09ae\u09c1\u09a6\u09cd\u09b0\u09a3','autosave-text':'\u09b8\u09cd\u09ac\u09af\u09bc\u0982\u0995\u09cd\u09b0\u09bf\u09af\u09bc','meds-word-count-label':'\u09b6\u09ac\u09cd\u09a6','vital-normal':'\u09b8\u09cd\u09ac\u09be\u09ad\u09be\u09ac\u09bf\u0995','vital-high':'\u0989\u099a\u09cd\u099a','vital-low':'\u09a8\u09bf\u09ae\u09cd\u09a8','vital-critical':'\u09b8\u0982\u0995\u099f' },
    ne:  { 'label-assessmentDate':'\u092e\u0942\u0932\u094d\u092f\u093e\u0919\u094d\u0915\u0928 \u092e\u093f\u0924\u093f','label-fileNumber':'\u092b\u093e\u0907\u0932 \u0928\u092e\u094d\u092c\u0930','placeholder-fileNumber':'\u092b\u093e\u0907\u0932 \u0928\u092e\u094d\u092c\u0930','label-npoStatus':'NPO \u0905\u0935\u0938\u094d\u0925\u093e','npo-unknown':'\u0925\u093e\u0939\u093e \u091b\u0948\u0928','npo-yes':'\u0909\u092a\u0935\u093e\u0938','npo-no':'\u0909\u092a\u0935\u093e\u0938 \u091b\u0948\u0928','label-prevAnesthesia':'\u092a\u0939\u093f\u0932\u0947\u0915\u094b \u090f\u0928\u0947\u0938\u094d\u0925\u0947\u0938\u093f\u092f\u093e \u091c\u091f\u093f\u0932\u0924\u093e','placeholder-prevAnesthesia':'\u092d\u090f \u0909\u0932\u094d\u0932\u0947\u0916 \u0917\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d','label-familyMH':'\u092a\u093e\u0930\u093f\u0935\u093e\u0930\u093f\u0915 \u0907\u0924\u093f\u0939\u093e\u0938 - MH','bmi-label':'BMI','bmi-underweight':'\u0915\u092e \u0924\u094c\u0932','bmi-normal':'\u0938\u093e\u092e\u093e\u0928\u094d\u092f','bmi-overweight':'\u0922\u093f\u0932\u094b','bmi-obese':'\u092e\u094b\u091f\u094b\u092a\u0928','bmi-morbid':'\u0917\u092e\u094d\u092d\u0940\u0930','bmi-airway':'\u0936\u094d\u0935\u093e\u0938 \u092e\u093e\u0930\u094d\u0917 \u091c\u094b\u0916\u093f\u092e','asa-label':'ASA \u0935\u0930\u094d\u0917','asa-1-desc':'\u0938\u094d\u0935\u0938\u094d\u0925','asa-2-desc':'\u0939\u0932\u094d\u0915\u093e \u0930\u094b\u0917','asa-3-desc':'\u0917\u092e\u094d\u092d\u0940\u0930 \u0930\u094b\u0917','asa-4-desc':'\u091c\u0940\u0935\u0928\u0932\u093e\u0908 \u0916\u0924\u0930\u093e','print-btn-text':'\u092a\u094d\u0930\u093f\u0928\u094d\u091f','autosave-text':'\u0938\u094d\u0935\u0924\u0903 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924','meds-word-count-label':'\u0936\u092c\u094d\u0926','vital-normal':'\u0938\u093e\u092e\u093e\u0928\u094d\u092f','vital-high':'\u0909\u091a\u094d\u091a','vital-low':'\u0928\u094d\u092f\u0942\u0928','vital-critical':'\u0917\u092e\u094d\u092d\u0940\u0930' }
};

// ==================== FULL TRANSLATIONS (9 languages) ====================
const translations = {
    ar: {
        "lang-label": "🌐 اللغة",
        "header-title": "التقييم قبل التخدير",
        "header-tagline": "نموذج مبسط لتقييم حالتك قبل العملية",
        "demographics-title": "بياناتك",
        "label-fullName": "الاسم الكامل *",
        "placeholder-fullName": "أدخل اسمك الكامل",
        "label-age": "العمر *",
        "placeholder-age": "مثال: ٣٥",
        "label-sex": "الجنس",
        "sex-option-none": "-- اختر --",
        "sex-option-male": "ذكر",
        "sex-option-female": "أنثى",
        "label-weight": "الوزن (كغ)",
        "placeholder-weight": "مثال: ٧٠",
        "label-height": "الطول (سم)",
        "placeholder-height": "مثال: ١٦٠",
        "label-contact": "رقم الهاتف",
        "placeholder-contact": "٠٥xxxxxxxx",
        "medical-title": "التاريخ الصحي",
        "cardiac-title": "أمراض القلب",
        "label-hypertension": "ضغط الدم المرتفع",
        "label-cad": "تضيق شرايين القلب",
        "label-heartFailure": "ضعف عضلة القلب",
        "label-atrialFib": "اضطراب نبضات القلب (رجفان)",
        "label-murmur": "لغط (شوشرة) في القلب",
        "neuro-title": "أمراض الأعصاب",
        "label-stroke": "جلطة دماغية سابقة",
        "label-carotidBruit": "لغط في شريان الرقبة",
        "respiratory-title": "أمراض الجهاز التنفسي",
        "label-copd": "مرض رئوي مزمن / ربو",
        "label-sleepApnea": "انقطاع النفس أثناء النوم",
        "renal-title": "الكبد والكلى والدم",
        "label-ckd": "أمراض الكلى المزمنة",
        "label-liverDisease": "أمراض الكبد",
        "label-bleedingDisorder": "اضطرابات النزيف (سيولة)",
        "label-anticoagulants": "أدوية مميعة للدم",
        "metabolic-title": "أمراض أخرى",
        "label-diabetes": "السكري",
        "label-gerd": "ارتجاع المريء",
        "label-otherMedical": "حالات أخرى (مثل باركنسون، الغدة الدرقية...)",
        "placeholder-otherMedical": "أذكر إن وجدت",
        "symptoms-title": "الأعراض الحالية",
        "label-chestPain": "ألم في الصدر",
        "label-palpitations": "خفقان / دقات قلب سريعة",
        "label-dyspnea": "ضيق في النفس",
        "label-syncope": "إغماء / دوخة شديدة",
        "label-fatigue": "تعب شديد عند أقل مجهود",
        "label-noSymptoms": "لا توجد أعراض",
        "meds-title": "الأدوية والحساسية",
        "label-medications": "الأدوية التي تتناولها (الأسماء والجرعات)",
        "placeholder-medications": "مثال: أسبرين ٨١مغ مرة يومياً",
        "scan-btn-text": "تصوير الدواء",
        "label-allergies": "الحساسية من (دواء، طعام، لاتكس...)",
        "placeholder-allergies": "مثال: بنسلين، صراصير...",
        "additional-title": "معلومات إضافية",
        "label-smoking": "التدخين",
        "smoking-never": "لا أدخن",
        "smoking-former": "كنت أدخن سابقاً",
        "smoking-current": "أدخن حالياً",
        "label-alcohol": "الكحول",
        "alcohol-none": "لا أتناول",
        "alcohol-moderate": "قليلاً",
        "alcohol-heavy": "كثيراً",
        "label-surgicalHistory": "العمليات الجراحية السابقة",
        "placeholder-surgicalHistory": "مثال: عملية زائدة ٢٠١٥",
        "label-dental": "مشاكل الأسنان (أسنان مكسورة، أطقم...)",
        "placeholder-dental": "أذكر أي مشكلة",
        "vitals-title": "العلامات الحيوية (اختياري)",
        "label-bpSystolic": "الضغط الانقباضي",
        "placeholder-bpSystolic": "مثال ١٢٠",
        "label-bpDiastolic": "الضغط الانبساطي",
        "placeholder-bpDiastolic": "مثال ٨٠",
        "label-heartRate": "نبضات القلب",
        "placeholder-heartRate": "مثال ٧٠",
        "label-respRate": "معدل التنفس",
        "placeholder-respRate": "مثال ١٦",
        "label-spo2": "نسبة الأوكسجين (%)",
        "placeholder-spo2": "مثال ٩٨",
        "label-temperature": "درجة الحرارة",
        "placeholder-temperature": "مثال ٣٦.٥",
        "consent-text": "أوافق على ملء هذا النموذج طواعية، وأعلم أن المعلومات ستساعد فريق التخدير على تقديم الرعاية الآمنة.",
        "submit-btn": "حفظ",
        "status-submitting": "جاري الإرسال...",
        "error-age": "❌ العمر مطلوب.",
        "error-name": "❌ الاسم مطلوب.",
        "success": "✅ تم حفظ البيانات بنجاح!",
        "error": "❌ حدث خطأ في الحفظ.",
        "ocr_processing": "جاري التعرف على الدواء...",
        "ocr_success": "تمت إضافة اسم الدواء!",
        "ocr_failed": "لم نتمكن من التعرف على الدواء، حاول مرة أخرى.",
        "print-btn-text": "طباعة",
        "autosave-text": "تم الحفظ التلقائي",
        "meds-word-count-label": "كلمة",
        "bmi-label": "مؤشر كتلة الجسم",
        "bmi-underweight": "نقص وزن",
        "bmi-normal": "وزن طبيعي",
        "bmi-overweight": "زيادة وزن",
        "bmi-obese": "سمنة",
        "bmi-morbid": "سمنة مفرطة",
        "bmi-airway": "⚠ خطر مسالك هوائية",
        "asa-label": "تصنيف ASA التقديري",
        "asa-1-desc": "مريض سليم بدون أمراض",
        "asa-2-desc": "مرض خفيف ومستقر",
        "asa-3-desc": "مرض نظامي شديد",
        "asa-4-desc": "تهديد مستمر للحياة",
        "vital-normal": "طبيعي",
        "vital-high": "مرتفع",
        "vital-low": "منخفض",
        "vital-critical": "حرج"
    },
    en: {
        "lang-label": "🌐 Language",
        "header-title": "Pre‑Anesthetic Screening",
        "header-tagline": "Simple form to assess your condition before surgery",
        "demographics-title": "Your Information",
        "label-fullName": "Full Name *",
        "placeholder-fullName": "Enter your full name",
        "label-age": "Age *",
        "placeholder-age": "e.g., 35",
        "label-sex": "Sex",
        "sex-option-none": "-- Select --",
        "sex-option-male": "Male",
        "sex-option-female": "Female",
        "label-weight": "Weight (kg)",
        "placeholder-weight": "e.g., 70",
        "label-height": "Height (cm)",
        "placeholder-height": "e.g., 160",
        "label-contact": "Phone Number",
        "placeholder-contact": "05xxxxxxxx",
        "medical-title": "Medical History",
        "cardiac-title": "Heart Diseases",
        "label-hypertension": "High Blood Pressure",
        "label-cad": "Coronary Artery Disease",
        "label-heartFailure": "Heart Failure",
        "label-atrialFib": "Atrial Fibrillation",
        "label-murmur": "Heart Murmur",
        "neuro-title": "Neurological Diseases",
        "label-stroke": "Previous Stroke / TIA",
        "label-carotidBruit": "Carotid Bruit",
        "respiratory-title": "Respiratory Diseases",
        "label-copd": "COPD / Asthma",
        "label-sleepApnea": "Sleep Apnea",
        "renal-title": "Kidney, Liver, Blood",
        "label-ckd": "Chronic Kidney Disease",
        "label-liverDisease": "Liver Disease",
        "label-bleedingDisorder": "Bleeding Disorder",
        "label-anticoagulants": "On Blood Thinners",
        "metabolic-title": "Other Diseases",
        "label-diabetes": "Diabetes",
        "label-gerd": "GERD / Acid Reflux",
        "label-otherMedical": "Other Conditions (e.g., Parkinson's, thyroid...)",
        "placeholder-otherMedical": "Specify if any",
        "symptoms-title": "Current Symptoms",
        "label-chestPain": "Chest Pain",
        "label-palpitations": "Palpitations",
        "label-dyspnea": "Shortness of Breath",
        "label-syncope": "Fainting / Severe Dizziness",
        "label-fatigue": "Severe Fatigue",
        "label-noSymptoms": "No Symptoms",
        "meds-title": "Medications & Allergies",
        "label-medications": "Medications you take (names and doses)",
        "placeholder-medications": "e.g., Aspirin 81mg once daily",
        "scan-btn-text": "Take Medication Photo",
        "label-allergies": "Allergies to (drugs, food, latex...)",
        "placeholder-allergies": "e.g., penicillin, shrimp...",
        "additional-title": "Additional Information",
        "label-smoking": "Smoking",
        "smoking-never": "Never",
        "smoking-former": "Former",
        "smoking-current": "Current",
        "label-alcohol": "Alcohol",
        "alcohol-none": "None",
        "alcohol-moderate": "Moderate",
        "alcohol-heavy": "Heavy",
        "label-surgicalHistory": "Previous Surgeries",
        "placeholder-surgicalHistory": "e.g., Appendectomy 2015",
        "label-dental": "Dental Issues (loose teeth, dentures...)",
        "placeholder-dental": "Describe",
        "vitals-title": "Vital Signs (optional)",
        "label-bpSystolic": "Systolic BP",
        "placeholder-bpSystolic": "e.g., 120",
        "label-bpDiastolic": "Diastolic BP",
        "placeholder-bpDiastolic": "e.g., 80",
        "label-heartRate": "Heart Rate",
        "placeholder-heartRate": "e.g., 70",
        "label-respRate": "Respiratory Rate",
        "placeholder-respRate": "e.g., 16",
        "label-spo2": "Oxygen Saturation (%)",
        "placeholder-spo2": "e.g., 98",
        "label-temperature": "Temperature (°C)",
        "placeholder-temperature": "e.g., 36.5",
        "consent-text": "I agree to fill this form voluntarily, and I understand that this information will help the anesthesia team provide safe care.",
        "submit-btn": "Save",
        "status-submitting": "Submitting...",
        "error-age": "❌ Age is required.",
        "error-name": "❌ Name is required.",
        "success": "✅ Data saved successfully!",
        "error": "❌ Error saving data.",
        "ocr_processing": "Processing medication...",
        "ocr_success": "Medication name added!",
        "ocr_failed": "Could not identify medication. Try again.",
        "print-btn-text": "Print",
        "autosave-text": "Auto-saved",
        "meds-word-count-label": "words",
        "bmi-label": "BMI",
        "bmi-underweight": "Underweight",
        "bmi-normal": "Normal",
        "bmi-overweight": "Overweight",
        "bmi-obese": "Obese",
        "bmi-morbid": "Morbidly Obese",
        "bmi-airway": "Airway Risk",
        "asa-label": "Estimated ASA Class",
        "asa-1-desc": "Healthy patient, no disease",
        "asa-2-desc": "Mild systemic disease",
        "asa-3-desc": "Severe systemic disease",
        "asa-4-desc": "Constant threat to life",
        "vital-normal": "Normal",
        "vital-high": "High",
        "vital-low": "Low",
        "vital-critical": "Critical"
    },
    ur: {
        "lang-label": "🌐 زبان",
        "header-title": "قبل از بے ہوشی کی اسکریننگ",
        "header-tagline": "آپریشن سے پہلے آپ کی حالت کا جائزہ لینے کا آسان فارم",
        "demographics-title": "آپ کی معلومات",
        "label-fullName": "پورا نام *",
        "placeholder-fullName": "اپنا پورا نام درج کریں",
        "label-age": "عمر *",
        "placeholder-age": "مثال: ٣٥",
        "label-sex": "جنس",
        "sex-option-none": "-- منتخب کریں --",
        "sex-option-male": "مرد",
        "sex-option-female": "عورت",
        "label-weight": "وزن (کلوگرام)",
        "placeholder-weight": "مثال: ٧٠",
        "label-height": "قد (سینٹی میٹر)",
        "placeholder-height": "مثال: ١٦٠",
        "label-contact": "فون نمبر",
        "placeholder-contact": "٠٥xxxxxxxx",
        "medical-title": "طبی تاریخ",
        "cardiac-title": "دل کے امراض",
        "label-hypertension": "ہائی بلڈ پریشر",
        "label-cad": "دل کی شریانوں کا تنگ ہونا",
        "label-heartFailure": "دل کی ناکامی",
        "label-atrialFib": "دل کی بے قاعدہ دھڑکن",
        "label-murmur": "دل میں شوشرہ",
        "neuro-title": "اعصابی امراض",
        "label-stroke": "پہلے فالج کا دورہ",
        "label-carotidBruit": "گردن کی شریان میں شوشرہ",
        "respiratory-title": "سانس کے امراض",
        "label-copd": "سی او پی ڈی / دمہ",
        "label-sleepApnea": "نیند میں سانس رکنا",
        "renal-title": "گردے، جگر اور خون",
        "label-ckd": "دائمی گردے کی بیماری",
        "label-liverDisease": "جگر کی بیماری",
        "label-bleedingDisorder": "خون بہنے کی خرابی",
        "label-anticoagulants": "خون پتلا کرنے والی دوائیں",
        "metabolic-title": "دیگر امراض",
        "label-diabetes": "ذیابیطس",
        "label-gerd": "تیزابیت",
        "label-otherMedical": "دیگر حالات (مثلاً پارکنسن، تھائیرائیڈ...)",
        "placeholder-otherMedical": "اگر کوئی ہو تو بتائیں",
        "symptoms-title": "موجودہ علامات",
        "label-chestPain": "سینے میں درد",
        "label-palpitations": "دھڑکن",
        "label-dyspnea": "سانس لینے میں دشواری",
        "label-syncope": "بے ہوشی / شدید چکر",
        "label-fatigue": "شدید تھکاوٹ",
        "label-noSymptoms": "کوئی علامات نہیں",
        "meds-title": "دوائیں اور الرجی",
        "label-medications": "آپ جو دوائیں لیتے ہیں (نام اور مقدار)",
        "placeholder-medications": "مثال: اسپرین ٨١مگ روزانہ",
        "scan-btn-text": "دوا کی تصویر لیں",
        "label-allergies": "الرجی (دوائی، کھانا، لیٹیکس...)",
        "placeholder-allergies": "مثال: پینسلین، جھینگا...",
        "additional-title": "اضافی معلومات",
        "label-smoking": "تمباکو نوشی",
        "smoking-never": "کبھی نہیں",
        "smoking-former": "پہلے کرتے تھے",
        "smoking-current": "اب بھی کرتے ہیں",
        "label-alcohol": "شراب",
        "alcohol-none": "نہیں",
        "alcohol-moderate": "تھوڑی",
        "alcohol-heavy": "بہت",
        "label-surgicalHistory": "پچھلے آپریشن",
        "placeholder-surgicalHistory": "مثال: اپینڈکس ٢٠١٥",
        "label-dental": "دانتوں کے مسائل (ڈھیلے دانت، ڈینچر...)",
        "placeholder-dental": "بیان کریں",
        "vitals-title": "اہم علامات (اختیاری)",
        "label-bpSystolic": "سسٹولک بلڈ پریشر",
        "placeholder-bpSystolic": "مثال ١٢٠",
        "label-bpDiastolic": "ڈائیسٹولک بلڈ پریشر",
        "placeholder-bpDiastolic": "مثال ٨٠",
        "label-heartRate": "دل کی دھڑکن",
        "placeholder-heartRate": "مثال ٧٠",
        "label-respRate": "سانس کی رفتار",
        "placeholder-respRate": "مثال ١٦",
        "label-spo2": "آکسیجن کی سطح (%)",
        "placeholder-spo2": "مثال ٩٨",
        "label-temperature": "درجہ حرارت (°C)",
        "placeholder-temperature": "مثال ٣٦.٥",
        "consent-text": "میں یہ فارم رضاکارانہ طور پر بھرنے سے اتفاق کرتا ہوں، اور سمجھتا ہوں کہ یہ معلومات بے ہوشی کی ٹیم کو محفوظ دیکھ بھال فراہم کرنے میں مدد دے گی۔",
        "submit-btn": "گوگل شیٹ میں محفوظ کریں",
        "status-submitting": "بھیجا جا رہا ہے...",
        "error-age": "❌ عمر درکار ہے۔",
        "error-name": "❌ نام درکار ہے۔",
        "success": "✅ ڈیٹا کامیابی سے محفوظ ہو گیا!",
        "error": "❌ ڈیٹا محفوظ کرنے میں خرابی۔",
        "ocr_processing": "دوا کی شناخت ہو رہی ہے...",
        "ocr_success": "دوا کا نام شامل کر دیا گیا!",
        "ocr_failed": "دوا کی شناخت نہیں ہو سکی، دوبارہ کوشش کریں۔",
        "print-btn-text": "پرنٹ",
        "autosave-text": "خودکار محفوظ",
        "meds-word-count-label": "الفاظ",
        "bmi-label": "BMI",
        "bmi-underweight": "کم وزن",
        "bmi-normal": "طبیعی",
        "bmi-overweight": "زیادہ وزن",
        "bmi-obese": "موٹاپا",
        "bmi-morbid": "انتہائی موٹاپا",
        "bmi-airway": "سانس کی نالی کا خطرہ",
        "asa-label": "ASA درجہ بندی",
        "asa-1-desc": "صحت مند",
        "asa-2-desc": "معمولی بیماری",
        "asa-3-desc": "شدید بیماری",
        "asa-4-desc": "زندگی کو خطرہ",
        "vital-normal": "نارمل",
        "vital-high": "زیادہ",
        "vital-low": "کم",
        "vital-critical": "خطرناک"
    },
    hi: {
        "lang-label": "🌐 भाषा",
        "header-title": "प्री-एनेस्थेटिक स्क्रीनिंग",
        "header-tagline": "सर्जरी से पहले आपकी स्थिति का आकलन करने के लिए सरल फॉर्म",
        "demographics-title": "आपकी जानकारी",
        "label-fullName": "पूरा नाम *",
        "placeholder-fullName": "अपना पूरा नाम दर्ज करें",
        "label-age": "आयु *",
        "placeholder-age": "उदाहरण: 35",
        "label-sex": "लिंग",
        "sex-option-none": "-- चुनें --",
        "sex-option-male": "पुरुष",
        "sex-option-female": "महिला",
        "label-weight": "वजन (किग्रा)",
        "placeholder-weight": "उदाहरण: 70",
        "label-height": "ऊंचाई (सेमी)",
        "placeholder-height": "उदाहरण: 160",
        "label-contact": "फोन नंबर",
        "placeholder-contact": "05xxxxxxxx",
        "medical-title": "चिकित्सा इतिहास",
        "cardiac-title": "हृदय रोग",
        "label-hypertension": "उच्च रक्तचाप",
        "label-cad": "हृदय धमनी रोग",
        "label-heartFailure": "हृदय विफलता",
        "label-atrialFib": "आलिंद फिब्रिलेशन",
        "label-murmur": "हृदय बड़बड़ाहट",
        "neuro-title": "तंत्रिका रोग",
        "label-stroke": "पिछला स्ट्रोक",
        "label-carotidBruit": "कैरोटिड ब्रूट",
        "respiratory-title": "श्वसन रोग",
        "label-copd": "सीओपीडी / अस्थमा",
        "label-sleepApnea": "स्लीप एपनिया",
        "renal-title": "गुर्दा, यकृत, रक्त",
        "label-ckd": "क्रोनिक किडनी रोग",
        "label-liverDisease": "यकृत रोग",
        "label-bleedingDisorder": "रक्तस्राव विकार",
        "label-anticoagulants": "खून पतला करने वाली दवाएं",
        "metabolic-title": "अन्य रोग",
        "label-diabetes": "मधुमेह",
        "label-gerd": "एसिड रिफ्लक्स",
        "label-otherMedical": "अन्य स्थितियाँ (जैसे पार्किंसंस, थायराइड...)",
        "placeholder-otherMedical": "यदि कोई हो तो बताएं",
        "symptoms-title": "वर्तमान लक्षण",
        "label-chestPain": "सीने में दर्द",
        "label-palpitations": "धड़कन",
        "label-dyspnea": "सांस की तकलीफ",
        "label-syncope": "बेहोशी / गंभीर चक्कर",
        "label-fatigue": "गंभीर थकान",
        "label-noSymptoms": "कोई लक्षण नहीं",
        "meds-title": "दवाएं और एलर्जी",
        "label-medications": "आप जो दवाएं लेते हैं (नाम और खुराक)",
        "placeholder-medications": "उदाहरण: एस्पिरिन 81मिग्रा प्रतिदिन",
        "scan-btn-text": "दवा की फोटो लें",
        "label-allergies": "एलर्जी (दवा, भोजन, लेटेक्स...)",
        "placeholder-allergies": "उदाहरण: पेनिसिलिन, झींगा...",
        "additional-title": "अतिरिक्त जानकारी",
        "label-smoking": "धूम्रपान",
        "smoking-never": "कभी नहीं",
        "smoking-former": "पहले करते थे",
        "smoking-current": "अब भी करते हैं",
        "label-alcohol": "शराब",
        "alcohol-none": "नहीं",
        "alcohol-moderate": "थोड़ी",
        "alcohol-heavy": "बहुत",
        "label-surgicalHistory": "पिछली सर्जरी",
        "placeholder-surgicalHistory": "उदाहरण: एपेंडेक्टोमी 2015",
        "label-dental": "दांतों की समस्या (ढीले दांत, डेन्चर...)",
        "placeholder-dental": "वर्णन करें",
        "vitals-title": "महत्वपूर्ण संकेत (वैकल्पिक)",
        "label-bpSystolic": "सिस्टोलिक बीपी",
        "placeholder-bpSystolic": "उदाहरण 120",
        "label-bpDiastolic": "डायस्टोलिक बीपी",
        "placeholder-bpDiastolic": "उदाहरण 80",
        "label-heartRate": "हृदय गति",
        "placeholder-heartRate": "उदाहरण 70",
        "label-respRate": "श्वसन दर",
        "placeholder-respRate": "उदाहरण 16",
        "label-spo2": "ऑक्सीजन स्तर (%)",
        "placeholder-spo2": "उदाहरण 98",
        "label-temperature": "तापमान (°C)",
        "placeholder-temperature": "उदाहरण 36.5",
        "consent-text": "मैं यह फॉर्म स्वेच्छा से भरने के लिए सहमत हूं, और समझता हूं कि यह जानकारी एनेस्थीसिया टीम को सुरक्षित देखभाल प्रदान करने में मदद करेगी।",
        "submit-btn": "डेटाबेस में सहेजें",
        "status-submitting": "भेजा जा रहा है...",
        "error-age": "❌ आयु आवश्यक है।",
        "error-name": "❌ नाम आवश्यक है।",
        "success": "✅ डेटा सफलतापूर्वक सहेजा गया!",
        "error": "❌ डेटा सहेजने में त्रुटि।",
        "ocr_processing": "दवा पहचानी जा रही है...",
        "ocr_success": "दवा का नाम जोड़ दिया गया!",
        "ocr_failed": "दवा की पहचान नहीं हो सकी, फिर से प्रयास करें।",
        "print-btn-text": "प्रिंट",
        "autosave-text": "स्वतः सहेजा गया",
        "meds-word-count-label": "शब्द",
        "bmi-label": "BMI",
        "bmi-underweight": "कम वजन",
        "bmi-normal": "सामान्य",
        "bmi-overweight": "अधिक वजन",
        "bmi-obese": "मोटापा",
        "bmi-morbid": "गंभीर मोटापा",
        "bmi-airway": "वायुमार्ग जोखिम",
        "asa-label": "अनुमानित ASA वर्ग",
        "asa-1-desc": "स्वस्थ रोगी",
        "asa-2-desc": "हल्की बीमारी",
        "asa-3-desc": "गंभीर बीमारी",
        "asa-4-desc": "जीवन को निरंतर खतरा",
        "vital-normal": "सामान्य",
        "vital-high": "उच्च",
        "vital-low": "निम्न",
        "vital-critical": "गंभीर"
    },
    bn: {
        "lang-label": "🌐 ভাষা",
        "header-title": "প্রি-অ্যানেস্থেটিক স্ক্রীনিং",
        "header-tagline": "অপারেশনের আগে আপনার অবস্থা মূল্যায়নের জন্য সহজ ফর্ম",
        "demographics-title": "আপনার তথ্য",
        "label-fullName": "পুরো নাম *",
        "placeholder-fullName": "আপনার পুরো নাম লিখুন",
        "label-age": "বয়স *",
        "placeholder-age": "উদাহরণ: ৩৫",
        "label-sex": "লিঙ্গ",
        "sex-option-none": "-- নির্বাচন করুন --",
        "sex-option-male": "পুরুষ",
        "sex-option-female": "মহিলা",
        "label-weight": "ওজন (কেজি)",
        "placeholder-weight": "উদাহরণ: ৭০",
        "label-height": "উচ্চতা (সেমি)",
        "placeholder-height": "উদাহরণ: ১৬০",
        "label-contact": "ফোন নম্বর",
        "placeholder-contact": "০৫xxxxxxxx",
        "medical-title": "চিকিৎসা ইতিহাস",
        "cardiac-title": "হৃদরোগ",
        "label-hypertension": "উচ্চ রক্তচাপ",
        "label-cad": "করোনারি আর্টারি ডিজিজ",
        "label-heartFailure": "হৃদযন্ত্রের ব্যর্থতা",
        "label-atrialFib": "অ্যাট্রিয়াল ফাইব্রিলেশন",
        "label-murmur": "হৃদয়ে মর্মর",
        "neuro-title": "স্নায়বিক রোগ",
        "label-stroke": "পূর্ববর্তী স্ট্রোক",
        "label-carotidBruit": "ক্যারোটিড ব্রুইট",
        "respiratory-title": "শ্বাসযন্ত্রের রোগ",
        "label-copd": "সিওপিডি / অ্যাজমা",
        "label-sleepApnea": "স্লিপ অ্যাপনিয়া",
        "renal-title": "কিডনি, লিভার, রক্ত",
        "label-ckd": "দীর্ঘস্থায়ী কিডনি রোগ",
        "label-liverDisease": "লিভার রোগ",
        "label-bleedingDisorder": "রক্তপাতের ব্যাধি",
        "label-anticoagulants": "রক্ত পাতলা করার ওষুধ",
        "metabolic-title": "অন্যান্য রোগ",
        "label-diabetes": "ডায়াবেটিস",
        "label-gerd": "অম্বল",
        "label-otherMedical": "অন্যান্য অবস্থা (যেমন পারকিনসন, থাইরয়েড...)",
        "placeholder-otherMedical": "যদি থাকে তবে বলুন",
        "symptoms-title": "বর্তমান লক্ষণ",
        "label-chestPain": "বুকে ব্যথা",
        "label-palpitations": "ধড়ফড়",
        "label-dyspnea": "শ্বাসকষ্ট",
        "label-syncope": "অজ্ঞান হওয়া / প্রচণ্ড মাথা ঘোরা",
        "label-fatigue": "চরম ক্লান্তি",
        "label-noSymptoms": "কোনো লক্ষণ নেই",
        "meds-title": "ওষুধ ও অ্যালার্জি",
        "label-medications": "আপনি যে ওষুধ খান (নাম ও ডোজ)",
        "placeholder-medications": "উদাহরণ: অ্যাসপিরিন ৮১মিগ্রা দৈনিক",
        "scan-btn-text": "ওষুধের ছবি তুলুন",
        "label-allergies": "অ্যালার্জি (ওষুধ, খাবার, ল্যাটেক্স...)",
        "placeholder-allergies": "উদাহরণ: পেনিসিলিন, চিংড়ি...",
        "additional-title": "অতিরিক্ত তথ্য",
        "label-smoking": "ধূমপান",
        "smoking-never": "কখনও না",
        "smoking-former": "আগে করতেন",
        "smoking-current": "এখনও করেন",
        "label-alcohol": "মদ্যপান",
        "alcohol-none": "না",
        "alcohol-moderate": "অল্প",
        "alcohol-heavy": "অনেক",
        "label-surgicalHistory": "পূর্ববর্তী অস্ত্রোপচার",
        "placeholder-surgicalHistory": "উদাহরণ: অ্যাপেন্ডেক্টমি ২০১৫",
        "label-dental": "দাঁতের সমস্যা (ঢিলেঢালা দাঁত, ডেনচার...)",
        "placeholder-dental": "বর্ণনা করুন",
        "vitals-title": "গুরুত্বপূর্ণ লক্ষণ (ঐচ্ছিক)",
        "label-bpSystolic": "সিস্টোলিক ব্লাড প্রেসার",
        "placeholder-bpSystolic": "উদাহরণ ১২০",
        "label-bpDiastolic": "ডায়াস্টোলিক ব্লাড প্রেসার",
        "placeholder-bpDiastolic": "উদাহরণ ৮০",
        "label-heartRate": "হৃদস্পন্দন",
        "placeholder-heartRate": "উদাহরণ ৭০",
        "label-respRate": "শ্বাসপ্রশ্বাসের হার",
        "placeholder-respRate": "উদাহরণ ১৬",
        "label-spo2": "অক্সিজেনের মাত্রা (%)",
        "placeholder-spo2": "উদাহরণ ৯৮",
        "label-temperature": "তাপমাত্রা (°C)",
        "placeholder-temperature": "উদাহরণ ৩৬.৫",
        "consent-text": "আমি স্বেচ্ছায় এই ফর্মটি পূরণ করতে সম্মত, এবং বুঝতে পারি যে এই তথ্য অ্যানেস্থেসিয়া টিমকে নিরাপদ যত্ন প্রদানে সহায়তা করবে।",
        "submit-btn": "সঞ্চয় করুন",
        "status-submitting": "পাঠানো হচ্ছে...",
        "error-age": "❌ বয়স প্রয়োজন।",
        "error-name": "❌ নাম প্রয়োজন।",
        "success": "✅ তথ্য সফলভাবে সংরক্ষিত!",
        "error": "❌ তথ্য সংরক্ষণে ত্রুটি।",
        "ocr_processing": "ওষুধ শনাক্ত করা হচ্ছে...",
        "ocr_success": "ওষুধের নাম যোগ করা হয়েছে!",
        "ocr_failed": "ওষুধ শনাক্ত করা যায়নি, আবার চেষ্টা করুন।",
        "print-btn-text": "মুদ্রণ",
        "autosave-text": "স্বয়ংক্রিয় সঞ্চয়",
        "meds-word-count-label": "শব্দ",
        "bmi-label": "BMI",
        "bmi-underweight": "কম ওজন",
        "bmi-normal": "স্বাভাবিক",
        "bmi-overweight": "অতিরিক্ত ওজন",
        "bmi-obese": "স্থূলতা",
        "bmi-morbid": "গুরুতর",
        "bmi-airway": "শ্বাসনালীর ঝুঁকি",
        "asa-label": "ASA শ্রেণী",
        "asa-1-desc": "সুস্বাস্থ্য",
        "asa-2-desc": "হালকা রোগ",
        "asa-3-desc": "গুরুতর রোগ",
        "asa-4-desc": "জীবনের হুমকি",
        "vital-normal": "স্বাভাবিক",
        "vital-high": "উচ্চ",
        "vital-low": "নিম্ন",
        "vital-critical": "সঙ্কট"
    },
    ne: {
        "lang-label": "🌐 भाषा",
        "header-title": "प्री-एनेस्थेटिक स्क्रीनिंग",
        "header-tagline": "शल्यक्रिया अघि तपाईंको अवस्था मूल्यांकनको लागि सरल फारम",
        "demographics-title": "तपाईंको जानकारी",
        "label-fullName": "पूरा नाम *",
        "placeholder-fullName": "आफ्नो पूरा नाम प्रविष्ट गर्नुहोस्",
        "label-age": "उमेर *",
        "placeholder-age": "उदाहरण: ३५",
        "label-sex": "लिङ्ग",
        "sex-option-none": "-- चयन गर्नुहोस् --",
        "sex-option-male": "पुरुष",
        "sex-option-female": "महिला",
        "label-weight": "तौल (केजी)",
        "placeholder-weight": "उदाहरण: ७०",
        "label-height": "उचाई (सेमी)",
        "placeholder-height": "उदाहरण: १६०",
        "label-contact": "फोन नम्बर",
        "placeholder-contact": "०५xxxxxxxx",
        "medical-title": "चिकित्सा इतिहास",
        "cardiac-title": "मुटु रोग",
        "label-hypertension": "उच्च रक्तचाप",
        "label-cad": "हृदय धमनी रोग",
        "label-heartFailure": "मुटुको असफलता",
        "label-atrialFib": "एट्रियल फाइब्रिलेसन",
        "label-murmur": "मुटु गुन्गुन",
        "neuro-title": "स्नायु रोग",
        "label-stroke": "पहिले स्ट्रोक",
        "label-carotidBruit": "क्यारोटिड ब्रुइट",
        "respiratory-title": "श्वसन रोग",
        "label-copd": "सीओपीडी / दमा",
        "label-sleepApnea": "स्लीप एपनिया",
        "renal-title": "मृगौला, कलेजो, रगत",
        "label-ckd": "दीर्घकालीन मृगौला रोग",
        "label-liverDisease": "कलेजो रोग",
        "label-bleedingDisorder": "रक्तस्राव विकार",
        "label-anticoagulants": "रगत पातलो बनाउने औषधि",
        "metabolic-title": "अन्य रोग",
        "label-diabetes": "मधुमेह",
        "label-gerd": "एसिड रिफ्लक्स",
        "label-otherMedical": "अन्य अवस्थाहरू (जस्तै पार्किन्सन, थाइरोइड...)",
        "placeholder-otherMedical": "यदि छ भने उल्लेख गर्नुहोस्",
        "symptoms-title": "हालका लक्षणहरू",
        "label-chestPain": "छाती दुखाइ",
        "label-palpitations": "धड्कन",
        "label-dyspnea": "सास फेर्न गाह्रो",
        "label-syncope": "बेहोस / गम्भीर चक्कर",
        "label-fatigue": "गम्भीर थकान",
        "label-noSymptoms": "कुनै लक्षण छैन",
        "meds-title": "औषधिहरू र एलर्जी",
        "label-medications": "तपाईंले लिने औषधिहरू (नाम र मात्रा)",
        "placeholder-medications": "उदाहरण: एस्पिरिन ८१मिग्रा दैनिक",
        "scan-btn-text": "औषधिको फोटो लिनुहोस्",
        "label-allergies": "एलर्जी (औषधि, खाना, लेटेक्स...)",
        "placeholder-allergies": "उदाहरण: पेनिसिलिन, झिङ्गे...",
        "additional-title": "अतिरिक्त जानकारी",
        "label-smoking": "धूम्रपान",
        "smoking-never": "कहिल्यै",
        "smoking-former": "पहिले गर्थे",
        "smoking-current": "अहिले पनि गर्छन्",
        "label-alcohol": "मदिरा",
        "alcohol-none": "छैन",
        "alcohol-moderate": "थोरै",
        "alcohol-heavy": "धेरै",
        "label-surgicalHistory": "पहिलेको शल्यक्रिया",
        "placeholder-surgicalHistory": "उदाहरण: एपेन्डेक्टोमी २०१५",
        "label-dental": "दाँत समस्या (खुकुलो दाँत, डेन्चर...)",
        "placeholder-dental": "वर्णन गर्नुहोस्",
        "vitals-title": "महत्त्वपूर्ण संकेत (वैकल्पिक)",
        "label-bpSystolic": "सिस्टोलिक बीपी",
        "placeholder-bpSystolic": "उदाहरण १२०",
        "label-bpDiastolic": "डायस्टोलिक बीपी",
        "placeholder-bpDiastolic": "उदाहरण ८०",
        "label-heartRate": "मुटुको दर",
        "placeholder-heartRate": "उदाहरण ७०",
        "label-respRate": "श्वसन दर",
        "placeholder-respRate": "उदाहरण १६",
        "label-spo2": "अक्सिजन स्तर (%)",
        "placeholder-spo2": "उदाहरण ९८",
        "label-temperature": "तापक्रम (°C)",
        "placeholder-temperature": "उदाहरण ३६.५",
        "consent-text": "म स्वेच्छाले यो फारम भर्न सहमत छु, र बुझ्दछु कि यो जानकारीले एनेस्थेसिया टोलीलाई सुरक्षित हेरचाह प्रदान गर्न मद्दत गर्नेछ।",
        "submit-btn": "सुरक्षित गर्नुहोस्",
        "status-submitting": "पठाउँदै...",
        "error-age": "❌ उमेर आवश्यक छ।",
        "error-name": "❌ नाम आवश्यक छ।",
        "success": "✅ डाटा सफलतापूर्वक सुरक्षित!",
        "error": "❌ डाटा सुरक्षित गर्न त्रुटि।",
        "ocr_processing": "औषधि पहिचान हुँदै...",
        "ocr_success": "औषधिको नाम थपियो!",
        "ocr_failed": "औषधि पहिचान हुन सकेन, फेरि प्रयास गर्नुहोस्।",
        "print-btn-text": "प्रिन्ट",
        "autosave-text": "स्वतः सुरक्षित",
        "meds-word-count-label": "शब्द",
        "bmi-label": "BMI",
        "bmi-underweight": "कम तौल",
        "bmi-normal": "सामान्य",
        "bmi-overweight": "ढिलो",
        "bmi-obese": "मोटोपन",
        "bmi-morbid": "गम्भीर",
        "bmi-airway": "श्वास मार्ग जोखिम",
        "asa-label": "ASA वर्ग",
        "asa-1-desc": "स्वस्थ",
        "asa-2-desc": "हल्का रोग",
        "asa-3-desc": "गम्भीर रोग",
        "asa-4-desc": "जीवनलाई खतरा",
        "vital-normal": "सामान्य",
        "vital-high": "उच्च",
        "vital-low": "न्यून",
        "vital-critical": "गम्भीर"
    },
    fr: {
        "lang-label": "🌐 Langue",
        "header-title": "Évaluation pré-anesthésique",
        "header-tagline": "Formulaire simple pour évaluer votre état avant l'opération",
        "demographics-title": "Vos informations",
        "label-fullName": "Nom complet *",
        "placeholder-fullName": "Entrez votre nom complet",
        "label-age": "Âge *",
        "placeholder-age": "Exemple: 35",
        "label-sex": "Sexe",
        "sex-option-none": "-- Sélectionner --",
        "sex-option-male": "Masculin",
        "sex-option-female": "Féminin",
        "label-weight": "Poids (kg)",
        "placeholder-weight": "Exemple: 70",
        "label-height": "Taille (cm)",
        "placeholder-height": "Exemple: 160",
        "label-contact": "Numéro de téléphone",
        "placeholder-contact": "05xxxxxxxx",
        "medical-title": "Antécédents médicaux",
        "cardiac-title": "Maladies cardiaques",
        "label-hypertension": "Hypertension",
        "label-cad": "Maladie coronarienne",
        "label-heartFailure": "Insuffisance cardiaque",
        "label-atrialFib": "Fibrillation auriculaire",
        "label-murmur": "Souffle cardiaque",
        "neuro-title": "Maladies neurologiques",
        "label-stroke": "AVC antérieur",
        "label-carotidBruit": "Souffle carotidien",
        "respiratory-title": "Maladies respiratoires",
        "label-copd": "BPCO / Asthme",
        "label-sleepApnea": "Apnée du sommeil",
        "renal-title": "Rein, foie, sang",
        "label-ckd": "Maladie rénale chronique",
        "label-liverDisease": "Maladie du foie",
        "label-bleedingDisorder": "Trouble de la coagulation",
        "label-anticoagulants": "Anticoagulants",
        "metabolic-title": "Autres maladies",
        "label-diabetes": "Diabète",
        "label-gerd": "RGO / Reflux acide",
        "label-otherMedical": "Autres conditions (ex. Parkinson, thyroïde...)",
        "placeholder-otherMedical": "Précisez si nécessaire",
        "symptoms-title": "Symptômes actuels",
        "label-chestPain": "Douleur thoracique",
        "label-palpitations": "Palpitations",
        "label-dyspnea": "Essoufflement",
        "label-syncope": "Évanouissement / Vertiges sévères",
        "label-fatigue": "Fatigue sévère",
        "label-noSymptoms": "Aucun symptôme",
        "meds-title": "Médicaments et allergies",
        "label-medications": "Médicaments que vous prenez (noms et doses)",
        "placeholder-medications": "Exemple: Aspirine 81mg une fois par jour",
        "scan-btn-text": "Prendre une photo du médicament",
        "label-allergies": "Allergies (médicaments, aliments, latex...)",
        "placeholder-allergies": "Exemple: pénicilline, crevettes...",
        "additional-title": "Informations supplémentaires",
        "label-smoking": "Tabagisme",
        "smoking-never": "Jamais",
        "smoking-former": "Ancien fumeur",
        "smoking-current": "Fumeur actuel",
        "label-alcohol": "Alcool",
        "alcohol-none": "Aucun",
        "alcohol-moderate": "Modéré",
        "alcohol-heavy": "Important",
        "label-surgicalHistory": "Antécédents chirurgicaux",
        "placeholder-surgicalHistory": "Exemple: Appendicectomie 2015",
        "label-dental": "Problèmes dentaires (dents mobiles, dentiers...)",
        "placeholder-dental": "Décrivez",
        "vitals-title": "Signes vitaux (optionnel)",
        "label-bpSystolic": "Pression systolique",
        "placeholder-bpSystolic": "Exemple 120",
        "label-bpDiastolic": "Pression diastolique",
        "placeholder-bpDiastolic": "Exemple 80",
        "label-heartRate": "Fréquence cardiaque",
        "placeholder-heartRate": "Exemple 70",
        "label-respRate": "Fréquence respiratoire",
        "placeholder-respRate": "Exemple 16",
        "label-spo2": "Saturation O₂ (%)",
        "placeholder-spo2": "Exemple 98",
        "label-temperature": "Température (°C)",
        "placeholder-temperature": "Exemple 36.5",
        "consent-text": "J'accepte de remplir ce formulaire volontairement, et je comprends que ces informations aideront l'équipe d'anesthésie à fournir des soins sûrs.",
        "submit-btn": "Enregistrer",
        "status-submitting": "Envoi en cours...",
        "error-age": "❌ L'âge est requis.",
        "error-name": "❌ Le nom est requis.",
        "success": "✅ Données enregistrées avec succès !",
        "error": "❌ Erreur lors de l'enregistrement.",
        "ocr_processing": "Identification du médicament...",
        "ocr_success": "Nom du médicament ajouté !",
        "ocr_failed": "Impossible d'identifier le médicament, réessayez.",
        "print-btn-text": "Imprimer",
        "autosave-text": "Sauvegarde auto",
        "meds-word-count-label": "mots",
        "bmi-label": "IMC",
        "bmi-underweight": "Insuffisance pondérale",
        "bmi-normal": "Normal",
        "bmi-overweight": "Surpoids",
        "bmi-obese": "Obèse",
        "bmi-morbid": "Obésité morbide",
        "bmi-airway": "Risque voies aériennes",
        "asa-label": "Classe ASA estimée",
        "asa-1-desc": "Patient sain",
        "asa-2-desc": "Maladie légère",
        "asa-3-desc": "Maladie grave",
        "asa-4-desc": "Menace vitale constante",
        "vital-normal": "Normal",
        "vital-high": "Élevé",
        "vital-low": "Bas",
        "vital-critical": "Critique"
    },
    es: {
        "lang-label": "🌐 Idioma",
        "header-title": "Evaluación preanestésica",
        "header-tagline": "Formulario sencillo para evaluar su estado antes de la cirugía",
        "demographics-title": "Su información",
        "label-fullName": "Nombre completo *",
        "placeholder-fullName": "Ingrese su nombre completo",
        "label-age": "Edad *",
        "placeholder-age": "Ejemplo: 35",
        "label-sex": "Sexo",
        "sex-option-none": "-- Seleccionar --",
        "sex-option-male": "Masculino",
        "sex-option-female": "Femenino",
        "label-weight": "Peso (kg)",
        "placeholder-weight": "Ejemplo: 70",
        "label-height": "Altura (cm)",
        "placeholder-height": "Ejemplo: 160",
        "label-contact": "Número de teléfono",
        "placeholder-contact": "05xxxxxxxx",
        "medical-title": "Historia médica",
        "cardiac-title": "Enfermedades cardíacas",
        "label-hypertension": "Hipertensión",
        "label-cad": "Enfermedad coronaria",
        "label-heartFailure": "Insuficiencia cardíaca",
        "label-atrialFib": "Fibrilación auricular",
        "label-murmur": "Soplo cardíaco",
        "neuro-title": "Enfermedades neurológicas",
        "label-stroke": "Accidente cerebrovascular previo",
        "label-carotidBruit": "Soplo carotídeo",
        "respiratory-title": "Enfermedades respiratorias",
        "label-copd": "EPOC / Asma",
        "label-sleepApnea": "Apnea del sueño",
        "renal-title": "Riñón, hígado, sangre",
        "label-ckd": "Enfermedad renal crónica",
        "label-liverDisease": "Enfermedad hepática",
        "label-bleedingDisorder": "Trastorno hemorrágico",
        "label-anticoagulants": "Anticoagulantes",
        "metabolic-title": "Otras enfermedades",
        "label-diabetes": "Diabetes",
        "label-gerd": "Reflujo ácido",
        "label-otherMedical": "Otras condiciones (ej. Parkinson, tiroides...)",
        "placeholder-otherMedical": "Especifique si las hay",
        "symptoms-title": "Síntomas actuales",
        "label-chestPain": "Dolor en el pecho",
        "label-palpitations": "Palpitaciones",
        "label-dyspnea": "Falta de aire",
        "label-syncope": "Desmayo / Mareos intensos",
        "label-fatigue": "Fatiga severa",
        "label-noSymptoms": "Sin síntomas",
        "meds-title": "Medicamentos y alergias",
        "label-medications": "Medicamentos que toma (nombres y dosis)",
        "placeholder-medications": "Ejemplo: Aspirina 81mg una vez al día",
        "scan-btn-text": "Tomar foto del medicamento",
        "label-allergies": "Alergias a (medicamentos, alimentos, látex...)",
        "placeholder-allergies": "Ejemplo: penicilina, camarones...",
        "additional-title": "Información adicional",
        "label-smoking": "Tabaquismo",
        "smoking-never": "Nunca",
        "smoking-former": "Exfumador",
        "smoking-current": "Fumador actual",
        "label-alcohol": "Alcohol",
        "alcohol-none": "Ninguno",
        "alcohol-moderate": "Moderado",
        "alcohol-heavy": "Abundante",
        "label-surgicalHistory": "Cirugías previas",
        "placeholder-surgicalHistory": "Ejemplo: Apendicectomía 2015",
        "label-dental": "Problemas dentales (dientes flojos, dentaduras...)",
        "placeholder-dental": "Describa",
        "vitals-title": "Signos vitales (opcional)",
        "label-bpSystolic": "Presión sistólica",
        "placeholder-bpSystolic": "Ejemplo 120",
        "label-bpDiastolic": "Presión diastólica",
        "placeholder-bpDiastolic": "Ejemplo 80",
        "label-heartRate": "Frecuencia cardíaca",
        "placeholder-heartRate": "Ejemplo 70",
        "label-respRate": "Frecuencia respiratoria",
        "placeholder-respRate": "Ejemplo 16",
        "label-spo2": "Saturación de oxígeno (%)",
        "placeholder-spo2": "Ejemplo 98",
        "label-temperature": "Temperatura (°C)",
        "placeholder-temperature": "Ejemplo 36.5",
        "consent-text": "Acepto completar este formulario voluntariamente, y entiendo que esta información ayudará al equipo de anestesia a brindar una atención segura.",
        "submit-btn": "Guardar",
        "status-submitting": "Enviando...",
        "error-age": "❌ La edad es obligatoria.",
        "error-name": "❌ El nombre es obligatorio.",
        "success": "✅ ¡Datos guardados correctamente!",
        "error": "❌ Error al guardar los datos.",
        "ocr_processing": "Identificando medicamento...",
        "ocr_success": "¡Nombre del medicamento añadido!",
        "ocr_failed": "No se pudo identificar el medicamento, intente de nuevo.",
        "print-btn-text": "Imprimir",
        "autosave-text": "Guardado auto",
        "meds-word-count-label": "palabras",
        "bmi-label": "IMC",
        "bmi-underweight": "Bajo peso",
        "bmi-normal": "Normal",
        "bmi-overweight": "Sobrepeso",
        "bmi-obese": "Obeso",
        "bmi-morbid": "Obesidad mórbida",
        "bmi-airway": "Riesgo vía aérea",
        "asa-label": "Clase ASA estimada",
        "asa-1-desc": "Paciente sano",
        "asa-2-desc": "Enfermedad leve",
        "asa-3-desc": "Enfermedad grave",
        "asa-4-desc": "Amenaza constante a la vida",
        "vital-normal": "Normal",
        "vital-high": "Alto",
        "vital-low": "Bajo",
        "vital-critical": "Crítico"
    },
    id: {
        "lang-label": "🌐 Bahasa",
        "header-title": "Skrining Pra‑Anestesi",
        "header-tagline": "Formulir sederhana untuk menilai kondisi Anda sebelum operasi",
        "demographics-title": "Data Diri",
        "label-fullName": "Nama Lengkap *",
        "placeholder-fullName": "Masukkan nama lengkap",
        "label-age": "Usia *",
        "placeholder-age": "Contoh: 35",
        "label-sex": "Jenis Kelamin",
        "sex-option-none": "-- Pilih --",
        "sex-option-male": "Laki‑laki",
        "sex-option-female": "Perempuan",
        "label-weight": "Berat Badan (kg)",
        "placeholder-weight": "Contoh: 70",
        "label-height": "Tinggi Badan (cm)",
        "placeholder-height": "Contoh: 160",
        "label-contact": "Nomor Telepon",
        "placeholder-contact": "08xxxxxxxxxx",
        "medical-title": "Riwayat Kesehatan",
        "cardiac-title": "Penyakit Jantung",
        "label-hypertension": "Tekanan Darah Tinggi",
        "label-cad": "Penyempitan Pembuluh Darah Jantung",
        "label-heartFailure": "Gagal Jantung",
        "label-atrialFib": "Gangguan Irama Jantung (Fibrilasi Atrium)",
        "label-murmur": "Bunyi Jantung Tambahan (Murmur)",
        "neuro-title": "Penyakit Saraf",
        "label-stroke": "Riwayat Stroke",
        "label-carotidBruit": "Bunyi di Pembuluh Darah Leher",
        "respiratory-title": "Penyakit Paru‑paru",
        "label-copd": "PPOK / Asma",
        "label-sleepApnea": "Henti Napas Saat Tidur",
        "renal-title": "Ginjal, Hati, dan Darah",
        "label-ckd": "Penyakit Ginjal Kronis",
        "label-liverDisease": "Penyakit Hati",
        "label-bleedingDisorder": "Gangguan Pendarahan",
        "label-anticoagulants": "Obat Pengencer Darah",
        "metabolic-title": "Penyakit Lainnya",
        "label-diabetes": "Diabetes",
        "label-gerd": "Asam Lambung (GERD)",
        "label-otherMedical": "Kondisi Lain (mis. Parkinson, tiroid...)",
        "placeholder-otherMedical": "Sebutkan jika ada",
        "symptoms-title": "Gejala Saat Ini",
        "label-chestPain": "Nyeri Dada",
        "label-palpitations": "Jantung Berdebar",
        "label-dyspnea": "Sesak Napas",
        "label-syncope": "Pingsan / Pusing Berat",
        "label-fatigue": "Lelah Berlebihan",
        "label-noSymptoms": "Tidak Ada Gejala",
        "meds-title": "Obat‑obatan & Alergi",
        "label-medications": "Obat yang sedang diminum (nama & dosis)",
        "placeholder-medications": "Contoh: Aspirin 81mg sehari sekali",
        "scan-btn-text": "Foto Obat",
        "label-allergies": "Alergi terhadap (obat, makanan, lateks...)",
        "placeholder-allergies": "Contoh: penisilin, udang...",
        "additional-title": "Informasi Tambahan",
        "label-smoking": "Merokok",
        "smoking-never": "Tidak pernah",
        "smoking-former": "Dulu merokok",
        "smoking-current": "Masih merokok",
        "label-alcohol": "Alkohol",
        "alcohol-none": "Tidak minum",
        "alcohol-moderate": "Sedikit",
        "alcohol-heavy": "Sering/banyak",
        "label-surgicalHistory": "Riwayat Operasi",
        "placeholder-surgicalHistory": "Contoh: operasi usus buntu 2015",
        "label-dental": "Masalah Gigi (gigi goyang, gigi palsu...)",
        "placeholder-dental": "Sebutkan",
        "vitals-title": "Tanda Vital (opsional)",
        "label-bpSystolic": "Tekanan Darah Sistolik",
        "placeholder-bpSystolic": "Contoh 120",
        "label-bpDiastolic": "Tekanan Darah Diastolik",
        "placeholder-bpDiastolic": "Contoh 80",
        "label-heartRate": "Denyut Jantung",
        "placeholder-heartRate": "Contoh 70",
        "label-respRate": "Laju Napas",
        "placeholder-respRate": "Contoh 16",
        "label-spo2": "Kadar Oksigen (%)",
        "placeholder-spo2": "Contoh 98",
        "label-temperature": "Suhu Tubuh (°C)",
        "placeholder-temperature": "Contoh 36.5",
        "consent-text": "Saya setuju mengisi formulir ini secara sukarela, dan saya memahami bahwa informasi ini akan membantu tim anestesi memberikan perawatan yang aman.",
        "submit-btn": "Simpan",
        "status-submitting": "Mengirim...",
        "error-age": "❌ Usia harus diisi.",
        "error-name": "❌ Nama harus diisi.",
        "success": "✅ Data berhasil disimpan!",
        "error": "❌ Gagal menyimpan data.",
        "ocr_processing": "Memproses obat...",
        "ocr_success": "Nama obat ditambahkan!",
        "ocr_failed": "Tidak dapat mengidentifikasi obat, coba lagi.",
        "print-btn-text": "Cetak",
        "autosave-text": "Tersimpan otomatis",
        "meds-word-count-label": "kata",
        "bmi-label": "IMT",
        "bmi-underweight": "Berat Badan Kurang",
        "bmi-normal": "Normal",
        "bmi-overweight": "Kelebihan Berat Badan",
        "bmi-obese": "Obesitas",
        "bmi-morbid": "Obesitas Morbid",
        "bmi-airway": "Risiko Jalan Napas",
        "asa-label": "Perkiraan Kelas ASA",
        "asa-1-desc": "Pasien sehat",
        "asa-2-desc": "Penyakit ringan",
        "asa-3-desc": "Penyakit berat",
        "asa-4-desc": "Ancaman jiwa terus-menerus",
        "vital-normal": "Normal",
        "vital-high": "Tinggi",
        "vital-low": "Rendah",
        "vital-critical": "Kritis"
    }
};

// Merge newKeys into translations
for (const lang in newKeys) {
    if (translations[lang]) Object.assign(translations[lang], newKeys[lang]);
}

// ==================== DOMContentLoaded ====================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('screeningForm');
    const langSelect = document.getElementById('langSelect');
    const body = document.body;
    const medsTextarea = document.getElementById('medications');
    const scanBtn = document.getElementById('scanMedsBtn');
    const fileInput = document.getElementById('medImageInput');
    const ocrStatus = document.getElementById('ocrStatus');

    const age = document.getElementById('age');
    const hypertension = document.getElementById('hypertension');
    const diabetes = document.getElementById('diabetes');
    const cad = document.getElementById('cad');
    const heartFailure = document.getElementById('heartFailure');
    const atrialFib = document.getElementById('atrialFib');
    const stroke = document.getElementById('stroke');
    const copd = document.getElementById('copd');
    const ckd = document.getElementById('ckd');
    const liverDisease = document.getElementById('liverDisease');
    const bleedingDisorder = document.getElementById('bleedingDisorder');
    const murmur = document.getElementById('murmur');
    const carotidBruit = document.getElementById('carotidBruit');
    const anticoagulants = document.getElementById('anticoagulants');
    const chestPain = document.getElementById('chestPain');
    const palpitations = document.getElementById('palpitations');
    const dyspnea = document.getElementById('dyspnea');
    const syncope = document.getElementById('syncope');
    const fatigue = document.getElementById('fatigue');
    const noSymptoms = document.getElementById('noSymptoms');
    const bpSystolic = document.getElementById('bpSystolic');
    const smoking = document.getElementById('smoking');
    const sleepApnea = document.getElementById('sleepApnea');
    const statusMsg = document.getElementById('statusMessage');
    const consentCheck = document.getElementById('consentCheck');
    const weightEl = document.getElementById('weight');
    const heightEl = document.getElementById('height');
    const alcoholEl = document.getElementById('alcohol');
    const familyMH = document.getElementById('familyMH');
    const npoStatus = document.getElementById('npoStatus');
    const prevAnesthesia = document.getElementById('prevAnesthesia');
    const assessmentDate = document.getElementById('assessmentDate');
    const bmiDisplay = document.getElementById('bmiDisplay');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');
    const bmiNote = document.getElementById('bmiNote');
    const asaBadge = document.getElementById('asaBadge');
    const asaDesc = document.getElementById('asaDesc');
    const medsCountEl = document.getElementById('meds-count');

    if (assessmentDate && !assessmentDate.value) {
        assessmentDate.value = new Date().toISOString().split('T')[0];
    }

    function isChecked(el) { return el ? el.checked : false; }

    // ==================== BMI ====================
    function updateBMI() {
        const w = parseFloat(weightEl?.value || 0);
        const h = parseFloat(heightEl?.value || 0);
        if (!w || !h || h < 50) { if (bmiDisplay) bmiDisplay.style.display = 'none'; return 0; }
        const bmi = w / ((h / 100) ** 2);
        const lang = langSelect.value;
        const t = translations[lang] || translations['en'];
        let cat = '', cls = '', note = '';
        if (bmi < 18.5) { cat = t['bmi-underweight']; cls = 'underweight'; }
        else if (bmi < 25) { cat = t['bmi-normal']; cls = 'normal'; }
        else if (bmi < 30) { cat = t['bmi-overweight']; cls = 'overweight'; }
        else if (bmi < 40) { cat = t['bmi-obese']; cls = 'obese'; note = t['bmi-airway']; }
        else { cat = t['bmi-morbid']; cls = 'morbid'; note = t['bmi-airway']; }
        if (bmiValue) bmiValue.textContent = bmi.toFixed(1);
        if (bmiCategory) { bmiCategory.textContent = cat; bmiCategory.className = 'bmi-badge ' + cls; }
        if (bmiNote) bmiNote.textContent = note;
        if (bmiDisplay) bmiDisplay.style.display = 'flex';
        return bmi;
    }
    if (weightEl) weightEl.addEventListener('input', () => { updateBMI(); updateASA(); updateProgress(); });
    if (heightEl) heightEl.addEventListener('input', () => { updateBMI(); updateASA(); updateProgress(); });

    // ==================== Vital signs ====================
    const vitalRanges = {
        bpSystolic: { low:80, high:140, critical:180 },
        bpDiastolic: { low:50, high:90, critical:120 },
        heartRate: { low:50, high:100, critical:130 },
        respRate: { low:10, high:20, critical:30 },
        spo2: { low:95, high:100, critical:90, reverseDir:true },
        temperature: { low:36.1, high:37.5, critical:39 }
    };
    function checkVital(id) {
        const el = document.getElementById(id);
        const hintEl = document.getElementById('hint-' + id);
        if (!el || !hintEl) return;
        const val = parseFloat(el.value);
        if (!val) { el.className = 'vital-input'; hintEl.textContent = ''; hintEl.className = 'vital-hint'; return; }
        const r = vitalRanges[id];
        const t = translations[langSelect.value] || translations['en'];
        let cls = 'v-normal', hcls = 'hint-normal', hint = t['vital-normal'];
        if (r.reverseDir) {
            if (val <= r.critical) { cls='v-danger'; hcls='hint-danger'; hint=t['vital-critical']; }
            else if (val < r.low) { cls='v-warning'; hcls='hint-warning'; hint=t['vital-low']; }
        } else {
            if (val >= r.critical) { cls='v-danger'; hcls='hint-danger'; hint=t['vital-critical']; }
            else if (val > r.high) { cls='v-warning'; hcls='hint-warning'; hint=t['vital-high']; }
            else if (val < r.low) { cls='v-warning'; hcls='hint-warning'; hint=t['vital-low']; }
        }
        el.className = 'vital-input ' + cls;
        hintEl.textContent = hint;
        hintEl.className = 'vital-hint ' + hcls;
    }
    Object.keys(vitalRanges).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', () => { checkVital(id); });
    });

    // ==================== ASA ====================
    function updateASA() {
        if (!asaBadge || !asaDesc) return 1;
        const ageVal = parseInt(age.value) || 0;
        const bmiVal = updateBMI();
        let score = 1;
        if (ageVal >= 60 || isChecked(hypertension) || isChecked(diabetes) ||
            isChecked(copd) || isChecked(sleepApnea) ||
            isChecked(document.getElementById('gerd')) ||
            (smoking && (smoking.value==='Current'||smoking.value==='Former')) ||
            (bmiVal >= 30 && bmiVal < 40)) score = 2;
        if (isChecked(cad) || isChecked(heartFailure) || isChecked(atrialFib) ||
            isChecked(stroke) || isChecked(carotidBruit) || isChecked(ckd) ||
            isChecked(liverDisease) || isChecked(bleedingDisorder) ||
            isChecked(murmur) || ageVal >= 70 || bmiVal >= 40 ||
            (alcoholEl && alcoholEl.value==='Heavy')) score = 3;
        if ((isChecked(heartFailure) && (isChecked(syncope)||isChecked(dyspnea))) ||
            (isChecked(cad) && isChecked(chestPain))) score = 4;
        const t = translations[langSelect.value] || translations['en'];
        const descs = ['', t['asa-1-desc'], t['asa-2-desc'], t['asa-3-desc'], t['asa-4-desc']];
        asaBadge.textContent = ['','I','II','III','IV'][score];
        asaBadge.className = 'asa-badge asa-' + score;
        asaDesc.textContent = descs[score] || '';
        return score;
    }

    // ==================== No symptoms mutual exclusivity ====================
    const symptomCbs = document.querySelectorAll('.symptom-cb');
    const noSymptomCb = document.getElementById('noSymptoms');
    if (noSymptomCb) {
        noSymptomCb.addEventListener('change', () => {
            if (noSymptomCb.checked) symptomCbs.forEach(cb => cb.checked = false);
        });
    }
    symptomCbs.forEach(cb => cb.addEventListener('change', () => {
        if (cb.checked && noSymptomCb) noSymptomCb.checked = false;
    }));

    // ==================== Word counter ====================
    if (medsTextarea && medsCountEl) {
        const refreshCount = () => {
            const words = medsTextarea.value.trim().split(/\s+/).filter(Boolean).length;
            const t = translations[langSelect.value] || translations['en'];
            medsCountEl.textContent = words + ' ' + (t['meds-word-count-label']||'words');
        };
        medsTextarea.addEventListener('input', refreshCount);
    }

    // ==================== Progress ====================
    function updateProgress() {
        const nameOk = !!(document.getElementById('fullName').value||'').trim();
        const ageOk = !!(age.value||'').trim();
        const medHxOk = ['hypertension','cad','heartFailure','atrialFib','murmur','stroke','carotidBruit',
                         'copd','sleepApnea','ckd','liverDisease','bleedingDisorder','anticoagulants','diabetes','gerd']
                        .some(id=>{ const e=document.getElementById(id); return e&&e.checked; }) ||
                        !!(document.getElementById('otherMedical').value||'').trim();
        const sympOk = ['chestPain','palpitations','dyspnea','syncope','fatigue','noSymptoms']
                        .some(id=>{ const e=document.getElementById(id); return e&&e.checked; });
        const vitalOk = ['bpSystolic','bpDiastolic','heartRate']
                        .some(id=>{ const e=document.getElementById(id); return (e&&e.value||'').trim(); });
        const medsOk = !!(medsTextarea.value||'').trim() || !!(document.getElementById('allergies').value||'').trim();
        const addlOk = !!(document.getElementById('surgicalHistory').value||'').trim() ||
                       !!(document.getElementById('prevAnesthesia').value||'').trim() ||
                       !!(document.getElementById('dental').value||'').trim() ||
                       (npoStatus && npoStatus.value !== 'Unknown');
        const steps = [nameOk, ageOk, medHxOk, sympOk, medsOk, vitalOk, consentCheck.checked];
        const pct = Math.round(steps.filter(Boolean).length / steps.length * 100);
        const bar = document.getElementById('progress-bar');
        if (bar) bar.style.width = pct + '%';
        const setDone = (id, cond) => {
            const el = document.getElementById(id);
            if (el) { el.textContent = cond ? '✔' : ''; el.className = 'section-done' + (cond ? ' visible' : ''); }
        };
        setDone('done-demographics', nameOk && ageOk);
        setDone('done-medical', medHxOk);
        setDone('done-symptoms', sympOk);
        setDone('done-meds', medsOk);
        setDone('done-additional', addlOk);
        setDone('done-vitals', vitalOk);
    }
    document.querySelectorAll('input,select,textarea').forEach(el => {
        el.addEventListener('input', updateProgress);
        el.addEventListener('change', updateProgress);
    });

    // ==================== Auto-save ====================
    const LS_KEY = 'preanesthetic_form_v1';
    const AUTOSAVE_IDS = ['fullName','age','sex','weight','height','contact','fileNumber','assessmentDate',
        'hypertension','cad','heartFailure','atrialFib','murmur','stroke','carotidBruit',
        'copd','sleepApnea','ckd','liverDisease','bleedingDisorder','anticoagulants',
        'diabetes','gerd','familyMH','otherMedical',
        'chestPain','palpitations','dyspnea','syncope','fatigue','noSymptoms',
        'medications','allergies','smoking','alcohol','npoStatus','surgicalHistory',
        'prevAnesthesia','dental',
        'bpSystolic','bpDiastolic','heartRate','respRate','spo2','temperature'];
    function saveToLS() {
        const data = {};
        AUTOSAVE_IDS.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            data[id] = el.type==='checkbox' ? el.checked : el.value;
        });
        localStorage.setItem(LS_KEY, JSON.stringify(data));
        const badge = document.getElementById('autosave-badge');
        if (badge) { badge.style.display='flex'; setTimeout(()=>badge.style.display='none', 2500); }
    }
    function loadFromLS() {
        try {
            const raw = localStorage.getItem(LS_KEY);
            if (!raw) return;
            const data = JSON.parse(raw);
            AUTOSAVE_IDS.forEach(id => {
                const el = document.getElementById(id);
                if (!el || data[id]===undefined) return;
                if (el.type==='checkbox') el.checked = !!data[id];
                else el.value = data[id];
            });
        } catch(e) { console.warn(e); }
    }
    setInterval(saveToLS, 30000);
    document.querySelectorAll('input,select,textarea').forEach(el => el.addEventListener('change', saveToLS));
    loadFromLS();

    // ==================== Dark mode ====================
    const darkBtn = document.getElementById('darkModeToggle');
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark-mode');
        if (darkBtn) darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    if (darkBtn) {
        darkBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark ? 'on' : 'off');
            darkBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // ==================== Print & scroll ====================
    const printBtn = document.getElementById('printBtn');
    if (printBtn) printBtn.addEventListener('click', () => window.print());
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => scrollBtn.classList.toggle('show', window.scrollY > 400));
        scrollBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
    }

    // ==================== Language ====================
    function applyLanguage(lang) {
        body.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        const t = translations[lang] || translations['en'];
        const fallback = translations['en'];
        for (let key in t) {
            if (key.startsWith('placeholder-')) continue;
            const el = document.getElementById(key);
            if (!el) continue;
            if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' && el.tagName !== 'SELECT' && el.tagName !== 'BUTTON') {
                el.innerText = t[key];
            }
        }
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = t[key] || (fallback && fallback[key]) || '';
        });
        ['sex-option-none','sex-option-male','sex-option-female',
         'smoking-never','smoking-former','smoking-current',
         'alcohol-none','alcohol-moderate','alcohol-heavy',
         'npo-unknown','npo-yes','npo-no'].forEach(id => {
            const opt = document.getElementById(id);
            if (opt) opt.innerText = t[id] || (fallback && fallback[id]) || id;
        });
        const submitEl = document.getElementById('submit-btn');
        if (submitEl) submitEl.innerHTML = `<i class="fas fa-save"></i> <span id="submit-btn-text">${t['submit-btn']||'Save'}</span>`;
        const scanEl = document.getElementById('scan-btn-text');
        if (scanEl) scanEl.innerText = t['scan-btn-text']||'Scan';
        const printEl = document.getElementById('print-btn-text');
        if (printEl) printEl.innerText = t['print-btn-text']||'Print';
        const autosaveEl = document.getElementById('autosave-text');
        if (autosaveEl) autosaveEl.innerText = t['autosave-text']||'Auto-saved';
        const bmiLblEl = document.getElementById('bmi-label-text');
        if (bmiLblEl) bmiLblEl.innerText = t['bmi-label']||'BMI';
        updateBMI(); updateASA();
        Object.keys(vitalRanges).forEach(id => checkVital(id));
    }
    langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
    applyLanguage('ar');

    // ==================== OCR ====================
    async function performOCR(imageFile) {
        ocrStatus.innerText = translations[langSelect.value]['ocr_processing'] || 'Processing...';
        ocrStatus.style.color = 'var(--primary)';
        const formData = new FormData();
        formData.append('image', imageFile);
        try {
            const response = await fetch('/api/ocr', { method: 'POST', body: formData });
            const data = await response.json();
            if (data.success && data.medicationName) {
                const current = medsTextarea.value;
                medsTextarea.value = current + (current ? '\n' : '') + data.medicationName;
                ocrStatus.innerText = translations[langSelect.value]['ocr_success'] || 'Medication name added!';
                ocrStatus.style.color = 'green';
            } else {
                ocrStatus.innerText = translations[langSelect.value]['ocr_failed'] || 'Could not identify medication.';
                ocrStatus.style.color = 'red';
            }
        } catch (error) {
            ocrStatus.innerText = translations[langSelect.value]['ocr_failed'] || 'Error processing image.';
            ocrStatus.style.color = 'red';
        }
        setTimeout(() => { ocrStatus.innerText = ''; ocrStatus.style.color = 'var(--primary)'; }, 4000);
    }
    scanBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) performOCR(file);
        fileInput.value = '';
    });

    // ==================== SUPABASE SUBMISSION (NO RECOMMENDATIONS) ====================
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!consentCheck.checked) {
            alert(translations[langSelect.value]['consent-text'] || 'Please agree to the consent.');
            return;
        }
        statusMsg.innerText = translations[langSelect.value]['status-submitting'] || 'Submitting...';
        if (!age.value || !age.value.trim()) {
            statusMsg.innerText = translations[langSelect.value]['error-age'] || '❌ Age is required.';
            return;
        }
        if (!document.getElementById('fullName').value.trim()) {
            statusMsg.innerText = translations[langSelect.value]['error-name'] || '❌ Full name is required.';
            return;
        }

        const asaClass = updateASA();
        const bmiVal = updateBMI();

        const record = {
            name: document.getElementById('fullName').value.trim(),
            age: age.value,
            sex: document.getElementById('sex').value,
            weight: document.getElementById('weight').value,
            height: document.getElementById('height').value,
            bmi: bmiVal ? bmiVal.toFixed(1) : '',
            contact: document.getElementById('contact').value,
            file_number: document.getElementById('fileNumber').value,
            assessment_date: (assessmentDate && assessmentDate.value) || '',
            npo_status: (npoStatus && npoStatus.value) || '',
            asa_class: asaClass || '',
            family_mh: isChecked(familyMH),
            prev_anesthesia: (prevAnesthesia && prevAnesthesia.value) || '',
            hypertension: isChecked(hypertension),
            diabetes: isChecked(diabetes),
            cad: isChecked(cad),
            heart_failure: isChecked(heartFailure),
            atrial_fib: isChecked(atrialFib),
            stroke: isChecked(stroke),
            copd: isChecked(copd),
            ckd: isChecked(ckd),
            liver_disease: isChecked(liverDisease),
            bleeding_disorder: isChecked(bleedingDisorder),
            murmur: isChecked(murmur),
            carotid_bruit: isChecked(carotidBruit),
            anticoagulants: isChecked(anticoagulants),
            other_medical: document.getElementById('otherMedical').value,
            sleep_apnea: isChecked(sleepApnea),
            gerd: isChecked(document.getElementById('gerd')),
            chest_pain: isChecked(chestPain),
            palpitations: isChecked(palpitations),
            dyspnea: isChecked(dyspnea),
            syncope: isChecked(syncope),
            fatigue: isChecked(fatigue),
            no_symptoms: isChecked(noSymptoms),
            bp_systolic: bpSystolic.value,
            bp_diastolic: document.getElementById('bpDiastolic').value,
            heart_rate: document.getElementById('heartRate').value,
            resp_rate: document.getElementById('respRate').value,
            spo2: document.getElementById('spo2').value,
            temperature: document.getElementById('temperature').value,
            medications: document.getElementById('medications').value,
            allergies: document.getElementById('allergies').value,
            smoking: smoking.value,
            alcohol: document.getElementById('alcohol').value,
            surgical_history: document.getElementById('surgicalHistory').value,
            dental: document.getElementById('dental').value,
            cardio_consult: false,
            neuro_consult: false,
            echo: false,
            ecg: false,
            carotid_doppler: false,
            lab_tests: false,
            haematology_consult: false,
            nephrology_consult: false,
            pulmonary_consult: false
        };

        try {
            const { error } = await supabase.from('assessments').insert([record]);
            if (error) throw error;
            const t = translations[langSelect.value];
            statusMsg.innerText = (t && t['success']) || '✅ Data saved successfully!';
            statusMsg.style.color = 'var(--success)';
            form.reset();
            if (assessmentDate) assessmentDate.value = new Date().toISOString().split('T')[0];
            localStorage.removeItem(LS_KEY);
            updateBMI(); updateASA(); updateProgress();
            consentCheck.checked = false;
            if (bmiDisplay) bmiDisplay.style.display = 'none';
            setTimeout(() => { statusMsg.innerText = ''; statusMsg.style.color = ''; }, 5000);
        } catch (error) {
            const t = translations[langSelect.value];
            statusMsg.innerText = (t && t['error']) || '❌ Error saving data.';
            statusMsg.style.color = 'var(--danger)';
            console.error(error);
        }
    });

    const header = document.getElementById('main-header');
    window.onscroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
    updateBMI(); updateASA(); updateProgress(); loadFromLS();
    setTimeout(() => { updateBMI(); updateASA(); updateProgress(); }, 100);
});
