<template>
    <div class="main_container">
        <h1 class="main_titile">Хранилище</h1>
        <a href="" class="main_add">Добавить новый элемент</a>
    </div>
</template>

<script>
    export default {
        name: "MainContainer"
    }
</script>

<style scoped>
    .main_container{
        max-width:90rem;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:0 auto;
        border-bottom:.05rem solid #C4C4C4;
        box-sizing:border-box;
        padding:0 .5rem;
    }

    .main_titile{
        max-width:70rem;
        width:100%;
        display:flex;
        align-items:center;
        margin:0;
        padding-top:;
        min-height:4.75rem;
    }

    .main_add{
        max-width:12rem;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin:0;
        padding:.3rem;
        border-radius:.35rem;
        min-height:1.875rem;
        text-decoration:none;
        color:#fff;
        background-color:#21892C;
        font-size:.85rem;
    }
</style>