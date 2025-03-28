import { Patient, Severity } from "../models/patient";
import { Queue } from "../models/queue";
import { QueueService } from "./queueService";

export class HospitalService {
    private queue: Queue;

    constructor(queue: Queue) {
        this.queue = queue;
    }

    triage(patient: Patient, symptoms: string[], severity: Severity): void {
        patient.severity = severity;
        patient.symptoms = symptoms;

        QueueService.addPatientToQueue(this.queue, patient);
    }

    startConsultation(): void {
        const patient = QueueService.attendPatient(this.queue);
        if (patient) {
            console.log(`Paciente ${patient.name} está sendo atendido.`);
            setTimeout(() => this.endConsultation(patient!), 5000);
        }
    }

    endConsultation(patient: Patient): void {
        patient.changeStatus('Was treated');
        console.log(`Paciente ${patient.name} foi atendido.`);
    }
}