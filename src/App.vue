<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavbarVue from './components/Navbar.vue'

</script>

<template>
  <div class="text-center container-fluid">
    <div class="row">
      <NavbarVue/>
      <RouterView/>
    </div>
   
  </div>
</template>

