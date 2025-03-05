<template>
    <div class="flex flex-col ml-10 mr-10">
        <h1 class="mt-2">Research</h1>
        <div class="grid grid-cols-6 gap-2">
            <Card class="col-span-3 mt-5">
                <template #header>
                    <p class="font-bold text-xl mt-2">ENGINEERING AND PHYSICAL SCIENCES IN ONCOLOGY</p>
                </template>
                <template #content>
                    <div class="grid grid-cols-6">
                        <div class="col-span-6 text-left">
                            <p>
                                Engineers and physical scientists have made contributions to all aspects of cancer biology, from developing a quantitative understanding
                                    of the physical abnormalities of tumors to improving the detection and diagnosis of cancer. By detecting and quantifying these physical
                                    abnormalities, physical scientists and engineers - in collaboration with cancer biologists and oncologists - are identifying new 
                                    therapeutic strategies for cancer.
                            </p>
                        </div>
                        <div class="col-span-3">
                            <Image
                                :src="nrc"
                                alt="Image1" 
                                :pt="{
                                    image: 'w-full h-full object-cover',
                                    preview: 'backdrop-blur-sm'
                                }"
                                preview
                            />
                        </div>
                        <div class="col-span-3 text-left font-bold italic self-center">
                            <p>
                                The Mitchell Lab is specifically interested in developing in vivo drug delivery technologies that target key genes and proteins in the
                                    tumor microenvironment that drive cancer progression.
                            </p>
                            <p class="mt-2">
                                The ultimate goal is developing novel therapeutics that synergize with clinically approved drugs to treat cancer.
                            </p>
                        </div>
                    </div>
                </template>
            </Card>

            <Card class="col-span-3 mt-5">
                <template #header>
                    <p class="font-bold text-xl mt-2">DELIVERY TECHNOLOGIES FOR IMMUNOENGINEERING</p>
                </template>
                <template #content>
                    <div class="grid grid-cols-6">
                        <div class="col-span-3 text-left">
                            <p>
                                A key challenge to the broad implementation of immunotherapy is the controlled modulation of the immune system - immunotherapeutics 
                                can often be a double-edged sword and cause serious autoimmune effects and non-specific inflammation.
                            </p>
                            <p class="mt-2">
                                The goal of our work in the Mitchell Lab is to design advanced drug delivery systems and biomaterials to better harness the effects of 
                                immunotherapy and improve potency, while avoiding toxic side effects.
                            </p>
                        </div>
                        <div class="col-span-3">
                            <Image
                                :src="nrdd"
                                alt="Image1" 
                                :pt="{
                                    image: 'w-full h-full object-cover',
                                    preview: 'backdrop-blur-sm'
                                }"
                                preview
                            />
                        </div>
                        <div class="col-span-6 text-left">
                            <p class="mt-5">
                                Immunotherapy has become a powerful clinical strategy for treating disease, with an increasing number of drug approvals and a large 
                                pipeline of novel treatments in clinical and preclinical development.
                            </p>
                            <p class="mt-2 font-bold italic">
                                Specific research interests include the development of in vivo and ex vivo delivery technologies to engineer immune cells for cancer 
                                immunotherapy and vaccination.
                            </p>
                        </div>
                    </div>
                </template>
            </Card>

            <Card class="col-span-6">
                <template #header>
                    <p class="font-bold text-xl mt-2">BIOMATERIALS FOR OVERCOMING BIOLOGICAL BARRIERS TO DRUG DELIVERY</p>
                </template>
                <template #content>
                    <div class="grid grid-cols-13">
                        <div class="col-span-9 text-left self-center">
                            <p>
                                The biological barriers to drug delivery to target cells and tissues are complex and numerous, and cause drugs to either be degraded 
                                or filtered from the body before achieving their desired therapeutic effect.
                            </p>
                            <p class="mt-2">
                                The goal of our work in the Mitchell lab is to fundamentally understand and overcome these biological barriers by leveraging 
                                biomaterials science, drug delivery, and cellular and molecular bioengineering.
                            </p>
                            <p class="mt-2">
                                To accomplish this overarching goal, we apply research findings and technologies developed to a range of human health applications. 
                                Our efforts span the areas of cancer metastasis, immunotherapy, genome editing, cardiovascular disease, and regenerative medicine.
                            </p>
                            <p class="mt-2 font-bold italic">
                                Specific research interests include: synthesis of novel biomaterials and nanoparticles for the delivery of nucleic acids
                                 (siRNA, miRNA, mRNA, CRISPR-Cas9); investigating the influence of biomaterial chemical structure on in vivo transport to 
                                 target cells and tissues using high-throughput screening platforms; and novel drug delivery technologies for tissue engineering 
                                 and regenerative medicine.
                            </p>
                        </div>
                        <div class="col-span-4">
                            <Image
                                :src="mRNA"
                                alt="Image1" 
                                :pt="{
                                    image: 'w-full h-full object-cover',
                                    preview: 'backdrop-blur-sm'
                                }"
                                preview
                            />
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Card, Image } from 'primevue';
    import mRNA from '../assets/research/Figure-1-mRNA-Therapeutics-and-Vaccines-Solid-background.png'
    import nrdd from '../assets/research/NRDD_Figure.png'
    import nrc from '../assets/research/nrc.2017.83-5-FIG-1-1024x608.jpg'
</script>