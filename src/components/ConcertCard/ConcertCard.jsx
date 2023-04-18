import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { ConcertContext } from '../../contexts/concert.context'
import './ConcertCard.css'

const ConcertCard = ({ artist, city, date, time, price, _id, setShowModal }) => {

    const { setSelectedConcert } = useContext(ConcertContext)

    const showDetails = () => {
        setSelectedConcert(_id)
        setShowModal(true)
    }
    return (

        <Card className='mb-3 pointer cardStyle' onClick={showDetails} >
            <Card.Body className='mx-3 text-dark'>
                <Card.Title >{artist}</Card.Title>
                <Card.Subtitle className="mb-2">{city}</Card.Subtitle>
                <Card.Text>Date: {date} at {time}</Card.Text>
                <Card.Text className='text-center'>{price} €</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ConcertCard