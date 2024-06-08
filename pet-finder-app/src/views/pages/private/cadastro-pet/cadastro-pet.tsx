import { ForwardedRef, forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoMenuOutline } from 'react-icons/io5';
import { PetModel } from '../../../../models/pet-model';
import { InputNew } from '@components/inputs/input-new';
import { InputRadio } from '@components/inputs/input-radio';
import { v4 as uuidv4 } from 'uuid';
import { InputFile } from '@components/inputs/input-file';
import { usePet } from '../../../../providers/use-pet-context';
import { Avatar } from '@components/avatar/avatar';

export interface CadastroPetPageRef {
    open: () => void;
    close: () => void;
}

interface CadastroPetPageProps {
    setVisible?: (value: boolean) => void
}

export const CadastroPetPage = forwardRef((props: CadastroPetPageProps, ref: ForwardedRef<CadastroPetPageRef>) => {
    const [visible, setVisible] = useState(false);
    const { handleAddPet, user, onLogout } = usePet()

    const initialState: PetModel = new PetModel({
        id: uuidv4(),
        img: '',
        nome: '',
        dataPerdido: '',
        bairro: '',
        cidade: '',
        sexo: 'macho',
        telefone: user?.telefone
    });

    const [formValues, setFormValues] = useState<PetModel>(initialState);

    const handleInputChange = useCallback((value: string, name: string) => {
        setFormValues((prevValues: any) => ({
            ...prevValues,
            [name]: value
        }));
    }, []);

    const handleSubmit = useCallback(() => {
        let model = new PetModel(formValues).map(formValues);
        model.telefone = user?.telefone!
        handleAddPet(model);
        setVisible(false)
        if (props.setVisible)
            props.setVisible(false)
    }, [formValues]);

    const logout = () => {
        onLogout()
        setVisible(false)
    }

    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false),
    }), [])

    return (
        <div className={`fixed inset-0 z-50 flex flex-col w-full min-h-full bg-white gap-3 overflow-y-auto
            ${visible ? 'animate-slideInFromBottom' : 'animate-slideOutToBottom'}`}>
            <header className="w-full min-h-17 bg-[#6A3178] flex flex-col p-5 pb-10
                rounded-b-2xl items-center gap-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <IoIosArrowBack size={33} color="white" onClick={() => setVisible(false)} />
                    <Avatar onLogout={logout} right />
                </div>
                <h2 className="text-3xl text-white font-bold uppercase">Vamos encontrar seu pet!</h2>
            </header>

            <div className="flex flex-col gap-6 h-[100%] p-5 w-full items-center">
                <h2 className="text-3xl text-black font-bold uppercase">Dados do animal</h2>
                <InputFile name='img' onChange={(value) => handleInputChange(value, "img")} />
                <InputNew name="nome" placeholder="Nome do pet" isCadastro onChange={(value) => handleInputChange(value, "nome")} />
                <InputNew name="dataPerdido" placeholder="Data do desaparecimento (aaaa-mm-dd)" isCadastro onChange={(value) => handleInputChange(value, "dataPerdido")} />
                <InputNew name="bairro" placeholder="Bairro do desaparecimento" isCadastro onChange={(value) => handleInputChange(value, "bairro")} />
                <InputNew name="cidade" placeholder="Cidade do desaparecimento" isCadastro onChange={(value) => handleInputChange(value, "cidade")} />
                <InputRadio name='sexo' onChange={(value) => handleInputChange(value, "sexo")} />

                <div onClick={handleSubmit}
                    className="w-full h-10 flex items-center justify-center text-lg bg-[#17BAB7] rounded-xl text-white font-bold cursor-pointer">
                    Cadastrar
                </div>
            </div>
        </div >
    );
});
