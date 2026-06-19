/* ============================
   ZIANE SCHOOL — script.js
   ============================ */

const CONTENT = {
  fr: {
    dir: "ltr",
    navLinks: ["À propos", "Matières", "Galerie", "S'inscrire"],
    navCta: "S'inscrire",
    langLabel: "FR",
    heroBadge: "🎓 Ouvert aux inscriptions 2026-2027",
    heroTitle: "L'excellence<br/>scolaire<br/>commence <em>ici.</em>",
    heroSub:
      "Ziane School, votre école privée de soutien scolaire à Rue du poète Taghor, Sidi M'Hamed 16000. Sciences naturelles, Mathématiques, Physique — encadrés par des professeurs expérimentés.",
    heroBtnMain: "Inscrivez-vous maintenant",
    heroBtnSec: "Découvrir l'école",
    stat1Num: "+<span>500</span>",
    stat1Label: "Élèves formés",
    stat2Num: "<span>3</span>",
    stat2Label: "Matières clés",
    stat3Num: "+<span>10</span>",
    stat3Label: "Ans d'expérience",
    aboutEye: "Qui sommes-nous",
    aboutTitle: "Une école pensée pour la réussite de vos enfants",
    aboutSub:
      "Fondée à Rue du poète Taghor, Sidi M'Hamed 16000, Ziane School accompagne les élèves du cycle moyen et secondaire avec un encadrement pédagogique rigoureux et bienveillant.",
    features: [
      "Cours de soutien en groupes réduits pour un suivi personnalisé de chaque élève",
      "Professeurs certifiés et expérimentés dans leur domaine disciplinaire",
      "Locaux modernes, climatisés et équipés, dans un cadre discipliné et respectueux",
      "Préparation aux examens du BEM et du Bac Algérien avec exercices ciblés",
    ],
    subjectsEye: "Nos matières",
    subjectsTitle: "Trois disciplines fondamentales",
    subjectsSub:
      "Des cours structurés et progressifs pour renforcer les bases et exceller aux examens.",
    sciName: "Sciences Naturelles",
    sciDesc:
      "Biologie, géologie, écologie — cours complets avec schémas détaillés et exercices pratiques adaptés au programme algérien.",
    mathName: "Mathématiques",
    mathDesc:
      "Algèbre, analyse, géométrie et statistiques — méthodes de résolution et entraînements intensifs pour les examens.",
    phyName: "Physique",
    phyDesc:
      "Mécanique, électricité, optique et thermodynamique — théorie claire et exercices de type bac pour une maîtrise complète.",
    galleryEye: "Notre école",
    galleryTitle: "Un cadre d'apprentissage inspirant",
    gallerySub:
      "Des espaces conçus pour favoriser la concentration et le progrès.",
    regEye: "Inscription 2026–2027",
    regTitle: "Remplissez le formulaire d'inscription",
    regSub:
      "Complétez le formulaire ci-dessous, puis générez votre استمارة تسجيل officielle. Vous pourrez l'imprimer ou la télécharger en PDF.",
    formTitle: "Formulaire d'inscription",
    formSub: "Tous les champs sont requis / جميع الحقول مطلوبة",
    lblFirst: "Prénom",
    lblFirstAr: "الاسم",
    phFirst: "ex: Yacine",
    lblLast: "Nom",
    lblLastAr: "اللقب",
    phLast: "ex: Ziani",
    lblDob: "Date de naissance",
    lblDobAr: "تاريخ الميلاد",
    lblTel: "Téléphone élève",
    lblTelAr: "رقم الهاتف",
    phTel: "05 XX XX XX XX",
    lblTelP: "Téléphone parent",
    lblTelPAr: "رقم هاتف الولي",
    phTelP: "06 XX XX XX XX",
    lblLevel: "Niveau scolaire",
    lblLevelAr: "المستوى الدراسي",
    levelPlaceholder: "-- Sélectionner le niveau --",
    levels: [
      "3ème Année Moyenne / السنة الثالثة متوسط",
      "4ème Année Moyenne / السنة الرابعة متوسط",
      "1ère Année Secondaire / السنة الأولى ثانوي",
      "2ème Année Secondaire / السنة الثانية ثانوي",
      "3ème Année Secondaire / السنة الثالثة ثانوي",
    ],
    lblSubjects: "Matières choisies",
    lblSubjectsAr: "المواد",
    sciLabel: "Sciences Naturelles",
    sciAr: "علوم طبيعية",
    mathLabel: "Mathématiques",
    mathAr: "رياضيات",
    phyLabel: "Physique",
    phyAr: "فيزياء",
    btnGenerate: "📄 Générer & Prévisualiser l'Istimara / إنشاء الاستمارة",
    previewEmptyText:
      'Remplissez le formulaire et cliquez sur<br/><strong>"Générer l\'Istimara"</strong><br/>pour voir la prévisualisation.',
    btnPrint: "🖨️ Imprimer",
    btnPdf: "⬇️ Télécharger PDF",
    alertRequired:
      "⚠️ Veuillez remplir tous les champs obligatoires (Prénom, Nom, Date de naissance, Téléphone, Niveau).",
    alertSubject: "⚠️ Veuillez sélectionner au moins une matière.",
    footerDesc:
      "École privée de soutien scolaire à Rue du poète Taghor, Sidi M'Hamed 16000. Nous accompagnons vos enfants vers l'excellence depuis plus de 10 ans.",
    footerNav: "Navigation",
    footerContact: "Contact",
    footerLinks: ["À propos", "Nos matières", "Galerie", "Inscription"],
    footerCopy: "© 2026 Ziane School. Tous droits réservés.",
    footerLoc: "Rue du poète Taghor, Sidi M'Hamed 16000",
    istTitle: "إِسْتِمَارَةُ التَسْجِيل",
    istSubtitle: "Registration Form / Formulaire d'Inscription",
    istSectionInfo: "المعلومات الشخصية :",
    istFirstLabel: "الاسم",
    istLastLabel: "اللقب",
    istDobLabel: "تاريخ الميلاد",
    istLevelLabel: "المستوى الدراسي",
    istTelLabel: "رقم الهاتف",
    istTelPLabel: "رقم هاتف الولي",
    istSectionSubj: "المواد التي تريد التسجيل فيها :",
    istSectionRules: "قوانين وشروط المدرسة",
    istRules: [
      "1. الالتزام بالوقت والانضباط داخل المدرسة.",
      "2. يجب احترام الأساتذة والالتزام بالهدوء داخل القسم.",
      "3. ممنوع اللباس القصير ويجب الالتزام بلباس محتشم.",
      "4. ممنوع الاختلاط تماماً داخل المؤسسة.",
    ],
    istSectionSign: "المصادقة والموافقة على الشروط",
    istAgreement:
      "أنا الموقع أدناه الطالب(ة)، أقر بصحة المعلومات المقدمة أعلاه، وأتعهد بالالتزام بجميع قوانين وشروط المدرسة، وفي حال المخالفة أتحمل المسؤولية.",
    istSigStudent: "توقيع الطالب",
    istSigDir: "توقيع و ختم مدير المدرسة",
    istSigDate: "التاريخ:",
    istSigStamp: "توقيع / ختم",
    istFooterNote:
      "Ziane School — Rue du poète Taghor, Sidi M'Hamed 16000 · Année scolaire 2026–2027",
  },
  ar: {
    dir: "rtl",
    navLinks: ["حول المدرسة", "المواد", "معرض الصور", "التسجيل"],
    navCta: "التسجيل الآن",
    langLabel: "AR",
    heroBadge: "🎓 التسجيل مفتوح 2027-2026",
    heroTitle: "التميز<br/>الدراسي<br/>يبدأ <em>هنا.</em>",
    heroSub:
      "مدرسة زيان، مدرستك الخاصة للدعم الدراسي قرب مسجد الرحمة. علوم طبيعية، رياضيات، فيزياء — بإشراف أساتذة ذوي خبرة.",
    heroBtnMain: "سجّل الآن",
    heroBtnSec: "اكتشف المدرسة",
    stat1Num: "+<span>500</span>",
    stat1Label: "تلميذ مستفيد",
    stat2Num: "<span>3</span>",
    stat2Label: "مواد أساسية",
    stat3Num: "+<span>10</span>",
    stat3Label: "سنوات خبرة",
    aboutEye: "من نحن",
    aboutTitle: "مدرسة صُمِّمت من أجل نجاح أبنائكم",
    aboutSub:
      "تأسست في قرب مسجدالرحمة، مدرسة زيان ترافق تلاميذ الطور المتوسط والثانوي بإطار تربوي صارم وداعم.",
    features: [
      "دروس دعم في مجموعات صغيرة لمتابعة شخصية لكل تلميذ",
      "أساتذة معتمدون ذو خبرة أكثر من 10 سنوات في تخصصاتهم",
      "قاعات حديثة ومكيفة ومجهزة في إطار منضبط ومحترم",
      "تحضير لامتحانات شهادة التعليم المتوسط والبكالوريا بتمارين موجهة",
    ],
    subjectsEye: "موادنا",
    subjectsTitle: "ثلاثة تخصصات أساسية",
    subjectsSub: "دروس منظمة ومتدرجة لتعزيز الأسس والتفوق في الامتحانات.",
    sciName: "العلوم الطبيعية",
    sciDesc:
      "أحياء، جيولوجيا، بيئة — دروس شاملة برسوم تفصيلية وتمارين تطبيقية تتوافق مع المنهج الجزائري.",
    mathName: "الرياضيات",
    mathDesc:
      "جبر، تحليل، هندسة وإحصاء — طرق حل وتدريبات مكثفة لاجتياز الامتحانات.",
    phyName: "الفيزياء",
    phyDesc:
      "ميكانيكا، كهرباء، بصريات وحرارية — نظرية واضحة وتمارين من نوع البكالوريا لإتقان شامل.",
    galleryEye: "مدرستنا",
    galleryTitle: "بيئة تعليمية ملهِمة",
    gallerySub: "فضاءات مصممة لتعزيز التركيز والتقدم.",
    regEye: "التسجيل 2026-2027",
    regTitle: "أكمل استمارة التسجيل",
    regSub:
      "أكمل النموذج أدناه ثم أنشئ استمارة التسجيل الرسمية. يمكنك طباعتها أو تنزيلها كـ PDF.",
    formTitle: "استمارة التسجيل",
    formSub: "جميع الحقول مطلوبة / Tous les champs sont requis",
    lblFirst: "الاسم",
    lblFirstAr: "Prénom",
    phFirst: "مثال: ياسين",
    lblLast: "اللقب",
    lblLastAr: "Nom",
    phLast: "مثال: زياني",
    lblDob: "تاريخ الميلاد",
    lblDobAr: "Date de naissance",
    lblTel: "رقم هاتف التلميذ",
    lblTelAr: "Téléphone",
    phTel: "05 XX XX XX XX",
    lblTelP: "رقم هاتف الولي",
    lblTelPAr: "Tel. Parent",
    phTelP: "06 XX XX XX XX",
    lblLevel: "المستوى الدراسي",
    lblLevelAr: "Niveau",
    levelPlaceholder: "-- اختر المستوى --",
    levels: [
      "السنة الثالثة متوسط / 3ème Année Moyenne",
      "السنة الرابعة متوسط / 4ème Année Moyenne",
      "السنة الأولى ثانوي / 1ère Année Secondaire",
      "السنة الثانية ثانوي / 2ème Année Secondaire",
      "السنة الثالثة ثانوي / 3ème Année Secondaire",
    ],
    lblSubjects: "المواد المختارة",
    lblSubjectsAr: "Matières",
    sciLabel: "العلوم الطبيعية",
    sciAr: "Sciences Naturelles",
    mathLabel: "الرياضيات",
    mathAr: "Mathématiques",
    phyLabel: "الفيزياء",
    phyAr: "Physique",
    btnGenerate: "📄 إنشاء وعرض استمارة التسجيل",
    previewEmptyText:
      'أكمل النموذج واضغط على<br/><strong>"إنشاء الاستمارة"</strong><br/>لعرض المعاينة.',
    btnPrint: "🖨️ طباعة",
    btnPdf: "⬇️ تنزيل PDF",
    alertRequired:
      "⚠️ يرجى ملء جميع الحقول المطلوبة (الاسم، اللقب، تاريخ الميلاد، الهاتف، المستوى).",
    alertSubject: "⚠️ يرجى اختيار مادة واحدة على الأقل.",
    footerDesc:
      "مدرسة خاصة للدعم المدرسي قرب مسجد الرحمة، الجزائر. نرافق أبناءكم نحو التميز منذ أكثر من 10 سنوات.",
    footerNav: "التنقل",
    footerContact: "اتصل بنا",
    footerLinks: ["حول المدرسة", "موادنا", "معرض الصور", "التسجيل"],
    footerCopy: "© 2026 مدرسة زيان. جميع الحقوق محفوظة.",
    footerLoc: "قرب مسجد الرحمة · الجزائر ",
    istTitle: "إِسْتِمَارَةُ تَسْجِيل",
    istSubtitle: "Registration Form / Formulaire d'Inscription",
    istSectionInfo: "المعلومات الشخصية :",
    istFirstLabel: "الاسم",
    istLastLabel: "اللقب",
    istDobLabel: "تاريخ الميلاد",
    istLevelLabel: "المستوى الدراسي",
    istTelLabel: "رقم الهاتف",
    istTelPLabel: "رقم هاتف الولي",
    istSectionSubj: "المواد التي تريد التسجيل فيها :",
    istSectionRules: "قوانين وشروط المدرسة",
    istRules: [
      "1. الالتزام بالوقت والانضباط داخل المدرسة.",
      "2. يجب احترام الأساتذة والالتزام بالهدوء داخل القسم.",
      "3. ممنوع اللباس القصير ويجب الالتزام بلباس محتشم.",
      "4. ممنوع الاختلاط تماماً داخل المؤسسة.",
    ],
    istSectionSign: "المصادقة والموافقة على الشروط",
    istAgreement:
      "أنا الموقع أدناه الطالب(ة)، أقر بصحة المعلومات المقدمة أعلاه، وأتعهد بالالتزام بجميع قوانين وشروط المدرسة، وفي حال المخالفة أتحمل المسؤولية.",
    istSigStudent: "توقيع الطالب",
    istSigDir: "توقيع و ختم مدير المدرسة",
    istSigDate: "التاريخ:",
    istSigStamp: "توقيع / ختم",
    istFooterNote:
      "مدرسة زيان — قرب مسجد الرحمة، الجزائر · السنة الدراسية 2027–2026",
  }
};

