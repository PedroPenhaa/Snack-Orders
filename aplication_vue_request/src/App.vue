<template>
 
 
 <div>

<!-- Adicione isso ao cabeçalho do seu HTML -->



    <NavBar :logo="logo_src" :alt="app_name"  v-if="criado"/>
    <router-view v-if="criado"/>
    <Footer v-if="criado"/>
    
    <div class="loader" v-if="!criado">
      <i class="mdi mdi-loading mdi-spin" style="font-size: 48px;"></i>
    </div>
  </div>

  
</template>

<script>

import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  },
  data(){
    return{
      criado: false,
      logo_src: "img/logo.png",
      app_name: "Monte seu Hamburguer"
    }
  },
  
  mounted() {
  // Use setTimeout dentro da função mounted
  setTimeout(() => {
    this.criado = true; // Change the comma to a semicolon
  }, 3000);
}

};
</script>

<style>
.loader{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box ;
}

.main-container{
  margin: 50px;
  min-height: 300px;
}

h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
