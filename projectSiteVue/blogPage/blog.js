const { createApp, ref } = Vue;
createApp({
  data() {
    return {
      data: [
        {
          id: 1,
          img: "../image/ImgNews1.png",
          alt: "news photo",
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 2,
          img: "../image/ImgNews2.png",
          alt: "news photo",
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 3,
          img: "../image/ImgNews3.png",
          alt: "news photo",
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          id: 4,
          img: "../image/imgNews4.png",
          alt: "news photo",
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 5,
          img: "../image/imgNews5.png",
          alt: "news photo",
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },

        {
          id: 6,
          img: "../image/imgNews6.png",
          alt: "news photo",
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      ],
    };
  },
}).mount("#app");
