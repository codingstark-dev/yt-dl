module.exports = {
  swcMinify: true,

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
        destination: "/en7",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/",
  //       headers: [
  //         {
  //           key: "Cross-Origin-Embedder-Policy:",
  //           value: "require-corp",
  //         },
  //         {
  //           key: "Cross-Origin-Opener-Policy",
  //           value: "same-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};
