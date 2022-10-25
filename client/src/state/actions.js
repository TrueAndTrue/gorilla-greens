

export const addProduct = (product) => {
  return {
    type: "ADD",
    product
  }
}

export const total = (total) => {
  return {
    type: "TOTAL",
    total
  }
}