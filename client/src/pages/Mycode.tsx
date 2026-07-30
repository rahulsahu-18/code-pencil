import CodeItem from "@/components/CodeItem";
import { useGetMycodeQuery } from "@/redux/slice/api"
import { Link } from "react-router-dom";


function Mycode() {
    const {data} = useGetMycodeQuery();
    if(!data){
        return <div className="text-center font-mono text-slate-600 p-3">Not found...</div>
    }
  return data.length ? (
    <div className="p-4 sm:p-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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