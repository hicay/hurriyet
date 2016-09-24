// hurriyet.js
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
  Articles : function Articles(){
  },
  Columns  : function Columns(){},
  Date  : function Date(){/*sadece date dondurecek*/},
  NewsPhotoGallery : function NewsPhotoGallery(){},
  Page : function Page(){},
  Path : function Path(){}
};

Hurriyet.prototype.Articles = {
  ep = "articles/",
  getAll(opts, callback) {
    if(typeof callback === "undefined" && typeof opts === "function") {
      return callAPI("articles", opts);
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
  getWithId(id,opts,callback){
    if(typeof opts === "function"){
      return callAPI(this.ep+id,opts);
    }
    if (typeof callback === "function") {
      this.ep += id+"?%24select="+opts.select;
      return callAPI(this.ep, callback);
    }
  }
};

Hurriyet.prototype.info = function () {
  //console.log("Hurriyet !");
  //console.log("----");
}


module.exports = Hurriyet;
