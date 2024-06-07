import { AnimalCard } from "@components/cards/animal-card/animal-card";
import { Input } from "@components/inputs/input";
import React from "react";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";

export interface ListPageRef {
    open: () => void
    close: () => void
}

export const ListPage = forwardRef((props: any, ref: ForwardedRef<ListPageRef>) => {

    const [visible, setVisible] = useState<boolean>(false)

    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false),
    }), [])

    const cards = [
        { id: 1, title: 'Card 1', content: 'Conteúdo do card 1.' },
        { id: 2, title: 'Card 2', content: 'Conteúdo do card 2.' },
        { id: 3, title: 'Card 3', content: 'Conteúdo do card 3.' },
        { id: 4, title: 'Card 4', content: 'Conteúdo do card 4.' },
        { id: 4, title: 'Card 4', content: 'Conteúdo do card 4.' },
        { id: 4, title: 'Card 4', content: 'Conteúdo do card 4.' },
    ];

    return (
        <React.Fragment>
            {visible && (
                <div className={`fixed inset-0 z-50 flex flex-col min-w-full min-h-full  gap-3 overflow-y-auto bg-white
                    ${visible ? 'animate-slideInFromRight' : 'animate-slideOutToRight'}`}>

                    <div className="w-full flex flex-col p-5 pb-14 gap-5 bg-gradient-to-r
                    from-teal-400 to-purple-600">
                        pesquisa
                        <Input name={""} />
                    </div>

                    {/* --== Container de listagem de animais */}
                    <div className="w-full flex flex-col h-full p-5 rounded-t-3xl bg-white top-[-40px] relative">
                        <h2 className="flex flex-col items-center text-xl font-bold text-[#323232]">Listagem de animais</h2>

                        <div className="w-full grid grid-cols-2 gap-5 pt-5 auto-rows-fr pb-5">
                            {cards.map((card, index) => (
                                <AnimalCard key={index} />
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </React.Fragment>
    )
})