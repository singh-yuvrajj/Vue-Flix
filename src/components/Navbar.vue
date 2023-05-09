<template>
    <div :class="['nav', {'is-scrolled': isScrolled }]">
   
      <div class="nav-left">
          <img src="../assets/logo.png" alt="netflix logo">
          <div class="nav-items"> 
              <router-link to="/" class="nav-item">Home</router-link>
              <router-link to="/" class="nav-item">TV Shows</router-link>
              <router-link to="/" class="nav-item">Movies </router-link>
              <router-link to="/" class="nav-item">Recently Added</router-link>
              <router-link to="/" class="nav-item">My List</router-link>
          </div>
      </div>
      <div class="nav-right">
          <div v-show="showSearchbar" class="search-box">
              <input type="text" class="nav-item search-bar" placeholder="Titles, people, genres "> 
          </div>
          <span @click="showSearchbar=!showSearchbar" class="nav-item  icon icon-search"><ion-icon name="search-sharp" ></ion-icon></span>
          <span class="nav-item icon icon-notification"><ion-icon name="notifications-sharp"></ion-icon></span>
  
          <div class="user-profile nav-item" @click="showdropdown = !showdropdown">
              <img src="../assets/profile.png" class="profile-icon" alt="">
              <ion-icon :class="['drop-icon', {'drop-icon-clicked': showdropdown }]" name="caret-down-sharp"></ion-icon>
              <div class="dropdown-content" v-show="showdropdown">
                  <router-link class="dd-i Settings" to="/"><ion-icon name="person-sharp"></ion-icon><span>Profile</span>
                      </router-link>
                      <router-link class="dd-i Settings" to="/"><ion-icon name="settings-sharp"></ion-icon><span>Settings</span>
                      </router-link>
                      <router-link class="dd-i Help" to="/"><ion-icon name="help-circle-sharp"></ion-icon><span>Help</span></router-link>
                      <router-link class="dd-i Sign-Out" to="/"><ion-icon name="arrow-undo-sharp"></ion-icon><span>Sign-Out</span></router-link>
              </div>
          </div>
      </div>
  </div>
  </template>
  
  <script>
  import {ref,onMounted, onBeforeUnmount} from 'vue'
  export default {
      setup(){
      const showSearchbar = ref(false)
      const isScrolled = ref(false)
      const showdropdown = ref(false)
      
      const handleScroll = () => {
        isScrolled.value = window.scrollY > 80;
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
      return{
          showSearchbar,
          isScrolled,
          showdropdown
      }
      }
  }
  </script>
  
  <style scoped>
  .nav{
      padding:6px 45px;
      background: rgb(17, 17, 17,0);
      color: #FFFFFF;
      display: flex;
      justify-content: space-between;
      z-index: 100;
      width: 100%;
      position: fixed;
      transition: background 0.3s ease;
      top:0;
  }
  .nav.is-scrolled {
      background: rgb(30, 29, 29);
  }
  .nav-left{
      display: flex;
  }
  .nav-left img{
    height: 38px;
    padding: 5px;
    cursor: pointer;
  }
  .nav-left .nav-items{
   display: flex;
   align-items: center;
   padding: 0;
  }
  .nav-item{
      margin-left:20px;
      color: #FFFFFF;
  }
  .nav-right{
      display: flex;
      align-items: center;
      margin-right:20px;
  }
  .nav-right .search-box .search-bar{
      width: 350px;
      background-color: #141414;
      color: #FFFFFF;
      border: 1px solid #FFFFFF;
      padding: 8px 12px;
      font-size: 90%;
  }
  .nav-right .search-box span{
      cursor: pointer;
  }
  .nav-right .icon{
      font-size: 20px;
      cursor: pointer;
  }
  .nav-right .user-profile .profile-icon{
      height: 30px;
      border-radius: 3px;
      cursor: pointer;
  }
  .user-profile{
    position: relative;
  }
  .dropdown-content{
      width: 200px;
      position: absolute;
      right: 0;
      margin-top: 8px;
      border-radius: 2px;
      border: 1px solid rgb(57, 56, 56);
  }
  .dd-i{
      display: block;
      align-items: center;
      padding: 15px;
      background: rgb(30, 29, 29);
      color: #FFFFFF;
      font-size: 0.87rem;
  }
  .dd-i ion-icon{
      padding-right: 10px;
  }
  .dd-i:hover{
      background: rgb(47, 46, 46);
  }
  .drop-icon{
      transition: transform 0.3s ease-in-out;
      padding: 5px;
      cursor: pointer;
      visibility: visible;
  }
  .drop-icon-clicked{
      transform: rotate(180deg);
      visibility: visible;
  }
  .nav ion-icon:hover, .nav-item:hover{
      color: rgba(176, 170, 170, 0.8);
  }
  </style>