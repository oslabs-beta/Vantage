process.env.NODE_ENV = 'testing';

const SAMPLE_DATA_FILE = './__tests__/sample_lhr.json';
const DATA_STORE_FILE = './__tests__/data_store.json';
const snapshot = require("../package/lighthouse/lighthouse");
const fs = require('fs');

describe("data_store.json tests", () => {
  let data_store;
  let json; 

  describe("Export a single run", () => {
    beforeEach(async () => {
      const sample_lhr = JSON.parse(fs.readFileSync(SAMPLE_DATA_FILE));
      await snapshot.generateUpdatedDataStore(sample_lhr, '2021-01-01 00:00:00', '/myEndpoint', 'Sample Commit', true, DATA_STORE_FILE);
      data_store = fs.readFileSync(DATA_STORE_FILE);
      json = JSON.parse(data_store);
    });

    test("Run list is and has correct value", () => {
      expect(json['run-list'].length).toEqual(1);
      expect(json['run-list'][0]).toEqual('2021-01-01 00:00:00');
    });

    test("Endpoints list is present and has correct value", () => {
      expect(json['endpoints'].length).toEqual(1);
      expect(json['endpoints'][0]).toEqual('/myEndpoint');
    });

    test("Commit list is present and has correct value", () => {
      expect(json['commits']['2021-01-01 00:00:00']).toBeDefined();
      expect(json['commits']['2021-01-01 00:00:00']).toEqual('Sample Commit');
    });

    test("Overall scores are present", () => {
      expect(json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['performance']).toBeDefined();
      expect(json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['accessibility']).toBeDefined();
      expect(json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['best-practices']).toBeDefined();
      expect(json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['seo']).toBeDefined();
      expect(json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['pwa']).toBeDefined();
    });

    test("Overall scores are all numbers", () => {
      expect(typeof json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['performance']).toBe('number');
      expect(typeof json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['accessibility']).toBe('number');
      expect(typeof json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['best-practices']).toBe('number');
      expect(typeof json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['seo']).toBe('number');
      expect(typeof json['overall-scores']['/myEndpoint']['2021-01-01 00:00:00']['pwa']).toBe('number');
    });

    test("Web Vitals scores are all present", () => {
      expect(json['web-vitals']['first-contentful-paint']['results']['/myEndpoint']['2021-01-01 00:00:00']).toBeDefined();
      expect(json['web-vitals']['interactive']['results']['/myEndpoint']['2021-01-01 00:00:00']).toBeDefined();
      expect(json['web-vitals']['speed-index']['results']['/myEndpoint']['2021-01-01 00:00:00']).toBeDefined();
      expect(json['web-vitals']['total-blocking-time']['results']['/myEndpoint']['2021-01-01 00:00:00']).toBeDefined();
      expect(json['web-vitals']['largest-contentful-paint']['results']['/myEndpoint']['2021-01-01 00:00:00']).toBeDefined();
      expect(json['web-vitals']['cumulative-layout-shift']['results']['/myEndpoint']['2021-01-01 00:00:00']).toBeDefined();
    });

    test("Web Vitals scores are all numbers", () => {
      expect(typeof json['web-vitals']['first-contentful-paint']['results']['/myEndpoint']['2021-01-01 00:00:00']['numericValue']).toBe('number');
      expect(typeof json['web-vitals']['interactive']['results']['/myEndpoint']['2021-01-01 00:00:00']['numericValue']).toBe('number');
      expect(typeof json['web-vitals']['speed-index']['results']['/myEndpoint']['2021-01-01 00:00:00']['numericValue']).toBe('number');
      expect(typeof json['web-vitals']['total-blocking-time']['results']['/myEndpoint']['2021-01-01 00:00:00']['numericValue']).toBe('number');
      expect(typeof json['web-vitals']['largest-contentful-paint']['results']['/myEndpoint']['2021-01-01 00:00:00']['numericValue']).toBe('number');
      expect(typeof json['web-vitals']['cumulative-layout-shift']['results']['/myEndpoint']['2021-01-01 00:00:00']['numericValue']).toBe('number');
    });

    // Additional Tests:  Remainder of audit categories
    
    afterEach(() => {
      // Delete the data_store file
      fs.unlinkSync(DATA_STORE_FILE);
    });
  });


  const customCountTest = function(count) {
    describe(`Export multiple runs: ${count} runs`, () => {
    let commits, commitMsgs, endpoints;
    beforeEach(async () => {
      
      commits = ['2021-01-01 00:00:00', '2021-01-02 00:00:00', '2021-01-03 00:00:00', '2021-01-04 00:00:00', '2021-01-05 00:00:00', '2021-01-06 00:00:00', '2021-01-07 00:00:00', '2021-01-08 00:00:00', '2021-01-09 00:00:00', '2021-01-10 00:00:00', '2021-01-11 00:00:00', '2021-01-12 00:00:00', '2021-01-13 00:00:00', '2021-01-14 00:00:00', '2021-01-15 00:00:00'];
      commitMsgs = ['Commit 1', 'Commit 2', 'Commit 3', 'Commit 4', 'Commit 5', 'Commit 6', 'Commit 7', 'Commit 8', 'Commit 9', 'Commit 10', 'Commit 11', 'Commit 12', 'Commit 13', 'Commit 14', 'Commit 15']; 
      endpoints = ['/', '/myPage', '/myPage/blog'];

      for (let i = 0; i < count; i++) {
          for (let j = 0; j < endpoints.length; j++) {
            const sample_lhr = await JSON.parse(fs.readFileSync(SAMPLE_DATA_FILE));
            await snapshot.generateUpdatedDataStore(sample_lhr, commits[i], endpoints[j], commitMsgs[i], true, DATA_STORE_FILE);
          }
      }
      data_store = fs.readFileSync(DATA_STORE_FILE);
      json = JSON.parse(data_store);
    });

    test("Run list exists and has correct value", () => {
      expect(json['run-list'].length).toEqual(count > 10 ? 10 : count);
      for (let i = count - 1; i >= 0 && i >= count - 10; i--) {
        expect(json['run-list']).toContain(commits[i]);
      }
    });

    test("Endpoints list is present and each has correct value", () => {
      expect(json['endpoints'].length).toEqual(endpoints.length);
      for (let i = 0; i < endpoints.length; i++) {
         expect(json['endpoints']).toContain(endpoints[i]);
      }
    });

    test("Commit list is present and each key has correct value", () => {
      expect(Object.keys(json['commits']).length).toEqual(count > 10 ? 10 : count);

      for (let i = count - 1; i >= 0 && i >= count - 10; i--) {
        expect(json['commits'][commits[i]]).toBeDefined();
        expect(json['commits'][commits[i]]).toEqual(commitMsgs[i]);
      }
      
    });

    test("Overall scores are present for each commit", () => {
      
      for (const endpoint of endpoints) {
        for (let i = count - 1; i >= 0 && i >= count - 10; i--) {
          expect(json['overall-scores'][endpoint][commits[i]]['performance']).toBeDefined();
          expect(json['overall-scores'][endpoint][commits[i]]['accessibility']).toBeDefined();
          expect(json['overall-scores'][endpoint][commits[i]]['best-practices']).toBeDefined();
          expect(json['overall-scores'][endpoint][commits[i]]['seo']).toBeDefined();
          expect(json['overall-scores'][endpoint][commits[i]]['pwa']).toBeDefined();
        }
      }
    });

    test("Overall scores are all numbers", () => {
      for (const endpoint of endpoints) {
        for (let i = count - 1; i >= 0 && i >= count - 10; i--) {
          expect(typeof json['overall-scores'][endpoint][commits[i]]['performance']).toBe('number');
          expect(typeof json['overall-scores'][endpoint][commits[i]]['accessibility']).toBe('number');
          expect(typeof json['overall-scores'][endpoint][commits[i]]['best-practices']).toBe('number');
          expect(typeof json['overall-scores'][endpoint][commits[i]]['seo']).toBe('number');
          expect(typeof json['overall-scores'][endpoint][commits[i]]['pwa']).toBe('number');
        }
      }
    });

    test("Web Vitals scores are all present", () => {
      for (const endpoint of endpoints) {
        for (let i = count - 1; i >= 0 && i >= count - 10; i--) {
          expect(json['web-vitals']['first-contentful-paint']['results'][endpoint][commits[i]]).toBeDefined();
          expect(json['web-vitals']['interactive']['results'][endpoint][commits[i]]).toBeDefined();
          expect(json['web-vitals']['speed-index']['results'][endpoint][commits[i]]).toBeDefined();
          expect(json['web-vitals']['total-blocking-time']['results'][endpoint][commits[i]]).toBeDefined();
          expect(json['web-vitals']['largest-contentful-paint']['results'][endpoint][commits[i]]).toBeDefined();
          expect(json['web-vitals']['cumulative-layout-shift']['results'][endpoint][commits[i]]).toBeDefined();
        }
      }
    });

    test("Web Vitals scores are all numbers", () => {
      for (const endpoint of endpoints) {
        for (let i = count - 1; i >= 0 && i >= count - 10; i--) {
          expect(typeof json['web-vitals']['first-contentful-paint']['results'][endpoint][commits[i]]['numericValue']).toBe('number');
          expect(typeof json['web-vitals']['interactive']['results'][endpoint][commits[i]]['numericValue']).toBe('number');
          expect(typeof json['web-vitals']['speed-index']['results'][endpoint][commits[i]]['numericValue']).toBe('number');
          expect(typeof json['web-vitals']['total-blocking-time']['results'][endpoint][commits[i]]['numericValue']).toBe('number');
          expect(typeof json['web-vitals']['largest-contentful-paint']['results'][endpoint][commits[i]]['numericValue']).toBe('number');
          expect(typeof json['web-vitals']['cumulative-layout-shift']['results'][endpoint][commits[i]]['numericValue']).toBe('number');
        }
      }
      
    });

    // Additional future tests:  Testing of each audit category for numbers and correct data type
    
      afterEach(() => {
        // Delete the data_store file
        fs.unlinkSync(DATA_STORE_FILE);
      });
    });
  }
  customCountTest(9);
  customCountTest(14);
  customCountTest(15);
  
});
