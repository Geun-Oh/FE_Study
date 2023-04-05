export interface IndividualOfficeInfo {
    rackTotCnt: string,
    stationName: string,
    parkingBikeTotCnt: string,
    shared: string,
    stationLatitude: string,
    stationLongitude: string,
    stationId: string
}

export type APIResponseType = {
    rentBikeStatus: {
        list_total_count: number,
        RESULT: {
            CODE: string,
            MESSAGE: string,
        },
        row: IndividualOfficeInfo[]
    }
}
