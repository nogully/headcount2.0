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
      }, []);
    } else {
      return districts
        .filter(district => {
          return district.includes(string.toUpperCase());
        })
        .map(district => this.data[district]);
    }
  }

  findAverage(districtName) {
    const foundDistrict = this.findByName(districtName);
    const percents = Object.values(foundDistrict.data);
    const average =
      percents.reduce((sum, percent) => {
        sum += percent;
        return sum;
      }, 0) / percents.length;
    return Math.round(average * 1000) / 1000;
  }

  compareDistrictAverages(dist1, dist2) {
    const foundDistrict1 = this.findByName(dist1);
    const foundDistrict2 = this.findByName(dist2);
    const comparisonObj = {};

    if (foundDistrict1 && foundDistrict2) {
      comparisonObj[foundDistrict1.location] = this.findAverage(
        foundDistrict1.location
      );
      comparisonObj[foundDistrict2.location] = this.findAverage(
        foundDistrict2.location
      );
      comparisonObj.compared =
        Math.round(this.findAverage(dist1) / this.findAverage(dist2) * 1000) /
        1000;
    }
    return comparisonObj;
  }
}
