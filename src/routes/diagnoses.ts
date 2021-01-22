import express from 'express';
import diagnoseService from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnoseService.getDiagnoses());
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnose!');
});

router.get('/:id', (req, res) => {
  try {
    const diagnose = diagnoseService.getDiagnoseByCode(req.params.id);
    if (diagnose) {
      res.json(diagnose);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(400).send({ error: "malformatted id" });
  }
  
  });

export default router;