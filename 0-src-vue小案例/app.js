// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(8080, () => {
//   console.log('Server running at http://localhost:8080/');
// });

// 使用Node.js发送HTTP GET请求的完整请求头示例：
// const https = require('https');

// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/',
//   method: 'GET',
//   headers: {
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
//     'Accept-Language': 'en-US,en;q=0.5',
//     'Accept-Encoding': 'gzip, deflate',
//     'Connection': 'keep-alive',
//     'Upgrade-Insecure-Requests': '1'
//   }
// };

// const req = https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`);
//   console.log(`headers: ${JSON.stringify(res.headers)}`);
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', (error) => {
//   console.error(error);
// });

// req.end();

// 在此示例中，我们使用https模块建立了一个HTTPS连接。
// 然后，我们定义了要访问的主机名（hostname）、端口（port）、路径（path）、HTTP请求方法（method）和请求头（headers）。
// 该示例使用了多个常见的HTTP请求头:包括User - Agent、Accept - Language、Accept - Encoding、Connection和Upgrade - Insecure - Requests。
// 然后，我们使用https.request()方法来发送请求，并在响应（res）事件处理程序中处理响应。最后调用req.end()方法来结束请求并发送它。





// 使用Node.js发送HTTP POST请求的完整请求头示例：

const https = require('https');

const data = JSON.stringify({
  name: 'John Doe',
  email: 'johndoe@example.com',
  message: 'Hello, World!'
});

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1'
  }
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  console.log(`headers: ${JSON.stringify(res.headers)}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();


// 在此示例中，我们使用https模块建立了一个HTTPS连接。
// 然后定义了要访问的主机名（hostname）、端口（port）、路径（path）、HTTP请求方法（method）、请求头（headers）和包含要发送的数据的数据对象（data）。
// 该示例使用了多个常见的HTTP请求头，包括Content-Type、Content-Length、User-Agent、Accept-Language、Accept-Encoding、Connection 和 Upgrade-nsecure-Requests。
// 然后使用https.request()方法来发送请求，并在响应（res）事件处理程序中处理响应。
// 最后调用req.write()方法将数据发送到服务器，并使用req.end()方法来结束请求并发送它。