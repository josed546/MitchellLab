<template>
    <!-- bg-[url(./assets/neon_cell_background.jpg)] -->
    <div class="flow flow-col justify-center pt-5 gapx-10 bg-[url(./assets/ts_bg.jpg)] h-[90vh] text-white">
        <h2 class="text-4xl ">Welcome to The Mitchell Lab!</h2>
        <div class="w-[50vw] justify-self-center" >
            <p class="text-2xl pt-5">Our mission is to overcome biological barriers to drug delivery.</p>
            <p class="text-2xl pt-5">
                We use the interface of biomaterials science, drug delivery, and cellular and molecular 
                bioengineering to fundamentally understand and therapeutically target biological barriers.
            </p>
        </div>

        <div class="rounded-2xl w-[800px] justify-self-center pt-15">
            <Galleria 
                :value="images" 
                :autoPlay="true" 
                :circular="true"
                :showItemNavigators="true"
                :showThumbnails="false"
                :numVisible="1"
                :interval="5000"
                
                show-indicators
            >
                <template #item="slotProps">
                    <img :src="slotProps.item.src" :alt="slotProps.item.alt" />
                </template>
            </Galleria>
        </div>

        <div class="w-[50vw] justify-self-center" >
            <p class="text-2xl pt-5">We apply our research findings and the technologies developed to a range of human health applications, including cancer metastasis, immunotherapy, genome editing, cardiovascular disease, and regenerative medicine.
            </p>
        </div>
        <!-- <Card class="col-span-10">
            <template #title>
                <h2 class="font-serif text-4xl">Welcome to The Mitchell Lab!</h2>
            </template>
            <template #subtitle>
                <p class="font-serif text-3xl pt-5">Our Mission: Overcome biological barriers to drug delivery.</p>
            </template>
            <template #content>
                <p class="font-serif text-2xl pt-5">
                    We use the interface of biomaterials science, drug delivery, and cellular and molecular 
                    bioengineering to fundamentally understand and therapeutically target biological barriers.
                </p>
            </template>
        </Card> -->
        <!--
        <Card class="col-span-5">
            <template #title>
                <h2 class="font-serif text-2xl">We apply our research findings and the technologies developed to a range of human health applications, including cancer metastasis, immunotherapy, genome editing, cardiovascular disease, and regenerative medicine.</h2>
            </template>
            <template #content>
                <div class="grid grid-cols-3 grid-rows-2 grid-rows-2">
                    <div class="col-span-3 flex flex-row justify-center">
                        <div class="w-60">
                            <Image 
                                :src="image"
                                alt="Image 1" 
                                :pt="{
                                    image: 'w-full h-full object-cover',
                                    preview: 'backdrop-blur-sm'
                                }"
                                preview
                            />
                        </div>
                        <div class="w-60">
                            <Image 
                                :src="image"
                                alt="Image 2" 
                                :pt="{
                                    image: 'w-full h-full object-cover',
                                    preview: 'backdrop-blur-sm'
                                }"
                                preview
                            />
                        </div>
                        <div class="w-60">
                            <Image 
                                :src="image"
                                alt="Image 2" 
                                :pt="{
                                    image: 'w-full h-full object-cover',
                                    preview: 'backdrop-blur-sm'
                                }"
                                preview
                            />
                        </div>
                    </div>
                    <div class="col-span-3 row-start-2 flex flex-row justify-center">
                        <div class="w-60">
                            <Image 
                                :src="image"
                                alt="Image 2" 
                                :pt="{
                                    image: 'w-full h-full object-cover',
                                    preview: 'backdrop-blur-sm'
                                }"
                                preview
                            />
                        </div>
                        <div class="w-60">
                            <Image 
                                :src="image"
                                alt="Image 2" 
                                :pt="{
                                    image: 'w-full h-full object-cover',
                                    preview: 'backdrop-blur-sm'
                                }"
                                preview
                            />
                        </div>
                    </div>
                </div>
            </template>
        </Card> -->
    </div>
</template>
  
<script setup lang='ts'>
    import { onMounted, ref } from 'vue';
    import Galleria from 'primevue/galleria';
    import { Card, Image } from 'primevue';
    import bgImage from '../assets/neon_cell_background.jpg';
    const imagePaths = import.meta.glob<Record<string,string>>('../assets/home_gallery/*.{png,jpg,jpeg,svg}', { eager: true });

    const images = ref<{src: string, alt: string}[]>([]);

    onMounted(() => {
        images.value = Object.values(imagePaths).map((image, index) => {
            return {
                src: image.default,
                alt: `image${index}`
            }
        })
        console.log(images)
    })
</script>

<style scoped>
.bg-image{
    height: 90vh;
}

.bg-image::after {
    background-image: url(./assets/neon_cell_background.jpg) ;
    content: "";
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
}
</style>