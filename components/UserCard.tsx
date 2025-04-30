"use client";

import { logout } from "@/utils/supabase/auth";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const UserCard = ({ user }: { user: any }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    setUserInfo(user);
    console.log(user);
  }, [user]);

  const handleLogout = async () => {
    const { error } = await logout();
    if (error) {
      console.log(error);
    }
  };

  //TODO: Better Error Handling

  return (
    <motion.div className='flex flex-col'>
      {userInfo && userInfo.user ? (
        <div className='flex flex-col gap-2'>
          <div>{userInfo.user.email}</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </motion.div>
  );
};

export default UserCard;
