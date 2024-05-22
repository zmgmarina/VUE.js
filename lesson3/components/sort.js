const Sort = {
    data() {
         return {
            goods: [
                {
                    id: 1,
                    title: "ELLERY X M'O CAPSULE",
                    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    price: 10,
                    img: 'image/photo1.jpg'
                     
                },
                {
                    id: 2,
                    title: "ELLERY X M'O CAPSULE",
                    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    price: 50,
                    img: 'image/photo2.jpg'
                     
                },
                {
                    id: 3,
                    title: "ELLERY X M'O CAPSULE",
                    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    price: 10,
                    img: 'image/photo3.jpg'
                     
                },
                {
                    id: 4,
                    title: "ELLERY X M'O CAPSULE",
                    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    price: 80,
                    img: 'image/photo4.jpg'
                     
                }
            ],
         }
    },
    methods: {
        sortUp() {
            this.goods.sort((a,b) => a.price - b.price);
        },
        sortDown() {
            this.goods.sort((a,b) => b.price - a.price);
        }
       
    },

    template:`
     
    <div class="box-product center">
     <button @click="sortUp">Сортировать по возрастанию</button>
     <button @click="sortDown">Сортировать по убыванию</button>
        <div class="productItem" v-for="good in goods" :key="good.id">
          <img :src="good.img" alt="photo">
          <div class="productItem__info">
            <a class="productItem__name" href="#">{{ good.title }}</a>
            <p class="productItem__description">
              {{ good.text }}
            </p>
            <p class="productItem__price"> {{ good.price }}</p>
          </div>
        </div>
        
    </div>   
    
    `
}


   
     
    

