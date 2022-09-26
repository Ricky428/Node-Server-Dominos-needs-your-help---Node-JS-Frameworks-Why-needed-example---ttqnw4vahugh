var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  console.log(req.url)

  if(req.url==="/welcome") {
    res.setHeader("content-type","text/plain");
    res.statusCode=200;

    res.write("Welcome to Dominos!")
    res.end();
  }
  else if(req.url==="/contact") {
    res.setHeader("content-type","application/json")
    res.statusCode = 200;

    let info = {
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
    }
    let data = JSON.stringify(info);
    res.write(data);
    res.end()
  }
  else {
    res.statusCode = 404;
    return res.end("404");
  }
}

const PORT = 8081;
httpServer.listen(PORT);

module.exports = httpServer;
