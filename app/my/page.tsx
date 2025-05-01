import ClockInCard from "@/components/ClockInCard";
import Header from "@/components/Header";
import TaskListCard from "@/components/TaskListCard";
import { getUserInfo } from "@/utils/supabase/getUserInfo";

const MyPage = async () => {
  let userInfo = await getUserInfo();

  return (
    <div className='flex min-h-screen flex-col  py-4 px-4 sm:px-6 lg:px-100 gap-5'>
      <Header />

      <ClockInCard />
      <TaskListCard />
    </div>
  );
};

export default MyPage;
