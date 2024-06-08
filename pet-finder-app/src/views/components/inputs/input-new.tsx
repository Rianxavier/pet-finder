import React, { ChangeEvent, useCallback, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
    icon?: JSX.Element;
    name: string;
    placeholder?: string;
    isPassword?: boolean;
    isCadastro?: boolean;
    date?: boolean;
    onChange?: (value: string) => void;
}

export const InputNew: React.FC<InputProps> = ({ icon, name, placeholder, isPassword, isCadastro, date, onChange }) => {
    const [type, setType] = useState<"password" | "text">("password");
    const [value, setValue] = useState<string>('');

    const iconWithClasses = icon ? React.cloneElement(icon, { className: 'w-5 h-5 text-gray-500' }) : null;

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            setValue(newValue);
            if (onChange) onChange(event.target.value);
        },
        [onChange]
    );

    return (
        <div className={`rounded-2xl w-full h-11 flex flex-row items-center justify-center p-4 gap-2 ${isCadastro ? "bg-gray-200" : "bg-white"}`}>
            <div className="h-[100%] flex items-center">{iconWithClasses}</div>
            <input
                type={isPassword ? type : date ? "date" : "text"}
                placeholder={placeholder}
                className="w-full bg-transparent outline-none text-base"
                autoComplete="off"
                value={value}
                onChange={handleChange}
            />
            {isPassword && (
                <div onClick={() => setType(prevType => prevType === "password" ? "text" : "password")}>
                    {type === "password" ? <FaEye size={20} className="text-gray-500" /> : <FaEyeSlash size={20} className="text-gray-500" />}
                </div>
            )}
        </div>
    );
};
