import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Whoa, Slow Down There!
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        It appears that you are moving a bit too quickly. We have temporarily
        paused your activity. Please take a moment to relax and try again
        shortly.
      </p>
    </main>
  );
};

export default Page;
