<template>
  <div class="container">
    <sidebarMain/>
    <headerTop/>
    <main>
      <RouterView />
      <div class="back-drop" id="backdrop">
        <button class="backdrop-button" ></button>
      </div>
    </main>
  </div>
  <!-- <loader></loader> -->
  <!-- <logIn/> -->
  



</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
  import Button from 'primevue/button';
  import { ref } from 'vue';
  import sidebarMain from './components/sidebar/sidebar-main.vue';
  import headerTop from './components/header/header.vue';
  import loader from './components/loader/loader.vue';
  import logIn from './views/log-in.vue';
  import orders from './orders';
  
  const Orders = ref(orders);

</script>

<style scoped>

 /* aside{
  border-width: 2px;
  border-color: rgb(255, 0, 0);
  border-style: dashed;
 } */

  /* *{
  border-width: 1px;
  border-color: rgb(255, 0, 0);
  border-style: dashed;
 } */

</style>

