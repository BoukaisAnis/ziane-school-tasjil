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

function getIstimaraDocumentCSS(root) {
  return `
    ${root},
    ${root} * {
      box-sizing: border-box;
      letter-spacing: 0 !important;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }

    ${root} {
      --navy: #292983;
      --orange: #ee6326;
      --blue: #1c60b2;
      --gold: #f3ae16;
      --gray: #6b7280;
      width: 794px;
      min-height: 1123px;
      margin: 0 auto;
      padding: 42px 52px;
      background: #fff;
      color: #111;
      font-family: "Cairo", "Amiri", "Tahoma", "Arial", sans-serif;
      font-size: 13px;
      line-height: 1.55;
      direction: inherit;
      text-align: inherit;
      border: 0;
      border-radius: 0;
    }

    ${root} .ist-header {
      position: relative;
      min-height: 96px;
      margin-bottom: 16px;
      padding: 0 86px 12px;
      text-align: center;
      border-bottom: 2.5px solid var(--navy);
    }

    ${root} .ist-logo-text,
    ${root} .ist-logo-sub,
    ${root} .ist-photo-box,
    ${root} .ist-footer-note,
    ${root} .ist-header [style*="Poppins"] {
      font-family: "Poppins", "Arial", sans-serif;
    }

    ${root} .ist-logo-text {
      font-size: 20px;
      font-weight: 700;
      color: var(--navy);
      line-height: 1.2;
    }

    ${root} .ist-logo-text span {
      color: var(--orange);
    }

    ${root} .ist-logo-sub {
      max-width: 470px;
      margin: 2px auto 0;
      color: var(--gray);
      font-size: 8px;
      line-height: 1.35;
      text-transform: uppercase;
    }

    ${root} .ist-title {
      margin: 4px 0 2px;
      color: var(--navy);
      font-family: "Cairo", "Amiri", "Tahoma", serif;
      font-size: 22px;
      font-weight: 800;
      line-height: 1.25;
    }

    ${root} .ist-photo-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 70px;
      height: 86px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #777;
      background: #f8f8f8;
      border: 1.5px solid #999;
      border-radius: 7px;
      font-size: 8px;
      line-height: 1.35;
      text-align: center;
    }

    [dir="rtl"] ${root} .ist-photo-box {
      right: 0;
      left: auto;
    }

    ${root} .ist-section-title {
      margin: 12px 0 7px;
      padding: 6px 10px;
      color: var(--navy);
      background: #f8f9ff;
      border-right: 3px solid var(--orange);
      border-radius: 5px;
      font-family: "Cairo", "Amiri", "Tahoma", serif;
      font-size: 12px;
      font-weight: 800;
      line-height: 1.35;
      text-align: inherit;
    }

    [dir="rtl"] ${root} .ist-section-title {
      border-right: 0;
      border-left: 3px solid var(--orange);
    }

    ${root} .ist-info-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px 14px;
      margin-bottom: 6px;
    }

    ${root} .ist-field {
      min-height: 24px;
      padding-bottom: 3px;
      border-bottom: 1px solid #bbb;
    }

    ${root} .ist-label {
      margin-top: 2px;
      color: var(--gray);
      font-size: 10px;
      font-weight: 600;
      text-align: inherit;
    }

    ${root} .ist-value {
      display: block;
      color: var(--blue);
      font-family: "Cairo", "Amiri", "Tahoma", serif;
      font-size: 13px;
      font-weight: 800;
      line-height: 1.35;
      text-align: inherit;
      unicode-bidi: plaintext;
    }

    ${root} .ist-subj-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 10px 16px;
      margin: 7px 0 12px;
      padding: 9px 12px;
      background: #f8f9ff;
      border-radius: 7px;
    }

    [dir="rtl"] ${root} .ist-subj-row {
      justify-content: flex-end;
    }

    ${root} .ist-subj-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #222;
      font-size: 12px;
      font-weight: 700;
      line-height: 1.4;
      unicode-bidi: isolate;
    }

    ${root} .ist-checkbox {
      width: 13px;
      height: 13px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 13px;
      border: 1.5px solid #666;
      border-radius: 3px;
      font-size: 8px;
      font-weight: 800;
      line-height: 1;
    }

    ${root} .ist-checkbox.checked {
      color: #fff;
      background: var(--navy);
      border-color: var(--navy);
    }

    ${root} .ist-rules {
      margin: 7px 0;
      padding: 9px 12px;
      background: #f8f9ff;
      border-left: 3px solid var(--gold);
      border-radius: 7px;
    }

    [dir="rtl"] ${root} .ist-rules {
      border-right: 3px solid var(--gold);
      border-left: 0;
    }

    ${root} .ist-rule {
      margin-bottom: 3px;
      color: #333;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.55;
      text-align: inherit;
      unicode-bidi: plaintext;
    }

    ${root} .ist-agreement {
      margin: 7px 0;
      padding: 9px 11px;
      color: #333;
      background: #fafafa;
      border: 1px solid #e9e9e9;
      border-radius: 7px;
      font-size: 11px;
      line-height: 1.65;
      text-align: inherit;
      unicode-bidi: plaintext;
    }

    ${root} .ist-sigs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin-top: 12px;
    }

    ${root} .ist-sig-box {
      padding: 8px 10px;
      text-align: center;
      background: #fafafa;
      border: 1.5px solid #ddd;
      border-radius: 7px;
    }

    ${root} .ist-sig-label {
      margin-bottom: 5px;
      color: var(--navy);
      font-family: "Cairo", "Amiri", "Tahoma", serif;
      font-size: 10px;
      font-weight: 800;
      line-height: 1.35;
    }

    ${root} .ist-sig-line {
      height: 22px;
      margin-bottom: 4px;
      border-bottom: 1.5px solid #bbb;
    }

    ${root} .ist-footer-note {
      margin-top: 11px;
      padding-top: 8px;
      color: #999;
      border-top: 1px dashed #d7d7d7;
      font-size: 8px;
      line-height: 1.4;
      text-align: center;
    }

    @media (max-width: 560px) {
      ${root} {
        width: 100%;
        min-height: auto;
        padding: 16px;
      }

      ${root} .ist-info-grid,
      ${root} .ist-sigs {
        grid-template-columns: 1fr;
      }

      ${root} .ist-header {
        padding-right: 76px;
        padding-left: 76px;
      }
    }
  `;
}

