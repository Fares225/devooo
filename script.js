/**
 * DEVORA - Software House
 * Interactive Client Script
 * - Bilingual Support (Arabic RTL / English LTR)
 * - Calm Futuristic Ambient Canvas Background
 * - Smooth Navigation & Mobile Menu Handling
 * - Interactive Contact Form & Toast Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initCircuitCanvas();
  initNavigation();
  initContactForm();
  initScrollReveal();
  initCardHoverTilt();
});

/* ==========================================================
   1. BILINGUAL SYSTEM (AR / EN)
   ========================================================== */
const translations = {
  ar: {
    nav: {
      tagline: 'SOFTWARE HOUSE',
      home: 'الرئيسية',
      services: 'خدماتنا',
      team: 'فريق العمل',
      social: 'السوشيال ميديا',
      contact: 'تواصل معنا',
      cta: 'ابدأ مشروعك'
    },
    hero: {
      badge: 'استوديو برمجيات متقدم • حلول رقمية مبتكرة',
      title: 'نبتكر البرمجيات التي تصنع <span class="gradient-text">مستقبل أعمالك</span>',
      desc: 'في <strong>DEVORA</strong> ندمج هندسة الكود الدقيقة مع أرقى التصاميم التفاعلية. نبني مواقع وتطبيقات وأنظمة سحابية فائقة السرعة، مصممة خصيصاً لتمنحك الأفضلية التنافسية.',
      ctaPrimary: 'ابدأ مشروعك معنا',
      ctaSecondary: 'استكشف خدماتنا',
      stat1: 'كود نظيف وآمن',
      stat2: 'كفاءة وأداء سريع',
      stat3: 'دعم فني وتطوير',
      float1Title: 'هندسة متطورة',
      float2Title: 'أداء فائق'
    },
    services: {
      tag: 'ما نقدمه لعملائنا',
      title: 'خدمات برمجية شاملة بأعلى معايير الدقة',
      desc: 'نغطي كافة مراحل بناء المنتج الرقمي من التخطيط المعماري حتى الإطلاق والتشغيل السحابي المستقر.',
      s1Title: 'تطوير مواقع وتطبيقات الويب',
      s1Text: 'بناء منصات ومواقع ويب سريعة الاستجابة، لوحات تحكم ديناميكية، وتطبيقات ويب سحابية SaaS بأحدث أطر العمل العالمية.',
      s2Title: 'تطبيقات الهواتف الذكية',
      s2Text: 'تطوير تطبيقات أصلية ومتعددة المنصات لأنظمة iOS و Android بتجربة استخدام سلسة وأداء استثنائي يرقى لتطلعات المستخدمين.',
      s3Title: 'الأنظمة السحابية والباك إند',
      s3Text: 'هندسة خوادم وبنى تحتية سحابية قابلة للتوسع اللامحدود، مع إدارة قواعد البيانات وواجهات البرمجة الآمنة والفعالة.',
      s4Title: 'تصميم واجهات وتجربة المستخدم',
      s4Text: 'دراسة سلوك المستخدم وتصميم واجهات UI/UX عصرية وأنيقة تضمن سهولة الاستخدام وترفع معدلات التحويل والتفاعل.',
      s5Title: 'حلول الذكاء الاصطناعي والأتمتة',
      s5Text: 'دمج تقنيات الذكاء الاصطناعي التوليدي، الشات بوت المخصص، وأتمتة مسارات العمل لتقليل التكاليف ورفع الإنتاجية.',
      s6Title: 'الأمان السيبراني والصيانة الفنية',
      s6Text: 'فحص الثغرات وتأمين الأنظمة وتشفير البيانات، مع خطط صيانة وتحديث دورية تضمن استمرارية أعمالك بدون توقف.'
    },
    team: {
      tag: 'فريق العمل',
      title: 'فريق DEVORA',
      desc: 'نخبة من المطورين والمهندسين الشغوفين ببناء حلول برمجية استثنائية وعصرية.',
      memberName: 'Fares',
      memberRole: 'Web & Mobile App Developer',
      memberBio: 'مطور واجهات وتطبيقات متكاملة بخبرة عالية في تحويل الأفكار إلى حلول رقمية احترافية سريعة وجذابة.',
      faresName: 'Fares',
      faresRole: 'Web & Mobile App Developer',
      faresBio: 'مطور واجهات وتطبيقات متكاملة بخبرة عالية في تحويل الأفكار إلى حلول رقمية احترافية سريعة وجذابة.',
      ziadName: 'Ziad Mohamed',
      ziadRole: 'Web & Backend Developer',
      ziadBio: 'مطور مواقع وأنظمة خلفية (Backend) متخصص في بناء خوادم سريعة وقواعد بيانات آمنة وواجهات برمجية متطورة.',
      viewPortfolio: 'Veiw Portfolio',
      contactHim: 'Contact him'
    },
    social: {
      tag: 'تابع مجتمعنا الرقمي',
      title: 'DEVORA على السوشيال ميديا',
      desc: 'تابع كواليس البرمجة، شروحات التقنية، وأحدث إطلاقات مشاريعنا عبر قنواتنا الرسمية على انستجرام وتيك توك.',
      igDesc: 'تصاميم واجهات رقمية، نصائح في هندسة البرمجيات، وتغطيات حصرية لأحدث أعمالنا وتقنياتنا.',
      igFollow: 'متابعة على Instagram',
      ttDesc: 'فيديوهات قصيرة وممتعة عن كواليس المبرمجين، حلول برمجية سريعة، وأحدث تريندات الذكاء الاصطناعي.',
      ttFollow: 'متابعة على TikTok'
    },
    contact: {
      tag: 'ابدأ رحلتك التقنية',
      title: 'تواصل مع خبراء DEVORA',
      desc: 'سواء كان لديك فكرة مشروع جديد أو ترغب في تطوير نظامك الحالي، نحن جاهزون للاستماع ومساعدتك فوراً.',
      phoneTitle: 'الهاتف / واتساب المباشر',
      phoneVal: '01040606031',
      phoneSub: 'متاح للرد والتواصل الفوري على مدار الساعة',
      emailTitle: 'البريد الإلكتروني',
      emailSub: 'نرد خلال 12 ساعة كحد أقصى',
      locationTitle: 'المقر وطبيعة العمل',
      locationVal: 'استوديو برمجيات رقمي عالمي',
      locationSub: 'نخدم العملاء في كافة الدول العربية والعالم',
      socialTitle: 'حسابات التواصل الرسمية',
      socialSub: 'تابعنا وتواصل مباشرة عبر المنصات:',
      nameLabel: 'الاسم بالكامل *',
      emailLabel: 'البريد الإلكتروني *',
      phoneLabel: 'رقم الهاتف / واتساب',
      serviceLabel: 'نوع الخدمة المطلوبة',
      messageLabel: 'تفاصيل فكرة المشروع أو الاستفسار *',
      submitBtn: 'إرسال الرسالة إلى DEVORA',
      waQuickTitle: 'واتساب مباشر',
      toastTitle: 'تم تجهيز رسالتك بنجاح!',
      toastDesc: 'جارٍ فتح واتساب لإرسال رسالتك مباشرة إلى رقمنا 01040606031...',
      toastWaBtn: 'فتح محادثة واتساب الآن'
    },
    footer: {
      about: 'شركة برمجيات رائدة متخصصة في هندسة التطبيقات الحديثة والحلول الرقمية الفائقة بألوان المستقبل.',
      quickLinks: 'روابط سريعة',
      socialHeading: 'قنوات التواصل',
      socialIntro: 'تابعنا مباشرة على وسائل التواصل الاجتماعي المعتمدة:',
      rights: '© 2026 DEVORA. جميع الحقوق محفوظة | هندسة برمجية متطورة'
    }
  },
  en: {
    nav: {
      tagline: 'SOFTWARE HOUSE',
      home: 'Home',
      services: 'Services',
      team: 'Team',
      social: 'Social',
      contact: 'Contact',
      cta: 'Start Project'
    },
    hero: {
      badge: 'Advanced Software Studio • Digital Innovation',
      title: 'Architecting Software That Shapes <span class="gradient-text">Your Future</span>',
      desc: 'At <strong>DEVORA</strong>, we fuse precision engineering with stunning digital interaction. We engineer ultra-fast web apps, mobile solutions, and cloud architectures built to scale.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'Explore Services',
      stat1: 'Clean & Secure Code',
      stat2: 'Blazing Fast Performance',
      stat3: 'Dedicated Support',
      float1Title: 'Clean Architecture',
      float2Title: 'High Performance'
    },
    services: {
      tag: 'What We Deliver',
      title: 'End-to-End Engineering Excellence',
      desc: 'Covering every phase of digital product craftsmanship from architecture design to resilient cloud deployment.',
      s1Title: 'Full-Stack Web Applications',
      s1Text: 'High-performance web applications, responsive SaaS portals, and scalable interactive interfaces built with modern frameworks.',
      s2Title: 'Native & Cross-Platform Mobile',
      s2Text: 'Seamless mobile apps for iOS and Android delivering fluid UI gestures and robust offline/online synchronization.',
      s3Title: 'Cloud Systems & Backend APIs',
      s3Text: 'Resilient cloud microservices, high-throughput APIs, and database architectures prepared for limitless scale.',
      s4Title: 'UI/UX Engineering & Design',
      s4Text: 'Human-centered user experiences, bespoke design systems, and engaging interactions designed to maximize conversion.',
      s5Title: 'AI Solutions & Automation',
      s5Text: 'Integrating generative AI, intelligent custom chatbots, and automated workflows to accelerate operational efficiency.',
      s6Title: 'Cybersecurity & DevOps Maintenance',
      s6Text: 'Comprehensive code audits, encrypted architectures, and continuous 24/7 system monitoring to protect your business.'
    },
    team: {
      tag: 'The Team',
      title: 'DEVORA Team',
      desc: 'An elite squad of creative developers and engineers building cutting-edge digital experiences.',
      memberName: 'Fares',
      memberRole: 'Web & Mobile App Developer',
      memberBio: 'Specializing in high-performance web development and modern mobile applications with clean architecture.',
      faresName: 'Fares',
      faresRole: 'Web & Mobile App Developer',
      faresBio: 'Specializing in high-performance web development and modern mobile applications with clean architecture.',
      ziadName: 'Ziad Mohamed',
      ziadRole: 'Web & Backend Developer',
      ziadBio: 'Specializing in scalable web development, robust backend systems, secure databases, and high-performance APIs.',
      viewPortfolio: 'Veiw Portfolio',
      contactHim: 'Contact him'
    },
    social: {
      tag: 'Join Our Community',
      title: 'DEVORA on Social Media',
      desc: 'Follow our engineering behind-the-scenes, programming tips, and project launches exclusively on Instagram and TikTok.',
      igDesc: 'Visual UI showcases, engineering tips, and behind-the-scenes of our latest tech builds.',
      igFollow: 'Follow on Instagram',
      ttDesc: 'Quick programming reels, developer insights, and latest AI tooling demos.',
      ttFollow: 'Follow on TikTok'
    },
    contact: {
      tag: 'Start Your Journey',
      title: 'Connect with DEVORA Experts',
      desc: 'Whether building a brand-new digital product or upgrading an existing ecosystem, our team is ready to assist you.',
      phoneTitle: 'Direct Phone & WhatsApp',
      phoneVal: '01040606031',
      phoneSub: 'Available 24/7 for instant communication',
      emailTitle: 'Email Us',
      emailSub: 'We respond within 12 hours',
      locationTitle: 'Global Tech Studio',
      locationVal: 'Digital Software Studio',
      locationSub: 'Serving clients globally & across the Middle East',
      socialTitle: 'Official Social Handles',
      socialSub: 'Follow & connect directly with us:',
      nameLabel: 'Full Name *',
      emailLabel: 'Email Address *',
      phoneLabel: 'Phone / WhatsApp',
      serviceLabel: 'Requested Service',
      messageLabel: 'Project Requirements or Inquiry *',
      submitBtn: 'Send Message to DEVORA',
      waQuickTitle: 'Direct WhatsApp',
      toastTitle: 'Message Prepared Successfully!',
      toastDesc: 'Opening WhatsApp to deliver your message directly to 01040606031...',
      toastWaBtn: 'Open WhatsApp Chat Now'
    },
    footer: {
      about: 'A next-generation software house crafting resilient digital products and futuristic web experiences.',
      quickLinks: 'Quick Links',
      socialHeading: 'Official Channels',
      socialIntro: 'Connect directly through our official social media channels:',
      rights: '© 2026 DEVORA. All Rights Reserved | Precision Software House'
    }
  }
};

