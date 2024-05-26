import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'


if(!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify({
        trips: [
            {
                name: 'Spain 2024',
                users: [
                    {
                        id: 1,
                        name: 'Alice',
                    },
                    {
                        id: 2,
                        name: 'Bob'
                    },
                    {
                        id: 3,
                        name: 'Carl'
                    }
                ],
                expenses: [
                    {
                        name: 'Coffee',
                        user: 1,
                        date: '2024-06-25',
                        amount: 10
                    },
                    {
                        name: 'Market',
                        user: 2,
                        date: '2024-06-23',
                        amount: 20
                    },
                    {
                        name: 'Beer',
                        user: 3,
                        date: '2024-06-21',
                        amount: 25
                    },
                ]
            },
            {
                name: 'Lyon 2024',
                users: [
                    {
                        id: 4,
                        name: 'David',
                    },
                    {
                        id: 5,
                        name: 'Elsa'
                    },
                    {
                        id: 6,
                        name: 'Florian'
                    },
                ],
                expenses: [
                    {
                        name: 'Restaurant',
                        user: 4,
                        date: '2024-06-25',
                        amount: 30
                    },
                    {
                        name: 'Car rental',
                        user: 6,
                        date: '2024-06-23',
                        amount: 120
                    },
                    {
                        name: 'Cinema',
                        user: 5,
                        date: '2024-06-21',
                        amount: 24
                    },
                    {
                        name: 'Ice cream',
                        user: 5,
                        date: '2024-06-03',
                        amount: 12
                    },
                ]
            },
        ]
    }))
}

createApp(App).use(router).mount('#app')
