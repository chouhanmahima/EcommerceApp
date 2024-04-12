import React, { useRef, useEffect, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import SideNavContent from "./SideNavContent"
import { useSelector } from 'react-redux';

const BottomHeader = () => {
    const userInfo = useSelector((state) => state.amazonReducer.userInfo);
    const ref = useRef();
    const [sidebar, setSidebar] = useState(false);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSidebar(false)
            }
        })
    }, [ref, sidebar])
    return (
        <div className="w-full px-4 h-[36px] font-titleFont text-sm bg-amazon_light text-white flex items-center gap-2">

            {/*------All list items---------*/}
            <p onClick={() => setSidebar(true)} className=" font-bold flex items-center gap-1 headerHover ">
                <span>
                    <MenuIcon />
                </span>
                All
            </p>
            <p className="headerHover hidden md:inline-flex">Today's Deals</p>
            <p className="headerHover hidden md:inline-flex">Customer Service</p>
            <p className="headerHover hidden md:inline-flex">Gift Cards</p>
            <p className="headerHover hidden md:inline-flex">Gift Cards</p>
            <p className="headerHover hidden md:inline-flex">Registry</p>
            <p className="headerHover hidden md:inline-flex">Sell</p>

            {/*--------Side Navbar--------*/}
            {
                sidebar && (
                    <div className="text-black w-full h-screen fixed top-0 left-0 bg-amazon_blue bg-opacity-70">
                        <div className="w-full h-full relative">
                            <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5 }} className="w-[80%] md:w-[350px] h-full bg-white border-black border-[0.1px]">
                                <div className="w-full bg-amazon_light py-2 text-white px-6 flex items-center gap-4">
                                    {userInfo ? (
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src={userInfo.image}
                                            alt="UserImg"
                                        />
                                    ) : (
                                        <AccountCircleIcon />
                                    )}

                                    {
                                        userInfo ? (
                                            <h3 className="font-titleFont font-bold text-lg tracking-wide">
                                    {userInfo.userName}
                                </h3>
                                        ) : (
                                            <h3 className="font-titleFont font-bold text-lg tracking-wide">
                                    Hello, Sign In
                                </h3>
                                        )
                                    }

                                </div>
                                <SideNavContent
                                    title="Digital Content & Devices"
                                    one="Amazon Music"
                                    two="Kindle E-readers & Books"
                                    three="Amazon Appstore"
                                />
                                <SideNavContent
                                    title="Shop By Department"
                                    one="Electronics"
                                    two="Computers"
                                    three="Smart Home"
                                /><SideNavContent
                                    title="Programs & Features"
                                    one="Gift Cards"
                                    two="Amazon live"
                                    three="International Shopping"
                                /><SideNavContent
                                    title="Help & Settings"
                                    one="Your Account"
                                    two="Customer Service"
                                    three="Contact us"
                                />

                                <span onClick={() => setSidebar(false)} className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
                                    <CloseIcon />
                                </span>

                            </motion.div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default BottomHeader