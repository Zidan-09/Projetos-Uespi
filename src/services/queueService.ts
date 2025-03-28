import { Queue } from "../models/queue";
import { Patient } from "../models/patient";

export class QueueService {
    static addPatientToQueue(queue: Queue, patient: Patient): void {
        switch (patient.severity) {
            case 'Immediate':
                queue.immediateQueue.push(patient);
                break;
            case 'VeryUrgent':
                queue.veryUrgentQueue.push(patient);
                break;
            case 'Urgent':
                queue.UrgentQueue.push(patient);
                break;
            case 'Low':
                queue.lowUrgencyQueue.push(patient);
                break;
            case 'Non':
                queue.nonUrgentQueue.push(patient);
                break;
        }

        this.sortQueue(queue);
    }

    static attendPatient(queue: Queue): Patient | null {
        let patient: Patient | null = null;

        if (queue.immediateQueue.length > 0) {
            patient = queue.immediateQueue.shift()!;
        } else if (queue.veryUrgentQueue.length > 0) {
            patient = queue.veryUrgentQueue.shift()!;
        } else if (queue.UrgentQueue.length > 0) {
            patient = queue.UrgentQueue.shift()!;
        } else if (queue.lowUrgencyQueue.length > 0) {
            patient = queue.lowUrgencyQueue.shift()!;
        } else if (queue.nonUrgentQueue.length > 0) {
            patient = queue.nonUrgentQueue.shift()!;
        }

        if (patient) {
            patient.changeStatus('In consult');
            queue.attendedPatients.push(patient);
            console.log(`Patient in consult`);
        }

        return patient;
    }

    static sortQueue(queue: Queue): void {
        function insertionSort(queueArray: Patient[]) {
            for (let i = 1; i < queueArray.length; i++) {
                let key = queueArray[i];
                let j = i - 1;

                while (j >= 0 && queueArray[j].waitingTime() > key.waitingTime()) {
                    queueArray[j + 1] = queueArray[j];
                    j = j - 1;
                }
                queueArray[j + 1] = key;
            }
        }

        insertionSort(queue.immediateQueue);
        insertionSort(queue.veryUrgentQueue);
        insertionSort(queue.UrgentQueue);
        insertionSort(queue.lowUrgencyQueue);
        insertionSort(queue.nonUrgentQueue);
    }
}