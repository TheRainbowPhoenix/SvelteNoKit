<script lang="ts">
    export let name;
    export let value;
    export let env = "default";
</script>



{#if env === "ssr-cache"}
    {@html `{{ ${name} }}`}
{:else }
    {value}
{/if}