function waitForRenderReady(root) {
  const fontReady = document.fonts?.ready || Promise.resolve();
  const imageReady = Promise.all(
    Array.from(root.querySelectorAll("img")).map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    })
  );

  return Promise.all([fontReady, imageReady]).then(
    () => new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 80)))
  );
}

async function renderIstimaraCanvas(sheet) {
  const options = {
    scale: Math.min(Math.max(window.devicePixelRatio || 2, 2), 3),
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
    width: sheet.offsetWidth,
    height: sheet.scrollHeight,
    windowWidth: sheet.offsetWidth,
    windowHeight: sheet.scrollHeight,
    scrollX: 0,
    scrollY: 0,
  };

  try {
    return await html2canvas(sheet, { ...options, foreignObjectRendering: true });
  } catch (error) {
    console.warn("Foreign-object PDF render failed, retrying canvas renderer:", error);
    return html2canvas(sheet, { ...options, foreignObjectRendering: false });
  }
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
      <div style="display:flex;justify-content:center;align-items:center;margin-top:3px;">
        <div class="ist-title">${c.istTitle || "إِسْتِمَارَةُ تَسْجِيل"}</div>
      </div>
      <div style="font-size:10px;color:#888;font-family:'Poppins',sans-serif;margin-top:1px">${c.istSubtitle || "Registration Form"}</div>
      <div style="font-size:9px;color:#666;font-family:'Poppins',sans-serif;margin-top:2px;">Date: ${todayStr}</div>
    </div>

    <div class="ist-section-title">${c.istSectionInfo || "المعلومات الشخصية"}</div>
    
    <div class="ist-info-grid">
      <div>
        <div class="ist-field"><span class="ist-value">${d.prenom}</span></div>
        <div class="ist-label">${c.istFirstLabel || "الاسم"}</div>
      </div>
      <div>
        <div class="ist-field"><span class="ist-value">${d.nom}</span></div>
        <div class="ist-label">${c.istLastLabel || "اللقب"}</div>
      </div>
    </div>
    
    <div class="ist-info-grid">
      <div>
        <div class="ist-field"><span class="ist-value">${formatDOB(d.dob)}</span></div>
        <div class="ist-label">${c.istDobLabel || "تاريخ الميلاد"}</div>
      </div>
      <div>
        <div class="ist-field"><span class="ist-value">${d.niveau}</span></div>
        <div class="ist-label">${c.istLevelLabel || "المستوى الدراسي"}</div>
      </div>
    </div>
    
    <div class="ist-info-grid">
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
        <div style="font-size:8px;color:#888;display:flex;justify-content:space-between;padding:0 8px;">
          <span>${c.istSigDate || "التاريخ:"}</span>
          <span>${todayStr}</span>
        </div>
      </div>
      <div class="ist-sig-box">
        <div class="ist-sig-label">${c.istSigDir || "توقيع و ختم مدير المدرسة"}</div>
        <div class="ist-sig-line"></div>
        <div style="font-size:8px;color:#bbb;padding:2px;">${c.istSigStamp || "توقيع / ختم"}</div>
      </div>
    </div>
    
    <div class="ist-footer-note">${c.istFooterNote || "Ziane School — Rue du poète Taghor, Sidi M'Hamed 16000 · Année scolaire 2026–2027"}</div>
  `;

  const previewDoc = document.getElementById("istimara-doc");
  if (previewDoc) {
    previewDoc.setAttribute("lang", currentLang);
    previewDoc.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
    previewDoc.innerHTML = html;
  }
  
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
  
  const w = window.open("", "_blank", "width=900,height=1000");
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
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Amiri:wght@400;700&family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet"/>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      html, body {
        margin: 0;
        padding: 0;
        min-height: 100%;
        background: #f0f0f0;
      }
      
      body {
        display: flex;
        justify-content: center;
        padding: 20px;
        font-family: 'Amiri', serif;
        direction: ${direction};
        text-align: ${align};
      }
      
      .print-sheet {
        width: 794px;
        min-height: 1123px;
        background: white;
        padding: 42px 52px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        position: relative;
        font-family: "Amiri", "Cairo", "Tahoma", "Arial", sans-serif;
        color: #111;
        font-size: 13px;
        line-height: 1.55;
      }
      
      .print-sheet {
        --navy: #292983;
        --orange: #ee6326;
        --blue: #1c60b2;
        --gold: #f3ae16;
        --gray: #6b7280;
      }
      
      .print-sheet .ist-header {
        position: relative;
        min-height: 96px;
        margin-bottom: 16px;
        padding: 0 86px 12px;
        text-align: center;
        border-bottom: 2.5px solid var(--navy);
      }
      
      .print-sheet .ist-logo-text,
      .print-sheet .ist-logo-sub,
      .print-sheet .ist-photo-box,
      .print-sheet .ist-footer-note {
        font-family: "Poppins", "Arial", sans-serif;
      }
      
      .print-sheet .ist-logo-text {
        font-size: 20px;
        font-weight: 700;
        color: var(--navy);
        line-height: 1.2;
      }
      
      .print-sheet .ist-logo-text span {
        color: var(--orange);
      }
      
      .print-sheet .ist-logo-sub {
        max-width: 470px;
        margin: 2px auto 0;
        color: var(--gray);
        font-size: 8px;
        line-height: 1.35;
        text-transform: uppercase;
      }
      
      .print-sheet .ist-title {
        margin: 4px 0 2px;
        color: var(--navy);
        font-family: "Amiri", "Cairo", serif;
        font-size: 22px;
        font-weight: 800;
        line-height: 1.25;
      }
      
      .print-sheet .ist-photo-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 70px;
        height: 86px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #777;
        background: #f8f8f8;
        border: 1.5px solid #999;
        border-radius: 7px;
        font-size: 8px;
        line-height: 1.35;
        text-align: center;
      }
      
      [dir="rtl"] .print-sheet .ist-photo-box {
        left: auto;
        right: 0;
      }
      
      .print-sheet .ist-section-title {
        margin: 12px 0 7px;
        padding: 6px 10px;
        color: var(--navy);
        background: #f8f9ff;
        border-right: 3px solid var(--orange);
        border-radius: 5px;
        font-family: "Amiri", "Cairo", serif;
        font-size: 12px;
        font-weight: 800;
        line-height: 1.35;
        text-align: inherit;
      }
      
      [dir="rtl"] .print-sheet .ist-section-title {
        border-right: 0;
        border-left: 3px solid var(--orange);
      }
      
      .print-sheet .ist-info-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px 14px;
        margin-bottom: 6px;
      }
      
      .print-sheet .ist-field {
        min-height: 24px;
        padding-bottom: 3px;
        border-bottom: 1px solid #bbb;
      }
      
      .print-sheet .ist-label {
        margin-top: 2px;
        color: var(--gray);
        font-size: 10px;
        font-weight: 600;
        text-align: inherit;
      }
      
      .print-sheet .ist-value {
        display: block;
        color: var(--blue);
        font-family: "Amiri", "Cairo", serif;
        font-size: 13px;
        font-weight: 800;
        line-height: 1.35;
        text-align: inherit;
        unicode-bidi: plaintext;
      }
      
      .print-sheet .ist-subj-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 10px 16px;
        margin: 7px 0 12px;
        padding: 9px 12px;
        background: #f8f9ff;
        border-radius: 7px;
      }
      
      [dir="rtl"] .print-sheet .ist-subj-row {
        justify-content: flex-end;
      }
      
      .print-sheet .ist-subj-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #222;
        font-size: 12px;
        font-weight: 700;
        line-height: 1.4;
        unicode-bidi: isolate;
      }
      
      .print-sheet .ist-checkbox {
        width: 13px;
        height: 13px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 13px;
        border: 1.5px solid #666;
        border-radius: 3px;
        font-size: 8px;
        font-weight: 800;
        line-height: 1;
      }
      
      .print-sheet .ist-checkbox.checked {
        color: #fff;
        background: var(--navy);
        border-color: var(--navy);
      }
      
      .print-sheet .ist-rules {
        margin: 17px 0;
        padding: 9px 12px;
        background: #f8f9ff;
        border-left: 3px solid var(--gold);
        border-radius: 7px;
      }
      
      [dir="rtl"] .print-sheet .ist-rules {
        border-left: 0;
        border-right: 3px solid var(--gold);
      }
      
      .print-sheet .ist-rule {
        margin-bottom: 13px;
        color: #333;
        font-size: 11px;
        font-weight: 500;
        line-height: 1.55;
        text-align: inherit;
        unicode-bidi: plaintext;
      }
      
      .print-sheet .ist-agreement {
        margin: 17px 0;
        padding: 9px 11px;
        color: #333;
        background: #fafafa;
        border: 1px solid #e9e9e9;
        border-radius: 7px;
        font-size: 11px;
        line-height: 1.65;
        text-align: inherit;
        unicode-bidi: plaintext;
      }
      
      .print-sheet .ist-sigs {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 55px;
      }
      
      .print-sheet .ist-sig-box {
        padding: 8px 10px;
        text-align: center;
        background: #fafafa;
        border: 1.5px solid #ddd;
        border-radius: 7px;
      }
      
      .print-sheet .ist-sig-label {
        margin-bottom: 15px;
        color: var(--navy);
        font-family: "Amiri", "Cairo", serif;
        font-size: 10px;
        font-weight: 800;
        line-height: 1.35;
      }
      
      .print-sheet .ist-sig-line {
        height: 22px;
        margin-bottom: 4px;
        border-bottom: 1.5px solid #bbb;
      }
      
      .print-sheet .ist-footer-note {
        margin-top: 80px;
        padding-top: 8px;
        color: #999;
        border-top: 1px dashed #d7d7d7;
        font-size: 8px;
        line-height: 1.4;
        text-align: center;
      }
      
      @media print {
        html, body {
          background: white;
          padding: 0;
        }
        
        body {
          display: block;
          padding: 0;
        }
        
        .print-sheet {
          width: 100%;
          min-height: 100vh;
          box-shadow: none;
          padding: 15mm;
        }
        
        .no-print {
          display: none !important;
        }
      }
      
      @media (max-width: 560px) {
        .print-sheet {
          width: 100%;
          min-height: auto;
          padding: 16px;
        }
        
        .print-sheet .ist-info-grid,
        .print-sheet .ist-sigs {
          grid-template-columns: 1fr;
        }
        
        .print-sheet .ist-header {
          padding-right: 76px;
          padding-left: 76px;
        }
      }
    </style>
  </head>
  <body>
    <div class="print-sheet">
      ${content}
    </div>
    <div style="text-align:center;margin-top:15px;font-family:'Poppins',sans-serif;font-size:11px;color:#999;border-top:1px solid #eee;padding-top:8px;width:794px;" class="no-print">
      <button onclick="window.print()" style="padding:8px 20px;border:none;border-radius:6px;font-size:13px;cursor:pointer;font-family:'Poppins',sans-serif;margin:0 4px;background:#292983;color:#fff;">🖨️ Print / طباعة</button>
      <button onclick="window.close()" style="padding:8px 20px;border:none;border-radius:6px;font-size:13px;cursor:pointer;font-family:'Poppins',sans-serif;margin:0 4px;background:#6b7280;color:#fff;">✕ Close / إغلاق</button>
      <p style="margin-top:6px;font-size:9px;color:#bbb">Tip: In the print dialog, choose "Save as PDF" to download as PDF.<br>نصيحة: في مربع حوار الطباعة، اختر "حفظ بصيغة PDF" لتحميل الملف.</p>
    </div>
  </body>
  </html>`);
  
  w.document.close();
  setTimeout(() => { w.focus(); }, 300);
}

