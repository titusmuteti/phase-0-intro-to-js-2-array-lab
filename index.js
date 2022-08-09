const cats = ['Milo', 'Otis', 'Garfield'];
function name() {
    return cats 
}
function destructivelyAppendCat() {
    cats.push('Ralph')
    return cats
}
function destructivelyPrependCat() {
    cats.unshift('Bob')
    return cats
}
function destructivelyRemoveLastCat() {
    cats.splice(2,1)
    return cats
}
function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
    return cats
}
function appendCat() {
    const newArray = cats.slice(0)
    newArray.push('Broom')
    return newArray
}
function prependCat() {
    const nwArray =  cats.slice(0)
    nwArray.unshift('Arnold')
    return nwArray
}
function removeLastCat() {
    const nArray = cats.slice(0)
    nArray.pop()
    return nArray
}
function removeFirstCat() {
    const wArray = cats.slice(0)
    wArray.shift()
    return wArray
}