import React, { useContext } from 'react'
import { ConcertContext } from '../../contexts/concert.context'
import ConcertCard from '../ConcertCard/ConcertCard'
import { Col, Row, Spinner } from 'react-bootstrap'

const ConcertList = ({ setShowModal }) => {

    const { concerts } = useContext(ConcertContext)

    return (
        <Row>
            {
                concerts ?
                    concerts.length
                        ?
                        concerts.map(concert => {
                            return (
                                <Col key={concert._id} xl={{ span: 4 }} lg={{ span: 6 }}>
                                    <ConcertCard {...concert} setShowModal={setShowModal} />
                                </Col>
                            )
                        })
                        :
                        <h2>Not found...</h2>
                    :
                    <Spinner className='mx-auto' />
            }
        </Row>
    )
}

export default ConcertList