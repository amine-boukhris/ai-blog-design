const featuredArticles = [
  {
    title: "Unlocking the Potential: Exploring Quantum Computing's Impact on Modern Technology",
    image: "./assets/featured-image.jpg",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus, earum dolorem officia atque odio!",
    authorName: "Amine Boukhris",
    authorImage: "./assets/profile.jpg",
  },
  {
    title: "Navigating the Digital Frontier: The Rise of Augmented Reality Applications",
    image: "./assets/featured-image2.jpg",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus, earum dolorem officia atque odio!",
    authorName: "Hugo Sanford",
    authorImage: "./assets/profile.jpg",
  },
  {
    title: "AI-Powered Healthcare: Revolutionizing Patient Diagnostics and Treatment",
    image: "./assets/featured-image3.jpg",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus, earum dolorem officia atque odio!",
    authorName: "Marcel Yates",
    authorImage: "./assets/profile.jpg",
  },
];

const button1 = document.querySelector("#featured-article1");
const button2 = document.querySelector("#featured-article2");
const button3 = document.querySelector("#featured-article3");
button1.checked = true

const articleElement = document.querySelector(".featured__content");
let currentIndex = 0;

articleElement.innerHTML = `
  <div class="featured__author">
    <img src="${featuredArticles[currentIndex].authorImage}" alt="">
    <span>${featuredArticles[currentIndex].authorName}</span>
  </div>
  <h2 class="featured__title">${featuredArticles[currentIndex].title}</h2>
  <p class="featured__article-textcontent">${featuredArticles[currentIndex].content}... <a href="./articles/:id">Read more</a></p>
`;
articleElement.style.backgroundImage = `url(${featuredArticles[currentIndex].image})`

currentIndex = (currentIndex + 1) % featuredArticles.length;

function changeFeaturedArticle() {
  const article = featuredArticles[currentIndex];

  articleElement.classList.add("hidden");
  setTimeout(() => {
    articleElement.innerHTML = `
      <div class="featured__author">
        <img src="${article.authorImage}" alt="">
        <span>${article.authorName}</span>
      </div>
      <h2 class="featured__title">${article.title}</h2>
      <p class="featured__article-textcontent">${article.content}... <a href="./articles/:id">Read more</a></p>
    `;
    articleElement.style.backgroundImage = `url(${featuredArticles[currentIndex].image})`
    currentIndex = (currentIndex + 1) % featuredArticles.length;

    if (currentIndex == 0) {
      button3.checked = true;
    } else if (currentIndex == 1) {
      button1.checked = true;
    } else if (currentIndex == 2) {
      button2.checked = true;
    }

    articleElement.classList.remove("hidden");
  }, 300);
}

setInterval(changeFeaturedArticle, 8000);

button1.addEventListener("click", function () {
  currentIndex = 0;
  changeFeaturedArticle();
});

button2.addEventListener("click", function () {
  currentIndex = 1;
  changeFeaturedArticle();
});

button3.addEventListener("click", function () {
  currentIndex = 2;
  changeFeaturedArticle();
});
