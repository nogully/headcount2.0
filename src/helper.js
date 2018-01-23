export default class DistrictRepository {
  constructor(data) {
    this.data = this.filter(data);
  }
  
  filter(data) {
    return data.reduce( (accu, dataObj) => {
      const key = dataObj.Location.toUpperCase();
      const year = dataObj.TimeFrame;

      if (!accu[key]) {
        accu[key] = {
          location: key,
          data: {}
        };
      }

      // closer to the solution here
      // getting data into object, rounding is a little off
      // need a check for "Data": "N/A" to pass last test

      if (!accu[key].data[year]) {
        accu[key].data[year] = Math.round(dataObj.Data * 1000) / 1000 || 0;
      } 
        
      return accu;
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