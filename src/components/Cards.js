import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import Org from '../resources/images/Org.png';
import Vol from '../resources/images/Vol.png';

import '../styles/Cards.css'
//import fullSizeWordsNoVerse from '../resources/images/fullSizeWordsNoVerse.jpg';

const Cards = (props) => {
  return (
    <div className="cardDeck">
      <CardDeck className="cardsStyle">
        {/* <Card>
           <CardImg top width="100%" src={fullSizeWordsNoVerse} alt="Compassion Overcomes About" />
           <CardBody>
             <CardTitle>Why Compassion Overscomes</CardTitle>
             <CardSubtitle>Click below to begin</CardSubtitle><br></br>
             <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
             <Button>Our Vision</Button>
           </CardBody>
         </Card> */}
        <Card>
          <CardImg top width="100%" src={Org} alt="Orginzation needs" />
          <CardBody>
            <div className="cardsTitle">
              <CardTitle>Organization Portal</CardTitle>
            </div>
            {/* <div className="cardSubtitle">
              <CardSubtitle>Click below to begin</CardSubtitle><br></br>
            </div> */}
            <div className="cardsText">
              <CardText>Welcome relief and governmental agencies! Thank you for providing information for your organization's current situation. Please click the "Post Opportunities" below to provide the specific disaster volunteer opportunities.</CardText>
              <Link to="/organizations"><Button>Post Opportunities</Button></Link>
            </div>
            
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Vol} alt="Volunteer hands" />
          <CardBody>
            <div className="cardsTitle">
              <CardTitle>Volunteer Portal</CardTitle>
            </div>
            {/* <div className="cardSubtitle">
              <CardSubtitle>Click below to begin</CardSubtitle><br></br>
            </div> */}
            <div className="cardsText">
              <CardText>Welcome volunteers! We're grateful you're here to find the perfect place to give of your time. There are plenty of needs in your area, so please click "See Opportunities" below to view all volunteer locations.</CardText>
              <Link to="/opportunities"><Button>See Opportunities</Button></Link>
            </div>
          </CardBody>
        </Card>

      </CardDeck>
    </div>
  );
};

export default Cards;