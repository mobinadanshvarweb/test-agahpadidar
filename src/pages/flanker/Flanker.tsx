import FlankerList from "./FlankerList";

const Flanker = () => {
  return (
    <div className="flex-1 flex flex-col items-center gap-12">
      <div className="cursor-default px-7 py-3  gap-0 opacity-50 bg-custom-linear1 shadow-custom-inset rounded-lg">
        <span>
          {" "}
          <span className="text-[#5BB6BA]"> آزمون های خریداری شده </span>
          (آزمون مورد نظر خود برای اجرا یا ساخت لینک را انتخاب کنید)
        </span>
      </div>
      <FlankerList />
    </div>
  );
};

export default Flanker;
