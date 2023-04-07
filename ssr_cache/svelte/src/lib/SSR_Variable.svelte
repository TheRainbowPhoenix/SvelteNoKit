<script lang="ts">
    export let name;
    export let value;
    export let env = "default";
</script>



{#if env == "ssr-cache"}
    {@html `{{ ${name} | default(${
        JSON.stringify(value)
    }, true)}}`}
{:else }
    {value}
{/if}