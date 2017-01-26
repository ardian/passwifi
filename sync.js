var fs = require('fs')
var glob = require('glob')

// Location for Wi-Fi passwords on Fedora
var fedora_passwords = '/etc/sysconfig/network-scripts/keys*'

// Location for Wi-Fi passwords on Ubuntu
//var ubuntupasswd = '/etc/NetworkManager/system-connections/Prishtina Hackerspace 2'

function readPassword(passwords) {
  // put all password files in an array
  var data = glob.sync(passwords)
  // go over each file, and print the filename + the password
  for (var i in data) {
    // console.log(data[i])
    var fin = fs.readFileSync(data[i], 'utf8')
    var myHash = {[data[i]]: fin}
    console.log(myHash)

  }
}

readPassword(fedora_passwords)
