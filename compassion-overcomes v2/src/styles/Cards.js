import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
// eslint-disable-next-line
import Org from '../resources/images/Org.png';
// eslint-disable-next-line
import Vol from '../resources/images/Vol.png';
// eslint-disable-next-line
import fullSizeWordsNoVerse from '../resources/images/fullSizeWordsNoVerse.jpg';




const Cards = (props) => {
     return (
       <CardDeck>
         <Card>
           <CardImg top width="100%" src={require('../resources/images/fullSizeWordsNoVerse.jpg')} alt="Compassion Overcomes About" />
           <CardBody>
             <CardTitle>Why Compassion Overscomes</CardTitle>
             <CardSubtitle>Click below to begin</CardSubtitle><br></br>
             <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
             <Button>Our Vision</Button>
           </CardBody>
         </Card>
         <Card>
           <CardImg top width="100%" src={require('../resources/images/Vol.png')} alt="Volunteer hands" />
           <CardBody>
             <CardTitle>Volunteer Portal</CardTitle>
             <CardSubtitle>Click below to begin</CardSubtitle><br></br>
             <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
             <Button>See Opportunities</Button>
           </CardBody>
         </Card>
         <Card>
         <CardImg top width="100%" src={require('../resources/images/Org.png')} alt="Orginzation needs" />
           <CardBody>
             <CardTitle>Organization Portal</CardTitle>
             <CardSubtitle>Click below to begin</CardSubtitle><br></br>
             <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
             <Button>Post Needs</Button>
           </CardBody>
         </Card>
       </CardDeck>
     );
   };

   export default Cards;