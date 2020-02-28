import React from 'react';
import SWCard from './SWCard';

const SWCardList = ({ swChar }) => {
	return (
		<div>
			{
				swChar.map((user, i) => {
					return <SWCard 
						id={i} 
						name={swChar[i].name} 
						height={swChar[i].height}
						mass={swChar[i].mass}
					/>
				})
			}
		</div>
	);
}

export default SWCardList;