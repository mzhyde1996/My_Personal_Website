import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("About me");
    }
    async getHtml(){
        return `
        <h1>I'm Vera</h1>
            <p>
                I am a 2nd year Computer Science student.
            </p>
            <p>
                <a href="/posts" data-link>View projects</a>.
            </p>
        `;
    }
}