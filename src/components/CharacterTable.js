import React from 'react'
import CharacterItem from './CharacterItem'
import {
   Row
  } from "reactstrap";

const CharacterTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading...</h1> :
         <Row>
        {
            items.map(item=>(
                <CharacterItem key={item.id} item={item}></CharacterItem>
            ))
        }
        </Row>
}

export default CharacterTable
