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

    addPatient(patient: Patient): void {
        switch (patient.severity) {
            case 'Immediate':
                this.immediateQueue.push(patient);
                break;
            case 'VeryUrgent':
                this.veryUrgentQueue.push(patient);
                break;
            case 'Urgent':
                this.UrgentQueue.push(patient);
                break;
            case 'Low':
                this.lowUrgencyQueue.push(patient);
                break
            case 'Non':
                this.nonUrgentQueue.push(patient);
                break;
        }
        this.sortQueue()
    }

    attendPatient(): Patient | null {
        let patient: Patient | null = null;
        
        if (this.immediateQueue.length > 0) {
            patient = this.immediateQueue.shift()!;

        } else if (this.veryUrgentQueue.length > 0) {
            patient = this.veryUrgentQueue.shift()!;

        } else if (this.UrgentQueue.length > 0) {
            patient = this.UrgentQueue.shift()!;

        } else if (this.lowUrgencyQueue.length > 0) {
            patient = this.lowUrgencyQueue.shift()!;

        } else if (this.nonUrgentQueue.length > 0) {
            patient = this.nonUrgentQueue.shift()!;
        }

        if (patient) {
            patient.changeStatus('In consult');
            this.attendedPatients.push(patient);
            console.log(`patient in consult`)
        }

        return patient;
    }

    viewQueue(): void {
        console.log('Immediate:', this.immediateQueue);
        console.log("Very-Urgent:", this.veryUrgentQueue);
        console.log("Urgent:", this.UrgentQueue);
        console.log("Low-Urgency:", this.lowUrgencyQueue);
        console.log("Non-Urgency:", this.nonUrgentQueue);
    }

    reportQueue(): void {
        console.log(`Patients attended: ${this.attendedPatients.length}`);
    }

    sortQueue(): void {
        function insertionSort(queue: Patient[]) {
            for (let i = 1; i < queue.length; i++) {
                let key = queue[i];
                let j = i - 1;

                while (j >= 0 && queue[j].waitingTime() > key.waitingTime()) {
                    queue[j + 1] = queue[j];
                    j = j - 1;
                }
                queue[j + 1] = key;
            }
        }

        insertionSort(this.immediateQueue);
        insertionSort(this.veryUrgentQueue);
        insertionSort(this.UrgentQueue);
        insertionSort(this.lowUrgencyQueue);
        insertionSort(this.nonUrgentQueue);
    }
}