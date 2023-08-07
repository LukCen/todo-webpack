// from an array of objects representing an HTML element, their class and textContent value, create valid HTML elements and append them to the given parent element in DOM

export const addElements = (parentElement, listOfElements) => {
    listOfElements.forEach((elementData) => {

        // extract the object properties through destructuring
        let { tag, classes, text, attrs} = elementData

        // create the 'main' element added to the parent
        let element = document.createElement(tag);

        // if classes property is not empty, add each of the classes it consists of
        if(classes){
            classes.forEach((className) => {
                element.classList.add(className)
            });
        }

        // if 'text' property is a string, add its' value as textContent
        if(typeof(text) === 'string'){
            element.textContent = text

        } 
        // if 'text' property is an object, create a child element, set its' properties, then append it to the 'main' element - useful for stuff like buttons with icons inside
        
        else if(typeof(text) === 'object'){
            let subelement = document.createElement(text.tag);

            if(tag.classes){
                subelement.classList.add(tag.classes);

            }

            // attributes are now passed as an array of objects, to enable passing multiple attributes when making the element

            text.attrs.forEach((attr) => {
                subelement.setAttribute(attr.name, attr.value)
            })
            element.append(subelement)

        }

        // if 'attrs' property is not empty, set the main elements' attributes to whatever is passed here
        if(attrs){
            attrs.forEach((attr) => {
                element.setAttribute(attr.name, attr.value)
            })
        }

        parentElement.appendChild(element)
    })
    return parentElement
}