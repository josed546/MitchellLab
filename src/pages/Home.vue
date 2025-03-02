<template>
    <div class="grid grid-cols-12 grid-rows-10 gap-4">
        <h1 class="row-span-1 col-span-12 pt-5">Welcome to Mitchell Lab!</h1>
        <!-- h-[45vh] -->
        <div class="row-span-6 col-span-6 col-start-4 items-center justify-center">
            <Galleria 
                class="h-full w-full"
                :value="images" 
                :autoPlay="true" 
                :circular="true"
                :showItemNavigators="true"
                :showThumbnails="false"
                :numVisible="1"
                :interval="5000"
            >
                <template #item="slotProps">
                    <img class="aspect-[4/3] h-full block" :src="slotProps.item.src" :alt="slotProps.item.alt" />
                </template>
            </Galleria>
        </div>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue';
    import Galleria from 'primevue/galleria';
    const imagePaths = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true });

    const images = ref([]);

    onMounted(() => {
        images = Object.values(images).map((image, index) => {
            return {
                src: image.default,
                alt: `image${index}`
            }
        })
    })
    
    // console.log(images)

    // const images = ref([
    // {
    //     src: '/gallery/IMG_6627.jpg',
    //     alt: 'Image 1'
    // },
    // {
    //     src: '/gallery/IMG_6628.jpg',
    //     alt: 'Image 2'
    // },
    // {
    //     src: '/gallery/Screen Shot 2025-03-01 at 1.56.36 PM.png',
    //     alt: 'Image 3'
    // }
    // ]);
</script>