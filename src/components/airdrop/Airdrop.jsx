import "./airdrop.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "../../redux/userRedux";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { getRemainingTimeUntilMsTimestamp } from "../../components/utils/utils";
import Top from "../top/Top";
import Contact from "../contact/Contact";
import ReferralList from "./ReferralList";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Airdrop = ({ setMenu, menu }) => {
  const user = useSelector((state) => state.user.currentUser);
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.search;

  const replacePath = path.replace("?ad=", "");

  const baseUrl = import.meta.env.VITE_REACT_API_URL;

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
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${baseUrl}user/airdrop/${replacePath}`, {
        ...inputs,
      });
      dispatch(loginSuccess(res.data));
      // alert(res.data);
      alert("You have successfully participated in the airdrop.");
    } catch (error) {
      console.log(error);
      dispatch(loginFailure());
    }
  };

  // check if user complete task
  const handleUserCheck = async () => {
    try {
      const res = await axios.get(`${baseUrl}user/${replacePath}/user`);
      if (res.data?.balance > 0) {
        dispatch(loginSuccess(res.data));
      }
    } catch (error) {}
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      handleUserCheck();
    }

    return () => {
      mounted = false;
    };
  }, [path]);

  // get user info
  const findUser = useCallback(async () => {
    if (user) {
      const res = await axios.get(`${baseUrl}user/user/${user?.address}`);
      setUserInfo(res.data);
    }
  }, [user]);

  useEffect(() => {
    let unsubscribe = findUser();
    return () => unsubscribe;
  }, [user]);

  // const userLogout = useCallback(async () => {
  //   dispatch(logout());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     const timeout = setTimeout(() => {
  //       userLogout();
  //     }, 3600000);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [user]);

  // // get countdown
  const [remainingTimeToUnlock, setRemainingTimeToUnlock] =
    useState(defaultRemainingTime);
  let monthsToAdd = new Date("04 Dec 2023");
  const futureDate = monthsToAdd.setMonth(monthsToAdd.getMonth());

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTimeToUnlock(futureDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [futureDate]);

  function updateRemainingTimeToUnlock(countdown) {
    setRemainingTimeToUnlock(getRemainingTimeUntilMsTimestamp(countdown));
  }

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
          <h4>
            {user
              ? "AIRDROPPING"
              : "Complete some tasks and earn 100 Point As Reward"}
          </h4>
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

        {!user && (
          <section>
            <form className="row airdrop_form" onSubmit={handleAirdrop}>
              <p style={{textAlign: 'center'}}>Your tasks are Pending for the approval!</p>

              <p className="parag">
                Just Follow, Comment, Like and Share{" "}
                <span>Gator-inu Token</span> today!{" "}
              </p>

              <p className="paragraph">
                Please complete the following simple tasks and earn 100 points.
                When your referrals complete the tasks you will earn 10 points
                each.. Please complete ALL the tasks to earn your points. Thank
                you.
              </p>

              <div className="col">
                <label
                  htmlFor=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <span>Task 1</span> <img src="/twi.png" alt="" />
                </label>

                <label htmlFor="">
                  <span>Join our Telegram group</span>{" "}
                  <a
                    href="https://t.me/gator_inu"
                    target="_blank"
                    rel="noreferrer"
                    className="follow"
                  >
                    1. Join Gatorinu Telegram*
                  </a>
                  <p>
                    2. After joining the group please enter Telegram username
                    below
                  </p>
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
                  <span>Subscribe to our Telegram Channel</span>{" "}
                  <a
                    href="https://t.me/gatorinu_announcement"
                    target="_blank"
                    rel="noreferrer"
                    className="follow"
                  >
                    3. Subscribe to our Telegram Channel*
                  </a>
                  <p>
                    After joining the group please enter Telegram username below
                  </p>
                </label>

                <input
                  type="text"
                  placeholder="Input your telegram username"
                  required
                  name="telegram_channel"
                  onChange={handleChange}
                />
              </div>

              <div className="col">
                <label
                  htmlFor=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <span>Task 2</span> <img src="/x.png" alt="" />
                </label>

                <label htmlFor="">
                  <span>Twitter Follow & Retweet*</span>{" "}
                  <a
                    href="https://twitter.com/Gator_Inu?t=NAL_eB6XC_XxtsBK5ozMrQ&s=09"
                    target="_blank"
                    rel="noreferrer"
                    className="follow"
                  >
                    5. Follow Gator inu on twitter
                  </a>
                  <p>6. After following please enter twitter username below</p>
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
                  <span>Retweet our Airdrop post*</span>
                  <a
                    href="https://twitter.com/Gator_Inu/status/1704812330230407470?t=QMNucF3LSv_yVojJ2qHjyQ&s=19"
                    target="_blank"
                    rel="noreferrer"
                    className="follow"
                  >
                    7. Retweet Gator inu tweet
                  </a>

                  <p>8. After retweeting please enter twitter retweet link</p>
                </label>
                <input
                  type="text"
                  placeholder="(Copy and drop your retweet link)"
                  required
                  name="link"
                  onChange={handleChange}
                />
              </div>

              {/* <div className="col">
                <label
                  htmlFor=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <span>Task 3</span> <img src="/yo.png" alt="" />
                </label>

                <label htmlFor="">
                  <span>Subscribe to our Youtube Channel*</span>{" "}
                  <a
                    href="https://twitter.com/Gator_Inu?t=NAL_eB6XC_XxtsBK5ozMrQ&s=09"
                    target="_blank"
                    rel="noreferrer"
                    className="follow"
                  >
                    9. Subscribe to our YouTube channel
                  </a>
                  <p>10. After following please enter Youtube username below</p>
                </label>
                <input
                  type="text"
                  placeholder="Input your twitter username"
                  required
                  name="youtube"
                  onChange={handleChange}
                />
              </div> */}

              {/* <div className="col">
                <label htmlFor="">Enter your CORE Wallet Address</label>
                <input
                  type="text"
                  placeholder="Input your CORE address"
                  required
                  name="address"
                  onChange={handleChange}
                />
              </div> */}

              <button type="submit">submit</button>
            </form>
          </section>
        )}

        {user && (
          <section>
            <div className="airdropDetails">
              <h5>
                Invite a friend:{" "}
                <span>
                  <a
                    href={`https://gatorinu.com/register?_id=${user._id}`}
                  >{`https://gatorinu.com/register?_id=${user._id}`}</a>
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
                  <h5>
                    {userInfo?.balance} <span>Points</span>
                  </h5>
                  <p>Balance</p>
                </div>
                <div className="det">
                  <h5>
                    {userInfo?.referredList?.length} <span>Refer</span>
                  </h5>
                  <p>Referral</p>
                </div>
                <div className="det">
                  <h5>
                    {userInfo?.reward} <span>Points</span>
                  </h5>
                  <p>Referral Balance</p>
                </div>
              </div>

              <div className="det">
                <h5
                  style={{
                    textAlign: "center",
                    color: "#0da502",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  {userInfo?.reward + userInfo?.balance} <span>Points</span>
                </h5>
                <p style={{ marginTop: "-60px" }}>Total Balance</p>
              </div>

              <button onClick={handleWithdrawPromt} disabled>
                WITHDRAW
              </button>
            </div>
          </section>
        )}

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

      {!user && <Contact />}

      <div className="referralList">
        <p>
          {userInfo?.referredList?.length} FRIENDS HAVE JOINED USING YOUR
          REFERRAL LINK
        </p>
        {userInfo?.referredList?.map((item, index) => (
          <ReferralList item={item} key={index} />
        ))}

        <p
          className="footer"
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
