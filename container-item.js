class ContainerItem extends HTMLElement {
    set container(container) {
      this._container = container;
      this.render();
    }
    
    
    render() {
      this.innerHTML = `
        <div class="container">
        <form>
            <p class="text-center">Subscribe Our Newsletter!</p>
        <div class="form-row justify-content-center">
            <div class="col-auto">
                <label class="sr-only" for="inlineFormInput">${this._container.name}</label>
                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder=${this._container.name}>
            </div>
            <div class="col-auto">
                <label class="sr-only" for="inlineFormInputGroup">${this._container.domain}</label>
                <div class="input-group mb-2">
                <div class="input-group-prepend">
                <div class="input-group-text">@</div>
                </div>
                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="${this._container.domain}">
                </div>
            </div>
            <div class="col-auto">
                <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                <label class="form-check-label" for="autoSizingCheck">
                    Remember me
                </label>
                </div>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
            </div>
        </form>
        </div>
     `;
    }
   }
    
    
   customElements.define("container-item", ContainerItem);