<template>
    <div class="card">
        <div class="layer1"
            :style="{ backgroundImage: 'url(' + path2() + ')', backgroundPosition: props.posX + 'px ' + props.posY + 'px' }">
        </div>
        <!-- <div class="layer2"></div> -->
        <div class="first-name">{{ props.first }}</div>
        <div class="last-name">{{ props.last }}</div>
        <div class="position">{{ props.pos }}</div>
        <div class="overall">{{ props.ovr }}</div>
    </div>
</template>


<script setup>

import { ref, reactive, onMounted } from 'vue'

function path2() {
    return props.img
    if (props.localImage === false) return props.img
    else return props.path + props.img
}

const props = defineProps({
    localImage: { type: Boolean, required: false, default: true },
    first: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true,
    },
    pos: {
        type: String,
        required: false,
        default: "a"
    },
    ovr: {
        type: String,
        required: false,
        default: "70",
    },
    img: {
        type: String,
        required: true,
        default: "pukki.webp"
    },
    posX: {
        type: String,
        required: false,
        default: "0"
    },
    posY: {
        type: String,
        required: false,
        default: "0"
    }
})

const path = "./assets/"
const size = '200px'

onMounted(() => {
    //console.log('Mounted');
})

</script>


<style scoped>
.card {
    z-index: 0;
    width: 250px;
    height: 350px;
    border-radius: 20px 0px 20px 0px;
    margin: 1px;
    /* box-shadow: 8px 8px 16px 4px hsla(0, 0%, 0%, 0.6); */
    font-family: Verdana, sans-serif;
    color: hsl(210, 100%, 80%);
    position: relative;
    background-image: url("../assets/spectrum-gradient.svg");
    background-size: cover;
    background-image: radial-gradient(circle, hsl(210, 100%, 40%) 0%, hsl(210, 90%, 10%) 100%);
    position: relative;
}

@property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

.card::after,
.card::before {
    --angle: 0deg;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(from var(--angle), blue, hsl(200, 100%, 60%), blue);
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    padding: 2px;
    border-radius: 18px 0px 18px 0px;
    animation: 5s spin linear infinite;
}

.card::before {
    filter: blur(1.5rem);
    opacity: 0.8;
}

@keyframes spin {
    from {
        --angle: 0deg;
    }

    to {
        --angle: 360deg;
    }
}

.layer1 {
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-size: 600px;
    border-radius: 17px 0px 17px 0px;
    background-size: cover;
}

.layer2 {
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-size: 600px;
    background-position: -180px 0px;
    border-radius: 17px 0px 17px 0px;
}

.card>div {
    z-index: 3;
    color: hsl(200, 100%, 60%);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: hsla(0, 0%, 0%, 0.5);
    text-shadow: 1px 1px 3px hsla(0, 0%, 0%, 1);
    position: absolute;
}

.first-name {
    bottom: 26px;
    left: 6px;
    font-size: 22px;
}

.last-name {
    bottom: -1px;
    left: 3px;
    font-size: 30px;
    font-weight: bold;
}

.overall {
    top: 12px;
    left: 16px;
    font-size: 30px;
    font-weight: bold;
    font-family: Arial, sans-serif;
}

.position {
    top: 38px;
    left: 18px;
    font-size: 20px;
}

.favorite {
    top: 120px;
    left: 16px;
    font-size: 30px;
    font-weight: bold;
    font-family: Arial, sans-serif;
}
</style>