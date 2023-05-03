import axios from "axios";
import { use } from "react";

const TestPage = () => {
    const data = use(getdata())
    return <span>test: {data}</span>
}

export const getdata = async () => {
    const res = await axios.get('http://localhost:3000/api/hello');
    return res.data;
}

export default TestPage;