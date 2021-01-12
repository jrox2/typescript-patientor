export type Sex = 'female' | 'male' | 'other';

export type NonSensitivePatientEntry = Omit<Patient, 'ssn'>;

export interface Patient {
   id: string,
   name: string,
   dateOfBirth: string,
   ssn?: string,
   gender: Sex,
   occupation: string 
}

export interface Diagnose {
    code: string;
    name: string;
    latin?: string
}