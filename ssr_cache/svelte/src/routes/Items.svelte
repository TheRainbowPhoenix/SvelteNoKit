
<script>
	import SSR_Variable from "../lib/SSR_Variable.svelte";
	import SSR_List from "../lib/SSR_List.svelte";

	export let name = "default";
	export let items = [];

	export let env = "svelte"

	async function get_data_back() {
		try {
			const response = await fetch("/ssr/", {
				headers: {
					"X-Headless": "true"
				}
			});

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
		console.log("TODO: swap components and router")
	}
</script>

<main>
	<p>ENV: {env}</p>
	<h1>Items <SSR_Variable bind:value={name} name="name" bind:env />!</h1>
	<ul>
		<SSR_List bind:values={items} name="items" bind:env let:item={list_item}>
			<li>{list_item}</li>
		</SSR_List>
	</ul>
	<div>
		<a href="/ssr/">Back to SSR</a>
		<button on:click={async () => { await get_data_back() } }>Get data from SSR</button>
	</div>
</main>

<style>
	ul {
		list-style: none;
	}

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
