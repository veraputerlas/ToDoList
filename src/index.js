import '@/styles/index.scss'
import headerDate from "@/js/headerDate"
import weekList from "@/js/weekList"
import taskList from "@/js/taskList"

const app = document.querySelector('#root')
app.append(headerDate)
app.append(weekList)
app.append(taskList)
