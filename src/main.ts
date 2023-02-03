import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// router
import router from "./router"

// fontawesome
import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {faGear, faArrowLeft, faMagnifyingGlass, faHouse, faArrowTrendUp} from "@fortawesome/free-solid-svg-icons"
import {faBell, faCreditCard, faUser} from "@fortawesome/free-regular-svg-icons"

library.add({faGear, faArrowLeft, faBell, faCreditCard, faMagnifyingGlass, faHouse, faArrowTrendUp, faUser})

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
