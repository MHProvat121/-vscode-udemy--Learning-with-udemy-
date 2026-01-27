import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([
        {
            message: "Type in your URL",
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;

        // Generate PNG QR (copied from  qr-image npm package)
        const qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream("qr-img.png"));

        // Save URL text (copied from fs npm package)
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("PNG and TXT files created");
        });
    });

    // in terminal write node .\index.js