export interface IndividualBikeStationInfo {
    racktotCnt: number;
    stationName: string;
    parkingBikeTotCnt: number;
    shared: number;
    stationLatitude: string;
    stationLongitude: string;
    stationId: string;
}

export interface RentBikeStatus {
    list_total_count: number;
    RESULT: {
        CODE: string;
        MESSAGE: string;
    },
    row: IndividualBikeStationInfo[];
};