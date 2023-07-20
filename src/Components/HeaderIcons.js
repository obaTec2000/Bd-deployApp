function HeaderIcons ({Icon}) {
    return (
        <div>
           <div
      className="flex- items-end curso-pointer md:px10 rounded-xl
        active:border-b-2 active:border-white"
    >
      <Icon
        className={
          'h-5 text-white  sm:h-5 mx-32 group-hover:text-white ${active && "text-zinc-700"}'
        }
      />
    </div>  
        </div>
    )
}

export default HeaderIcons;
