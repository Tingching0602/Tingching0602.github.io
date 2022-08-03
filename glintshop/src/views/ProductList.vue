<template>
  <div class="container py-5">
<div id="menu" class="row">
  <NavbarHome />
    <h2>各樣植物列表</h2>
    <ProductCard 
    v-for="plant in plants"
    :key="plant.id"
    :initialPlant="plant"
    />

<PlantsPagination />
     </div>
    </div>
</template>
<script>
/*eslint-disable*/
import ProductCard from "../components/ProductCard.vue"
import NavbarHome from "../components/NavbarHome.vue"
import PlantsPagination from "../components/PlantsPagination.vue"
const dummyData = {
  "plants": [
    {
      "id": 143,
      "name": "華麗花燭",
      "price": "480",
      "imag": "https://i.ibb.co/y5Q5QW2/plants1.jpg",
      "counts": "5",
      "description": "華麗花燭有愛心型的葉片",
      "isFavorited": false
    },
    {
      "id": 179,
      "name": "雲斑金龍",
      "price": "250",
      "imag": "https://i.ibb.co/9sx8MdH/plants8.jpg",
      "counts": "5",
      "description": "雲斑金龍獨有的斑紋是他的特色",
      "isFavorited": false
    },
    {
      "id": 220,
      "name": "大麥克蔓綠絨",
      "price": "800",
      "imag": "https://i.ibb.co/ZRsVkb1/plants2.jpg",
      "counts": "3",
      "description": "可以長很大的大麥克",
      "isFavorited": false
    },
    {
      "id": 136,
      "name": "乳脈千年芋",
      "price": "380",
      "imag": "https://i.ibb.co/7Q14vR1/plants9.jpg",
      "counts": "6",
      "description": "葉脈紋微微的黃白色",
      "isFavorited": false
    },
     {
      "id": 304,
      "name": "常春藤",
      "price": "180",
      "imag": "https://i.ibb.co/K9BwB1J/plants4.jpg",
      "counts": "7",
      "description": "攀附型植物照顧的好可以長一大片",
      "isFavorited": false
    },
    {
      "id": 188,
      "name": "迷彩芋",
      "price": "180",
      "imag": "https://i.ibb.co/LPcL7qk/plants10.jpg",
      "counts": "3",
      "description": "擁有迷彩紋的竹芋，可以長很大一片",
      "isFavorited": false
    },
    {
      "id": 258,
      "name": "斑葉合果芋",
      "price": "330",
      "imag": "https://i.ibb.co/XtfBkFP/plants6.jpg",
      "counts": "5",
      "description": "每一葉的白斑都長的不同，合果芋是觀葉植物中好照顧的品種之一",
      "isFavorited": false
    },
    {
      "id": 197,
      "name": "粉紅佳人",
      "price": "450",
      "imag": "https://i.ibb.co/jLc4KjT/plants3.jpg",
      "counts": "6",
      "description": "彩葉芋品種之一",
      "isFavorited": false
    },
    {
      "id": 80,
      "name": "熊貓竹芋",
      "price": "250",
      "imag": "https://i.ibb.co/55WkX2H/plants5.jpg",
      "counts": "7",
      "description": "竹芋品種之一，擁有像熊貓眼的斑紋，因而得名",
      "isFavorited": false
    },
     {
      "id": 680,
      "name": "傑克林觀音蓮",
      "price": "1000",
      "imag": "https://i.ibb.co/ZNHXXm6/plants7.jpg",
      "counts": "2",
      "description": "去年很熱門的觀葉植物之一",
      "isFavorited": false
    }
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
}
export default {
  components: {
    ProductCard,
    NavbarHome,
    PlantsPagination
  },
  data () {
    return {
      plants:[],
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      shoppingList: []
    }
  },
  created() {
    this.fetchPlants()
    this.addPlant(plant)
    this.removePlant(plant)
  },
  methods: {
    fetchPlants() {
      const {
        plants,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.plants = plants
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    },
    addPlant(plant) {
      this.shoppingList.push(plant)
    },
    removePlant(plant) {
      this.shoppingList = this.shoppingList.filter((item) => item.id !== plant.di)
      return alert(`已將 ${plant.name} 從購物車清單移除`)
    }
  },
}
</script>

