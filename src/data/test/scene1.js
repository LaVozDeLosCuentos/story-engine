export default {
  context: {
    bg: 'village'
  },
  actions: [
    {
      entity: 'character::luna',
      time: 0,
      action: 'mood::appears'
    },
    {
      entity: 'character::luna',
      time: 20,
      action: 'mood::angry'
    },
    {
      entity: 'character::luna',
      time: 10,
      action: 'mov::jump'
    }
  ]
}
