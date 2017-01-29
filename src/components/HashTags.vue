<template>
  <div>
    <span class="hashTag" v-for="tag in values">{{ tag }} </span>
  </div>
</template>

<script>
export default {
  name: 'hashtags',
  props: ['values']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hashTag {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
