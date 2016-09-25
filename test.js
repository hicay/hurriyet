var expect    = require("chai").expect;
var hurriyet = require("./index.js");

var h = new hurriyet('xx');

describe("Article", function() {
  var newsCallback = function(err, data) {
    //expect(err).to.be.null;
    expect(data).to.not.have.property('message');
    done();
  };
  describe("List Article", function() {
    it("Get all articles", function() {
      h.Articles.getAll(newsCallback);
    });
    it("Get limited articles (limit : 4)", function() {
      h.Articles.getAll({limit:4},newsCallback);
    });
    it("Get limited articles' description (limit : 4)", function() {
      h.Articles.getAll({limit:4,select:'Description'},newsCallback);
    });
  });
  describe("Single Article", function() {
    it("Get single article with id (id : 40199111)", function() {
      h.Articles.getWithId(40199111,newsCallback);
    });
    it("Get single article' description (id : 40199111)", function() {
      h.Articles.getWithId(40199111,{select:'Description'},newsCallback);
    });
  });
});
