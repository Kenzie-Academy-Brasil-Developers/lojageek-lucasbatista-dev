const dataItens = [
  {
    name: "AnimeWoman",
    price: 54.9,
    image: "/assets/img/actions/animewoman.jpg",
    type: "figure",
  },
  {
    name: "DragonBall",
    price: 105.9,
    image: "./assets/img/actions/dragonballpersonagem.jpg",
    type: "figure",
  },
  {
    name: "StarWars",
    price: 89.9,
    image: "./assets/img/actions/starwarspersonagem.jpg",
    type: "figure",
  },
  {
    name: "Clock",
    price: 54.9,
    image: "./assets/img/painting/clock.jpg",
    type: "quadro",
  },
  {
    name: "Gamepad",
    price: "110.90",
    image: "./assets/img/painting/gamepad.jpg",
    type: "quadro",
  },
  {
    name: "Personagem",
    price: 79.9,
    image: "./assets/img/painting/personagem.jpg",
    type: "quadro",
  },
  {
    name: "AnimeWoman",
    price: 54.9,
    image: "/assets/img/actions/animewoman.jpg",
    type: "figure",
  },
  {
    name: "DragonBall",
    price: 105.9,
    image: "./assets/img/actions/dragonballpersonagem.jpg",
    type: "figure",
  },
  {
    name: "StarWars",
    price: 89.9,
    image: "./assets/img/actions/starwarspersonagem.jpg",
    type: "figure",
  },
  {
    name: "Clock",
    price: 54.9,
    image: "./assets/img/painting/clock.jpg",
    type: "quadro",
  },
  {
    name: "Gamepad",
    price: "110.90",
    image: "./assets/img/painting/gamepad.jpg",
    type: "quadro",
  },
  {
    name: "Personagem",
    price: 79.9,
    image: "./assets/img/painting/personagem.jpg",
    type: "quadro",
  },
  {
    name: "AnimeWoman",
    price: 54.9,
    image: "/assets/img/actions/animewoman.jpg",
    type: "figure",
  },
  {
    name: "DragonBall",
    price: 105.9,
    image: "./assets/img/actions/dragonballpersonagem.jpg",
    type: "figure",
  },
  {
    name: "StarWars",
    price: 89.9,
    image: "./assets/img/actions/starwarspersonagem.jpg",
    type: "figure",
  },
  {
    name: "Clock",
    price: 54.9,
    image: "./assets/img/painting/clock.jpg",
    type: "quadro",
  },
  {
    name: "Gamepad",
    price: "110.90",
    image: "./assets/img/painting/gamepad.jpg",
    type: "quadro",
  },
  {
    name: "Personagem",
    price: 79.9,
    image: "./assets/img/painting/personagem.jpg",
    type: "quadro",
  },
  {
    name: "AnimeWoman",
    price: 54.9,
    image: "/assets/img/actions/animewoman.jpg",
    type: "figure",
  },
  {
    name: "DragonBall",
    price: 105.9,
    image: "./assets/img/actions/dragonballpersonagem.jpg",
    type: "figure",
  },
  {
    name: "StarWars",
    price: 89.9,
    image: "./assets/img/actions/starwarspersonagem.jpg",
    type: "figure",
  },
  {
    name: "Clock",
    price: 54.9,
    image: "./assets/img/painting/clock.jpg",
    type: "quadro",
  },
  {
    name: "Gamepad",
    price: "110.90",
    image: "./assets/img/painting/gamepad.jpg",
    type: "quadro",
  },
  {
    name: "Personagem",
    price: 79.9,
    image: "./assets/img/painting/personagem.jpg",
    type: "quadro",
  },
];

// listando e acessando a lista de produtos filtrando por quadro
let list1 = document.querySelector(".list1");

function listarProdutosQuadros(lista, referenciaHtml) {
  //percorrendo a lista de produtos
  for (let i = 0; i < lista.length; i++) {
    // acessando produto
    let produto = lista[i];
    if (produto.type == "quadro") {
      //criando template --> li
      let templateMontado = criarTemplateQuadro(produto);

      //jogar template na interface
      referenciaHtml.appendChild(templateMontado);
    }
  }
}
listarProdutosQuadros(dataItens, list1);

//listando e acessando a lista de produtos filtrando por action figure
let list2 = document.querySelector(".list2");

console.log(list2);
function listarProdutosFigure(lista, referenciaHtml) {
  //percorrendo a lista de produtos
  for (let i = 0; i < lista.length; i++) {
    // acessando produto
    let produto = lista[i];
    if (produto.type == "figure") {
      //criando template --> li
      let templateMontado = criarTemplateFigure(produto);

      //jogar template na interface
      referenciaHtml.appendChild(templateMontado);
    }
  }
}
listarProdutosFigure(dataItens, list2);

//Produto --> informações (name / price / type / image)
// criar o template que joga as informações para o html
// alimentar as tags com as informações dos produtos
//montar o template
// return desse template pronto
function criarTemplateQuadro(produto) {
  //recuperando informações do produto
  let name = produto.name;
  let price = produto.price;
  let image = produto.image;
  let type = produto.type;

  // criando template
  let tagLi = document.createElement("li");
  let tagImg = document.createElement("img");
  let tagH2 = document.createElement("h2");
  let tagP = document.createElement("p");

  //adicionando classe tagImg
  tagImg.classList.add("list-1-img");
  //alimentando as tags com as informações
  tagImg.src = image;
  tagH2.innerText = name;
  tagP.innerText = `R$ ${price}`;

  //montar o template
  tagLi.append(tagImg, tagH2, tagP);

  return tagLi;
}

function criarTemplateFigure(produto) {
  let name = produto.name;
  let price = produto.price;
  let image = produto.image;
  let type = produto.type;

  let tagLi = document.createElement("li");
  let tagImg = document.createElement("img");
  let tagH2 = document.createElement("h2");
  let tagP = document.createElement("p");

  tagImg.classList.add("list-2-img");

  tagImg.src = image;
  tagH2.innerText = name;
  tagP.innerText = `R$ ${price}`;

  tagLi.append(tagImg, tagH2, tagP);

  return tagLi;
}
