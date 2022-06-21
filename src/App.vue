<template>
    <div id="app">
        <nav>
            <router-link to="/"><img src="../src/assets/pokemon.png" alt="" width="200px"></router-link>
        </nav>
        <router-view/>
    </div>
    
</template>

<style lang="scss">

body {
    font-family: sans-serif;
    width: 100%;
    height: 100vh;
    background-color: #212121
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}

input:focus {
    outline: none;
    border: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

ul {
    list-style-type: none;
}

a {
    color: #2c3e50;
    text-decoration: none;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
