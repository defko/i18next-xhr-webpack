import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'

i18n
  .use(HttpApi)
  .init({
    backend: {
      loadPath: `/locales/dev/translation.json`
    }
  })
  .then((t) => {
    document.getElementById('#page-title').innerHTML = t('main-page-title')
  })

export default i18n