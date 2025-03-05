<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterView } from 'vue-router';
    import { useRouter } from 'vue-router'
    import Menubar from 'primevue/menubar';
    import Image from 'primevue/image';
    import ToggleSwitch from 'primevue/toggleswitch';
    import 'primeicons/primeicons.css'


    import mitchellGreen from "../assets/mitchell_green.png";
    import pennLogo from "../assets/UPenn_FullLogo.png"

    const router = useRouter()
    // Items for menu bar
    const items = ref([
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                router.push('/')
            }
        },
        {
            label: 'Research',
            icon: 'pi pi-chart-bar',
            command: () => {
                router.push('/research')
            }
        },
        {
            label: 'Publications',
            icon: 'pi pi-book',
            command: () => {
                router.push('/publications')
            }
        },
        {
            label: 'People',
            icon: 'pi pi-users',
            command: () => {
                router.push('/people')
            }

        },
        {
            label: 'Positions',
            icon: 'pi pi-user-plus',
            command: () => {
                router.push('/positions')
            }
        },
        {
            label: 'News',
            icon: 'pi pi-bell',
            command: () => {
                router.push('/news')
            }
        },
    ])

    // Dark mode toggle
    const isDark = ref(false);

    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        document.documentElement.classList.toggle('my-app-dark');
    }
</script>

<template>
    <Menubar class="menu z-1" :model="items">
        <template #start>
            <Image class="logo" :src="mitchellGreen" alt="Image" width="100" />
        </template>

        <!-- <template #end>
            <div class="flex items-center gap-2">
                <i v-if="isDark" class="pi pi-moon" style="font-size: 1.5rem; padding-right:5px" />
                <i v-else class="pi pi-sun" style="font-size: 1.5rem; padding-right:5px" />
                <ToggleSwitch @click="toggleDarkMode" />
            </div>
        </template> -->
    </Menubar>

    <main class="min-h-[90vh] mt-27 z-0 bg-surface-100">
        <RouterView />
    </main>

    <footer class="footer items-start pt-1 pl-2">
        <!-- Add your footer content here -->
         <Image  :src="pennLogo" width="120"/>
    </footer>
</template>

<style scoped>
.menu {
    position: fixed;
    width: 100%;
    top: 0;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px; /* Set explicit height for footer */
    background-color: #D39B78;
    z-index: 1;
}


/* .p-menubar {
    background-color: #D39B78;
}

.p-menubar-item-icon {
    color: #EAD6A1;
} */

.logo {
    /* height: 6em;
  padding: 1.5em; */
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>