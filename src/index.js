import '@/styles/index.scss'
import headerDate from "@/js/headerDate"
import weekList from "@/js/weekList"
import taskList from "@/js/taskList"
import moodIndicator from "@/js/moodIndicator"

const app = document.querySelector('#root')
const container = document.createElement('div')
container.classList.add('container')
container.append(weekList)
container.append(moodIndicator)




app.append(headerDate)
app.append(container)
app.append(taskList)

