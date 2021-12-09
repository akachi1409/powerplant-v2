import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import il from '../../assets/about.gif';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'Phase 1',
                    title: 'Inception',
                    content: "-Website is launched \n -Social Media marketing campaigns are launched \n -Create partnerships with tree foundations"
                },
                {
                    tag: 'Phase 2',
                    title: 'Community',
                    content: "-Raffle giveaway once we reach 25,000 Discord Members\n-Merchandise is launched\n-Whitelist"
                },
                {
                    tag: 'Phase 3',
                    title: 'Launch',
                    content: '-NFTs are sold to the public\n-Unlockable content\n-Exclusive community group launched'
                },
                {
                    tag: 'Phase 4',
                    title: 'Donation',
                    content: '-Donation of 10% to charitable foundations\n -Contributions to DAOs \n-Trees are planted and matched'
                },
                {
                    tag: 'Phase 5',
                    title: 'After Launch',
                    content: '-$50,000 is pumped into the Power Plants Fund for ongoing developments and marketing campaigns\n-Rare owners get original art/seeds mailed to them\n-2% of secondary marketplace sales are donated\n-Raffles on social media platforms'
                },
                {
                    tag: 'Phase 6',
                    title: 'Metaverse',
                    content: '-The next phase...'
                },
                
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{textAlign: "center"}}>
                <Container >
                    <text><header style={{fontWeight: 900, fontStyle: "normal"}}><span>POWER PLANTS</span> ROAD MAP</header></text>
                    {/* <p className='roadmap-description'>
                    Our Roadmap is under construction!Placeholder
                    </p> */}
                    <Row style={{alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                        <Col xs={12} md={6}>
                            <img src={"https://static.wixstatic.com/media/9529be_c5c27e794a4a403fa063f9a414247950~mv2.png/v1/crop/x_555,y_175,w_1673,h_2667/fill/w_488,h_778,al_c,q_90,usm_0.66_1.00_0.01/Blue%20Sapphire%20Orchid.webp"}/>
                        </Col>
                        <Col  style={{alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return(
                                        <RoadMapItem style={{textAlign: "center", color: "black"}}key={index}
                                            tag= {item.tag}
                                            title= {item.title}
                                            content= {item.content} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}

export default RoadMap;