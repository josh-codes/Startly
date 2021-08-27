export async function setup(data:any) {
    try {
        data.name.hook;
    } catch {
        data.name = {
            hook: 1,
            name: "USER",
            p6: "Good night",
            a12: "Good evening",
            a6: "Good morning"
        };
    }
    try {
        data.clock.hook
    } catch {
        data.clock = {
            hook: 1
        };
    }
    try {
        data.bg.hook
    } catch {
        data.bg = {
            hook: 1,
            url: "https://source.unsplash.com/user/nullifiedjosh/likes/2560×1440"
        };
    }
    return data;
}