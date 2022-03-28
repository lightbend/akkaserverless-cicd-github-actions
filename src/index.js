import { AkkaServerless } from "@lightbend/kalix-javascript-sdk";
import generatedComponents from "../lib/generated/index.js";

const server = new AkkaServerless();
generatedComponents.forEach((component) => {
  server.addComponent(component);
});

server.start();