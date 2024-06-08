interface ButtonProps {
    titulo?: string
    onClick: () => void
}

export const Button = ({ ...props }: ButtonProps) => {
    return (
        <button className="w-full h-10 flex items-center justify-center text-lg bg-[#17BAB7]
        rounded-xl text-white font-bold cursor-pointer" onClick={props.onClick}>
            {props.titulo}
        </button>
    )
}