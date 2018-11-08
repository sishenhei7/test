import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jsonp from 'jsonp';
import nock from 'nock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

var jsonpData = () => {
    return jsonp(host + url, opts, (err, data) => {
      return data;
    })
}

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
});

describe('test-jsonp', () => {
    // afterEach(() => {
    //     nock.cleanAll();
    // });
    // afterAll(() => {
    //     nock.restore();
    // });

    // 测试nock是否能模拟jsonp
    test('should get successful status', done => {

        const host = '//dora.webcgi.163.com';
        const url = '/api/213_792_2018_09_14/active_check';
        const opts = {
            account: '316547491'
        };

        // nock(host)
        //     .get(url)
        //     .reply(function(uri, requestBody, cb) {
        //         setTimeout(function() {
        //             cb(null, [201, 'THIS IS THE REPLY BODY'])
        //         });
        //     });

        function callback(err, data) {
            expect(data.status).toBe(201);
            done();
        }

        jsonp('//dora.webcgi.163.com/api/213_792_2018_09_14/active_check', opts, callback);
    })
});
