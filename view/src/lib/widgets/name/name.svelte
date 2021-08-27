<script lang="typescript">
    export let data = {
        name: "null",
        p6: "Good night",
        a6: "Good morning",
        a12: "Good evening"
    }
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saterday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let time = new Date();
    setInterval(()=>{
        time = new Date();
    },1000)
</script>
<h2>{ time.getHours() >= 18?  data.p6 : time.getHours() >= 12? data.a12 :  time.getHours()>= 6? data.a6 : time.getHours() >= 0 &&  data.p6 } { data.name }.<br> Today is { weekdays[ time.getDay() ] } the { time.getDate() }th, { months[time.getMonth()] } { time.getFullYear() }.</h2>
<style lang="scss">
    h2 {
        color: white;
        text-align: center;
    }
</style>