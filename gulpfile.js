const { src, dest, series } = require('gulp')
const fs = require('fs')
const through2 = require('through2');

function generateMd(){
  return src('./src/lib/**/*.md').pipe(through2.obj(function (file, _, cb) {
    let filename = file.path.split('\\').pop()
    if (file.isBuffer()) {
      try{
        fs.readFile(`./website/components/${filename}`, (err, data) => {
          if (err) throw err;
          let fileContent = file.contents.toString() + '\n\n' + data
          fs.writeFile(`./website/components/${filename}`, fileContent , (err)=>{
            if(err)return console.error(err)
            console.log(`写入 ${filename} 成功`)
            cb()
          })
        });
      }catch(exception){
        cb()
      }
    }
  }))
}

function copyFile(){
  return src(['./dist/*.js','./dist/*.css','./document/index.html']).pipe(dest('./website/'))
}

exports.default = series(generateMd,copyFile)