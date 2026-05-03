'use strict';

/* ── Translation dictionary ── */
const T = {
  /* Navbar */
  'nav.home':            { en: 'Home',                     ar: 'الرئيسية' },
  'nav.about':           { en: 'About Us',                 ar: 'من نحن' },
  'nav.services':        { en: 'Our Services',             ar: 'خدماتنا' },
  'nav.team':            { en: 'Team',                     ar: 'الفريق' },
  'nav.faq':             { en: 'FAQ',                      ar: 'الأسئلة الشائعة' },
  'nav.contact':         { en: 'Contact Us',               ar: 'اتصل بنا' },

  /* Footer */
  'footer.desc':         { en: "Kuwait's undisputed leader in consumer delivery — setting the gold standard for speed, reliability, and excellence across the State of Kuwait.",
                           ar: 'الرائد في التوصيل بالكويت — نضع المعيار الذهبي للسرعة والموثوقية والتميز في جميع أنحاء دولة الكويت.' },
  'footer.col.company':  { en: 'Company',                  ar: 'الشركة' },
  'footer.col.services': { en: 'Services',                 ar: 'الخدمات' },
  'footer.col.contact':  { en: 'Contact',                  ar: 'تواصل معنا' },
  'footer.lnk.about':    { en: 'About Us',                 ar: 'من نحن' },
  'footer.lnk.team':     { en: 'Our Team',                 ar: 'فريقنا' },
  'footer.lnk.services': { en: 'Services',                 ar: 'الخدمات' },
  'footer.lnk.faq':      { en: 'FAQ',                      ar: 'الأسئلة الشائعة' },
  'footer.lnk.contact':  { en: 'Contact',                  ar: 'اتصل بنا' },
  'footer.lnk.sameday':  { en: 'Same-Day Delivery',        ar: 'توصيل في نفس اليوم' },
  'footer.lnk.ecom':     { en: 'E-Commerce Fulfillment',   ar: 'تلبية التجارة الإلكترونية' },
  'footer.lnk.express':  { en: 'Express Courier',          ar: 'توصيل سريع' },
  'footer.lnk.corporate':{ en: 'Corporate Logistics',      ar: 'لوجستيات الشركات' },
  'footer.lnk.cold':     { en: 'Cold-Chain Delivery',      ar: 'توصيل سلسلة التبريد' },
  'footer.hours':        { en: 'Sat – Thu: 7 AM – 10 PM',  ar: 'السبت – الخميس: ٧ص – ١٠م' },
  'footer.rights':       { en: '© 2025 Azhaljack Logistic Services. All rights reserved.',
                           ar: '© ٢٠٢٥ أزهال جاك للخدمات اللوجستية. جميع الحقوق محفوظة.' },
  'footer.made':         { en: 'Made with pride in Kuwait', ar: 'صُنع بفخر في الكويت' },

  /* Common CTAs */
  'btn.explore':         { en: 'Explore Our Services',      ar: 'استكشف خدماتنا' },
  'btn.quote':           { en: 'Get a Quote',               ar: 'احصل على عرض سعر' },
  'btn.free-quote':      { en: 'Get a Free Quote',          ar: 'احصل على عرض مجاني' },
  'btn.call':            { en: 'Call Now',                  ar: 'اتصل الآن' },
  'btn.story':           { en: 'Our Full Story',            ar: 'قصتنا الكاملة' },
  'btn.partner':         { en: 'Partner With Us',           ar: 'شارك معنا' },
  'btn.nationwide':      { en: 'Start Delivering Nationwide', ar: 'ابدأ التوصيل على مستوى الكويت' },
  'btn.all-svc':         { en: 'View All Services',         ar: 'عرض جميع الخدمات' },
  'btn.learn':           { en: 'Learn More',                ar: 'اعرف المزيد' },
  'btn.directions':      { en: 'Get Directions',            ar: 'احصل على الاتجاهات' },
  'btn.whatsapp':        { en: 'Open WhatsApp',             ar: 'افتح واتساب' },
  'btn.email':           { en: 'Send Email',                ar: 'أرسل بريداً إلكترونياً' },
  'btn.contact-team':    { en: 'Contact Our Team',          ar: 'تواصل مع فريقنا' },
  'btn.conversation':    { en: 'Start a Conversation',      ar: 'ابدأ محادثة' },
  'btn.opportunities':   { en: 'Explore Opportunities',     ar: 'استكشف الفرص' },

  /* Index — hero & stats */
  'i.hero.badge':        { en: "Kuwait's Premier Logistics Partner", ar: 'الشريك اللوجستي الأول في الكويت' },
  'i.stat.monthly':      { en: 'Monthly Deliveries',        ar: 'توصيلة شهرياً' },
  'i.stat.clients':      { en: 'Happy Clients',             ar: 'عميل سعيد' },
  'i.stat.govs':         { en: 'Governorates',              ar: 'محافظات' },
  'i.stat.ontime':       { en: 'On-Time Delivery',          ar: 'توصيل بالوقت' },
  'i.hstat.monthly':     { en: 'Deliveries Monthly',        ar: 'توصيلة شهرياً' },
  'i.hstat.rate':        { en: 'On-Time Rate',              ar: 'نسبة الالتزام' },
  'i.hstat.govs':        { en: 'Governorates Covered',      ar: 'محافظات مشمولة' },

  /* Index — operations */
  'i.ops.badge':         { en: 'Behind Every Delivery',     ar: 'خلف كل توصيلة' },
  'i.ops.c1.badge':      { en: 'Our Fleet',                 ar: 'أسطولنا' },
  'i.ops.c1.title':      { en: '200+ Branded Vehicles',     ar: 'أكثر من ٢٠٠ مركبة' },
  'i.ops.c1.sub':        { en: 'GPS-tracked, insured, Kuwait-wide', ar: 'بتقنية GPS، مؤمنة، تغطي الكويت' },
  'i.ops.c2.badge':      { en: 'Pickup Network',            ar: 'شبكة الاستلام' },
  'i.ops.c2.title':      { en: 'Multi-Point Collection Chains', ar: 'سلاسل استلام متعددة النقاط' },
  'i.ops.c2.sub':        { en: 'From every partner — straight to every door', ar: 'من كل شريك — مباشرةً لكل باب' },
  'i.ops.c3.badge':      { en: 'Smart Technology',          ar: 'تقنية ذكية' },
  'i.ops.c3.title':      { en: 'Live GPS Tracking Platform', ar: 'منصة تتبع مباشر' },
  'i.ops.c3.sub':        { en: 'Real-time visibility, every shipment', ar: 'رؤية فورية لكل شحنة' },

  /* Index — process */
  'i.proc.badge':        { en: 'Our Process',               ar: 'طريقة عملنا' },
  'i.proc.step1':        { en: 'Book Online',               ar: 'احجز أونلاين' },
  'i.proc.step2':        { en: 'We Collect',                ar: 'نأتي إليك' },
  'i.proc.step3':        { en: 'In Transit',                ar: 'في الطريق' },
  'i.proc.step4':        { en: 'Delivered',                 ar: 'تم التسليم' },

  /* Index — about preview */
  'i.about.badge':       { en: 'Who We Are',                ar: 'من نحن' },
  'i.about.years':       { en: 'Years of Excellence',       ar: 'سنوات من التميز' },

  /* Index — services */
  'i.svc.badge':         { en: 'What We Offer',             ar: 'ما نقدمه' },
  'i.svc.1':             { en: 'Same-Day Delivery',         ar: 'توصيل في نفس اليوم' },
  'i.svc.2':             { en: 'E-Commerce Fulfillment',    ar: 'تلبية الطلبات الإلكترونية' },
  'i.svc.3':             { en: 'Express Courier',           ar: 'توصيل سريع' },
  'i.svc.4':             { en: 'Corporate Logistics',       ar: 'لوجستيات الشركات' },
  'i.svc.5':             { en: 'Cold-Chain Delivery',       ar: 'توصيل سلسلة التبريد' },
  'i.svc.6':             { en: 'Business Consultation',     ar: 'استشارات الأعمال' },

  /* Index — why */
  'i.why.badge':         { en: 'Why Azhaljack',             ar: 'لماذا أزهال جاك' },
  'i.why.1':             { en: 'Real-Time Tracking',        ar: 'تتبع فوري' },
  'i.why.2':             { en: '100% Kuwait Coverage',      ar: 'تغطية ١٠٠٪ للكويت' },
  'i.why.3':             { en: 'Dedicated Support',         ar: 'دعم متخصص' },
  'i.why.4':             { en: 'Cash on Delivery',          ar: 'الدفع عند الاستلام' },
  'i.why.5':             { en: 'Insured Shipments',         ar: 'شحنات مؤمنة' },
  'i.why.6':             { en: 'On-Demand Pickup Runs',     ar: 'استلام عند الطلب' },
  'i.why.7':             { en: 'Competitive Pricing',       ar: 'أسعار تنافسية' },
  'i.why.8':             { en: 'Proven Track Record',       ar: 'سجل حافل' },

  /* Index — coverage */
  'i.cov.badge':         { en: 'Full State Coverage',       ar: 'تغطية كاملة للدولة' },
  'i.gov.1':             { en: 'Capital Governorate',       ar: 'محافظة العاصمة' },
  'i.gov.2':             { en: 'Hawalli Governorate',       ar: 'محافظة حولي' },
  'i.gov.3':             { en: 'Farwaniya Governorate',     ar: 'محافظة الفروانية' },
  'i.gov.4':             { en: 'Ahmadi Governorate',        ar: 'محافظة الأحمدي' },
  'i.gov.5':             { en: 'Jahra Governorate',         ar: 'محافظة الجهراء' },
  'i.gov.6':             { en: 'Mubarak Al-Kabeer',         ar: 'محافظة مبارك الكبير' },

  /* Index — testimonials & CTA */
  'i.testi.badge':       { en: 'Client Voices',             ar: 'آراء عملائنا' },
  'i.cta.badge':         { en: 'Start Today',               ar: 'ابدأ اليوم' },

  /* About */
  'a.hero.badge':        { en: 'Our Story',                 ar: 'قصتنا' },
  'a.c1.badge':          { en: 'Our Fleet',                 ar: 'أسطولنا' },
  'a.c1.title':          { en: "Kuwait's Largest Branded Delivery Fleet", ar: 'أكبر أسطول توصيل موسوم في الكويت' },
  'a.c1.sub':            { en: '200+ vehicles — GPS tracked, 24/7', ar: 'أكثر من ٢٠٠ مركبة — تتبع GPS، ٢٤/٧' },
  'a.c2.badge':          { en: 'Pickup Network',            ar: 'شبكة الاستلام' },
  'a.c2.title':          { en: 'Multi-Point Pickup Chains', ar: 'سلاسل استلام متعددة النقاط' },
  'a.c2.sub':            { en: 'From every partner — straight to every door', ar: 'من كل شريك — مباشرةً لكل باب' },
  'a.c3.badge':          { en: 'Technology',                ar: 'التكنولوجيا' },
  'a.c3.title':          { en: 'Real-Time Operations Dashboard', ar: 'لوحة عمليات فورية' },
  'a.c3.sub':            { en: 'Every delivery, tracked live — always', ar: 'كل توصيلة، مُتتبَّعة مباشرة — دائماً' },
  'a.mvv.badge':         { en: 'Our Foundation',            ar: 'أساسنا' },
  'a.mvv.title':         { en: 'What We Stand For',         ar: 'ما نؤمن به' },
  'a.mission':           { en: 'Our Mission',               ar: 'مهمتنا' },
  'a.vision':            { en: 'Our Vision',                ar: 'رؤيتنا' },
  'a.values':            { en: 'Our Values',                ar: 'قيمنا' },
  'a.story.badge':       { en: 'The Journey',               ar: 'الرحلة' },
  'a.story.years':       { en: 'Years Operating',           ar: 'سنوات التشغيل' },
  'a.story.deliveries':  { en: 'Total Deliveries',          ar: 'إجمالي التوصيلات' },
  'a.story.clients':     { en: 'Business Clients',          ar: 'عملاء تجاريون' },
  'a.story.govs':        { en: 'Governorates',              ar: 'محافظات' },
  'a.story.sub1':        { en: 'Serving Kuwait since day one', ar: 'في خدمة الكويت منذ اليوم الأول' },
  'a.story.sub2':        { en: 'And counting every day',    ar: 'ويزداد كل يوم' },
  'a.story.sub3':        { en: 'Across all industries',     ar: 'عبر جميع القطاعات' },
  'a.story.sub4':        { en: 'Full Kuwait coverage',      ar: 'تغطية شاملة للكويت' },
  'a.tl.badge':          { en: 'Milestones',                ar: 'المحطات البارزة' },
  'a.tl.1.title':        { en: 'The Beginning',             ar: 'البداية' },
  'a.tl.2.title':        { en: 'All 6 Governorates Covered', ar: 'تغطية المحافظات الست' },
  'a.tl.3.title':        { en: 'Digital Transformation',    ar: 'التحول الرقمي' },
  'a.tl.4.title':        { en: '100,000 Monthly Deliveries', ar: '١٠٠,٠٠٠ توصيلة شهرياً' },
  'a.tl.5.title':        { en: "Kuwait's Undisputed #1",    ar: 'الأول في الكويت بلا منازع' },
  'a.cta.badge':         { en: 'Join Our Journey',          ar: 'انضم إلى رحلتنا' },

  /* Services */
  's.hero.badge':        { en: 'Our Services',              ar: 'خدماتنا' },
  's.s1.badge':          { en: 'Flagship Service',          ar: 'الخدمة الرائدة' },
  's.s1.title':          { en: 'Same-Day Delivery',         ar: 'توصيل في نفس اليوم' },
  's.s2.badge':          { en: 'E-Commerce',                ar: 'التجارة الإلكترونية' },
  's.s2.title':          { en: 'E-Commerce Fulfillment',    ar: 'تلبية الطلبات الإلكترونية' },
  's.s3.badge':          { en: 'Priority Delivery',         ar: 'توصيل أولوية' },
  's.s3.title':          { en: 'Express Courier',           ar: 'توصيل سريع' },
  's.s4.title':          { en: 'Corporate Logistics',       ar: 'لوجستيات الشركات' },
  's.s5.title':          { en: 'Cold-Chain Delivery',       ar: 'توصيل سلسلة التبريد' },
  's.s6.title':          { en: 'Returns Management',        ar: 'إدارة المرتجعات' },
  's.consult.badge':     { en: 'Business Services',         ar: 'خدمات الأعمال' },
  's.consult.title':     { en: 'Business Consultation',     ar: 'استشارات الأعمال' },
  's.sub1.title':        { en: 'Business Revival',          ar: 'إحياء الأعمال' },
  's.sub2.title':        { en: 'Setup & Launch',            ar: 'التأسيس والإطلاق' },
  's.sub3.title':        { en: 'Recruitment & Staffing',    ar: 'التوظيف والكوادر' },
  's.sub4.title':        { en: 'Operations Framework',      ar: 'إطار العمليات' },
  's.cta.badge':         { en: 'Ready to Start?',           ar: 'مستعد للبدء؟' },

  /* Team */
  't.hero.badge':        { en: 'The People Behind the Excellence', ar: 'الأشخاص خلف التميز' },
  't.sec.badge':         { en: 'Leadership',                ar: 'القيادة' },
  't.ceo.role':          { en: 'Chief Executive Officer',   ar: 'الرئيس التنفيذي' },
  't.ops.role':          { en: 'Operations Manager',        ar: 'مدير العمليات' },
  't.hr.role':           { en: 'HR Officer',                ar: 'مسؤول الموارد البشرية' },
  't.cult.badge':        { en: 'Our Culture',               ar: 'ثقافتنا' },
  't.cult.f1':           { en: 'Continuous Training',       ar: 'التدريب المستمر' },
  't.cult.f2':           { en: 'A Culture of Ownership',    ar: 'ثقافة الملكية' },
  't.cult.f3':           { en: 'Kuwait-Proud',              ar: 'فخر الكويت' },
  't.stat.members':      { en: 'Team Members',              ar: 'أعضاء الفريق' },
  't.stat.retention':    { en: 'Staff Retention',           ar: 'الاحتفاظ بالموظفين' },
  't.stat.training':     { en: 'Training Hours',            ar: 'ساعات تدريب' },
  't.stat.score':        { en: 'Internal Score',            ar: 'نقاط داخلية' },
  't.join.badge':        { en: 'Join Us',                   ar: 'انضم إلينا' },

  /* FAQ */
  'f.hero.badge':        { en: 'Got Questions?',            ar: 'لديك أسئلة؟' },
  'f.cat.general':       { en: 'General',                   ar: 'عام' },
  'f.cat.delivery':      { en: 'Delivery & Tracking',       ar: 'التوصيل والتتبع' },
  'f.cat.pricing':       { en: 'Pricing & Payments',        ar: 'الأسعار والمدفوعات' },
  'f.cat.tech':          { en: 'Technology & Integration',  ar: 'التكنولوجيا والتكامل' },
  'f.sidebar.badge':     { en: 'Still Have Questions?',     ar: 'لا تزال لديك أسئلة؟' },

  /* Contact */
  'c.hero.badge':        { en: "Let's Talk",                ar: 'لنتحدث' },
  'c.pill.call':         { en: 'Call Us',                   ar: 'اتصل بنا' },
  'c.pill.wa':           { en: 'WhatsApp',                  ar: 'واتساب' },
  'c.pill.email':        { en: 'Email Us',                  ar: 'راسلنا' },
  'c.pill.call.sub':     { en: 'Sat–Thu, 7 AM – 10 PM',    ar: 'السبت–الخميس، ٧ص–١٠م' },
  'c.pill.wa.sub':       { en: 'Fastest response channel',  ar: 'أسرع قناة للرد' },
  'c.pill.email.sub':    { en: 'Response within 2 hours',   ar: 'رد خلال ساعتين' },
  'c.info.badge':        { en: 'Contact Information',       ar: 'معلومات الاتصال' },
  'c.info.heading':      { en: "We're at Your Service",     ar: 'في خدمتكم دائماً' },
  'c.info.office.lbl':   { en: 'Head Office',               ar: 'المكتب الرئيسي' },
  'c.info.phone.lbl':    { en: 'Main Line',                 ar: 'الخط الرئيسي' },
  'c.info.wa.lbl':       { en: 'WhatsApp Business',         ar: 'واتساب الأعمال' },
  'c.info.email.lbl':    { en: 'General Enquiries',         ar: 'استفسارات عامة' },
  'c.info.hours.lbl':    { en: 'Business Hours',            ar: 'ساعات العمل' },
  'c.info.hours.val':    { en: 'Saturday – Thursday\n7:00 AM – 10:00 PM',
                           ar: 'السبت – الخميس\n٧:٠٠ ص – ١٠:٠٠ م' },
  'c.action.call.lbl':   { en: 'Direct Line',              ar: 'الخط المباشر' },
  'c.action.wa.lbl':     { en: 'WhatsApp Business',        ar: 'واتساب الأعمال' },
  'c.action.email.lbl':  { en: 'Email',                    ar: 'البريد الإلكتروني' },
  'c.follow.badge':      { en: 'Follow Us',                 ar: 'تابعنا' },
};

/* ── Apply language ── */
function applyLanguage(lang) {
  const isAr = lang === 'ar';
  const html = document.documentElement;

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  html.classList.toggle('lang-ar', isAr);

  /* Translate data-i18n elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const t = T[el.dataset.i18n];
    if (t) el.textContent = t[lang] ?? t.en;
  });

  /* Show / hide .lang-en and .lang-ar blocks */
  document.querySelectorAll('.lang-en').forEach(el => { el.hidden = isAr; });
  document.querySelectorAll('.lang-ar').forEach(el => { el.hidden = !isAr; });

  /* Update toggle button label */
  const lbl = document.getElementById('langLabel');
  if (lbl) lbl.textContent = isAr ? 'English' : 'العربية';

  localStorage.setItem('lang', lang);
}

/* ── Bootstrap on every page load ── */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  applyLanguage(saved);

  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLanguage((localStorage.getItem('lang') || 'en') === 'en' ? 'ar' : 'en');
  });
});
