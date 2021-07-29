let santander = document.getElementById('santander')
let galicia = document.getElementById('galicia')
let nacion = document.getElementById('nacion')
let provincia = document.getElementById('provincia')
let hsbc = document.getElementById('hsbc')
let frances = document.getElementById('frances')

function promoSantander () {


let promoSantander = document.createElement(`p`)

promoSantander.innerHTML = `<p>6 cuotas sin interes. <br>
                        12 cuotas fijas (CFT 39%)</p>`


document.body.appendChild(promoSantander)

}

function promoGalicia () {

let promoGalicia = document.createElement(`p`)
promoGalicia.innerHTML = `3 cuotas sin interes.<br>
                            12 cuotas fijas (CFT 39%)`
    
    
document.body.appendChild(promoGalicia)
    


    }

function promoNacion () {

let promoNacion = document.createElement(`p`)
promoNacion.innerHTML = `<p>12 cuotas sin interes.<br>
                            24 cuotas fijas (CFT 39%)</p>`
        
        
document.body.appendChild(promoNacion)
        
        }

function promoProvincia () {

let promoProvincia = document.createElement(`p`)
promoProvincia.innerHTML = `<p>9 cuotas sin interes.<br>
                            36 cuotas fijas (CFT 34%)</p>`
            
            
document.body.appendChild(promoProvincia)
            
            }

function promoHsbc () {

let promoHsbc = document.createElement(`p`)
promoHsbc.innerHTML = `<p>3 cuotas sin interes. <br>
                            9 cuotas fijas (CFT 27%)</p>`
                
                
document.body.appendChild(promoHsbc)
                
                }

function promoFrances () {

let promoFrances = document.createElement(`p`)
promoFrances.innerHTML = `<p>6 cuotas sin interes. <br>
                            12 cuotas fijas (CFT 43%)</p>`
                    
                    
document.body.appendChild(promoFrances)
                    
                    }


