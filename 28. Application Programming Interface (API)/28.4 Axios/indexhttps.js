import express from "express";
import bodyParser from "body-parser";
import https from "https";

const app = express();
const port = 3000;

// Set the view engine to ejs so Express knows how to render the files
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// UPDATED: Removed the leading "/" that was before "app.get"
app.get("/", (req, res) => {
    const options = {
        hostname: "bored-api.appbrewery.com",
        path: "/random",
        method: "GET",
    };

    const request = https.request(options, (response) => {
        let data = "";
        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", () => {
            try {
                const result = JSON.parse(data);
                // UPDATED: Changed 'data' to 'result'. 
                // 'data' is the raw string, 'result' is the actual JavaScript object you can use in EJS.
                res.render("index.ejs", { activity: result });
            } catch (error) {
                console.error("Failed to parse response:", error.message);
                res.status(500).send("Failed to fetch activity. Please try again.");
            }
        });
    });

    request.on("error", (error) => {
        console.error("Failed to make request:", error.message);
        res.status(500).send("Failed to fetch activity. Please try again.");
    });

    request.end();
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});