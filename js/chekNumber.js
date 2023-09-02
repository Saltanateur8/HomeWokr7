const tabs = document.querySelectorAll(".tab_content_item")
const tableParent = document.querySelector(".tab_content_items")
const tabContents = document.querySelectorAll(".tab_content_block")

// Current tab
let current = 0
let autoSliderInterval;
let hasTouched = false


function hideTabContext() {
    tabContents.forEach(tab => tab.style.display = "none")
    tabs.forEach(tab => tab.classList.remove("tab_content_item_active"))
}

function showTabContext(index = 0) {
    tabContents[index].style.display = "block"
    tabs[index].classList.add("tab_content_item_active")
}


//  AUTO SLIDER TABS


hideTabContext()
showTabContext(current)

function next() {
    if (tabs.length - 1 !== current){
        current++
        hideTabContext()
        showTabContext(current)
        return 0
    }
    current = 0
    hideTabContext()
    showTabContext(current)
}

function startAutoSlider() {
    if(!hasTouched){
        next()
    }
}

function handleWaited() {
    hasTouched = false
}

setInterval(startAutoSlider, 3000)



// Handler

function handleClicked(event) {
    if (event.target === tableParent) return -1

    hideTabContext()
    tabs.forEach((value, key, parent) => {
        if (event.target === value) {
            hasTouched = true
            showTabContext(key)
            current = key
            clearInterval(autoSliderInterval)
            autoSliderInterval = undefined
            autoSliderInterval = setInterval(handleWaited, 5000)
        }
    })
}


tableParent.onclick = handleClicked





// VALIDATE PHONE NUMBER

const inputPhone = document.querySelector ('#phone_input')
const checkNumber = document.querySelector ('#phone_button')
const massField=document.querySelector("#messenger_field")

checkNumber.onclick = () => {
    const value = inputPhone.value
    const phoneRegex = new RegExp ( /^996\d{9}$/)
    if (!phoneRegex.test(value) && !!value) {
        inputPhone.value = ""
        massField.innerHTML = "Error number"
    } else {
        massField.innerHTML = "This number available to use"
    }


}










