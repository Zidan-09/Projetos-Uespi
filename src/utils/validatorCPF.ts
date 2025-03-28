export class ValidateCPF {
    static validateCPF(cpf: string): boolean {
        cpf = cpf.replace(/[^\d]+/g, '');
    
        if (cpf.length !== 11) {
            return false;
        }
    
        let first_validade = 0;
        let second_validade = 0;
    
        let j = 10;
        for (let i = 0; i < 9; i++) {
            first_validade += parseInt(cpf[i]) * j;
            j--;
        }
    
        first_validade = (first_validade * 10) % 11;
        if (first_validade === 10 || first_validade === 11) {
            first_validade = 0;
        }
    
        j = 11;
        for (let i = 0; i < 9; i++) {
            second_validade += parseInt(cpf[i]) * j;
            j--;
        }
    
        second_validade = (second_validade * 10) % 11;
        if (second_validade === 10 || second_validade === 11) {
            second_validade = 0;
        }
    
        let isValid = first_validade === parseInt(cpf[9]) && second_validade === parseInt(cpf[10]);
    
        return isValid
    }
}