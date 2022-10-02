import { createApp } from 'vue'
import { createStore } from 'vuex'

import appStore from '@/store/index.js';

import App from './App.vue'

import './assets/styles/index.scss'

const app = createApp(App)
app.use(createStore(appStore))

app.mount('#app')
