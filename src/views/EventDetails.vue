<script setup lang="ts">
import EventService from "@/services/EventService";
import { onMounted, ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const event: any = ref(null);

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
