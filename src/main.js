import './assets/main.css'//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown';
import Editor from 'primevue/editor';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Card',Card)
app.component('InputText',InputText)
app.component('Dropdown',Dropdown)
app.component('Editor',Editor)

app.mount('#app')
