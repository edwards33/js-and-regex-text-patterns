var text01 = `Cat sat on my hat!!!`

var regex01 = /.at/g

const loop = (targetText, reg) => {
  while((result = reg.exec(targetText)) !== null) {
    console.log(result)
  }
}

loop(text01, regex01)

var text02 = `Cat
sat on
my hat!!!`

var regex02 = /......./g
console.log('\nregex02:')
loop(text02, regex02)

var regex03 = /\!/g
console.log('\nregex03:')
loop(text02, regex03)
