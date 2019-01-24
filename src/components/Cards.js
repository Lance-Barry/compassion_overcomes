import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import Org from '../resources/images/Org.png';
import Vol from '../resources/images/Vol.png';
//import fullSizeWordsNoVerse from '../resources/images/fullSizeWordsNoVerse.jpg';

const Cards = (props) => {
     return (
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
             <CardTitle>Organization Portal</CardTitle>
             <CardSubtitle>Click below to begin</CardSubtitle><br></br>
             <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
             
             <Link to="/organizations"><Button>Post Needs</Button></Link>
           </CardBody>
         </Card>
         <Card>
           <CardImg top width="100%" src={Vol} alt="Volunteer hands" />
           <CardBody>
             <CardTitle>Volunteer Portal</CardTitle>
             <CardSubtitle>Click below to begin</CardSubtitle><br></br>
             <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
             <Link to="/opportunities"><Button>See Opportunities</Button></Link>
           </CardBody>
         </Card>
         
       </CardDeck>
     );
   };

   export default Cards;