import * as prefecturePopulationService from "./prefecturePopulationService";
import * as rp from "request-promise-native";
import { PrefectureResponse, PrefecturePopulationResponse } from "../types";

jest.mock(
  "request-promise-native",
  (): Object => ({
    get: jest.fn()
  })
);

jest;

describe("# prefecturePopulationService", (): void => {
  beforeEach(
    (): void => {
      jest.clearAllMocks();
    }
  );

  it("should return a list of prefectures", async (): Promise<void> => {
    const prefectureResponseMock: PrefectureResponse = {
      result: [
        {
          Id: 1,
          prefectureEn: "Aichi-ken",
          prefectureJp: "愛知県",
          region: "Chūbu",
          iso: "23"
        },
        {
          Id: 2,
          prefectureEn: "Akita-ken",
          prefectureJp: "秋田県",
          region: "Tōhoku",
          iso: "05"
        },
        {
          Id: 3,
          prefectureEn: "Aomori-ken",
          prefectureJp: "青森県",
          region: "Tōhoku",
          iso: "02"
        }
      ]
    };

    rp.get.mockResolvedValue(prefectureResponseMock);
    const result = await prefecturePopulationService.getPrefectures();

    expect(result).toEqual(prefectureResponseMock.result);
    expect(rp.get).toBeCalledWith("https://localhost:5000/prefecture", {
      json: true,
      simple: true
    });
  });

  it("should return a list of prefecture population groups", async (): Promise<
    void
  > => {
    const prefecturePopulationResponseMock: PrefecturePopulationResponse = {
      result: [
        {
          Id: 1,
          prefectureIso: "13",
          gender: "F",
          age: "Below 20",
          population: 4049738.62
        },
        {
          Id: 2,
          prefectureIso: "13",
          gender: "F",
          age: "20-40",
          population: 2245164.8
        },
        {
          Id: 3,
          prefectureIso: "13",
          gender: "F",
          age: "40-60",
          population: 1809099.73
        }
      ]
    };
    rp.get.mockResolvedValue(prefecturePopulationResponseMock);
    const result = await prefecturePopulationService.getPrefecturePopulationByIsoCode(
      "12"
    );

    expect(result).toEqual(prefecturePopulationResponseMock.result);
    expect(rp.get).toBeCalledWith("https://localhost:5000/prefecture/12", {
      json: true,
      simple: true
    });
  });
});
