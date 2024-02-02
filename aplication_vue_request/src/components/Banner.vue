<template>
    <div class="main-banner">
        <h1>Make Your Burger</h1>
    </div>
</template>

<script>
    export default{
        name: "Banner"
    }
</script>

<style scoped>
    .main-banner{
        background-image: url('/public/img/burger.jpg');
        background-position: 0 -250px;
        background-size: cover;
        height: 640px;
        display: flex;
        align-items: center;
    }
    .main-banner h1{
        color: #FFF;
        text-align: center;
        font-size: 60px;
        background-color: #222;
        padding: 20px 60px;
    }    
</style>