const express = require('express')
const app = express()
const fs = require('fs');

console.log("Acessando arquivo...");

console.log("");

fs.readFile('teste.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Arquivo aberto com sucesso !!!");
    console.log("");

    console.log("Conteúdo do arquivo: " + data.toString());
 });