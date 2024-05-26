<template>
  <!--  Header-->
  <div class="d-flex align-items-center gap-3">
    <div class="back btn" @click="back">back</div>
    <h1>Trip: {{trip.name}}</h1>
  </div>
  <!--  Buttons -->
  <p><span v-for="(user, index) in trip.users" :key="index">
        {{ trip.users[trip.users.length - 1] === user ? user.name : user.name + ', ' }}
      </span></p>
  <div class="d-flex align-items-center justify-content-center gap-4">
    <button @click="expenses" class="btn btn-secondary">Expenses</button>
    <button class="btn btn-primary">Balances</button>
  </div>

  <div class="graph d-flex mt-5 align-items-center w-100 justify-content-center">
    <div class="red d-flex flex-column gap-3 align-items-end">
      <div class="red-square" v-for="(user, index) in graph.filter((user) => user.pays < 0)" :key="index" :style="{width: (((Math.round(user.pays * 100) / 100) * 100) / highestPay) + '%'}">
        <span>{{user.name}} : {{ Math.round(user.pays * 100) / 100 }} €</span>
      </div>
    </div>
    <div>|</div>
    <div class="green d-flex flex-column gap-3 align-items-start">
      <div class="green-square" v-for="(user, index) in graph.filter((user) => user.pays >= 0)" :key="index" :style="{width: (((Math.round(user.pays * 100) / 100) * 100) / highestPay) + '%'}">
        {{user.name}} : {{ Math.round(user.pays * 100) / 100 }} €
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      trip: null,
      graph: [],
      highestPay: 0
    }
  },
  created() {
    this.trip = JSON.parse(localStorage.getItem('data')).trips[this.$route.params.id]

    this.graph = this.trip.users

    this.trip.expenses.map((expense) => {
      this.trip.users.map((user) => {
        let equalPrice = expense.amount / this.trip.users.length
        let userGraph = this.graph.filter((graphUser) => graphUser.id === user.id)[0]
        if(expense.user === user.id) {
          if(userGraph.pays) {
            userGraph.pays = userGraph.pays + equalPrice * this.trip.users.length - 1
          } else {
            userGraph.pays = equalPrice * this.trip.users.length - 1
          }
        } else {
          if(userGraph.pays) {
            userGraph.pays = userGraph.pays - equalPrice
          } else {
            userGraph.pays = 0 - equalPrice
          }
        }

        if(this.highestPay > userGraph.pays) {
          this.highestPay = userGraph.pays
        }
      })
    })
  },
  methods: {
    back () {
      this.$router.push(`/`)
    },
    expenses () {
      this.$router.push(`/trip/${this.$route.params.id}`)
    }
  }
}
</script>

<style scoped>
.red-square {
  background-color: red;
  border-radius: 5px;
  padding: 10px;
}

.green-square {
  background-color: green;
  border-radius: 5px;
  padding: 10px;
}

.active {
  background-color: #4646ff;
  color: white;
}
</style>