'use strict'
export function addClasses(element, classes){
    classes.split(' ').forEach(className => {
        element.classList.add(className)
    })
    return element
};

export function renderTopbar(content){
    // create the topbar menu container

    const topbarMenu = document.createElement('div');
    topbarMenu.classList.add('topbar-menu');
    
    // create the two sections containing navigation and interaction elements
    
    const topbarLeft = document.createElement('div');
    const topbarRight = document.createElement('div');
    addClasses(topbarLeft, 'topbar-menu topbar-menu__left')
    addClasses(topbarRight, 'topbar-menu topbar-menu__right')

    topbarMenu.append(topbarLeft, topbarRight);
    content.append(topbarMenu)
    return {content}
}
export function renderHomepage(content){
    
    renderTopbar(content);
    
}