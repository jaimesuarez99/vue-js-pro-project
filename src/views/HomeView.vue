<template>
    <div>

    </div>
</template>

<script setup>

const response = await fetch("https://fakestoreapi.com/products/category/men's clothing")
console.log(response);
const movies = await response.json();
console.log(movies);

</script>

<style lang="scss" scoped>



</style>