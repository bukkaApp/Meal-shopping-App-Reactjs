import React from 'react';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import FaStar from 'react-icons/lib/fa/star';
import TiSocialInstagram from 'react-icons/lib/ti/social-instagram'
import '../style/receipt.css';

const receipt=(props)=>{

    return(
        <div id="a">
            <div id="b">
                <div id="c">
                    <h2>Thank you for shopping with us</h2>
                    <img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" alt="my-bukka"/>
                </div>
                <div id="d">
                    <img src="https://res.cloudinary.com/bukka/image/upload/v1500853749/google:104487594240799301853/profile_image.jpg" alt="chef"/>
                    <h4>How was your experience?</h4>
                    <span>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </span>
                </div>
            </div>
            <div id="e">
                <h1><span id="ea">₦</span>25</h1>
                <div id="f" >
                    <h6>
                        <span>Carrot</span>
                        <span>₦20</span>
                    </h6>
                    <h6>
                    <span>carrot</span>
                    <span>₦20</span>
                    </h6>
                    <h6>
                    <span>Carrot</span>
                    <span>₦20</span>
                    </h6>
                    <h6>
                    <span>Carrot</span>
                    <span>₦20</span>
                    </h6>
                </div>
                <div id="g">
                    <h6>
                    <span>Subtotal</span>
                    <span>₦20</span>
                    </h6>
                    <h6>
                    <span>Delivery Fee</span>
                    <span>₦20</span>
                    </h6>
                    <h6>
                    <span>Tax</span>
                    <span>₦20</span>
                    </h6>
                </div>
                <h6>
                <span>Total</span>
                <span>₦20</span>
                </h6>
            </div>

            <div id="h">
                <h6>Order history</h6>
                <h6>myBukka@mybukka.com</h6>
                <h6>02103305222</h6>
                <h5><span>SHOP ONLINE</span></h5> 
                <h4>
                    <span class="so"><TiSocialFacebook/></span>
                    <span class="so"><TiSocialTwitter/></span>
                    <span class="so"><TiSocialInstagram/></span>
                </h4>
            </div>
            <h6><span>Visa xxxx</span><span></span></h6>
        </div>
    )
}
export default receipt;