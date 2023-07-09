import { twind, cssom, observe, install } from "@twind/core";
import "construct-style-sheets-polyfill";
import config from "../../twind.config.js";

// ╭───────────────────────────────────────────────────────╮
// │                   Add the template                    │
// ╰───────────────────────────────────────────────────────╯
const template = document.createElement('template');

// ╭───────────────────────────────────────────────────────╮
// │              INCLUDES / LINKS / SCRIPTS               │
// ╰───────────────────────────────────────────────────────╯
let html = /* html */` 

`;

// ╭───────────────────────────────────────────────────────╮
// │                      STYLESHEET                       │
// ╰───────────────────────────────────────────────────────╯
html += /* html */` 
    <style>

        :host {
            /* Variables  */
            --backgroundColour: var(--color-stone-50);
            --foregroundColour: var(--color-stone-950);
            --hoverColour:      var(--color-purple-500);
        }

        #menunewscard {
            background-color: var(--backgroundColour);
        }

        #description {
            color: var(--foregroundColour);
            background-color: var(--backgroundColour);
        }

        #image {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition: .3s ease-in-out;
            transition: .3s ease-in-out;
        }

    /*  ╭──────────────────────────────────────────────────────────╮
        │                       HOVER STATES                       │
        ╰──────────────────────────────────────────────────────────╯ */

        #menunewscard:hover {
            color: var(--hoverColour);
        }

        #menunewscard:hover h3,
        #menunewscard:hover h4 {
            color: var(--hoverColour);
        }

        #menunewscard:hover #image {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }


    /*  ╭──────────────────────────────────────────────────────────╮
        │                       MEDIA QUERIES                      │
        ╰──────────────────────────────────────────────────────────╯ */


    </style>
`;


// ╭───────────────────────────────────────────────────────╮
// │                       TEMPLATE                        │
// ╰───────────────────────────────────────────────────────╯
html += /* html */`
    <a id="menunewscard" href="" rel="" title="" target="" class="
        relative
        flex
        flex-row                    md:flex-col
        gap-4                       md:gap-2
        
        rounded-lg
        shadow-lg
        overflow-hidden
        h-full
        
        duration-500
        ease-in-out
        hover:outline
        outline-4
        outline-white
        ">

        
            <div id="description" class="
                
                p-4
                relative
                grow-0
                z-40">
                <h3 class="
                    text-sm         md:text-sm">
                </h3>
            </div>


            <div id="image" class="
                mx-auto
                z-30 
                h-full
                hidden              md:block
                ">
                <slot></slot>
            </div>
    </a>


`;

// ╭───────────────────────────────────────────────────────╮
// │                    ADD TO TEMPLATE                    │
// ╰───────────────────────────────────────────────────────╯
template.innerHTML = html

// ╭───────────────────────────────────────────────────────╮
// │                  DEFINE WEBCOMPONENT                  │
// ╰───────────────────────────────────────────────────────╯
class MenuNewsCard extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

        // TWIND Setup
        const sheet = cssom(new CSSStyleSheet());
        const tw = twind(config, sheet);
        const theshadowRoot = this.shadowRoot;
        theshadowRoot.adoptedStyleSheets = [sheet.target];
        observe(tw, theshadowRoot);

        // define element
        const element = this.shadowRoot.querySelector("#menunewscard");

        // Set classes on navbar
        element.classList.add(...this.classAttribute);

        // Set Title
        this.shadowRoot.querySelector("h3").innerHTML = this.titleAttribute

        // HREF
        element.href = this.hrefAttribute;

        // target
        element.target = this.targetAttribute;

        // rel
        element.rel = this.relAttribute;

        //layout
        // text position top/bottom
        if (this.layoutAttribute &&
            this.layoutAttribute === 'reversed') {
            this.shadowRoot.querySelector("#description")
                .classList.add('order-2');
            this.shadowRoot.querySelector("#image")
                .classList.add('order-1');
        }
    }

    // ╭───────────────────────────────────────────────────────╮
    // │                   GETTERS / SETTERS                   │
    // ╰───────────────────────────────────────────────────────╯

    get classAttribute() {
        return this.classList;
    }

    get titleAttribute() {
        return this.getAttribute("title");
    }

    get hrefAttribute() {
        return this.getAttribute("href");
    }

    get targetAttribute() {
        return this.getAttribute("target");
    }

    get relAttribute() {
        return this.getAttribute("rel");
    }

    get layoutAttribute() {
        return this.getAttribute("layout");
    }

}

customElements.define("ldnpk-menunewscard", MenuNewsCard);