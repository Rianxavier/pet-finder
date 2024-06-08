import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { PetModel } from "../models/pet-model";
import { mockPets } from "../mock/pet-mock"
import { CadastroModel, LoginModel } from "../models/login-model";
import { CadastroMock } from '../mock/cadastro-mock'

interface PetContextModel {
    handleAddPet: (pet: PetModel) => void
    allPets: PetModel[]
    searchResults: PetModel[] | undefined
    onLogin: (model: LoginModel) => void
    onLogout: () => void
    user: CadastroModel | undefined
    handleSearch: (query: string) => void
    searchQuery: string
}

interface PetProviderProps {
    children: ReactNode
}

const PetContext = createContext({} as PetContextModel)

export const usePet = () => {
    return useContext(PetContext)
}

export const PetProvider = ({ children }: PetProviderProps) => {
    const [pets, setPets] = useState<PetModel[]>(mockPets)
    const [user, setUser] = useState<CadastroModel | undefined>(undefined)

    const handleAddPet = (novoPet: PetModel) => {
        setPets(prevPets => {
            const novosPets = [novoPet, ...prevPets];
            return novosPets;
        });
    };

    const onLogin = useCallback((model: LoginModel) => {
        const user = CadastroMock.find(item => item.email === model.user && item.senha === model.senha);

        if (user) {
            const newUser = new CadastroModel(user);
            setUser(newUser);
        }
    }, []);

    const onLogout = useCallback(() => {
        setUser(undefined)
    }, [])

    const [searchResults, setSearchResults] = useState<PetModel[] | undefined>(undefined);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query)
        if (query === '') {
            setSearchResults(undefined);
        } else {
            const lowercasedQuery = query.toLowerCase();
            const filteredPets = pets.filter(
                pet =>
                    pet.cidade.toLowerCase().includes(lowercasedQuery) ||
                    pet.bairro.toLowerCase().includes(lowercasedQuery)
            );
            setSearchResults(filteredPets);
        }
    }, [pets]);

    return (
        <PetContext.Provider value={{
            allPets: pets, handleAddPet, onLogin, onLogout, user, searchResults, handleSearch,
            searchQuery
        }}>
            {children}
        </PetContext.Provider>
    )
}