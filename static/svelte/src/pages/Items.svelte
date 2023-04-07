<script lang="ts">
    import inertiaLogo from '../assets/inertia.png'

    const img_width = 100;

    export let name: string = 'default_items';
    export let items: string[] = [];
</script>

<div class="content">
  <a href="https://inertiajs.com" target="_blank" rel="noreferrer">
      <img src={inertiaLogo} width={img_width} height={img_width} class="logo" alt="Inertia Logo" />
    </a>
    <h1>{name}</h1>
    <ul>
        {#each items as item}
            <li>{item}</li>
        {/each}
    </ul>


</div>

<style>
</style>
