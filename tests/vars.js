module.exports = {
  happy: {
    tpl: "{$.name} is a {$.age} year old with {$.complex.hair}, {$.complex.colour} hair.",
    json: {
      name: "Adam",
      age: 21,
      complex: {
        hair: "luxurious",
        colour: "ginger"
      }
    },
    expected: "Adam is a 21 year old with luxurious, ginger hair."
  },

  undef: {
    tpl: "A {$.wibble} value",
    json: {
    },
    expected: "A  value"
  },

  tags: {
    tpl: "[[$.name]] is a [[$.age]] year old with [[$.complex.hair]], [[$.complex.colour]] hair.",
    json: {
      name: "Adam",
      age: 21,
      complex: {
        hair: "luxurious",
        colour: "ginger"
      }
    },
    expected: "Adam is a 21 year old with luxurious, ginger hair."
  }
};