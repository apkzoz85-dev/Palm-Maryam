export const PHONE_DISPLAY = "01027709029";
export const PHONE_TEL = "+201027709029";
export const WHATSAPP_URL = "https://wa.me/201027709029";
export const LEADS_EMAIL = "leads@grandeur-spaces.com";

export type Locale = "ar" | "en";

export type Dict = {
  locale: Locale;
  dir: "rtl" | "ltr";
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
  };
  nav: {
    highlights: string;
    phase: string;
    units: string;
    payment: string;
    gallery: string;
    register: string;
    switchLabel: string;
    switchHref: string;
  };
  hero: {
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    lead: string;
    ctaRegister: string;
    ctaCall: string;
    ctaWhatsapp: string;
    stats: { value: string; label: string }[];
    paymentLine: string;
  };
  highlights: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  pyramid: {
    title: string;
    text: string;
    alt: string;
  };
  phase: {
    title: string;
    text: string;
    bullets: string[];
    soldOut: string;
  };
  units: {
    title: string;
    intro: string;
    headers: string[];
    rows: string[][];
    note: string;
  };
  payment: {
    title: string;
    intro: string;
    steps: { value: string; label: string }[];
    note: string;
  };
  amenities: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  masterplan: {
    title: string;
    text: string;
  };
  gallery: {
    title: string;
    intro: string;
    items: { src: string; alt: string; caption: string }[];
  };
  form: {
    title: string;
    intro: string;
    name: string;
    phone: string;
    phonePlaceholder: string;
    unit: string;
    unitOptions: { value: string; label: string }[];
    notes: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacyNote: string;
  };
  disclaimer: {
    title: string;
    prices: string;
    agent: string;
    general: string;
  };
  privacy: {
    summary: string;
    text: string;
  };
  footer: {
    tagline: string;
    contact: string;
    rights: string;
  };
  floating: {
    call: string;
    whatsapp: string;
  };
  cookie: {
    text: string;
    accept: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
};

