<template>
	<div id="app">
		<nav>
			<ul>
				<img src="./assets/logo.png">
				<li><router-link to="/">Página Principal</router-link></li>
				<li><router-link to="/contact">Contato</router-link></li>
				<li><router-link to="/products/1">Produto 1</router-link></li>
				<li><router-link to="/products/2">Produto 2</router-link></li>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
</style>