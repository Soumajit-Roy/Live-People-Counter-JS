let countEl = document.getElementById("count-peep")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let temp = count + " - "
    saveEl.textContent += temp
    console.log(count)
    count = 0
    countEl.textContent = 0
}