import { data, electricForklift, petrolForklift } from '../data/data';

export const getCatalogData = () => {
  return data;
};

export const getTypeData = () => {
  const obj = {
    electricForklift: electricForklift,
    petrolForklift: petrolForklift,
  };
  return obj;
};
