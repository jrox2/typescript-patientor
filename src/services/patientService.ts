//import patientData from '../../data/patients.json';
import patientData from '../../data/patientes';

import { NewPatientEntry, NonSensitivePatientEntry, PatientEntry } from '../types';

const patients: Array<PatientEntry> = patientData ;

const getPatients = (): Array<PatientEntry> => {
    console.log("getPatients");
    return patients;
};


const getPatientById = (idPrm: string): PatientEntry | undefined => {
    const result = patients.find(({id}) => id === idPrm);
    return result;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry [] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id, 
        name, 
        dateOfBirth, 
        gender, 
        occupation,
        entries
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
    addPatient,
    getPatientById
};