const modal = document.querySelector(".modal")
const openModalButton = document.querySelector("#btn-get")
const exitModalButton = document.querySelector(".modal_close")

const openModalPlace = document.documentElement.scrollHeight - document.documentElement.clientHeight
let modalHasShowed = false


// Open modal logic
const openModal = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}
const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""
}

openModalButton.onclick = openModal
exitModalButton.onclick = closeModal

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}


// Auto open modal logic
let hasStartedWaiting;
let delayTimer = 10000
let hasOpened = false

function clearInter() {
    clearInterval(hasStartedWaiting)
    hasStartedWaiting = undefined
}

function hasWaited() {
    hasOpened = true
    if (modal.style.display !== "block") {
        openModal()
    }
    clearInter()
}

function startTimer() {
    if (!hasOpened) {
        clearInter()
        hasStartedWaiting = setInterval(hasWaited, delayTimer)
    }
}

startTimer()


// Scroll logic
window.onscroll = function () {
    // Open model when time out after n time
    startTimer()

    // Open model when scrolled till end
    if (window.scrollY > openModalPlace && !modalHasShowed) {
        openModal()
        modalHasShowed = true
    }
}





