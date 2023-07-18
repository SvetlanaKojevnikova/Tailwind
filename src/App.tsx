import "./App.css";

function App() {
  return (
    <div className="bg-mainColor text-white">
      <header className="container  mx-auto px-5 md:px-0">
        {" "}
        <div className="flex justify-between pt-big">
          <span className="text-bold text-3xl">Tailwind</span>
          <div className="space-x-5">
            <a href="" className="hover:underline">
              About
            </a>
            <a
              href=""
              className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700"
            >
              Contacts
            </a>
          </div>
        </div>
      </header>
      <div className="container mx-auto py-big px-3 sm:px:0">
        <h1 className="text-center text-3xl font-bold"> Cool</h1>
        <p className="pt-5 w-full sm:w-[450px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          eveniet quis nostrum, impedit maiores quidem illo cum ex atque ipsa.
        </p>
        <div
          className="flex justify-center  pt-big
        space-x-0 md:space-x-10 flex-col md:flex-row space-y-5 md:space-y-0"
        >
          <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">
            Button1
          </div>
          <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">
            Button2
          </div>
          <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">
            Button3
          </div>
          <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">
            Button4
          </div>
          <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">
            Button5
          </div>
        </div>
        <div className="container mx-auto py-big grid grid-columns-4 grid-flow-col gap-4">
          <div className="bg-purple-500 w-1/2 h-[100px]"></div>
          <div className="bg-purple-500 w-3/5 h-[100px]"></div>
          <div className="bg-purple-500 w-1/6 h-[100px]"></div>
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full h-[100px]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
