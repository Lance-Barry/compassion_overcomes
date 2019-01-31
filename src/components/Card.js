import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

import fullSizeWordsNoVerse from '../resources/images/fullSizeWordsNoVerse.jpg';

import '../styles/card.css';

const Example = (props) => {
    return (
        <div class="singleCard">
            <Card>
                <div class="singleCardImg">
                    <CardImg top width="100%" src={fullSizeWordsNoVerse} alt="FullWorldNoWords" />
                </div>
                <CardBody>
                    <div class="singleCardTitle">
                        <CardTitle>Compassion Overcomes</CardTitle>
                    </div>
                    
                    <div class="singleCardText">
                        <CardText>

                            
                            Our company was started with the basic idea, that when a community or person is hurting or in need, it is the compassion or empathy of others,for what they are enduring, that overcomes the tragidy they face.

                        

                        
                        </CardText>
                        <Link to="/"><Button>Return Home</Button></Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;