import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";
import { IoLockClosedOutline, IoMenuOutline, IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowBack, IoMdPhonePortrait } from "react-icons/io";
import { Input } from "@components/inputs/input";
import { Button } from "@components/buttons/button";
import { MdOutlineMarkunread } from "react-icons/md";

export interface CadastroPageRef {
    open: () => void
    close: () => void
}

export const CadastroPage = forwardRef((props: any, ref: ForwardedRef<CadastroPageRef>) => {
    const [visible, setVisible] = useState<boolean>(false)

    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false),
    }), [])

    return (
        <div className={`fixed inset-0 z-50 flex flex-col w-full min-h-full bg-white gap-3 overflow-y-auto
        ${visible ? 'animate-slideInFromBottom' : 'animate-slideOutToBottom'}`}>

            <header className="w-full min-h-17 bg-gradient-to-br from-teal-400 to-purple-600 flex flex-col p-5 pb-10
            rounded-b-2xl items-center gap-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <IoIosArrowBack size={33} color="white" onClick={() => setVisible(false)} />
                    <IoMenuOutline size={33} color="white" />
                </div>
                <h2 className="text-3xl text-white font-bold uppercase">Crie sua conta</h2>
            </header>

            <div className="flex flex-col gap-6 h-[100%] p-5">
                <Input placeholder="Email" icon={<MdOutlineMarkunread />} name="email" isCadastro />
                <Input placeholder="Nome Completo" icon={<IoPersonCircleOutline />} name="nome" isCadastro />
                <Input placeholder="Telefone" icon={<IoMdPhonePortrait />} isCadastro name="telefone" />
                <Input placeholder="Senha" isPassword icon={<IoLockClosedOutline />} isCadastro name="senha" />
                <Input placeholder="Confirmar senha" isPassword icon={<IoLockClosedOutline />} isCadastro name="confName" />
                <Button titulo="Cadastrar" />
            </div>

        </div>
    )
})