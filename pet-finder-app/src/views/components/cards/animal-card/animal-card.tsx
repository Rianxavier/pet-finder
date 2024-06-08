import { ImageValidation } from "@extensions/image-validation/image-validation"
import { PetModel } from "../../../../models/pet-model"
import { MdLocationOn } from "react-icons/md"
import { calculateDaysDifference } from "@extensions/calculate-days-difference/calculate-days-difference"
import { TruncatedText } from "@components/trucated-text/trucated-text"

interface AnimalCardProps {
    model: PetModel
    onClick?: () => void
}

export const AnimalCard = ({ model, ...props }: AnimalCardProps) => {
    return (
        <div className="h-[225px] bg-[#E8E8E8] rounded-2xl flex flex-col items-center p-2" onClick={props.onClick}>
            <h2 className="text-lg font-bold text-black">{model.nome}</h2>

            <img src={ImageValidation(model.img)} alt="" className="w-full h-[130px] object-fill rounded-xl mb-4" />

            <p className="text-black text-xs font-medium uppercase">perdido há {calculateDaysDifference(model.dataPerdido)} dias</p>

            <div className="flex flex-row items-center">
                <MdLocationOn color="#6A3178" />
                <p className="text-black text-xs font-medium uppercase">
                    <TruncatedText text={`${model.bairro} - ${model.cidade}`} maxLength={15} /></p>
            </div>
        </div>
    )
}