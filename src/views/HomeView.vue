<template>
    <Navbar />

    <section class="flex flex-col items-center my-12 px-4">
        <h1 class="text-2xl md:text-3xl font-semibold mb-6 text-center">Temukan buku yang Anda inginkan.</h1>
        <FormSearch @search="search" />
    </section>

    <div class="w-full text-center" v-if="isLoading">
        <Spinner />
    </div>

    <section class="w-[90vw] md:w-[80vw] mx-auto mb-8" v-else>
        <h1 class="text-xl font-semibold text-center mb-4" v-if="books">
            {{ `${books.totalItems} books found` }}
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" v-if="books">
            <Card v-for="book in books.items" :key="book.id" :book="book" />
        </div>
    </section>
</template>

<script setup>
import Card from "@/components/Card.vue";
import FormSearch from "@/components/FormSearch.vue";
import Navbar from "@/components/Navbar.vue";
import Spinner from "@/components/Spinner.vue";
import { ref } from "vue";

const books = ref(null);
const isLoading = ref(false);

async function search({ keyword }) {
    if (!keyword) return;

    const url = new URL(import.meta.env.VITE_BASE_URL);
    url.searchParams.set("q", keyword);

    console.log("Fetching data from:", url.toString()); // Debugging

    isLoading.value = true;
    const res = await fetch(url);
    const data = await res.json();

    console.log("API Response:", data); // Debugging

    isLoading.value = false;
    books.value = { items: data.items, totalItems: data.totalItems };
}

</script>

<style scoped></style>
