class Tree {
  // (kinda like field or is it property in c# )
  branch: string;
  //
  constructor(branch: string) {
    this.branch = branch
  }
}
class TreeTwo {
  // like above
  constructor(public branch: string) {
    this.branch = branch
  }
} 

// access modifiers
class TreeThree {
  constructor(public branch: string, private leafCount: number) {
    this.branch = branch
    this.leafCount = leafCount
  }

  private growLeaves(): void {
    //
    this.leafCount *= 10;
  }

  public moveLeaf(season: string) {
    if (season === 'spring') {
      this.growLeaves();
    }
    console.log('leaves blowin in the wind')
  }
}