export const ar: Dict = {
  locale: "ar",
  dir: "rtl",
  seo: {
    title: "Palm Gardens at PX | تاون هاوس وفيلات بالم هيلز PX",
    description:
      "Palm Gardens at PX من بالم هيلز: 36 فدان تاون هاوس وفيلات بإطلالات على الأهرامات، Footprint 17.5%، تسليم خلال 4 سنوات، ومقدم 5% مع تقسيط على 7.5 سنة. قريباً.",
    keywords: [
      "بالم هيلز PX",
      "Palm Gardens at PX",
      "تاون هاوس بالم هيلز",
      "فيلات بالم هيلز PX",
      "فيلا للبيع في بالم هيلز",
      "تاون هاوس للبيع PX",
      "فيلا بإطلالة على الأهرامات",
      "أسعار فيلات بالم هيلز",
      "تقسيط بالم هيلز",
      "مشروع بالم هيلز الجديد",
    ],
    ogLocale: "ar_EG",
  },
  nav: {
    highlights: "المميزات",
    phase: "المرحلة الثانية",
    units: "الوحدات والأسعار",
    payment: "خطة السداد",
    gallery: "تطور التنفيذ",
    register: "سجّل اهتمامك",
    switchLabel: "English",
    switchHref: "/en",
  },
  hero: {
    badge: "قريباً الأسبوع الجاي",
    eyebrow: "بالم هيلز PX",
    title: "Palm Gardens at PX",
    subtitle: "تاون هاوس وفيلات للبيع في بالم هيلز PX",
    lead: "المرحلة الثانية من مشروع PX بالم هيلز، على مساحة 36 فدان، بتصميم منخفض الكثافة ومساحات خضراء ومسطحات مائية، وإطلالات واضحة على الأهرامات. سجّل اهتمامك دلوقتي وكن أول واحد يعرف تفاصيل الإطلاق والأسعار.",
    ctaRegister: "سجّل اهتمامك",
    ctaCall: "اتصل الآن",
    ctaWhatsapp: "واتساب",
    stats: [
      { value: "370", label: "فدان إجمالي المشروع" },
      { value: "36", label: "فدان المرحلة الثانية" },
      { value: "17.5%", label: "نسبة الـ Footprint" },
      { value: "4", label: "سنوات للتسليم" },
    ],
    paymentLine: "5% مقدم + 5% بعد 3 شهور + الباقي على 7.5 سنة",
  },
  highlights: {
    title: "ليه بالم هيلز PX؟ مميزات Palm Gardens at PX",
    intro:
      "مشروع PX بالم هيلز مقام على 370 فدان، والمرحلة الثانية Palm Gardens بتجمع بين الخصوصية والخضرة وقرب من كل حاجة.",
    items: [
      {
        title: "من أعلى مناطق بالم هيلز",
        text: "المرحلة مقامة على واحدة من أعلى المناطق منسوبًا داخل Palm Hills، بارتفاعات تتراوح تقريبًا بين 128 و140 متر.",
      },
      {
        title: "إطلالات على الأهرامات",
        text: "إطلالات واضحة على الأهرامات من أجزاء كبيرة من المشروع، وده بيخلّي كل فيلا وتاون هاوس ليها قيمة مختلفة.",
      },
      {
        title: "Footprint 17.5% بس",
        text: "نسبة تغطية منخفضة، يعني مساحات مفتوحة واسعة وطابع راقي في كل شارع وكل بيت.",
      },
      {
        title: "Masterplan عالمي",
        text: "المخطط من Chapman Taylor بالتعاون مع Alchemy Architecture، بتصميم متوازن بين العمران والطبيعة.",
      },
      {
        title: "Clubhouse بمساحة 15 فدان",
        text: "مركز رئيسي للأنشطة، فيه Gymnasium كبير ومسارات للمشي والدراجات ومرافق اجتماعية ورياضية مناسبة للعيلة.",
      },
      {
        title: "مدرسة دولية وSt. Regis",
        text: "المخطط بيشمل St. Regis Hotel ومدرسة دولية ومناطق تجارية، وBranded Residences مستقبلية.",
      },
    ],
  },
  pyramid: {
    title: "عيشة بإطلالة على الأهرامات",
    text: "لما المرحلة تكون من أعلى مناطق بالم هيلز، الإطلالة مش مجرد ديكور. الأهرامات قدامك من أجزاء كبيرة من المشروع، والمساحة اللي حواليك تفضل مفتوحة ومريحة.",
    alt: "إطلالة على الأهرامات من بالم هيلز PX",
  },
  phase: {
    title: "المرحلة الثانية: Palm Gardens بمساحة 36 فدان",
    text: "36 فدان مخصصة بالكامل للفيلات والتاون هاوس، بتصميم منخفض الكثافة. منطقة The Valley لوحدها حوالي 18 فدان، يعني تقريبًا 50% من المرحلة. الفيلات في قلب المرحلة والتاون هاوس على الأطراف.",
    bullets: [
      "منطقة The Valley بمساحة حوالي 18 فدان",
      "فيلات في منتصف المرحلة وتاون هاوس على الأطراف",
      "مسطحات مائية ومساحات خضراء في كل مكان",
      "فيلات Type 1 و3 و4 و5، وتاون هاوس Middle وCorner",
    ],
    soldOut: "المرحلة الأولى من الفيلات اتباعت بالكامل Sold Out. أول إطلاق كان فبراير 2024، والتنفيذ بدأ بعد حوالي 10 شهور من الإطلاق.",
  },
  units: {
    title: "أنواع الوحدات والأسعار الاسترشادية",
    intro: "تاون هاوس فينيشد بالكامل، وفيلات Core & Shell. المساحات تقريبية والأسعار استرشادية.",
    headers: ["الوحدة", "مساحة الأرض", "المساحة البنائية", "الغرف", "التشطيب", "السعر الاسترشادي"],
    rows: [
      ["Townhouse Middle", "212 م²", "200.72 م²", "3 غرف", "Fully Finished", "32.6 – 33.0 مليون جنيه"],
      ["Townhouse Corner", "215.5 م²", "210.81 م²", "3 غرف", "Fully Finished", "34.0 – 34.6 مليون جنيه"],
      ["Type 4 Villa", "281.6 م²", "239.91 م²", "4 غرف", "Core & Shell", "حوالي 37 مليون جنيه"],
      ["Type 3 Villa", "298.9 م²", "246.15 م²", "4 غرف", "Core & Shell", "حوالي 39 مليون جنيه"],
      ["Type 1 Villa", "420 – 470 م²", "313.67 م²", "4 غرف", "Core & Shell", "53 – 62 مليون جنيه"],
      ["Type 5 Villa", "545 – 596 م²", "428.04 م²", "6 غرف", "Core & Shell", "66 – 77 مليون جنيه"],
    ],
    note: "الأسعار استرشادية وقابلة للتغيير دون إشعار مسبق. للتفاصيل والمتاح حاليًا، كلّمنا.",
  },
  payment: {
    title: "خطة السداد: مقدم 5% وتقسيط على 7.5 سنة",
    intro: "خطة سداد مريحة مصممة عشان تقدر تحجز من غير ما تحتاج مبلغ كبير قدام.",
    steps: [
      { value: "5%", label: "مقدم عند الحجز" },
      { value: "5%", label: "بعد 3 شهور من الحجز" },
      { value: "7.5", label: "سنة لسداد الباقي" },
      { value: "4", label: "سنوات للتسليم" },
    ],
    note: "شروط الحجز والتقسيط بتتحدد بالتفصيل وقت الحجز الرسمي.",
  },
  amenities: {
    title: "مرافق وخدمات Lifestyle متكاملة",
    intro: "كل حاجة تحتاجها العيلة موجودة جوه المشروع أو قريبة منه.",
    items: [
      { title: "Clubhouse كبير", text: "مساحة 15 فدان كمركز رئيسي للأنشطة والمناسبات." },
      { title: "Gymnasium وأنشطة رياضية", text: "صالة رياضية كبيرة ومساحات للأنشطة الرياضية والاجتماعية." },
      { title: "مسارات مشي ودراجات", text: "مسارات مخصصة للمشي وركوب العجل وسط الخضرة." },
      { title: "مدرسة دولية", text: "ضمن المخطط العام للمشروع." },
      { title: "St. Regis Hotel", text: "فندق ضمن المخطط، وBranded Residences مستقبلية." },
      { title: "مولات ومناطق تجارية", text: "بجانب Golf Central وCrown Central وHale Town في المنطقة المحيطة." },
    ],
  },
  masterplan: {
    title: "مخطط عمراني بيجمع الخضرة والحياة",
    text: "PX بيستهدف الجيل الأصغر بشكل خاص، بمزيج من السكن والترفيه والمرافق اللي بتخلي الحياة اليومية أسهل وأممتع.",
  },
  gallery: {
    title: "تطور التنفيذ على أرض المشروع",
    intro: "صور حقيقية من موقع التنفيذ بتوضح تقدم الأعمال في المرحلة.",
    items: [
      { src: "/images/progress-1.jpg", alt: "أعمال تنفيذ مشروع Palm Gardens at PX بالم هيلز", caption: "أعمال التنفيذ بالموقع" },
      { src: "/images/progress-2.jpg", alt: "هياكل الفيلات في مشروع بالم هيلز PX", caption: "هياكل الفيلات" },
      { src: "/images/progress-3.jpg", alt: "تاون هاوس قيد التنفيذ في بالم هيلز PX", caption: "التاون هاوس قيد التنفيذ" },
    ],
  },
  form: {
    title: "سجّل اهتمامك بـ Palm Gardens at PX",
    intro: "هنتواصل معاك أول ما تتعلن تفاصيل الإطلاق والأسعار النهائية، ومن غير التزام.",
    name: "الاسم",
    phone: "رقم الموبايل (واتساب)",
    phonePlaceholder: "01xxxxxxxxx",
    unit: "نوع الوحدة اللي بتدوّر عليها",
    unitOptions: [
      { value: "townhouse", label: "تاون هاوس" },
      { value: "villa", label: "فيلا" },
      { value: "both", label: "الاتنين" },
      { value: "unsure", label: "مش متأكد لسه" },
    ],
    notes: "ملاحظات (اختياري)",
    submit: "ابعت طلبك",
    sending: "جاري الإرسال...",
    success: "تم استلام طلبك. هنتواصل معاك قريبًا.",
    error: "حصلت مشكلة في الإرسال. جرّب تاني أو كلّمنا على الواتساب.",
    privacyNote: "بياناتك بتتستخدم للتواصل معاك بخصوص المشروع بس.",
  },
  disclaimer: {
    title: "إخلاء مسؤولية",
    prices:
      "الأسعار والمساحات والمواصفات المعروضة استرشادية وتقريبية، وقد تتغير دون إشعار مسبق. الصفحة دي للتسويق والتعريف بالمشروع، ولا تعتبر عرضًا ملزمًا.",
    agent:
      "Grandeur Spaces وكيل بيع معتمد لمشروعات Palm Hills. المعلومات المذكورة مبنية على المواد التسويقية المتاحة وقت النشر.",
    general: "الصور المستخدمة توضح مراحل التنفيذ والإطلالات، وليست بالضرورة تمثل الوحدات النهائية.",
  },
  privacy: {
    summary: "سياسة الخصوصية",
    text: "بنجمع الاسم ورقم الموبايل اللي بتسيبه في الفورم عشان نتواصل معاك بخصوص مشروع Palm Gardens at PX. مش بنبيع بياناتك ولا بنشاركها مع أي طرف تالت إلا لو ده ضروري لتنفيذ طلبك. ممكن تطلب تشيل بياناتك في أي وقت عن طريق الواتساب أو الإيميل.",
  },
  footer: {
    tagline: "Palm Gardens at PX — تاون هاوس وفيلات في بالم هيلز PX",
    contact: "للتواصل",
    rights: "جميع الحقوق محفوظة",
  },
  floating: {
    call: "اتصل",
    whatsapp: "واتساب",
  },
  cookie: {
    text: "الموقع بيستخدم كوكيز بسيطة لتحسين التجربة وقياس الأداء.",
    accept: "تمام",
  },
  faq: {
    title: "أسئلة شائعة",
    items: [
      {
        q: "فين موقع Palm Gardens at PX؟",
        a: "المرحلة الثانية جزء من مشروع PX بالم هيلز، وبتقع على أعلى المناطق منسوبًا داخل المشروع، وفيها إطلالات على الأهرامات.",
      },
      {
        q: "إمتى التسليم؟",
        a: "التسليم خلال 4 سنوات حسب خطة المشروع.",
      },
      {
        q: "إزاي خطة السداد؟",
        a: "مقدم 5%، و5% بعد 3 شهور، والباقي على أقساط خلال 7.5 سنة.",
      },
      {
        q: "إيه الفرق بين Core & Shell والـ Fully Finished؟",
        a: "الـ Fully Finished تشطيب كامل جاهز للسكن، والـ Core & Shell هيكل ومباني بدون تشطيبات داخلية.",
      },
    ],
  },
};

