/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  NewHealthcheckEntry,
  HealthCheckRating,
  NewHospitalEntry,
  NewOccupationalHealthcareEntry,
} from "../types";

export const toNewHospitalEntry = (object: any): NewHospitalEntry => {
  console.log("toNewHealthcheckEntryssä object: ", object);
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    type: object.type,
    description: parseDescription(object.description),
    date: parseDate(object.date),
    specialist: parseSpecialist(object.specialist),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    diagnosisCodes: object.diagnosisCodes,
    discharge: {
      date: parseDate(object.discharge.date),
      criteria: parseDescription(object.discharge.criteria),
    },
  };
};

export const toNewHealthcheckEntry = (object: any): NewHealthcheckEntry => {
  console.log("toNewHospitalEntryssä object: ", object);
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    type: object.type,
    description: parseDescription(object.description),
    date: parseDate(object.date),
    specialist: parseSpecialist(object.specialist),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    diagnosisCodes: object.diagnosisCodes,
    healthCheckRating: parseHealthcheckRating(object.healthCheckRating),
  };
};

export const toNewaddOccupationalHealthcareEntry = (
  object: any
): NewOccupationalHealthcareEntry => {
  console.log("toNewaddOccupationalHealthcareEntryssä object: ", object);
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    type: object.type,
    description: parseDescription(object.description),
    date: parseDate(object.date),
    specialist: parseSpecialist(object.specialist),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    diagnosisCodes: object.diagnosisCodes,
    employerName: parseEmployerName(object.employerName),
    sickLeave: {
      startDate: parseDate(object.sickLeave.startDate),
      endDate: parseDate(object.sickLeave.endDate),
    },
  };
};

const parseDescription = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error(`Incorrect or missing comment:  ${name}`);
  }
  return name;
};

const isString = (text: any): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (datePrm: any): string => {
  if (!datePrm) {
    console.log("optional date tyhjä");
    return "";
  }
  if (!datePrm || !isString(datePrm) || !isDate(datePrm)) {
    throw new Error(`Incorrect or missing date:  ${datePrm}`);
  }
  return datePrm;
};

const parseSpecialist = (specialist: any): string => {
  if (!specialist || !isString(specialist)) {
    throw new Error(`Incorrect or missing specialist:  ${specialist}`);
  }

  return specialist;
};

const parseEmployerName = (employerName: any): string => {
  if (!employerName || !isString(employerName)) {
    throw new Error(`Incorrect or missing employerName:  ${employerName}`);
  }

  return employerName;
};

const isHealthcheckRating = (param: any): param is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(param);
};

const parseHealthcheckRating = (rating: any): HealthCheckRating => {
  if (!rating || !isHealthcheckRating(rating)) {
    throw new Error(`Incorrect or missing visibility: ' ${rating}`);
  }
  return rating;
};
