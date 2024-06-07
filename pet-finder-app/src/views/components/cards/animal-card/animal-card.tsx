import { ImageValidation } from "@extensions/image-validation/image-validation"
import { MdLocationOn } from "react-icons/md"

export const AnimalCard = () => {
    return (
        <div className="h-[225px] bg-[#E8E8E8] rounded-2xl flex flex-col items-center p-2">
            <h2 className="text-lg font-bold text-black">Billy</h2>

            <img src={ImageValidation(undefined)} alt="" className="w-full h-[130px] object-fill rounded-xl mb-4" />

            <p className="text-black text-xs font-medium uppercase">perdido há 12 dias</p>

            <div className="flex flex-row items-center">
                <MdLocationOn color="#6A3178" />
                <p className="text-black text-xs font-medium uppercase">tatuape - mooca</p>
            </div>
        </div>
    )
}