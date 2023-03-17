const recordList = [
    { time: 6, notice: "" },
    { time: 7, notice: "" },
    { time: 8, notice: "" },
    { time: 9, notice: "" },
    { time: 10, notice: "" },
    { time: 11, notice: "" },
    { time: 12, notice: "" },
    { time: 13, notice: "" },
    { time: 14, notice: "" },
    { time: 15, notice: "" },
    { time: 16, notice: "" },
    { time: 17, notice: "" },
    { time: 18, notice: "" },
    { time: 19, notice: "" },
    { time: 20, notice: "" },
    { time: 21, notice: "" },
    { time: 22, notice: "" },
  ]
  
  recordList.forEach((record, i) => {
    const { time, notice } = record
    record.notice = getItemLocalStore(`time_${time}`)
  })
  
  
  const select = document.createElement("select")
  select.classList.add('select')
  
  const taskInput = document.createElement('input')
  taskInput.classList.add('task-input')
  taskInput.placeholder = 'Задача!'
  taskInput.value = ''
  
  const submit = document.createElement('button')
  submit.classList.add('submit')
  submit.textContent = 'Добавить запись!'
  
  const taskList = document.createElement("ul")
  taskList.classList.add('task-list')
  taskList.innerHTML = `<h2>Daily Schedule</h2>`
  taskList.append(select)
  taskList.append(taskInput)
  taskList.append(submit)
  
  
  for (let i = 0; i < recordList.length; i++) {
    const { time, notice } = recordList[i]
    if (notice != '') { getPost(time, notice) }
    getOption(i)
  }
  
  let inputValue = ''
  let selectValue = select.value
  
  
  taskInput.addEventListener('input', (event) => {
    inputValue = event.target.value
  })
  
  select.addEventListener('blur', (event) => {
    selectValue = event.target.value
  })
  submit.addEventListener('click', () => {
    if (inputValue != '' && selectValue !='') {
        recordList.forEach(record => {
            const {time, notice} = record
            if(time == +selectValue) {
                if(record.notice !='') {
                    record.notice = inputValue
                    setInputValue(`#time_${time}`, inputValue)
                    setItemLocalStore(`time_${time}`, inputValue)
                } else {
                    record.notice = inputValue
                    getPost(time, notice)
                    setInputValue(`#time_${time}`, inputValue)
                    setItemLocalStore(`time_${time}`, inputValue)
                }
            }
        })
    }
})
  
  
  function getTimeForRocord(time) {
    const option = document.createElement('option')
    option.classList.add("option")
    option.innerHTML = ` <option value="${time}">${time}.00</option>`
    return option
  }
  
  function getOption(id) {
    const { time } = recordList[id]
    const option = getTimeForRocord(time)
    select.append(option)
  }
  
  function createRecord(time, notice) {
    const record = document.createElement('div')
    record.classList.add("record")
    record.innerHTML = `          <div class="record_id">
                                    <h4>${time}.00</h4>
                                    <input id="time_${time}" type="text" readonly value="${notice}" class="record_text"></input>
                                  </div>
                                `
    return record
  }
  
  function getPost(time, notice) {
    const newRecord = createRecord(time, notice)
    taskList.append(newRecord)
  }
  
  function setInputValue(id, value) {
    const input = taskList.querySelector(id)
    input.value = value
  }
  
  function setItemLocalStore(key, value) {
    localStorage.setItem(key, value)
  }
  
  function getItemLocalStore(key) {
    let rusult = localStorage.getItem(key)
    if (rusult == null) {
      return ''
    }
    return rusult
  }
  
  
  
  export default taskList