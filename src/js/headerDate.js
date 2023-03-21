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
let date = new Date()

headerDate.classList.add('header_date')
headerDate.innerHTML = `
        <p>Сегодня:</p>
        <h2>${monthList[date.getMonth()]} / ${date.getDate()}</h2>
    `



export default headerDate
