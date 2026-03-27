<script lang="ts">

</script>

<template>
    <div>
        <RouterLink to="/" class="logo-title">
        <img
            src="../assets/header/osmiumbits-logo.jpg"
            alt="Logo of Osmium Bits with the name website creator, 'Obed Negrón'"
        />
        <div><h1>Obed Negrón</h1></div>
        </RouterLink>
    </div>
</template>


<style scoped>
.logo-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1.2rem;
}

img {
    max-height: 12vh;
    font-size: 20vh;
}

h1 {
    font-size: 5vh;
    font-weight: bold;
    color: white;
}
</style>
