import { createApp } from 'vue'
import '@/styles/index.scss'
import 'normalize.css'
import App from './App.vue'
import i18n from './i18n/index.js'
import { setUpStore } from './stores'
import router from './router'
import { setupNaiveDiscreteApi } from '@/utils/nativeui.js'

const app = createApp(App)
app.use(i18n)
setUpStore(app)
app.use(router)
app.mount('#app')
setTimeout(setupNaiveDiscreteApi)

