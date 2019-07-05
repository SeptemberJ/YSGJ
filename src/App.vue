<template>
  <div id="app">
    <div  :class="menuIndex == 1 ? 'TransparentBgBar' : 'WhiteBgBar'" style="display: block;padding-bottom:5px;position:fixed;top:0;left:0;z-index:1999;width: 100%"><div class="HeaderBox"><Header/></div></div>
    <div style="display: block;"><router-view/></div>
    <div style="display: block;position:relative"><Footer/></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState({
      menuIndex: state => state.menuIndex
    })
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.HeaderBox{
  padding: 0 20px 0px 20px;
  box-shadow: 1px 3px 12px #6b6b6b;
}
.el-header{
  padding: 0 !important;
}
.el-main{
  padding: 0px !important;
  display: block;
  clear: both;
}
.el-footer{
  padding: 80px 0 0 0 !important;
}
</style>
