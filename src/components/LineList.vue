<template>
    <ul class="line_list">
        <li class="line_listelement">
            <div class="listelement_logo">
            </div>
            <a href="">Единый портал</a>
        </li>
        <li class="line_listelement">
            <p class="host_name">
                up.admlr.loc
            </p>
            <p class="ip_number">
                10.0.0.112
            </p>
        </li>
        <li class="line_listelement">
            <p class="domen_name">исгу.рф</p>
            <p class="domen_name">portal.admlr.lipetsk.ru</p>
        </li>
        <li class="line_listelement">
            <i class="status_runner"></i>
            <p class="runners">
                SRV112
            </p>
        </li>
        <li class="line_listelement">
            <p>Не используется</p>
        </li>
        <li class="line_listelement">
            <p>webup</p>
            <p>webdev</p>
            <p>root</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "LineList"
    }
</script>

<style scoped>
    .line_listelement:nth-child(1){
        max-width:12.5rem;
    }

    .header_listelement:nth-child(2),
    .line_listelement:nth-child(2){
        max-width:8.125rem;
    }

    .header_listelement:nth-child(3),
    .line_listelement:nth-child(3){
        max-width:12.5rem;
    }

    .header_listelement:nth-child(4),
    .line_listelement:nth-child(4){
        max-width:7.18rem;
    }

    .header_listelement:nth-child(5),
    .line_listelement:nth-child(5){
        max-width:10rem;
    }

    .header_listelement:nth-child(6),
    .line_listelement:nth-child(6){
        max-width:8.75rem;
    }


    .line_list{
        display:flex;
        justify-content:space-between;
        list-style:none;
        padding:0;
        margin:0;
        border-bottom:.05rem solid #C4C4C4;
        transition:all .24s ease-in-out;
    }

    .line_list:hover{
        background-color: #d7d7d7;
        cursor:pointer;
        color:#fff;
    }

    .line_list:hover .line_listelement a{
        color:#fff;
    }

    .line_listelement{
        width:100%;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        min-height:4.5rem;
        font-weight:normal;
    }

    .line_listelement p {
        margin:0;
    }

    .line_listelement:nth-child(2),
    .line_listelement:nth-child(3),
    .line_listelement:nth-child(6){
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
    }

    .line_listelement a {
        text-decoration:none;
        color:black;
        transition:all .5s ease-in-out;
    }

    .listelement_logo{
        display:flex;
        align-items:center;
        justify-content:center;
        width:2.5rem;
        height:2.5rem;
        background-color:#676767;
        margin-right:.45rem;
        border-radius:.25rem;
    }

    .status_runner{
        border-radius:50%;
        width:1rem;
        height:1rem;
        background-color:#3E9C47;
        margin-right:.45rem;
    }
</style>