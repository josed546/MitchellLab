<template>
    <h1>Principal Investigator</h1>
    <div class="grid grid-cols-10 gap-5 p-4 justify-items-center">
        <!-- Top row cards -->
        <div class="col-start-2 col-span-8 grid grid-cols-3 gap-5">
            <Card class="h-[510px]">
                <template #title>
                    <h2 class="text-3xl">
                        <a href="https://directory.seas.upenn.edu/michael-j-mitchell/" target="_blank">
                            Michael J. Mitchell, Ph.D.
                        </a>
                    </h2>
                </template>
                <template #subtitle>
                    <p>Photo by Kevin Monko</p>
                </template>
                <template #content>
                    <Image 
                        :src="image"
                        alt="Image 1" 
                        :pt="{
                            image: 'justify-self-center object-cover',
                            preview: 'backdrop-blur-sm'
                        }"
                    />
                </template>
            </Card>

            <Card>
                <template #title>
                    <h2 class="text-3xl">Education and Training</h2>
                </template>
                <template #content>
                    <div class="flex flex-col space-y-5 text-left">
                        <div class="flex flex-col ">
                            <span class="font-bold text-xl">Massachusetts Institute of Technology</span>
                            <span>NIH NCI F32 Ruth L. Kirschstein Postdoctoral Fellow, 2014 - 2017</span>
                            <span>Koch Institute for Integrative Cancer Research</span>
                            <span>Departments of Biological and Chemical Engineering</span>
                            <a href="https://langerlab.mit.edu/" target="_blank">
                                <span>Advisor: Prof. Robert S. Langer</span>
                            </a>
                        </div>

                        <div class="flex flex-col text-base">
                            <span class="font-bold text-xl">Cornell University</span>
                            <span>Ph.D., Biomedical Engineering, 2014</span>
                            <span>M.S., Biomedical Engineering, 2012</span>
                            <a href="https://engineering.vanderbilt.edu/bio/michael-king/" target="_blank">
                                <span>Advisor: Prof. Michael R. King</span>
                            </a>
                            
                        </div>

                        <div class="flex flex-col">
                            <span class="font-bold text-xl">Stevens Institute of Technology</span>
                            <span>M.E., Materials Science and Engineering, 2009</span>
                            <span>B.E., Biomedical Engineering, 2009</span>
                            <a href="https://www.stevens.edu/schaefer-school-engineering-science/departments/chemical-engineering-materials-science/research/nano-micro-bio-laboratory/people" target="_blank">
                                <span>Advisor: Prof. Woo Young Lee</span>
                            </a>
                        </div>
                    </div>
                </template>
            </Card>
            
            <Card>
                <template #title>
                    <h2 class="text-3xl">Current Positions</h2>
                </template>
                <template #content>
                    <div class="flex flex-col text-left overflow-y-auto h-[400px]">
                        <span class="font-bold">University of Pennsylvania</span>
                        <span>Associate Professor of Bioengineering, 2023 – Present</span>
                        <span>Skirkanich Assistant Professor of Innovation, 2018 – 2023</span>
                        <span>Department of Bioengineering</span>
                        <span>School of Engineering and Applied Science</span>

                        <span>Lipid Nanoparticle Delivery Systems Group Leader, Penn Institute for RNA Innovation</span>
                        <span>Director, Lipid Nanoparticle Synthesis Core, Penn Institute for RNA Innovation</span>
                        <span>Member, Abramson Cancer Center</span>
                        <span>Member, Center for Cellular Immunotherapies</span>
                        <span>Member, Center for Precision Engineering for Health</span>
                        <span>Member, Center for Soft and Living Matter</span>
                        <span>Member, Center for Targeted Therapeutics and Translational Nanomedicine</span>
                        <span>Member, Institute for Translational Medicine and Therapeutics</span>
                        <span>Member, Penn Cardiovascular Institute</span>
                        <span>Member, Penn Center for Musculoskeletal Disorders</span>
                        <span>Member, Penn Center for Innovation & Precision Dentistry</span>
                        <span>Member, Penn Institute for Immunology</span>
                        <span>Member, Penn Institute for Regenerative Medicine</span>
                    </div>
                </template>
                
            </Card>
        </div>

        <Card class="col-span-10 overflow-auto">
            <template #title>
                <h2 class="text-3xl">Selected Awards and Honors</h2>
            </template>
            <template #content>
                <div class="grid grid-cols-6 text-left gap-2">
                    <div class="col-span-1 flex flex-col gap-2">
                        <span><strong>Top 1% Highly Cited Researchers</strong>, Clarivate Analytics, 2024</span>
                        <span><strong>Young Investigator Award</strong>, Controlled Release Society, 2024</span>
                        <span><strong>Young Innovator Award</strong>, Cellular and Molecular Bioengineering, 2023</span>
                        <span><strong>American Cancer Society Research Scholar</strong>, 2023 – 2026</span>
                        <span><strong>IDEA Prize</strong>, University of Pennsylvania, 2023</span>
                    </div>
                    <div class="col-span-1 flex flex-col gap-2">
                        <span><strong>CAREER Award</strong>, National Science Foundation, 2022 – 2027</span>
                        <span><strong>Young Investigator Award</strong>, Society for Biomaterials, 2022</span>
                        <span><strong>Emerging Inventor of the Year</strong>, Penn Center for Innovation, 2021</span>
                        <span><strong>40 Under 40 Alumni Award</strong>, Stevens Institute of Technology, 2021</span>
                        <span><strong>Rising Star Award</strong>, Journal of Nanobiotechnology, 2021</span>
                    </div>
                    <div class="col-span-1 flex flex-col gap-2">
                        <span><strong>Emerging Investigator</strong>, Biomaterials Science, 2020</span>
                        <span><strong>T. Nagai Award</strong>, Controlled Release Society, 2019</span>
                        <span><strong>Rising Star Award in Cellular and Molecular Bioengineering</strong>, Biomedical Engineering Society, 2019</span>
                        <span><strong>Young Investigator Award</strong>, Chinese Association for Biomaterials, 2019</span>
                        <span><strong>NIH Director's New Innovator Award</strong>, 2018 – 2023</span>
                    </div>
                    <div class="col-span-1 flex flex-col gap-2">
                        <span><strong>Burroughs Wellcome Fund Career Award at the Scientific Interface (CASI)</strong>, 2018 – 2023</span>
                        <span><strong>STAT News Wunderkind Award</strong>, STAT News, 2017</span>
                        <span><strong>Merck Graduate Research Advances in Delivery Science Award</strong>, Controlled Release Society, 2017</span>
                        <span><strong>Cellular and Molecular Bioengineering Postdoctoral Research Award</strong>, Biomedical Engineering Society, 2017</span>
                    </div>
                    <div class="col-span-1 flex flex-col gap-2">
                        <span><strong>AACR Scholar in Cancer Research</strong>, American Association for Cancer Research, 2016</span>
                        <span><strong>Young Investigator Council</strong>, Tissue Engineering Parts A,B,C, 2016</span>
                        <span><strong>NIH F32 Ruth L. Kirschstein National Research Service Award</strong>, National Cancer Institute, 2015 – 2018</span>
                        <span><strong>Award for Outstanding Ph.D. Research</strong>, Society for Biomaterials, 2015</span>
                    </div>
                    <div class="col-span-1 flex flex-col gap-2">
                        <span><strong>Cellular and Molecular Bioengineering Ph.D. Student Award</strong>, Biomedical Engineering Society, 2015</span>
                        <span><strong>Max Planck Society Postdoctoral Fellowship</strong>, 2014</span>
                        <span><strong>BMES Career Development Award</strong>, Biomedical Engineering Society, 2014</span>
                        <span><strong>Separations Division Award</strong>, American Institute of Chemical Engineers, 2013</span>
                        <span><strong>BMES Graduate Research and Design Award</strong>, Biomedical Engineering Society, 2013</span>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
    import { Card, Image } from 'primevue';
    import image from '../assets/Mitchell_M_horz.jpg'
</script>

<style>
a {
    color: black
}

a:hover {
    color: blue
}
</style>