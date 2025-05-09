import express from "express";

const app = express();

app.get("/", (request, response) => {
    response.send("Welcome to the Home Page.");
});

app.get("/about", (request, response) => {
    response.send("Welcome to the About Page.");
});

app.get("/contact", (request, response) => {
    return response.send(`<div class="container">
        <h1>URL Shortener</h1>
        <form id="shorten-form">
            <div>
                <label for="url">Enter URL :-</label>
                <input type="url" name="url" id="url" required>
            </div>
            <div>
                <label for="shortCode">Enter ShortCode :-</label>
                <input type="text" name="shortCode" id="shortCode" required>
            </div>
            <button type="submit">Shorten</button>
        </form>
        <h2>Shortened URLs</h2>
        <ul id="shortened-urls"></ul>
    </div>`);
});


// // // Use of Environment Variable;
// const PORT = 1234;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
// // // Open the terminal and write down the following commands to run/start the server :-
// // // Firstly, clear all the things and ls to check the folder;
// // // Secondly, without using Powershell and Command Prompt Terminal to start the server;
// // // Thirdly, create .env file and add dev to package.json (Have a look on both the files);
// // // Fourthly, write the command on Powershell Terminal as npm run dev 
// // // Finally, your server started :- Server running at 1729
// // // Now, open the browser and in url write localhost:1729
// // // You will get the result on the display as :- Welcome to the Home Page.
// // // As well as you can switch the pages as localhost:1729/about or localhost:1729/contact;
