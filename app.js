const arrayCarrito = []

const containerProducts = document.querySelector('#containerProducts')


function htmlCards(arrayProductos){

  let fragment = document.createDocumentFragment()
  
  

  arrayProductos.forEach(function(elemento){
    console.log(elemento.nombre);
      let divProduct = document.createElement('div')
      divProduct.classList.add('producto')

      let boton = document.createElement('button')
      boton.classList.add('btn')
      boton.id = `producto-${elemento.id}`
      boton.textContent = 'Añadir al carrito'

      divProduct.innerHTML += 
                                
                            `                        
                                                 
                                  <img src=${elemento.imagen} alt="producto">
                                  <h3>${elemento.nombre}</h3>
                                  <p>${elemento.descripcion}</p>
                                  <p>${elemento.precio}</p>
                                  <a href="./pages/productos.html">Ver más</a>
                           
                            `

      divProduct.append(boton)
     fragment.append(divProduct)
      addToCart(boton)
      
    })
    containerProducts.append(fragment)
}
function addToCart(boton){

  boton.addEventListener('click', function(evento){
    let id = evento.target.id
    console.log(id);
    id = id.slice(9)
    console.log(id);
    let busqueda =  productosGym.find( elemento =>  elemento.id == id )
    console.log(busqueda);
    arrayCarrito.push(busqueda)
    console.log(arrayCarrito);
  })
}
let productosDestacados = productosGym.filter( (elemento) => elemento.destacado === true)

htmlCards(productosDestacados)
