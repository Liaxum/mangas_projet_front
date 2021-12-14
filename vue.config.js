module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mangas_projet_front/' : '/',
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      includeLocales: false,
      enableBridge: true,
    },
  },
};
