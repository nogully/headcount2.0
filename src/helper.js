export default class DistrictRepository {
  constructor(data) {
    this.data = this.filter(data);
  }
  
  filter(data) {
    return data.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        let newKey = obj.Location.toUpperCase();

        acc[newKey] = {
          location: newKey,
          data: {}
        };
      }
      return acc;
    }, {});
  }

  findByName(string) {

    if (string) {
      const keys =  Object.keys(this.data);
      const foundString = keys.includes( string.toUpperCase() );

      if (foundString) {
        return keys.reduce( (accu, location) => {
          if ( location === string.toUpperCase() ) {
            accu = this.data[location];
          }
          return accu;
        }, {} );
      }
    }
  }
}