const axios = require('axios')
const { getMetadata } = require('page-metadata-parser')
const domino = require('domino')

const scrapeMetaData = async body => {
	const response = await axios
		.get(body.url)
		.then(result => result.data)
		.catch(e => console.log(e))

	const doc = domino.createWindow(response).document
	const metadata = getMetadata(doc, body.url)
	const poster = { ...body, ...metadata }
	return poster
}

module.exports = { scrapeMetaData }
