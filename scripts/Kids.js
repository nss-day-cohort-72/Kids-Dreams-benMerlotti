import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-name="${child.name}" data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
       const whatWasClickedOn = clickEvent.target

       if (whatWasClickedOn.dataset.type === "child") {
        let name = whatWasClickedOn.dataset.name
        let wish = whatWasClickedOn.dataset.wish
        window.alert(`${name}'s wish is to ${wish}`)
       }
    }
)