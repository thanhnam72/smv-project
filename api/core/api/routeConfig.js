const route = require('../common/routeApi').route;
const fs = require('fs');
const dicController = process.cwd() + '/libs/controllers/';

module.exports = function (app)
{
    fs.readdirSync(dicController).forEach(file => {
        const name = file.split('.')[0];
        const index = name.indexOf('Controller');
        if(index >= 0) {
            const nameController = name.substr(0, index);    
            const controller = require(process.cwd() + '/libs/controllers/' + name);
            var routeController = route + "/" + nameController;
            if(nameController === 'oauth') {
                routeController = '/oauth';
            }
            app.use(routeController, controller);
        }
    })
}
