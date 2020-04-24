

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

  _itemId = (item) => {
    return item.url.match(/\d+/g)[0];
  }

  emptyData = (data) => {
    if (data) {
      return data;
    } else {
      return 'no data ((('
    }
  }

  _transformChar(character) {
    return {
      name: this.emptyData(character.name),
      gender: this.emptyData(character.gender),
      born: this.emptyData(character.born),
      died: this.emptyData(character.died),
      culture: this.emptyData(character.culture),
      id: this._itemId(character)
    }
  }

  _transformBook(book) {
    return {
      name: this.emptyData(book.name),
      authors: this.emptyData(book.authors),
      numberOfPages: this.emptyData(book.numberOfPages),
      publisher: this.emptyData(book.publisher),
      country: this.emptyData(book.country),
      mediaType: this.emptyData(book.mediaType),
      id: this._itemId(book)
    }
  }

  _transformHouse(house) {
    return {
      name: this.emptyData(house.name),
      region: this.emptyData(house.region),
      coatOfArms: this.emptyData(house.coatOfArms),
      words: this.emptyData(house.words),
      id: this._itemId(house)
    }
  }


  getAllCharacters = async () => {
    const res = await this.getResource('/characters?page=5&pageSize=10');

    return res.map((item) => this._transformChar(item));
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`/characters/${id}`);

    return this._transformChar(res);
  }

  getAllBooks = async () => {
    const res = await this.getResource('/books/');

    return res.map((item) => {
      let element = this._transformBook(item);

      return {...element, id: res.findIndex((el) => el === item) + 1}
    });
  }

  getBook = async (id) => {
    const res = await this.getResource(`/books/${id}`);

    return this._transformBook(res);
  }

  getAllHouses = async () => {
    const res = await this.getResource('/houses/');

    return res.map((item) => {
      let element = this._transformHouse(item);

      return {...element, id: res.findIndex((el) => el === item) + 1}
    });
  }

  getHouse = async (id) => {
    const res = await this.getResource(`/houses/${id}`);

    return this._transformHouse(res);
  }
}