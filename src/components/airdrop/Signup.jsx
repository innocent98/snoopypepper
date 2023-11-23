import "./airdrop.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { useState } from "react";
import axios from "axios";
import Top from "../top/Top";
import { useLocation } from "react-router-dom";

const Signup = ({ setMenu, menu }) => {
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.search;

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
      const res = await axios.post(
        path ? `${baseUrl}user/register${path}` : `${baseUrl}user/register`,
        { ...inputs }
      );

      //   dispatch(loginSuccess(res.data));
      window.location.replace("/airdrop?ad=" + res.data?._id);
    } catch (error) {
      alert(error.response.data);
      dispatch(loginFailure());
    }
  };

  return (
    <div className="airdrop" style={{ height: "100vh" }}>
      <Top setMenu={setMenu} />
      <div className="airdropCon">
        <section>
          <h4>Sign up to participate in the airdrop</h4>
        </section>

        <section>
          <form className="row" onSubmit={handleAirdrop}>
            <div className="col">
              <label htmlFor="" style={{ textAlign: "center", margin: "20px", color:'white' }}>
                Continue registration with your CORE wallet address
              </label>
              <input
                type="text"
                placeholder="Input your CORE address"
                required
                name="address"
                onChange={handleChange}
              />
            </div>
            <button type="submit">
              {"SUBMIT"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signup;
