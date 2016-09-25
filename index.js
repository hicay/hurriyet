var request = require("request");
var endpoint = "https://api.hurriyet.com.tr/v1/";
var options = {
  url: "",
  headers: {
    accept: "application/json",
    apikey: ""
  }
};

// globefunc to api calls
var callAPI = function (url,cb) {
  options.url = endpoint+url;
  function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
      cb(error, JSON.parse(body));
    }else{
      cb(error, "");
    }
  }
  request(options, callback);
};

var Hurriyet = function (apikey) {
  options.headers.apikey = apikey;
};

Hurriyet.prototype = {
  Date  : function Date(callback){
    return callAPI("date/", callback);
  }
};

Hurriyet.prototype.Articles = {
  ep : "articles/",
  getAll : function(opts, callback) {
    if(typeof callback === "undefined" && typeof opts === "function") {
      return callAPI(this.ep, opts);
    } else if (typeof callback === "function") {
      this.ep +="?";
      if(opts.filter){
        this.ep +="%24filter="+opts.filter;
      }
      if(opts.select){
        this.ep +="&%24select="+opts.select;
      }
      if(opts.limit){
        this.ep +="&%24top="+opts.limit;
      }
      return callAPI(this.ep, callback);
    } else {
      return 0;
    }
  },
  getFromId : function(id,opts,callback){
    if(typeof opts === "function"){
      return callAPI(this.ep+id,opts);
    }
    if (typeof callback === "function") {
      this.ep += id+"?%24select="+opts.select;
      return callAPI(this.ep, callback);
    }
  }
};

Hurriyet.prototype.Columns = {
  ep : "columns/",
  getAll : function(opts, callback) {
    if(typeof callback === "undefined" && typeof opts === "function") {
      return callAPI(this.ep, opts);
    } else if (typeof callback === "function") {
      this.ep +="?";
      if(opts.filter){
        this.ep +="%24filter="+opts.filter;
      }
      if(opts.select){
        this.ep +="&%24select="+opts.select;
      }
      if(opts.limit){
        this.ep +="&%24top="+opts.limit;
      }
      return callAPI(this.ep, callback);
    } else {
      return 0;
    }
  },
  getFromId : function(id,opts,callback){
    if(typeof opts === "function"){
      return callAPI(this.ep+id,opts);
    }
    if (typeof callback === "function") {
      this.ep += id+"?%24select="+opts.select;
      return callAPI(this.ep, callback);
    }
  }
};

Hurriyet.prototype.NewsPhotoGallery = {
  ep : "newsphotogalleries/",
  getAll : function(opts, callback) {
    if(typeof callback === "undefined" && typeof opts === "function") {
      return callAPI(this.ep, opts);
    } else if (typeof callback === "function") {
      this.ep +="?";
      if(opts.filter){
        this.ep +="%24filter="+opts.filter;
      }
      if(opts.select){
        this.ep +="&%24select="+opts.select;
      }
      if(opts.limit){
        this.ep +="&%24top="+opts.limit;
      }
      return callAPI(this.ep, callback);
    } else {
      return 0;
    }
  },
  getFromId : function(id,opts,callback){
    if(typeof opts === "function"){
      return callAPI(this.ep+id,opts);
    }
    if (typeof callback === "function") {
      this.ep += id+"?%24select="+opts.select;
      return callAPI(this.ep, callback);
    }
  }
};

Hurriyet.prototype.Writers = {
  ep : "writers/",
  getAll : function(opts, callback) {
    if(typeof callback === "undefined" && typeof opts === "function") {
      return callAPI(this.ep, opts);
    } else if (typeof callback === "function") {
      this.ep +="?";
      if(opts.filter){
        this.ep +="%24filter="+opts.filter;
      }
      if(opts.select){
        this.ep +="&%24select="+opts.select;
      }
      if(opts.limit){
        this.ep +="&%24top="+opts.limit;
      }
      return callAPI(this.ep, callback);
    } else {
      return 0;
    }
  },
  getFromId : function(id,opts,callback){
    if(typeof opts === "function"){
      return callAPI(this.ep+id,opts);
    }
    if (typeof callback === "function") {
      this.ep += id+"?%24select="+opts.select;
      return callAPI(this.ep, callback);
    }
  }
};

module.exports = Hurriyet;
