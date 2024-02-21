import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Skills");
    }
    async getHtml(){
        return `
        <h1>Skills</h1>
            <p>
              Soft Skills
            </p>
            <h2>Languages</h2>
            <h2>Frameworks and Libraries</h2>
            <h2>Tools</h2>

            
        `;
    }
}