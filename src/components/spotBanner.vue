<template>
  <div class="banner" :style="{'background-image': `url(${photoURL})`}">
    <div class="banner-content" >
        <h1 class="banner-title">{{ title }}</h1>
        <div class="btn-grp">
            <button class="btn-play btn">
              <ion-icon name="play"></ion-icon>
              <span>Play</span>
            </button>
            <button class="btn-info btn" @click="showModal = !showModal">
              <ion-icon name="information-circle-outline"></ion-icon>
              <span>info</span>
              </button>
        </div>
        <p class="banner-description">{{ description }}</p>
    </div>
    <div class="banner-fade"></div>
  </div>
  <modal v-if="showModal" :pathURL="pathURL" @drop="showModal = !showModal"/>
  
</template>

<script>
import fetch from '../fetch'
import requests from '../request'
import modal from '@/components/modal.vue';
export default {
name:'spotBanner',
components:{
  modal
},
data(){
    return{
        title:'',
        description:'',
        photoURL:'https://image.tmdb.org/t/p/original',
        pathURL:'',
        showModal:false
    }
},
methods:{
  async fetchPhoto(){
    const res = await fetch.get(requests.Trending);
    const path = res.data.results[Math.floor(Math.random() * (res.data.results.length-1))]
    this.pathURL = path;

    this.title = path?.name || path?.title || path?.original_name ;

    if(this.title == '') this.fetchPhoto();

    this.description = (path?.overview.length < 200)?path?.overview:path?.overview.substr(0,200)+"....";

    this.photoURL+=path?.backdrop_path;
    console.log(this.pathURL)
  }
},
mounted(){
  this.fetchPhoto();
}
}
</script>

<style scoped>
.banner{
  height: 560px;
  background-size : cover;
  background-position: centre 10%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.banner-content{
  margin: 0px 50px;
}
.banner-title{
  margin: 10px 0px;
}
.banner-description{
  width: 30rem;
  font-size: 0.9rem;
}
.btn-grp{
  margin: 15px 0px;
}
.btn{
  width: 120px;
  padding: 12px;
  font-size: 1.24rem;
  margin-right: 6px;
  border-radius:7px;
  cursor: pointer;
  border:  none;
  color: #FFFFFF;
}
.btn ion-icon{
  font-size: 1.4rem;
}
.btn ion-icon,span{
  vertical-align: middle;
}
.btn-play{
  background: rgba(184, 25, 25, 0.8);
}
.btn-info{
  background: rgb(132, 132, 132,0.8);
}
.banner-fade{
  height: 7.6rem;
  background-image: linear-gradient(180deg,transparent,rgba(32, 31, 31, 0.67),rgb(17, 17, 17));
}
</style>