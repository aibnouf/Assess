document.addEventListener('DOMContentLoaded', () => {
    // ==================== TRANSLATIONS (9 languages) ====================
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
            "rec-title": "التوصيات الفورية",
            "rec-note": "بناءً على معلوماتك، هذه التوصيات تساعد طبيبك.",
            "recCardio": "استشارة قلبية",
            "recNeuro": "استشارة عصبية",
            "recEcho": "إيكو قلب",
            "recEcg": "تخطيط قلب",
            "recCarotid": "دوبلر لأوعية الرقبة",
            "recLabs": "تحاليل مخبرية",
            "recHaematology": "استشارة أمراض الدم",
            "recNephrology": "استشارة الكلى",
            "recPulmonary": "استشارة صدرية",
            "submit-btn": "حفظ في ورقة جوجل",
            "status-submitting": "جاري الإرسال...",
            "error-age": "❌ العمر مطلوب.",
            "error-name": "❌ الاسم مطلوب.",
            "success": "✅ تم حفظ البيانات بنجاح!",
            "error": "❌ حدث خطأ في الحفظ.",
            "ocr_processing": "جاري التعرف على الدواء...",
            "ocr_success": "تمت إضافة اسم الدواء!",
            "ocr_failed": "لم نتمكن من التعرف على الدواء، حاول مرة أخرى."
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
            "rec-title": "Real‑Time Recommendations",
            "rec-note": "Based on your information, these recommendations help your doctor.",
            "recCardio": "Cardiology Consult",
            "recNeuro": "Neurology Consult",
            "recEcho": "Echocardiography",
            "recEcg": "ECG",
            "recCarotid": "Carotid Doppler",
            "recLabs": "Lab Tests",
            "recHaematology": "Haematology Consult",
            "recNephrology": "Nephrology Consult",
            "recPulmonary": "Pulmonary Consult",
            "submit-btn": "Save to Google Sheet",
            "status-submitting": "Submitting...",
            "error-age": "❌ Age is required.",
            "error-name": "❌ Name is required.",
            "success": "✅ Data saved successfully!",
            "error": "❌ Error saving data.",
            "ocr_processing": "Processing medication...",
            "ocr_success": "Medication name added!",
            "ocr_failed": "Could not identify medication. Try again."
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
            "rec-title": "فوری سفارشات",
            "rec-note": "آپ کی معلومات کی بنیاد پر، یہ سفارشات ڈاکٹر کی مدد کریں گی۔",
            "recCardio": "دل کے ماہر سے مشورہ",
            "recNeuro": "اعصاب کے ماہر سے مشورہ",
            "recEcho": "دل کی ایکو",
            "recEcg": "ای سی جی",
            "recCarotid": "گردن کی شریانوں کا ڈوپلر",
            "recLabs": "خون کے ٹیسٹ",
            "recHaematology": "خون کے ماہر سے مشورہ",
            "recNephrology": "گردوں کے ماہر سے مشورہ",
            "recPulmonary": "پھیپھڑوں کے ماہر سے مشورہ",
            "submit-btn": "گوگل شیٹ میں محفوظ کریں",
            "status-submitting": "بھیجا جا رہا ہے...",
            "error-age": "❌ عمر درکار ہے۔",
            "error-name": "❌ نام درکار ہے۔",
            "success": "✅ ڈیٹا کامیابی سے محفوظ ہو گیا!",
            "error": "❌ ڈیٹا محفوظ کرنے میں خرابی۔",
            "ocr_processing": "دوا کی شناخت ہو رہی ہے...",
            "ocr_success": "دوا کا نام شامل کر دیا گیا!",
            "ocr_failed": "دوا کی شناخت نہیں ہو سکی، دوبارہ کوشش کریں۔"
        },
        hi: {
            "lang-label": "🌐 भाषा",
            "header-title": "प्री-एनेस्थेटिक स्क्रीनिंग",
            "header-tagline": "सर्जरी से पहले आपकी स्थिति का आकलन करने के लिए सरल फॉर्म",
            "demographics-title": "आपकी जानकारी",
            "label-fullName": "पूरा नाम *",
            "placeholder-fullName": "अपना पूरा नाम दर्ज करें",
            "label-age": "आयु *",
            "placeholder-age": "उदाहरण: ३५",
            "label-sex": "लिंग",
            "sex-option-none": "-- चुनें --",
            "sex-option-male": "पुरुष",
            "sex-option-female": "महिला",
            "label-weight": "वजन (किग्रा)",
            "placeholder-weight": "उदाहरण: ७०",
            "label-height": "ऊंचाई (सेमी)",
            "placeholder-height": "उदाहरण: १६०",
            "label-contact": "फोन नंबर",
            "placeholder-contact": "०५xxxxxxxx",
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
            "placeholder-medications": "उदाहरण: एस्पिरिन ८१मिग्रा प्रतिदिन",
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
            "placeholder-surgicalHistory": "उदाहरण: एपेंडेक्टोमी २०१५",
            "label-dental": "दांतों की समस्या (ढीले दांत, डेन्चर...)",
            "placeholder-dental": "वर्णन करें",
            "vitals-title": "महत्वपूर्ण संकेत (वैकल्पिक)",
            "label-bpSystolic": "सिस्टोलिक बीपी",
            "placeholder-bpSystolic": "उदाहरण १२०",
            "label-bpDiastolic": "डायस्टोलिक बीपी",
            "placeholder-bpDiastolic": "उदाहरण ८०",
            "label-heartRate": "हृदय गति",
            "placeholder-heartRate": "उदाहरण ७०",
            "label-respRate": "श्वसन दर",
            "placeholder-respRate": "उदाहरण १६",
            "label-spo2": "ऑक्सीजन स्तर (%)",
            "placeholder-spo2": "उदाहरण ९८",
            "label-temperature": "तापमान (°C)",
            "placeholder-temperature": "उदाहरण ३६.५",
            "consent-text": "मैं यह फॉर्म स्वेच्छा से भरने के लिए सहमत हूं, और समझता हूं कि यह जानकारी एनेस्थीसिया टीम को सुरक्षित देखभाल प्रदान करने में मदद करेगी।",
            "rec-title": "त्वरित सिफारिशें",
            "rec-note": "आपकी जानकारी के आधार पर, ये सिफारिशें डॉक्टर की मदद करेंगी।",
            "recCardio": "हृदय रोग विशेषज्ञ परामर्श",
            "recNeuro": "तंत्रिका विशेषज्ञ परामर्श",
            "recEcho": "इकोकार्डियोग्राफी",
            "recEcg": "ईसीजी",
            "recCarotid": "कैरोटिड डॉपलर",
            "recLabs": "प्रयोगशाला परीक्षण",
            "recHaematology": "रुधिर रोग परामर्श",
            "recNephrology": "गुर्दा रोग परामर्श",
            "recPulmonary": "फेफड़े रोग परामर्श",
            "submit-btn": "गूगल शीट में सहेजें",
            "status-submitting": "भेजा जा रहा है...",
            "error-age": "❌ आयु आवश्यक है।",
            "error-name": "❌ नाम आवश्यक है।",
            "success": "✅ डेटा सफलतापूर्वक सहेजा गया!",
            "error": "❌ डेटा सहेजने में त्रुटि।",
            "ocr_processing": "दवा पहचानी जा रही है...",
            "ocr_success": "दवा का नाम जोड़ दिया गया!",
            "ocr_failed": "दवा की पहचान नहीं हो सकी, फिर से प्रयास करें।"
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
            "rec-title": "তাৎক্ষণিক সুপারিশ",
            "rec-note": "আপনার তথ্যের ভিত্তিতে, এই সুপারিশগুলি ডাক্তারকে সাহায্য করবে।",
            "recCardio": "হৃদরোগ পরামর্শ",
            "recNeuro": "স্নায়ুরোগ পরামর্শ",
            "recEcho": "ইকোকার্ডিওগ্রাফি",
            "recEcg": "ইসিজি",
            "recCarotid": "ক্যারোটিড ডপলার",
            "recLabs": "ল্যাব পরীক্ষা",
            "recHaematology": "রক্ত রোগ পরামর্শ",
            "recNephrology": "কিডনি রোগ পরামর্শ",
            "recPulmonary": "ফুসফুস রোগ পরামর্শ",
            "submit-btn": "গুগল শীটে সংরক্ষণ করুন",
            "status-submitting": "পাঠানো হচ্ছে...",
            "error-age": "❌ বয়স প্রয়োজন।",
            "error-name": "❌ নাম প্রয়োজন।",
            "success": "✅ তথ্য সফলভাবে সংরক্ষিত!",
            "error": "❌ তথ্য সংরক্ষণে ত্রুটি।",
            "ocr_processing": "ওষুধ শনাক্ত করা হচ্ছে...",
            "ocr_success": "ওষুধের নাম যোগ করা হয়েছে!",
            "ocr_failed": "ওষুধ শনাক্ত করা যায়নি, আবার চেষ্টা করুন।"
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
            "rec-title": "तत्काल सिफारिसहरू",
            "rec-note": "तपाईंको जानकारीको आधारमा, यी सिफारिसहरूले डाक्टरलाई मद्दत गर्नेछ।",
            "recCardio": "हृदय रोग परामर्श",
            "recNeuro": "स्नायु रोग परामर्श",
            "recEcho": "इकोकार्डियोग्राफी",
            "recEcg": "ईसीजी",
            "recCarotid": "क्यारोटिड डपलर",
            "recLabs": "प्रयोगशाला परीक्षण",
            "recHaematology": "रक्त रोग परामर्श",
            "recNephrology": "मृगौला रोग परामर्श",
            "recPulmonary": "फोक्सो रोग परामर्श",
            "submit-btn": "गुगल पानामा सुरक्षित गर्नुहोस्",
            "status-submitting": "पठाउँदै...",
            "error-age": "❌ उमेर आवश्यक छ।",
            "error-name": "❌ नाम आवश्यक छ।",
            "success": "✅ डाटा सफलतापूर्वक सुरक्षित!",
            "error": "❌ डाटा सुरक्षित गर्न त्रुटि।",
            "ocr_processing": "औषधि पहिचान हुँदै...",
            "ocr_success": "औषधिको नाम थपियो!",
            "ocr_failed": "औषधि पहिचान हुन सकेन, फेरि प्रयास गर्नुहोस्।"
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
            "rec-title": "Recommandations en temps réel",
            "rec-note": "Basées sur vos informations, ces recommandations aident votre médecin.",
            "recCardio": "Consultation cardiologie",
            "recNeuro": "Consultation neurologie",
            "recEcho": "Échocardiographie",
            "recEcg": "ECG",
            "recCarotid": "Doppler carotidien",
            "recLabs": "Analyses de laboratoire",
            "recHaematology": "Consultation hématologie",
            "recNephrology": "Consultation néphrologie",
            "recPulmonary": "Consultation pneumologie",
            "submit-btn": "Enregistrer dans Google Sheets",
            "status-submitting": "Envoi en cours...",
            "error-age": "❌ L'âge est requis.",
            "error-name": "❌ Le nom est requis.",
            "success": "✅ Données enregistrées avec succès !",
            "error": "❌ Erreur lors de l'enregistrement.",
            "ocr_processing": "Identification du médicament...",
            "ocr_success": "Nom du médicament ajouté !",
            "ocr_failed": "Impossible d'identifier le médicament, réessayez."
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
            "rec-title": "Recomendaciones en tiempo real",
            "rec-note": "Basadas en su información, estas recomendaciones ayudan a su médico.",
            "recCardio": "Consulta de cardiología",
            "recNeuro": "Consulta de neurología",
            "recEcho": "Ecocardiografía",
            "recEcg": "ECG",
            "recCarotid": "Doppler carotídeo",
            "recLabs": "Pruebas de laboratorio",
            "recHaematology": "Consulta de hematología",
            "recNephrology": "Consulta de nefrología",
            "recPulmonary": "Consulta de neumología",
            "submit-btn": "Guardar en Google Sheets",
            "status-submitting": "Enviando...",
            "error-age": "❌ La edad es obligatoria.",
            "error-name": "❌ El nombre es obligatorio.",
            "success": "✅ ¡Datos guardados correctamente!",
            "error": "❌ Error al guardar los datos.",
            "ocr_processing": "Identificando medicamento...",
            "ocr_success": "¡Nombre del medicamento añadido!",
            "ocr_failed": "No se pudo identificar el medicamento, intente de nuevo."
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
            "rec-title": "Rekomendasi Langsung",
            "rec-note": "Berdasarkan informasi Anda, rekomendasi ini membantu dokter.",
            "recCardio": "Konsultasi Jantung",
            "recNeuro": "Konsultasi Saraf",
            "recEcho": "Ekokardiografi",
            "recEcg": "Rekam Jantung (EKG)",
            "recCarotid": "Doppler Pembuluh Leher",
            "recLabs": "Tes Laboratorium",
            "recHaematology": "Konsultasi Hematologi",
            "recNephrology": "Konsultasi Ginjal",
            "recPulmonary": "Konsultasi Paru",
            "submit-btn": "Simpan ke Google Sheet",
            "status-submitting": "Mengirim...",
            "error-age": "❌ Usia harus diisi.",
            "error-name": "❌ Nama harus diisi.",
            "success": "✅ Data berhasil disimpan!",
            "error": "❌ Gagal menyimpan data.",
            "ocr_processing": "Memproses obat...",
            "ocr_success": "Nama obat ditambahkan!",
            "ocr_failed": "Tidak dapat mengidentifikasi obat, coba lagi."
        }
    };

    // ==================== DOM elements ====================
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

    const recCardio = document.getElementById('recCardio');
    const recNeuro = document.getElementById('recNeuro');
    const recEcho = document.getElementById('recEcho');
    const recEcg = document.getElementById('recEcg');
    const recCarotid = document.getElementById('recCarotid');
    const recLabs = document.getElementById('recLabs');
    const recHaematology = document.getElementById('recHaematology');
    const recNephrology = document.getElementById('recNephrology');
    const recPulmonary = document.getElementById('recPulmonary');
    const recBox = document.getElementById('recBox');

    const statusMsg = document.getElementById('statusMessage');
    const consentCheck = document.getElementById('consentCheck');

    function isChecked(el) { return el ? el.checked : false; }

    // ==================== Real‑time recommendation update ====================
    function updateRecommendations() {
        const ageVal = parseInt(age.value) || 0;
        let cardio = false, neuro = false, echo = false, ecg = false, carotid = false, labs = false,
            haematology = false, nephrology = false, pulmonary = false;

        // Cardiology
        if (ageVal > 70 ||
            isChecked(cad) || isChecked(heartFailure) || isChecked(atrialFib) ||
            isChecked(hypertension) || (parseInt(bpSystolic.value) > 160) ||
            isChecked(chestPain) || isChecked(palpitations) || isChecked(dyspnea) || isChecked(syncope) ||
            isChecked(murmur)) {
            cardio = true;
        }

        // Neurology
        if (isChecked(stroke) || isChecked(carotidBruit)) {
            neuro = true;
        }

        // Echocardiography
        if (isChecked(heartFailure) || isChecked(atrialFib) || isChecked(murmur) || isChecked(dyspnea)) {
            echo = true;
        }

        // ECG
        if (ageVal > 65 ||
            isChecked(hypertension) || isChecked(diabetes) || isChecked(cad) ||
            isChecked(heartFailure) || isChecked(atrialFib) ||
            isChecked(palpitations) || isChecked(chestPain) || isChecked(dyspnea)) {
            ecg = true;
        }

        // Carotid Doppler
        if (isChecked(stroke) || isChecked(carotidBruit) ||
            (ageVal > 70 &&
             ((isChecked(hypertension) ? 1:0) + (isChecked(diabetes)?1:0) + (smoking.value === 'Current' || smoking.value === 'Former' ?1:0) >= 2))) {
            carotid = true;
        }

        // Laboratory tests
        if (ageVal > 65 ||
            isChecked(diabetes) || isChecked(ckd) || isChecked(liverDisease) ||
            isChecked(bleedingDisorder) || isChecked(anticoagulants)) {
            labs = true;
        }

        // Haematology consult (if bleeding disorder or on anticoagulants)
        if (isChecked(bleedingDisorder) || isChecked(anticoagulants)) {
            haematology = true;
        }

        // Nephrology consult (if CKD)
        if (isChecked(ckd)) {
            nephrology = true;
        }

        // Pulmonary consult (if sleep apnea or COPD/asthma)
        if (isChecked(sleepApnea) || isChecked(copd)) {
            pulmonary = true;
        }

        // Hide entire rec panel if none are true
        const anyTrue = cardio || neuro || echo || ecg || carotid || labs || haematology || nephrology || pulmonary;
        recBox.style.display = anyTrue ? 'block' : 'none';

        const currentLang = langSelect.value;
        function setRec(element, condition, key) {
            const baseText = translations[currentLang][key] || translations['en'][key];
            if (condition) {
                element.className = 'rec-yes';
                element.innerHTML = '<i class="fas fa-check-circle" style="color:var(--success);"></i> ' + baseText;
            } else {
                element.className = 'rec-no';
                element.innerHTML = '<i class="fas fa-circle" style="color:#adb5bd;"></i> ' + baseText;
            }
        }

        setRec(recCardio, cardio, 'recCardio');
        setRec(recNeuro, neuro, 'recNeuro');
        setRec(recEcho, echo, 'recEcho');
        setRec(recEcg, ecg, 'recEcg');
        setRec(recCarotid, carotid, 'recCarotid');
        setRec(recLabs, labs, 'recLabs');
        setRec(recHaematology, haematology, 'recHaematology');
        setRec(recNephrology, nephrology, 'recNephrology');
        setRec(recPulmonary, pulmonary, 'recPulmonary');

        return { cardio, neuro, echo, ecg, carotid, labs, haematology, nephrology, pulmonary };
    }

    // Attach listeners
    const inputsToWatch = [
        age, hypertension, diabetes, cad, heartFailure, atrialFib, stroke,
        copd, ckd, liverDisease, bleedingDisorder, murmur, carotidBruit,
        anticoagulants, chestPain, palpitations, dyspnea, syncope, fatigue,
        noSymptoms, bpSystolic, smoking, sleepApnea
    ].filter(el => el);
    inputsToWatch.forEach(el => el.addEventListener('input', updateRecommendations));
    inputsToWatch.forEach(el => el.addEventListener('change', updateRecommendations));
    document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.addEventListener('change', updateRecommendations));

    // ==================== Language switching ====================
    function applyLanguage(lang) {
        if (lang === 'ar') {
            body.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            body.dir = 'ltr';
            document.documentElement.lang = lang;
        }

        const t = translations[lang] || translations['en'];

        // Update elements by id
        for (let key in t) {
            const element = document.getElementById(key);
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                    if (element.placeholder !== undefined && key.startsWith('placeholder-')) {
                        element.placeholder = t[key];
                    }
                } else {
                    element.innerText = t[key];
                }
            }
        }

        // Update select options manually
        const optionMappings = [
            'sex-option-none', 'sex-option-male', 'sex-option-female',
            'smoking-never', 'smoking-former', 'smoking-current',
            'alcohol-none', 'alcohol-moderate', 'alcohol-heavy'
        ];
        optionMappings.forEach(id => {
            const opt = document.getElementById(id);
            if (opt) opt.innerText = t[id] || translations['en'][id];
        });

        document.getElementById('submit-btn').innerHTML = `<i class="fas fa-save"></i> ${t['submit-btn']}`;
        document.getElementById('rec-title').innerHTML = `<i class="fas fa-lightbulb"></i> ${t['rec-title']}`;
        document.getElementById('rec-note').innerText = t['rec-note'];
        document.getElementById('scan-btn-text').innerText = t['scan-btn-text'];

        updateRecommendations();
    }

    langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
    applyLanguage('ar'); // default

    // ==================== OCR with Gemini (via serverless function) ====================
    async function performOCR(imageFile) {
        ocrStatus.innerText = translations[langSelect.value]['ocr_processing'] || 'Processing...';
        ocrStatus.style.color = 'var(--primary)';

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            // If deployed on Vercel, the function is at /api/ocr
            // For local testing, you may need to use full URL like http://localhost:3000/api/ocr
            const response = await fetch('/api/ocr', {
                method: 'POST',
                body: formData
            });

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
            console.error('OCR error:', error);
            ocrStatus.innerText = translations[langSelect.value]['ocr_failed'] || 'Error processing image.';
            ocrStatus.style.color = 'red';
        }

        setTimeout(() => {
            ocrStatus.innerText = '';
            ocrStatus.style.color = 'var(--primary)';
        }, 4000);
    }

    scanBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            performOCR(file);
        }
        fileInput.value = ''; // allow re-upload of same file
    });

    // ==================== Form submission ====================
    form.addEventListener('submit', async function(e) {
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

        const rec = updateRecommendations();

        const data = {
            name: document.getElementById('fullName').value.trim(),
            age: age.value,
            sex: document.getElementById('sex').value,
            weight: document.getElementById('weight').value,
            height: document.getElementById('height').value,
            contact: document.getElementById('contact').value,
            hypertension: isChecked(hypertension),
            diabetes: isChecked(diabetes),
            cad: isChecked(cad),
            heartFailure: isChecked(heartFailure),
            atrialFib: isChecked(atrialFib),
            stroke: isChecked(stroke),
            copd: isChecked(copd),
            ckd: isChecked(ckd),
            liverDisease: isChecked(liverDisease),
            bleedingDisorder: isChecked(bleedingDisorder),
            murmur: isChecked(murmur),
            carotidBruit: isChecked(carotidBruit),
            anticoagulants: isChecked(anticoagulants),
            otherMedical: document.getElementById('otherMedical').value,
            sleepApnea: isChecked(sleepApnea),
            gerd: isChecked(document.getElementById('gerd')),
            chestPain: isChecked(chestPain),
            palpitations: isChecked(palpitations),
            dyspnea: isChecked(dyspnea),
            syncope: isChecked(syncope),
            fatigue: isChecked(fatigue),
            noSymptoms: isChecked(noSymptoms),
            bpSystolic: bpSystolic.value,
            bpDiastolic: document.getElementById('bpDiastolic').value,
            heartRate: document.getElementById('heartRate').value,
            respRate: document.getElementById('respRate').value,
            spo2: document.getElementById('spo2').value,
            temperature: document.getElementById('temperature').value,
            medications: document.getElementById('medications').value,
            allergies: document.getElementById('allergies').value,
            smoking: smoking.value,
            alcohol: document.getElementById('alcohol').value,
            surgicalHistory: document.getElementById('surgicalHistory').value,
            dental: document.getElementById('dental').value,
            cardioConsult: rec.cardio,
            neuroConsult: rec.neuro,
            echo: rec.echo,
            ecg: rec.ecg,
            carotidDoppler: rec.carotid,
            labTests: rec.labs,
            haematologyConsult: rec.haematology,
            nephrologyConsult: rec.nephrology,
            pulmonaryConsult: rec.pulmonary
        };

        const scriptURL = 'YOUR_APPS_SCRIPT_WEB_APP_URL'; // <-- REPLACE

        try {
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ data: JSON.stringify(data) })
            });
            statusMsg.innerText = translations[langSelect.value]['success'] || '✅ Data saved successfully!';
            form.reset();
            updateRecommendations();
            consentCheck.checked = false;
        } catch (error) {
            statusMsg.innerText = translations[langSelect.value]['error'] || '❌ Error saving data.';
            console.error(error);
        }
    });

    // Header scroll effect
    const header = document.getElementById('main-header');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    updateRecommendations();
});
