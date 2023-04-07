import './app.css'
import App from './App.svelte'


let app;

window.update = () => {
	app.$set({
		name: window.context?.name || 'update',
		count: window.context?.count || 1,
		env: window.context?.env || "browser",
	});
}

let env = "env"
if (import.meta.env.DEV) env+= " dev"
if (import.meta.env.PROD) env+= " prod"
if (import.meta.env.SSR) env+= " ssr"
if (import.meta.env.MODE) env+= ` mode:${import.meta.env.MODE}`


app = new App({
	target: document.querySelector("#app"),
	hydrate: true,
	props: window.context || {
		name: 'app_main',
		count: 0,
		env: env,
	}
});

export default app;