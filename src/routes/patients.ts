/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientService from "../services/patientService";
import {
  toNewHealthcheckEntry,
  toNewHospitalEntry,
  toNewaddOccupationalHealthcareEntry,
} from "../utils/entryUtils";
import toNewPatientEntry from "../utils/patieentEntryUtils";

const router = express.Router();

router.get("/", (_req, res) => {
  //res.send(patientService.getNonSensitiveEntries());
  res.send(patientService.getPatients());
});

router.get("/:id", (req, res) => {
  try {
    const patient = patientService.getPatientById(req.params.id);
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send({ error: "malformatted id" });
  }
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addEntry = patientService.addPatient(newPatientEntry);
    res.json(addEntry);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }
});

router.post("/:id/entries", (req, res) => {
  try {
    const patient = patientService.getPatientById(req.params.id);
    if (patient) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const entryType: string = req.body.type;
      switch (entryType) {
        case "HealthCheck":
          const addEntryHealthcheck = toNewHealthcheckEntry(req.body);
          console.log("addEntryHealthcheck: ", addEntryHealthcheck);
          patientService.addHealthcheckEntry(
            addEntryHealthcheck,
            req.params.id
          );
          break;
        case "Hospital":
          const addEntryHospital = toNewHospitalEntry(req.body);
          console.log("addEntryHospital: ", addEntryHospital);
          patientService.addHospitalEntry(addEntryHospital, req.params.id);
          break;
        case "OccupationalHealthcare":
          console.log("addOccupationalHealthcare req.body: ", req.body);
          const addOccupationalHealthcare = toNewaddOccupationalHealthcareEntry(
            req.body
          );
          console.log("addOccupationalHealthcare: ", addOccupationalHealthcare);
          patientService.addOccupationalHealthcareEntry(
            addOccupationalHealthcare,
            req.params.id
          );
          break;
      }
      res.json(req.body);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send({ error: "malformatted idx", e });
  }
});

export default router;
