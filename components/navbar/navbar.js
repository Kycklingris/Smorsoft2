{
    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="css/global.css">
    <script src = "/Navbutton.js"></script>
    <div id = "wrapper">
        <a id = "title" href = "/">
            <object id = "logo" data="components/logo.svg" type="image/svg+xml"></object>
            <h3>Smorsoft</h3>
        </a>
        <div id = "links">
            <nav-button href = "/pages/games">Games</nav-button>
            <nav-button href = "/b">B</nav-button>
            <button>
            <span class="material-icons-outlined">search</span>
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