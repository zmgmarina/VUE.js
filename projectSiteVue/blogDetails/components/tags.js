const Tags = {
    data() {
      return {
        buttons: [
            {
                id: 1,
                tag: 'Kitchen'
            },
            {
                id: 2,
                tag: 'Bedroom'
            },
            {
                id: 3,
                tag: 'Architecture'
            },
            {
                id: 4,
                tag: 'Building'
            },
            {
                id: 5,
                tag: 'Kitchen Planningn'
            },
        ],
      };
    },
    methods: {
      sortNewsByTag() {
       
      },
      
    },
  
    template: `
    <div class="tags__buttons-tags" 
        <button class="tags__button-tags" v-for="button in buttons" :key="button.id>{{ button.tag }}</button>
    </div>
     `
  };
