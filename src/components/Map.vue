<script setup lang="ts">
import Empty from '../assets/empty.png'
import Wall from '../assets/wall.png'
import Floor from '../assets/floor.png'

/*
  0: 空白
  1：墙
  2：地板
*/
const map = [
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
]

function setImg(r: number) {
  switch (r) {
    case 0:
      return Empty
    case 1:
      return Wall
    case 2:
      return Floor
  }
}
</script>

<template>
  <div>
    <div v-for="row in map" class="row">
      <div v-for="r in row" class="box">
        <img :src="setImg(r)" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;

  .box {
    img {
      height: 50px;
      width: 50px;
    }
  }
}
</style>