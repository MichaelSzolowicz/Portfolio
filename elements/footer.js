
const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/global.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
footer {
    width: 100%;
    height: auto;

    background-color: darkgrey;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: auto;

    line-height: 1.16rem;
}

footer div {
    width: var(--section-width);
    max-width: var(--section-max-width);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 20px auto;

    /* debug     
    border: solid;
    */
}

</style>
<footer>
    <div>
        <text>michaelszolowicz@gmail.com</text>
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
