import { use } from 'react';
import { APIResponseType } from '@/types/apiResponseType';
import OfficeInfo from '@/components/atom/OfficeInfo';

export default function Home() {
  const data: APIResponseType = use(getData());
  return (
    <main>
      {data.rentBikeStatus.row.map(x => <><OfficeInfo data={x} /></>)}
    </main>
  )
}

export const getData = async () => {
  const res = await fetch(`http://openapi.seoul.go.kr:8088/${process.env.API_KEY}/json/bikeList/1/5/`, {
    cache: "no-store",
  }).then(res => res.json());
  return res;
}