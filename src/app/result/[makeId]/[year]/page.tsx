import { useParams } from "next/navigation";

export default function Result({ params}: { params: {makeId: number, year:number} }) {
  return (
    <div>
      <p>Numbers</p>
      <p>Id: {params.makeId}</p>
      <p>Year: {params.year}</p>
    </div>
  );
}
