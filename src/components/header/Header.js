import React, { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import LocationOnOutLinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logo } from "../../assets/index";
import { allItems } from "../../constants";
import BottomHeader from "./BottomHeader";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from '../../redux/amazonSlice';

const Header = () => {

    const auth = getAuth();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.amazonReducer.products)
    // console.log(products)
    const userInfo = useSelector((state) => state.amazonReducer.userInfo);
    // console.log(userInfo)
    const ref = useRef();
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                showAll && setShowAll(false);
            }
        });
    }, [ref, showAll]);

    const handleLogout = () => {

        signOut(auth)
        .then(() => {
            console.log("Sign-out successfully!");
            dispatch(userSignOut())
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className="w-full sticky top-0 z-50">
            <div className='w-full bg-amazon_blue text-white h-16 px-4 py-1 flex items-center gap-4'>
                {/*--------Logo--------*/}
                <Link to="/">
                    <div className="headerHover">
                        <img className="w-24 mt-2" src={logo} alt="logoImage" />
                    </div>
                </Link>

                {/*-------------Deliver location----------*/}
                <div className="headerHover hidden md:inline-flex">
                    <div><LocationOnOutLinedIcon /></div>

                    <p className="text-xs text-lightText font-light flex flex-col">Deliver to{" "} <span className="text-sm font-semibold -mt-1 text-whiteText">Oman</span></p>
                </div>

                {/*------------All list items & search input---------------*/}
                <div className="h-10 rounded-md flex-grow relative hidden lgl:inline-flex">
                    <span onClick={() => setShowAll(!showAll)} className="hover:border-4 hover:border-orange-300 w-14 h-full bg-gray-200 hover:bg-gray-300 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
                        All <span> <ArrowDropDownIcon /> </span>
                    </span>
                    {
                        showAll && (
                            <div>
                                <ul ref={ref} className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                                    {
                                        allItems.map((item) => (
                                            <li className="text-sm tracking-wide bg -red cursor-pointer font-titleFont hover:bg-blue-600 hover:text-white duration-200
                                        " key={item._id}>{item.title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                    <input className="font-titleFont indent-8 hover:border-4 hover:border-orange-300 h-full text-base text-amazon_blue flex-grow outline-none px-2" type="text" placeholder="Search Amazon.in" />
                    <span className="hover:border-4 hover:border-orange-300 w-12 h-full flex items-center justify-center bg-[#febd69] hover:bg-[#f3a847]  text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
                        <SearchIcon />
                    </span>
                </div>

                {/*-----Sing-in-----*/}
                <Link to="/signin">
                    <div className="flex flex-col items-start justify-center headerHover">
                        {
                            userInfo ? (
                                <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-semibold">{userInfo.userName}</p>

                            ) : (
                                <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">Hello, sign in</p>
                            )
                        }

                        <p className="text-sm font-semibold -mt-1 text-whiteText hidden md:inline-flex">Accounts & Lists{" "}
                            <span className="text-lightText"><ArrowDropDownIcon /></span>
                        </p>
                    </div>
                </Link>

                {/* -----Orders & returns---- */}
                <div className="flex-col items-start justify-center headerHover hidden lgl:inline-flex">
                    <p className="text-xs text-lightText font-light">Returns</p>
                    <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
                </div>

                {/*---------cart logo---------*/}
                <Link to="/cart">
                    <div className="flex items-start justify-center headerHover relative">
                        <ShoppingCartIcon />
                        <p className="text-xs font-semibold mt-3 text-whiteText">Cart</p>
                        <span className="absolute text-xs -top-1 left-6 px-[3px] bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">{products.length > 0 ? products.length : 0}</span>
                    </div>
                </Link>

                {userInfo && (
                    <div onClick={handleLogout}

                        className="flex flex-col justify-center items-center headerHover relative"
                    >
                        <LogoutIcon />
                        <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
                            Log out
                        </p>
                    </div>
                )}


            </div>

            <BottomHeader />

        </div>

    );
};

export default Header