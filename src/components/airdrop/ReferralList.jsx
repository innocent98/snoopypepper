import axios from "axios";
import "./airdrop.scss";
import React, { useCallback, useEffect, useState } from "react";

const ReferralList = ({ item }) => {
  const baseUrl = import.meta.env.VITE_REACT_API_URL;

  const [referral, setReferral] = useState({});

  const findUser = useCallback(async () => {
    if (item) {
      const res = await axios.get(`${baseUrl}user/${item}/user`);
      setReferral(res.data);
    }
  }, [item]);

  useEffect(() => {
    let unsubscribe = findUser();
    return () => unsubscribe;
  }, [item]);

  return (
    <div>
      <span>
        @{referral?.twitter} ({referral?.referredList?.length})
      </span>
      <div className="line"></div>
    </div>
  );
};

export default ReferralList;
