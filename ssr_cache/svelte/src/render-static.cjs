// https://svelte.dev/docs#Server-side_component_API
require('svelte/register');
const fs = require("fs")
const tidy = require('htmltidy2').tidy

const tidyOpts = {
	indent: true,
	wrap: 0
}

const routes = {
  index: require('./routes/Index.svelte').default,
  items: require('./routes/Items.svelte').default,
}

const contexts = {
	index: {
		name: "Static",
		count: 5
	}
}

console.log(" [ Generating SSR Templates ]")

for (let route of Object.keys(routes)) {
	let ctx = contexts[route] || {}
	const App = routes[route]

	console.log(`▶ ${route} \t(${JSON.stringify(ctx)})`)
	console.log(`  └─ ${route}.html`)

	const { head, html, css } = App.render({
		...ctx,
		env: "ssr-cache"
	});

	const renderedPage = `
	{% extends 'base.jinja2' %}
	
	{% block head %}
		${head}
	{% endblock %}
	
	{% block style %}
		${css.code}
	{% endblock %}
	
	{% block body %}
		${html}
	{% endblock %}
	
	{% block context %}
		<script>window.context = {...${JSON.stringify(ctx)}, {{ hydrated|safe | default("...{}", true) }} }</script>
	{% endblock %}
	`

	fs.writeFileSync(`../${route}.html`, renderedPage, 'utf8')

}