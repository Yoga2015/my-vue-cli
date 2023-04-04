// 使用Node.js编写上线的服务器的示例：

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} ${req.method} received.`);

  // Handles GET requests for the home page
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Internal Server Error: ${err}`);
      } else {
        res.end(data);
      }
    });
  }
  // Handles POST requests for form submissions
  else if (req.url === '/' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => { body += chunk.toString(); });
    req.on('end', () => {
      console.log(`Request body: ${body}`);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Form submitted successfully with body: ${body}`);
    });
  }
  // Handles 404 page not found errors
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Error 404: Page not found.`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// 在此示例中，我们使用http模块创建了一个服务器，并将其绑定到本地主机（hostname）的端口（port）上。
// 我们创建了一个请求（req）事件处理程序来处理来自客户端的请求，并设置了适当的响应（res）来响应该请求。

// 我们处理了两种类型的请求。首先，我们处理GET请求以呈现主页（index.html），并使用fs.readFile()方法读取并返回HTML文件。
// 然后，我们处理POST请求以处理表单提交，并在响应中返回提交的表单数据。最后，我们处理404错误页面未找到错误。

// 最后，我们使用server.listen()方法开始侦听HTTP请求，并在“ http://127.0.0.1:3000/”上启动上线的服务器。