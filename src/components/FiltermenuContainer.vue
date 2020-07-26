<template>
    <ul class="filtermenu_container">
        <li class="filter_element" id="filterelementproject">
            Ваши проекты <i class="countfilterspace">123</i>
        </li>
        <li class="filter_element" id="filterelementci">
            CI раннеры <i class="countfilterspace">333</i>
        </li>
        <li class="filter_element" id="filterelementdomen">
            Домены <i class="countfilterspace">444</i>
        </li>
        <li class="filter_element" id="filterelementhost">
            Имена хостов <i class="countfilterspace">111</i>
        </li>
        <li class="filter_element" id="filterelementip">
            IP-адреса <i class="countfilterspace">111</i>
        </li>
        <li class="filter_element">
            <input type="search" id="search" placeholder="Поиск">
        </li>
    </ul>
</template>

<script>
    export default {
        name: "FiltermenuContainer"
    }
</script>

<style scoped>
    .filtermenu_container{
        max-width:90rem;
        width:100%;

        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:0 auto;
        padding:0 .5rem;
        list-style:none;
        border-bottom:.05rem solid #C4C4C4;
        box-sizing:border-box;
    }

    .filter_element{
        max-width:13rem;
        height:3.5rem;
        align-items:center;
        justify-content: center;
        font-size:.95rem;
        font-weight:500;
        cursor:pointer;
        display:flex;
        color: #676767;
        box-sizing:border-box;
        border-bottom: .05rem solid transparent;
    }

    .filter_element input[type=search]{
        max-width:17rem;
        font-size:.95rem;
        font-weight:500;
        padding:.28rem;
        border-radius:.35rem;
        border:.05rem solid #C4C4C4;
        background: #FBFBFB;
        cursor:pointer;
    }

    .countfilterspace{
        display:flex;
        font-size:.65rem;
        background-color:#C4C4C4;
        justify-content: center;
        align-items: center;
        width: 1.5rem;
        height: 1.25em;
        font-style:normal;
        margin-left:.3rem;
        border-radius:.5rem;
        color: #676767;
    }
</style>