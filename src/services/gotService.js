export default class gotService {

  constructor() {
    this._apiBase = 'https://anapioficeandfire.com/api';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  _transformChar(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture
    }
  }


  getAllCharacters = async () => {
    const res = await this.getResource('/characters?page=5&pageSize=10');

    return res.map(this._transformChar);
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`/characters/${id}`);

    return this._transformChar(res);
  }

  getAllBooks = () => {
    return this.getResource('/books/');
  }

  getBook = (id) => {
    return this.getResource(`/books/${id}`);
  }

  getAllHouses = () => {
    return this.getResource('/houses/');
  }

  getHouse = (id) => {
    return this.getResource(`/houses/${id}`);
  }
}