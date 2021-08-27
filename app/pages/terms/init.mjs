
			import { start } from "./../../appdata/start-4b5b042e.js";
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
						import("./../../appdata/layout.svelte-6bb8fb81.js"),
						import("./../../appdata/pages/terms.svelte-4c4733a1.js")
					],
					page: {
						host: location.host, // TODO this is redundant
						path: "/terms",
						query: new URLSearchParams(""),
						params: {}
					}
				}
			});
		