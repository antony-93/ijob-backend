import "reflect-metadata";
import express from "express";

const app = express(),
    port: number = 3000;

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`)
})