<script setup>
defineProps({
  book: Object, // Properti untuk menerima data buku dari App.vue
});
</script>

<template>
  <div class="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col md:flex-row gap-4">
    <figure v-if="book.volumeInfo?.imageLinks?.thumbnail" class="w-full md:w-48 flex-shrink-0">
      <img :src="book.volumeInfo?.imageLinks?.thumbnail" class="w-full h-full object-cover rounded-md" alt="book" />
    </figure>
    <div class="flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-lg">{{ book.volumeInfo?.title }}</h3>
        <p class="text-sm text-gray-700">Author: {{ book.volumeInfo?.authors?.toString() || "Unknown" }}</p>
        <p class="text-sm text-gray-700">Publisher: {{ book.volumeInfo?.publisher || "Unknown" }}</p>
        <p class="text-sm text-gray-700">Published: {{ book.volumeInfo?.publishedDate || "Unknown" }}</p>
      </div>
      <a :href="book.volumeInfo?.infoLink" target="_blank" rel="noopener"
        class="mt-2 inline-block py-2 px-4 bg-zinc-900 text-white font-semibold rounded-md hover:bg-zinc-700">
        More Info
      </a>
    </div>
  </div>
</template>
