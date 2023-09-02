//CONVERTER

const innerConverter = document.querySelector(".inner_converter")
let BASE_CONVERTOR = ""

function createInput(code = "", title = "", onInput = () => {
}) {
    const container = document.createElement("div")
    const label = document.createElement("label")
    const input = document.createElement("input")

    container.className = code
    input.type = "number"
    input.id = code
    input.addEventListener("input", onInput)

    label.htmlFor = code
    label.textContent = title

    container.appendChild(label)
    container.appendChild(input)

    return container
}

function updateValues(exchangeData, inputCode, inputValue) {
    exchangeData.forEach(rate => {
        if (rate.code !== inputCode) {
            const inputElement = document.getElementById(rate.code)

            if (!isNaN(inputValue)) {
                const convertedValue = inputValue * (exchangeData.find(r => r.code === inputCode).amount / rate.amount)
                inputElement.value = convertedValue.toFixed(2)
            } else {
                inputElement.value = ""
            }
        }
    })
}


const fn_requestsCallBack = async (response) => {
    BASE_CONVERTOR = response.base
    const list = response.rates
    list.forEach(rate => {
        innerConverter.appendChild(createInput(rate.code, rate.title, event => {
            const inputCode = event.target.id
            const inputValue = parseFloat(event.target.value)
            updateValues(list, inputCode, inputValue)
        }))
    })
}

const fetchData = async () => {
    try {
        const r = await fetch("../data/converter.json")
        const response = await r.json()
        await fn_requestsCallBack(response)
    } catch (e) {
        console.log(e)
    }
}

window.addEventListener("load", fetchData)


// WEATHER
const cityName = document. querySelector ( '.cityName')
const city = document. querySelector ('.city')
const temp = document. querySelector ('.temp')

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey  = 'e417df62e04d3b1b111abeab19cea714'

cityName.oninput = async (event)=> {
    try {
        const response = await fetch ( `${baseUrl}?g=${event.target.value}$appid=${apiKey}` )
        const data = await response.json ()
        city.innerHTML = data?.name ? data. name : 'Город не найден...'
        temp.innerHTML = data?.main?.temp ? Math.round (data?.main?.temp - 273)+'$deg;C' : '.....'
    }catch (e){
       alert(e,'ERROR')
    }
}
