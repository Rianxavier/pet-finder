import logo from '@assets/image/logo2.png';
import { Button } from '@components/buttons/button';
import { useRef } from 'react';
import { ListPage, ListPageRef } from '../../private/list-page/list-page';
import { LoginPage, LoginPageRef } from '../login/login-page';
import { CadastroPetPage, CadastroPetPageRef } from '../../private/cadastro-pet/cadastro-pet';
import { usePet } from '../../../../providers/use-pet-context';

export const EscolhaPage = () => {
    const listRef = useRef<ListPageRef>(null)
    const loginPageRef = useRef<LoginPageRef>(null)
    const cadastroPetPageRef = useRef<CadastroPetPageRef>(null)

    const { user } = usePet()

    const onCadastraPet = () => {
        if (user)
            return cadastroPetPageRef.current?.open()
        else
            return loginPageRef.current?.open()
    }

    return (
        <div className="w-full h-[100dvh] bg-gradient-to-br from-teal-400 to-purple-600 flex flex-col">

            <div className="h-[66%] flex flex-col items-center justify-end bg-white rounded-b-2xl p-6 pb-8">

                <img src={logo} alt="Imagem da logo" />

                <div className="bg-[#E8E8E8] pt-6 px-4 pb-4 w-[90%] rounded-3xl flex flex-col gap-5 items-center absolute top-[60%]">
                    <Button titulo='Listagem de Animais' onClick={() => listRef.current?.open()} />
                    <Button titulo='Cadastra Animal' onClick={() => onCadastraPet()} />
                </div>

            </div>

            <div className="h-[14%] flex items-center justify-center"></div>

            <ListPage ref={listRef} />
            <LoginPage ref={loginPageRef} />
            <CadastroPetPage ref={cadastroPetPageRef} />

        </div >

    )
}