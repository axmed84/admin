import React from "react";
import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Tables from "../../components/table/Table";

const Single = () => {
    return(
        <div className="single">
            <Sidebar/>
            <div className="singlebarContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/27383334/pexels-photo-27383334/free-photo-of-fashion-model-in-cropped-checked-blouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
                            className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+1 2345 6789</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">Elton st. 234 Garden Yd. NewYork</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)"/>
                    </div>
                </div>
                <div className="bottom">
                <h1 className="title">Last Transactions</h1>
                    <Tables/>
                </div>
            </div>
        </div>
    )
}

export default Single