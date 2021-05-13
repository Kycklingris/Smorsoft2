{
    var shadowRoot;
    var href;
    const update = new Event('update', {
        bubbles: true,
        composed: true,
        detail: ""
    });
    const template = document.createElement('template');
    template.innerHTML = `
        <link rel="stylesheet" href="css/global.css">
        <div id = "wrapper">
            <h2 id = "text"><slot></slot></h2>
            <div id = "bar"></div>
        </div>
        
        <style>
            * {
                background-color: transparent;
            }

            #bar {
                background-color: var(--text);
                height:var(--thickness);
                bottom:0;
                -webkit-transition: transform 0.1s ease-out 50ms, opacity 0.1s ease 0.05s;
                -moz-transition: transform 0.1s ease-out 50ms, opacity 0.1s ease 0.05s;
                -o-transition: transform 0.1s ease-out 50ms, opacity 0.1s ease 0.05s;
                transition: transform 0.1s ease-out 50ms, opacity 0.1s ease 0.05s;
            }

            #text {
                -webkit-transition: transform 0.1s ease-out 50ms, opacity 0.1s ease 0.05s;
                -moz-transition: transform 0.1s ease-out 50ms, opacity 0.1s ease 0.05s;
                -o-transition: transform 0.1s ease-out 50ms, opacity 0.1s ease 0.05s;
                transition: transform 0.1s ease-out 50ms, opacity 0.1s ease 0.05s;
            }

            #wrapper {
                display:inline-block;
                font: var(--font);
                padding:0.5em;
                top:50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);

                -webkit-user-select: none;  /* Chrome all / Safari all */
                -moz-user-select: none;     /* Firefox all */
                -ms-user-select: none;      /* IE 10+ */
                user-select: none;          /* Likely future */
            }

            #wrapper * {
                color: var(--text);
            }

            #wrapper:hover #text {
                transform: translate(0, -0.15rem);
            }

            :host([disabled]) #text {
                transform: translate(0, -0.15rem);
                opacity: var(--highlight);
            }

            :host([disabled]) #bar {
                opacity: var(--highlight);
            }


        </style>
        `;

    class Navbutton extends HTMLElement {
        constructor() {
            super();
            href = this.getAttribute('href');
            let content = template.content.cloneNode(true);
            shadowRoot = this.attachShadow({ mode: "open" }).appendChild(content);
            this.setAttribute("tabindex", "0");
            update.detail = href;
            this.addEventListener('click', e => {
                if (this.disabled) {
                    return;
                } else {
                    let elements = this.parentElement.childNodes;
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].disabled = false;
                    }
                    this.disabled = true;
                    this.dispatchEvent(update);
                }
            })
        }

        get disabled() {
            return this.hasAttribute('disabled');
        }

        set disabled(val) {
            // Reflect the value of `disabled` as an attribute.
            if (val) {
                this.setAttribute('disabled', '');
            } else {
                this.removeAttribute('disabled');
            }
        }

    }

    customElements.define('nav-button', Navbutton);
}