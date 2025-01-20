
const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/global.css">
<style>
footer {
    width: 100%;
    min-height: 100px;

    background-color: darkgrey;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: auto;
}

footer div {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* debug     
    border: solid;
    */
}
</style>
<footer>
    <div>
        <span>&copy; Michael Szolowicz 2024</span>
    </div>
</footer>
`;

class Footer extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode : 'closed'});
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-element', Footer)
