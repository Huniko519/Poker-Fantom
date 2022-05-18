import React from 'react';

const Spinner = props => {
	return(
		<div className="x-spinner-container">
			<div className='spinner-container' >
				<img src={'/assets/loading.png'} alt="Loading..."/>
			</div>
		</div>
	)
}

export default Spinner;