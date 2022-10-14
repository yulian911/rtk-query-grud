const  NavBlock=(setResourceType,toggleValue)=> {
  return <div className="flex h-11  gap-5">
    <button className="px-6 py-2  rounded bg-green-800 hover:bg-green-600 text-white" type="button"
      onClick={() => setResourceType('posts')}
    >
      Posts
    </button>
    <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button"
      onClick={() => setResourceType('todos')}
    >
      todos
    </button>
    <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button"
      onClick={() => setResourceType('albums')}
    >
      users
    </button>
    <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button"
      onClick={toggleValue}
    >
      toogle
    </button>
    <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button"
      onClick={() =>toggleValue(false)}
    >
      false
    </button>
    <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button"
      onClick={() =>toggleValue(true)}
    >
      true
    </button>
  </div>;
}
export  default NavBlock