// ES6 按需导出

export const hunhe = {
  methods: {
    showName() {
      alert(this.name);
    }
  },
  mounted() {
    console.log('hello !');
  }
}

export const hunhe2 = {
  data() { 
    return {
      x: 10,
      y:12
    }
  }
}
  