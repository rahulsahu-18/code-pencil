import CodeItem from "@/components/CodeItem";
import { useGetMycodeQuery } from "@/redux/slice/api"
import { Link } from "react-router-dom";


function Mycode() {
    const {data} = useGetMycodeQuery();
    if(!data){
        return <div className="text-center font-mono text-slate-600 p-3">Not found...</div>
    }
  return data.length ? (
    <div className="p-3 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
      {data.map((item:codeType)=> <CodeItem key={item._id} data={item}/>)}
    </div>
  ) : (
    <>
      <p className="text-center font-mono text-slate-600 p-3">
        You don't have any saved codes. <Link to="/compiler">Create One</Link>
      </p>
    </>
    )
}

export default Mycode