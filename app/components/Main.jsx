import React from 'react';
import Navigation from 'Navigation';

var Main = (props) => {
	return (
		<div>
			<div>
				<div>
					<Navigation/>
					<p>Main.jsx redered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;
