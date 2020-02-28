import React from 'react';

const Toggle = ({searchSwitch}) => {
	return (
		<div>
			<p class="toggle">Robots</p>
			<label class="switch">
				<input 
					type="checkbox" 
					onChange={searchSwitch} />
				<span class="slider"></span>
			</label> 
			<p class="toggle">Star Wars</p>
		</div>
	)
}

export default Toggle;