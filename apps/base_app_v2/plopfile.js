module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('state', {
        description: 'create a new state item (action/reducer/types)',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'input the name of the item: '
        }],
        actions: [{
            type: 'addMany',
            destination: 'src/store/{{lowerCase name}}',
            base: 'plop-templates/store_items',
            templateFiles: 'plop-templates/store_items/*.ts',
            globOptions: { extensions: '.js'}
        }]
    });

    plop.setGenerator('middleware', {
        description: 'create a new middleware',
        prompts: [{
            type: 'input',
            name: 'name',
            description: 'input the name of the middleware: '
        }],
        actions: [{
            type: 'add',
            path: 'src/store/middlewares/{{lowerCase name}}.ts',
            templateFile: 'plop-templates/middlewares/middleware.hbs'
        }]
    })
};