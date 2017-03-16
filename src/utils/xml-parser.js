import xml2js from 'xml2js';
import Logger from 'Utilities/logger';

const LOGGER = new Logger(' : XML Logger');

const parser = new xml2js.Parser();

function parseXmlData(data, extractFunction) {
  return new Promise((resolve, reject) => {
    parser.parseString(data, (err, result) => {
      if (err) {
        LOGGER.error(err);
        reject(err);
      } else {
        resolve(extractFunction(result));
      }
    });
  });
}

export default parseXmlData;
