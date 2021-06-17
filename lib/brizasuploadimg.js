const formdata = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch').default
var form = new formdata()

async function uploadimage(file, filename_upload) {
    var file_buffer = fs.readFileSync(file)
    form.append('apikey', 'brizaloka')
    form.append('image', file_buffer, filename_upload)
    fetch('http://brizas-api.herokuapp.com/upload/image', {
        method: 'POST',
        body: form
    }).then(async (err, res) => {
        if(err) return err
        
    })
}

exports.uploadimage = uploadimage
