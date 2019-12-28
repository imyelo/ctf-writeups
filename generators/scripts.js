const gulp = require('gulp')
const path = require('path')

const resolve = (p) => path.resolve(__dirname, p)

const args = process.argv.slice(2)

// e.g.: `node ./generators/scripts.js create ddctf-2019/web1`
if (args[0] === 'create' && args[1]) {
  gulp.src(resolve('create/template/**/*'))
    .pipe(gulp.dest(resolve(`../packages/${args[1]}`)))

  console.log('created')
  return
}

console.log('invalid options')
