var fs = require('fs')
var path = require('path')
var test = require('tape')
var spawn = require('tape-spawn')

test('dat add -h', function (t) {
  var st = spawn(t, 'node cli.js add -h')
  st.stderr.match(fs.readFileSync(path.join('usage', 'add.txt')).toString() + '\n', 'usage matched')
  st.stdout.empty()
  st.end()
})

test('dat init -h', function (t) {
  var st = spawn(t, 'node cli.js init -h')
  st.stderr.match(fs.readFileSync(path.join('usage', 'init.txt')).toString() + '\n', 'usage matched')
  st.stdout.empty()
  st.end()
})

test('dat cat -h', function (t) {
  var st = spawn(t, 'node cli.js cat -h')
  st.stderr.match(fs.readFileSync(path.join('usage', 'cat.txt')).toString() + '\n', 'usage matched')
  st.stdout.empty()
  st.end()
})