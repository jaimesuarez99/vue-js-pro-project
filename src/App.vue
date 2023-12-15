<template>
  <!-- <header>
    <div>header</div>
  </header> -->
  <div class="container">
    <sidebarMain/>
    
    <main>
      <!--Main content -->
      <RouterView />
      <!--Analitycs content -->
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
      <!--End of Analitycs content -->
      <!--New Users Content-->
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
      <!--End of New Users -->
      <!--Recent Orders Table-->
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
      <!--End of Recent Orders -->
    </main>
    <!--End of main-->
    <!-- Right Section-->
    <div class="right-section">
      <div class="nav">
        <button class="menu-btn">
          <span class="material-symbols-outlined">
            menu
          </span>
        </button>
        <div class="dark-mode">
          <span class="material-symbols-outlined active">
            light_mode
          </span>
          <span class="material-symbols-outlined">
            dark_mode
          </span>
        </div>
        <div class="profile">
          <div class="info">
            <p>Hey, <b>Tim</b></p>
            <smal class="text-muted">Admin</smal>
          </div>
          <div class="profile-photo">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
          </div>
        </div>
      </div>
      <!--End of Navigation-->
      <div class="user-profile">
        <div class="logo">
          <img src="./assets/logo.svg" alt="Logo">
          <h2>Prestadores</h2>
          <p>Web Platform</p>
        </div>
      </div>
      <div class="reminders">
        <div class="header">
          <h2>Reminders</h2>
          <spam class="material-symbols-outlined">
            notifications_none
          </spam>
        </div>
        <div class="notyfications">
          <div class="icon">
            <span class="material-symbols-outlined">
              volume_up
            </span>
          </div>
          <div class="content">
            <div class="info">
              <h3>Workshop</h3>
              <small class="text-muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <spam class="material-symbols-outlined">
              more_vert
            </spam>
          </div>
        </div>
        <div class="notyfications deactive">
          <div class="icon">
            <spam class="material-symbols-outlined">
              edit
            </spam>
          </div>
          <div class="content">
            <div class="info">
              <h3>Workshop</h3>
              <small class="text-muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <spam class="material-symbols-outlined">
              more_vert
            </spam>
          </div>
        </div>
        <div class="notyfications add-reminder">
          <div>
            <spam class="material-symbols-outlined">
              add
            </spam>
          </div>
          <h3>Add Reminder</h3>
        </div>
      </div>
    </div>
      <!--End of Right Section -->
  </div>



</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue';
  import sidebarMain from './components/sidebar/sidebar-main.vue';
  import orders from './orders';
  
  const Orders = ref(orders);

</script>

<style scoped>
 header{
  border-width: 1px;
  border-color: aqua;
  border-style: dashed;
  width: 100%;
  height: 100px;
 }

 main{
  border-width: 1px;
  border-color: aqua;
  border-style: dashed;
  width: 100%;
  height: 100vh;
 }

</style>

