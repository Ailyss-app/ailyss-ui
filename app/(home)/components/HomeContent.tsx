"use client";

import { useDispatch, useSelector } from "react-redux";
import { StoreStateType } from "@/types/store";
import { setIsAuth } from "@/store";
import { Button } from "@/components/ui/button";

export default function HomeContent() {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state: StoreStateType) => state.auth);

  const testBtn = () => {
    dispatch(setIsAuth(!isAuth));
  };

  return (
    <div>
      <Button
        onClick={testBtn}
        className="ml-4 bg-transparent outline-none hover:bg-main_color transition duration-400 border border-slate-300/20 py-[6px] px-3 rounded"
      >
        Connect Wallet
      </Button>
    </div>
  );
}
