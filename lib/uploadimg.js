const formdata = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch').default

async function uploadimg(file, filename_upload) {
    var form = new formdata()
    var file_buffer = fs.readFileSync(file)
    await form.append('apikey', 'brizaloka')
    await form.append('image', file_buffer, filename_upload)
    var res = await fetch('http://brizas-api.herokuapp.com/upload/image', {method: 'POST',body: form})
	var json = await res.json()
	return json
}

exports.uploadimg = uploadimg