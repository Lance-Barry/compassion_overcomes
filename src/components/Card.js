import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

import digitalworld from '../resources/images/digitalworld.jpg';

//import '../styles/card.css';
import '../styles/card.css';

const Example = (props) => {
    return (
        <div class="singleCard">
            <Card>
                <div class="singleCardImg">
                    <CardImg top width="100%" src={digitalworld} alt="ditial world map" />
                </div>
                <CardBody>
                    <div class="singleCardTitle">
                        <CardTitle>Compassion Overcomes</CardTitle>
                    </div>
                    
                    <div class="singleCardText">
                        <CardText>

                            <p>We believe that compassion can overcome even the most tragic of circumstances of the world.</p>

                            <p>Our mission is to connect domestic and international disaster relief agencies (including faith based groups, civic and governmental agencies) working around the world, with those people whose desire is to help their neighbors when they are in need the most, all in one convenient site.</p> 

                            <p>Often, the damage caused by a natural disaster results in long term efforts by multiple organizations in the affected communities. After the initial outpouring of volunteers, support can more difficult to come by, or worse, that those wishing to volunteer are unable to find current information in a given area.</p>

                            <p>Our goal is to become the central repository for relief agencies to post specific ongoing needs and to connect with people concerned for the sufferings or misfortunes of their neighbors.</p>

                        </CardText>
                        <Link to="/"><Button>Return Home</Button></Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;