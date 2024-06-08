export class LoginModel {
    user: string = ""
    senha: string = ""

    constructor(data: any) {
        Object.assign(this, data)
    }

    map(values: any): LoginModel {
        this.user = values?.user
        this.senha = values?.senha

        return this
    }
}

export class CadastroModel {
    email: string = ""
    senha: string = ""
    telefone: string = ""
    nome: string = ""

    constructor(data: any) {
        Object.assign(this, data)
    }

    map(values: any): CadastroModel {
        this.email = values?.email
        this.senha = values?.senha
        this.telefone = values?.telefone
        this.nome = values?.nome

        return this
    }
}