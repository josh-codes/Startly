<script lang="typescript">
    import Settings from "./settings/index.svelte"
    import { fly } from 'svelte/transition';
    let visible = false;
    const openmenu = () => {
        visible = true;
    }
    const closemenu = () => {
        visible = false;
    }
</script>
<div class="par">
    {#if visible}
    <div class="bgset" transition:fly|local="{{ x: -40 }}"></div>
    <div class="settings">
        <button on:click={ closemenu } class="close" transition:fly|local="{{ x: -40 }}">
            <!--MDI ICONS <3 -->
            <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                <path fill="black" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </button>
        <h2 transition:fly|local="{{ x: -40 }}">Settings</h2>
        <Settings/>
    </div>
    {:else}
        <button on:click={ openmenu } class="open" transition:fly|local="{{ x: -40 }}">
            <!--MDI ICONS <3 -->
            <svg style="width:25px;height:25px; color: blue;" viewBox="0 0 24 24">
                <path fill="black" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
        </button>
    {/if}
</div>
<style lang="scss">
    button {
        border: none;
        outline: none;
        overflow: hidden;
        border-radius: 10px;
        width: 40px;
        height: 40px;
        display: inline-grid;
        place-items: center;
        cursor: pointer;
        transition: all 0.2s;
        background: transparent;
        & path{
            fill: white;
            transition: all 0.2s;
        }
        &:hover{
            opacity: 0.75;
            background: #ddd;
            & path{
                fill: black;
            }
        }
        &:active{
            background: white;
            opacity: 1;
            & path{
                fill: black;
            }
        }
    }
    h2 {
        color: white;
        text-align: center;
        position: absolute;
        left: 30px;
        width: 240px;
        height: 40px;
        margin: 0;
        display: inline-grid;
        place-items: center;
    }
    .bgset {
        z-index: 0;
        width: 300px;
        height: 100vh; 
        position: absolute;
        opacity: 0.5;
        background: black;
        border-radius: 0 0 10px 10px;
    }
    .settings {
        z-index: 20;
        display: inline-block;
        position: absolute;
        width: 300px;
        height: 100%;
    }
    .open {
        position: absolute;
        display: inline-block;
    }
    .par {
        position: absolute;
        width: 300px;
        height: 100%;
        z-index: 20 !important;
    }

</style>