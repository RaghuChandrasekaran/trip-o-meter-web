import createServer from '../../../src/createServer';
import request from 'supertest';

const app = createServer();

describe('India Price Route Test', () => {

    it('Check route metro', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/metro');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.metro.length > 0).toBe(true);
    });

    it('Check route capital', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/capital');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
    });

    it('Check route states', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/states');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.states.length > 0).toBe(true);
    });

    it('Check route state/:stateName', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/state/Bihar');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.Bihar.length > 0).toBe(true);
    });

    it('Check route city/:cityName', async () => {
        const res = await request(app.listen())
            .get('/cost/IN/city/Sheohar');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.Sheohar.length > 0).toBe(true);
    });

    it('Default route', async () => {
        try {
            const res = await request(app.listen())
                .get('/cost/IN');
        } catch (error) {
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(res.body.undefined).toEqual("Data not found");
        }
    });

    it('Check error handling', async () => {
        try {
            const res = await request(app.listen())
                .get('/cost/IN?error=true');
        } catch (error) {
            expect(res.status).toBe(500);
            expect(res.type).toBe('application/json');
            expect(res.body.error.message).toEqual('Key can\'t be blank');
        }
    });

})