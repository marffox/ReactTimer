import expect from 'expect';

/*it('Should properly run tests', () => {//dos parametros, descripcion de lo que el test deberia de hacer y el test en cuestion
	expect(1).toBe(1);
});*/

//describe() es una visual function y lo que hace es dar formato al output para que sea mas entendible. Con esto, pordemos dividir los test en grupos, dandoles nombre siendo asi mas entendible y organizado. Dos parametros, el nombre del grupo de tests y los tests a realizar
describe('App', () => {
	it('Should properly run tests', () => {
		expect(1).toBe(1);
	});
});
