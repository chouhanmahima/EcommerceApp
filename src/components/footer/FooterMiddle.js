import React from 'react';
import { logo, bdFlag } from "../../assets/index";
import FooterTitle from './FooterTitle';

const FooterMiddle = () => {
    return (
        <div className='font-titleFont'>
            <div className='w-full bg-amazon_light text-white'>

                <div className='w-full border-b-[1px] border-gray-500 py-10'>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 items-start px-6 gap-10 lgl:gap- text-gray-300 py-5 font-bodyFont'>
                        <div className='flex flex-col md:px-24'>
                            <FooterTitle title="Get to Know Us" />
                            <p className="footerLink">Careers</p>
                            <p className="footerLink">Blog</p>
                            <p className="footerLink">About Amazon</p>
                            <p className="footerLink">Investor Relations</p>
                            <p className="footerLink">Amazon Devices</p>
                            <p className="footerLink">Amazon Science</p>
                        </div>
                        <div className='flex flex-col md:px-14'>
                            <FooterTitle title="Make Money with Us" />
                            <p className="footerLink">Sell products on Amazon</p>
                            <p className="footerLink">Sell on Amazon Business</p>
                            <p className="footerLink">Sell apps on Amazon</p>
                            <p className="footerLink">Become an Affiliate</p>
                            <p className="footerLink">Advertise Your Products</p>
                            <p className="footerLink">Self-Publish with Us</p>
                            <p className="footerLink">Host an Amazon Hub</p>
                            <p className="footerLink"> See More Make Money with Us</p>
                        </div>
                        <div className='flex flex-col md:px-14'>
                            <FooterTitle title="Amazon Payment Products" />
                            <p className="footerLink">Amazon Business Card</p>
                            <p className="footerLink">Shop with Points</p>
                            <p className="footerLink">Reload Your Balance</p>
                            <p className="footerLink">Amazon Currency Converte</p>
                        </div>
                        <div className='flex flex-col md:px-14'>
                            <FooterTitle title="Let Us Help You" />
                            <p className="footerLink">Amazon and COVID-19</p>
                            <p className="footerLink">Your Account</p>
                            <p className="footerLink">Your Orders</p>
                            <p className="footerLink">Shipping Rates & Policies</p>
                            <p className="footerLink">Returns & Replacements</p>
                            <p className="footerLink">Manage Your Content and Devices</p>
                            <p className="footerLink">Amazon Assistant</p>
                            <p className="footerLink">Help</p>
                        </div>

                    </div>
                </div>

                 {/*----------Bottom-part----------*/}
                <div className="max-w-lg mx-auto flex justify-center gap-12 py-8 text-gray-300">
                    <div>
                        <img className="w-20 pt-2" src={logo} alt="logoImage" />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-1 items-center justify-center border border-gray-500 px-2 cursor-pointer duration-200 hover:border-amazon_yellow">
                            <p>English</p>
                        </div>
                        <div className="flex gap-1 items-center justify-center border border-gray-500 px-2 cursor-pointer duration-200 hover:border-amazon_yellow">
                            <img className="w-6" src={bdFlag} alt="" />
                            <p>Bangladesh</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FooterMiddle