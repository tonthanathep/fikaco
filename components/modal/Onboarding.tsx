const Page1 = () => (
  <div className='flex flex-col items-center justify-center w-full h-full'>
    <h2 className='text-lg font-bold'>Page 1</h2>
    <p>Welcome to Page 1 of the modal!</p>
  </div>
);

const Page2 = () => (
  <div className='flex flex-col items-center justify-center'>
    <h2 className='text-lg font-bold'>Page 2</h2>
    <p>This is Page 2, enjoy your stay!</p>
  </div>
);

const Page3 = () => (
  <div className='flex flex-col items-center justify-center'>
    <h2 className='text-lg font-bold'>Page 3</h2>
    <p>You've reached Page 3. Almost there!</p>
  </div>
);

export const onboardingPages = [
  <Page1 key='page1' />,
  <Page2 key='page2' />,
  <Page3 key='page3' />,
];
