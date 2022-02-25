var fs = require('fs');
var path = require('path');

function change(metadata, collectionId) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, 'interfaces', 'ERC721Tradable.sol'), 'utf8', function (err,data) {
      if (err) {
        reject(err);
        return;
      }
      var result = data.replace('https://jikf07b4s6bv.usemoralis.com/metadata.json', metadata);

      fs.writeFile(path.resolve(__dirname, 'contracts', `ERC721Tradable${collectionId}.sol`), result, 'utf8', function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(path.resolve(__dirname, 'contracts', `ERC721Tradable${collectionId}.sol`));
      });
    });
  })
}


module.exports = {
  change
};