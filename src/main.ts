import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createMemoryHistory, createRouter } from 'vue-router'
import { MitchellPreset } from './preset';

import Home from './pages/Home.vue';
import Research from './pages/Research.vue';
import Publications from './pages/Publications.vue';
import People from './pages/People.vue';
import Positions from './pages/Positions.vue';
import News from './pages/News.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/research', component: Research },
    { path: '/publications', component: Publications },
    { path: '/people', component: People },
    { path: '/positions', component: Positions },
    { path: '/news', component: News },
]

const router = createRouter({
    history: createMemoryHistory(),
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

