


export default class Team {
  #members;
  constructor() {
    this.#members = new Set();
  
    
  }
  //#members=new Set();
  // set members(members){
  //   this._members = new Set();
  // }
  
   get members() {
     return this.#members;
  }

  add(character) {
    if (this.#members.has(character)) {
      throw new Error('Ошибка!Такой персонаж уже eсть в команде!');
    }
    this.#members.add(character);
  }

  addAll(characters) {
    this.#members = new Set([...this.#members, ...characters]);
  }

  delete(elem) {
    this.#members.delete(elem);
  }

  toArray() {
    return [...this.#members];
  }

  [Symbol.iterator]() {
    return this.#members[Symbol.iterator]();
  }
  
}

// 
// export default class Team {
//   constructor() {
//     this._members = new Set();
//   }
//   getMembers() {//приватное свойство
//        return this._members;
//     }
//   add(character) {
//     if (this._members.has(character)) {
//       throw new Error('Ошибка!Такой персонаж уже eсть в команде!');
//     }
//     this._members.add(character);
//   }

//   addAll(characters) {
//     this._members = new Set([...this._members, ...characters]);
//   }

//   delete(elem) {
//     this._members.delete(elem);
//   }

//   toArray() {
//     return [...this._members];
//   }

//   [Symbol.iterator]() {
//     return this._members[Symbol.iterator]();
//   }}