<template>
    <button class="big-button" v-on:click="generate">Generate Another Bullshit</button>
</template>

<script>
export default {
  name: 'generate-button',
  props: ['title', 'action'],
  methods: {
    generate: function (e) {
        this.$store.commit(this.action)
    }
  }
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

.big-button {
    font-weight: bold;
    font-size: 2rem;
    background-color: #42b983; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}

</style>
