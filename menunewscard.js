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
            --hoverColour:      var(--color-emerald-500);
            --glyphColour:      var(--color-cyan-500);
            --glyphSize:        calc(100% - 2rem);
        }
        
        #menunewscard {
            background: var(--backgroundColour);
        }

        #glyph {
            fill: var(--glyphColour);
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition: .3s ease-in-out;
            transition: .3s ease-in-out;
        }

    /*  ╭──────────────────────────────────────────────────────────╮
        │                       HOVER STATES                       │
        ╰──────────────────────────────────────────────────────────╯ */

        #menunewscard:hover {
            background: var(--glyphColour);
            color: var(--hoverColour);
        }

        #menunewscard:hover h3,
        #menunewscard:hover h4 {
            color: var(--hoverColour);
        }

        #menunewscard:hover #glyph {
            fill: var(--foregroundColour);
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
        gap-4                       md:gap-0
        
        rounded-lg
        shadow-lg
        overflow-hidden
        p-2
        pb-2                        md:pb-12
        h-full
        
        duration-500
        ease-in-out
        hover:outline
        outline-4
        outline-white
        ">

        
            <div id="description" class="
                mb-auto
                order-2             md:order-1
                relative
                z-40">
                <h3 class="
                    text-sm         md:text-sm">
                </h3>
                <h4 class="
                    text-xs         md:text-xs 
                    text-stone-500">
                </h4>
            </div>


            <div id="image" class="
                mx-auto
                z-30 
                drop-shadow-xl
                hidden              md:block
                order-3">
                <slot></slot>
            </div>


            <div id="glyph" class="
                block               md:block            lg:block
                absolute            md:absolute         lg:absolute         
                w-10                md:w-4              lg:w-4/5       
                h-10                md:h-4              lg:h-4/5        
                order-1                                 lg:order-2
                top-2               md:top-auto         lg:top-auto            
                                                        lg:left-4   xl:left-0
                right-2                                 lg:right-4  xl:right-0
                                    md:bottom-4         lg:bottom-4   
                                    md:mx-auto
                z-20">
                <slot name="glyph"></slot>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 144 144" 
                fill="none" 
                class="absolute
                w-20                md:w-40     lg:w-80
                h-20                md:h-40     lg:h-80
                bottom-0
                right-0">
                <g opacity="0.25">
                <path d="M144 48L48 144H144V48Z" fill="black" fill-opacity="0.2"/>
                <path d="M144 24L24 144H144V24Z" fill="black" fill-opacity="0.2"/>
                <path d="M144 0L0 144H144V0Z" fill="black" fill-opacity="0.2"/>
                </g>

            </svg>

        
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

        // Set Subtitle
        this.shadowRoot.querySelector("h4").innerHTML = this.subtitleAttribute

        // HREF
        element.href = this.hrefAttribute;

        // target
        element.target = this.targetAttribute;

        // rel
        element.rel = this.relAttribute;
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

    get subtitleAttribute() {
        return this.getAttribute("subtitle");
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

}

customElements.define("ldnpk-menunewscard", MenuNewsCard);