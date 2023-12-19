<template>
  <div class="container">
    <sidebarMain/>
    <headerTop/>
    <main>
      <RouterView />
      <h1>Analytics</h1>
      <div class="analyse">
        <div class="sales">
          <div class="status">
            <div class="info">
              <h3>Total Sales</h3>
              <h1>$65,024</h1>
            </div>
            <div class="progress">
              <svg>
                <circle cx="38" cy="38" r="36"/>
              </svg>
              <div class="percentage">
                <p>+81%</p>
              </div>
            </div>
          </div>
        </div>
        <div class="visits">
          <div class="status">
            <div class="info">
              <h3>Site Visits</h3>
              <h1>24,024</h1>
            </div>
            <div class="progress">
              <svg>
                <circle cx="38" cy="38" r="36"/>
              </svg>
              <div class="percentage">
                <p>-31%</p>
              </div>
            </div>
          </div>
        </div>
        <div class="searches">
          <div class="status">
            <div class="info">
              <h3>Searches</h3>
              <h1>13,024</h1>
            </div>
            <div class="progress">
              <svg>
                <circle cx="38" cy="38" r="36"/>
              </svg>
              <div class="percentage">
                <p>+24%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new-users">
        <h2>New Users</h2>
        <div class="user-list">
          <div class="user">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            <h2>Rian</h2>
            <p>54 Min Ago</p>
          </div>
          <div class="user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            <h2>Dwayne</h2>
            <p>3 Hours Ago</p>
          </div>
          <div class="user">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            <h2>Emma</h2>
            <p>5 Hours Ago</p>
          </div>
          <div class="user">
            <span class="material-symbols-outlined">
              add
            </span>
            <h2>More</h2>
            <p>New Users</p>
          </div>
        </div>
      </div>
      <div class="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Number</th>
              <th>Payments</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in Orders" :key="order.productNumber">
              <td>{{ order.productName }}</td>
              <td>{{ order.productNumber }}</td>
              <td>{{ order.paymentStatus }}</td>
              <td :class="{'danger': order.Status === 'Declined'? true:false, 
              'warning':order.Status === 'Pending'? true:false, 
              'primary':order.Status === 'Active'? true:false }">{{ order.Status }}</td>
              <td class="primary">Details</td>
            </tr>
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
      <div class="back-drop" id="backdrop">
        <button class="backdrop-button" ></button>
      </div>
    </main>
  </div>
  <!-- <loader></loader> -->
  <!-- <logIn/> -->
  



</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue';
  import sidebarMain from './components/sidebar/sidebar-main.vue';
  import headerTop from './components/header/header.vue';
  import loader from './components/loader/loader.vue';
  import logIn from './views/log-in.vue';
  import orders from './orders';
  
  const Orders = ref(orders);

</script>

<style scoped>

 /* aside{
  border-width: 2px;
  border-color: rgb(255, 0, 0);
  border-style: dashed;
 } */

  /* *{
  border-width: 1px;
  border-color: rgb(255, 0, 0);
  border-style: dashed;
 } */

</style>

