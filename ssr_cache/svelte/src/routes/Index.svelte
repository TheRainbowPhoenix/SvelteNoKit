
<script>
	import SSR_Variable from "../lib/SSR_Variable.svelte";
	export let name = "default";
	export let count = 1;

	export let env = "svelte"

	const subs = () => {
		count -= 1;
	}

	const add = () => {
		count += 1;
	}
</script>

<main>
	<p>ENV: {env}</p>
	<h1>Hello <SSR_Variable bind:value={name} name="name" bind:env />!</h1>
	<button on:click={subs}>-</button>
	<pre><SSR_Variable bind:value={count} name="count" bind:env /></pre>
	<button on:click={add}>+</button>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<div>
		<a href="/ssr/items">Go to Items !</a>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	button {
		padding: 2rem;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
