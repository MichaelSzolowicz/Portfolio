
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
#header-logo {
    max-width: 160px;
    width: 100%;
}
    
header {
    width: 100%;
    height: 70px;

    background-color: darkgrey;

    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

header div {
    width: 70%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* debug
    border: solid;
    */
}
</style>
<header>
    <div>
        <a href="index.html"><img id="header-logo" src="images/global/logo.png" alt="Michael Szolowicz logo"></a>
    </div>
</header>
<span id="spacer" style="min-height: 70px;"></span>
`;

class Header extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode : 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-element', Header);
