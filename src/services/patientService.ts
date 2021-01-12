import patientData from '../../data/patients.json';

import { NonSensitivePatientEntry, Patient } from '../types';

const patients: Array<Patient> = patientData as Array<Patient>;

const getPatients = (): Array<Patient> => {
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

export default {
    getPatients,
    getNonSensitiveEntries
};