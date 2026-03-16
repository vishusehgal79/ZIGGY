const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const shoppingCart = document.querySelector(".shopping-cart");
const cartBtn = document.querySelector("#cart-btn");
const loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector("#login-btn");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

if (searchBtn && searchForm) {
  searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    shoppingCart?.classList.remove("active");
    loginForm?.classList.remove("active");
    navbar?.classList.remove("active");
  };
}

if (cartBtn && shoppingCart) {
  cartBtn.onclick = () => {
    shoppingCart.classList.toggle("active");
    searchForm?.classList.remove("active");
    loginForm?.classList.remove("active");
    navbar?.classList.remove("active");
  };
}

if (loginBtn && loginForm) {
  loginBtn.onclick = () => {
    loginForm.classList.toggle("active");
    searchForm?.classList.remove("active");
    shoppingCart?.classList.remove("active");
    navbar?.classList.remove("active");
  };
}

if (menuBtn && navbar) {
  menuBtn.onclick = () => {
    navbar.classList.toggle("active");
    searchForm?.classList.remove("active");
    shoppingCart?.classList.remove("active");
    loginForm?.classList.remove("active");
  };
}

window.onscroll = () => {
  searchForm?.classList.remove("active");
  shoppingCart?.classList.remove("active");
  loginForm?.classList.remove("active");
  navbar?.classList.remove("active");
};


var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});



cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const name = this.dataset.name;
    const price = this.dataset.price;
    const image = this.dataset.image;

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name: name,
        price: price,
        image: image,
        quantity: 1
      });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Alert user
    alert(`${name} added to cart`);
  });
});




// Clear Cart
document.getElementById('clear-cart')?.addEventListener('click', () => {
  localStorage.removeItem('cart');
  alert('Cart has been cleared!');
  location.reload();
});

// Place Order
document.getElementById('place-order')?.addEventListener('click', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  alert('Order placed successfully!');
  localStorage.removeItem('cart');
  location.reload();
});

