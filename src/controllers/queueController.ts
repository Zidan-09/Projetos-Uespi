import { QueueService } from "../services/queueService";
import { Queue } from "../models/queue";
import { Patient } from "../models/patient";

export class QueueController {
    static addPatientToQueue(queue: Queue, patient: Patient) {
        QueueService.addPatientToQueue(queue, patient);
    }

    static attendPatient(queue: Queue) {
        return QueueService.attendPatient(queue);
    }

    static viewQueue(queue: Queue) {
        queue.viewQueue();
    }
}
