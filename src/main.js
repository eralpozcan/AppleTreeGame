import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as d3 from 'd3'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(d3)

app.mount('#app')
