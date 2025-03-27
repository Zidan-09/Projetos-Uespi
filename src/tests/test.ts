import { Hospital } from "../models/hospital";
import { Patient } from "../models/patient";

const H1:Hospital = new Hospital();

const P1:Patient = new Patient('Joao', 23, '123.456.789-01');
const P2:Patient = new Patient('Pedro', 30, '987.654.321-09');
const P3:Patient = new Patient('Tiago', 12, '456.789.123-45');
const P4:Patient = new Patient('Judas', 65, '789.123.456-78');
const P5:Patient = new Patient('Mateus', 10, '321.654.987-23');
const P6:Patient = new Patient('Tiaguinho', 19, '654.321.987-65');
const P7:Patient = new Patient('Tomé', 25, '112.233.445-56');
const P8:Patient = new Patient('Felipe', 23, '443.322.110-22');
const P9:Patient = new Patient('André', 28, '765.432.109-87');
const P10:Patient = new Patient('Simão', 5, '543.210.987-65');

H1.triage(P1, ['tosse', 'espirro', 'dor abdominal'], 'Low');
H1.triage(P2, ['febre', 'calafrios', 'dor muscular'], 'Medium');
H1.triage(P3, ['dor de cabeça', 'náusea', 'fadiga'], 'Low');
H1.triage(P4, ['dificuldade para respirar', 'cansaço', 'dor no peito'], 'Urgent');
H1.triage(P5, ['dor de garganta', 'febre', 'tosse seca'], 'Medium');
H1.triage(P6, ['vômito', 'diarreia', 'febre'], 'Low');
H1.triage(P7, ['dificuldade para engolir', 'febre', 'calafrios'], 'Urgent');
H1.triage(P8, ['falta de apetite', 'fadiga', 'tosse com muco'], 'Medium');
H1.triage(P9, ['dores nas articulações', 'febre', 'cansaço'], 'Low');
H1.triage(P10, ['sangramento nasal', 'dificuldade para respirar', 'cansaço extremo'], 'Urgent');


H1.queue.viewQueue();