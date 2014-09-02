module.exports = function(sails) {

  return {

    routes: {

      before: {

        '/*': function redirectToNonWWW(req, res, next) {
          if(req.headers && req.headers.host && req.headers.host.match(/^www/) !== null){
            return res.redirect(301, req.protocol + '://' + req.headers.host.replace(/^www\./, '') + req.url);
          }
          return next();
        }

      }

    }

  }

};