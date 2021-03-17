const http = require('http')    //Pull in a useful node package
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port
const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const advices = ["Have the courage to live a life true to yourself, not the life others expect of you.",
                     "Never attribute to malice that which can be adequately explained by stupidity.",
                     "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
                     "Don’t make decisions when you’re angry. Don’t make promises when you’re happy.",
                     "Never argue with a stupid person, they’ll drag you down to their level and beat you with experience.",
                     "Only pack what you can carry yourself.",
                ]
                let randomIndex = Math.floor(Math.random() * advices.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${advices[randomIndex]}`)
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