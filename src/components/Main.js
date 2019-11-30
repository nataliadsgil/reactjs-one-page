import React from 'react'

import Slides from './main/Slides'
import Contact from './main/Contact'
import Map from './main/Map'
import Information from './main/Information'

export default class Main extends React.Component{
	render(){
		return(
			<div>
				<Slides/>
				<Contact/>
				<Map/>
				<Information/>
			</div>
		)
	}
}