import logo from '@assets/image/logo2.png'
import { Button } from "@components/buttons/button"
import { Input } from "@components/inputs/input"
import { useCallback, useRef } from 'react';
import { IoLockClosedOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CadastroPage, CadastroPageRef } from '../cadastro/cadastro-page';
import { DefaultForm, DefaultFormRef } from '@components/form/default-form';
import { ListPage, ListPageRef } from '../../private/list-page/list-page';

export const LoginPage = () => {
    const cadastroRef = useRef<CadastroPageRef>(null)
    const formRef = useRef<DefaultFormRef>(null)
    const listRef = useRef<ListPageRef>(null)

    const fields = { user: "", senha: "" }

    const handleSubmit = useCallback(() => {
        listRef.current?.open()
    }, [])

    return (
        <DefaultForm ref={formRef} config={fields} onSubmit={(values) => handleSubmit()}>

            <div className="w-full h-[100dvh] bg-gradient-to-br from-teal-400 to-purple-600 flex flex-col">

                <div className="h-[86%] flex flex-col items-center justify-end bg-white rounded-b-2xl p-6 pb-8">

                    <img src={logo} alt="Imagem da logo" />

                    <div className="bg-[#E8E8E8] pt-6 px-4 pb-4 w-full rounded-3xl flex flex-col gap-5 items-center">
                        <Input placeholder="Email" name='user' icon={<IoPersonCircleOutline />} />
                        <Input placeholder="Senha" name='senha' isPassword icon={<IoLockClosedOutline />} />
                        <Button titulo="Login" onClick={() => formRef.current?.onSubmit()} />

                        <a className="text-[14px] text-[#3685CD]" onClick={() => cadastroRef.current?.open()}>Crie sua conta</a>
                    </div>

                </div>

                <div className="h-[14%] flex items-center justify-center"></div>

                <ListPage ref={listRef} />
                <CadastroPage ref={cadastroRef} />

            </div >

        </DefaultForm>
    )
}