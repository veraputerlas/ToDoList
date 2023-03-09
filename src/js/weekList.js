const dayList = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fry",
    "Sat"
  ]
const weekList = document.createElement ("ul")
let date = new Date ()

weekList.classList.add('week_list')
weekList.innerHTML =`
               <li>Вс <input id="Sun" type="radio"></li>
               <li>Пн <input id="Mon" type="radio"></li>
               <li>Вт <input id="Tue" type="radio"></li>
               <li>Ср <input id="Wed" type="radio"></li>
               <li>Чт <input id="Thu" type="radio"></li>
               <li>Пт <input id="Fry" type="radio"></li>
               <li>Сб <input id="Sat" type="radio"></li>`
               
    const week = [];
    for (let i = 0; i < dayList.length; i++) {
    const day = weekList.querySelector(`#${dayList[i]}`)
    week.push(day)
    }
week[date.getDay()].checked = true

export default weekList