export interface Prefecture {
  Id: number;
  prefectureEn: string;
  prefectureJp: string;
  region: string;
  iso: string;
}

export interface PrefecturePopulation {
  Id: number;
  prefectureIso: string;
  gender: string;
  age: string;
  population: number;
}

export interface PrefectureResponse {
  result: Prefecture[];
  [key: string]: string | number | object;
}

export interface PrefecturePopulationResponse {
  result: PrefecturePopulation[];
  [key: string]: string | number | object;
}
