import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setProfileImage,
  removeProfileImage,
} from "../../redux/slice/user-slice";

const SideBarImg = () => {
  const dispatch = useDispatch();
  const profileImage = useSelector(
    (state: RootState) => state.user.profileImage
  );
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const imageUrl = reader.result as string;
          dispatch(setProfileImage(imageUrl));
          setOpen(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // حذف تصویر
  const handleRemoveImage = () => {
    dispatch(removeProfileImage());
    setOpen(false);
  };

  return (
    <span className="cursor-pointer" onClick={() => setOpen(!open)}>
      <img
        src={profileImage || "/icon/pro.png"}
        alt="profile"
        className={`rounded-full ${profileImage ? "w-10 h-10" : ""}`}
      />
      {open && (
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="absolute cursor-default w-full p-2 top-16 left-0 bg-white/90 rounded flex  justify-center min-h-72"
        >
          <div className="w-full flex flex-wrap justify-center items-center gap-2 h-fit">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="imageInput"
            />
            <label
              htmlFor="imageInput"
              className="w-full flex justify-center items-center px-3 py-2 cursor-pointer rounded bg-black/30 text-white"
            >
              انتخاب تصویر
            </label>
            {profileImage && (
              <button
                onClick={handleRemoveImage}
                className="mt-4 w-full px-3 py-2 cursor-pointer rounded bg-red-500 text-white"
              >
                حذف تصویر
              </button>
            )}
          </div>
        </div>
      )}
    </span>
  );
};

export default SideBarImg;
