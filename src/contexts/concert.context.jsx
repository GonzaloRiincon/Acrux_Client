import { createContext, useEffect, useState } from 'react'
import concertService from '../services/concert.services'

const ConcertContext = createContext()

function ConcertProviderWrapper(props) {

    const [artist, setArtist] = useState('')
    const [city, setCity] = useState('')
    const [concerts, setConcerts] = useState()
    const [selectedConcert, setSelectedConcert] = useState()

    useEffect(() => {
        getFilteredConcerts()
    }, [artist, city])

    const getFilteredConcerts = () => {
        concertService
            .getFilteredConcerts(artist, city)
            .then(({ data }) => setConcerts(data))
            .catch(err => console.log(err))
    }



    return (
        <ConcertContext.Provider value={{ setArtist, setCity, concerts, selectedConcert, setSelectedConcert }}>
            {props.children}
        </ConcertContext.Provider>
    )
}

export { ConcertContext, ConcertProviderWrapper }