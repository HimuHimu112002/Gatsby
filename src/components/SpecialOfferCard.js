import React from 'react'
import Card from 'react-bootstrap/Card';

const SpecialOfferCard = () => {
  return (
    <Card className='w-100'>
        <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <h4>{props.title}</h4>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <p className='text-center'>{props.price}</p>
        </Card.Body>
    </Card>
  )
}

export default SpecialOfferCard