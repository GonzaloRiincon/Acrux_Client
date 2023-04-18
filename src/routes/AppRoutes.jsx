import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ConcertListPage from "../pages/ConcertListPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/concerts" element={<ConcertListPage />} />
        </Routes>
    )
}
export default AppRoutes