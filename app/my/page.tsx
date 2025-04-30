import UserCard from "@/components/UserCard";
import { getUserInfo } from "@/utils/supabase/getUserInfo";

const MyPage = async () => {
  let userInfo = await getUserInfo();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold'>
        <UserCard user={userInfo} />
      </h1>
    </div>
  );
};

export default MyPage;
