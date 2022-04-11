
const fs = require("fs").promises;
const arguments = process.argv.slice(2);

async function readFile(file) {
    const data = await fs.readFile(file);
    const dataToString = data.toString();

    console.log(dataToString);
};

async function writeFile(content) {
    await fs.writeFile("./spesa.txt", content, {flag: 'a+'})
}

async function writeAndRead(argomento1, argomento2) {
    await writeFile(argomento1 + " " + argomento2 + "\n");
    await readFile("spesa.txt");
}

//writeAndRead(`${arguments[0]}`, `${arguments[1]}`);

const data = fs.readFile("spesa.txt");
const dataToString = data.toString();
const htmlString = dataToString.split("\n").map((line) => "<li>" + line + "</li>").join("");

