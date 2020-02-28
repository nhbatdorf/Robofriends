import React from 'react';

const SWCard = ({ name, height, mass, id }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}test?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>Height: {height}</p>
				<p>Mass: {mass}</p>
			</div>
		</div>
	);
}

export default SWCard;