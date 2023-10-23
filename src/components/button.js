import Link from "next/link";

function Button({ menu, href, content, color, onClickFunc, active }) {
  return (
    <div className="group inline-block  relative cursor-pointer">
      <Link
        onClick={onClickFunc}
        href={href}
        className={`${
          menu === active
            ? "bg-white border border-black"
            : "border-transparent bg-inherit"
        } px-4 py-2 inline-block  ${
          color === "default"
            ? "group-hover:bg-white"
            : color === "red"
            ? "group-hover:bg-red-500 group-hover:text-white"
            : ""
        }  
             group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all
            duration-100 ease-out rounded-full border 
               group-hover:border-black group-active:translate-x-0 group-active:translate-y-0`}
      >
        {content}
      </Link>
      <div className="absolute inset-0 bg-transparent group-hover:bg-black z-[-1] rounded-3xl "></div>
    </div>
  );
}

export default Button;
