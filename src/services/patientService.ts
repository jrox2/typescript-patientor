import patientData from '../../data/patients.json';

import { NewPatientEntry, NonSensitivePatientEntry, PatientEntry } from '../types';

const patients: Array<PatientEntry> = patientData as Array<PatientEntry>;

const getPatients = (): Array<PatientEntry> => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry [] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id, 
        name, 
        dateOfBirth, 
        gender, 
        occupation,
    }));
  };

const addPatient = (
    (entry: NewPatientEntry ): PatientEntry => {

     const newPatientEntry = {
        id: Math.random().toString(36).substr(2, 9),
        ...entry
    };

    patients.push(newPatientEntry);

    return newPatientEntry;

});

export default {
    getPatients,
    getNonSensitiveEntries,
    addPatient
};