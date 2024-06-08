import { BrowserRouter } from "react-router-dom"
import { PetFinderRouter } from "./router/pet-finder-router"
import { PetProvider } from "../providers/use-pet-context"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <PetProvider>
                <PetFinderRouter />
            </PetProvider>
        </BrowserRouter>
    )
}