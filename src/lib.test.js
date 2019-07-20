import { pluralize, prettyIngredient } from "./lib";

describe('pluralize', () => {

  it('return plural form when num is 0', () => {
    expect(pluralize('dish', 'dishes', 0)).toEqual('dishes')
  })
  it('returns singular form when num is 1', () => {
    expect(pluralize('dish', 'dishes', 1)).toEqual('dish')

  })
})

describe('prettyIngredient', () => {
  it('returns with cheese when you have 1 cheese in the array', () => {
    expect(prettyIngredient(['bun', 'cheese'], 'cheese')).toEqual('with cheese')
  })
})
