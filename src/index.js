window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const deleteProductBtn = document.querySelectorAll('.action button');
  deleteProductBtn.forEach((e) => {
    e.addEventListener('click', removeProduct);
  })
  // deleteProductBtn.addEventListener('click', removeProduct);

  const allProducts = document.querySelectorAll('.product');



  // allProducts.forEach((e)=>{
  //   const deleteProductBtn = e.querySelector('.action button')
  //   e.addEventListener('click', removeProduct);
  // })

});
// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  // ... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  // const totalValueParent = document.getElementById("total-value");
  // const totalValueSpan = totalValueParent.querySelector('span');
  subtotal.textContent = Number(price.textContent) * Number(quantity.value);
  console.log(subtotal.textContent);
  return subtotal.textContent;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let totalSum = 0;
  let total = document.querySelector('#total-value span')

  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((e, i)=>{
    console.log(e)
    totalSum += Number(updateSubtotal(e))
    console.log(totalSum);
  })
  total.textContent = totalSum;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;
  console.log("The target in remove is:", target);
  target.remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}
