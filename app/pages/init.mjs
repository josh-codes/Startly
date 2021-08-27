
			import { start } from "./../appdata/start-4b5b042e.js";
			start({
				target: document.querySelector("body"),
				paths: {"base":"","assets":""},
				session: {},
				host: location.host,
				route: true,
				spa: false,
				trailing_slash: "never",
				hydrate: {
					status: 200,
					error: null,
					nodes: [
						import("./../appdata/layout.svelte-6bb8fb81.js"),
						import("./../appdata/pages/index.svelte-897d0fa0.js")
					],
					page: {
						host: location.host, // TODO this is redundant
						path: "/",
						query: new URLSearchParams(""),
						params: {}
					}
				}
			});
		