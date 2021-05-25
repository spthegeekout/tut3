import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
    	<section className="newsletter-page">
    		<div className="page-center">
    			<h2>
    				Sigh up for the latest news.
    			</h2>
    			<h4>
    				weekly newsletter.
    			</h4>
    			<form
				  className="contact-form"
				  name="newsletter"
				  method="post"
				  netlify-honeypot="bot-field"
				  data-netlify="true"
				  action="/success"
				>
					<input type="hidden" name="bot-feild"/>
					<input type="hidden" name="form-name" value="newsletter"/>
					<input 
						type="text" 
						name="name" 
						placeholder="Your Name"
						className="form-control"
						 />
					<input 
						type="text" 
						name="email" 
						placeholder="Your Email"
						className="form-control"
						 />
					 <button 
					 	type="submit"
					 	className="btn form-control submit-btn"
					 	>
					 	Subscribe
					 </button>
    			</form>
    		</div>
    	</section>
    </Layout>
  )
}

export default NewsLetter
