<script lang="ts">
    import Widgets from "./widgets/index.svelte"
    import Settings from "./settings.svelte"
</script>
<div class="par">
    <Settings/>
    <div class="center">
        <div class="widgets">
            <Widgets/>
        </div>
    </div>
</div>
<style lang="scss">
    .par {
        font-family: 'Roboto', sans-serif;
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .center{
        z-index: 1;
        width: 100%;
        height: 100%;
        margin: 0;
        display: grid;
        place-items: center;
        position: absolute;
    }
</style>