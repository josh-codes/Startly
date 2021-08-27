<script lang="ts">
    import Settingscard from "../settingscard.svelte";
    import Textbox from "../../components/textbox.svelte";
    import Advanced from "../advanced.svelte";
    import { createEventDispatcher } from "svelte";
    export let json:any = {
        name: "DefaultUser",
        p6: "Good night",
        a12: "Good evening",
        a6: "Good morning"
    };
    const dispatch = createEventDispatcher()
    const event = (e:any, index:number) => {
        if (!e.detail) {
            return;
        }
        dispatch("update", [(e.detail), index])
    }
</script>
<Settingscard title="Name" desc="What's your name?">
    <Textbox placeholder="Name" value={ json.name } on:input={ (e)=>{event(e, 0)} }/>
    <Advanced title="Customize strings">
        <Textbox placeholder="Past 6:00am" value={ json.p6 } on:input={ (e)=>{event(e, 1)} }/>
        <Textbox placeholder="Past 12:00pm" value={ json.a12 } on:input={ (e)=>{event(e, 2)} }/>
        <Textbox placeholder="Past 6:00PM" value={ json.a6 }  on:input={ (e)=>{event(e, 3)} }/>
    </Advanced>
</Settingscard>