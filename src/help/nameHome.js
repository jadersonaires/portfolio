export const nameWithHTML = (fullName) => {
    if (countNameInArray(fullName) >= 3) {
        let betweenFistAndlast = transformNameInArray(fullName).slice(1, -1).join(' ')
        let NewStringWithTags = addTagsHTML(betweenFistAndlast)

        return transformNameInArray(fullName).slice(0, 1)
            + ' ' + NewStringWithTags
            + ' ' + transformNameInArray(fullName).slice(-1)
    } else {
        let lastName = transformNameInArray(fullName).slice(-1).join(' ')
        let NewStringWithTags = addTagsHTML(lastName)
        return transformNameInArray(fullName).slice(0, 1)
            + ' ' + NewStringWithTags
    }
}

const addTagsHTML = (surname) => {
    return "<span className='text-small-color'>" + surname + "</span>"
}

const transformNameInArray = (fullName) => {
    return fullName.split(' ')
}

const countNameInArray = (fullName) => {
    return fullName.split(' ').length
}   