
import { createApp } from 'vue'
import App from './App.vue'

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faTwitter, faLinkedin);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

export default defineNuxtPlugin(nuxtApp => { 

    
})