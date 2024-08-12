import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-name="${celebrity.name}" 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
       const whatWasClickedOn = clickEvent.target

       if (whatWasClickedOn.dataset.type === "celebrity") {
        let name = whatWasClickedOn.dataset.name
        let sport = whatWasClickedOn.dataset.sport
        window.alert(`${name} is a ${sport} star`)
       }
    }
)
