import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Loading, Empty } from 'vant'

const app = createApp(App)
app.use(Button).use(Loading).use(Empty).use(router).mount('#app')
