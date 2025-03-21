<template>
    <div class="flex flex-col mt-2">
        <h1>Publications</h1>
        <Accordion :value="[2025]" multiple class="ml-5 mr-5 mt-2">
            <AccordionPanel v-for="year in years" :key="year" :value="year">
                <AccordionHeader><h2 class="text-xl">{{ year }}</h2></AccordionHeader>
                <AccordionContent v-for="pub in groupedPubs[year]" :key="`${year}${pub.index}`">
                    <div :class="`grid grid-cols-18 bg-surface-${pub.index % 2 == 0 ? 0 : 100}`">
                        <Image preview :src="pub.image" :alt="`image${pub.index}`" class="col-span-4"/>
                        <div class="col-start-5 col-span-1">
                            <p class="text-lg">{{ pub.index + 1 }}.</p>
                        </div>
                        <div class="col-start-6 col-span-13  text-left ">
                            <p class="text-lg font-bold pb-2">{{ pub.title }}.</p>
                            <p class="pb-2">{{ pub.authors }}</p>
                            <p>{{ pub.journalYear }}</p>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { Accordion, AccordionPanel, AccordionHeader, AccordionContent, Image } from 'primevue';
    import {publications, Publication} from '../publications';
    const imagePaths = import.meta.glob<Record<string,string>>('../assets/publications/*.{png,jpg,jpeg,svg,webp,gif}', { eager: true });

    const fileObjects = ref<{[key: string]: string}>({})
    const years = ref<number[]>([])
    const groupedPubs = ref<{[year: number]: Publication[]}>({})

    // TODO I could do a filter pretty easily if it's by tag. Have a new field in publications for a list of tags
    // Then filter the original publications array by tag, and then rerun the stuff below to get all the proper pubs
    onMounted(() => {
        // get all images and map them to their indexes
        Object.values(imagePaths).map((image) => {
            if(image && image.default){
                // get the file name
                let fileName = image.default.split('/').pop()?.split('.')[0] || '';
                if(fileName){
                    fileName = fileName.split("-")[0]
                }
                fileObjects.value[fileName] = image.default
            }
        })
        console.log(fileObjects)

        // get all the unique years, then reverse them
        years.value = Array.from(new Set(publications.map((pub) => pub.year))).reverse()

        // get all publications, group them by year, add the file location
        groupedPubs.value = publications.reduce((groups: {[year: number]: Publication[]}, pub) => {
            // Create array for this year if it doesn't exist
            if (!groups[pub.year]) {
                groups[pub.year] = [];
            }
            const updatedPub = {
                ...pub,
                image: fileObjects.value[pub.index + 1]
            }
            // Add the publication to its year group
            groups[pub.year].push(updatedPub);
            
            return groups;
        }, {});

        Object.keys(groupedPubs.value).forEach(year => {
            groupedPubs.value[Number(year)].reverse();
        });

    })
    
</script>