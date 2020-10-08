export const state = () => ({
  data: [],
  headers: [
    {
      text: 'ลำดับ',
      align: 'start',
      sortable: false,
      value: 'numder'
    },
    { text: 'เลขที่ใบสั่งซื้อ', value: 'Noofpurchase' },
    { text: 'จำนวนเงิน', value: 'amount' },
    { text: 'ชื่อ-นามสกุล', value: 'NameSurname' },
    { text: 'อีเมล', value: 'Email' },
    { text: 'เบอร์โทรศัพท์', value: 'Phonenumber' },
    { text: 'หมายเหตุ', value: 'note' }
  ]
})
export const mutations = {
  input (
    state,
    { Noofpurchase, amount, NameSurname, Email, Phonenumber, note }
  ) {
    state.data.push({
      Noofpurchase,
      amount,
      NameSurname,
      Email,
      note,
      Phonenumber
    })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
