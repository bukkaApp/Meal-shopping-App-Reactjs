
import axios from 'axios'

export default{
    loginendpoint:"https://chef.mybukka.com/api/v1/bukka/auth/custom/login",
    carddtlsendpoint:"https://chef.mybukka.com/api/v1/bukka/customer/card/",
    signupendpoint:"https://chef.mybukka.com/api/v1/bukka/auth/register",
    chefendpoint:"https://chef.mybukka.com/api/v1/bukka/chefs/",
    logo:"https://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png",
    menupageBackground:'https://www.miami.com/wp-content/uploads/sites/2/2016/12/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals.png',
    addcard:'https://chef.mybukka.com/api/v1/bukka/customer/cardDetails/',
    normalizedlogo:'https://res.cloudinary.com/www-mybukka-com/image/upload/v1513294716/logo-light_xnxon0_rzghhp.png',
    macdlogo:"https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg",
    placeorderendpoint:"https://chef.mybukka.com/api/v1/bukka/transaction/incoming",
    applelogo:'https://res.cloudinary.com/www-mybukka-com/image/upload/v1508504845/c4c51cdd9a95bdb0c488ff0a013c865c_smq7g5.png',
    googleplaylogo:'http://res.cloudinary.com/www-mybukka-com/image/upload/v1508342712/appstore_bkvsi2.png',
    visa:"https://res.cloudinary.com/bukka/image/upload/v1500737722/app/visa.png",
    master:"https://res.cloudinary.com/bukka/image/upload/v1500737722/app/mastercard.png",
    verve:"https://res.cloudinary.com/bukka/image/upload/v1500737722/app/verve.png",
    order_history:"https://chef.mybukka.com/api/v1/bukka/customer/orders/",
    forgot_password:"https://mybukka.com/api/v1/bukka/forgotPassword",
    African:'https://res.cloudinary.com/www-mybukka-com/image/upload/v1516410182/image_us5rnm.jpg',
    Continental:'https://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1516410185/image1_kcf2c3.jpg',
    Vegetarian:'https://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1516410185/image2_q3lx7n.jpg',
    GMapApi:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBjt71qZwbmnRSpiTNC9KELMVQqKT6tV_M=3.exp&libraries=geometry,drawing",
}

export const  mapStateToProps=(state)=>(state)