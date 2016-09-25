import React from 'react';

var CountdownForm = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;

		if (strSeconds.match(/^[0-9]*$/)) {//* significa que el usuario puede meter esos caracteres las veces que quiera. ^ y $ indican que empiezan y terminan con lo que contiene entre ellos, es decir:
		// /^A/	tiene que empezar por A, en nustro caso tiene que empezar por un numero entre el 0 y el 9 y terminar con un numero entre 0 y 9
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));//el 10 es la base numerica
		}
	},
	render() {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
					<button className="button expanded">Start</button>
				</form>
			</div>
		);
	}
});

module.exports = CountdownForm;
