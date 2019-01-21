const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 111 222 33 44', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'John', 2017, '+7 222 333 44 55', 'images/mondeo.jpg'),
    car('Porshe', 'Panamera', 'Bill', 2018, '+7 333 444 55 66', 'images/panamera.jpg')
]

new Vue({
    el: '#app',
    data: {
        cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cancel')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            const filter = this.search.toLowerCase()
            return this.cars.filter(car => {
                return car.name.toLowerCase().indexOf(filter) > -1 || car.model.toLowerCase().indexOf(filter) > -1})
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})