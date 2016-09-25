import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Clock from 'Clock';

describe('Clock', () => {
	it('Var Clock Should exist', () => {
		expect(Clock).toExist();
	});

	describe('render', () => {
		it('should render clock to output', () => {
			var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
			var $el = $(ReactDOM.findDOMNode(clock));//buscamos en el DOM el elemento clock y lo asignamos al jquery secletor
			var actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});
	});

	describe('formatSeconds', () => {
		it('Should format seconds', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);//llamamos al componente Clock
			var seconds = 615;
			var expected = '10:15';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
		it('Should format seconds when min/sec are less than 10', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);//llamamos al componente Clock
			var seconds = 61;
			var expected = '01:01';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});
});
