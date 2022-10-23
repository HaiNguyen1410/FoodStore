<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg custom_nav-container">
      <router-link to="/" class="navbar-brand">
        <span> Food Store </span>
      </router-link>
      <div class="" id="">
        <div class="container">
          <div class="mr-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav justify-content-between">
              <div class="User_option">
                <li class="">
                  <router-link to="">
                    <b-icon
                      class="fa"
                      icon="person-fill"
                      aria-hidden="true"
                    ></b-icon>
                  </router-link>
                </li>
                <form class="form-inline">
                  <button class="btn nav_search-btn" type="submit">
                    <b-icon
                      icon="search"
                      class="fa"
                      aria-hidden="true"
                    ></b-icon>
                  </button>
                </form>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <v-spacer></v-spacer>
      <router-link to="/cart"><b-icon icon="cart-fill"></b-icon></router-link>
    </nav>
  </div>
</template>

<style scoped>
.fa {
  width: 20px;
  height: 20px;
}

form .fa {
  margin-bottom: 2px;
}

.navbar-nav {
  margin-bottom: -4px;
}
</style>
