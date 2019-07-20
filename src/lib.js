


export var pluralize = (singular, plural, num) => {
  return num === 1 ? singular : plural
}
// pure function
// pluralize('chicken', 'chickens', 0) => chicken

export var prettyIngredient = (layers, ingredient) => {
  var noOfcheese = layers.filter(layer => layer === ingredient).length
  switch (noOfcheese) {
    case 0:
      return ''
    case 1:
      return `with ${ingredient}`
    case 2:
      return `double ${ingredient}`
    case 3:
      return `triple ${ingredient}`
    default:
      return `maximum ${ingredient}`
  }
}

