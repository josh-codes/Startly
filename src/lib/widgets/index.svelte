<script lang="ts">
    import Clock from "./clock/clock.svelte";
    import Name from "./name/name.svelte"
    import { settings } from "../store"
    let name:any;
    settings.subscribe((data:any)=>{
        try {
            name = data.name;
        } catch (error) {
            console.error("app crashed, restarting...")
        }
    })
</script>
<div class="widgets">
    <Clock/>
    <Name data={ name }/>
</div>
<style lang="scss">
    .widgets {
        display: grid;
        place-items: center;
    }
</style>