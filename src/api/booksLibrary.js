import _authors from './authors.json'

export default {
    getAuthors(cb) {
        setTimeout(() => cb(_authors), 1000)
    },
    getAuthorById(id,cb) {
        let _author=_authors.filter(author=>author.id==id);
        //TODO not found
        setTimeout(() => cb(_author[0]), 1000)
    }
}

