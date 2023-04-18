import React, { useContext } from 'react'
import { Button, Col, FloatingLabel, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ConcertContext } from '../../contexts/concert.context'

const SearchForm = () => {

    const { artist, city, setArtist, setCity } = useContext(ConcertContext)

    const navigate = useNavigate()

    const handleArtistChange = e => {
        const { value } = e.target
        setArtist(value)
    }

    const handleCityChange = e => {
        const { value } = e.target
        setCity(value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        navigate('/concerts')

    }

    return (
        <Row className='mt-5 mb-3'>
            <Col xl={{ span: 5 }} lg={{ span: 6 }}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Artist Name"
                    className="mb-3"
                >
                    <Form.Control type="string" placeholder="Beyoncé" value={artist} onChange={handleArtistChange} name='artist' />
                </FloatingLabel>
            </Col>
            <Col xl={{ span: 5 }} lg={{ span: 6 }}>
                <FloatingLabel
                    controlId="floatingPassword"
                    label="City"
                    className="mb-3">
                    <Form.Control type="string" placeholder="Madrid" value={city} onChange={handleCityChange} name='city' />
                </FloatingLabel>
            </Col>
            <Col xl={{ span: 2 }}>
                <div className='d-grid'>
                    <Button variant="outline-dark" className='p-3' onClick={handleSubmit} >Search</Button>
                </div>
            </Col>


        </Row>
    )
}

export default SearchForm