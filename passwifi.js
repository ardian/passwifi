#!/usr/bin/env node

var fs = require('fs')
var glob = require('glob')
var clc = require('cli-color')

// Location for Wi-Fi passwords on Fedora
var fedoraPasswords = '/etc/sysconfig/network-scripts/keys*'

// Location for Wi-Fi passwords on Ubuntu
// var ubuntupasswd = '/etc/NetworkManager/system-connections/Prishtina Hackerspace 2'

function readPassword (passwords) {
  // put all password files in an array
  var data = glob.sync(passwords)
  // go over each file, and print the filename + the password
  for (var i in data) {
    // console.log(data[i])
    var fin = fs.readFileSync(data[i], 'utf8')
    process.stdout.write('Wi-Fi Name: ' + clc.greenBright(data[i].match(/([A-Z])\w+/g).toString()) + ' Password: ' + clc.greenBright(fin))

    // var myHash = {[data[i]]: fin.match(/[']+/g, 'ardian')}
    // console.log(myHash)
  }
}

readPassword(fedoraPasswords)
