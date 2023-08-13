"use strict";

import { addElements } from "./addElements.js";
// import { Workbench } from "./createProjectWorkbench.js";

export function createProjectWindow(parent) {
   let projectWindowContents = [
      {
         tag: "div",
         classes: ["project-window-container"],
         text: [
            {
               tag: "p",
               classes: ["p-header"],
               text: "Name your project!",
               attrs: "",
            },
            {
               tag: "input",
               classes: ["project-name"],
               text: "",
               attrs: [
                  {
                     name: "placeholder",
                     value: "Type your project name!",
                  },
               ],
            },
            {
               tag: "button",
               classes: ["task-button", "task-button-add"],
               text: "Confirm",
               attrs: "",
            },
            {
               tag: "button",
               classes: ["task-button", "task-button-cancel"],
               text: "Cancel",
               attrs: "",
            },
         ],
      },
   ];

   let workbenchStructure = [
      {
         tag: "div",
         classes: ["workbench-container"],
         text: [
            {
               tag: "p",
               classes: "",
               text: "",
               attrs: "",
            },
            {
               tag: "ul",
               classes: ["workbench-todo-container"],
               text: [],
               attrs: "",
            },
         ],
         attrs: "",
      },
   ];

   addElements(parent, projectWindowContents);
   let projectWindowContainer = document.querySelector(
      ".project-window-container"
   );
   let projectMainContainer = document.querySelector(".container-main-content");

   let buttonConfirm = document.querySelector(".task-button-add");
   let buttonCancel = document.querySelector(".task-button-cancel");

   if (buttonConfirm !== undefined && buttonCancel !== null) {
      let projectWindowInput = document.querySelector(".project-name");
      buttonConfirm.addEventListener("click", () => {
         if (projectWindowInput !== null) {
            let projectName = projectWindowInput.value;
            workbenchStructure[0].text[0].text = projectName;
            addElements(projectMainContainer, workbenchStructure);
         }
         projectWindowContainer.remove();
      });
   }

   if (buttonCancel !== undefined && buttonCancel !== null) {
      buttonCancel.addEventListener("click", () => {
         projectWindowContainer.remove();
      });
   }

   return { parent };
}
