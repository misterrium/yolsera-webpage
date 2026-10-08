const translations = {
  en: {
    navProduct: "Product",
    navFeatures: "Features",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navContact: "Contact",

    heroEyebrow: "COMING SOON TO iPHONE",

    heroTitle:
      "Your Whole Trip,<br>in One Place.",

    heroDescription:
      "Plan your journey, stay organized while you travel, and keep the memories afterwards.",

    appStoreSmall:
      "Download on the",

    comingSoon:
      "Coming Soon",

    journeyEyebrow:
      "THE WHOLE JOURNEY",

    journeyTitle:
      "Built for More Than the Itinerary.",

    planTitle:
      "Plan",

    planDescription:
      "Create a trip that works around your days, priorities and pace.",

    travelTitle:
      "Travel",

    travelDescription:
      "Keep plans, tasks, documents and expenses close when you need them.",

    rememberTitle:
      "Remember",

    rememberDescription:
      "Keep the places and moments that made the journey yours.",

    everythingTitle:
      "Everything That Matters,<br>When You Need It.",

    featurePlanning:
      "Day-by-Day Planning",

    featureReadiness:
      "Travel Readiness",

    featureDocuments:
      "Tasks and Documents",

    featureBudget:
      "Budget and Expenses",

    featureShared:
      "Shared Trips",

    featureMemories:
      "Memories",

    privacyEyebrow:
      "DESIGNED WITH CARE",

    privacyTitle:
      "Your Trip. Your Data.",

    privacyDescription:
      "Yolsera is designed with a local-first approach, keeping your travel information accessible and under your control.",

    learnPrivacy:
      "Learn About Privacy →",

    ctaTitle:
      "Ready for Wherever<br>You Go Next.",

    ctaDescription:
      "Coming Soon to iPhone.",

    footerTagline:
      "Your Travel Companion.",

    footerProduct:
      "Product",

    footerHelp:
      "Help",

    footerLegal:
      "Legal",

    footerContact:
      "Contact",

    terms:
      "Terms of Use",

    rights:
      "All Rights Reserved."
  },


  tr: {
    navProduct:
      "Ürün",

    navFeatures:
      "Özellikler",

    navSupport:
      "Destek",

    navPrivacy:
      "Gizlilik",

    navContact:
      "İletişim",

    heroEyebrow:
      "YAKINDA iPHONE'DA",

    heroTitle:
      "Tüm Seyahatin,<br>Tek Bir Yerde.",

    heroDescription:
      "Yolculuğunu planla, seyahat boyunca düzenli kal ve anılarını yanında tut.",

    appStoreSmall:
      "App Store'dan",

    comingSoon:
      "Yakında",

    journeyEyebrow:
      "TÜM YOLCULUK",

    journeyTitle:
      "Sadece Bir Seyahat Planından Fazlası.",

    planTitle:
      "Planla",

    planDescription:
      "Günlerine, önceliklerine ve seyahat tarzına uyum sağlayan bir yolculuk oluştur.",

    travelTitle:
      "Seyahat Et",

    travelDescription:
      "Planlarını, görevlerini, belgelerini ve harcamalarını ihtiyacın olduğunda yanında tut.",

    rememberTitle:
      "Hatırla",

    rememberDescription:
      "Yolculuğu sana özel yapan yerleri, anları ve anıları sakla.",

    everythingTitle:
      "Önemli Olan Her Şey,<br>İhtiyacın Olduğunda Yanında.",

    featurePlanning:
      "Gün Gün Seyahat Planı",

    featureReadiness:
      "Seyahat Hazırlığı",

    featureDocuments:
      "Görevler ve Belgeler",

    featureBudget:
      "Bütçe ve Harcamalar",

    featureShared:
      "Paylaşılan Seyahatler",

    featureMemories:
      "Anılar",

    privacyEyebrow:
      "ÖZENLE TASARLANDI",

    privacyTitle:
      "Seyahatin. Verilerin.",

    privacyDescription:
      "Yolsera, seyahat bilgilerinin erişilebilir ve senin kontrolünde kalmasına öncelik veren local-first bir yaklaşımla tasarlanır.",

    learnPrivacy:
      "Gizlilik Hakkında Bilgi Al →",

    ctaTitle:
      "Sıradaki Yolculuğuna<br>Hazır Ol.",

    ctaDescription:
      "Yakında iPhone'da.",

    footerTagline:
      "Seyahat Arkadaşınız.",

    footerProduct:
      "Ürün",

    footerHelp:
      "Yardım",

    footerLegal:
      "Yasal",

    footerContact:
      "İletişim",

    terms:
      "Kullanım Koşulları",

    rights:
      "Tüm Hakları Saklıdır."
  }
};



