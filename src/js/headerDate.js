const monthList =[
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
]

const headerDate = document.createElement("div")
headerDate.classList.add('header_date')
let date = new Date()

headerDate.innerHTML = `
    <p>Date:</p>
    <h2>${monthList[date.getMonth()]} ${date.getDate()}</h2>
`



export default headerDate