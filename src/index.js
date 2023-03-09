import '@/styles/index.scss'
import headerDate from "@/js/headerDate"
import weekList from "@/js/weekList"

const app = document.querySelector('#root')
app.append(headerDate)
app.append(weekList)
