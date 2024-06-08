import { AnimalCard } from "@components/cards/animal-card/animal-card";
import { Input } from "@components/inputs/input";
import { mockPets } from "../../../../mock/pet-mock";
import React, { useRef } from "react";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";
import { DetalhesPetPage, DetalhesPetPageRef } from "../detalhes-pet-page/detalhes-pet-page";
import { CadastroPetPage, CadastroPetPageRef } from "../cadastro-pet/cadastro-pet";
import { usePet } from "../../../../providers/use-pet-context";
import { Avatar } from "@components/avatar/avatar";
import { LoginPage } from "../../public/login/login-page";

export interface ListPageRef {
    open: () => void
    close: () => void
}

export const ListPage = forwardRef((props: any, ref: ForwardedRef<ListPageRef>) => {

    const detalhesPetPageRef = useRef<DetalhesPetPageRef>(null)
    const cadastroPetPageRef = useRef<CadastroPetPageRef>(null)
    const loginPageRef = useRef<ListPageRef>(null)
    const [visible, setVisible] = useState<boolean>(false)

    const { allPets, onLogout, user, handleSearch, searchResults, searchQuery } = usePet()

    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false),
    }), [])

    const logout = () => {
        if (user) {
            onLogout()
            setVisible(false)
        }
        else {
            loginPageRef.current?.open()
        }
    }

    const onAddPet = () => {
        if (user)
            return cadastroPetPageRef.current?.open()
        else
            return loginPageRef.current?.open()
    }

    console.log(searchResults);


    return (
        <React.Fragment>
            {visible && (
                <div className={`fixed inset-0 z-50 flex flex-col min-w-full min-h-full  gap-3 overflow-y-auto bg-white
                    ${visible ? 'animate-slideInFromRight' : 'animate-slideOutToRight'}`}>

                    <div className="w-full flex flex-col p-5 pb-14 gap-5 bg-gradient-to-r
                    from-teal-400 to-purple-600">
                        <div className="flex flex-row justify-between w-full items-center">
                            <Avatar onLogout={logout} onBack={() => setVisible(false)} />

                            <div className="bg-[#17BAB7] w-fit h-10 rounded-full flex items-center justify-center px-2"
                                onClick={() => onAddPet()}>
                                <p className="text-sm text-white font-medium">Adicionar Pet +</p>
                            </div>

                        </div>
                        <input
                            type="text"
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Pesquisar por cidade ou bairro"
                            className="border rounded-lg p-2 w-full outline-none"
                        />
                    </div>

                    {/* --== Container de listagem de animais */}
                    <div className="w-full flex flex-col h-full p-5 rounded-t-3xl bg-white top-[-40px] relative">
                        <h2 className="flex flex-col items-center text-xl font-bold text-[#323232]">Listagem de animais</h2>

                        {searchResults?.length === 0 && searchQuery.length > 0 && (
                            <p className="w-full flex items-center justify-center text-xl pt-5 font-bold">
                                Nenhum animal encontrado</p>
                        )}

                        <div className="w-full grid grid-cols-2 gap-5 pt-5 auto-rows-fr pb-5">

                            {searchResults && searchResults?.length > 0 && (
                                searchResults.map((card, index) => (
                                    <AnimalCard key={index} model={card} onClick={() => detalhesPetPageRef.current?.open(card)} />
                                ))
                            )}

                            {!searchResults && (
                                allPets.map((card, index) => (
                                    <AnimalCard key={index} model={card} onClick={() => detalhesPetPageRef.current?.open(card)} />
                                ))
                            )}

                        </div>

                    </div>

                </div>
            )}

            <CadastroPetPage ref={cadastroPetPageRef} />
            <DetalhesPetPage ref={detalhesPetPageRef} onClose={() => detalhesPetPageRef.current?.close()} />
            <LoginPage ref={loginPageRef} list />
        </React.Fragment>
    )
})