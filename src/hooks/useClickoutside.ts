import React, { useEffect} from "react";

export const useClickoutside=(ref:React.RefObject<HTMLElement>,callback:()=>void)=>{
    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            // 判断用户点击的对象是否在DOM节点内部
            if (ref.current?.contains(e.target as Node)) {
                console.log("点击了DOM里面区域");
                return;
            }
            callback();
            console.log("点击DOM外面区域");
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);

}
