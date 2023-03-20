import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
const Contactus = () => {
  return (
     <>
       <Head>
    <title>Contact Us| [Website Name]</title>
    <meta name="description" content="Contact Us" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
     </Head>


      <div className='contact_page'>
        <div className="about-section">
          <h1>Contact Us </h1>

        </div>
        <div className="body">

          <div className='firstcard' >

            <h4>Join our team</h4>
            <p style={{ textAlign: "justify" }}>Welcome to the Support Team of LovePDF! We provide our customers with the best service possible and would love to hear your feedback.

              If you have any questions or comments about our services, please don't hesitate to reach out. Our friendly customer support team is always happy to help. You can get in touch by calling us on (+923467897340), emailing us at edifytech4u@gmail.com, or using the contact us form on this page.

              We know that businesses and individuals alike rely on their documents more than ever before, so we work hard to ensure that all conversions are completed quickly and accurately. All our processes are automated for maximum efficiency, but if there are ever any issues with any of your documents, you can be sure that our team will investigate as soon as possible and resolve it promptly.
            </p>
            <p style={{ textAlign: "justify" }}>At LovePDF we take pride in our ability to offer professional document services without breaking the bank, which is why we’re proud of our competitive pricing plans. To top it all off, all our plans include unlimited conversions with no hidden fees!

              We understand that time is usually of the essence when converting documents, so if you need an urgent conversion service outside of regular office hours then don't hesitate to contact us - we'd be more than happy to look into getting it done for you!

              Thank you for choosing LovePDF - we’re confident that once you’ve experienced all that we have to offer, you’ll join the global community of satisfied document users too!
            </p>

            <a className='edifylink' href="https://www.edifycit.com/">www.edifycit.com</a>

            <h3>follow us </h3>
            <div className='icons'></div>
            <a className='links'  href="https://www.facebook.com/edifycitofficials/"><i  className="fa-brands fa-facebook"></i> </a>
        <a  className='links'  href="https://twitter.com/EdifyCIT"><i className="fa-brands fa-twitter"></i></a> 
         <a  className='thirdlinks'  href="https://www.instagram.com/edifycitofficial/"><i className="fab fa-instagram"></i> </a>

            <div className='policy'>
              {/* <Link to="/privacy">privacy policy</Link> */}
            </div>
          </div>

          <div className='secondcard'>

            <form>



              <input type="text" placeholder="enter your name" />


              <input type="email" placeholder="enter your valid email" /><br />
              <textarea name="comment" cols="20" rows="7" placeholder='comment'></textarea>
              <br />
              <button className='btn'>submit </button>

            </form>

          </div>

        </div>
      </div>

    </>
  )
}

export default Contactus