import React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Nav extends React.Component{
	render(){
		return(
			<div className="nav">
				<AnchorLink href='#home'>
					<img src="/img/home.png" alt="icone home"/>
					Home
				</AnchorLink>
				
				<AnchorLink href='#photos'>
					<img src="/img/map.png" alt="icone home"/>
					Mapa
				</AnchorLink>

				<AnchorLink href='#contact'>
					<img src="/img/plus.png" alt="icone home"/>
					Detalhes
				</AnchorLink>
				
				<AnchorLink href='#information'>
					<img src="/img/phone.png" alt="icone home"/>
					Contato
				</AnchorLink>
			</div>
		)
	}
}