import { useQuery } from "react-query"
import axios from 'axios';
import { IndividualBikeStationInfo } from "../types/individualBikeStationInfo";

// 44414f534c6b616e3336776b654671
// http://openapi.seoul.go.kr:8088/(인증키)/json/bikeList/1/5/

const fetchTodoList = () => axios("http://openapi.seoul.go.kr:8088/44414f534c6b616e3336776b654671/json/bikeList/1/1000/")

const Todos = () => {
    const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: data => {
            const rentBikeStatus: IndividualBikeStationInfo = data.data.rentBikeStatus;
            console.log(rentBikeStatus);
        },
        onError: e => {
            console.log(e);
        }
    })

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error</span>;
    }

    return (
        <p>test</p>
    )
}

export default Todos;