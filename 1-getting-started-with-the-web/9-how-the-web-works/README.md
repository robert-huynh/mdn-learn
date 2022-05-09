# How the web works

## What happens when you type address into your browser?

1. Your browser use DNS to search your "real" IP of the server that has your website.
2. Your browser will send HTTP message to server, requests a copy of website through TCP/IP.
3. If the server approves, it will send to client "200 OK" and give it small chunks or the server will send a message "404 not found".
4. The browser assembles the small chunks and displays it. 