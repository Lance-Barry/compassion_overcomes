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

                            
                            <p>Our company was founded on the basic principle that all people were created with the innate trait of compassion, and when given the opportunity or outlet, the gift of compassion which is in all of us, will manifest in such a way, as to help these persons who are experiencing tragic circumstances in their life.</p>>

We love to hear stories of people giving of their time and talents, to help those in need the most. Whether it be individuals,  college students forgoing spring breaks, families, faith based or civic groups, 

This concept has been with me since a small rural community was struck by an F5 tornado in 1998, all but leveling the small this small town. In the aftermath of this destruction, people from all over the region, came to help in any way possible. Unfortunately, following major catastrophes, the needs for help may continue for months or even years. 

There are many amazing relief agencies, which include private organizations, churches and government agencies. Each with their own way of finding those persons wanting to give their time. 
 The purpose of this site, is to create a central location where all organizations involved in every phase of the relief effort, from the search and rescue, clean up as well as all after care efforts. All organizations are encouraged to post their specific volunteer needs and where volunteers may locate those specific needs. 

Thank you for your hearts to help your neighbor who are in need. We believe that your compassion will overcome the pain our neighbors are experiencing in their lives. 

                        

                        
                        </CardText>
                        <Link to="/"><Button>Return Home</Button></Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;