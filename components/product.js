export default function Product({ data }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-8 w-full lg:w-3/12 mb-8">
      <img
        className="w-full"
        src="/images/avatar.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>
    </div>
  );
}