let currentLang = 'ar';

function initI18n() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');

  function updatePageLanguage(lang) {
    currentLang = lang;
    const isAr = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.body.dir = isAr ? 'rtl' : 'ltr';
    if (langLabel) langLabel.textContent = isAr ? 'EN' : 'العربية';

    // Update all data-i18n elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const keyPath = el.getAttribute('data-i18n').split('.');
      let val = translations[lang];
      for (const k of keyPath) {
        if (val && val[k]) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null) {
        if (typeof val === 'string' && val.includes('<')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update placeholders
    const nameInput = document.getElementById('name');
    const msgInput = document.getElementById('message');
    if (nameInput) nameInput.placeholder = isAr ? 'مثال: أحمد عبد الله' : 'e.g. Alex Morgan';
    if (msgInput) msgInput.placeholder = isAr ? 'اكتب نبذة عن متطلبات المشروع، أهدافه، والجدول الزمني المرغوب...' : 'Describe your project scope, goals, and desired timeframe...';
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      updatePageLanguage(nextLang);
    });
  }
}

/* ==========================================================
   2. CALM AMBIENT CIRCUIT CANVAS
   ========================================================== */
function initCircuitCanvas() {
  const canvas = document.getElementById('circuit-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Calm, slow-moving nodes with faint neon traces
  const nodes = [];
  const nodeCount = Math.floor(Math.min(width, height) / 35);

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#00f0ff' : '#8b5cf6'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connection lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0) n.x = width;
      if (n.x > width) n.x = 0;
      if (n.y < 0) n.y = height;
      if (n.y > height) n.y = 0;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.globalAlpha = 0.35;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================
   3. NAVIGATION & SCROLL HIGHLIGHT
   ========================================================== */
function initNavigation() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky Header state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section indicator on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });
}

