let unionType: string | number = "house";

// union type can be any type that's listed.

unionType = "hello"
unionType += 0;

unionType = 10;
// causes error
// unionType = false