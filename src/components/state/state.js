import React from "react";

import "./state.css"
import StateCard from "./stateCard";
class State extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    title:"10K",
                    text:"Collection Size"
                },
                {
                    title:"46",
                    text:"Total Traits"
                },
                {
                    title:"--",
                    text:"Trees Planted"
                },
                {
                    title:"--",
                    text:"Total Donated"
                },
                {
                    title:".08",
                    text:"Price (ETH)"
                }
            ]
        }
    }
    render(){
        console.log(this.state.data);
        return(
            <div className="state_layout">
                {/* <p className="state_title">ADD STATS ABOUT OUR PROJECT HERE</p> */}
                <div className="state_cards">
                    {
                    this.state.data.map(element=>{
                        return(
                            <div
                            className="state_card">
                                <StateCard 
                                title={element.title}
                                text={element.text}/>
                            </div>
                            )
                    })
                }
                </div>
                <div className="state_bg">
                    
                </div>
            </div>
        )
    }
}
export default State;