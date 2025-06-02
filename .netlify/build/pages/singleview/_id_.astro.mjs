import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, k as renderHead } from '../../chunks/astro/server_7TY4h1yB.mjs';
import 'kleur/colors';
import 'clsx';
import { c as caps } from '../../chunks/caps_8mbjfh_R.mjs';
import { s as shirts } from '../../chunks/shirts_BMuP6XIx.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const allProducts = [...caps, ...shirts];
  const { id } = Astro2.params;
  const product = allProducts.find((p) => p.id === id);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Produkt</title><link rel="stylesheet" href="/style.css"><link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">', '</head> <body> <!-- HEADER --> <header class="site-header"> <nav class="site-nav"> <div class="nav-left"> <img src="/menu.png" alt="Menu" id="menuToggle" class="burger"> <img src="/s\xF8g.png" alt="S\xF8g" class="s\xF8g-icon"> </div> <div class="nav-logo"> <a href="/"> <img src="/pleasant-logo.webp" alt="Pleasant Logo"> </a> </div> <div class="nav-center"> <a href="/caps">Caps</a> <a href="/shirts">Shirts</a> <a href="/omos">Om os</a> </div> <div class="nav-right"> <img src="/s\xF8g.png" alt="S\xF8g" class="s\xF8g-desktop"> <img src="/profil.png" alt="Profil"> <img src="/kurv.png" alt="Kurv"> </div> </nav> <div class="mobile-menu" id="mobileMenu"> <ul> <li><a href="/caps">Caps</a></li> <li><a href="/shirts">Shirts</a></li> <li><a href="/omos">Om os</a></li> </ul> </div> <script>\n        setTimeout(() => {\n          const toggle = document.getElementById("menuToggle");\n          const menu = document.getElementById("mobileMenu");\n          if (toggle && menu) {\n            toggle.addEventListener("click", () => {\n              menu.classList.toggle("open");\n            });\n          }\n        }, 0);\n      <\/script> </header> <!-- MAIN --> ', ' <!-- FOOTER --> <footer class="footer-section"> <div class="footer-inner"> <div class="footer-venstre"> <img src="/pleasant-logo-hvid.svg" alt="Pleasant Logo"> <p>\nPleasant er et t\xF8jm\xE6rke, der upcycler og laver nyt t\xF8j af brugt\n            tekstil. God stil. God samvittighed.\n</p> <br> <br> <p> <em> webshop@pleasant.dk </em> <em> Svartid 1-2 hverdage </em> <em> CVR-nr: 42943274 </em> </p> </div> <div class="footer-midten"> <h4 class="footer-h4">LINKS</h4> <ul> <li><a href="/caps">Caps</a></li> <li><a href="/shirts">Shirts</a></li> <li><a href="/om-os">Om os</a></li> </ul> </div> <div class="footer-h\xF8jre"> <h4 class="footer-h4">PLEASANT COMMUNITY</h4> <input type="email" placeholder="Email"> <a href="#" class="tilmed">TILMELD HER</a> <ul> <li> <a href="#"><img src="/facebook-hvid.png" alt="Facebook"></a> </li> <li> <a href="#"><img src="/instagram-hvid.png" alt="Instagram"></a> </li> </ul> </div> </div> </footer> </body></html>'])), addAttribute(Astro2.generator, "content"), renderHead(), product ? renderTemplate`<main> <section class="product-container"> <div class="product-image"> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")}> </div> <div class="product-info"> <h1 class="product-name">${product.name}</h1> <p class="price">${product.price} DKK</p> <p class="product-description">${product.description}</p> </div> </section> </main>` : renderTemplate`<main> <p style="text-align: center; padding: 3rem;">
Produktet blev ikke fundet 😢
</p> </main>`);
}, "/Users/anjadavidovic/kea/2sem/TEMA9/tema9-pleasant/astro/src/pages/singleview/[id].astro", void 0);

const $$file = "/Users/anjadavidovic/kea/2sem/TEMA9/tema9-pleasant/astro/src/pages/singleview/[id].astro";
const $$url = "/singleview/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
