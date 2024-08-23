import React from "react";
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { AccountBalanceOutlined, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";

const Widget = ({ type }) => {
    let data;

    // temporary
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
        data = {
            title:"USERS",
            isMoney: false,
            link:"See all users",
            icon: <PersonOutline className="icon" style={{color:"crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2"
            }}/>
        }
            break
        case "order":
        data = {
            title:"ORDERS",
            isMoney: false,
            link:"See all orders",
            icon: <ShoppingCartOutlined className="icon" 
            style={{color:"crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2"}}/>
        }
            break
        case "earning":
        data = {
            title:"EARNINGS",
            isMoney: true,
            link:"View net Earnings",
            icon: <MonetizationOnOutlined className="icon" 
            style={{color:"crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2"}}/>
        }
            break
        case "balance":
        data = {
            title:"BALANCE",
            isMoney: true,
            link:"See details",
            icon: <AccountBalanceOutlined className="icon" 
            style={{color:"crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2"}}/>
        }
            break
            default:
                break

        
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                    </span>
                <span className="link">{data.link}r</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    {diff} %
                    </div>
                    {data.icon}
            </div>
        </div>
    )
}

export default Widget