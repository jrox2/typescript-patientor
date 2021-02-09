export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">;

export type NewPatientEntry = Omit<PatientEntry, "id">;

export type NewHealthcheckEntry = Omit<HealthCheckEntry, "id">;
export type NewOccupationalHealthcareEntry = Omit<
  OccupationalHealthcareEntry,
  "id"
>;
export type NewHospitalEntry = Omit<HospitalEntry, "id">;
//export type Diagnosis =

export enum Gender {
  Female = "female",
  Male = "male",
  Other = "other",
}

export interface PatientEntry {
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
  id: string;
}
export type PublicPatient = Omit<PatientEntry, "ssn" | "entries">;
export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose["code"]>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}
export interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: {
    startDate?: string;
    endDate?: string;
  };
}
export interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: {
    date: string;
    criteria: string;
  };
}

export interface Entries {
  date: string;
  type: string;
  description: string;
  diagnosisCodes?: string[];
  employerName?: string;
  sickLeave?: {
    startDate?: string;
    endDate?: string;
  };
  discharge?: {
    date: string;
    criteria: string;
  };
  healthCheckRating?: number;
}
