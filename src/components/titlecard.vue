<template>
    <div class="card-wrapper">
  <div class="title-card">
        <img src="../assets/temp.jpg" alt="" class="title-img">
        <div  class="title-info">
            <div class="card-icons">
                <div class="left-icons">
                    <span>
                    <ion-icon name="play-circle-outline"></ion-icon>
                </span>
                <span>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </span>
                <span>
                    <ion-icon name="thumbs-up-outline"></ion-icon>
                </span>
                <span>
                    <ion-icon name="thumbs-down-outline"></ion-icon>
                </span>
                </div>
                <div class="right-icons">
                    <span>
                        <ion-icon name="chevron-up-circle-outline"></ion-icon>
                    </span>
                </div>
            </div>
           <div>{{t}}</div>
           <div style="color:greenyellow">65% Match</div>
           <div>Sci-fi Thriller Fanstasy</div>
        </div>
        
  </div>    
</div>
</template>

<script>
export default {
    props:['t']
}
</script>

<style>
.card-wrapper{
    height: 9rem;
    width: 15rem;
    overflow: hidden;
    top: 0px;
    border-radius: 1px solid white;
}
.title-card{
    height: 18rem;
    background: black;
    width: 15rem;
    border-radius: 10px;
    overflow: hidden;
    color: #FFFFFF;
}
.title-card .title-img{
    width: 100%;
    height: 50%;
    border-radius: 0 0 5px 5px;
}
.title-card .title-info .card-icons{
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
}
.title-card .title-info .card-icons .left-icons span{
    padding-right: 5px;
}

.title-card .title-info{
    padding: 10px;
    font-size: 1rem;
}
.title-card .title-info div{
    margin-bottom: 5px;
}
.title-card .title-info ion-icon{
  cursor: pointer;
}
</style>




