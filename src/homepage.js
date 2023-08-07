"use strict";
import { addBoxicon } from "./addBoxicon";
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
   const menuButton = document.createElement("button");
   menuButton.classList.add("menu");
   addBoxicon(menuButton, "menu");

   // array of all elements meant to be in the navbar up top =
   let buttonGroupLeft = [
      {
         // home button
         tag: "button",
         classes: ["menu"],
         text: {
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
         attrs: "",
      },
      {
         // search bar
         tag: "input",
         classes: "",
         text: "",
         attrs: [
            {
               name: "placeholder",
               value: "Test value",
            },
            {
               name: "type",
               value: "search",
            },
         ],
      },
   ];
   topbarLeft.append(menuButton);
   let rocket = document.createElement("box-icon");
   rocket.setAttribute("name", "rocket");

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
