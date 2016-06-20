import _authors from './authors.json'

let promise = result=>new Promise((resolve, reject)=> {
  setTimeout(() => resolve(result), 1000);
});

export default {
  getAuthors() {
    return promise(_authors);
  },
  getAuthorById(id) {
    let _author = _authors.filter(author=>author.id == id);
    return promise(_author[0]);
  }
}

