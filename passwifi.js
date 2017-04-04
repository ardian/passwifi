#!/usr/bin/env node

var fs = require('fs')
var glob = require('glob')
var clc = require('cli-color')
var getos = require('getos')

// Check for linux distro

getos(function(e,os) {
  if(e) return console.log(e)
  version = console.log("Your OS is:" +JSON.stringify(os))
})


// Location for Wi-Fi passwords on Fedora
// var fedoraPasswords = '/etc/sysconfig/network-scripts/keys*'

// Location for Wi-Fi passwords on Ubuntu
var ubuntupasswd = '/etc/NetworkManager/system-connections/*'

function readPassword (passwords) {
  // put all password files in an array
  var passwordFiles = glob.sync(passwords)
  // go over each file, and print the filename + the password
  for (var i in passwordFiles) {
    var fin = fs.readFileSync(passwordFiles[i], 'utf8')

    process.stdout.write('Wi-Fi Name: ' + clc.greenBright(fin.match(/ssid\s*=\s*(.*)/g).toString()) +
' Password: ' + clc.greenBright(fin.match(/psk\s*=\s*(.*)/g).toString()) + '\n'
)
  }
}

readPassword(ubuntupasswd)
