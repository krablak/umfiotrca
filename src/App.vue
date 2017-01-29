<template>
  <div id="app">   
    <div class="big-row"> 
      <generated-title :value="title" />
    </div>
    <div class="big-row">
      <hashtags :values="hashtags" />
    </div>
    <div class="big-row">
      <generate-button action="generate" />
    </div>
    <about/>  
  </div>
</template>

<script>
import HashTags from './components/HashTags'
import GeneratedTitle from './components/GeneratedTitle'
import GenerateButton from './components/GenerateButton'
import About from './components/About'

export default {
  name: 'app',
  props: [],
  components: {
    'hashtags': HashTags,
    'generated-title': GeneratedTitle,
    'generate-button': GenerateButton,
    'about': About
  },
  computed: {
    title: function () {
      return this.$store.state.title
    },
    hashtags: function () {
      return this.$store.state.hashTags
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.big-row {
  padding: 20px; 
}
</style>
