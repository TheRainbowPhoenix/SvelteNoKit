<script lang="ts">
    import { inertia, router, Link, page } from '@inertiajs/svelte'

    import viteLogo from '../assets/vite.svg'
    import svelteLogo from '../assets/svelte.svg'
    import fastApiLogo from '../assets/fastapi.svg'
    import inertiaLogo from '../assets/inertia.png'
    import Counter from "../lib/Counter.svelte";
    import {onMount} from "svelte";

    const img_width = 100;

    export let name: string = 'Vite + Svelte';
    export let count: number = 1;

    $: errors = $page?.props?.errors;
    $: flash = $page?.props?.flash;

    onMount(async () => {
        console.log(page)
    })

</script>

<div class="content">
  <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} width={img_width} height={img_width} class="logo" alt="Vite Logo" />
    </a>
  <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
      <img src={fastApiLogo} width={img_width} height={img_width} class="logo" alt="FastApi Logo" />
    </a>
  <a href="https://inertiajs.com" target="_blank" rel="noreferrer">
      <img src={inertiaLogo} width={img_width} height={img_width} class="logo" alt="Inertia Logo" />
    </a>
  <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} width={img_width} height={img_width} class="logo" alt="Svelte Logo" />
    </a>

  <h1 class="title">Welcome to your app, hydrated by "{name}".</h1>
    <Counter {count}/>
    <div>
        <a use:inertia href="/in/items">My Stonks</a>
    </div>

</div>

<style>
.content { width: 75%; margin: auto; text-align: center; font-family: Georgia, Cambria;}
</style>
