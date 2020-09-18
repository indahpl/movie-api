import "./container-item.js";

 
class ContainerList extends HTMLElement {
 set containers(containers) {
   this._containers= containers;
   this.render();
 }
 
 
 render() {
   this._containers.forEach(container => {
     const containerItemElement = document.createElement("container-item");
     // memanggil fungsi setter container() pada container-item.
     containerItemElement.container = container;
     this.appendChild(containerItemElement);
   })
 }
}
 
customElements.define("container-list", ContainerList);