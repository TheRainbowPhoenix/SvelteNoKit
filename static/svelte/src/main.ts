import { createInertiaApp } from '@inertiajs/inertia-svelte'
import './app.css'

const routes = {
  index: import('./pages/Index.svelte'),
  items: import('./pages/Items.svelte')
}

createInertiaApp({
  resolve: name => routes[name.toLowerCase()],
  // resolve: name => {
  //   const pages = import.meta.glob('./pages/*.svelte')
  //   return pages[`./Pages/${name}.svelte`]
  // },
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})


// import './app.css'
// import App from './App.svelte'
//
// const app = new App({
//   target: document.getElementById('app'),
// })

// export default app
