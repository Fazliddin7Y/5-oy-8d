document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("login-section");
    const adminPanel = document.getElementById("admin-panel");
    const ordersSection = document.getElementById("orders-section");
    const productsSection = document.getElementById("products-section");
    const productModal = document.getElementById("product-modal");
    const productsList = document.getElementById("products-list");
    const ordersList = document.getElementById("orders-list");
  
    const loginButton = document.getElementById("login-btn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    const ordersButton = document.getElementById("orders-btn");
    const productsButton = document.getElementById("products-btn");
    const addProductButton = document.getElementById("add-product-btn");
    const saveProductButton = document.getElementById("save-product-btn");
    const closeModalButton = document.getElementById("close-modal-btn");
  
    const productNameInput = document.getElementById("product-name");
    const productPriceInput = document.getElementById("product-price");
    const productQuantityInput = document.getElementById("product-quantity");
    const productImageInput = document.getElementById("product-image");
  
    // Login functionality
    loginButton.addEventListener("click", () => {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (username === "aaa" && password === "123") {
        loginSection.classList.add("hidden");
        adminPanel.classList.remove("hidden");
        productsSection.classList.remove("hidden"); // Default view
        ordersSection.classList.add("hidden");
      } else {
        alert("Неверное имя пользователя или пароль");
      }
    });
  
    // Navigation functionality
    ordersButton.addEventListener("click", () => {
      productsSection.classList.add("hidden");
      ordersSection.classList.remove("hidden");
    });
  
    productsButton.addEventListener("click", () => {
      ordersSection.classList.add("hidden");
      productsSection.classList.remove("hidden");
    });
  
    // Add Product Modal
    addProductButton.addEventListener("click", () => {
      productModal.classList.remove("hidden");
    });
  
    closeModalButton.addEventListener("click", () => {
      productModal.classList.add("hidden");
      clearProductModalInputs();
    });
  
    saveProductButton.addEventListener("click", () => {
      const productName = productNameInput.value.trim();
      const productPrice = productPriceInput.value.trim();
      const productQuantity = productQuantityInput.value.trim();
      const productImage = productImageInput.value.trim();
  
      if (productName && productPrice && productQuantity && productImage) {
        const productElement = createProductElement(productName, productPrice, productQuantity, productImage);
        productsList.appendChild(productElement);
  
        const orderElement = createOrderElement(productName, productPrice, productQuantity, productImage);
        ordersList.appendChild(orderElement);
  
        productModal.classList.add("hidden");
        clearProductModalInputs();
      } else {
        alert("Пожалуйста, заполните все поля.");
      }
    });
  
    // Helper Functions
    function clearProductModalInputs() {
      productNameInput.value = "";
      productPriceInput.value = "";
      productQuantityInput.value = "";
      productImageInput.value = "";
    }
  
    function createProductElement(name, price, quantity, image) {
      const div = document.createElement("div");
      div.className = "p-4 border rounded shadow-sm bg-white";
      div.innerHTML = `
        <img src="${image}" alt="${name}" class="w-full h-40 object-cover mb-2">
        <h3 class="text-lg font-bold">${name}</h3>
        <p>Цена: ${price}</p>
        <p>Количество: ${quantity}</p>
      `;
      return div;
    }
  
    function createOrderElement(name, price, quantity, image) {
      const div = document.createElement("div");
      div.className = "p-4 border rounded shadow-sm bg-white";
      div.innerHTML = `
        <img src="${image}" alt="${name}" class="w-full h-40 object-cover mb-2">
        <h3 class="text-lg font-bold">${name}</h3>
        <p>Цена: ${price}</p>
        <p>Количество: ${quantity}</p>
      `;
      return div;
    }
  });
  