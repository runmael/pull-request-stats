const crypto = require('crypto');

// A list of organizations which are sponsoring this project outside Github 💙
// (hashed to keep them private)
const externalSponsors = new Set([
  '4cf2d30b6327df1b462663c7611de22f',
  'cf681c59a1d2b1817befafc0d9482ba1',
  'b9cf4cc40150a529e71058bd59f0ed0b',
  '9d711ff8c0d5639289cdebfe92b11ecb',
]);

const getHash = (str) => crypto
  .createHash('md5')
  .update(str.toLowerCase())
  .digest('hex');

module.exports = (logins) => [...(logins || [])]
  .some((login) => externalSponsors.has(getHash(login)));
