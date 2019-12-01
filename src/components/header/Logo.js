import React from 'react'

export default class Logo extends React.Component{
	render(){
		return(
			<div className="logo">
				<picture>
					<source media="(max-width: 768px)" srcSet="/img/logo-small.png" />
					<source media="(min-width: 769px)" srcSet="/img/logo-large.png" />
					<img src="/img/logo-large.png" alt="Logo do Site"/>
				</picture>
			</div>
		)
	}
}