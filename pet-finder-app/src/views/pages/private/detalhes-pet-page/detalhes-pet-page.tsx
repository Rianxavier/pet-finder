import { TruncatedText } from "@components/trucated-text/trucated-text";
import { calculateDaysDifference } from "@extensions/calculate-days-difference/calculate-days-difference";
import { ImageValidation } from "@extensions/image-validation/image-validation";
import React, { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { PetModel } from "../../../../models/pet-model";

export interface DetalhesPetPageRef {
    open: (model: PetModel) => void
    close: () => void
}

interface DetalhesPetPageProps {
    onClose?: () => void
}

export const DetalhesPetPage = forwardRef((props: DetalhesPetPageProps, ref: ForwardedRef<DetalhesPetPageRef>) => {

    const [visible, setVisible] = useState<boolean>(false)
    const [pet, setPet] = useState<PetModel | undefined>(undefined)

    useImperativeHandle(ref, () => ({
        open: (model: PetModel) => {
            setPet(model)
            setVisible(true)
        },
        close: () => {
            setVisible(false)
            setPet(undefined)
        },
    }), [])

    return (
        <React.Fragment>
            {visible && (
                <div className={`fixed inset-0 z-50 flex flex-col min-w-full min-h-full  gap-3 overflow-y-auto bg-white
                    ${visible ? 'animate-slideInFromRight' : 'animate-slideOutToRight'}`}>

                    <div className="relative w-full h-64 bg-cover bg-center bg-no-repeat p-4"
                        style={{ backgroundImage: `url(${ImageValidation(pet?.img)})` }}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <IoIosArrowBack size={27} color="black" onClick={props.onClose} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 items-center">
                        <h1 className="text-4xl font-bold">{pet?.nome}</h1>

                        <p className="text-black text-2xl font-medium uppercase">perdido há {calculateDaysDifference(pet?.dataPerdido!)} dias</p>

                        <div className="flex flex-row items-center gap-1">
                            {pet?.sexo === "macho" ? <AiOutlineMan size={30} color="#17BAB7" />
                                : <AiOutlineWoman size={30} color="#832262" />}
                            <p className="text-black text-2xl font-medium uppercase">{pet?.sexo}</p>
                        </div>

                        <div className="flex flex-row items-center">
                            <MdLocationOn size={40} color="#6A3178" />
                            <p className="text-black text-2xl font-medium uppercase">
                                <TruncatedText text={`${pet?.bairro} - ${pet?.cidade}`} maxLength={25} /></p>
                        </div>

                        <div className="w-[80%] bg-[#6A3178] rounded-2xl py-2.5 px-5 flex items-center justify-center gap-2 flex-col m-2">
                            <h3 className="text-white font-bold text-lg">Contato</h3>

                            <div className="flex flex-row items-center gap-2">
                                <FaPhoneAlt size={30} color="white" />
                                <p className="text-white font-bold text-[22px]">{pet?.telefone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
})