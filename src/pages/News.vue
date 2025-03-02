<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
    console.log(`the component is now mounted.`)
    let twitterScript = document.createElement('script')
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    twitterScript.setAttribute('charset', 'utf-8')
    document.head.appendChild(twitterScript)
})

</script>

<template>
    <a class="twitter-timeline" href="https://twitter.com/MJMitchell_Lab?ref_src=twsrc%5Etfw">Tweets by MJMitchell_Lab</a>
</template>

<!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->