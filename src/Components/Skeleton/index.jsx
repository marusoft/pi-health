import React from 'react';

/**
 *
 * @Skeleton - A component that shows when the browser is trying to load a page - (It pulsates)
 */

const Skeleton = () => (
  <div className="animate-pulse">
    <div className="flex sticky top-0 items-center justify-between shadow-bottom bg-white px-4 py-7">
      <div className="[background:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_52.6%,_rgba(255,_255,_255,_0)_100%),_#F6FAFD] rounded-lg h-9 w-40" />

      <span className="inline-flex h-9 w-9 rounded-[50%] flex-none [background:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_52.6%,_rgba(255,_255,_255,_0)_100%),_#F6FAFD]" />
    </div>
    <div className="flex px-4 pt-8 justify-between">
      <div className="[background:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_52.6%,_rgba(255,_255,_255,_0)_100%),_#F6FAFD] rounded-lg h-9 w-44" />
      <div className="[background:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_52.6%,_rgba(255,_255,_255,_0)_100%),_#F6FAFD] rounded-lg h-9 w-24" />
    </div>
    <div className="mt-8 px-4 flex flex-col gap-6">
      <div className="[background:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_52.6%,_rgba(255,_255,_255,_0)_100%),_#F6FAFD] rounded-lg h-32 w-full" />
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="[background:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_52.6%,_rgba(255,_255,_255,_0)_100%),_#F6FAFD] rounded-lg h-20 w-full"
        />
      ))}
    </div>
    <div className="w-full bg-white shadow-top fixed bottom-0 px-4 flex py-4 justify-around">
      <span className="inline-flex h-9 w-9 rounded-[50%] flex-none [background:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_52.6%,_rgba(255,_255,_255,_0)_100%),_#F6FAFD]" />
      <span className="inline-flex h-9 w-9 rounded-[50%] flex-none [background:linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.5)_52.6%,_rgba(255,_255,_255,_0)_100%),_#F6FAFD]" />
    </div>
  </div>
);

export default Skeleton;
