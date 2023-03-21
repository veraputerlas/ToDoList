import * as moodImages from '@/images/index'

function createMoodIndiator(image, classList) {
    const img = document.createElement('img')
    img.classList.add('img')
    img.classList.add(classList)
    img.src = image
    return img
}

const moodIndicator = document.createElement("div")
moodIndicator.classList.add('mood-indicator')
moodIndicator.append(createMoodIndiator(moodImages.Happy, 'Happy'))
moodIndicator.append(createMoodIndiator(moodImages.Content, 'Content'))
moodIndicator.append(createMoodIndiator(moodImages.Fine, 'Fine'))
moodIndicator.append(createMoodIndiator(moodImages.Sad, 'Sad'))
moodIndicator.append(createMoodIndiator(moodImages.ReallySad, 'ReallySad'))


function changeColor() {
    const images = moodIndicator.querySelectorAll('.img')
    images.forEach(image => {
        image.addEventListener('click', () => {
            images.forEach(image => image.classList.remove('active'))
            image.classList.add('active')
        })
    })
}
changeColor()


export default moodIndicator