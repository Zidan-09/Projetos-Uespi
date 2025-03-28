import { HospitalService } from "../services/hospitalService";
import { Severity } from "./patient";
import { Queue } from "./queue";

export class Hospital {
    private hospitalService: HospitalService;
    private queue: Queue;

    constructor() {
        this.queue = new Queue();
        this.hospitalService = new HospitalService(this.queue);
    }

    triage(patient: any, symptoms: string[], severity: Severity): void {
        this.hospitalService.triage(patient, symptoms, severity);
    }

    startConsultation(): void {
        this.hospitalService.startConsultation();
    }
}