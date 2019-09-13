import * as firebase from 'firebase';
import config from './firebase-config';
const app = firebase.initializeApp(config);
const db = app.database();

export const set = async (path, object) => {
  await db.ref(path).set(object);
};

export const get = path => {
  return new Promise((resolve, reject) => {
    db.ref(path).once(
      'value',
      function(data) {
        return resolve(data);
      },
      function(err) {
        return reject(err);
      }
    );
  });
};

export const push = async (path, object) => {
  await db.ref(path).push(object);
};
