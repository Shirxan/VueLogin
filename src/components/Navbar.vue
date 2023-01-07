<script setup>
import { mapGetters } from 'vuex';
</script>
<template>
    <div class="container-fluid">
                 <!-- Navigation-->
                 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" >Start Bootstrap</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><RouterLink class="nav-link" to="/">Home</RouterLink></li>
                            <li class="nav-item"><RouterLink class="nav-link" to="/aboutpage">About</RouterLink></li>
                            <li class="nav-item"><RouterLink class="nav-link" to="/login" v-if="!checkGet">Login</RouterLink></li>
                            <li class="nav-item" ><a class="nav-link" v-if="checkGet" @click="logut" >Logout</a></li>
                          
                            
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
</template>
<script>
export default{
    computed:{
        ...mapGetters(['checkGet'])
    },
    methods:{
      logut(){
        this.$store.commit('logutUser')
      }
    }
}
</script>