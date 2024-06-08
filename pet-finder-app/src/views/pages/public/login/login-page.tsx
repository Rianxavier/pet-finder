import logo from '@assets/image/logo2.png'
import { Button } from "@components/buttons/button"
import { Input } from "@components/inputs/input"
import { ForwardedRef, forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { IoLockClosedOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CadastroPage, CadastroPageRef } from '../cadastro/cadastro-page';
import { DefaultForm, DefaultFormRef } from '@components/form/default-form';
import { ListPage, ListPageRef } from '../../private/list-page/list-page';
import { usePet } from '../../../../providers/use-pet-context';
import { CadastroMock } from '../../../../mock/cadastro-mock';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { CadastroPetPage, CadastroPetPageRef } from '../../private/cadastro-pet/cadastro-pet';

export interface LoginPageRef {
    open: () => void
    close: () => void
}

interface LoginPageProps {
    list?: boolean
}

export const LoginPage = forwardRef((props: LoginPageProps, ref: ForwardedRef<LoginPageRef>) => {
    const cadastroRef = useRef<CadastroPageRef>(null)
    const formRef = useRef<DefaultFormRef>(null)
    const cadastroPetPageRef = useRef<CadastroPetPageRef>(null)

    const { onLogin } = usePet()
    const [error, setError] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)

    const fields = { user: "", senha: "" }

    const handleSubmit = useCallback((values: any) => {
        const user = CadastroMock.find(item => item.email === values.user && item.senha === values.senha)
        if (user) {
            onLogin(values);
            setError(false)
            if (props.list)
                setVisible(false)
            else
                cadastroPetPageRef.current?.open()
        } else {
            setError(true)
        }
    }, [])

    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false),
    }), [])

    return (
        <React.Fragment>
            {visible && (

                <div className={`fixed inset-0 z-50 flex flex-col w-full h-[100dvh] bg-gradient-to-br from-teal-400 to-purple-600
        ${visible ? 'animate-slideInFromRight' : 'animate-slideOutToRight'}`}>

                    <div className=" absolute top-5 left-5 w-10 h-10 rounded-full bg-[#6A3178] flex items-center justify-center">
                        <IoIosArrowBack size={27} color="white" onClick={() => setVisible(false)} />
                    </div>

                    <div className="h-[86%] flex flex-col items-center justify-end bg-white rounded-b-2xl p-6 pb-8">

                        <img src={logo} alt="Imagem da logo" className={error ? `w-48 h-48` : ""} />

                        <DefaultForm ref={formRef} config={fields} onSubmit={(values) => handleSubmit(values)}>
                            <div className="bg-[#E8E8E8] pt-6 px-4 pb-4 w-full rounded-3xl flex flex-col gap-5 items-center">

                                {error && (
                                    <div className='w-full bg-red-400 p-3 flex items-center rounded-lg justify-center'>
                                        <p className='text-gray-200 font-semibold uppercase'>Login ou senha incorretos!</p>
                                    </div>
                                )}

                                <Input placeholder="Email" name='user' icon={<IoPersonCircleOutline />} />
                                <Input placeholder="Senha" name='senha' isPassword icon={<IoLockClosedOutline />} />
                                <Button titulo="Login" onClick={() => formRef.current?.onSubmit()} />

                                <a className="text-[14px] text-[#3685CD]" onClick={() => cadastroRef.current?.open()}>Crie sua conta</a>
                            </div>
                        </DefaultForm>

                    </div>

                    <div className="h-[14%] flex items-center justify-center"></div>

                    <CadastroPetPage ref={cadastroPetPageRef} setVisible={setVisible} />
                    <CadastroPage ref={cadastroRef} />

                </div >
            )}
        </React.Fragment>

    )
})