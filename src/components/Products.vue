<template>
  <div class="products">
    <h1>Produto {{ id }}</h1>
    <h2>{{ subtitle }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et possimus facilis, voluptatem aliquam amet provident similique doloremque qui nobis rem, asperiores quis ab reiciendis ea dolore, praesentium cumque eveniet nemo!</p>
  </div>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      subtitle: 'Página de Produtos',
      id : this.$route.params.id
    }
  },
  watch: {
    '$route': 'changeId'
  },
  methods: {
    changeId(){
      this.$data.id = this.$route.params.id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
