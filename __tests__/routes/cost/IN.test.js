import createServer from '../../../src/createServer';
import request from 'supertest';

const app = createServer();

describe('India Price Route Test', () => {

    it('Check route metro', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/metro');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.status).toBe('success');
        expect(res.body.metro instanceof Array).toBe(true);
    });

    it('Check route capital', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/capital');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.status).toBe('success');
        expect(res.body.capital instanceof Array).toBe(true);
    });

    it('Check route states', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/states');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.status).toBe('success');
        expect(res.body.state instanceof Array).toBe(true);
    });

    it('Check route state/:stateName', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/state/Bihar');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.status).toBe('success');
        expect(res.body.cities instanceof Array).toBe(true);
    });

    it('Default route', async () => {
        try {
            const res = await request(app.listen())
                .get('/cost/IN');
        } catch (error) {
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(res.body).toEqual({ status: "success" });
        }
    });

    it('Check error handling', async () => {
        try {
            const res = await request(app.listen())
                .get('/cost/IN?error=true');
        } catch (error) {
            expect(res.status).toBe(500);
            expect(res.type).toBe('application/json');
            expect(res.body).toEqual({ status: "error" });
        }
    });

})