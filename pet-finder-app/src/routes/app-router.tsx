import { BrowserRouter } from "react-router-dom"
import { PetFinderRouter } from "./router/pet-finder-router"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <PetFinderRouter />
        </BrowserRouter>
    )
}