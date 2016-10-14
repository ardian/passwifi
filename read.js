fs = require('fs')
glob = require('glob')

// password locations fedora 24
passwords = '/etc/sysconfig/network-scripts/keys*';
// read dir
glob(passwords, function(er, files) {
  
  // loop over passwords
  for (var i in files) {

  	// read each password
    fs.readFile(files[i], 'utf8', function(err, passwords) {
      if (err) {
        return console.log(err);
      }

      // regex for password
      var reg = /'(.*?)'/g;

      var fin = passwords.match(reg);
      console.log(String(fin).replace(/[']+/g, ''));


    })

  }
});
