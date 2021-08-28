<script lang="ts">
    import App from "./../lib/app.svelte"
    import { settings } from "./../lib/store"
    import { onMount } from "svelte";
    $: url = "/fallback.jpeg";
    onMount(async ()=>{
        try {
            if (window.navigator.onLine) {
                settings.subscribe((value:any)=>{
                    if (!value.bg.hook) {
                        value.bg = {
                            hook: 1,
                            url: "https://source.unsplash.com/user/nullifiedjosh/likes/2560×1440"
                        }
                    }
                    url = value.bg.url;
                })
            }
            
        } catch {
            url = "/fallback.jpeg";
        }
	});
</script>
<div>
    <div class="bg" style="background: url({ url }) no-repeat;"></div>
    <App/>
</div>
<style lang="scss">
    div {
        width: 100%;
        height: 100%;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        overflow: hidden;
        background: black;
    }
    .bg {
        transform: scale(1.1);
        opacity: 0.9;
        margin: 0;
        position: absolute;
        filter: blur(5px);
        background: url("/fallback.jpeg");
        background-position: center !important;
        background-size: cover !important;
    }
</style>