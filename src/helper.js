export default class DistrictRepository {
  constructor(data) {
    this.data = this.filter(data)

  }
  
  filter(data) {
    return data.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = {}
      }
      return acc;
    }, {})
  }

  findByName(string){

  }


}
