import React from 'react'
import telegram from '../assets/telegram.png'
import playstore from '../assets/playstore.png'
import apple from '../assets/apple.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import message from '../assets/message.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div style={{backgroundColor:"wheat"}}>
        <br /><br />
        <h2>&emsp;&emsp;Embrace Your Dream Lifestyle With RentoMojo In Mumbai</h2>
        <p style={{fontWeight:"lighter"}}>&emsp;&emsp;RentoMojo is one of India’s best-known rental brands with a pan-India presence. You can rent furniture, appliances, and electronics from us in Mumbai for a monthly fee. <br /> &emsp;&emsp;Instead of paying tens of thousands to purchase said items from a store, you can rent them from us at a discounted price.</p>
    <br />
    <p style={{fontWeight:"lighter"}}>&emsp;&emsp;RentoMojo provides very reasonable rental rates, allowing you to save a great deal of money. We offer convenient rental options, short-term and long-term. <br />&emsp;&emsp;Our long-term plans offer maximum savings. No matter what plan you sign up for, you receive added benefits from us such as free relocation, damage waiver, and free maintenance</p>
    <br />
    <p style={{fontWeight:"lighter"}}>&emsp;&emsp;You’ll find top-rated, best-selling products in our inventory, made by the most dependable brands in the market. You can rent any item from us online in a matter of minutes. <br />&emsp;&emsp;After we process your order, we will deliver it to you anywhere in Mumbai. We offer fast delivery all over the city, including localities such as Lower Parel, Worli, Byculla,Bandra,Santacruz.</p>
    <br />
    <a href=""> &emsp;&emsp;Read More:)</a>
    <br /><br /><br />
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div>
            <h2>&emsp;&emsp;RENTOMOJO</h2><br />
            <a href="" style={{fontWeight:"lighter"}}>&emsp;&emsp;About us</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Culture</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Investors</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Careers</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Contact</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Our Benefits</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Sitemap</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Landlords</a><br /><br />
        </div>
        <div>
        <h2>&emsp;&emsp;Information</h2><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Blog</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Support home</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Documents Required</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Annual Returns</a><br /><br />
        </div>
        <div>
        <h2>&emsp;&emsp;Policies</h2><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Shipping Policies</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Cancellation & return</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Privacy Policy</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Rental terms and conditions</a><br /><br />
            <a style={{fontWeight:"lighter"}} href="">&emsp;&emsp;Referral terms and conditions</a><br /><br />
        </div>
        <div>
        <h2>&emsp;&emsp;Need help!</h2><br />
        <a href=""><img style={{height:"50px"}} src={telegram} alt="" />jo@rentomojo.com</a><br /><br />
        <p style={{fontWeight:"normal"}}>&emsp;Download now!</p><br />
        <div style={{display:"flex"}}><img style={{height:"50px"}} src={playstore} alt="" />&emsp;
        <img style={{height:"50px"}} src={apple} alt="" /></div>
        </div>
    </div>
    <br /><hr /><br />
    <div style={{display:"flex",justifyContent:"center"}}>
       <Avatar size='sm' src={facebook}/>
       <Avatar size='sm' src={twitter}/>
       <Avatar size='sm' src={message}/>
       <Avatar size='sm' src={youtube}/>
       <Avatar size='sm' src={instagram}/>
       <br /><br />
    </div>
    </div>
  )
}

export default Footer