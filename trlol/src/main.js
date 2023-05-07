import { createApp } from 'vue'
import App from './App.vue'
import HeaderBar from './components/HeadBar.vue'
import router from './router'

createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')
createApp(HeaderBar).mount('#head_bar')
