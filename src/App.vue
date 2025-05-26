<template>
    <div>
        <h1>Football Cards 5</h1>
        <input type="text" v-model="inpName">
        <button @click="addPlayer(player(inpName))">Add</button>
        <button @click="removePlayer">Remove random</button>
    </div>
    <div>
        <TransitionGroup>
            <player-card v-for="x in players" :key="x.first + x.last + id" :first="x.first" :last="x.last" :pos="x.pos"
                :ovr="x.ovr" :img="x.img" :posX="x.posX" :posY="x.posY">
            </player-card>
        </TransitionGroup>
    </div>
    <div class="footer">
        <a href="https://www.freevector.com/soccer-vector-silhouettes">FreeVector.com</a>
        <a href="https://youtu.be/ezP4kbOvs_E?si=W-ofMqelEAt3oPz7">Learn CSS Border Animations in 6 Minutes</a>
    </div>
</template>


<script setup>

import { ref, reactive, onMounted, TransitionGroup } from 'vue'

import pukki from './assets/pukki.webp';
import pohjanpalo from './assets/pohjanpalo.webp';
import hradesky from './assets/h.avif';
import antman from './assets/oliver-antman.webp';

let images = []
let id = ref(4)
const inpName = ref("First")

function player(firstName) {
    return { id: id, first: firstName, last: "Pohjanpalo", pos: "st", ovr: "86", img: pohjanpalo, posX: "-200", posY: "0", localImage: "true" };
}

function addPlayer(player) {
    player.id = id++
    players.push(player);
    player = null
}

function removePlayer() {
    if (players.length > 0) {
        players.splice((0.5 * players.length),1);
    }
}

const players = reactive([])

onMounted(() => {
    images.push(pukki);
    images.push(pohjanpalo);
    //console.log('Mounted')
    addPlayer({ first: "Joel", last: "Pohjanpalo", pos: "st", ovr: "86", img: pohjanpalo, posX: "-200", posY: "0", localImage: "true" })
    addPlayer({ first: "Teemu", last: "Pukki", pos: "st", ovr: "89", img: pukki, posX: "-230", posY: "0" })
    addPlayer({ first: "Lukas", last: "Hradecký", pos: "gk", ovr: "88", img: hradesky, posX: "-150", posY: "0" })
    addPlayer({ first: "Oliver", last: "Antman", pos: "rw", ovr: "87", img: antman, posX: "-130", posY: "0" })
})

</script>

<style>
html,
body {
    min-height: 800px;
    background-color: hsl(0, 0%, 20%);
    font-family: Arial, sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
    color: hsl(200, 100%, 60%);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: hsla(0, 0%, 0%, 0.5);
    text-shadow: 1px 1px 3px hsla(0, 0%, 0%, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}

#app {
    display: block;
    padding: 0px;
}

#app>div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

#app>pre {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    color: azure;
    text-transform: none;
}

.footer {
    padding-top: 40px;
    flex-wrap: wrap;
    font-size: 0.9rem;
}

a {
    color: azure;
}

.v-enter-active,
.v-leave-active,
.v-move {
    transition: all 0.7s;
}

.v-leave-active {
    position: absolute;
}

.v-leave-from, .v-enter-to {
    opacity: 1;
    scale: 1;
}

.v-leave-to, .v-enter-from {
    opacity: 0;
    scale: 0;
}


</style>
