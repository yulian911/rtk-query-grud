export default function Figures(count, countHandler) {
  return <div className="w-300">
    <div className="text-6xl text-red-600 flex justify-center ">{count}</div>
      <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button"
        onClick={() => countHandler(+1)}>
        count+
      </button>
      <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white " type="button"
        onClick={() => countHandler(-1)}>
        count-
      </button>
  </div>;
}

