<template>
    <div class="slider_container">
    <h2>{{title}}</h2>
    <div class="row" >
      <div class="row_posters" v-for="item in items" :key="item.id">
       <img class="posters" :src="base_url+item.backdrop_path" :alt="item.id">
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import fetch from '../fetch'
  export default {
  name:'slider',
  props:['fetchURL','title'],
  data(){
      return{
          items : {},
          base_url : "https://image.tmdb.org/t/p/original"
      }
  },
  methods:{
      async fetchdata(){
          const res = await fetch.get(this.fetchURL);
          this.items = res.data.results;
          console.log(this.items);
      }
  },
  created(){
      this.fetchdata();
  }
  }
  </script>
  
  <style scoped>
    h2{
        color: rgb(176, 174, 174);
    }
  .slider_container{
      margin: 10px 0px 50px 50px;
  
  }
  .slider_container p{
      font-weight:500;
      font-size: 1.5rem;
  }
  .row{
      display: flex;
      margin:20px 0px;
      widows: 500px;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none; 
  }
  .row::-webkit-scrollbar{
      display: none;
  }
  .posters{
      cursor: pointer;
      padding: 5px;
      max-height: 160px;
      object-fit: contain;
      transition: transform 450ms;
  }
  .posters:hover{
      transform: scale(1.07);
  }
  
  </style>