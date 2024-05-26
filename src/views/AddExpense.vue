<template>
  <!--  Header-->
  <div class="d-flex align-items-center gap-3 jus">
    <div class="btn back" @click="back">back</div>
    <h1>Trip: {{trip.name}}</h1>
  </div>
  <a>Add an expense</a>
  <div class="mt-5">
    <form class="d-flex flex-column gap-3" @submit.prevent="submit">
      <label>
        Expense Name
        <br>
        <input placeholder="Enter expense name" required v-model="form.name"/>
      </label>
      <label>
        Expense Date
        <br>
        <input type="date" placeholder="Enter expense date"  v-model="form.date" required/>
      </label>
      <label>
        Expense Amount
        <br>
        <input type="number" placeholder="Enter expense amount" v-model="form.amount" required />
      </label>
      <label>
        Who paid?
        <br>
        <select name="cars" id="cars" v-model="form.user" required>
          <option v-for="(user, index) in trip.users" :key="index" :value="user.id">{{ user.name }}</option>
        </select>
      </label>
      <button class="btn btn-secondary align-self-center w-75">
          Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      trip: null,
      form: {
        name: null,
        user: null,
        date: null,
        amount: null,
      }
    }
  },
  created() {
    this.trip = JSON.parse(localStorage.getItem('data')).trips[this.$route.params.id]
  },
  methods: {
    back () {
      this.$router.push(`/`)
    },
    submit () {
      this.trip.expenses.push(this.form)
      let trips = JSON.parse(localStorage.getItem('data'))
      trips.trips[this.$route.params.id] = this.trip
      localStorage.setItem('data', JSON.stringify(trips))
      this.$router.push(`/trip/${this.$route.params.id}`)
    }
  }
}
</script>

<style>
input {
  border:none;
  border-bottom: 1px solid #9a9a9a;
  padding: 5px 10px;
  outline: none;
}

[placeholder]:focus::-webkit-input-placeholder {
  transition: text-indent 0.4s 0.4s ease;
  text-indent: -100%;
  opacity: 1;
}
</style>