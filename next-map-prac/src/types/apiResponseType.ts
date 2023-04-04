type individualOfficeInfo = {
    rackTotCnt: string,
    stationName: string,
    parkingBikeTotCnt: string,
    shared: string,
    stationLatitude: string,
    stationLongitude: string,
    stationId: string,
}

export type apiResponseType = {
    rentBikeStatus: {
        list_total_count: number,
        RESULT: {
            CODE: string,
            MESSAGE: string,
        },
        row: individualOfficeInfo[] 
    }
}

// API 응답 총 건수: 2693 건
// 요청 3번 보내서 전부 합쳐야 한다.