import React from 'react'

export default class ButtonMob extends React.Component{
	
	constructor() {
	  super();
	
	  this.state = {
	  	displayNav: 'flex'
	  };
	}

	/*Função para abrir/fechar menu(toggle)*/
	clickMe(){
		if(this.state.displayNav === 'flex'){
			this.setState({
				displayNav: 'none'
			})
		}
		else{
			this.setState({
				displayNav: 'flex'
			})
		}

		document.querySelector('.nav').style.display = this.state.displayNav
	}

	render(){
		return(
			<div className="buttonMob" onClick={this.clickMe.bind(this)}>
				<img src="/img/menu.png" alt="Menu Mobile"/>
			</div>
		)
	}
}