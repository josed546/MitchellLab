import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export const MitchellPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {},
            dark: {}
        }
    },
    components: {
        menubar: {
            background: '#D39B78',
            borderRadius: '0px',
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