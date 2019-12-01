import React from 'react'

import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery'


export default class Slides extends React.Component{
	render(){

		const images = [
			{
				original: "/img/photos/original/1.jpg",
				thumbnail: "/img/photos/thumb/1.jpg"
			},
			{
				original: "/img/photos/original/2.jpg",
				thumbnail: "/img/photos/thumb/2.jpg"
			},
			{
				original: "/img/photos/original/3.jpg",
				thumbnail: "/img/photos/thumb/3.jpg"
			},
			{
				original: "/img/photos/original/4.jpg",
				thumbnail: "/img/photos/thumb/1.jpg"
			},
			{
				original: "/img/photos/original/5.jpg",
				thumbnail: "/img/photos/thumb/1.jpg"
			},
			{
				original: "/img/photos/original/7.jpg",
				thumbnail: "/img/photos/thumb/1.jpg"
			}
		]

		return(
			<ImageGallery items={images} autoPlay={true} showThumbnails={false} />
		)
	}
}