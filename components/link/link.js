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
        <slot></slot>
        `;

    class Link extends HTMLElement {
        constructor() {
            super();
            href = this.getAttribute('href');
            let content = template.content.cloneNode(true);
            shadowRoot = this.attachShadow({ mode: "open" }).appendChild(content);
            update.detail = href;
            this.addEventListener('click', e => {
                if (this.disabled) {
                    return;
                } else {
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

    customElements.define('a-', Link);
}