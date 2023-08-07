// requires boxicons to be installed through NPM to work, will throw errors otherwise

export const addBoxicon = (element, iconName) => {
    let icon = document.createElement('box-icon')
    icon.setAttribute('name', iconName)
    element.append(icon)
    return element
}