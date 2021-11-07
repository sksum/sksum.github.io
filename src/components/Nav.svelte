<script>
	export let segment;
	import { scrollto } from "svelte-scrollto";
</script>

<nav>
	<a class={segment === undefined ? "selected" : ""} href="/"> sksum </a>
	<a use:scrollto={"#portfolio"} href="/"> portfolio </a>
	<!-- <a use:scrollto={"#blog"} href="/"> blog </a> -->
</nav>

<!-- <hr /> -->
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
		color: var(--primary, #000080);
	}
	a {
		text-decoration: none;
		padding: 1rem;
		font-size: 1.2rem;
	}
	.title {
		font-weight: bold;
		color: var(--primary, #000080);
	}
	@media (max-width: 576px) {
		.title {
			display: none;
		}
	}
</style>