export const en: Dict = {
  locale: "en",
  dir: "ltr",
  seo: {
    title: "Palm Gardens at PX | Townhouses & Villas in Palm Hills PX",
    description:
      "Palm Gardens at PX, Palm Hills' 36-acre phase of townhouses and villas with pyramid views, 17.5% footprint, 4-year delivery and a 5% down payment over 7.5 years. Launching next week.",
    keywords: [
      "Palm Hills PX",
      "Palm Gardens at PX",
      "townhouses for sale in Palm Hills",
      "villas for sale Palm Hills PX",
      "Palm Hills pyramid view villas",
      "Palm Hills installment plan",
      "Palm Hills 4 year delivery",
      "Palm Hills PX prices",
      "PX Palm Hills new launch",
      "Palm Hills Core and Shell villas",
    ],
    ogLocale: "en_US",
  },
  nav: {
    highlights: "Highlights",
    phase: "Phase 2",
    units: "Units & Prices",
    payment: "Payment Plan",
    gallery: "Construction",
    register: "Register Interest",
    switchLabel: "العربية",
    switchHref: "/",
  },
  hero: {
    badge: "Launching next week",
    eyebrow: "Palm Hills PX",
    title: "Palm Gardens at PX",
    subtitle: "Townhouses & Villas for Sale in Palm Hills PX",
    lead: "Phase 2 of Palm Hills PX, spanning 36 acres of low-density townhouses and villas with lakes, green open spaces and clear views of the Pyramids. Register your interest now and be the first to know the launch details and prices.",
    ctaRegister: "Register Interest",
    ctaCall: "Call Now",
    ctaWhatsapp: "WhatsApp",
    stats: [
      { value: "370", label: "Acres total project" },
      { value: "36", label: "Acres in Phase 2" },
      { value: "17.5%", label: "Footprint" },
      { value: "4", label: "Years to delivery" },
    ],
    paymentLine: "5% down + 5% after 3 months + the rest over 7.5 years",
  },
  highlights: {
    title: "Why Palm Hills PX? The Highlights of Palm Gardens at PX",
    intro:
      "Palm Hills PX sits on 370 acres. Palm Gardens, its second phase, brings together privacy, greenery and everything you need within reach.",
    items: [
      {
        title: "One of the highest points in Palm Hills",
        text: "The phase sits on one of the highest elevated areas within Palm Hills, roughly 128 to 140 metres above sea level.",
      },
      {
        title: "Pyramid views",
        text: "Clear views of the Pyramids from large parts of the project, adding real value to every villa and townhouse.",
      },
      {
        title: "Only 17.5% footprint",
        text: "Low building coverage means wide open spaces and a refined, calm character on every street.",
      },
      {
        title: "Internationally designed masterplan",
        text: "Masterplan by Chapman Taylor in collaboration with Alchemy Architecture, balancing built form and nature.",
      },
      {
        title: "15-acre Clubhouse",
        text: "A main hub for activities, with a large gymnasium, walking and cycling tracks, and family-friendly social and sports facilities.",
      },
      {
        title: "International school & St. Regis",
        text: "The masterplan includes a St. Regis Hotel, an international school, commercial zones and future Branded Residences.",
      },
    ],
  },
  pyramid: {
    title: "Living with pyramid views",
    text: "When a phase sits on one of the highest points in Palm Hills, the view is not just decoration. The Pyramids are in sight from large parts of the project, and the open space around your home stays open.",
    alt: "Pyramid views from Palm Hills PX",
  },
  phase: {
    title: "Phase 2: Palm Gardens on 36 acres",
    text: "36 acres dedicated entirely to villas and townhouses, planned at low density. The Valley alone covers around 18 acres, roughly 50% of the phase. Villas sit in the middle of the phase and townhouses on its edges.",
    bullets: [
      "The Valley: around 18 acres of landscaped open space",
      "Standalone villas in the middle, townhouses on the edges",
      "Lakes and green spaces throughout the phase",
      "Villa Types 1, 3, 4 and 5, plus Middle and Corner townhouses",
    ],
    soldOut: "Phase 1 villas are fully Sold Out. The first launch was in February 2024, and construction started about 10 months after launch.",
  },
  units: {
    title: "Unit types & indicative prices",
    intro: "Townhouses are fully finished. Villas are Core & Shell. Areas are approximate and prices are indicative.",
    headers: ["Unit", "Land area", "Built-up area", "Bedrooms", "Finishing", "Indicative price"],
    rows: [
      ["Townhouse Middle", "212 sqm", "200.72 sqm", "3 bed", "Fully Finished", "EGP 32.6 – 33.0M"],
      ["Townhouse Corner", "215.5 sqm", "210.81 sqm", "3 bed", "Fully Finished", "EGP 34.0 – 34.6M"],
      ["Type 4 Villa", "281.6 sqm", "239.91 sqm", "4 bed", "Core & Shell", "From approx. EGP 37M"],
      ["Type 3 Villa", "298.9 sqm", "246.15 sqm", "4 bed", "Core & Shell", "From approx. EGP 39M"],
      ["Type 1 Villa", "420 – 470 sqm", "313.67 sqm", "4 bed", "Core & Shell", "EGP 53 – 62M"],
      ["Type 5 Villa", "545 – 596 sqm", "428.04 sqm", "6 bed", "Core & Shell", "EGP 66 – 77M"],
    ],
    note: "Prices are indicative and subject to change without prior notice. Contact us for current availability.",
  },
  payment: {
    title: "Payment plan: 5% down and 7.5 years to pay",
    intro: "A comfortable plan designed so you can reserve without a large upfront commitment.",
    steps: [
      { value: "5%", label: "Down payment at reservation" },
      { value: "5%", label: "After 3 months from reservation" },
      { value: "7.5", label: "Years to pay the remainder" },
      { value: "4", label: "Years to delivery" },
    ],
    note: "Full reservation and instalment terms are confirmed in the official booking.",
  },
  amenities: {
    title: "Integrated lifestyle amenities",
    intro: "Everything your family needs is inside the project or close by.",
    items: [
      { title: "Large Clubhouse", text: "A 15-acre main hub for activities and community events." },
      { title: "Gymnasium & sports", text: "A large gymnasium and spaces for sports and social activities." },
      { title: "Walking & cycling tracks", text: "Dedicated paths for walking and cycling through the greenery." },
      { title: "International school", text: "Part of the overall masterplan." },
      { title: "St. Regis Hotel", text: "A hotel within the masterplan, plus future Branded Residences." },
      { title: "Malls & commercial zones", text: "Alongside Golf Central, Crown Central and Hale Town in the surrounding area." },
    ],
  },
  masterplan: {
    title: "A masterplan that blends greenery and living",
    text: "PX is aimed especially at the younger generation, with a mix of homes, entertainment and amenities that make everyday life easier and more enjoyable.",
  },
  gallery: {
    title: "Construction progress on site",
    intro: "Real photos from the site showing progress on the phase.",
    items: [
      { src: "/images/progress-1.jpg", alt: "Construction works at Palm Gardens at PX, Palm Hills", caption: "Works on site" },
      { src: "/images/progress-2.jpg", alt: "Villa structures at Palm Hills PX", caption: "Villa structures" },
      { src: "/images/progress-3.jpg", alt: "Townhouses under construction at Palm Hills PX", caption: "Townhouses under construction" },
    ],
  },
  form: {
    title: "Register your interest in Palm Gardens at PX",
    intro: "We will reach out as soon as the launch details and final prices are announced. No commitment required.",
    name: "Full name",
    phone: "Mobile number (WhatsApp)",
    phonePlaceholder: "01xxxxxxxxx",
    unit: "Unit type you are looking for",
    unitOptions: [
      { value: "townhouse", label: "Townhouse" },
      { value: "villa", label: "Villa" },
      { value: "both", label: "Both" },
      { value: "unsure", label: "Not sure yet" },
    ],
    notes: "Notes (optional)",
    submit: "Send my request",
    sending: "Sending...",
    success: "Thanks, your request was received. We will contact you shortly.",
    error: "Something went wrong. Please try again or message us on WhatsApp.",
    privacyNote: "Your details are used only to contact you about this project.",
  },
  disclaimer: {
    title: "Disclaimer",
    prices:
      "Prices, areas and specifications shown are indicative and approximate, and may change without prior notice. This page is for marketing and project information and does not constitute a binding offer.",
    agent:
      "Grandeur Spaces is an authorized sales agent for Palm Hills projects. Information is based on marketing material available at the time of publishing.",
    general: "Photos illustrate construction progress and views and do not necessarily represent final units.",
  },
  privacy: {
    summary: "Privacy policy",
    text: "We collect the name and mobile number you submit in the form to contact you about Palm Gardens at PX. We do not sell your data or share it with third parties, except where it is necessary to process your request. You can ask us to delete your data at any time via WhatsApp or email.",
  },
  footer: {
    tagline: "Palm Gardens at PX: townhouses & villas in Palm Hills PX",
    contact: "Contact",
    rights: "All rights reserved",
  },
  floating: {
    call: "Call",
    whatsapp: "WhatsApp",
  },
  cookie: {
    text: "This site uses basic cookies to improve your experience and measure performance.",
    accept: "OK",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Where is Palm Gardens at PX located?",
        a: "Palm Gardens is the second phase of Palm Hills PX, located on one of the highest elevated areas within the project, with views of the Pyramids.",
      },
      {
        q: "When is delivery?",
        a: "Delivery is within 4 years, according to the project plan.",
      },
      {
        q: "What is the payment plan?",
        a: "5% down payment, 5% after 3 months, and the remainder in instalments over 7.5 years.",
      },
      {
        q: "What is the difference between Core & Shell and Fully Finished?",
        a: "Fully Finished units come completely finished and ready to move in. Core & Shell units are delivered as structure and shell, without interior finishing.",
      },
    ],
  },
};
