import { flankerData } from "../../data/flanker-data";
import FlankerCart from "./FlankerCart";

const FlankerList = () => {
  const data = flankerData;
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {data.map((item) => {
        return (
          <FlankerCart
            key={item.id}
            title={item.title}
            description={item.description}
            owner={item.owner}
            remain={item.remain}
          />
        );
      })}
    </div>
  );
};

export default FlankerList;
