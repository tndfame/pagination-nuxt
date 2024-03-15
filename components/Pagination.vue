<script setup>
const props = defineProps({
    items: Array,
    itemsPerPage: {
    type: Number,
    default: 10
    }
});

const currentPage = ref(1);

const paginatedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * props.itemsPerPage;
    const endIndex = startIndex + props.itemsPerPage;
    return props.items.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(props.items.length / props.itemsPerPage));

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};
</script>

<template>
    <div>
      <h1>Items</h1>
      <ul>
        <li v-for="item in paginatedItems" :key="item.id">{{ item.name }}</li>
      </ul>
  
      <v-btn @click="previousPage" :disabled="currentPage === 1">Previous</v-btn>
      <v-btn @click="nextPage" :disabled="currentPage === totalPages">Next</v-btn>
    </div>
</template>
  
  
  