import React from 'react'
import Link from "next/link";
import Image from "next/image"
const Footer = () => {
  return (
    <>       
     
    <footer>
   <div className="content container">
     <div className="left-box mx-5">
     
       <div className="topic">Company</div>
       <div><Link className='footer-tag' href="/About"> About Us</Link></div>
       <div><Link className='footer-tag' href="/Contactus">Contact Us</Link></div>
       <div><Link className='footer-tag' href="/Privacy">Privacy And Policy</Link></div>
       <div><Link className='footer-tag' href="/Disclaimer">Disclaimer</Link></div>
       <div><Link className='footer-tag' href="/Blogs">Blogs</Link></div>
     
     
       
     </div>
     <div className="middle box">
       <div className="topic">Our Services</div>
       <div><Link className='footer-tag' href="/Converter/TextBinary">Text To Binary</Link></div>
       <div><Link className='footer-tag' href="/Converter/Binary">Binary To Decimal</Link></div>
       <div><Link className='footer-tag' href="/Converter/">Hexa To Binary</Link></div>
      
     </div>
     <div className="right box">
       <div className="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Send"/>
         <div className="media-icons">
           <Link href="https://www.facebook.com/edifycitofficials"><i className="fab fa-facebook-f social-media-icons"></i></Link>
           <Link href="https://www.instagram.com/edifycit_officials/"><i className="fab fa-instagram social-media-icons"></i></Link>
           <Link href="https://twitter.com/EdifyCIT"><i className="fab fa-twitter social-media-icons"></i></Link>
           <Link href="https://www.youtube.com/@edifycit"><i className="fab fa-youtube social-media-icons"></i></Link>
           <Link href="https://www.linkedin.com/company/edify-college-of-it/mycompany/"><i className="fab fa-linkedin-in social-media-icons"></i></Link>
         </div>
       </form>
     </div>
   </div>
   <div className="bottom">
     <p>Copyright © 2020 <a href="#">Edify</a> All rights reserved</p>
   </div>
 </footer>
    </>
  )
}

export default Footer