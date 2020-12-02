namespace module1 {
  // expose on the namespace.
  export function displayData() {
    return 'display some data';
  }
}

// gets compiled to a modular IIFE that provides a namespaced object alongside window