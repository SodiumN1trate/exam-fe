<template>
  <HeaderTitle title="trips" />
  <div class="home d-flex flex-column gap-3 mt-3">
    <div class="trip d-flex justify-content-between align-items-center" v-for="(trip, index) in trips" :key="index" @click="selectTrip(index)">
      <div>
        <h2>{{ trip.name }}</h2>
        <p><span v-for="(user, index) in trip.users" :key="index">
        {{ trip.users[trip.users.length - 1] === user ? user.name : user.name + ', ' }}
      </span></p>
      </div>
      <div>
        >
      </div>
    </div>
  </div>
</template>

<script>

import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  name: 'HomeView',
  components: {HeaderTitle},
  data () {
    return {
      trips: []
    }
  },
  created() {
    this.trips = JSON.parse(localStorage.getItem('data')).trips
  },
  methods: {
    selectTrip (index) {
      this.$router.push(`/trip/${index}`)
    }
  }
}
</script>

<style scoped>
.trip {
  border: 1px solid gray;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
</style>

