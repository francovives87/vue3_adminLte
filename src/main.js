import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/dist/css/adminlte.min.css?v=3.2.0'
import './styles.scss'
import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.js'
import 'admin-lte/dist/js/adminlte.min.js?v=3.2.0'

createApp(App).use(store).use(router).mount('#app')
