export const translations = {
  en: {
    hero: {
      title: "Welcome",
      subtitle: "Start your journey today",
    },
    navbar: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
    form: {
      emailPlaceholder: "Enter your email",
      submit: "Submit",
    },
    headerComboboxSection: {
      text: "Need help? Call us:",
    },
    categoryCarousel: {
      title: "Shop by Categories",
    },
    categoryPanel: {
      title: "Category",
    },
    countdownSection: {
      days: "Days",
      hours: "Hours",
      minutes: "Min",
      seconds: "Sec",
    },
    dealsContainer: {
      title: "Deals Of The Day",
      by: "By",
      add: "Add",
    },
    filterPanel: {
      title: "Filter by price",
      buttonLabel: "Filter",
    },
    footer: {
      appColumnTitle: "Install App",
      appStoreText: "From App Store or Google Play",
      securedPaymentText: "Secured Payment Gateways",
      footerMessage: "Up to 15% discount on your first subscribe",
      copyrightText:
        "© 2026, Nest - HTML Ecommerce Template. All rights reserved",
    },
    headerBottomSection: {
      comboboxLabel: "Browse All Categories",
      callCenterText: "24/7 Support Center",
    },
    headerUpperSection: {
      message: "100% Secure delivery without contacting the courier",
    },
    headerMidSection: {
      placeholder: "Search for items...",
      comboboxLabel: "Your Location",
    },
    newProductsPanel: {
      title: "New Products",
    },
    newsletterBanner: {
      title: "Stay home & get your daily needs from our shop",
      subtitle: "Start Your Daily Shopping with Nest Mart",
      placeholder: "Your email address",
      buttonText: "Subscribe",
    },
    productGrid: {
      title: "Popular Products",
    },
    promoBanners: {
      buttonText: "Shop Now",
    },
  },

  ro: {
    hero: {
      title: "Bine ai venit",
      subtitle: "Începe-ți călătoria astăzi",
    },
    navbar: {
      home: "Acasă",
      about: "Despre",
      contact: "Contact",
    },
    form: {
      emailPlaceholder: "Introdu emailul",
      submit: "Trimite",
    },
    headerComboboxSection: {
      text: "Ai nevoie de ajutor? Sună la: ",
    },
    categoryCarousel: {
      title: "Categorii",
    },
    categoryPanel: {
      title: "Categorii",
    },
    countdownSection: {
      days: "Zile",
      hours: "Ore",
      minutes: "Min",
      seconds: "Sec",
    },
    dealsContainer: {
      title: "Ofertele zilei",
      by: "Oferit de",
      add: "Adaugă",
    },
    filterPanel: {
      title: "Filtrează după preț",
      buttonLabel: "Filtrează",
    },
    footer: {
      appColumnTitle: "Installează aplicația Nest",
      appStoreText: "Din App Store sau Google Play",
      securedPaymentText: "Metode de plată",
      footerMessage: "Până la 15% reducere la primul abonament",
      copyrightText:
        "© 2026, Nest - HTML Ecommerce Template. Toate drepturile sunt rezervate.",
    },
    headerBottomSection: {
      comboboxLabel: "Toate categoriile",
      callCenterText: "Asistență 24/7",
    },
    headerUpperSection: {
      message: "Livrare fără a contacta curierul",
    },
    headerMidSection: {
      placeholder: "Caută produse...",
      comboboxLabel: "Locația ta",
    },
    newProductsPanel: {
      title: "Produse noi",
    },
    newsletterBanner: {
      title: "Tot ce ai nevoie la un click distanță",
      subtitle: "Fă-ți cumpărăturile de la Nest Mart",
      placeholder: "Email-ul tău",
      buttonText: "Abonează-te",
    },
    productGrid: {
      title: "Produse populare",
    },
    promoBanners: {
      buttonText: "Cumpără acum",
    },
  },
} as const;

export type Translations = typeof translations;
export type Language = keyof Translations;

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Paths<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? Join<K & string, Paths<T[K]>>
        : K & string;
    }[keyof T]
  : never;

export type TranslationKey = Paths<Translations[Language]>;
