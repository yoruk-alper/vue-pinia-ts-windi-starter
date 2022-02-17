<template>
  <h1>Count: {{ store.count }}</h1>
  <button
    class="px-6 py-2 bg-indigo-500 font-medium text-sm hover:bg-indigo-600 text-indigo-100 rounded"
    @click="store.increment()"
  >
    Increment
  </button>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
</script>
