import { Kalix } from "@kalix-io/kalix-javascript-sdk";
import generatedComponents from "../lib/generated/index.js";

const server = new Kalix();
generatedComponents.forEach((component) => {
  server.addComponent(component);
});

server.start();