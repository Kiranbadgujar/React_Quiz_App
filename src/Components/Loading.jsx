import img from "../assets/avatar-thinking.svg";

const Loading = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900 bg-opacity-70 backdrop-filter backdrop-blur-sm z-50">
      <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#FCC822]"></div>
      <img src={img} class="rounded-full h-28 w-28" />
  </div>
);

export default Loading;