let currentLang = "fr";
let lastData = null;

/* ── HELPERS ── */
function setText(sel, val) {
  const el = document.querySelector(sel);
  if (el && val !== undefined) el.textContent = val;
}

function setHTML(sel, val) {
  const el = document.querySelector(sel);
  if (el && val !== undefined) el.innerHTML = val;
}

function setAttr(sel, attr, val) {
  const el = document.querySelector(sel);
  if (el && val !== undefined) el.setAttribute(attr, val);
}

/* ── APPLY LANGUAGE ── */
function applyLang(lang) {
  if (!lang || !CONTENT[lang]) {
    console.warn(`Language "${lang}" not found, defaulting to "fr"`);
    lang = "fr";
  }
  
  const c = CONTENT[lang];
  if (!c) return;
  
  currentLang = lang;
  document.body.classList.toggle("rtl", lang === "ar");
  document.documentElement.setAttribute("dir", c.dir);
  document.documentElement.setAttribute("lang", lang);

  const links = document.querySelectorAll(".nav-links a[data-key]");
  links.forEach((a, i) => {
    a.textContent = c.navLinks[i] || a.textContent;
  });
  
  document.querySelectorAll(".nav-cta, .mobile-cta").forEach((cta) => {
    cta.textContent = c.navCta || cta.textContent;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  if (c.heroBadge) setHTML("#hero-badge-text", `<span class="dot"></span>${c.heroBadge}`);
  if (c.heroTitle) setHTML("#hero-title", c.heroTitle);
  if (c.heroSub) setText("#hero-sub", c.heroSub);
  if (c.heroBtnMain) setText("#hero-btn-main", c.heroBtnMain);
  if (c.heroBtnSec) setText("#hero-btn-sec", c.heroBtnSec);
  if (c.stat1Num) setHTML("#stat1-num", c.stat1Num);
  if (c.stat1Label) setText("#stat1-label", c.stat1Label);
  if (c.stat2Num) setHTML("#stat2-num", c.stat2Num);
  if (c.stat2Label) setText("#stat2-label", c.stat2Label);
  if (c.stat3Num) setHTML("#stat3-num", c.stat3Num);
  if (c.stat3Label) setText("#stat3-label", c.stat3Label);

  if (c.aboutEye) setText("#about-eye", c.aboutEye);
  if (c.aboutTitle) setText("#about-title", c.aboutTitle);
  if (c.aboutSub) setText("#about-sub", c.aboutSub);
  const feats = document.querySelectorAll(".feature-list li span");
  feats.forEach((s, i) => {
    if (c.features && c.features[i]) s.textContent = c.features[i];
  });

  if (c.subjectsEye) setText("#subj-eye", c.subjectsEye);
  if (c.subjectsTitle) setText("#subj-title", c.subjectsTitle);
  if (c.subjectsSub) setText("#subj-sub", c.subjectsSub);
  if (c.sciName) setText("#sci-name", c.sciName);
  if (c.sciDesc) setText("#sci-desc", c.sciDesc);
  if (c.mathName) setText("#math-name", c.mathName);
  if (c.mathDesc) setText("#math-desc", c.mathDesc);
  if (c.phyName) setText("#phy-name", c.phyName);
  if (c.phyDesc) setText("#phy-desc", c.phyDesc);

  if (c.galleryEye) setText("#gal-eye", c.galleryEye);
  if (c.galleryTitle) setText("#gal-title", c.galleryTitle);
  if (c.gallerySub) setText("#gal-sub", c.gallerySub);

  if (c.regEye) setText("#reg-eye", c.regEye);
  if (c.regTitle) setText("#reg-title", c.regTitle);
  if (c.regSub) setText("#reg-sub", c.regSub);
  if (c.formTitle) setText("#form-title", c.formTitle);
  if (c.formSub) setText("#form-sub", c.formSub);

  if (c.lblFirst) setText("#lbl-first", c.lblFirst);
  if (c.lblFirstAr) setText("#lbl-first-ar", c.lblFirstAr);
  if (c.lblLast) setText("#lbl-last", c.lblLast);
  if (c.lblLastAr) setText("#lbl-last-ar", c.lblLastAr);
  if (c.phFirst) setAttr("#f-prenom", "placeholder", c.phFirst);
  if (c.phLast) setAttr("#f-nom", "placeholder", c.phLast);
  if (c.lblDob) setText("#lbl-dob", c.lblDob);
  if (c.lblDobAr) setText("#lbl-dob-ar", c.lblDobAr);
  if (c.lblTel) setText("#lbl-tel", c.lblTel);
  if (c.lblTelAr) setText("#lbl-tel-ar", c.lblTelAr);
  if (c.phTel) setAttr("#f-tel", "placeholder", c.phTel);
  if (c.lblTelP) setText("#lbl-telp", c.lblTelP);
  if (c.lblTelPAr) setText("#lbl-telp-ar", c.lblTelPAr);
  if (c.phTelP) setAttr("#f-tel-parent", "placeholder", c.phTelP);
  if (c.lblLevel) setText("#lbl-level", c.lblLevel);
  if (c.lblLevelAr) setText("#lbl-level-ar", c.lblLevelAr);
  if (c.lblSubjects) setText("#lbl-subjects", c.lblSubjects);
  if (c.lblSubjectsAr) setText("#lbl-subjects-ar", c.lblSubjectsAr);

  const sel = document.getElementById("f-niveau");
  if (sel && c.levels) {
    const saved = sel.value;
    sel.innerHTML =
      `<option value="">${c.levelPlaceholder || "-- Select --"}</option>` +
      c.levels.map((l, i) => `<option value="${i}">${l}</option>`).join("");
    sel.value = saved;
  }

  if (c.sciLabel) setText("#lbl-sci", c.sciLabel);
  if (c.sciAr) setText("#lbl-sci-ar", c.sciAr);
  if (c.mathLabel) setText("#lbl-math", c.mathLabel);
  if (c.mathAr) setText("#lbl-math-ar", c.mathAr);
  if (c.phyLabel) setText("#lbl-phy", c.phyLabel);
  if (c.phyAr) setText("#lbl-phy-ar", c.phyAr);

  if (c.btnGenerate) setText("#btn-generate", c.btnGenerate);
  if (c.previewEmptyText) setHTML("#preview-empty-text", c.previewEmptyText);
  if (c.btnPrint) setText("#btn-print", c.btnPrint);
  if (c.btnPdf) setText("#btn-pdf", c.btnPdf);

  if (c.footerDesc) setText("#footer-desc", c.footerDesc);
  if (c.footerNav) setText("#footer-nav-title", c.footerNav);
  if (c.footerContact) setText("#footer-contact-title", c.footerContact);
  const footLinks = document.querySelectorAll(".footer-nav-link");
  footLinks.forEach((a, i) => {
    if (c.footerLinks && c.footerLinks[i]) a.textContent = c.footerLinks[i];
  });
  if (c.footerCopy) setText("#footer-copy", c.footerCopy);
  if (c.footerLoc) setText("#footer-loc", c.footerLoc);
}

/* ── FORM DATA ── */
function getFormData() {
  const c = CONTENT[currentLang];
  const levels = c && c.levels ? c.levels : [];
  const sel = document.getElementById("f-niveau");
  const levelIdx = sel ? parseInt(sel.value) : NaN;
  const levelText =
    !isNaN(levelIdx) && levels[levelIdx] ? levels[levelIdx] : "";

  return {
    prenom: document.getElementById("f-prenom")?.value.trim() || "",
    nom: document.getElementById("f-nom")?.value.trim() || "",
    dob: document.getElementById("f-dob")?.value || "",
    tel: document.getElementById("f-tel")?.value.trim() || "",
    telParent: document.getElementById("f-tel-parent")?.value.trim() || "",
    niveau: levelText,
    sci: document.getElementById("ch-sci")?.checked || false,
    math: document.getElementById("ch-math")?.checked || false,
    phy: document.getElementById("ch-phy")?.checked || false,
  };
}

function formatDOB(dob) {
  if (!dob) return "____/____/________";
  const [y, m, d] = dob.split("-");
  return `${d} / ${m} / ${y}`;
}

function chk(checked) {
  return checked
    ? '<span class="ist-checkbox checked">✓</span>'
    : '<span class="ist-checkbox"></span>';
}

/* ── GENERATE ISTIMARA ── */
function generateIstimara() {
  const c = CONTENT[currentLang];
  if (!c) {
    alert("Language not loaded. Please refresh the page.");
    return;
  }
  
  const d = getFormData();

  if (!d.prenom || !d.nom || !d.dob || !d.tel || !d.niveau) {
    alert(c.alertRequired || "Please fill in all required fields.");
    return;
  }
  if (!d.sci && !d.math && !d.phy) {
    alert(c.alertSubject || "Please select at least one subject.");
    return;
  }

  lastData = d;

  const today = new Date();
  const todayStr = `${String(today.getDate()).padStart(2, "0")} / ${String(today.getMonth() + 1).padStart(2, "0")} / ${today.getFullYear()}`;

  const html = `
    <div class="ist-header">
      <div class="ist-photo-box">
        <span>صورة<br/>شخصية<br/>Photo</span>
      </div>
      <div class="ist-logo-text">ZIANE <span>SCHOOL</span></div>
      <div class="ist-logo-sub">École Privée de Soutien Scolaire – Rue du poète Taghor, Sidi M'Hamed 16000</div>
      <div style="display:flex;justify-content:center;align-items:center;margin-top:5px;">
        <div class="ist-title">${c.istTitle || "إِسْتِمَارَةُ تَسْجِيل"}</div>
      </div>
      <div style="font-size:11px;color:#888;font-family:'Poppins',sans-serif;margin-top:2px">${c.istSubtitle || "Registration Form"}</div>
      <div style="font-size:10px;color:#666;font-family:'Poppins',sans-serif;margin-top:3px;">Date: ${todayStr}</div>
    </div>

    <div class="ist-section-title">${c.istSectionInfo || "المعلومات الشخصية"}</div>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:10px;">
      <div>
        <div class="ist-field"><span class="ist-value">${d.prenom}</span></div>
        <div class="ist-label">${c.istFirstLabel || "الاسم"}</div>
      </div>
      <div>
        <div class="ist-field"><span class="ist-value">${d.nom}</span></div>
        <div class="ist-label">${c.istLastLabel || "اللقب"}</div>
      </div>
    </div>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:10px;">
      <div>
        <div class="ist-field"><span class="ist-value">${formatDOB(d.dob)}</span></div>
        <div class="ist-label">${c.istDobLabel || "تاريخ الميلاد"}</div>
      </div>
      <div>
        <div class="ist-field"><span class="ist-value">${d.niveau}</span></div>
        <div class="ist-label">${c.istLevelLabel || "المستوى الدراسي"}</div>
      </div>
    </div>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:10px;">
      <div>
        <div class="ist-field"><span class="ist-value">${d.tel}</span></div>
        <div class="ist-label">${c.istTelLabel || "رقم الهاتف"}</div>
      </div>
      <div>
        <div class="ist-field"><span class="ist-value">${d.telParent || "—"}</span></div>
        <div class="ist-label">${c.istTelPLabel || "رقم هاتف الولي"}</div>
      </div>
    </div>

    <div class="ist-section-title">${c.istSectionSubj || "المواد التي تريد التسجيل فيها"}</div>
    <div class="ist-subj-row">
      <div class="ist-subj-item">${chk(d.sci)} 1. علوم طبيعية</div>
      <div class="ist-subj-item">${chk(d.math)} 2. رياضيات</div>
      <div class="ist-subj-item">${chk(d.phy)} 3. فيزياء</div>
    </div>

    <div class="ist-section-title">${c.istSectionRules || "قوانين وشروط المدرسة"}</div>
    <div class="ist-rules">
      ${(c.istRules || [
        "1. الالتزام بالوقت والانضباط داخل المدرسة.",
        "2. يجب احترام الأساتذة والالتزام بالهدوء داخل القسم.",
        "3. ممنوع اللباس القصير ويجب الالتزام بلباس محتشم.",
        "4. ممنوع الاختلاط تماماً داخل المؤسسة."
      ]).map((r) => `<div class="ist-rule">${r}</div>`).join("")}
    </div>

    <div class="ist-section-title">${c.istSectionSign || "المصادقة والموافقة على الشروط"}</div>
    <div class="ist-agreement">${c.istAgreement || "أنا الموقع أدناه الطالب(ة)، أقر بصحة المعلومات المقدمة أعلاه، وأتعهد بالالتزام بجميع قوانين وشروط المدرسة، وفي حال المخالفة أتحمل المسؤولية."}</div>

    <div class="ist-sigs">
      <div class="ist-sig-box">
        <div class="ist-sig-label">${c.istSigStudent || "توقيع الطالب"}</div>
        <div class="ist-sig-line"></div>
        <div style="font-size:10.5px;color:#888;display:flex;justify-content:space-between;padding:0 10px;">
          <span>${c.istSigDate || "التاريخ:"}</span>
          <span>${todayStr}</span>
        </div>
      </div>
      <div class="ist-sig-box">
        <div class="ist-sig-label">${c.istSigDir || "توقيع و ختم مدير المدرسة"}</div>
        <div class="ist-sig-line"></div>
        <div style="font-size:10px;color:#bbb;padding:4px;">${c.istSigStamp || "توقيع / ختم"}</div>
      </div>
    </div>
    
    <div class="ist-footer-note">${c.istFooterNote || "Ziane School — Rue du poète Taghor, Sidi M'Hamed 16000 · Année scolaire 2026–2027"}</div>
  `;

  const previewDoc = document.getElementById("istimara-doc");
  if (previewDoc) previewDoc.innerHTML = html;
  
  const empty = document.getElementById("preview-empty");
  if (empty) empty.style.display = "none";
  
  const preview = document.getElementById("istimara-preview");
  if (preview) {
    preview.style.display = "block";
    preview.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ── PRINT ── */
function printIstimara() {
  const content = document.getElementById("istimara-doc")?.innerHTML;
  if (!content || content.trim() === '') {
    alert("Please generate the Istimara first.");
    return;
  }
  
  const lang = currentLang === "ar" ? "ar" : "fr";
  const direction = lang === "ar" ? "rtl" : "ltr";
  const align = lang === "ar" ? "right" : "left";
  
  const w = window.open("", "_blank", "width=820,height=950");
  if (!w) {
    alert("Please allow pop-ups to print the document.");
    return;
  }
  
  w.document.write(`<!DOCTYPE html>
  <html lang="${lang}" dir="${direction}">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Istimara - Ziane School</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Amiri:wght@400;700&display=swap" rel="stylesheet"/>
    <style>
      :root{--navy:#292983;--orange:#EE6326;--blue:#1C60B2;--gold:#F3AE16;--light:#f5f6fa;--gray:#6b7280}
      *{margin:0;padding:0;box-sizing:border-box}
      body{font-family:'Amiri',serif;direction:${direction};text-align:${align};margin:20px 30px;font-size:13.5px;color:#111;background:#fff}
      .ist-header{text-align:center;border-bottom:2.5px solid var(--navy);padding-bottom:14px;margin-bottom:18px;position:relative}
      .ist-logo-text{font-size:20px;font-weight:700;color:var(--navy);font-family:'Poppins',sans-serif}
      .ist-logo-text span{color:var(--orange)}
      .ist-logo-sub{font-size:10px;color:var(--gray);letter-spacing:1.5px;font-family:'Poppins',sans-serif}
      .ist-title{font-size:23px;font-weight:700;color:var(--navy)}
      .ist-photo-box{position:absolute;top:4px;left:4px;width:72px;height:82px;border:1px solid #ccc;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:9px;color:#bbb;text-align:center;font-family:'Poppins',sans-serif;line-height:1.4}
      html[dir="rtl"] .ist-photo-box{left:auto;right:4px;}
      .ist-section-title{font-size:13px;font-weight:700;color:var(--navy);border-right:4px solid var(--orange);padding-right:10px;margin:13px 0 9px;font-family:'Poppins',sans-serif;text-align:${align}}
      html[dir="rtl"] .ist-section-title{border-right:none;border-left:4px solid var(--orange);padding-right:0;padding-left:10px;}
      .ist-row{display:flex;justify-content:space-between;gap:20px;margin-bottom:10px;align-items:flex-end}
      html[dir="rtl"] .ist-row{flex-direction:row-reverse;}
      .ist-field{flex:1;border-bottom:1px solid #bbb;padding-bottom:3px;min-height:20px}
      .ist-label{font-size:11px;color:var(--gray);margin-top:3px;text-align:${align}}
      .ist-value{color:var(--blue);font-weight:700;text-align:${align}}
      .ist-subj-row{display:flex;justify-content:flex-end;gap:22px;flex-wrap:wrap;margin:8px 0 12px}
      .ist-subj-item{display:flex;align-items:center;gap:6px;font-size:13px}
      .ist-checkbox{width:13px;height:13px;border:1.5px solid #666;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;font-size:9px}
      .ist-checkbox.checked{background:var(--navy);border-color:var(--navy);color:#fff}
      .ist-rules{background:var(--light);border-radius:7px;padding:10px 13px;margin:8px 0}
      .ist-rule{font-size:11.5px;color:#444;margin-bottom:4px;line-height:1.65;text-align:${align}}
      .ist-agreement{font-size:11.5px;color:#444;line-height:1.85;margin:9px 0;text-align:${align}}
      .ist-sigs{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:13px}
      .ist-sig-box{border:1px solid #ccc;border-radius:7px;padding:9px;text-align:center}
      .ist-sig-label{font-size:11px;font-weight:700;color:var(--navy);margin-bottom:7px;font-family:'Poppins',sans-serif}
      .ist-sig-line{border-bottom:1px solid #bbb;height:26px;margin-bottom:4px}
      .ist-footer-note{text-align:center;margin-top:13px;font-size:9.5px;color:#bbb;font-family:'Poppins',sans-serif;border-top:1px dashed #ddd;padding-top:8px}
      @media print {body{margin:10px 20px}.no-print{display:none !important}}
    </style>
  </head>
  <body>
    ${content}
    <div style="text-align:center;margin-top:20px;font-family:'Poppins',sans-serif;font-size:11px;color:#999;border-top:1px solid #eee;padding-top:10px" class="no-print">
      <button onclick="window.print()" style="padding:10px 30px;background:#292983;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer;font-family:'Poppins',sans-serif;margin:0 5px">🖨️ Print / طباعة</button>
      <button onclick="window.close()" style="padding:10px 30px;background:#6b7280;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer;font-family:'Poppins',sans-serif;margin:0 5px">✕ Close / إغلاق</button>
      <p style="margin-top:8px;font-size:10px;color:#bbb">Tip: In the print dialog, choose "Save as PDF" to download as PDF.<br>نصيحة: في مربع حوار الطباعة، اختر "حفظ بصيغة PDF" لتحميل الملف.</p>
    </div>
  </body>
  </html>`);
  
  w.document.close();
  setTimeout(() => { w.focus(); }, 300);
}

/* ── DOWNLOAD PDF ── */
function downloadPDF() {
  const content = document.getElementById("istimara-doc");
  if (!content || !content.innerHTML || content.innerHTML.trim() === '') {
    alert("Please generate the Istimara first.");
    return;
  }

  const d = lastData || getFormData();
  const fullName = `${d.prenom}_${d.nom}`.replace(/\s+/g, "_") || "Istimara";
  const lang = currentLang === "ar" ? "ar" : "fr";
  const direction = lang === "ar" ? "rtl" : "ltr";
  const align = lang === "ar" ? "right" : "left";

  const btn = document.getElementById('btn-pdf');
  const originalText = btn.textContent;
  btn.textContent = '⏳ Generating PDF...';
  btn.disabled = true;

  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    left: -9999px;
    top: 0;
    width: 794px;
    background: white;
    padding: 30px 40px;
    font-family: 'Amiri', serif;
    direction: ${direction};
    text-align: ${align};
    font-size: 13.5px;
    color: #111;
    z-index: 99999;
  `;
  
  const clone = content.cloneNode(true);
  container.appendChild(clone);
  document.body.appendChild(container);

  if (typeof html2canvas === 'undefined') {
    alert("html2canvas library is loading. Please try again.");
    document.body.removeChild(container);
    btn.textContent = originalText;
    btn.disabled = false;
    return;
  }

  html2canvas(container, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    width: 794,
    height: container.scrollHeight,
    windowHeight: container.scrollHeight,
  }).then(canvas => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${fullName}_Istimara_ZianeSchool.pdf`);
    
    document.body.removeChild(container);
    btn.textContent = originalText;
    btn.disabled = false;
  }).catch(error => {
    console.error("PDF generation error:", error);
    document.body.removeChild(container);
    btn.textContent = originalText;
    btn.disabled = false;
    
    if (confirm("PDF generation failed. Would you like to try the Print method instead?")) {
      printIstimara();
    }
  });
}

/* ── MOBILE MENU TOGGLE ── */
function toggleMenu() {
  console.log("toggleMenu called");
  const links = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  
  if (links) {
    links.classList.toggle("open");
    console.log("Menu toggled:", links.classList.contains("open"));
  }
  
  if (hamburger) {
    hamburger.classList.toggle("active");
  }
}

/* ── NAVBAR SCROLL EFFECT ── */
function handleNavScroll() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 40 ? "0 4px 30px rgba(41,41,131,0.25)" : "none";
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  
  // Language buttons
  document.querySelectorAll(".lang-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      applyLang(this.dataset.lang);
    });
  });

  // Hamburger - using both onclick and event listener
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.removeEventListener("click", toggleMenu);
    hamburger.addEventListener("click", function(e) {
      e.stopPropagation();
      toggleMenu();
    });
    console.log("Hamburger listener attached");
  } else {
    console.log("Hamburger not found");
  }

  // Close menu on link click
  document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
      const links = document.querySelector(".nav-links");
      const hamburgerEl = document.querySelector(".hamburger");
      
      if (links) links.classList.remove("open");
      if (hamburgerEl) hamburgerEl.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    const nav = document.querySelector("nav");
    const links = document.querySelector(".nav-links");
    const hamburgerEl = document.querySelector(".hamburger");
    
    if (links && links.classList.contains("open")) {
      if (!nav.contains(event.target)) {
        links.classList.remove("open");
        if (hamburgerEl) hamburgerEl.classList.remove("active");
      }
    }
  });

  // Scroll effect
  window.addEventListener("scroll", handleNavScroll);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Apply default language
  try {
    applyLang("fr");
  } catch (e) {
    console.error("Error applying default language:", e);
    currentLang = "fr";
    document.body.classList.remove("rtl");
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "fr");
  }
});





// Make sure all functions are globally accessible
window.generateIstimara = generateIstimara;
window.printIstimara = printIstimara;
window.downloadPDF = downloadPDF;
window.toggleMenu = toggleMenu;