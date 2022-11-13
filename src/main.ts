import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Loading, Empty } from 'vant'
import TabBar from '@/components/TabBar/index.vue'
import NavBar from '@/components/NavBar/index.vue'

const app = createApp(App)
app
  .use(Button)
  .use(Loading)
  .use(Empty)
  .use(router)
  .component('navbar', NavBar)
  .component('tabbar', TabBar)
  .mount('#app')
