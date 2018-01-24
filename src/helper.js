export default class DistrictRepository {
  constructor(data) {
    this.data = this.clean(data);
  }

  clean(data) {
    return data.reduce((accu, dataObj) => {
      const district = dataObj.Location.toUpperCase();
      const year = dataObj.TimeFrame;

      if (!accu[district]) {
        accu[district] = {
          location: district,
          data: {}
        };
      }
      if (!accu[district].data[year]) {
        accu[district].data[year] = Math.round(dataObj.Data * 1000) / 1000 || 0;
      }
      return accu;
    }, {});
  }

  findByName(string) {
    if (string) {
      const districts = Object.keys(this.data);
      const foundString = districts.includes(string.toUpperCase());

      if (foundString) {
        return districts.reduce((accu, district) => {
          if (district === string.toUpperCase()) {
            accu = this.data[district];
          }
          return accu;
        }, {});
      }
    }
  }

  findAllMatches(string) {
    const districts = Object.keys(this.data);
    if (!string) {
      return districts.reduce((accu, district) => {
        accu.push(this.data[district]);
        return accu;
      }, [])  
    } else {
      return districts.filter( district => {
        return district.includes(string.toUpperCase())
        }).map(district => this.data[district]);
      }
    }
  }
