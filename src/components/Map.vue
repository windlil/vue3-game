<script setup lang="ts">
import { initMap } from '../game/map'
import Floor from './Floor.vue'
import Empty from './Empty.vue'
import Cargo from './Cargo.vue'
import Wall from './Wall.vue';

const map = initMap([
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 2, 3, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
])

const elementMap: any = {
  Floor: Floor,
  Wall: Wall,
  Empty: Empty,
  Cargo: Cargo
}

console.log(map)

function getElement(ele: any) {
  return elementMap[ele.name]
}

</script>

<template>
  <div>
    <div v-for="row in map" class="row">
      <div v-for="r in row" class="box">
        <component :is="getElement(r)"></component>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
}
</style>../game/map