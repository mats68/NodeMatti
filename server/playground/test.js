let data = {name: 'thaler',
            vorname: 'müller',
            age: 44  }
let methoden = `
     onShow(e) {
        console.log(e)
      }

     onUpdate() {
        this.data.vorname = 'meier22'
        this.machwas(this.data)
      }

     machwas(d)  {
       d.age++
     }

     `

    var klasse = `(class UserClass {
                 constructor(data)
                 {
                   this.data = data
                 }
                 ${methoden}
     })`

    var k = eval(klasse)
    var x = new k(data)
    try {
      x.onShow(1)
    } catch (e) {
      console.log(e.message)
    }

    try {
      x.onUpdate()
    } catch (e) {
      console.log(e.message)
    }

console.log(data)