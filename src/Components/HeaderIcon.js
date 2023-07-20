function HeaderIcon({ Icon, Icons }) {
  return (
    <div
      className="flex items-center curso-pointer md:px10 rounded-xl
        active:border-b-2 active:border-white"
    >
      <Icon
        className={
          'h-4 text-zinc-800 text-center sm:h-7 mx-auto group-hover:text-white ${active && "text-zinc-700"}'
        }
      />
      <div className=" w-2 h-2 bg-[#BE9524] rounded-full absolute top-1 mx-3 my-1"></div>
    </div>
  );
}

export default HeaderIcon;
