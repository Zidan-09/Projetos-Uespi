import { Patient } from "./patient";
import { Queue } from "./queue";

export class Hospital {
    queue: Queue = new Queue();

    triage(patient: Patient, symptoms: string[], severity: string): void {
        patient.severity = severity;
        patient.symptoms = symptoms;
        this.queue.addPatient(patient);
    }

    startConsultation(): void {
        const patient = this.queue.attendPatient();
        if (patient) {
            setTimeout(() => this.endConsultation(patient!), 5000);
        }
    }

    endConsultation(patient: Patient): void {
        patient.changeStatus('Was treated');
        console.log(`patient was treated`)
    }
}