import { useState } from 'react'
import ProductNavbar from "./component/ProductNavBar.jsx"
import ProductHeader from './component/ProductHeader.jsx'
import ProductSection from "./component/ProductSection.jsx"
import Products from './component/Product.jsx'


function App() {
  const [count, setCount] = useState(0)

  let addtoCart = (id) => { 
    setCount(count + 1)
    let index = Products.map((value) => { 
       return  value.id === id
    }).indexOf(true)
    Products[index].disabled = true
    Products[index].hidden = false
  }

  let removeItem = (id) => {
    console.log('item remved')
    setCount(count - 1)
    let index = Products.map((value) => {
      return value.id == id
    }).indexOf(true)
    Products[index].disabled = false
    Products[index].hidden = true
   }

  return (

    <div>
      <ProductNavbar counter={ count } />
      <ProductHeader />
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
                {Products.map((product) => {
                  return (
                    <div key={product.id}>
                      <ProductSection
                        data={product}
                        handleAddtocartclick={ addtoCart}
                        handleRemoveItemclick={ removeItem} />
                    </div>
                  )
                 })}
               </div> </div>  </section>
      
    </div>
  )
}

export default App
