import { PetModel } from "../models/pet-model";
import cuddles from '../assets/image/pets/Cuddles.png'
import gus from '../assets/image/pets/Gus.png'
import kaylee from '../assets/image/pets/kaylee.png'
import Sookie from '../assets/image/pets/Sookie.png'
import Thor from '../assets/image/pets/Thor.png'
import Zeus from '../assets/image/pets/Zeus.png'

export const mockPets = [
    new PetModel({
        id: '3ca076ef-d38d-42f8-a4b4-03c0eb11ae51',
        nome: 'Cuddles',
        dataPerdido: '2023-05-01',
        bairro: 'Centro',
        cidade: 'São Paulo',
        sexo: 'fêmea',
        telefone: '(11) 99999-9999',
        img: cuddles
    }),
    new PetModel({
        id: '4da53e39-d452-4d80-a306-0bd62c476cbe',
        nome: 'Gus',
        dataPerdido: '2023-06-15',
        bairro: 'Vila Mariana',
        cidade: 'São Paulo',
        sexo: 'macho',
        telefone: '(11) 98888-8888',
        img: gus
    }),
    new PetModel({
        id: '73f50c36-af1d-4b75-a7e6-550d64e8483c',
        nome: 'Kaylee',
        dataPerdido: '2023-07-20',
        bairro: 'Pinheiros',
        cidade: 'São Paulo',
        sexo: 'fêmea',
        telefone: '(11) 97777-7777',
        img: kaylee
    }),
    new PetModel({
        id: '0ac6c012-43bd-45ad-8a25-de0c8a555b57',
        nome: 'Sookie',
        dataPerdido: '2024-03-05',
        bairro: 'Moema',
        cidade: 'São Paulo',
        sexo: 'fêmea',
        telefone: '(11) 96666-6666',
        img: Sookie
    }),
    new PetModel({
        id: '419a8192-641a-4eea-b9fa-45ac472200b6',
        nome: 'Thor',
        dataPerdido: '2024-05-10',
        bairro: 'Vila Ana',
        cidade: 'São Paulo',
        sexo: 'macho',
        telefone: '(11) 95555-5555',
        img: Thor
    }),
    new PetModel({
        id: 'fd1bf946-064a-4f0f-8968-73c012b7a188',
        nome: 'Zeus',
        dataPerdido: '2024-05-01',
        bairro: 'Liberdade',
        cidade: 'São Paulo',
        sexo: 'macho',
        telefone: '(11) 94444-4444',
        img: Zeus
    })
];