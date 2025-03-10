import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export const MitchellPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                }
            }
        }
    },
    components: {
        menubar: {
            background: '#D39B78',
            borderRadius: '0px',
            submenu: {
                background: '#D39B78',
            },
            item: {
                color: '#EAD6A1',
                focus: {
                    background: '#ccb166',
                },
                activeColor: '#ccb166',
                iconColor: '#EAD6A1',
            }
        }
    }
})