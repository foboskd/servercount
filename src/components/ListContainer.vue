<template>
    <div class="list_container">
        <HederList></HederList>
        <line-list></line-list>
    </div>
</template>

<script>
    import HederList from './HederList'
    import LineList from './LineList'

    export default {
        name: "ListContainer",
        components:{
            HederList,
            LineList
        }

    }
</script>

<style scoped>
    .list_container{
        max-width:90rem;
        width:100%;
        margin:0 auto;
        padding:0 .5rem;
        box-sizing:border-box;
        overflow:hidden;
    }
</style>