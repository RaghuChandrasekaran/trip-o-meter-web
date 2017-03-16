import fetch from 'Utilities/fetch';
import parser from 'Utilities/xml-parser';
import scheduler from 'Utilities/scheduler';

describe('Utils Test Suite', () => {

    it('Fetch: Test fetch get request', async () => {
        let testurl = "https://www.google.co.in";
        let res = await fetch.get(testurl);
        expect(typeof res).toBe("string");
    });

    it('Parser: Parse xml and get value', async () => {
        let testxml = "<markers><marker townname='Test' ms='22' hsd='24' ></marker></markers>";
        let extractFunction = (result) => {
            return result.markers.marker.map((value) => {
                return {
                    city: value["$"].townname,
                    petrol: value["$"].ms,
                    diesel: value["$"].hsd
                }
            });
        };
        let result = await parser(testxml, extractFunction);
        expect(result).toEqual([{ city: "Test", petrol: "22", diesel: "24" }]);
    });

    it('Parser: Handle error when parsing', async () => {
        try {
            let testxml = "<markers><marker townname='Test' ms='22' hsd='24' ></broken></markers>";
            let result = await parser(testxml, (result) => console.log(result));
        } catch (error) {
            expect(error instanceof Error).toBe(true);
            expect(error.message).toEqual(`Unexpected close tag\nLine: 0\nColumn: 60\nChar: >`);
        }
    });

    it('Scheduler: Check whether its a valid Job & running', async () => {
        try {
            let testFunction=() => console.log("JOB*****JOB");
            let job=scheduler(testFunction,'* * * * *');
            job.start();
            expect(job.running).toBe(true);
        } catch (error) {
            console.error(error);
        }
    });

    it('Scheduler: Handle error when creating job', async () => {
        try {
            let testFunction=() => console.log("JOB*****JOB");
            let job=scheduler(testFunction,'invalid');
        } catch (error) {
            expect(error instanceof Error).toBe(true);
            expect(error.message).toEqual(`Unknown alias: inv`);
        }
    });

});