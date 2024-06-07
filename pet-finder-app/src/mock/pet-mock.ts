import { PetModel } from "../models/pet-model";

export const mockPets = [
    new PetModel({
        id: '1',
        nome: 'Rex',
        dataPerdido: '2023-05-01',
        bairro: 'Centro',
        cidade: 'São Paulo',
        sexo: 'macho',
        telefone: '(11) 99999-9999',
        img: 'https://via.placeholder.com/150'
    }),
    new PetModel({
        id: '2',
        nome: 'Luna',
        dataPerdido: '2023-06-15',
        bairro: 'Vila Mariana',
        cidade: 'São Paulo',
        sexo: 'fêmea',
        telefone: '(11) 98888-8888',
        img: 'https://via.placeholder.com/150'
    }),
    new PetModel({
        id: '3',
        nome: 'Max',
        dataPerdido: '2023-07-20',
        bairro: 'Pinheiros',
        cidade: 'São Paulo',
        sexo: 'macho',
        telefone: '(11) 97777-7777',
        img: 'https://via.placeholder.com/150'
    }),
    new PetModel({
        id: '4',
        nome: 'Bella',
        dataPerdido: '2023-08-05',
        bairro: 'Moema',
        cidade: 'São Paulo',
        sexo: 'fêmea',
        telefone: '(11) 96666-6666',
        img: 'https://via.placeholder.com/150'
    }),
    new PetModel({
        id: '5',
        nome: 'Charlie',
        dataPerdido: '2023-09-10',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        sexo: 'macho',
        telefone: '(11) 95555-5555',
        img: 'https://via.placeholder.com/150'
    }),
    new PetModel({
        id: '6',
        nome: 'Lucy',
        dataPerdido: '2023-10-01',
        bairro: 'Liberdade',
        cidade: 'São Paulo',
        sexo: 'fêmea',
        telefone: '(11) 94444-4444',
        img: 'https://via.placeholder.com/150'
    })
];