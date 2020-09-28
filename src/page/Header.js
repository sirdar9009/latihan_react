import React from 'react'
class Header extends React.Component{

	constructor(props){
		super(props)
		this.state={
			judul:"Belajar React di Hari Senin"
		}

	}

	render() {
		return(
			<div>
			<h1>{this.state.judul}</h1>
			</div>
			)
	}
}
export default Header;