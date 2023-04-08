<script>
  export let component
  export let props = {}
  export let children = []
</script>

{#if component}
  <svelte:component this={component} {...props}>
    <!--{#each children as child, index (component && component.length === index ? $store.key : null)}-->
    <!--  <svelte:self {...child} />-->
    <!--{/each}-->
  </svelte:component>
{/if}