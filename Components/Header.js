import React from 'react'
import Link from 'next/link'

//const Header = (props) => {
const Header = () => {	
	return (
		<div className='h-16 px-5 bg-red-500 text-white flex items-center justify-between'>

			{/*<h2>{props.user}</h2>*/}
			<h2>Logo</h2>
			<div className='flex gap-8'>
				{/*<h4>About</h4>*/}
				{/*<h4>Career</h4>*/}
				{/*<h4>Blog</h4>*/}
				{/*<h4>Account</h4>*/}
				{/*<h4>{props.edit}</h4>*/}
				<Link href="/About">About</Link> 
            	<Link href="/Product">Product</Link> 
            	<Link href="/Courses">Courses</Link>  
			</div>
		
		</div>
		)
}

export default Header

