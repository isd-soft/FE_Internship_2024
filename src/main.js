import "normalize.css"
import './styles/main.scss'
import 'vue-final-modal/style.css'
import ToastPlugin from 'vue-toast-notification';
import { createPersistedState } from "pinia-plugin-persistedstate";


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'

import App from './App.vue'
import router from './router'



const app = createApp(App)
const vfm = createVfm()
const pinia = createPinia()
pinia.use(createPersistedState({storage: sessionStorage}))
app.use(pinia)
app.use(router)
app.use(vfm)
app.use(ToastPlugin);

app.mount('#app')
