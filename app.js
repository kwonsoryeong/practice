var Hapi = require('hapi')  
var Vision = require('vision')  
var Handlebars = require('handlebars')

// create new server instance
var server = new Hapi.Server({
    host: 'localhost',
    port: 3000
})

server.register({  
    plugin: require('vision')
}).then(() => { 
    server.views({
        engines: {
            html: Handlebars
        },
        path: __dirname + '/views',
        layout: 'viewpage'
    });
     
    server.route({  
        method: 'GET',
        path: '/main',
        handler: {
            view: 'htmlpage'
        }
    });

    async function start() {
        await server.start();
        console.log('Server running at:', server.info.uri);
    };
    start();
});