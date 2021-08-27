<script lang="ts">
    import Settingscard from "../settingscard.svelte";
    import Textbox from "../../components/textbox.svelte";
    import { createEventDispatcher } from "svelte";
    export let value: string = "";
    const dispatch = createEventDispatcher()
    const event = (e:any) => {
        dispatch("update", e.detail)
    }
</script>
<Settingscard title="Background" desc="Enter an image URL.">
    <Textbox placeholder="Image URL" value={ value } on:input={ event }/>
</Settingscard>