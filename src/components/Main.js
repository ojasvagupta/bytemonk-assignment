import "./Main.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/action";
import  PieChart  from "./PieChart";
function Main() {
  const data = useSelector((state) => state.APIData);
  const [val, setVal] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log(data)

  const listItems = data.map((item) => (
    <div key={item.id} className="data-card">
      <li>{item.id}</li>
      <li> User : {item.user}</li>
      <li>Category : {item.category}</li>
      <li>Details : {item.details}</li>
      <li>Date : {item.timeStamp}</li>
      <li>IP Address : {item.ipAddress}</li>
    </div>
  ));
  return (
    <>
      <div className="button">
        <button onClick={() => setVal(false)}>PIE Chart</button>
      </div>
      {val ? (
        <div>
          <ul>{listItems}</ul>
        </div>
      ) : (
        <PieChart />
      )}
    </>
  );
}
export default Main;
