const http = require('http');
const fs = require('fs');//引入文件读取模块


// 修改此参数 对应项目路径
const host = 'D:/Development/qiuer-web-www/dist';

const documentRoot = host;

const server = http.createServer(function (req, res) {

  const url = req.url;

  const file = (documentRoot + url).split('?')[0];
  console.log(url);


  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHeader(404, {
        'content-type': 'text/html;charset="utf-8"'
      });
      res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
      res.end();
    } else {
      res.writeHeader(200);
      res.write(data);
      res.end();
    }

  });

}).listen(8081);

console.log('服务器开启成功');