<template>
    <h1>Lab Members</h1>
    
    <div class="grid grid-cols-16 gap-5 p-4">
        <!-- <Image 
            :src="group" 
            class="col-start-5 col-span-8 rounded-2xl overflow-hidden"
            :pt="{
                image: 'object-cover',
                preview: 'backdrop-blur-sm'
            }"
        /> -->
        <div class="col-start-5 col-span-8 rounded-2xl overflow-hidden">
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
        
        <div class="col-span-2"></div>
        <div class="col-start-2 col-span-14 grid grid-cols-14 gap-4">
            <Card v-for="member in labMembersWithImages" :key="member.name" class="col-span-2">
                <template #header>
                    <Image 
                        :src="member.imgUrl"
                        :alt="member.name"
                        :pt="{
                            image: 'w-full object-cover rounded-t-lg',
                            preview: 'backdrop-blur-sm'
                        }"
                        class="rounded-t-lg"
                    />
                </template>
                <template #title>
                    <h2 class="text-lg font-bold">{{ member.name }}</h2>
                </template>
                <template #content>
                    <div class="flex flex-col space-y-2">
                        <p>{{ member.role }}</p>
                        <p>{{ member.subject }}</p>
                    </div>
                </template>
            </Card>
        </div>

        <Card class="col-start-2 col-span-14 bg-surface-400">
            <template #title>
                <span class="text-2xl font-bold">Get to know the Team's Favorite...</span>
            </template>
            <template #content>

            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { Card, Image } from 'primevue';
    // import group from '../assets/lab_group.jpg';
    import Galleria from 'primevue/galleria';
    import { labMembers, LabMember } from '../labMembers';

    const imagePaths = import.meta.glob<Record<string,string>>('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true });

    const images = ref<{src: string, alt: string}[]>([]);


    interface LabMemberWithImage extends LabMember {
        imgUrl: string;
    }

    const labMembersWithImages = ref<LabMemberWithImage[]>([]);

    onMounted(async () => {
        labMembersWithImages.value = await Promise.all(
            labMembers.map(async (member) => {
                const imgUrl = (await import(`.${member.imgPath}`)).default;
                return { ...member, imgUrl };
            })
        );

        images.value = Object.values(imagePaths).map((image, index) => {
            return {
                src: image.default,
                alt: `image${index}`
            }
        })
        console.log(images)
    });
</script>