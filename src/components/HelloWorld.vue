<script setup lang="ts">
import { ref, reactive } from 'vue'
import Button from "primevue/button";
import Card from 'primevue/card';
import Airtable from "airtable";
import { onMounted } from 'vue';

defineProps<{ msg: string }>()

const people = ref([])
const count = ref(0)

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
});
const base = Airtable.base('app5YY1FKC4fznkQN');

const getPeople = async () => {
  await base('People').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 5,
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
      console.log('Retrieved', record.get('Name'));
      people.value.push({
        "name": record.get("Name"),
        "title": record.get("Title"),
        "focus": record.get("Focus"),
        "status": record.get("Status"),
        "headshot": record.get("Headshot")
      })
      // console.log(people)
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  }, function done(err) {
    if (err) { console.error(err); return; }
  });

  console.log("inside people", people)
}

onMounted(() => {
  getPeople();
  // people.value.concat(peopleData)
  // console.log(people.value)
})
</script>

<template>
  <!-- <h1>{{ msg }}</h1>

  <div class="card">
    <Button @click="count++" raised severity="success"> count is {{ count }} </Button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
  <div style="display: grid;grid-template-columns:repeat(5,1fr);">
    <Card v-for="person in people" :key="person.name" style="width: 25rem; overflow: hidden; margin: 10px">
      <template #header>
        <img style="height: 25vh" alt="user header" :src="person.headshot[0].thumbnails.large.url" />
      </template>
      <template #title>{{ person.name }}</template>
      <template #subtitle>{{ person.title }}</template>
      <template #content>
        <p class="m-0">
          {{ person.focus }}
        </p>
      </template>
      <template #footer>
        <!-- <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div> -->
      </template>
    </Card>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
