let increment = document.getElementById("counting")
let Pentries = document.getElementById("Prevno")
let resetBtn = document.getElementById("reset")
let count = 0

function increase() {
    count += 1
    increment.innerText = count
}

function save() {
    let strsave = count + " - "
    Pentries.textContent += strsave
    count = 0
    increment.innerText = count
}

function resetl() {
    let strsave = "Previous Entries:"
    Pentries.innerText = strsave
}