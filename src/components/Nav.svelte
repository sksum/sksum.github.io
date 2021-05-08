<script>
	export let segment;

</script>

<style>
	nav {
		box-shadow: var(--shadow-sm);
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
	}
	.selected {
		color: var(--primary, #EDF5E1);
	}
	a {
		text-decoration: none;
		padding: 1rem;
		font-size: 1.2rem;
	}
	.title{
		font-weight: bold;
		color: var(--primary, #EDF5E1);
	}
	@media(max-width: 576px ){
		.title {display: none;}
	}
</style>

<nav>
	<a class='{segment === undefined ? "selected" : ""} title' href='.'>sksum</a>
	<a rel=prefetch class='{segment === "portfolio" ? "selected" : ""}' href='portfolio'>portfolio</a>
	<a rel=prefetch class='{segment === "resume" ? "selected" : ""}' href='resume'>resume</a>
	<a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
</nav>
<!-- <hr /> -->