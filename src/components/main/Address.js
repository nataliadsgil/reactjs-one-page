import React from 'react'

export default class Address extends React.Component{
	render(){
		return(
			<div className="address">
				<img src="/img/location.png" />
				<p>Rua Dom Pedro I, São Paulo - SP</p>
				<button>Agendar Visita</button>
			</div>
		)
	}
}