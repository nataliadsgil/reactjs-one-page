import React from 'react'

export default class Price extends React.Component{
	render(){
		return(
			<div className="price">
				<ul>
					<li>
						<label>Aluguel: </label>
						<strong>R$ 670,00</strong>
					</li>

					<li>
						<label>Condomínio: </label>
						<strong>R$ 200,00</strong>
					</li>

					<li>
						<label>Total: </label>
						<strong>R$ 870,00</strong>
					</li>
				</ul>

				<button>Agendar Visita</button>
			</div>
		)
	}
}