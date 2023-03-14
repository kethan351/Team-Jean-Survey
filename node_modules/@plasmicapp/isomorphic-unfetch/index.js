function r(m){return m && m.default || m;}
module.exports = (typeof process == 'undefined'
		? global.fetch || r(require('unfetch'))
		: function(url, opts) {
		  return r(require('node-fetch'))(String(url).replace(/^\/\//g,'https://'), opts);
		}
);
