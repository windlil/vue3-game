import { Cargo } from "./Cargo"
import { Empty } from "./Empty"
import { Floor } from "./Floor"
import { Wall } from "./Wall"


// [Wall{}, Empty{}, Floor{}]
export function initMap(map: number[][]) {
  const resultMap: any[][] = []

  map.forEach((row: any[], i) => {
    resultMap[i] = row.map((v: number) => {
      switch (v) {
        case 0:
          return new Empty()
        case 1:
          return new Wall()
        case 2:
          return new Floor()
        case 3:
          return new Cargo()
      }
    })
  })
  return resultMap
}
