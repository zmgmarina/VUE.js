const Task = {
    data() {
         return {
            title: '',
            tasks: [],
         }
    },
    methods: {
        addTask() {
            this.tasks.push({
                id: Date.now(), //генерируем id методом now()
                title: this.title, 
            })
            this.title = ''
        },
        delTask(id) {
            this.tasks = this.tasks.filter((task) => task.id === id)
        }
    },

    template:`
    <div>
    <input type="text" v-model="title">
    <button @click="addTask">Добавить задачу</button>
    <ul>
        <li v-for="task in tasks" :key="task.id">
            {{ task.title }}
            <button @click="delTask(task.id)">Удалить задачу</button>
        </li>
    </ul>
    </div>
    `
}