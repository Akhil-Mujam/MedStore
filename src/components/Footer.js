import React from 'react'
import './Foot.css'
const Footer = () => {
  return (
    <div>

      <br/><br/><br/>
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
        <p class="text-justify h5">
                        Any Prescription and saved with one click 
                        we well optimized to make the future to be changed 
                        and making the future as a paperless world..
        </p>
          </div>

          

          <div class="col-xs-6 col-md-6 text-center">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by  
            <a href="https://ang-portfolio.vercel.app/about" class="text-white"> Akhil Mujam</a>.
            </p>
          </div>
        </div>
      </div>
</footer>
       
    </div>
  )
}

export default Footer
