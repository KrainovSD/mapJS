import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getLanguageCode = (language: string) => {
  return language ? language.split("-")[0] : null;
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("lng");
  const browserLanguage = getLanguageCode(navigator.language || navigator.languages[0]);

  return savedLanguage || browserLanguage;
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: getInitialLanguage() || "ru",
    fallbackLng: "ru",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

// i18n.on("languageChanged", (lng) => {
//   localStorage.setItem("lng", lng);
// });

export default i18n;
