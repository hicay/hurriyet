var expect    = require("chai").expect;
var Hurriyet = require("./index.js");

var h = new Hurriyet("xx");
var newsCallback = function(err, data) {
  //expect(err).to.be.null;
  expect(data).to.not.have.property("message");
};
describe("Articles", function() {

  describe("List Articles", function() {
    it("Get all articles", function() {
      h.Articles.getAll(newsCallback);
    });
    it("Get limited articles (limit : 4)", function() {
      h.Articles.getAll({limit:4},newsCallback);
    });
    it("Get limited articles' description (limit : 4)", function() {
      h.Articles.getAll({limit:4,select:"Description"},newsCallback);
    });
  });
  describe("Single Article", function() {
    it("Get single article with id (id : 40199111)", function() {
      h.Articles.getFromId(40199111,newsCallback);
    });
    it("Get single article's description (id : 40199111)", function() {
      h.Articles.getFromId(40199111,{select:"Description"},newsCallback);
    });
  });
});

describe("Columns", function() {
  describe("List Columns", function() {
    it("Get all columns", function() {
      h.Columns.getAll(newsCallback);
    });
    it("Get limited columns (limit : 4)", function() {
      h.Columns.getAll({limit:4},newsCallback);
    });
    it("Get limited columns' fullname and title (limit : 4)", function() {
      h.Columns.getAll({limit:4,select:"Fullname,Title"},newsCallback);
    });
  });
  describe("Single Column", function() {
    it("Get single column with id (id : 40190106)", function() {
      h.Columns.getFromId(40190106,newsCallback);
    });
    it("Get single column's text (id : 40199111)", function() {
      h.Columns.getFromId(40190106,{select:"Text"},newsCallback);
    });
  });
});
