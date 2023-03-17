import * as moodImages from '@/images/index'

function createMoodIndiator(image) {
    const img = document.createElement('img')
    img.classList.add('img')
    img.src = image
    return img
}

const moodIndicator = document.createElement("div")
moodIndicator.classList.add('mood-indicator')
moodIndicator.append(createMoodIndiator(moodImages.ReallySad))
moodIndicator.append(createMoodIndiator(moodImages.Sad))
moodIndicator.append(createMoodIndiator(moodImages.Fine))
moodIndicator.append(createMoodIndiator(moodImages.Content))
moodIndicator.append(createMoodIndiator(moodImages.Happy))


export default moodIndicator