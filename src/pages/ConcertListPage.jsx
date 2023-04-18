import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchForm from '../components/SearchForm/SearchForm'
import ConcertList from '../components/ConcertList/ConcertList'
import DetailsModal from '../components/DetailsModal/DetailsModal'
import concertService from '../services/concert.services'
import { ConcertContext } from '../contexts/concert.context'

const ConcertListPage = () => {

    const { selectedConcert } = useContext(ConcertContext)

    const [showModal, setShowModal] = useState(false)
    const [currentConcert, setCurrentConcert] = useState()

    useEffect(() => {
        selectedConcert && concertService
            .getConcertDetails(selectedConcert)
            .then(({ data }) => setCurrentConcert(data))
            .catch(err => console.log(err))
    }, [selectedConcert])

    return (
        <Container>
            <SearchForm />
            <ConcertList setShowModal={setShowModal} />
            <DetailsModal showModal={showModal} setShowModal={setShowModal} concert={currentConcert} />

        </Container>
    )
}

export default ConcertListPage