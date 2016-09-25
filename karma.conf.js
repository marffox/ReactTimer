var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: ['app/tests/**/*.test.jsx'],
		preprocessors:{
			'app/tests/**/*.test.jsx':['webpack', 'sourcemap']//preprocesadores que vamos a usar para cada uno de los ficheros de test que tenemos en la carpeta tests.
		},
		reporters: ['mocha'],//es lo que me muestra que tests pasan y que test fallan
		//More details:
		client: {
			mocha: {
				timeout: '5000'//tiempo tras el cual si el test no ha terminado, detiene el test y retorna fallido
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
}
