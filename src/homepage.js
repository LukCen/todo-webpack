"use strict";

import { addElements } from "./addElements";

export function addClasses(element, classes) {
   classes.split(" ").forEach((className) => {
      element.classList.add(className);
   });
   return element;
}

export function renderTopbar(content) {
   // create the topbar menu container

   const topbarMenu = document.createElement("div");
   topbarMenu.classList.add("topbar-menu");

   // create the two sections containing navigation and interaction elements

   const topbarLeft = document.createElement("div");
   //

   // array of all elements meant to be in the navbar up top - left side =
   let buttonGroupLeft = [
      // menu button
      {
         tag: "button",
         classes: ["menu"],
         text: [
            {
               tag: "box-icon",
               classes: "",
               attrs: [
                  {
                     name: "name",
                     value: "menu",
                  },
               ],
            },
         ],
      },
      {
         // home button
         tag: "button",
         classes: ["menu"],
         text: [
            {
               tag: "box-icon",
               classes: "",
               attrs: [
                  {
                     name: "name",
                     value: "home",
                  },
                  {
                     name: "size",
                     value: "cssSize",
                  },
               ],
            },
         ],

         attrs: "",
      },
      {
         // search bar
         tag: "div",
         classes: ["searchbar-container"],
         text: [
            {
               tag: "input",
               classes: "",
               attrs: [
                  {
                     name: "placeholder",
                     value: "Search...",
                  },
                  {
                     name: "type",
                     value: "search",
                  },
               ],
            },
            {
               tag: "button",
               classes: ["searchbar-button"],
               text: [
                  {
                     tag: "box-icon",
                     classes: "",
                     attrs: [
                        {
                           name: "name",
                           value: "search",
                        },
                     ],
                  },
               ],
            },
         ],

         attrs: "",
      },
   ];

   addElements(topbarLeft, buttonGroupLeft);

   const topbarRight = document.createElement("div");
   addClasses(topbarLeft, "topbar-menu topbar-menu__left");
   addClasses(topbarRight, "topbar-menu topbar-menu__right");

   topbarMenu.append(topbarLeft, topbarRight);
   content.append(topbarMenu);
   return { content };
}
export function renderHomepage(content) {
   renderTopbar(content);
}
