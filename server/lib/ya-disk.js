'use strict';
var request = require('request');

const BASE_URL = 'https://cloud-api.yandex.net/v1/disk';

class yaDisk {

  static getFileInfo(token, pathArg) {
    return new Promise( (resolve, reject) => {
      request({
        url: BASE_URL + '/resources',
        method: 'GET',
        headers: {
          Authorization: 'OAuth ' + token
        },
        qs: {
          path: pathArg
        },
      }, (err, res, body) => {
        if(!err && res.statusCode === 200) {
          resolve(body);
        } else {
          reject( err || res.statusCode );
        }
      });
    })

  }
}

module.exports = yaDisk;
