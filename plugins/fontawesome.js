import Vue from "vue";
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false;
library.add(faGithub, faTwitter);

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

