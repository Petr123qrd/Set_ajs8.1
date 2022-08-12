export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10 || typeof name !== "string") {
      throw new Error("Ошибка в name");
    } else {
      this.name = name;
    }

    this.health = 100;
    this.level = 1;
  }
}
