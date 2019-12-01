import React from 'react'

import Slides from './main/Slides'
import Contact from './main/Contact'
import Map from './main/Map'
import Information from './main/Information'
import Address from './main/Address'
import Title from './main/Title'
import Price from './main/Price'
import Features from './main/Features'

export default class Main extends React.Component{
	render(){
		return(
			<div>
				<Slides/>
				<Title/>
				<Address/>
				<Information/>
				<Features/>
				<Map/>
			</div>
		)
	}
}