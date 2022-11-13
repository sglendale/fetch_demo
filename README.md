Simple local server with fetch GET request handler.
- An html page sends a fetch request to the server. the server then parses the request if it is a resource that server can reach. Otherwise, an error is returned

"public"
    - Publicly accessible folder
    - includes:
        index.html (automatically served as landing page)
        fetch_json.js (javascript listeners for index.html IDs; included in index.html with src tag)

"private"
    - data not publicly available, but provided by the server on receipt of a fetch request
    - contains only sample.json

"backend.js"
    - Node/express server that handles GET requests

After pulling, run "npm install package-lock.json" to pull dependencies. From a terminal at the base of the project, run "node ./backend.js" and then open a browser to http://localhost:{port} with whatever port you select. The default port defined in backend.js is 8080.

