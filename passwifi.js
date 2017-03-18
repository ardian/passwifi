#!/usr/bin/env node

var fs = require('fs')
var glob = require('glob')
var clc = require('cli-color')

// Location for Wi-Fi passwords on Fedora
//var fedoraPasswords = '/etc/sysconfig/network-scripts/keys*'

// Location for Wi-Fi passwords on Ubuntu
var ubuntupasswd = '/etc/NetworkManager/system-connections/*'

function readPassword (passwords) {
  // put all password files in an array
  var data = glob.sync(passwords)
  // go over each file, and print the filename + the password
  for (var i in data) {
      var fin = fs.readFileSync(data[i], 'utf8')
      console.log("OBJ" + fin);
  }
}

readPassword(ubuntupasswd)
