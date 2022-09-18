class PrintName extends HTMLElement {
    constructor() {
        super();
        this._template = document.createElement('template');
        this._style = document.createElement('style');
        this._name = "Default Name";
        this._style.innerHTML = `
          span{
            color: tomato;
          }
       `
        this._template.innerHTML = `
       <div>
       You have passed name as: 
         <span id="name"></span>
       </div>
       `
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this._style);
        this.shadowRoot.appendChild(this._template.content.cloneNode(true));
    }
    connectedCallback() {
        this._name = this.getAttribute('name');
        if (this._name) {
            this.shadowRoot.getElementById('name').innerText = this._name;
        }
    }
}

customElements.define("print-name", PrintName)