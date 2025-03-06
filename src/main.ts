import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createWebHistory, createRouter } from 'vue-router'
import { MitchellPreset } from './preset';

import Home from './pages/Home.vue';
import Research from './pages/Research.vue';
import Publications from './pages/Publications.vue';
import PrincipalInvestigator from './pages/PrincipalInvestigator.vue';
import LabMembers from './pages/LabMembers.vue';
import Alumni from './pages/Alumni.vue';
import Collaborators from './pages/Collaborators.vue';
import Positions from './pages/Positions.vue';
import News from './pages/News.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/research', component: Research },
    { path: '/publications', component: Publications },
    { path: '/principalInvestigator', component: PrincipalInvestigator },
    { path: '/labMembers', component: LabMembers },
    { path: '/alumni', component: Alumni },
    { path: '/collaborators', component: Collaborators },
    { path: '/positions', component: Positions },
    { path: '/news', component: News },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: MitchellPreset,
        options: {
            darkModeSelector: '.my-app-dark',
        },
    }
});
app.use(router)
app.mount('#app')

