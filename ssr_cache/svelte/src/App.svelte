<!--<script context="module">-->
<!--    const pages = import.meta.glob('./routes/*.svelte')-->
<!--    console.log(pages);-->
<!--</script>-->

<script>
    import {onMount} from "svelte";
    import {fade, fly} from 'svelte/transition';

    import store from './lib/store'

    import Render from "./lib/Render.svelte";
    import Index from "./routes/Index.svelte";
    import Items from "./routes/Items.svelte";
    import Item from "./routes/Item.svelte";

    export let routes = {}
    export let props = {}
    export let pages = {}
    export let initialPage, resolveComponent

    export let __component_name = "";

    let component

    onMount(async () => {
        __component_name = window.context.__component_name;

        $store.name = __component_name;


        let cmp = routes[__component_name?.toLowerCase() || ""]
        props = window.context;

        $store.props = props;

        if (cmp) {
            component = await cmp
        }
        console.log(cmp)
        console.log(component)

        // let r = await Object.keys(routes).map(async (r) => await resolveComponent(r));

        // console.log(r)
    })

    store.subscribe((state) => {
        console.log(state)
        if (state.name !== __component_name) {
            __component_name = state.name;
            props = state.props;
        }
    })

    $: cmp = __component_name?.toLowerCase() || ""
    // $: cmp_props = props[__component_name?.toLowerCase() || ""] || {}
</script>

<!--{#if component}-->
<!--    <Render component={__component_name} props={props}/>-->
<!--{/if}-->

{#if cmp !== ""}
    {#key cmp}
        <div in:fly="{{ x: -50, duration: 500 }}" out:fade={{duration: 200}} class="slide">
            {#if cmp === "index"}
                <Index {...props}/>
            {:else if cmp === "items"}
                <Items {...props}/>
            {:else if cmp === "item"}
                <Item {...props}/>
            {/if}
        </div>
    {/key}
{/if}


<!--{#each pages as page}-->
<!--    <p>{JSON.stringify(page)}</p>-->

<!--    <svelte:component this={page} {...props}>-->
<!--    </svelte:component>-->

<!--    <Render component={page} />-->
<!--{/each}-->

<!--{#if cmp }-->
<!--    <Render component={cmp} props={cmp_props} />-->
<!--{:else}-->
<!--    {#each Object.keys(routes) as r}-->
<!--        <Render component={routes[r]} props={props[r] || {} }/>-->
<!--    {/each}-->
<!--{/if}-->

<style>
    .slide {
        position: absolute;
        top: 0px;
        left: 0;
        width: 100%;
    }
</style>

