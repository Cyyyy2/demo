import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入vue-router
import router from './router/index'
//引入element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//注册element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for(const[key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}

app.use(router).use(ElementPlus).mount('#app')
