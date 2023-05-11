import { createApp } from 'vue'
import App from './App.vue'
import HeaderBar from './components/HeadBar.vue'
import router from './router'
import axios from 'axios';

const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
createApp(HeaderBar).use(router).mount('#head_bar')
