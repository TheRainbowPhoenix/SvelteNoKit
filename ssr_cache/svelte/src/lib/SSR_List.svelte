<script lang="ts">
    export let name;
    export let index = "item";
    export let values = [];
    export let env = "default";

    let item;
</script>


{#if env === "ssr-cache"}
    {@html `{% for ${index} in ${name} %}`}
        <slot item={`{{ ${index} }}`}/>
    {@html `{% endfor %}`}
{:else }
    {#each values as item}
        <slot item={item}/>
    {/each}
{/if}