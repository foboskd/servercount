<template>
    <ul class="header_list">
        <li class="header_listelement">
            Название проекта
        </li>
        <li class="header_listelement">
            Имя хоста, IP
        </li>
        <li class="header_listelement">
            Доменные имена
        </li>
        <li class="header_listelement">
            CI раннеры
        </li>
        <li class="header_listelement">
            Docker
        </li>
        <li class="header_listelement">
            Пользователи
        </li>
    </ul>
</template>

<script>
    export default {
        name: "HederList"
    }
</script>

<style scoped>
    .header_list{
        display:flex;
        justify-content:space-between;
        list-style:none;
        padding:0;
        margin:0;
    }

    .header_listelement{
        width:100%;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        min-height:3.5rem;
        font-weight:bold;
        font-size:1.15rem;
    }

    .header_listelement:nth-child(1){
        max-width:12.5rem;
    }

    .header_listelement:nth-child(2){
        max-width:8.125rem;
    }

    .header_listelement:nth-child(3){
        max-width:12.5rem;
    }

    .header_listelement:nth-child(4){
        max-width:7.18rem;
    }

    .header_listelement:nth-child(5){
        max-width:10rem;
    }

    .header_listelement:nth-child(6){
        max-width:8.75rem;
    }
</style>