abstract class Mammal {

  totalCount: number = 98784;

  displayBirthDate() {
    return 'some string';
  }

  isExtinct() {
    return this.totalCount === 0
  }
}

class Human extends Mammal {

}