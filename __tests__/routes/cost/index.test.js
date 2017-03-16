import createServer from '../../../src/createServer';
import request from 'supertest';

const app = createServer();

describe('Cost Price Route Test', () => {

    it('Default route', async () => {
        try {
            const res = await request(app.listen())
                .get('/cost');
        } catch (error) {
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(res.body.data).toEqual({ countries: ['India'] });
        }
    });

})