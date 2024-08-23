import React, { useContext } from "react";
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined } from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkMode";
const Navbar = () => {

    const {dispatch} = useContext(DarkModeContext)
    
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchOutlinedIcon className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className="icon" onClick={()=> dispatch({type:"TOGGLE"})}/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon"/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=400" 
                        alt="" 
                        className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar