module.exports = {
  // trailingSlash: true,

  i18n: {
    locales: [
      "en",
      "de",
      "fr",
      "es",
      "hi",
      "id",
      // "tr",
      // "pt",
      // "ru",
      // "ja",
      // "ar",
      // "it",
      // "ae",
      // "te",
      // "bn",
      // "ta",
    ],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en5",
        permanent: true,
      },
    ];
  },
};
