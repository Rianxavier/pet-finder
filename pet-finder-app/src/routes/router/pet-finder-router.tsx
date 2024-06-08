import { Route, Routes } from "react-router-dom"
import { EscolhaPage } from "../../views/pages/public/escolha/escolha-page"

export const PetFinderRouter = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<EscolhaPage />} />
            </Route>
        </Routes>
    )
}