
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

	async function handle_intant_nav_click() {
	let { get_data_back } = await import("../lib/route")
		 await get_data_back("/ssr/items");
	}
</script>

<main>
	<p>ENV: {env}</p>
	<h1>Hello <SSR_Variable bind:value={name} name="name" bind:env />!</h1>
	<button on:click={subs}>-</button>
	<pre><SSR_Variable bind:value={count} name="count" bind:env /></pre>
	<button on:click={add}>+</button>
	<p>This was served from FastAPI with count=<SSR_Variable value={count} name="count" bind:env /></p>

	<div>
		<a href="/ssr/items">Go to Items !</a>
	</div>
	<div>
		<button on:click={handle_intant_nav_click}>Instant SSR Navigation</button>
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
