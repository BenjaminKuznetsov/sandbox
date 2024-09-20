function XO(str) {
  let x_count = 0
  let o_count = 0

  let arr = str.split("")
  console.log(arr)
  arr.forEach((it) => {
    if (it.toLowerCase() === "x") {
      x_count += 1
      console.log(x_count)
    }
    if (it.toLowerCase() === "o") {
      o_count += 1
    }
  })

  return x_count === o_count
}

console.log(XO("xo"))
console.log(XO("xxOo"))
console.log(XO("xxxm"))
console.log(XO("Oo"))
console.log(XO("ooom"))
