<script lang="ts">
    export let name;
    export let values = [];
    export let env = "default";

    let item;
</script>


{#if env === "ssr-cache"}
    {@html `{% for item in ${name} %}`}
        <slot item={`{{ item }}`}/>
    {@html `{% endfor %}`}
{:else }
    {#each values as item}
        <slot item={item}/>
    {/each}
{/if}