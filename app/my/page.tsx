import ClockInCard from "@/components/ClockInCard";
import Header from "@/components/Header";
import TaskListCard from "@/components/TaskListCard";
import UtilityCard from "@/components/UtilityCard";
import { getUserInfo } from "@/utils/supabase/getUserInfo";

const MyPage = async () => {
  let userInfo = await getUserInfo();

  return (
    <div className='flex min-h-screen flex-col w-full py-4 px-4 sm:px-6 lg:px-10 xl:px-44 2xl:px-80 gap-4 bg-[#f9f6ee]'>
      <Header />
      <div className='flex flex-col lg:flex-row gap-4 w-full'>
        <div className='flex flex-col gap-4 w-full lg:w-[44%]'>
          <ClockInCard />
          <UtilityCard />
        </div>
        <div className='flex flex-col gap-4 w-full lg:w-[56%]'>
          <TaskListCard />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
