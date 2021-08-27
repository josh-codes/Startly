<script lang="ts">
    import { fly } from 'svelte/transition';
    let open = false;
    export let title:string;
</script>
<div class="par">
    <button class:open={ open } on:click={ ()=>{open = !open} }>{ title }
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
        </svg>
    </button>
    {#if open}
    <div class="ani" transition:fly|local="{{ y: -40 }}">
        <slot></slot>
    </div>
    {/if}
</div>
<style lang="scss">
    .ani {
        color: white;
        transition: all 0.2s;
    }
    button {
        background: white;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 5px;
        display: flex;
        align-items: center;
        & svg {
            transform: rotate(0deg);
            transition: all 0.2s;
        }
        &:hover {
            background: #bbb;
        }
        &:hover {
            background: #888;
        }
        border: none;
        outline: none;
    }
    .open {
        & svg {
            transform: rotate(180deg);
        }
    }
</style>