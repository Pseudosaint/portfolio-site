/* I can't lie,
I don't know how to use JavaScript.
Isn't it funny?
How hilarious. */

const header = document.querySelector("#header")

let dateThing = Date()

let clock = document.createElement("div")
clock.setAttribute("id", "date")
clock.textContent = dateThing

header.appendChild(clock)