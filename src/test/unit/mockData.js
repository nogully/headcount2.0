import DistrictRepository from "../../helper";
import kinderData from "../../data/kindergartners_in_full_day_program";

const kinderGardenData = new DistrictRepository(kinderData);
const mockData = kinderGardenData.findAllMatches("colorado");

export const containerData = [
  {
    location: "COLORADO",
    data: {
      "2004": 0.24,
      "2005": 0.278,
      "2006": 0.337,
      "2007": 0.395,
      "2008": 0.536,
      "2009": 0.598,
      "2010": 0.64,
      "2011": 0.672,
      "2012": 0.695,
      "2013": 0.703,
      "2014": 0.741
    }
  },
  {
    location: "COLORADO SPRINGS 11",
    data: {
      "2004": 0.069,
      "2005": 0.509,
      "2006": 0.638,
      "2007": 0.994,
      "2008": 0.992,
      "2009": 1,
      "2010": 0.993,
      "2011": 0.994,
      "2012": 0.993,
      "2013": 0.989,
      "2014": 0.994
    }
  }
];

export const cardData = {
  district: {
    location: "COLORADO",
    data: {
      "2004": 0.24,
      "2005": 0.278,
      "2006": 0.337,
      "2007": 0.395,
      "2008": 0.536,
      "2009": 0.598,
      "2010": 0.64,
      "2011": 0.672,
      "2012": 0.695,
      "2013": 0.703,
      "2014": 0.741
    }
  },
  index: 0
};

