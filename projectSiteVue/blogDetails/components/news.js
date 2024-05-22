const News = {
  data() {
    return {
      news: [
        {
          id: "Kitchen",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          img: "../image/ImagePost1.png",
          alt: "news photo",
          date: "22 December,2022",
          link1: "Iterior",
          link2: "Home",
          link3: "Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many  variations of passages of Lorem Ipsum available, but the majorit have suffered alteration in some form, by injecthumour, or andomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        {
          id: "Bedroom",
          title: "Best For Any Office & Business Interior Solution",
          img: "../image/ImgNews3.png",
          alt: "news photo",
          date: "25 April,2022",
          link1: "Iterior",
          link2: "Home",
          link3: "Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae  turpmaximus.posuere in.Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injecthumour, or  randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        {
          id: "Building",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          img: "../image/imgNews5.png",
          alt: "news photo",
          date: "5 August,2022",
          link1: "Iterior",
          link2: "Home",
          link3: "Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are manyvariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or  ndomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        {
          id: "Architecture",
          title: "Lets Get Solution For Building Construction Work",
          img: "../image/ImgNews1.png",
          alt: "news photo",
          date: "26 October,2022",
          link1: "Iterior",
          link2: "Home",
          link3: "Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many  variations of passages of Lorem Ipsum available, but the majority   have suffered alteration in some form, by injecthumour, or   randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        {
          id: "Kitchen Planning",
          title: "Lets Get Solution For Building Construction Work",
          img: "../image/ImagePost2.png",
          alt: "news photo",
          date: "26 March,2023",
          link1: "Iterior",
          link2: "Home",
          link3: "Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae urpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or  randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
      ],

      currentNews: [
        {
          id: "Building",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          img: "../image/imgNews5.png",
          alt: "news photo",
          date: "5 August,2022",
          link1: "Iterior",
          link2: "Home",
          link3: "Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are manyvariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or  ndomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
      ],

      buttons: [
        {
          id: "Kitchen",
          title: "Kitchen",
        },
        {
          id: "Bedroom",
          title: "Bedroom",
        },
        {
          id: "Architecture",
          title: "Architecture",
        },
        {
          id: "Building",
          title: "Building",
        },
        {
          id: "Kitchen Planning",
          title: "Kitchen Planning",
        },
      ],
    };
  },
  methods: {
    sortNews(id) {
      const tagSort = id;
      this.news.forEach((post) => {
        if (tagSort === post.id) {
          this.currentNews = [];
          return this.currentNews.push(post);
        }
      });
    },
  },

  template: `
  <div class="content center">
    <div class="section-news">

    <div class="section-news__post" v-for="post in currentNews" :key="post.id">
      <h2 class="section-news__title-news">
       {{ post.title }}
      </h2>
      <img class="section-news__image-post" :src="post.img" alt="{{ post.alt }}" />
      <div class="section-news__date-link">
        <p class="section-news__date">{{ post.date }}</p>
        <div class="section-news__breadcrumbs">
          <li class="section-news__breadcrumbs-item">
            <a href="#" class="section-news__breadcrumbs-link">{{ post.link1 }}</a>
          </li>
          <li class="section-news__breadcrumbs-item">
            <a href="#" class="section-news__breadcrumbs-link">{{ post.link2 }}</a>
          </li>
          <li class="section-news__breadcrumbs-item">
            <a href="#" class="section-news__breadcrumbs-link">{{ post.link3 }}</a>
          </li>
        </div>
      </div>
      <div class="section-news__text">
        <p>{{ post.text }}</p>
      </div>
    </div>

      <div class="section-quotes">
        <img src="../image/item.png" alt="" />
        <h2 class="section-quotes__quotes">
           The details are not the details. They make the design.
        </h2>
      </div>

      <div class="section-news__post" v-for="post in news" :key="post.id">
      <h2 class="section-news__title-news">
       {{ post.title }}
      </h2>
      <img class="section-news__image-post" :src="post.img" alt="{{ post.alt }}" />
      <div class="section-news__date-link">
        <p class="section-news__date">{{ post.date }}</p>
        <div class="section-news__breadcrumbs">
          <li class="section-news__breadcrumbs-item">
            <a href="#" class="section-news__breadcrumbs-link">{{ post.link1 }}</a>
          </li>
          <li class="section-news__breadcrumbs-item">
            <a href="#" class="section-news__breadcrumbs-link">{{ post.link2 }}</a>
          </li>
          <li class="section-news__breadcrumbs-item">
            <a href="#" class="section-news__breadcrumbs-link">{{ post.link3 }}</a>
          </li>
        </div>
      </div>
      <div class="section-news__text">
        <p>{{ post.text }}</p>
      </div>
    </div>

    </div>
    <div class="tags">
    <h3 class="tags__title">Tags</h3>
    <div class="tags__buttons-tags">
      <button v-for="button in buttons" :key="button.id"
      @click="sortNews(button.id)" type="button" class="tags__button-tags">{{button.title}}
      </button>
     </div> 
    </div>
    </div>
  `,
};
