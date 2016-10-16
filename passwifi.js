#!/usr/bin/env node
var fs = require('fs');
var glob = require('glob');

// password locations fedora 24
var passwords = '/etc/sysconfig/network-scripts/keys*';

// password locations Ubuntu
//var ubuntupasswd = '/etc/NetworkManager/system-connections/Prishtina Hackerspace 2';


function getpass(passwords){
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
}

getpass(passwords);
