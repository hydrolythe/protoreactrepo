const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withReactSvg = require('next-react-svg')
const path = require('path')

const reactSvgConfig = { include: path.join(__dirname, 'static') }

module.exports = withPlugins([
	[withTypescript],
	[withSass],
	[withCss],
	[withReactSvg, reactSvgConfig],
])
