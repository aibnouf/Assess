// ==================== IMPORTS ====================
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';
import { translations } from './translations.js';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==================== DOMContentLoaded ====================
document.addEventListener('DOMContentLoaded', () => {
    // ---------- Header Overlap Fix (Mobile & Desktop) ----------
    function adjustBodyPadding() {
        const header = document.getElementById('main-header');
        if (!header) return;
        document.body.style.paddingTop = (header.offsetHeight + 10) + 'px';
    }
    const header = document.getElementById('main-header');
    if (header) {
        if (window.ResizeObserver) {
            const observer = new ResizeObserver(() => adjustBodyPadding());
            observer.observe(header);
        } else {
            window.addEventListener('resize', adjustBodyPadding);
        }
        adjustBodyPadding();
    }
    // ---------------------------------------------------------

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
        if (isNaN(val)) { el.className = 'vital-input'; hintEl.textContent = ''; return; }
        const r = vitalRanges[id];
        const t = translations[langSelect.value] || translations['en'];
        let cls = 'v-normal', hint = t['vital-normal'];
        if (r.reverseDir) {
            if (val <= r.critical) { cls='v-danger'; hint=t['vital-critical']; }
            else if (val < r.low) { cls='v-warning'; hint=t['vital-low']; }
        } else {
            if (val >= r.critical) { cls='v-danger'; hint=t['vital-critical']; }
            else if (val > r.high) { cls='v-warning'; hint=t['vital-high']; }
            else if (val < r.low) { cls='v-warning'; hint=t['vital-low']; }
        }
        el.className = 'vital-input ' + cls;
        hintEl.textContent = hint;
    }
    Object.keys(vitalRanges).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', () => checkVital(id));
    });

    // ==================== ASA ====================
    function updateASA() {
        const ageVal = parseInt(age.value) || 0;
        const bmiVal = updateBMI();
        let score = 1;
        if (ageVal >= 60 || isChecked(hypertension) || isChecked(diabetes) ||
            isChecked(copd) || isChecked(sleepApnea) ||
            (smoking && (smoking.value==='Current'||smoking.value==='Former')) ||
            (bmiVal >= 30 && bmiVal < 40)) score = 2;
        if (isChecked(cad) || isChecked(heartFailure) || isChecked(atrialFib) ||
            isChecked(stroke) || isChecked(carotidBruit) || isChecked(ckd) ||
            isChecked(liverDisease) || isChecked(bleedingDisorder) ||
            isChecked(murmur) || ageVal >= 70 || bmiVal >= 40 ||
            (alcoholEl && alcoholEl.value==='Heavy')) score = 3;
        if ((isChecked(heartFailure) && (isChecked(syncope)||isChecked(dyspnea))) ||
            (isChecked(cad) && isChecked(chestPain))) score = 4;
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
        ['sex-option-none','sex-option-male','sex-option-female',
         'smoking-never','smoking-former','smoking-current',
         'alcohol-none','alcohol-moderate','alcohol-heavy',
         'npo-unknown','npo-yes','npo-no'].forEach(id => {
            const opt = document.getElementById(id);
            if (opt) opt.innerText = t[id] || fallback[id] || id;
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
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = async () => {
            const base64 = reader.result.split(',')[1];
            const mimeType = imageFile.type;
            try {
                const { data, error } = await supabase.functions.invoke('ocr', {
                    body: { imageBase64: base64, mimeType }
                });
                if (error) throw error;
                if (data.success && data.medicationName) {
                    const current = medsTextarea.value;
                    medsTextarea.value = current + (current ? '\n' : '') + data.medicationName;
                    ocrStatus.innerText = translations[langSelect.value]['ocr_success'] || 'Medication name added!';
                    ocrStatus.style.color = 'green';
                } else {
                    ocrStatus.innerText = translations[langSelect.value]['ocr_failed'] || 'Could not identify medication.';
                    ocrStatus.style.color = 'red';
                }
            } catch (err) {
                console.error(err);
                ocrStatus.innerText = translations[langSelect.value]['ocr_failed'] || 'Error processing image.';
                ocrStatus.style.color = 'red';
            } finally {
                setTimeout(() => {
                    ocrStatus.innerText = '';
                    ocrStatus.style.color = '';
                }, 4000);
            }
        };
        reader.onerror = () => {
            ocrStatus.innerText = translations[langSelect.value]['ocr_failed'] || 'Failed to read image.';
            ocrStatus.style.color = 'red';
        };
    }
    scanBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) performOCR(file);
        fileInput.value = '';
    });

    // ==================== SUPABASE SUBMISSION ====================
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
            weight: weightEl.value,
            height: heightEl.value,
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
            medications: medsTextarea.value,
            allergies: document.getElementById('allergies').value,
            smoking: smoking.value,
            alcohol: alcoholEl.value,
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

    window.onscroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
    updateBMI(); updateASA(); updateProgress(); loadFromLS();
    setTimeout(() => { updateBMI(); updateASA(); updateProgress(); }, 100);
});
