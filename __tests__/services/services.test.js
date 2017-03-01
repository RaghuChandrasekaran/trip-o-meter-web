import * as India from '../../src/services/cost/IN';

describe('Services Test Suite', () => {

    it('India Price Map Test', async () => {
        let url = India.generateURL();
        expect(typeof url).toBe("string");
        expect(url).toBe("");
    });

});