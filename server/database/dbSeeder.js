module.exports.stringMaker = function(stringLength) {
  var words = ['this', 'property', 'great', 'has', 'view', 'amenities', 'awesome', 'cotttage', 'close', 'check-in', 'termites', 'pool'];
  var randomString = '';
  for (let word = 0; word < stringLength; word++) {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    randomString += randomWord;
  }
  return randomString;
};