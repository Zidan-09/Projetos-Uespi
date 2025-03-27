export class Patient {
    name: string;
    age: number;
    cpf: string;
    severity: string;
    checkIn: Date;
    status: string;

    symptoms: string[];

    constructor(name: string, age: number, cpf: string) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
        this.severity = '';
        this.checkIn = new Date();
        this.status = 'Waiting for care';

        this.symptoms = [];
    }

    changeStatus(status: string): void {
        this.status = status;
    }

    waitingTime(): number {
        const now = new Date();
        return Math.floor((now.getTime() - this.checkIn.getTime()) / 60000);
    }
}