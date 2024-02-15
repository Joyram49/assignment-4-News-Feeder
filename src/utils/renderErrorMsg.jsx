export const renderErrorState = (errorMessage) => (
  <main className='my-10 lg:my-14 max-w-7xl container flex place-content-center'>
    <h1 className='text-center mb-10 text-lg text-white bg-rose-400 px-6 py-2 rounded-lg '>
      {errorMessage}
    </h1>
  </main>
);
