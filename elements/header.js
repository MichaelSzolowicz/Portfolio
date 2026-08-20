
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/global.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
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

.fa {
    font-size: 12em;
}

.project-buttons {
    align-items: end;

}

.social-link {
    font-family: sans-serif;
    text-decoration: underline;
    margin-left: .2em;
    font-size: 1rem;
}


</style>
<header>
    <div class="header-body">
        <div id="header-logo">
            <a href="index.html">Michael&nbspSzolowicz</a>
        </div>

        <span class="spacer short wide"></span>

        <div class="project-buttons">
            <div><a href="media/resumeMichaelSzolowicz.pdf" target="blank">CV</a></div>
            <div><a href="https://www.linkedin.com/in/michael-a-szolowicz/" target="_blank"><i class="fa fa-linkedin"><span class="social-link">LinkedIn</span></i></a></div>
            <div>
                <a href="https://github.com/MichaelSzolowicz?tab=repositories" target="_blank">
                <i class="fa fa-github"></i><span class="social-link">GitHub</span>
                </a>
            </div>
            <div><a href="art.html">Art</a></div>
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
