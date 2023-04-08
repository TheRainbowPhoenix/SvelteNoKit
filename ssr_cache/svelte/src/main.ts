import './app.css'
import App from './App.svelte'

import store from './lib/store'

const routes = {
  index: import('./routes/Index.svelte'),
  items: import('./routes/Items.svelte'),
}

const contexts = {
	index: {
		name: "Static",
		count: 5
	}
}

let env = "env"
if (import.meta.env.DEV) env+= " dev"
if (import.meta.env.PROD) env+= " prod"
if (import.meta.env.SSR) env+= " ssr"
if (import.meta.env.MODE) env+= ` mode:${import.meta.env.MODE}`


const resolve = name => routes[name.toLowerCase()]

const setup = ({ el, App, props }) => {
    new App({ target: el, props })
}

// buildHydrator

let initialPage = routes['index']

const el = document.querySelector("#app")
let head = []
const resolveComponent = name => Promise.resolve(resolve(name))

// const app = await resolveComponent(initialPage.component).then(initialComponent => {
//     return setup({
//       el,
//       App,
//       props: {
//         initialComponent,
//         resolveComponent,
//       },
//     })
//   })

const app = new App({
	target: el,
	hydrate: true,
	props: {
		routes: routes,
		resolveComponent: resolveComponent
	}
})

// app = new App({
// 	target: document.querySelector("#app"),
// 	hydrate: true,
// 	props: window.context || {
// 		name: 'app_main',
// 		count: 0,
// 		env: env,
// 	}
// });
