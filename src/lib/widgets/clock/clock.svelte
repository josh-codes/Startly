<script lang="ts">
    import { onMount } from 'svelte';
    let date = new Date();
    $: min = date.getMinutes();
    $: hr = date.getHours();
    $: sec = date.getSeconds();
    onMount(()=>{
        setInterval(()=>{
            date = new Date();
        },1000)
    })
</script>
<div class="par">
    <h1>{ hr }:{ min < 10 ? "0"+min : min }</h1>
    <h2>{ sec }</h2>
</div>  
<style lang="scss">
    .par {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;
        width: 320px;
    }
    h1 {
        display: inline-block;
        text-align: center;
        margin: 0;
        font-size: 100px;
        color: #fff;
    }
    h2 {
        text-align: center;
        color: #fff;
        height: 100%;
        display: inline-block;
        font-weight: 500;
        margin: 0;
        font-size: 50px;
    }
</style>