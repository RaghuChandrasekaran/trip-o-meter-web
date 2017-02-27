import * as India from '../../src/services/cost/IN';

describe('Services Test Suite', () => {

    it('India Price Map Test', async () => {
        let priceMap = await India.populatePriceMap();
        expect(typeof priceMap).toBe("object");
        expect(priceMap instanceof Map).toBe(true);
        expect(priceMap.size > 0).toBe(true);
        expect(priceMap.get('metro') instanceof Array).toBe(true);
    });

});