import xml2js from 'xml2js';

const parser = new xml2js.Parser();

function parseXmlData(data, extractFunction) {
  return new Promise((resolve, reject) => {
    parser.parseString(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(extractFunction(result));
      }
    });
  });
}

export default parseXmlData;
