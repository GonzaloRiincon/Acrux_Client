import axios from "axios";

class ConcertServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/concert`
        })
    }

    getFilteredConcerts(artist, city) {
        return this.api.post(`/getFilteredConcerts`, { artist, city })
    }

    getConcertDetails(id) {
        return this.api.get(`/details/${id}`)
    }
}

const concertService = new ConcertServices()

export default concertService