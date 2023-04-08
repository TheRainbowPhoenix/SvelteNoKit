
<script>
	import SSR_Variable from "../lib/SSR_Variable.svelte";
	import SSR_List from "../lib/SSR_List.svelte";
	// import {goTo} from "../lib/route";

	export let name = "default";
	export let items = [];

	export let env = "svelte"

	async function handle_intant_nav_click() {
		let { get_data_back } = await import("../lib/route")
		 await get_data_back("/ssr/");
	}

</script>

<main>
	<p>ENV: {env}</p>
	<h1><SSR_Variable bind:value={name} name="name" bind:env /></h1>
	<ul>
		<SSR_List bind:values={items} name="items" bind:env let:item={list_item}>
			<li>{list_item}</li>
		</SSR_List>
	</ul>
	<div>
		<a href="/ssr/">Back to SSR</a>
	</div>
	<div>
		<button on:click={handle_intant_nav_click}>Instant SSR Navigation</button>
	</div>
</main>

<style>
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	li {
		padding: 0.5em 1em;
		border-radius: 0.25em;
		background: rgba(0,0,0,0.1);
		margin: 0.25em 0;
	}

	main {
		text-align: center;
		padding: 1em;
		width: fit-content;
		margin: 0 auto;
		min-width: 350px;
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
