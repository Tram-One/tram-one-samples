const fs = require('fs')
const ghpages = require('gh-pages')
const chalk = require('chalk')

// mapping of files to their template
// usually source as index.js
const sourceMappings = [
	{ 'branch': 'introduction-example-one', './src/introduction-example-one.js': './template/index.js' },
	{ 'branch': 'introduction-example-two', './src/introduction-example-two.js': './template/index.js' },
	{ 'branch': 'introduction-example-three', './src/introduction-example-three.js': './template/index.js' },
	{ 'branch': 'registerhtml-example-two', './src/registerhtml-example-two.js': './template/index.js', './src/custom-header.js': './template/custom-header.js' },
	{ 'branch': 'registersvg-example-one', './src/registersvg-example-one.js': './template/index.js' },
	{ 'branch': 'start-example-one', './src/start-example-one.js': './template/index.js' },
	{ 'branch': 'start-example-two', './src/start-example-two.js': './template/index.js' },
	{ 'branch': 'use-effect-example-one', './src/use-effect-example-one.js': './template/index.js' },
	{ 'branch': 'use-global-observable-example-one', './src/use-global-observable-example-one.js': './template/index.js' },
	{ 'branch': 'use-observable-example-one', './src/use-observable-example-one.js': './template/index.js' },
	{ 'branch': 'use-observable-example-two', './src/use-observable-example-two.js': './template/index.js' },
	{ 'branch': 'use-url-params-example-one', './src/use-url-params-example-one.js': './template/index.js' },
	{ 'branch': 'use-url-params-example-two', './src/use-url-params-example-two.js': './template/index.js' }
]

// build folder with template and source file mappings
const processAllMappings = async () => {
	for (const mapping of sourceMappings) {
		const { branch, ...fileMappings } = mapping

		// add all source files to template folder as their mapping
		const destinationFiles = []
		console.log(chalk.blue('copying files to template folder...'))
		for (const [source, destination] of Object.entries(fileMappings)) {
			console.log(chalk.blue('copying'), chalk.yellow((source), chalk.blue('to'), chalk.yellow(destination)))
			fs.copyFileSync(source, destination)
			destinationFiles.push(destination)
		}

		// publish template as branch
		console.log(chalk.blue('publishing'), chalk.green(branch), chalk.blue('...'))
		const publishPromise = new Promise((resolve, reject) => {
			ghpages.publish('./template', { branch }, (err) => {
				if (err) {
					console.error(err)
					return reject()
				}
				console.log(chalk.blue('published'), chalk.green(branch))
				resolve()
			})
		})

		await publishPromise

		// remove files
		console.log(chalk.blue('cleaning up files...'))
		for (const file of destinationFiles) {
			console.log(chalk.blue('cleaning up'), chalk.yellow(file))
			fs.unlinkSync(file)
		}

		console.log('\n')
	}
}

processAllMappings()
