import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import Org from '../resources/images/Org.png';
import Vol from '../resources/images/Vol.png';
//import fullSizeWordsNoVerse from '../resources/images/fullSizeWordsNoVerse.jpg';

const Cards = (props) => {
  return (
    <div className="cardDeck">
      <CardDeck>
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
            <div className="cardTitle">
              <CardTitle>Refief Organization Portal</CardTitle>
            </div>
            <div className="cardSubtitle">
              <CardSubtitle>Click below to begin</CardSubtitle><br></br>
            </div>
            <div className="cardText">
              <CardText>All relief and governmental agencies, click the below below to input your needs for specific disaster in the following form.</CardText>
              <Link to="/organizations"><Button>Post Needs</Button></Link>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Vol} alt="Volunteer hands" />
          <CardBody>
            <div className="cardTitle">
              <CardTitle>Volunteer Portal</CardTitle>
            </div>
            <div className="cardSubtitle">
              <CardSubtitle>Click below to begin</CardSubtitle><br></br>
            </div>
            <div className="cardText">
              <CardText>Volunteers, please click the "See Opportunities" to view all volunteer opportunities.</CardText>
              <Link to="/opportunities"><Button>See Opportunities</Button></Link>
            </div>
          </CardBody>
        </Card>

      </CardDeck>
    </div>
  );
};

export default Cards;