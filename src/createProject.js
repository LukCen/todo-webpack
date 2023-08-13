"use strict";

import { addElements } from "./addElements.js";

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
               classes: "",
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
   addElements(parent, projectWindowContents);
   let projectWindowContainer = document.querySelector(
      ".project-window-container"
   );

   let buttonConfirm = document.querySelector(".task-button-add");
   let buttonCancel = document.querySelector(".task-button-cancel");

   if (buttonConfirm !== undefined && buttonCancel !== null) {
      buttonConfirm.addEventListener("click", () => {
         console.log("confirm works");
      });
   }

   if (buttonCancel !== undefined && buttonCancel !== null) {
      buttonCancel.addEventListener("click", () => {
         projectWindowContainer.remove();
      });
   }

   return { parent };
}
