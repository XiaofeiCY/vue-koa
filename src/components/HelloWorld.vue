<template>
  <div class="hello">
    <button @click="getMsg">点击事件</button>
    <p>
      {{json}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    json () {
      return this.$store.state.json
    }
  },
  methods: {
    getMsg () {
      this.msg = 'aaaaaaaaaaaaa'
      this.$store.dispatch('getJsons')
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
</style>
