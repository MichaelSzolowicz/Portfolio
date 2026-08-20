
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/global.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
header {
    width: 100%;
    height: auto;

    background-color: var(--header-color);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    margin-bottom: var(--default-bottom-margin);
}

.header-body {
    width: var(--section-width);
    max-width: var(--section-max-width);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 1em auto;
}

</style>
<header>
    <div class="header-body">
        <div class="project-buttons">
            <div><a href="index.html">Home</a></div>
            <div><a href="media/resumeMichaelSzolowicz.pdf" target="blank">CV</a></div>
            <div><a href="index.html#contact">Contact</a></div>
        </div>
    </div>
</header>
`;

class Header extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode : 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-element', Header);
