
class Header extends HTMLElement {
    connectedCallback() {
        console.log("Custom element added to page.");
        this.innerHTML = `
        <style>
        header {
            width: 100%;
            height: 70px;

            background-color: lightgrey;

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
                <span><a href="index.html">Michael Szolowicz</a></span>
            </div>
        </header>
        <span id="spacer" style="min-height: 70px;"></span>
        `;
    }
}

customElements.define('header-component', Header);
