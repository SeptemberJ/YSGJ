<template>
  <div id="app">
    <div  :class="menuIndex == 1 ? 'TransparentBgBar' : 'WhiteBgBar'" style="display: block;padding-bottom:5px;position:fixed;top:0;left:0;z-index:99999;width: 100%"><div class="HeaderBox"><Header/></div></div>
   <!--  <div  class="WhiteBgBar" style="display: block;padding-bottom:5px;position:fixed;top:0;left:0;z-index:99999;width: 100%"><div class="HeaderBox"><Header/></div></div> -->
    <!--  <div :id="menuIndex == 1 ? 'headerBlockT' : 'headerBlockW'" class="TransparentBgBar" style="display: block;padding-bottom:5px;position:fixed;top:0;left:0;z-index:99999;width: 100%"><div class="HeaderBox"><Header/></div></div> -->
    <div style="display: block;"><router-view/></div>
    <div style="display: block;position:relative"><Footer/></div>
    <!-- <el-container>
      <el-header>
        <div class="HeaderBox"><Header/></div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
       <Footer/>
    </el-container> -->
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
 /* min-width: 1024px;*/
  /*min-width: 1024px;
  max-width: 1440px;
  margin: 0 auto;*/
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
  /*min-width: 1024px;*/
  padding: 0 !important;
}
.el-main{
  /*min-width: 1024px;
  max-width: 1440px;
  margin: 0 auto;*/
  padding: 0px !important;
  display: block;
  clear: both;
}
.el-footer{
  padding: 80px 0 0 0 !important;
  /*background: url('http://scimg.dameigong.cn/b/20181028/20181028185411_21103.jpg');*/
 /* background-color: #000;*/
}
</style>
