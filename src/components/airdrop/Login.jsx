import "./airdrop.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { useState } from "react";
import axios from "axios";
import Top from "../top/Top";

const Login = () => {
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const baseUrl = import.meta.env.VITE_REACT_API_URL;

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAirdrop = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(baseUrl + "user/login", {
        ...inputs,
      });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      alert(error.response.data);
      dispatch(loginFailure());
    }
  };

  return (
    <div className="airdrop" style={{ height: "100vh" }}>
      <Top />
      <div className="airdropCon">
        <section>
          <h4>Login to see your earnings information</h4>
        </section>

        <section>
          <form className="row" onSubmit={handleAirdrop}>
            <div className="col">
              <label htmlFor="" style={{ textAlign: "center", margin: "20px" }}>
                Input your registered BSC address to login
              </label>
              <input
                type="text"
                placeholder="Input your BSC address"
                required
                name="address"
                onChange={handleChange}
              />
            </div>
            <button type="submit" disabled={isFetching}>
              {"SUBMIT"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
