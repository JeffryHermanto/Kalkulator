new Vue({
  el: '#app',
  data: {
    angka1: null,
    angka2: null,
    hasil: null,
    display: false,
    feedback: false,
    warna: null,
    operator: null,
    judulHasil: null
  },
  methods: {
    tambah () {
      if (this.angka1 && this.angka2) {
        this.hasil = parseInt(this.angka1) + parseInt(this.angka2)
        this.display = true
        this.warna = 'is-primary'
        this.operator = 'fas fa-plus'
        this.feedback = false
        this.judulHasil = 'ditambah'
      } else {
        this.feedback = true
      }
    },
    kurang () {
      if (this.angka1 && this.angka2) {
        this.hasil = parseInt(this.angka1) - parseInt(this.angka2)
        this.display = true
        this.warna = 'is-info'
        this.operator = 'fas fa-minus'
        this.feedback = false
        this.judulHasil = 'dikurangi'
      } else {
        this.feedback = true
      }
    },
    kali () {
      if (this.angka1 && this.angka2) {
        this.hasil = parseInt(this.angka1) * parseInt(this.angka2)
        this.display = true
        this.warna = 'is-warning'
        this.operator = 'fas fa-times'
        this.feedback = false
        this.judulHasil = 'dikali'
      } else {
        this.feedback = true
      }
    },
    bagi () {
      if (this.angka1 && this.angka2) {
        this.hasil = parseInt(this.angka1) / parseInt(this.angka2)
        this.display = true
        this.warna = 'is-danger'
        this.operator = 'fas fa-divide'
        this.feedback = false
        this.judulHasil = 'dibagi'
      } else {
        this.feedback = true
      }
    },
    toggleFeedback () {
      this.feedback = false
    }
  }
})
