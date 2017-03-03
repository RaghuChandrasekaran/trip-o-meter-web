const istanbul = require('istanbul');
const collector = new istanbul.Collector();
const reporter = new istanbul.Reporter();

const sync = false;

const serverCoverage = require('../server-coverage/coverage-final.json');
const clientCoverage = require('../client/coverage/coverage-final.json');

collector.add(serverCoverage);
collector.add(clientCoverage);

reporter.addAll(["json", "lcov", "text"]);

reporter.write(collector, sync, function () {
    console.log('All reports generated');
});