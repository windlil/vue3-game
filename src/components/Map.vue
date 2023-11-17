<script setup lang="ts">
import { useMapStore } from '../store/modules/map'
import Floor from './Floor.vue'
import Empty from './Empty.vue'
import Cargo from './Cargo.vue'
import Wall from './Wall.vue';

const { map } = useMapStore()

const elementMap: any = {
  Floor: Floor,
  Wall: Wall,
  Empty: Empty,
  Cargo: Cargo
}

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
</style>