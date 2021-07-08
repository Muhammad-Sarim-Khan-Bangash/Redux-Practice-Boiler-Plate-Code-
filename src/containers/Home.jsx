import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);
  console.log("state ==>", state);

  const dispatch = useDispatch();
  const updateData = () => {
    dispatch({ type: "UPDATE_DATA", name: "Basit" });
  };

  return (
    <>
      <div className="text-center">
        <h1>Home Page</h1>
        <h2 className="text-info">{state.name}</h2>
        <button className="btn btn-success my-3" onClick={updateData}>
          UPDATE
        </button>
        {state.users.map((v, i) => {
          return (
            <div
              key={i}
              className="mt-4 py-2"
              style={{
                borderBottom: "1px solid #333",
              }}
            >
              <h5>{v.Email}</h5>
              <h5>{v.Username}</h5>
              <h5>{v.Designation}</h5>
              <h5>{v.Phone_No}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
