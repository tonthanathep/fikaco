import { motion } from "motion/react";
import Image from "next/image";

const UserBadge = () => {
  return (
    <motion.div
      style={{
        borderRadius: "999px",
        width: "2.4rem",
        height: "2.4rem",
        overflow: "hidden",
        border: "1px solid #dddddd",
      }}
    >
      <Image
        src='https://api.dicebear.com/9.x/pixel-art/webp'
        width={100}
        height={100}
        alt='user'
        style={{ objectFit: "fill", backgroundColor: "white" }}
      />
    </motion.div>
  );
};

export default UserBadge;
