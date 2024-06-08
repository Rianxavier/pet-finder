import { IoMdClose } from "react-icons/io";
import { usePet } from "../../../providers/use-pet-context";
import { useRef, useState } from "react";

interface AvatarProps {
    onLogout: () => void
    right?: boolean
    onBack?: () => void
}

export const Avatar = ({ onLogout, ...props }: AvatarProps) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const { user } = usePet()

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    return (
        <div className="relative inline-block">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white cursor-pointer"
                onClick={toggleMenu}>
                <p className="text-white">{user?.nome.charAt(0).toUpperCase()}</p>
            </div>

            {menuVisible && (
                <div ref={menuRef}
                    className={`absolute ${props.right ? "right-0" : "left-0 "} top-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20`}>
                    <div className="flex justify-between items-start px-4 py-2 border-b">

                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-500 text-white cursor-pointer"
                            onClick={toggleMenu}>
                            <p className="text-white">{user?.nome.charAt(0).toUpperCase()}</p>
                        </div>

                        <button
                            className="text-gray-800 hover:text-red-600"
                            onClick={closeMenu}
                        >
                            <IoMdClose />
                        </button>
                    </div>

                    {props.onBack && (
                        <button
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                            onClick={() => props.onBack && props.onBack()}>
                            Inicio
                        </button>
                    )}

                    <button
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                        onClick={onLogout}
                    >
                        {user ? "Fazer logout" : "Fazer login"}
                    </button>
                </div>
            )}
        </div>
    )
}