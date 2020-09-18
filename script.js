import "./container-list.js";
import containers from "./container.js";

 
const containerListElement = document.createElement("container-list");
containerListElement.containers = containers;
 
 
document.body.appendChild(containerListElement);

