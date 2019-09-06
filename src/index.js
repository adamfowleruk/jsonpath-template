const jp = require('jsonpath');

class Template {
  constructor(templateString) {
    this.templateString = templateString;
    this.pair = ['{','}'];
  }
  tags(left,right) {
    this.pair = [left, right];
    return this;
  }
  apply(context) {
    var lastPos = 0;
    var pos = this.templateString.indexOf(this.pair[0]);
    var newString = "";
    while (-1 !== pos) {
      var endpos = this.templateString.indexOf(this.pair[1], pos + this.pair[1].length);
      if (-1 === endpos) {
        // no end, so throw an exception
        throw new Error("No matching end tag '" + this.pair[1] + "' after start tag at position " + pos);
      }
      newString += this.templateString.substring(lastPos, pos);
      var path = this.templateString.substring(pos + this.pair[0].length, endpos);
      var result = jp.query(context,path,1);
      if (null == result) {
        // not found, i.e. undefined - leave blank
      } else {
        newString += result[0];
      }

      lastPos = endpos + this.pair[1].length;
      pos = this.templateString.indexOf(this.pair[0], lastPos);
    }
    if (lastPos < this.templateString.length) {
      newString += this.templateString.substring(lastPos);
    }
    return newString;
  }
}

module.exports = Template;