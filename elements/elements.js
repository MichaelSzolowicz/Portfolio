
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
        #header-logo {
            max-width: 160px;
            width: 100%;
        }
        </style>
        <header>
            <div>
                <a href="index.html"><img id="header-logo" src="images/global/logo.png" alt="Michael Szolowicz logo"></a>
            </div>
        </header>
        <span id="spacer" style="min-height: 70px;"></span>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
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
    }
}

customElements.define('header-element', Header);
customElements.define('footer-element', Footer)
