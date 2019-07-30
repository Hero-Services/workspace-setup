const figlet = require('figlet');

module.exports = {
    write_figlet
}

async function write_figlet(text) {
    let data = figlet.text(text, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        kerning: 'fitted'
    }, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
}
