import { Provider } from "react-redux";
import Store from "./Store";
import { GetApi } from "./Router";
import { useEffect, useState } from "react";
import Show from "./Show";
import "./App.css"




function App() {

  const [postdata, setdata] = useState([])
  const Getdata = async () => {
    const data = await GetApi()
    setdata(data)

  }

  useEffect(() => {
    Getdata()
  }, [])

  return (
    <>
      {console.log(postdata)}
      <Provider store={Store}>
        {postdata.products && postdata.products.map((p) => {
          return (
            <Show {...p} key={p.id} />
          )
        })}
      </Provider>
    </>
  );
}

export default App;
