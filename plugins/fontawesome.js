import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

config.autoAddCss = false
library.add(faTwitter, faGithub)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('fa-github', faGithub)
Vue.component('fa-twitter', faTwitter)