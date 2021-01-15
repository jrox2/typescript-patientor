/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitiveEntries());
  });
    
router.post('/', (req, res) => {
  //const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addEntry = patientService.addPatient(newPatientEntry);
    res.json(addEntry);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }
});


export default router;