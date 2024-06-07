export class PetModel {
    id: string = ''
    nome: string = ''
    dataPerdido: string = ''
    bairro: string = ''
    cidade: string = ''
    sexo: "macho" | "fêmea" = "macho"
    telefone: string = ""
    img: string = ""

    constructor(data: any) {
        Object.assign(this, data)
    }

    map(values: any): PetModel {
        this.id = values?.id
        this.nome = values?.nome
        this.dataPerdido = values?.dataPerdido
        this.bairro = values?.bairro
        this.cidade = values?.cidade
        this.sexo = values?.sexo
        this.telefone = values?.telefone
        this.img = values?.img

        return this
    }
}