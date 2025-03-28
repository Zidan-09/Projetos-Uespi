import { Patient } from "./patient";

export class Queue {
    immediateQueue: Patient[];
    veryUrgentQueue: Patient[];
    UrgentQueue: Patient[];
    lowUrgencyQueue: Patient[];
    nonUrgentQueue: Patient[];

    attendedPatients: Patient[];

    constructor() {
        this.immediateQueue = [];
        this.veryUrgentQueue = [];
        this.UrgentQueue = [];
        this.lowUrgencyQueue = [];
        this.nonUrgentQueue = [];

        this.attendedPatients = [];
    }

    viewQueue(): void {
        console.log('Immediate:', this.immediateQueue);
        console.log("Very-Urgent:", this.veryUrgentQueue);
        console.log("Urgent:", this.UrgentQueue);
        console.log("Low-Urgency:", this.lowUrgencyQueue);
        console.log("Non-Urgency:", this.nonUrgentQueue);
    }
}