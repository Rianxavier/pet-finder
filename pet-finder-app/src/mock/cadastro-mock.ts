import { CadastroModel } from "../models/login-model";

export const CadastroMock = [
    new CadastroModel({
        email: 'rian@gmail.com',
        senha: "123123",
        telefone: "(71) 99656-0383",
        nome: "Rian Xavier"
    }),
    new CadastroModel({
        email: 'teste@gmail.com',
        senha: "teste123123",
        telefone: "(11) 99876-0988",
        nome: "Teste"
    }),
    new CadastroModel({
        email: 'joao@gmail.com',
        senha: "joaoalgusto",
        telefone: "(11) 99657-0999",
        nome: "Joao Algusto Silva"
    }),
]