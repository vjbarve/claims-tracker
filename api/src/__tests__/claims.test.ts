import request from 'supertest';
import express from 'express';
import claimsRouter from '../routes/claims';
import { claims } from '../data/claims';
jest.mock('uuid', () => ({ v4: jest.fn(() => 'test-uuid') }));

const app = express();
app.use(express.json());
app.use('/api/claims', claimsRouter);

describe('Claims API', () => {
    it('GET /api/claims returns all claims', async () => {
        const res = await request(app).get('/api/claims');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(claims.length);
    });

    it('GET /api/claims/:id returns a claim', async () => {
        const res = await request(app).get('/api/claims/1');
        expect(res.status).toBe(200);
        expect(res.body.id).toBe("1");
    });

    it('GET /api/claims/:id returns 404 for unknown claim', async () => {
    const res = await request(app).get('/api/claims/999');
    expect(res.status).toBe(404);
  });

  it('POST /api/claims creates a new claim', async () => {
    const newClaim = {
      type: 'Dental',
      amount: 200,
      status: 'Submitted',
      submittedAt: new Date().toISOString()
    };

    const res = await request(app).post('/api/claims').send(newClaim);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.type).toBe(newClaim.type);
  });

  it('POST /api/claims returns 400 on invalid claim', async () => {
    const invalidClaim = {
      type: 'Car', // invalid
      amount: -5,
      status: 'Submitted',
      submittedAt: 'invalid-date'
    };

    const res = await request(app).post('/api/claims').send(invalidClaim);
    expect(res.status).toBe(400);
    expect(res.body.details).toBeDefined();
  });
});