const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");
  // const closeBtn = document.querySelector('.cart-modal__header--close');

  const openModal = () => {
    modal.classList.add("open");
  };
  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  // closeBtn.addEventListener('click', () => {
  // 	closeModal()
  // });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");
  const restsArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rests-1.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца ",
      image: "rests-2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца ",
      image: "rests-3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца ",
      image: "rests-4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца ",
      image: "rests-5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца ",
      image: "rests-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };
  const randerRests = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
							<a href="/goods.html?id=${card.id}" class="products-card">
											<div class="products-card__image">
												<img src="./images/rests/${card.image}" alt='${card.image}'>
											</div>
											<div class="products-card__description">
												<div class="products-card__description-row">
													<h4 class="products-card__description--title">${card.title}</h4>
													<div class="products-card__description--badge">${card.time} мин</div>
												</div>
												<div class="products-card__description-row">
													<div class="products-card__description-info">
														<div class="products-card__description-info--raiting">
															<img src="./images/icons/star.svg" alt="star">
															${card.rating}
														</div>
														<div class="products-card__description-info--price">От ${card.price} ₽</div>
														<div class="products-card__description-info--group">${card.type}</div>
													</div>
												</div>
											</div>
										</a>
			`
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      randerRests(restsArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");
  const goodsArray = [
    {
      id: 0,
      name: "Ролл угорь стандарт",
      type: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      btn: "В корзину",
      icons: "shopping-cart.svg",
      price: 250,
      images: "goods-1.jpg",
    },
    {
      id: 1,
      name: "Калифорния лосось стандарт",
      type: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      btn: "В корзину",
      icons: "shopping-cart.svg",
      price: 395,
      images: "goods-2.jpg",
    },
    {
      id: 2,
      name: "Окинава стандарт",
      type: "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      btn: "В корзину",
      icons: "shopping-cart.svg",
      price: 250,
      images: "goods-3.jpg",
    },
    {
      id: 3,
      name: "Цезарь маки хl",
      type: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      btn: "В корзину",
      icons: "shopping-cart.svg",
      price: 250,
      images: "goods-4.jpg",
    },
    {
      id: 4,
      name: "Ясай маки стандарт 185 г",
      type: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      btn: "В корзину",
      icons: "shopping-cart.svg",
      price: 250,
      images: "goods-5.jpg",
    },
    {
      id: 5,
      name: "Ролл с креветкой стандарт",
      type: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      btn: "В корзину",
      icons: "shopping-cart.svg",
      price: 250,
      images: "goods-6.jpg",
    },
  ];
  const loading = () => {
    container.innerHTML =
      "<div style='width: 100%; text-align: center;'>Выгрузка товара</div>";
  };

  const randerGoods = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
										<div class="products-card">
														<div class="products-card__image">
															<img src="./images/goods/${card.images}" alt="${card.images}">
														</div>
														<div class="products-card__description">
															<div class="products-card__description-row">
																<h5 class="products-card__description--name">${card.name}</h5>
															</div>
															<div class="products-card__description-row">
																<p class="products-card__description--text">
																${card.type}
																</p>
															</div>
															<div class="products-card__description-row">
																<div class="products-card__description-controls">
																	<button class="btn btn-primary">
																	${card.btn}
																		<img src="./images/icons/${card.icons}" alt="${card.icons}">
																	</button>
																	<span class="products-card__description-controls--price">${card.price} ₽</span>
																</div>
															</div>
														</div>
													</div>
										`
      );
    });
  };
  if (container) {
    loading();
    setTimeout(() => {
      randerGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
