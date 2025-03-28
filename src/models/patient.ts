export type Severity = 'Immediate' | 'VeryUrgent' | 'Urgent' | 'Low' | 'Non'
export type Status = 'Waiting for care' | 'In consult' | 'Was treated'

export class Patient {
    name: string;
    age: number;
    cpf: string;
    severity: Severity;
    checkIn: Date;
    status: Status;

    symptoms: string[];

    constructor(name: string, age: number, cpf: string, severity: Severity = 'Non') {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
        this.severity = severity;
        this.checkIn = new Date();
        this.status = 'Waiting for care';

        this.symptoms = [];
    }

    changeStatus(status: Status): void {
        this.status = status;
    }

    waitingTime(): number {
        const now = new Date();
        return Math.floor((now.getTime() - this.checkIn.getTime()) / 60000);
    }
}