import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => 
<Layout>
	<section className="error-page">
		<div className="page-center">
			<span>
				404
			</span>
			<h3>
				It looks like something has gone wrong. Try again.
			</h3>
			<Link to="/" className="btn">home</Link>
		</div>
	</section>
</Layout>

export default NotFoundPage
