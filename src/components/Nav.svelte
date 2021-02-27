<script>
	export let segment;

	import { onMount } from "svelte";
  
  let ParticlesComponent;

  onMount(async () => {
	const module = await import("svelte-particles");

	ParticlesComponent = module.default;
	ParticlesComponent.style = {position:'absolute'};
});

let particlesConfig = {
	particles: {
		color: {
			value: "#3cb371",
		},
	  links: {
		  enable: true,
		  color: "#ff0",
	  },
	  move: {
		  enable: true,
	  },
	},
  };
  
  let onParticlesLoaded = (event) => {
	  const particlesContainer = event.detail.particles;
	  document.getElementById("tsparticles").style.position = "absolute";
	  document.getElementById("tsparticles").style.width = "100%";
	  document.getElementById("tsparticles").style.height = "100%";

	// you can use particlesContainer to call all the Container class
	// (from the core library) methods like play, pause, refresh, start, stop
  };
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
		color: var(--primary, mediumseagreen);
	}
	a {
		text-decoration: none;
		padding: 1em;
	}
	.title{
		font-weight: bold;
		color: var(--primary, mediumseagreen);
		margin: 0 2rem;
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
  <svelte:component
	this="{ParticlesComponent}"
	id="tsparticles"
	options="{particlesConfig}"
	on:particlesLoaded="{onParticlesLoaded}"
  />