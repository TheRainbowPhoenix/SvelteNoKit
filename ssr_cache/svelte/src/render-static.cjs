// https://svelte.dev/docs#Server-side_component_API
require('svelte/register');
const fs = require("fs")
const tidy = require('htmltidy2').tidy

const tidyOpts = {
	indent: true,
	wrap: 0
}

const App = require('./App.svelte').default;

const ctx = {
	name: "Static",
	count: 5
}

const { head, html, css } = App.render({
	...ctx,
	env: "ssr-cache"
});

const renderedPage = `
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Link to a stylesheet, or include an inline <style> section here -->
		<link href="/cache/style.css" rel="stylesheet" />
		
		${head}

		<style>
			${css.code}
		</style>

		<!-- mobile debug -->
		<script src="//cdn.jsdelivr.net/npm/eruda"></script>
		<script>eruda.init();</script>
	</head>
	<body>
		<!-- If you want to start with a non-empty document, add elements here -->
		<!-- Relative links are rewritten to refer to the files in the static directory -->
		<div id="app">
			${html}
		</div>
		<script defer src='/cache/main.js'></script>
		<script>window.context = {...${JSON.stringify(ctx)}, {{ hydrated|safe | default("...{}", true) }} }</script>;
	</body>
</html>
`

fs.writeFileSync('../index.html', renderedPage, 'utf8')

/*
tidy(renderedPage, tidyOpts, function(err, result) {
	fs.writeFileSync('./index.html', result, 'utf8')
})

*/
