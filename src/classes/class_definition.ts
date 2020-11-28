class Tree {
  // (kinda like field or is it property in c# )
  branch: string;
  //
  constructor(branch) {
    this.branch = branch
  }
}

class TreeTwo {
  // like above
  constructor(public branch: string) {
    this.branch = branch
  }
}