import { ForwardedRef, forwardRef } from "react"
import { Input } from "../../../components/inputs/input"
import { Button } from "../../../components/buttons/button"
// import logo from '../../../../assets/image/logo2.png'

export const LoginPage = () => {
    return (
        <div className="w-full h-[100dvh] bg-gradient-to-br from-teal-400 to-purple-600 flex flex-col">

            <div className="h-[86%] flex flex-col items-center justify-end bg-white
            rounded-b-2xl p-6 pb-8">

                {/* <img src={logo} alt="" /> */}

                <div className="bg-[#E8E8E8] pt-6 px-4 pb-4 w-full rounded-3xl flex flex-col gap-5 items-center">
                    <Input placeholder="Email" />
                    <Input placeholder="Senha" isPassword />
                    <Button titulo="Login" />

                    <a className="text-xs text-[#3685CD]" href="#">Crie sua conta</a>
                </div>

            </div>

            <div className="h-[14%] flex items-center justify-center"></div>

        </div>
    )
}