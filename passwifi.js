#!/usr/bin/env node
var fs = require('fs');
var glob = require('glob');

// password locations fedora 24
var passwords = '/etc/sysconfig/network-scripts/keys*';



// password locations Ubuntu
var ubuntupasswd = '/etc/NetworkManager/system-connections/Prishtina Hackerspace 2';


function getpass(passwords){
  // Check if Ubuntu or fedora

  // read dir


  glob(passwords, function(er, files) {
    if (files.length > 0){

      // looppasswordspasswords over passwords
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
} else {




}

  });
  console.log("no data");

  glob(ubuntupasswd, function(er, files){
    for (var i in files) {

      // read each password
      fs.readFile(files[i], 'utf8', function(err, ubuntupasswd) {
        if (err) {
          return console.log(err);
        }

        // regex for password
        var reg = /\spsk=(.*)/g;

        var fin = ubuntupasswd.match(reg);
        console.log(String(fin).replace(/[']+/g, ''));
        //console.log(ubuntupasswd);
      })
    }

  })




}

getpass(passwords);
