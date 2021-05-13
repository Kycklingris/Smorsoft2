{
    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="css/global.css">
    <div id = "block">
        <div id = "bar">
            <h2 id = "title">
            </h2>
        </div>
        <div id = "content">
            <slot>
            </slot>
        </div>
    </div>

    <style>
        #title {
            position: sticky;
            width: 0.9rem;
            overflow-wrap: break-word;
            top:1rem;
            line-height:0.9;
            pointer-events: none;
        }

        #bar {
            background-color:var(--accent);
            padding:3em;
            pointer-events: none;
        }

        #content {
            background-color: var(--black);
            width:100%;
            padding:0.5em;
            pointer-events: none;
        }

        #block {
            display:flex;
            pointer-events: none;
        }
        :host {
            pointer-events: none;
        }
    </style>
    `
    class Block extends HTMLElement {
        constructor() {
            super();
            let title = this.getAttribute('title');
            let content = template.content.cloneNode(true);
            content.querySelector("#title").innerHTML = title;
            const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(content);
            this.setAttribute("tabindex", "-1");
        }
    }

    customElements.define("content-block", Block);
}