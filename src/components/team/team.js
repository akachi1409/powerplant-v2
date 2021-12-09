import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
import CEOImage from '../../assets/team/about.gif';
import CTOImage from '../../assets/team/about.gif';
import CMOImage from '../../assets/team/about.gif';
import CFOImage from '../../assets/team/about.gif'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: "https://powerplantsnft.s3.amazonaws.com/1.png",
                    title: 'Founder',
                    name: "Muhani"
                },
                {
                    image: "https://powerplantsnft.s3.amazonaws.com/500.png",
                    title: 'Founder',
                    name: "Thomas"
                },
                {
                    image: "https://powerplantsnft.s3.amazonaws.com/1000.png",
                    title: 'Artist',
                    name: "Alexander"
                },
                {
                    image: "https://powerplantsnft.s3.amazonaws.com/1200.png",
                    title: 'Developer',
                    name: "Joseph"
                }, 
                {
                    image: "https://powerplantsnft.s3.amazonaws.com/23.png",
                    title: 'Social Media',
                    name: "Emily"
                }
            ]
        }
    }

    render() {
        return (
            <div className='team-control' id='team'>
                <Container>
                    <header style={{fontStyle: "normal", color:"white"}}> Team Members </header>
                    <Row>
                        {
                            this.state.teams.map((item, index) => {
                                return (
                                    <Col style={{justifyContent: "center", textAlign: "center"}} key={index}>
                                        <TeamMember key={index}
                                            imageUrl={item.image}
                                            title={item.title}
                                            name={item.name} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Team