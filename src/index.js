import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './components/App'

ReactDOM.render(
	<App/>,
	//tudo que for renderizado no sistema
	//será renderizado dentro o objeto com id #root
	document.getElementById("root")
)