/* ── DOWNLOAD PDF ── */
async function downloadPDF() {
  const content = document.getElementById("istimara-doc");
  if (!content || !content.innerHTML || content.innerHTML.trim() === '') {
    alert("Please generate the Istimara first.");
    return;
  }

  if (typeof html2canvas === "undefined" || !window.jspdf?.jsPDF) {
    alert("PDF libraries are still loading. Please try again in a moment.");
    return;
  }

  const d = lastData || getFormData();
  const fullName = `${d.prenom}_${d.nom}`.replace(/\s+/g, "_") || "Istimara";
  const lang = currentLang === "ar" ? "ar" : "fr";
  const direction = lang === "ar" ? "rtl" : "ltr";
  const btn = document.getElementById('btn-pdf');
  const originalText = btn?.textContent || "";

  if (btn) {
    btn.textContent = currentLang === "ar" ? "جاري إنشاء PDF..." : "Generating PDF...";
    btn.disabled = true;
  }

  // Create a clean rendering container
  const renderRoot = document.createElement("div");
  renderRoot.className = "pdf-render-root";
  renderRoot.setAttribute("lang", lang);
  renderRoot.setAttribute("dir", direction);
  renderRoot.style.cssText = `
    position: fixed;
    left: -10000px;
    top: 0;
    width: 794px;
    background: #fff;
    pointer-events: none;
    z-index: -1;
  `;

  // Create the PDF page with all styles
  const sheet = document.createElement("div");
  sheet.className = "pdf-page";
  sheet.setAttribute("lang", lang);
  sheet.setAttribute("dir", direction);
  sheet.style.cssText = `
    width: 794px;
    min-height: 1123px;
    background: white;
    padding: 42px 52px;
    font-family: "Amiri", "Cairo", "Tahoma", "Arial", sans-serif;
    color: #111;
    font-size: 13px;
    line-height: 1.55;
    direction: ${direction};
    text-align: ${direction === "rtl" ? "right" : "left"};
  `;
  sheet.innerHTML = content.innerHTML;

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
    .pdf-page {
      --navy: #292983;
      --orange: #ee6326;
      --blue: #1c60b2;
      --gold: #f3ae16;
      --gray: #6b7280;
    }
    
    .pdf-page .ist-header {
      position: relative;
      min-height: 96px;
      margin-bottom: 16px;
      padding: 0 86px 12px;
      text-align: center;
      border-bottom: 2.5px solid var(--navy);
    }
    
    .pdf-page .ist-logo-text,
    .pdf-page .ist-logo-sub,
    .pdf-page .ist-photo-box,
    .pdf-page .ist-footer-note {
      font-family: "Poppins", "Arial", sans-serif;
    }
    
    .pdf-page .ist-logo-text {
      font-size: 20px;
      font-weight: 700;
      color: var(--navy);
      line-height: 1.2;
    }
    
    .pdf-page .ist-logo-text span {
      color: var(--orange);
    }
    
    .pdf-page .ist-logo-sub {
      max-width: 470px;
      margin: 5px auto 0;
      color: var(--gray);
      font-size: 8px;
      line-height: 1.35;
      text-transform: uppercase;
    }
    
    .pdf-page .ist-title {
      margin: 8px 0 2px;
      color: var(--navy);
      font-family: "Amiri", "Cairo", serif;
      font-size: 22px;
      font-weight: 800;
      line-height: 1.25;
    }
    
    .pdf-page .ist-photo-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 96px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #777;
      background: #f8f8f8;
      border: 1.5px solid #999;
      border-radius: 7px;
      font-size: 8px;
      line-height: 1.35;
      text-align: center;
    }
    
    [dir="rtl"] .pdf-page .ist-photo-box {
      right: 0;
      left: auto;
    }
    
    .pdf-page .ist-section-title {
      margin: 12px 0 7px;
      padding: 6px 10px;
      color: var(--navy);
      background: #f8f9ff;
      border-right: 3px solid var(--orange);
      border-radius: 5px;
      font-family: "Amiri", "Cairo", serif;
      font-size: 12px;
      font-weight: 800;
      line-height: 1.35;
      text-align: inherit;
    }
    
    [dir="rtl"] .pdf-page .ist-section-title {
      border-right: 0;
      border-left: 3px solid var(--orange);
    }
    
    .pdf-page .ist-info-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px 14px;
      margin-bottom: 6px;
    }
    
    .pdf-page .ist-field {
      min-height: 24px;
      padding-bottom: 2px;
      border-bottom: 1px solid #bbb;
    }
    
    .pdf-page .ist-label {
      margin-top: 2px;
      color: var(--gray);
      font-size: 10px;
      font-weight: 600;
      text-align: inherit;
    }
    
    .pdf-page .ist-value {
      display: block;
      color: var(--blue);
      font-family: "Amiri", "Cairo", serif;
      font-size: 13px;
      font-weight: 800;
      line-height: 1.35;
      text-align: inherit;
      unicode-bidi: plaintext;
    }
    
    .pdf-page .ist-subj-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 10px 16px;
      margin: 7px 0 12px;
      padding: 9px 12px;
      background: #f8f9ff;
      border-radius: 7px;
    }
    
    [dir="rtl"] .pdf-page .ist-subj-row {
      justify-content: flex-end;
    }
    
    .pdf-page .ist-subj-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #222;
      font-size: 12px;
      font-weight: 700;
      line-height: 1.4;
      unicode-bidi: isolate;
    }
    
    .pdf-page .ist-checkbox {
      width: 13px;
      height: 13px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 13px;
      border: 1.5px solid #666;
      border-radius: 3px;
      font-size: 8px;
      font-weight: 800;
      line-height: 1;
    }
    
    .pdf-page .ist-checkbox.checked {
      color: #fff;
      background: var(--navy);
      border-color: var(--navy);
    }
    
    .pdf-page .ist-rules {
      margin: 17px 0;
      padding: 9px 12px;
      background: #f8f9ff;
      border-left: 3px solid var(--gold);
      border-radius: 7px;
    }
    
    [dir="rtl"] .pdf-page .ist-rules {
      border-right: 3px solid var(--gold);
      border-left: 0;
    }
    
    .pdf-page .ist-rule {
      margin-bottom: 3px;
      color: #333;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.55;
      text-align: inherit;
      unicode-bidi: plaintext;
    }
    
    .pdf-page .ist-agreement {
      margin: 17px 0;
      padding: 9px 11px;
      color: #333;
      background: #fafafa;
      border: 1px solid #e9e9e9;
      border-radius: 7px;
      font-size: 11px;
      line-height: 1.65;
      text-align: inherit;
      unicode-bidi: plaintext;
    }
    
    .pdf-page .ist-sigs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin-top: 55px;
    }
    
    .pdf-page .ist-sig-box {
      margin-top: 105px;
      padding: 18px 20px;
      text-align: center;
      background: #fafafa;
      border: 1.5px solid #ddd;
      border-radius: 7px;
    }
    
    .pdf-page .ist-sig-label {
      margin-bottom: 15px;
      color: var(--navy);
      font-family: "Amiri", "Cairo", serif;
      font-size: 10px;
      font-weight: 800;
      line-height: 1.35;
    }
    
    .pdf-page .ist-sig-line {
      height: 22px;
      margin-bottom: 4px;
      border-bottom: 1.5px solid #999999;
    }
    
    .pdf-page .ist-footer-note {
      margin-top: 130px;
      padding-top: 8px;
      color: rgb(100, 100, 100)d3d;
      border-top: 1px dashed #d7d7d7;
      font-size: 8px;
      line-height: 1.4;
      text-align: center;
    }
  `;

  renderRoot.appendChild(style);
  renderRoot.appendChild(sheet);
  document.body.appendChild(renderRoot);

  try {
    // Wait for fonts and rendering
    await document.fonts.ready;
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Force all content to be visible
    const allElements = sheet.querySelectorAll('*');
    allElements.forEach(el => {
      el.style.visibility = 'visible';
      el.style.display = '';
    });
    
    // Ensure the sheet is visible
    sheet.style.visibility = 'visible';
    sheet.style.display = 'block';
    
    // Render to canvas with better options
    const canvas = await html2canvas(sheet, {
      scale: 2.5,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794,
      height: sheet.scrollHeight,
      windowWidth: 794,
      windowHeight: sheet.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDoc, clonedElement) => {
        // Ensure everything is visible in the clone
        const all = clonedElement.querySelectorAll('*');
        all.forEach(el => {
          el.style.visibility = 'visible';
          el.style.display = '';
        });
        clonedElement.style.visibility = 'visible';
        clonedElement.style.display = 'block';
      }
    });
    
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    const imgData = canvas.toDataURL('image/jpeg', 0.98);
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${fullName}_Istimara_ZianeSchool.pdf`);
    
  } catch (error) {
    console.error("PDF generation error:", error);
    alert("PDF generation failed. Please try using the Print method instead.");
    printIstimara();
  } finally {
    document.body.removeChild(renderRoot);
    if (btn) {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  }
}

/* ── MOBILE MENU TOGGLE ── */
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  
  if (links) {
    links.classList.toggle("open");
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
  // Language buttons
  document.querySelectorAll(".lang-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      applyLang(this.dataset.lang);
    });
  });

  // Hamburger
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", function(e) {
      e.stopPropagation();
      toggleMenu();
    });
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