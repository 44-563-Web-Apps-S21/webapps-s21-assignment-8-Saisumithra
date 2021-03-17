const http = require('http')    //Pull in a useful node package

                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      console.log("Request recieved")
      console.log(req.url)
      // Build a fake url so we can get the search parameters using a URL object
      fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

      
      console.log("Queries: " + search_params)

      if (req.method === 'GET' ) {
       
          // console.log("Look for query parameter data: " + search_params.get("data"))
          var x = Number(search_params.get("x"));
          var y = Number(search_params.get("y"));

          console.log(x);
          console.log(y);
         
          console.log("Look for query parameter data: " + search_params.get("x"));
          console.log("Look for query parameter data: " + search_params.get("y"));
          
          // Process the queries here
          res.statusCode = 200      //code for OK
          res.setHeader('Content-Type', 'text/plain') 
          res.write(` Math.cos(${x}) is ${Math.cos(x)} and Math.cos(${y}) is ${Math.cos(y)} `)
          res.end();
        
        
      } else {
        console.log("Status 404")
        res.statusCode = 404;
        res.end();
      }

    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})