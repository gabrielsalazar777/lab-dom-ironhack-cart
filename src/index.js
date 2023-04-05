window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const deleteProductBtn = document.querySelectorAll(".action button");
  deleteProductBtn.forEach((e) => {
    e.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  subtotal.textContent = Number(price.textContent) * Number(quantity.value);
  console.log(subtotal.textContent);
  return subtotal.textContent;
}

function calculateAll() {
  let totalSum = 0;
  let total = document.querySelector("#total-value span");

  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((e, i) => {
    console.log(e);
    totalSum += Number(updateSubtotal(e));
    console.log(totalSum);
  });
  total.textContent = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;
  console.log("The target in remove is:", target);
  target.remove();
}

// ITERATION 5

const products = document.querySelector(".product");

function createProduct() {
  //... your code goes here
  const createProduct = document.querySelector(".create-product");
  const productValues = createProduct.querySelectorAll("input");
  let productName = productValues[0].value;
  let productPrice = productValues[1].value;

  console.log(productPrice);
  const productClone = products.cloneNode(true);
  // product.classList.remove('hidden');
  const tableBody = document.querySelector("tbody");
  const productNameSpan = productClone.querySelector(".name span");
  const productPriceSpan = productClone.querySelector(".price span");
  const productQuantitySpan = productClone.querySelector(".quantity input");
  const productSubtotalSpan = productClone.querySelector(".subtotal span");
  productNameSpan.textContent = productName;
  productPriceSpan.textContent = productPrice;
  productQuantitySpan.value = 0;
  productSubtotalSpan.textContent = 0;

  const deleteBtn = productClone.querySelector(".action button");
  deleteBtn.addEventListener("click", removeProduct);
  tableBody.appendChild(productClone);
  // products.parentElement.appendChild(productClone);

  productValues[0].value = "";
  productValues[1].value = 0;
}
