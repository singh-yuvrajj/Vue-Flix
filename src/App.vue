<template>
  <header>
    <Navbar />
  </header>
  <main>
    <spotBanner />
    <slider v-for="(request,key) in requests" :fetchURL="request" :key="key" :title="key" />
  </main>
  <footer>
    <div class="credits">
      <p>Made by Yuvraj Singh</p>
      <a href="https://www.linkedin.com/in/yuvraj-singh-7068b925b/" target="blank"><ion-icon name="logo-linkedin" ></ion-icon></a>
      <a href="https://github.com/singh-yuvrajj" target="blank"><ion-icon name="logo-github"></ion-icon></a>
    </div>
  </footer>
</template>

<script>
import requests from './request'
import Navbar from '@/components/Navbar.vue';
import slider from '@/components/slider.vue';
import spotBanner from '@/components/spotBanner.vue';
export default {
 name: "App",
 components:{
  Navbar,
  spotBanner,
  slider
 },
 data(){
  return{
    requests:requests
  }
 }
 
}
</script>

<style>
#app{
  background: rgb(17, 17, 17);
  color:#FFFFFF;
}

footer .credits{
  height: 100px;
  width: 200px;
  text-align: center;
  margin: auto;
}
footer .credits p{
  font-size: 1.1rem;
  color: rgb(176, 174, 174);
  padding: 10px;
}
footer .credits a{
  padding: 5px;
  font-size: 2rem;
  color: rgb(176, 174, 174);
}
footer .credits a:hover{
  color: #FFFFFF;
}

</style>
