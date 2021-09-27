import React from 'react';
import {
  Card, 
  CardImg,  
  CardBody,
  CardTitle, 
  CardSubtitle,
  Button,
  Col
} from "reactstrap";

const CharacterItem = ({item}) => {

    const favorite = (item)=>{
      // getting the previous element and adding the new favorite item
      var previousData = JSON.parse(localStorage.getItem('favorites'))
      previousData.push(item)
      localStorage.setItem('favorites',JSON.stringify(previousData))
    }

    return (
          <Col sm="3" className="h-100">
          <Card>
            <CardImg top width="100%" height="250px" src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"> <strong>Name:</strong> {item.name}</CardSubtitle>
              {/* <CardText><strong>Description:</strong> {item.description}</CardText> */}
              <Button onClick={()=>favorite(item)}>Favourite</Button>
            </CardBody>
          </Card>
          </Col>
    )
}

export default CharacterItem
