import React from "react";
import './style.css';
import clouds from '../img/clouds.png';
import plane from '../img/plane.gif';

import { TypeIt } from "./TypeWriter";
import { Col, Row } from "react-bootstrap";

const fullScreenCloud:React.CSSProperties = { backgroundImage: `url(${clouds})`,
    position: 'fixed',
    width:"100%",
    top: 0,
    bottom: 0,
    right:0,
    left:0
};

const centerPlane:React.CSSProperties = { backgroundImage: `url(${plane})`,
                position:'fixed',
                height:'201px',
                width:'270px',
                top: 0,
                left:5
    
};

export class Scene extends React.Component 
{
    render()
    {
        return<>
        <Row>
            <Col>
            <div style={fullScreenCloud}>
                <div style={{position:'relative',top:'50%'}}><TypeIt></TypeIt></div></div> 
            <div style={centerPlane}></div>
            </Col>
            </Row>
            
        </>
    }
}