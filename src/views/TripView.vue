<template>
<!--  Header-->
  <div class="d-flex align-items-center gap-3">
    <div class="btn back" @click="back">back</div>
    <h1>Trip: {{trip.name}}</h1>
  </div>
  <p><span v-for="(user, index) in trip.users" :key="index">
        {{ trip.users[trip.users.length - 1] === user ? user.name : user.name + ', ' }}
      </span></p>
<!--  Buttons -->
  <div class="d-flex align-items-center justify-content-center gap-4 mt-3">
    <button class="btn btn-primary">Expenses</button>
    <button @click=balances() class="btn btn-secondary">Balances</button>
  </div>
  <div class="d-flex justify-content-between mt-3">
    <span>Total: {{ calculateTotal() }}€</span>
    <a @click="addExpense()" class="btn">Add an expense</a>
  </div>
<!--  TAble-->
  <div class="expenses mt-4 d-flex flex-column gap-3" >
    <div class="expense" v-for="(expense, index) in trip.expenses.sort((a,b) => new Date(b.date) - new Date(a.date))" :key="index">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <h3>{{ expense.name }}</h3>
          <p>Paid by: {{ trip.users.filter((user) => user.id === expense.user)[0].name }}</p>
          <p>on {{ expense.date }}</p>
        </div>
        <div>
          <h3>{{ Math.ceil(expense.amount) }}€</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  //   arrow
  // },
  data () {
    return {
      trip: null
    }
  },
  created() {
    this.trip = JSON.parse(localStorage.getItem('data')).trips[this.$route.params.id]
  },
  methods: {
    back () {
      this.$router.push(`/`)
    },
    calculateTotal () {
      let total = 0
      this.trip.expenses.map((expense) => {
        total += Math.ceil(expense.amount)
      })
      return total
    },
    addExpense () {
      this.$router.push(`/add_expense/${this.$route.params.id}`)
    },
    balances () {
      this.$router.push(`/balances/${this.$route.params.id}`)
    }
  }
}
</script>


<style scoped>
.back {
  cursor: pointer;
}

.expense {
  border-bottom: 1px solid black;
}

p {
  margin: 0;
}

.active {
  background-color: #4646ff;
  color: white;
}
</style>
