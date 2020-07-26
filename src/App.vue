<template>
  <div id="app">
    <header-project></header-project>
    <main-container></main-container>
    <filtermenu-container></filtermenu-container>
    <list-container></list-container>
  </div>
</template>

<script>
import HeaderProject from './components/HeaderProject'
import MainContainer from './components/MainContainer'
import FiltermenuContainer from "./components/FiltermenuContainer";
import ListContainer from "./components/ListContainer"

export default {
  name: 'App',
  components: {
    HeaderProject,
    MainContainer,
    FiltermenuContainer,
    ListContainer
  }
}
</script>

<style>
  html{
    font-size:100%;
    font-family:sans-serif;
    padding:0;
    margin:0;
  }
  body{
    margin:0;
    padding:0;
  }
</style>
