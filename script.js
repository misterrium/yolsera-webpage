const translations = {
  en: {
    navFeatures: "Features",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navContact: "Contact",

    heroEyebrow: "COMING SOON TO iPHONE",

    heroTitle:
      "Your whole trip,<br>in one place.",

    heroDescription:
      "Plan your journey, stay organized while you travel, and keep the memories afterwards.",

    appStoreSmall:
      "Download on the",

    comingSoon:
      "Coming soon",

    journeyEyebrow:
      "THE WHOLE JOURNEY",

    journeyTitle:
      "Built for more than the itinerary.",

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
      "Everything that matters,<br>when you need it.",

    featurePlanning:
      "Day-by-day planning",

    featureReadiness:
      "Travel readiness",

    featureDocuments:
      "Tasks & documents",

    featureBudget:
      "Budget & expenses",

    featureShared:
      "Shared trips",

    featureMemories:
      "Memories",

    privacyEyebrow:
      "DESIGNED WITH CARE",

    privacyTitle:
      "Your trip. Your data.",

    privacyDescription:
      "Yolsera is designed with a local-first approach, keeping your travel information accessible and under your control.",

    learnPrivacy:
      "Learn about privacy →",

    ctaTitle:
      "Ready for wherever<br>you go next.",

    ctaDescription:
      "Coming soon to iPhone.",

    footerTagline:
      "Travel, from planning to memories.",

    footerHelp:
      "Help",

    footerLegal:
      "Legal",

    footerContact:
      "Contact",

    terms:
      "Terms",

    rights:
      "All rights reserved."
  },


  tr: {
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
      "Tüm seyahatin,<br>tek bir yerde.",

    heroDescription:
      "Yolculuğunu planla, seyahat boyunca düzenli kal ve anılarını yanında tut.",

    appStoreSmall:
      "App Store'dan",

    comingSoon:
      "Yakında",

    journeyEyebrow:
      "TÜM YOLCULUK",

    journeyTitle:
      "Sadece bir seyahat planından fazlası.",

    planTitle:
      "Planla",

    planDescription:
      "Günlerine, önceliklerine ve seyahat tarzına uyum sağlayan bir yolculuk oluştur.",

    travelTitle:
      "Seyahat et",

    travelDescription:
      "Planlarını, görevlerini, belgelerini ve harcamalarını ihtiyacın olduğunda yanında tut.",

    rememberTitle:
      "Hatırla",

    rememberDescription:
      "Yolculuğu sana özel yapan yerleri, anları ve anıları sakla.",

    everythingTitle:
      "Önemli olan her şey,<br>ihtiyacın olduğunda yanında.",

    featurePlanning:
      "Gün gün seyahat planı",

    featureReadiness:
      "Seyahat hazırlığı",

    featureDocuments:
      "Görevler ve belgeler",

    featureBudget:
      "Bütçe ve harcamalar",

    featureShared:
      "Paylaşılan seyahatler",

    featureMemories:
      "Anılar",

    privacyEyebrow:
      "ÖZENLE TASARLANDI",

    privacyTitle:
      "Seyahatin. Verilerin.",

    privacyDescription:
      "Yolsera, seyahat bilgilerinin erişilebilir ve senin kontrolünde kalmasına öncelik veren local-first bir yaklaşımla tasarlanır.",

    learnPrivacy:
      "Gizlilik hakkında bilgi al →",

    ctaTitle:
      "Sıradaki yolculuğuna<br>hazır ol.",

    ctaDescription:
      "Yakında iPhone'da.",

    footerTagline:
      "Planlamadan anılara, tüm seyahatin.",

    footerHelp:
      "Yardım",

    footerLegal:
      "Yasal",

    footerContact:
      "İletişim",

    terms:
      "Kullanım Koşulları",

    rights:
      "Tüm hakları saklıdır."
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


function applyLanguage(language) {

  const dictionary =
    translations[language];

  if (!dictionary) {
    return;
  }


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


  document.documentElement.lang =
    language;


  languageButtons.forEach(
    (button) => {

      button.classList.toggle(
        "active",
        button.dataset.language === language
      );

    }
  );


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

  const next =
    (currentDemo + 1)
    % demoScreens.length;

  showDemo(next);
}



function startDemoRotation() {

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



showDemo(0);

startDemoRotation();
