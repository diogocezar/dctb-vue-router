<template>
	<div class="git">
		<h1>Lista de Repositórios</h1>
		<ul v-for="item in items">
			<li class="item-in">
				<span class="name">{{ item.name }}</span> -
				<span class="description">{{ item.description }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'git',
	data () {
		return{
			items : null
		}
	},
	created: function () {
    	this.fetchData();
  	},
	methods: {
    	fetchData: function () {
    		var url  = "https://api.github.com/users/diogocezar/repos?sort=updated";
    		var self = this;

			fetch(url)
				.then(response => response.json())
				.then(result => {
					self.items = result;
				})
				.catch(err => {
					console.error('Failed retrieving information', err);
				});
    	}
  	}
}
</script>

<style scoped>
</style>