import { Patient } from "../models/patient";
import { ValidateCPF } from "../utils/validatorCPF";

export class PatientService {
    static createPatient(name:string, age:number, cpf:string): Patient {
        if (!ValidateCPF.validateCPF(cpf)) {
            throw new Error('Invalid CPF');
        }
        const patient = new Patient(name, age, cpf)

        return patient
    }
}