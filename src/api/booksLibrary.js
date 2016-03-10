import _authors from './authors.json'

export default {
    getAuthors(cb) {
        setTimeout(() => cb(_authors), 1000)
    }
}

