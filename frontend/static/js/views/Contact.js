import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }
    async getHtml(){
        return `
        <h1>Contact me</h1>
            <p>
              linkedin, github, email, my CV maybe  
            </p>
            <p>
               
            </p>
        `;
    }
}