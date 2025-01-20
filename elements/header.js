
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/global.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
    align-items: center;
    justify-content: space-between;

    /* debug
    border: solid;
    */
}

.socials {
    font-size: 24px; 
    display: inline;
    list-style-type: none; 
}

.socials ul li {
    margin: 015px;
}

.socials a:link, a:visited, a:hover, a:active {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

</style>
<header>
    <div>
        <a href="index.html"><img id="header-logo" src="images/global/logo.png" alt="Michael Szolowicz logo"></a>
        <ul class="socials">
            <li><a href="https://www.linkedin.com/in/michael-a-szolowicz/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
        </ul>
    </div>
</header>
<span class="spacer" style="min-height: 70px;"></span>
`;

class Header extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode : 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-element', Header);
