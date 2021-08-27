<script lang="ts">
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()
    export let placeholder:string="", value:string="", type:string="", focus:boolean=false;
    $: phstyle = value != "" || focus;
    const input = (e:any) => {
        if (!e.target) {
            return;
        }
        value = e.target.value;
        dispatch("input", e.target.value)
    }
</script>
<div class:nulldiv={ phstyle } class="par">
    <p class:nulltb={ phstyle }>{ placeholder }</p>
    <input type={ type } on:focus={ ()=>{focus = true} } on:blur={ ()=>{focus = false} } on:input={ input } value={ value }/>
    
</div>
<style lang="scss">
    .par {
        height: 40px;
        width: calc(100% - 25px);   
        margin: 5px;
        border: solid;
        border-width: 5px;
        border-radius: 10px;
        overflow: hidden;
        border-color: #555;
    }
    input {
        height: calc(100% - 10px);
        outline: none;
        width: calc(100% - 10px);  
        border: none;
        padding: 5px;
        top: -40px; 
    }
    .nulldiv {
        border-color: #1d3557;
    }
    .nulltb {
        color: #1d3557;
        font-size: 15px;
        margin-top: -9.75px;
        margin-left: 7.5px; 
        
    }
    p {
        border-width: 2px 0 2px 0;
        border: solid;
        border-color: white;
        outline: none;
        background: white;
        margin-top: 9px;
        left: 30px; 
        font-size: 15px;
        color: #555;
        transition: all 0.2s;
        display: grid;
        place-items: center;
        position: absolute;
        margin-bottom: 0;
        margin-right: 0;
        pointer-events: none;
    }
</style>
