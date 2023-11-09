
const shop = document.getElementById("shopContent");
const cart = []; //Este es nuestro carrito, un array vacio

productos.forEach((product) => {
  const content = document.createElement("div");
  content.className = "product-box";
  content.innerHTML = `
<div class="container">
        <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="mb-4 ">
                <img src="${product.img}" class="product-box-img" alt="Producto">
                <div class="card-body">

                    <h5 class="product-text">${product.productName}</h5>
                    <h4 class="card-text">${product.productName}</h4>
                    <p class="card-text">${product.price}</p>
                </div>
            </div>
        </div>
    </div>
</div>


  </div>
</div>
    `;
  shop.append(content);

  const buyButton = document.createElement("button");
  buyButton.innerText = "Comprar";

  content.append(buyButton);

  buyButton.addEventListener("click", () => {
    const repeat = cart.some(
      (repeatProduct) => repeatProduct.id === product.id
    );
    if (repeat) {
      cart.map((prod) => {
        if (prod.id === product.id) {
          prod.quanty++;
          displayCartCounter();
        }
      });
    } else {
      cart.push({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quanty: product.quanty,
        img: product.img,
      });
      displayCartCounter();
    }
  });
});
