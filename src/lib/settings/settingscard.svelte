<script lang="typescript">
    import { fly } from 'svelte/transition';
    export let title:string;
    export let desc:string;
</script>
<div class="par" transition:fly|local="{{ x: -40 }}">
    <h2>{ title }</h2>
    <p>{ desc }</p>
    <slot></slot>
</div>
<style lang="scss">
    .par {
        transition: all 0.2s;
        width: calc(100% - 30px);
        padding: 10px;
        margin: 5px;
        border-radius: 10px;
        color: black;
        z-index: 100;
        background: white;
    }
</style>