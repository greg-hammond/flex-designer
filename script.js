

const init = () => {

    // helper function.  create element of 'type' with 'text' content, and append to 'parent'
    // multiple classnames can be passed in as parameters 4-n.  spread operator handles nicely.
    const addElem = (parent, type, text, ...classlist) => {
        let elem = document.createElement(type);
        elem.classList.add(...classlist);
        elem.textContent = text;
        parent.appendChild(elem);
        return elem;
    }


    // build UI for flex properties/values

    const buildPropUI = (props, container) => {

        const styleDecl = document.documentElement.style;
        const dataAttr = "data-prop";
        const prefix = "--prop-";

        props.forEach( prop => {
    
            // add a property div
            const propDiv = addElem(container, "div", "", "prop");
            const dataProp = prefix + prop.name;
            const initVal = prop.init;
            propDiv.setAttribute(dataAttr, dataProp);
            styleDecl.setProperty(dataProp, initVal);
    
            const elem = addElem(propDiv, "p", prop.name, "propName");
            elem.setAttribute("title", prop.comment); // tooltip
    
            prop.values.forEach( val => {
    
                const btn = addElem(propDiv, "p", val, "propval");
                // mark as selected if it's the initial value
                if (val === initVal) {
                    btn.classList.add("selected");
                }
    
                btn.addEventListener("click", event => {
                    const btn = event.currentTarget;
                    const parent = btn.parentNode;
                    // read the css property associated with the button
                    const cssVar = parent.getAttribute(dataAttr);
                    // update the css variable.  voila!
                    styleDecl.setProperty(cssVar, btn.textContent);
                    // mark 'this' as selected, all other siblings as de-selected
                    parent.childNodes.forEach( ch => ch.classList.toggle("selected", ch === btn));
                });
            })  // values
        }) // props

    }

    // build the container operators
    buildPropUI(flexPropData.parentProps, document.querySelector(".flexprops.parent"));

    // build the individual item operators
    buildPropUI(flexPropData.childProps, document.querySelector(".flexprops.children"));

}  // init


window.onload = init;