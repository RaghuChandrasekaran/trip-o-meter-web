import createServer from '../src/createServer';
import request from 'supertest';

const app = createServer();

describe('Basic Setup Test', () => {

    it('Check 404', async () => {
        const res = await request(app.listen())
            .get('/rty');
        expect(res.status).toBe(404);
        expect(res.type).toBe('text/html');
        expect(res.text).toBe("Sorry can't find that!");
    });

    it('Check if status is success', async () => {
        const res = await request(app.listen())
            .get('/status');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body).toEqual({ status: "success" });
    });

    it('Check error handling', async () => {
        try {
            const res = await request(app.listen())
                .get('/status?error=error');
        } catch (error) {
            expect(res.status).toBe(500);
            expect(res.type).toBe('application/json');
            expect(res.body).toEqual({ status: "error" });
        }
    });

})