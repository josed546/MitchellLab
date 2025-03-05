<template>
    <div class="grid grid-cols-10 gap-5 ml-5 mr-5">
        <Card class="col-span-10">
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
        </Card>

        <div class="col-span-5">
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
                    <img class="aspect-[4/3] h-full block" :src="slotProps.item.src" :alt="slotProps.item.alt" />
                </template>
            </Galleria>
        </div>
        
        <Card class="col-span-5">
            <template #title>
                <h2 class="font-serif text-2xl">We apply our research findings and the technologies developed to a range of human health applications, including cancer metastasis, immunotherapy, genome editing, cardiovascular disease, and regenerative medicine.</h2>
            </template>
            <template #content>
                <div class="grid grid-cols-3 grid-rows-2 grid-rows-2">
                    <!-- first row -->
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
        </Card>
    </div>
</template>
  
<script setup>
    import { onMounted, ref } from 'vue';
    import Galleria from 'primevue/galleria';
    import { Card, Image } from 'primevue';
    import image from '../assets/cancercell.png';
    const imagePaths = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true });

    const images = ref([]);

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
</style>