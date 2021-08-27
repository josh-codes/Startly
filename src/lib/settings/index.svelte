<script lang="ts">
    import Clock from "./settings/clock.svelte";
    import Name from "./settings/name.svelte";
    import Background from "./settings/background.svelte";
    import { settings } from "../store";
    let name:any;
    let bg:string;
    settings.subscribe((data:any)=>{
        try {
            name = data.name;
            bg = data.bg.url
        } catch (error) {
            console.error("app crashed, restarting...")
        }
    })
    const nameupdate = (e:any) => {
        settings.update((data:any) => {
            switch (e.detail[1]) {
                case 0: {
                    data.name.name = e.detail[0];
                    break;
                }
                case 1: {
                    data.name.p6 = e.detail[0];
                    break;
                }
                case 2: {
                    data.name.p12 = e.detail[0];
                    break;
                }
                case 3: {
                    data.name.a6 = e.detail[0];
                    break;
                }
            }
        
            return data;
        });
    }
    const bgupdate = (e:any) => {
        settings.update((data:any) => {
            data.bg.url = e.detail;
            return data;
        })
    }
</script>
<Clock/>
<Name on:update={ nameupdate } json={ name }/>
<Background on:update={ bgupdate } value={ bg }/>