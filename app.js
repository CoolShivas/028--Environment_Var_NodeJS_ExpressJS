import express from "express";

const app = express();

app.get("/", (request, response) => {
    response.send("Welcome to the Home Page.");
});

const PORT = 1234;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
// // // Open the terminal and write down the following commands to run/start the server :-
// // // Firstly, clear all the things and ls to check the folder;
// // // Secondly, node --watch app.js to start the server;
// // // Finally, your server started :- Server running at 1234;
// // // Now, open the browser and in url write localhost:1234
// // // You will get the result on the display as :- Welcome to the Home Page.
