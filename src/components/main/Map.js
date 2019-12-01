import React from 'react'

export default class Map extends React.Component{
	render(){
		return(
			<div className="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846.672061755627!2d-49.94688809201786!3d-22.227018513438487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd74f72b64bbf%3A0x574c4e5238b8958f!2sBosque%2C%20Mar%C3%ADlia%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1575218475422!5m2!1spt-BR!2sbr" allowfullscreen=""></iframe>
			</div>
		)
	}
}