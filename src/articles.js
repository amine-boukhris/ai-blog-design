// pagination
const itemsPerPage = 6;
const articles = [
  {
    title: "The Future of AI: Advancements and Challenges",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article1.jpg",
    date: "2023-08-15",
    views: 1200,
  },
  {
    title: "Cryptocurrencies: Decoding the Complex Landscape",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article3.jpg",
    date: "2023-08-05",
    views: 1500,
  },
  {
    title: "Exploring Virtual Reality: A New Dimension of Gaming",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article2.jpg",
    date: "2023-08-10",
    views: 980,
  },
  {
    title: "Cryptocurrencies: Decoding the Complex Landscape",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article3.jpg",
    date: "2023-08-05",
    views: 1500,
  },
  {
    title: "The Rise of 5G: Transforming Communication Networks",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article4.jpg",
    date: "2023-07-30",
    views: 800,
  },
  {
    title: "Ethical Considerations in AI Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article5.jpg",
    date: "2023-07-25",
    views: 1300,
  },
  {
    title: "Cryptocurrencies: Decoding the Complex Landscape",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article3.jpg",
    date: "2023-08-05",
    views: 1500,
  },
  {
    title: "The Potential of Quantum Computing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article6.jpg",
    date: "2023-07-20",
    views: 1100,
  },
  {
    title: "Augmented Reality Applications in Healthcare",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article7.jpg",
    date: "2023-07-15",
    views: 900,
  },
  {
    title: "The Evolution of E-commerce: Trends and Innovations",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article8.jpg",
    date: "2023-07-10",
    views: 750,
  },
  {
    title: "Data Privacy in the Digital Age",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article9.jpg",
    date: "2023-07-05",
    views: 1100,
  },
  {
    title: "Advancements in Renewable Energy Technologies",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article2.jpg",
    date: "2023-06-30",
    views: 850,
  },
  {
    title: "The Role of Big Data in Business Strategy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article4.jpg",
    date: "2023-06-25",
    views: 1000,
  },
  {
    title: "Cybersecurity Best Practices: Protecting Your Digital Identity",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article6.jpg",
    date: "2023-07-10",
    views: 800,
  },
  {
    title: "The Evolution of E-commerce: Trends and Innovations",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article8.jpg",
    date: "2023-07-10",
    views: 750,
  },
  {
    title: "Data Privacy in the Digital Age",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article9.jpg",
    date: "2023-07-05",
    views: 1100,
  },
  {
    title: "The Future of AI: Advancements and Challenges",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article1.jpg",
    date: "2023-08-15",
    views: 1200,
  },
  {
    title: "Data Privacy in the Digital Age",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod vestibulum convallis. Nulla varius ac dolor non mattis. Etiam vestibulum, purus in cursus feugiat.",
    image: "./assets/article9.jpg",
    date: "2023-07-05",
    views: 1100,
  },
];

const articleList = document.querySelector(".articles");
const pagination = document.querySelector(".articles__pagination");

function displayArticles(page) {
  articleList.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = startIndex; i < endIndex && i < articles.length; i++) {
    const article = articles[i];
    articleList.innerHTML += `
      <article>
        <img src="${article.image}" alt="" class="articles__article-image">
        <h2 class="articles__article-title">${article.title}</h2>
        <p class="articles__article-textcontent">${article.content}</p>
        <hr>
        <div class="articles__article-metadata">
          <span>----</span>
          <div class="articles__article-metadata-date">
            <i class="fa-solid fa-calendar"></i>
            <span>${article.date}</span>
          </div>
          <div class="articles__article-metadata-views">
            <i class="fa-solid fa-eye"></i>
            <span>${article.views}</span>
          </div>
        </div>
          <button class="articles__article-cta-button">Read More</button>
      </article>
    `;
  }
}

function createPaginationButtons(totalPages) {
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.classList.add("articles__pagination-button");
    if (i == 1) button.classList.add("active");
    button.textContent = i;
    button.addEventListener("click", () => {
      displayArticles(i);
      removeButtonsActive();
      button.classList.add("active");
      articleList.scrollIntoView({ behavior: "smooth" });
    });
    pagination.appendChild(button);
  }
}

function removeButtonsActive() {
  const btns = document.querySelectorAll(".articles__pagination-button");
  btns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
}

const totalPages = Math.ceil(articles.length / itemsPerPage);
createPaginationButtons(totalPages);

displayArticles(1);
