// from an array of objects representing an HTML element, their class and textContent value, create valid HTML elements and append them to the given parent element in DOM

export const addElements = (parentElement, listOfElements) => {
   function createElement(elementData) {
      const { tag, classes, text, attrs } = elementData;
      const element = document.createElement(tag);

      if (classes) {
         classes.forEach((className) => {
            element.classList.add(className);
         });
      }

      if (text) {
         if (typeof text === "string") {
            element.textContent = text;
         } else if (Array.isArray(text)) {
            text.forEach((nestedElementData) => {
               const nestedElement = createElement(nestedElementData);
               element.appendChild(nestedElement);
            });
         }
      }

      if (attrs) {
         attrs.forEach((attr) => {
            element.setAttribute(attr.name, attr.value);
         });
      }
      return element;
   }
   listOfElements.forEach((elementData) => {
      const element = createElement(elementData);
      parentElement.appendChild(element);
   });
   return parentElement;
};
