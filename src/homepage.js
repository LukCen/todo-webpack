"use strict";

import { addElements } from "./addElements.js";
import { createProjects, createProjectWindow } from "./createProject.js";
const containerContent = document.createElement("div");
containerContent.classList.add("container-main-content");
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
   const topbarRight = document.createElement("div");
   addClasses(topbarLeft, "topbar-menu topbar-menu__left");
   addClasses(topbarRight, "topbar-menu topbar-menu__right");

   // main body, left side of the page - contains all ... stuff
   const containerList = document.createElement("div");
   containerList.classList.add("container-list");

   // main body, right side of the page - displays content the user is interested, like todos

   // array of all elements meant to be in the navbar up top - left side
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
               classes: ["searchbar-button", "menu"],
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

   // main body of the page
   // this file will be a deathtrap by the time im done with this lmao
   let contentGroupLeft = [
      {
         tag: "button",
         classes: ["project-list-create"],
         text: "Create new project!",
         attrs: "",
      },
      {
         tag: "ul",
         classes: ["project-list-ul"],
         text: "",
         attrs: "",
      },
   ];
   let contentGroupRight = [
      {
         tag: "div",
         classes: "",
         text: "ooga booga",
         attrs: "",
      },
   ];
   addElements(topbarLeft, buttonGroupLeft);
   addElements(containerList, contentGroupLeft);

   topbarMenu.append(topbarLeft, topbarRight);
   content.append(topbarMenu, containerList, containerContent);
   return { content, containerContent };
}
export function renderHomepage(content) {
   renderTopbar(content);
   let createProjects = document.querySelector(".project-list-create");
   createProjects.addEventListener("click", () => {
      createProjectWindow(containerContent);
   });
}
