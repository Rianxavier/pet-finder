import { FormConfig } from "@components/form/default-form";
import { useFormikContext } from "formik";
import React, { useCallback, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
    icon?: JSX.Element
    name: string
    placeholder?: string
    isPassword?: boolean
    isCadastro?: boolean
}

export const Input = ({ ...props }: InputProps) => {
    const form = useFormikContext<FormConfig>();

    const [type, setType] = useState<"password" | "text">("password")

    const iconWithClasses = props.icon ? React.cloneElement(props.icon, {
        className: 'w-5 h-5 text-gray-500'
    }) : null;

    const value: string = form.values[props.name] || "";

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            let value: string | undefined = event.target?.value;
            form.setFieldValue(props.name, value);
        },
        [form, props.name]
    );

    return (
        <div className={` rounded-2xl w-full h-11 flex flex-row items-center justify-center p-4 gap-2
        ${props.isCadastro ? "bg-gray-200" : "bg-white"}`}>
            <div className="h-[100%] flex items-center">{iconWithClasses}</div>

            <input type={props.isPassword ? type : "text"} placeholder={props.placeholder}
                className="w-full bg-transparent outline-none text-base" autoComplete="off"
                value={value} onChange={handleChange} />

            {props.isPassword && (
                <div onClick={() => setType((prevType) => prevType === "password" ? "text" : "password")}>
                    {type === "password" ? (
                        <FaEye size={20} className="text-gray-500" />
                    ) : (
                        <FaEyeSlash size={20} className="text-gray-500" />
                    )}
                </div>
            )}
        </div>
    )
}