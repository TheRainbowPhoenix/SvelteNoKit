import { writable } from 'svelte/store'

const store = writable({
  component: null,
  layout: [],
  props: {},
  name: '',
  key: null,
})

export default store
