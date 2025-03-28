import { Hospital } from '../models/hospital';
import { Patient } from '../models/patient';

const hospital = new Hospital();

const patient1 = new Patient('João Silva', 30, '123456781');
const patient2 = new Patient('Maria Oliveira', 45, '987632100');

hospital.triage(patient1, ['Febre', 'Cansaço'], 'Urgent');

hospital.triage(patient2, ['Dor de cabeça', 'Náusea'], 'Immediate');

hospital.startConsultation();