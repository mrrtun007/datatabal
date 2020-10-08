<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="Noofpurchasein" label="เลขที่ใบสั่งซื้อ" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="amountin"
            :counter="25"
            label="จำนวนเงิน"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="NameSurnamein" label="ชื่อ-นานสกุล" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="Emailin"
            label="อีเมล"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="Phonenumberin" label="เบอร์โทรศัพท์" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="notein" label="หมายเหตุ" required />
        </v-col>
      </v-row>
    </v-container>

    <v-btn color="success" class="mr-4" @click="validate">
      สั่งซื้อสินค้า
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      Noofpurchasein: '',
      amountin: '',
      NameSurnamein: '',
      Emailin: '',
      Phonenumberin: '',
      notein: '',
      phonein: ''
    }
  },
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    validate () {
      const Noofpurchase = this.Noofpurchasein
      const amount = this.amountin
      const NameSurname = this.NameSurnamein
      const Email = this.Emailin
      const Phonenumber = this.Phonenumberin
      const note = this.notein
      this.$store.commit('input', {
        Noofpurchase,
        amount,
        NameSurname,
        Email,
        Phonenumber,
        note

      })
    }
  }
}
</script>
<style>
.theme--dark.v-application {
  background-image: url(https://cdn.dribbble.com/users/1632728/screenshots/6263210/espresso_nogarnish_800x600.gif);
  background-size: cover;
}
</style>
