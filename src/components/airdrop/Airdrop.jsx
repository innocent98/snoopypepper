import "./airdrop.scss";
// import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import {
//   loginFailure,
//   loginStart,
//   loginSuccess,
//   logout,
// } from "../../redux/userRedux";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { getRemainingTimeUntilMsTimestamp } from "../../components/utils/utils";
import Top from "../top/Top";
import Sidebar from "../sidebar/Sidebar";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Airdrop = ({ setMenu, menu }) => {
  //   const user = useSelector((state) => state.user.currentUser);
  //   const { isFetching } = useSelector((state) => state.user);
  //   const dispatch = useDispatch();
  const location = useLocation();
  const path = location.search;

  const [inputs, setInputs] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [withdrawPrompt, setWithdrawPrompt] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAirdrop = async (e) => {
    //     e.preventDefault();
    //     // dispatch(loginStart());
    //     try {
    //       const res = await axios.post(
    //         path
    //           ? "https://api.asicore.xyz/api/user/register" + path
    //           : "https://api.asicore.xyz/api/user/register",
    //         { ...inputs }
    //       );
    //       // dispatch(loginSuccess(res.data));
    //       alert(res.data);
    //       // alert("You have successfully participated in the airdrop.");
    //     } catch (error) {
    //       console.log(error);
    //       // dispatch(loginFailure());
    //     }
  };

  //   // get user info
  //   const findUser = useCallback(async () => {
  //     if (user) {
  //       const res = await axios.get(
  //         "https://api.asicore.xyz/api/user/user/" + user?.address
  //       );
  //       setUserInfo(res.data);
  //     }
  //   }, [setUserInfo, user]);

  //   useEffect(() => {
  //     let unsubscribe = findUser();
  //     return () => unsubscribe;
  //   }, [findUser, setUserInfo]);

  //   const userLogout = useCallback(async () => {
  //     dispatch(logout());
  //   }, [dispatch]);

  //   useEffect(() => {
  //     if (user) {
  //       const timeout = setTimeout(() => {
  //         userLogout();
  //       }, 3600000);
  //       return () => {
  //         clearTimeout(timeout);
  //       };
  //     }
  //   }, [user]);

  // // get countdown
  const [remainingTimeToUnlock, setRemainingTimeToUnlock] =
    useState(defaultRemainingTime);
  // let monthsToAdd = new Date("3 May 2023");
  // const futureDate = monthsToAdd.setMonth(monthsToAdd.getMonth() + 1);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     updateRemainingTimeToUnlock(futureDate);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [futureDate]);

  // function updateRemainingTimeToUnlock(countdown) {
  //   setRemainingTimeToUnlock(getRemainingTimeUntilMsTimestamp(countdown));
  // }

  // handle withdraw prompt

  const handleWithdrawPromt = () => {
    //     setWithdrawPrompt(!withdrawPrompt);
  };

  const handleWithdraw = async (e) => {
    //     e.preventDefault();
    //     setProcessing(true);
    //     try {
    //       const res = await axios.post(
    //         "https://api.asicore.xyz/api/user/core-withdraw",
    //         {
    //           ...inputs,
    //           address: user?.address,
    //         }
    //       );
    //       setProcessing(false);
    //       alert(res.data);
    //       window.location.reload();
    //     } catch (error) {
    //       setProcessing(false);
    //       alert(error.response.data);
    //     }
  };

  return (
    <div className="airdrop">
      <Top setMenu={setMenu} />

      <div className="airdropCon">
        <section>
          <h4>AIRDROPPING</h4>
          {/* <hr /> */}
        </section>

        <section>
          <div className="timerSect">
            <div className="timerBox">
              <p>
                {remainingTimeToUnlock.days}
                <span>days</span>
              </p>
              <span>:</span>
              <p>
                {remainingTimeToUnlock.hours}
                <span>hours</span>
              </p>
              <span>:</span>
              <p>
                {remainingTimeToUnlock.minutes}
                <span>minutes</span>
              </p>
              <span>:</span>
              <p>
                {remainingTimeToUnlock.seconds}
                <span>seconds</span>
              </p>
            </div>
          </div>
        </section>

        {/* <section>
          <form className="row" onSubmit={handleAirdrop}>
            <div className="col">
              <label htmlFor="">
                <span>Join our Telegram</span>{" "}
                <a
                  href="https://t.me/asi_core"
                  target="_blank"
                  rel="noreferrer"
                  className="follow"
                >
                  Join
                </a>
              </label>
              <input
                type="text"
                placeholder="Input your telegram username"
                required
                name="telegram"
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="">
                <span>Follow us on Twitter</span>{" "}
                <a
                  href="https://twitter.com/asi_core"
                  target="_blank"
                  rel="noreferrer"
                  className="follow"
                >
                  Follow
                </a>
              </label>
              <input
                type="text"
                placeholder="Input your twitter username"
                required
                name="twitter"
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="">
                <span>Retweet our Airdrop tweet</span>
                <a
                  href="https://twitter.com/asi_core/status/1657113213434056731?t=HFJY8svRn12ufVq4MaLRKA&s=19"
                  target="_blank"
                  rel="noreferrer"
                  className="follow"
                >
                  Retweet
                </a>
              </label>
              <input
                type="text"
                placeholder="(Copy and drop your retweet link)"
                required
                name="link"
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="">Input your BSC address</label>
              <input
                type="text"
                placeholder="Input your BSC address"
                required
                name="address"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              //   disabled={isFetching}
            >
              submit
            </button>
          </form>
        </section> */}

        {/* {!user && (
        )} */}

        <section>
          <div className="airdropDetails">
            <h5>
              Invite a friend:{" "}
              <span>
                <a href="/">{`https://asicore.xyz/airdrop?_id=${123}`}</a>
              </span>
            </h5>
            <p>
              You will receive <span>100</span> point for joining.
            </p>
            <p>
              Invite your Friend to join GATOR-INU and earn <span>10</span>{" "}
              points each{" "}
            </p>

            <div className="details">
              <div className="det">
                <h5>{userInfo?.balance > 0 ? userInfo?.balance : 0} Points</h5>
                <p>Balance</p>
              </div>
              <div className="det">
                <h5>
                  {userInfo?.referred / 1000 > 0
                    ? userInfo?.referred / 1000
                    : 0}{" "}
                  Refer
                </h5>
                <p>Referred</p>
              </div>
              <div className="det">
                <h5>
                  {userInfo?.referred / 1000 > 0
                    ? userInfo?.referred / 1000
                    : 0}{" "}
                  Points
                </h5>
                <p>Referred Balance</p>
              </div>
            </div>

            <div className="det">
              <h5
                style={{
                  textAlign: "center",
                  color: "#0da502",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {userInfo?.referred / 1000 > 0 ? userInfo?.referred / 1000 : 0}{" "}
                Points
              </h5>
              <p>Total Balance</p>
            </div>

            <button onClick={handleWithdrawPromt}>WITHDRAW</button>
          </div>
        </section>

        {/* {withdrawPrompt && (
          <div className="alertBox">
            <div className="title">
              <p>Prompt</p>
              <span
                className="material-icons icon"
                onClick={handleWithdrawPromt}
              >
                close
              </span>
            </div>
            <form className="row" onSubmit={handleWithdraw}>
              <div className="col">
                <input
                  type="text"
                  name="address"
                  placeholder="Input your CORE address"
                  onChange={handleChange}
                  style={{ border: "1px solid lightgray" }}
                />
              </div>
              <div className="col" style={{ width: "100%" }}>
                <button style={{ alignSelf: "center" }} disabled>
                  {processing ? "Please wait..." : "WITHDRAW"}
                </button>
              </div>
            </form>
            <hr />
            <div className="content">
              Kindly wait patiently for Airdrop to be over
            </div>
          </div>
        )} */}
      </div>

      <div className="team">
        <h2>OUR TEAM </h2>
        <p>
          At the heart of Gator Inu's transformative journey stands dedicated
          and visionary core team. Comprising a diverse blend of blockchain
          experts, developers, finance professionals, and strategic thinkers,
          the Gator Inu core team is united by a shared mission – to redefine
          the future of decentralized finance.
        </p>
        <p>
           Leadership with a Purpose: Led by accomplished individuals with years
          of experience in blockchain technology and financial innovation, the
          core team sets the strategic direction for Gator Inu. Their expertise
          and strategic insights guide the project's growth and ensure that
          every step
        </p>

        <div className="wrapper">
          <div className="left">
            <h2>Contact Us</h2>
            <div className="img">
              <p>Telegram</p>
              <a href="https://t.me/Snoopy_Pepe" target="_blank">
                <img src="/tg.png" alt="" />
              </a>
            </div>

            <div className="img">
              <p>Twitter</p>
              <a href="https://twitter.com/snoopy_pepe/" target="_blank">
                <img src="/tw.png" alt="" />
              </a>
            </div>

            <div className="img">
              <p>Email:</p>
              <a href="mailto:support@gatorinu.com">support@gatorinu.com</a>
            </div>
          </div>

          {/* <div className="right">
            <img src="logo_i.png" alt="" />
          </div> */}
        </div>

        <p
          style={{
            fontSize: "15px",
            textAlign: "center",
            marginTop: "80px",
            color: "lightgray",
          }}
        >
          (c) 2023 Gator-inu. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Airdrop;
