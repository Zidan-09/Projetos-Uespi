import { PatientService } from "../services/patientService";

export class HospitalController {
    static createPatient(req: any, res: any): void {
        const { name, age, cpf} = req.body;

        try {
            const patient = PatientService.createPatient(name, age, cpf);
            
            res.status(201).json({
                message: 'Paciente cadastrado com sucesso!',
                patient: patient,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
}
