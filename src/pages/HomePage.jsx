import React from 'react'
import { Container } from 'react-bootstrap'
import SearchForm from '../components/SearchForm/SearchForm'

const HomePage = () => {
    return (
        <Container className='pt-3'>

            <h1 className='text-center'>
                Welcome to Acrux's Concerts!
            </h1>

            <h4 className='text-center mt-5'>
                Insert an artist and a city to look for a corcert,
                You can also search every concerts on a city or all events of an artist.
                Just press the button without giving details to access the whole concerts' list
            </h4>

            <SearchForm />

        </Container>
    )
}

export default HomePage