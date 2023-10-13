import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const icons = [
    <BsTwitter />,
    <BsInstagram />,
    <BsFacebook />,
    <FaSnapchatGhost />,
  ];
  return (
    <div>
      <div>
      <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Inspiration for future getaways</h4>
  	 			<ul>
  	 				<li><a href="#">Popular</a></li>
  	 				<li><a href="#">Arts & Culture</a></li>
  	 				<li><a href="#">Outdoors</a></li>
  	 				<li><a href="#">Mountains</a></li>
            <li><a href="#">Beach</a></li>
            <li><a href="#">Unique Stays</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Support</h4>
  	 			<ul>
  	 				<li><a href="#">Help Centr</a></li>
  	 				<li><a href="#">Aircover</a></li>
  	 				<li><a href="#">Anti-Discrimination</a></li>
  	 				<li><a href="#">Disability Support</a></li>
  	 				<li><a href="#">Cancellation Options</a></li>
             <li><a href="#">Report neighbourhood concern</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Hosting</h4>
  	 			<ul>
  	 				<li><a href="#">Airbnb your home</a></li>
  	 				<li><a href="#">AirCover for Hosts</a></li>
  	 				<li><a href="#">Hosting Resources</a></li>
  	 				<li><a href="#">Community Forum</a></li>
             <li><a href="#">Hosting Responsibly</a></li>
  	 			</ul>
  	 		</div>
         <div class="footer-col">
  	 			<h4>Airbnb</h4>
  	 			<ul>
  	 				<li><a href="#">Newsroom</a></li>
  	 				<li><a href="#">New features</a></li>
  	 				<li><a href="#">Careers</a></li>
  	 				<li><a href="#">Investors</a></li>
             <li><a href="#">Airbnb.orgemergency stays</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Get in touch with us</h4>
  	 			<div class="social-links">
  	 				<input class="fab fa-facebook-f" type="email"/>
  	 				<button class="fab">Submit</button>
  	 		
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

      </div>

    <div className="bg-white border-t-2 shadow-md  shadow-gray-300 sticky bottom-0 h-20 w-full flex items-center justify-center gap-6">
      
      {icons.map((icon) => (
        <div className="text-[30px] text-gray-600 hover:text-black duration-100 ease-out ">
          {icon}
        </div>
      ))}
    </div>
    </div>

  );
};

export default Footer;
