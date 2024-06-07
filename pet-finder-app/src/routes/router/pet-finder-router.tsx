import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../../views/pages/public/login/login-page"

export const PetFinderRouter = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<LoginPage />} />
            </Route>
        </Routes>
    )
}