import { IndividualOfficeInfo } from "@/types/apiResponseType";

const OfficeInfo = ({ data }: { data: IndividualOfficeInfo }) => {
    const { rackTotCnt, stationName, parkingBikeTotCnt, shared, stationLatitude, stationLongitude, stationId } = data;
    return (
        <>
            <p>대여소 ID: {stationId}</p>
            <p>총 거치대 수: {rackTotCnt}</p>
            <p>대여소 이름: {stationName}</p>
            <p>현재 거치된 자전거 수: {parkingBikeTotCnt}</p>
            <p>거치율: {shared}%</p>
            <p>위도: {stationLatitude}</p>
            <p>경도: {stationLongitude}</p>
        </>
    )
}

export default OfficeInfo;