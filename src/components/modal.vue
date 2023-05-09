<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-poster" :style="{'background-image': `url(${photoURL})`}">
               <span class="drop-icon" @click="dropModal()"><ion-icon name="close-circle-sharp"></ion-icon></span>
               <button class="btn-play btn">
                 <ion-icon name="play"></ion-icon>
                 <span>Play</span>
               </button>
               <ion-icon class="add-to-list" name="add-circle-outline"></ion-icon>
            </div>
            <div class="modal-detail">
                <h1 class="poster-title">{{ title }}</h1>
                <p class="poster-description">{{ description }}</p>
                <hr />
                <p class="release-date">Release date : <span class="release-date-val">{{ release_date }}</span></p>
                <p class="genre">Genre : <span class="genre-val">{{ genre }}</span></p>
            </div>
        </div>
    </div>
  
</template>

<script>
import genreList from '../genre.json'
export default {
props:['pathURL'],
data(){
    return{
    title:'',
    description:'',
    genre:'',
    genreList: genreList,
    release_date:'',
    photoURL:'https://image.tmdb.org/t/p/original'
    }
},
methods:{
    extractGenre(){
        const genre_ID = this.pathURL.genre_ids;
        this.genre = genreList.filter((val)=>genre_ID.includes(val.id)).map((val)=>val.name).join(' , ');
    },
    dropModal(){
        this.$emit('drop');
    },
    fetchdetail(){

    this.title = this.pathURL?.name || this.pathURL?.title || this.pathURL?.original_title ;

    this.description = this.pathURL?.overview;

    this.photoURL+=this.pathURL?.backdrop_path;

    this.release_date = this.pathURL?.release_date || this.pathURL?.first_air_date;
    }
},
mounted(){
    this.extractGenre();
    this.fetchdetail();
    window.addEventListener('click',(e)=>{
        if(e.target.className == 'modal') this.dropModal();
    });
}
}
</script>

<style scoped>
.modal{
    width: 100%;
    height: 100%;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content{
    width: 40%;
    border: 1px solid rgb(57, 56, 56);
    background: rgb(17, 17, 17);
    border-radius: 5px;
    overflow: hidden;
}
.drop-icon{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.7rem;
}
.modal-poster{
    position: relative;
    height: 250px;
    object-fit: contain;
    background-size:cover;
    background-position: centre center;
    font-size: 2.3rem;
    display: flex;
    align-items: flex-end;
    padding-left: 22px;
    padding-bottom: 10px;
}
.modal-poster ion-icon{
    padding-bottom: 2px;
}
.modal-detail{
    margin: 10px 20px 20px 20px;
}
hr{
    margin: 15px 0px;
}
.btn{
  width: 100px;
  padding: 10px;
  font-size: 1.1rem;
  margin-right: 6px;
  border-radius:7px;
  cursor: pointer;
  border:  none;
  color: #ffffff;
  background: rgba(184, 25, 25, 0.9);
}
.btn span,ion-icon{
    vertical-align: middle;
}
.poster-title , .poster-description{
    padding: 5px;
}
.poster-description{
    font-size: 0.9rem;
}
.release-date , .genre{
    padding: 2px;
    font-size: 0.94rem;
    color: rgb(139, 136, 136);
}
.release-date-val,.genre-val{
    font-size: 0.9rem;
    color: rgb(255, 255, 255,0.8);
}
</style>