import React from 'react'

export default class Footer extends React.Component{
	render(){
		return(
			<div className="footer">
				<div className="logo-footer">
					<h3>Receba Novidades</h3>
					<input type="text" placeholder="Seu E-Mail"/>
					<button>Insrever-se</button>
				</div>

				<div className="menu-footer">
					<h3>Menu</h3>
					<ul>
						<li>Home</li>
						<li>Mapa</li>
						<li>Detalhes</li>
						<li>Contato</li>
					</ul>
				</div>

				<div className="contact-footer">
					<h3>Contato</h3>
					<ul>
						<li>(xx) xxxx-xxxx</li>
						<li>teste@email.com.br</li>
						<li>@meuperfil</li>
					</ul>
				</div>
			</div>
		)
	}
}