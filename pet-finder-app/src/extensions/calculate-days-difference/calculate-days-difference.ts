export const calculateDaysDifference = (dateString: string): number => {
    // Converte a string de data para um objeto Date
    const targetDate = new Date(dateString);

    // Obtém a data atual
    const currentDate = new Date();

    // Calcula a diferença em milissegundos
    const differenceInTime = Math.abs(targetDate.getTime() - currentDate.getTime());

    // Converte a diferença de milissegundos para dias
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
}
