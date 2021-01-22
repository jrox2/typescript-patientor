import diagnoseData from '../../data/diagnoses.json';

import { Diagnose } from '../types';

const diagnoses: Array<Diagnose> = diagnoseData as Array<Diagnose>;

const getDiagnoses = (): Array<Diagnose> => {
    return diagnoses;
};

const getDiagnoseByCode = (codePrm: string): Diagnose | undefined => {
    const result = diagnoseData.find(({code}) => code === codePrm);
    return result;
};

export default {
    getDiagnoses,
    getDiagnoseByCode
};