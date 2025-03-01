
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
    justify-content: space-between;

    margin: 20px auto;

    /* debug     
    border: solid;
    */
}

.socials {
    font-size: 32px; 
    display: inline;
    list-style-type: none; 

    margin: 0;
}

.socials i, .socials a {
    display: inline;
}

.socials li {
    margin: 015px;
    display: inline;
}

.socials a:link, a:visited, a:hover, a:active {
    color: black;
    background-color: transparent;
    text-decoration: none;
}

</style>
<footer>
    <div>
        <span>&copy; Michael Szolowicz 2024</span>

        <ul class="socials" style="display: inline;">
            <li><a href="https://www.linkedin.com/in/michael-a-szolowicz/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/MichaelSzolowicz?tab=repositories" target="_blank"><i class="fa fa-github"></i></a></li>
        </ul>
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
