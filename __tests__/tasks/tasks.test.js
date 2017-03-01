import * as priceScrapper from '../../src/tasks/priceScrapper';

describe('Services Test Suite', () => {

    it('Populating Price Map Test', async() => {
        let result = await priceScrapper.populatePriceMap();
        expect(result).toBe(true);
        expect(priceScrapper.checkIfResponseLoaded()).toBe(true);
    });

    it('Populating Price Map Job Test', async() => {
        let job = priceScrapper.job;
        job.start();
        expect(job.running).toBe(true);
    });

    it('Populating Price Map Error Test', async() => {
        try {
            let result = await priceScrapper.populatePriceMap(true);
        } catch (error) {
        	expect(error instanceof Error).toBe(true);
            expect(error.message).toEqual(`Testing error`);
        }
    });

});