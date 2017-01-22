var fs = require('fs')
var glob = require('glob')

var passwords = '/etc/sysconfig/network-scripts/keys*'

var data = glob.sync(passwords)
for (var i in data) {
  console.log(data[i])
  var fin = fs.readFileSync(data[i], 'utf8')

  process.stdout.write(fin)
}

