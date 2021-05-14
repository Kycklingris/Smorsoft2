{
    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="css/global.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div id = "wrapper">
        <a id = "title" href = "/">
            <img id = "logo" src="components/logo.svg">
            <h3>Smorsoft</h3>
        </a>
        <div id = "links">
            <nav-button class = "link" href = "/pages/games/">Games</nav-button>
            <nav-button class = "link" href = "https://www.google.com/">B</nav-button>
            <button id = "menu">
            <span class="material-icons md-48">
            menu
            </span>
            </button>
        </div>
    </div>

    <style>
        #wrapper {
            background-color:var(--black);
            padding: 0.5em;
            display:flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        #links {
            display:flex;
            justify-content:space-evenly;
            vertical-align:center;
        }
        #title {
            width: 10rem;
            display:flex;
        }
        #title h3 {
            width: 0.9rem;
            overflow-wrap: break-word;
            line-height:0.8;
            padding-left:0.5em;
        }
        #title {
            text-decoration:none;
        }
        #logo {
            width:5em;
        }
        #menu {
            display:none;
        }
        @media all and (max-width: 960px) {
            #menu{
                display:block;
                cursor:pointer;
                width:4em;
                border:none;
            }

            .link {
                display:none;
            }
        }

    </style>
    `
    class Navbar extends HTMLElement {
        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
            this.setAttribute("tabindex", "-1");
        }
    }

    customElements.define("nav-bar", Navbar);
}