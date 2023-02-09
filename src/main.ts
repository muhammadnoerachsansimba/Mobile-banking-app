import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// router
import router from "./router"

// fontawesome
import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"

// Solid
import {
    faGear,
    faArrowLeft,
    faMagnifyingGlass,
    faHouse,
    faArrowTrendUp,
    faPlus,
    faXmark,
    faAddressCard,
    faLocationDot,
    faCalendarDays,
    faVenusMars,
    faPhone,
    faEnvelope,
    faLock,
    faUser as fasUser,
    faDollarSign,
    faStore,
    faMoneyBill,
    faCreditCard as fasCreditCard,
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons"

// Regular
import {faBell,
    faCreditCard,
    faUser
} from "@fortawesome/free-regular-svg-icons"

library.add({
    faGear,
    faArrowLeft,
    faBell,
    faCreditCard,
    faMagnifyingGlass,
    faHouse, faArrowTrendUp,
    faUser,
    faPlus,
    faXmark,
    faAddressCard,
    faLocationDot,
    faCalendarDays,
    faVenusMars,
    faPhone,
    faEnvelope,
    faLock,
    fasUser,
    faDollarSign,
    faStore,
    faMoneyBill,
    fasCreditCard,
    faQuoteLeft
})

createApp(App)
.use(router)
.use(VueAxios, axios)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')