//
let vehicle: {
  // property types
  brand: string,
  engineType: number,
  about: any
} = {
  brand: 'BMW',
  engineType: 3,
  // methods
  about: function (): string {
    return this.brand
  }
}