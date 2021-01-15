
export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;

export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export enum Gender { 
    Female = 'female', 
    Male = 'male',
    Other = 'other',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}
export interface PatientEntry {
   id: string,
   name: string,
   dateOfBirth: string,
   ssn?: string,
   gender: Gender,
   occupation: string ,
   entries: Entry[]
}
export type PublicPatient = Omit<PatientEntry, 'ssn' | 'entries' >;
export interface Diagnose {
    code: string;
    name: string;
    latin?: string
}