/* ==========================================================
   4. CONTACT FORM & DIRECT WHATSAPP DELIVERY (01040606031)
   ========================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const toastModal = document.getElementById('toast-modal');
  const toastTitle = document.getElementById('toast-title');
  const toastDesc = document.getElementById('toast-desc');
  const toastWaLink = document.getElementById('toast-wa-link');
  const toastCloseBtn = document.getElementById('toast-close-btn');

  if (!form) return;

  const targetPhoneNumber = '201040606031'; // رقم الواتساب: 01040606031

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const phone = (document.getElementById('phone')?.value || '').trim();
    const serviceSelect = document.getElementById('service-select');
    const serviceText = serviceSelect?.options[serviceSelect.selectedIndex]?.text || '';
    const message = (document.getElementById('message')?.value || '').trim();

    // Trigger button loading spinner
    if (submitBtn) submitBtn.classList.add('loading');

    // Build the formatted WhatsApp message
    let waMessage = '';
    if (currentLang === 'ar') {
      waMessage = `*🚀 طلب مشروع جديد من موقع DEVORA*\n` +
        `------------------------------------\n` +
        `👤 *الاسم:* ${name}\n` +
        `📧 *البريد الإلكتروني:* ${email}\n` +
        `📱 *رقم الهاتف / واتساب:* ${phone || 'غير محدد'}\n` +
        `🛠️ *الخدمة المطلوبة:* ${serviceText}\n\n` +
        `📝 *تفاصيل الاستفسار والمشروع:*\n` +
        `${message}\n` +
        `------------------------------------\n` +
        `🌐 *مرسل تلقائياً عبر موقع DEVORA الرسمي*`;
    } else {
      waMessage = `*🚀 New Project Inquiry from DEVORA Website*\n` +
        `------------------------------------\n` +
        `👤 *Name:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `📱 *Phone / WhatsApp:* ${phone || 'Not provided'}\n` +
        `🛠️ *Requested Service:* ${serviceText}\n\n` +
        `📝 *Project Details / Inquiry:*\n` +
        `${message}\n` +
        `------------------------------------\n` +
        `🌐 *Sent automatically via DEVORA Official Website*`;
    }

    const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      if (submitBtn) submitBtn.classList.remove('loading');

      // Update toast content
      if (toastTitle) {
        toastTitle.textContent = currentLang === 'ar' ? 'تم تجهيز رسالتك بنجاح!' : 'Message Ready!';
      }
      if (toastDesc) {
        toastDesc.textContent = currentLang === 'ar'
          ? 'جارٍ توجيهك إلى واتساب لإرسال الرسالة إلى الرقم 01040606031...'
          : 'Redirecting to WhatsApp to send your inquiry to 01040606031...';
      }
      if (toastWaLink) {
        toastWaLink.href = whatsappUrl;
        toastWaLink.style.display = 'inline-flex';
      }

      // Show toast modal
      if (toastModal) {
        toastModal.classList.add('show');
        toastModal.setAttribute('aria-hidden', 'false');

        // Auto hide after 6s
        setTimeout(() => {
          toastModal.classList.remove('show');
          toastModal.setAttribute('aria-hidden', 'true');
        }, 6000);
      }

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // Reset form
      form.reset();
    }, 700);
  });

  if (toastCloseBtn && toastModal) {
    toastCloseBtn.addEventListener('click', () => {
      toastModal.classList.remove('show');
      toastModal.setAttribute('aria-hidden', 'true');
    });
  }
}

/* ==========================================================
   5. SCROLL REVEAL ANIMATIONS
   ========================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.service-card, .team-card, .team-empty-state, .social-hub-card, .info-card, .glass-card, .section-header'
  );

  revealElements.forEach((el, index) => {
    el.classList.add('reveal-init');
    const delay = (index % 4) + 1;
    el.classList.add(`reveal-delay-${delay}`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================
   6. 3D INTERACTIVE CARD TILT
   ========================================================== */
function initCardHoverTilt() {
  const cards = document.querySelectorAll('.service-card, .social-hub-card, .hero-image-wrapper');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

