
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/global.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
header {
    background-color: var(--header-color);
    width: var(--section-width);
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: left;
    justify-content: left;
    gap: 1em;
    margin: 1em auto;
    margin-bottom: var(--default-bottom-margin);
}

.header-body {

}

</style>

<header>
    <div><a href="index.html">Home</a></div>
    <div><a href="media/resumeMichaelSzolowicz.pdf" target="blank">CV</a></div>
    <div><a href="index.html#contact">Contact</a></div>
</header>
`;

class Header extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode : 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-element', Header);
