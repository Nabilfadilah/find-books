<script setup>
import { ref } from "vue"

const keyword = ref("")
</script>

<template>
  <form class="flex items-center space-x-2 bg-zinc-100 p-2 rounded-lg shadow-md">
    <!-- Input dengan ikon pencarian -->
    <div class="relative w-[60vw]">
      <input
        type="search"
        v-model="keyword"
        class="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-all"
        placeholder="Type book name, author..."
      />
      <!-- Ikon pencarian -->
      <svg
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="20"
        height="20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 18a8 8 0 111.414-1.414L18 16l4 4-4 4-4-4-2.586-2.586A7.963 7.963 0 0110 18z"
        />
      </svg>
    </div>

    <!-- Tombol Search -->
    <button
      @click.prevent="$emit('search', { keyword })"
      class="py-2 px-4 rounded-md bg-zinc-900 text-zinc-100 hover:bg-zinc-800 transition-all duration-200"
    >
      Search
    </button>
  </form>
</template>

<style scoped>
/* Animasi hover pada tombol */
button:hover {
  background-color: #2d2d2d;
  transform: scale(1.05);
}
</style>