/* LANGUAGE */

const languageButtons =
  document.querySelectorAll(
    "[data-language]"
  );

const translatableElements =
  document.querySelectorAll(
    "[data-i18n]"
  );

const languageContentBlocks =
  document.querySelectorAll(
    "[data-lang-content]"
  );


function applyLanguage(language) {

  const dictionary =
    translations[language];

  if (!dictionary) {
    return;
  }


  /*
    Translate individual UI elements.
  */

  translatableElements.forEach(
    (element) => {

      const key =
        element.dataset.i18n;

      const value =
        dictionary[key];

      if (value !== undefined) {
        element.innerHTML = value;
      }

    }
  );


  /*
    Switch full-page EN / TR content blocks.
    Used by Privacy, Terms, Support and Contact.
  */

  languageContentBlocks.forEach(
    (element) => {

      const shouldShow =
        element.dataset.langContent === language;

      element.hidden =
        !shouldShow;

    }
  );


  /*
    Update the HTML language attribute.
  */

  document.documentElement.lang =
    language;


  /*
    Update language switch appearance.
  */

  languageButtons.forEach(
    (button) => {

      button.classList.toggle(
        "active",
        button.dataset.language === language
      );

      button.setAttribute(
        "aria-pressed",
        button.dataset.language === language
          ? "true"
          : "false"
      );

    }
  );


  /*
    Remember preference across all Yolsera pages.
  */

  localStorage.setItem(
    "yolsera-language",
    language
  );
}



function preferredLanguage() {

  const saved =
    localStorage.getItem(
      "yolsera-language"
    );


  if (
    saved === "en" ||
    saved === "tr"
  ) {
    return saved;
  }


  const browserLanguage =
    navigator.language
      .toLowerCase();


  if (
    browserLanguage.startsWith("tr")
  ) {
    return "tr";
  }


  return "en";
}



languageButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        applyLanguage(
          button.dataset.language
        );

      }
    );

  }
);



applyLanguage(
  preferredLanguage()
);



/* PHONE DEMO */

const demoScreens =
  document.querySelectorAll(
    "[data-demo-screen]"
  );

const demoDots =
  document.querySelectorAll(
    "[data-demo-dot]"
  );


let currentDemo = 0;

let demoTimer = null;



function showDemo(index) {

  if (demoScreens.length === 0) {
    return;
  }


  currentDemo = index;


  demoScreens.forEach(
    (screen, screenIndex) => {

      screen.classList.toggle(
        "active",
        screenIndex === index
      );

    }
  );


  demoDots.forEach(
    (dot, dotIndex) => {

      dot.classList.toggle(
        "active",
        dotIndex === index
      );

    }
  );
}



function nextDemo() {

  if (demoScreens.length === 0) {
    return;
  }


  const next =
    (currentDemo + 1)
    % demoScreens.length;


  showDemo(next);
}



function startDemoRotation() {

  if (demoScreens.length <= 1) {
    return;
  }


  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    return;
  }


  stopDemoRotation();


  demoTimer =
    window.setInterval(
      nextDemo,
      5000
    );
}



function stopDemoRotation() {

  if (demoTimer) {

    window.clearInterval(
      demoTimer
    );

    demoTimer = null;

  }
}



demoDots.forEach(
  (dot, index) => {

    dot.addEventListener(
      "click",
      () => {

        showDemo(index);

        startDemoRotation();

      }
    );

  }
);



const phone =
  document.querySelector(
    ".phone"
  );


if (phone) {

  phone.addEventListener(
    "mouseenter",
    stopDemoRotation
  );


  phone.addEventListener(
    "mouseleave",
    startDemoRotation
  );


  phone.addEventListener(
    "touchstart",
    stopDemoRotation,
    { passive: true }
  );

}



if (demoScreens.length > 0) {

  showDemo(0);

  startDemoRotation();

}
