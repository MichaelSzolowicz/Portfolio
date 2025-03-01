
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/global.css">
<style>
#header-logo {
    max-width: 300px;
    margin: auto 0;
    line-height: 1.16rem;
}

header {
    width: 100%;
    height: auto;

    background-color: darkgrey;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.header-body {
    width: var(--section-width);
    max-width: var(--section-max-width);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 20px auto;
}

</style>
<header>
    <div class="header-body">
        <div id="header-logo">
            <a href="index.html"><img src="images/global/logo.png" alt="Michael Szolowicz logo"></a>
        </div>

        <span class="spacer short wide"></span>

        <ul class="project-buttons">
            <li><span><a href="games.html">Games</a></span></li>
            <li><span><a href="art.html">Art</a></span></li>
        </ul>

        <!--
        <ul class="socials">
            <li><a href="https://www.linkedin.com/in/michael-a-szolowicz/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
        </ul>
        -->
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
