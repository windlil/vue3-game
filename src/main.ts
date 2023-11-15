import { createApp } from 'vue'
import './assets/style/index.scss'
import App from './App.vue'
import pinia from './store/index'

createApp(App).use(pinia).mount('#app')
