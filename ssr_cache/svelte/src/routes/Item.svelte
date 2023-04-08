
<script>
	import SSR_Variable from "../lib/SSR_Variable.svelte";
	import SSR_List from "../lib/SSR_List.svelte";
	import Inline_Variable from "../lib/Inline_Variable.svelte";

	export let name = "item unknown";
	export let slug = "";
	export let details = {}

	export let env = "svelte"

	async function handle_intant_nav_click() {
		let {get_data_back} = await import("../lib/route")
		await get_data_back("/ssr/items/");
	}

</script>

<main>
	<p>ENV: {env}</p>
	<h1><SSR_Variable bind:value={name} name="name" bind:env /></h1>

	<div>
		<img src={"https://placehold.jp/3d4070/ffffff/250x250.png?text="+slug} width="250" height="250"/>
	</div>

	<h2>Description</h2>
	<p>
		<SSR_Variable value={details?.desc || ""} name="details.desc" bind:env />
	</p>

	<h2>Price</h2>
	<p>
		<SSR_Variable value={details?.price || ""} name="details.price" bind:env />
	</p>

	<h2>Tags</h2>
	<ul>
		<SSR_List values={details?.tags} name="tags" index="tag" bind:env let:item={tag_list} >
			<li>
				<Inline_Variable name="tag" value={tag_list} bind:env />
			</li>
		</SSR_List>
	</ul>

	<p><SSR_Variable value={JSON.stringify(details)} name="details" bind:env /></p>

	<div>
		<a href="/ssr/items/">Back to Items</a>
	</div>
	<div>
		<button on:click={handle_intant_nav_click}>Instant Back</button>
	</div>
</main>

<style>
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	li {
		padding: 0.5em 1em;
		border-radius: 0.25em;
		background: rgba(0,0,0,0.1);
		margin: 0.25em 0;
	}

	li:hover {
		cursor: pointer;
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
