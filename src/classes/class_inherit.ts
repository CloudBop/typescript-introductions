class Abode {
  windows?: number = 0;
  location: string = "Earth";
  shelter: boolean = false;

  move(newLocation: string) {
    this.location = newLocation
  }
}

class Cave extends Abode {
  // windows: 0;
  // location: "UK";
  // shelter: true;
  defendEntrance() {

  }
  startFire() {

  }
  // override
  move(): boolean {
    return false;
  }

}