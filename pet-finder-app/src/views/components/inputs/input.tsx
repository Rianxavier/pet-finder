interface InputProps {
    icon?: JSX.Element
    name?: string
    placeholder?: string
    isPassword?: boolean
}

export const Input = ({ ...props }: InputProps) => {
    return (
        <div className="bg-white rounded-lg w-full h-9 flex flex-col items-center justify-center p-3">
            <div>{props.icon}</div>
            <input type={props.isPassword ? "password" : "text"} placeholder={props.placeholder}
                className="w-full bg-transparent outline-none text-base" />
        </div>
    )
}