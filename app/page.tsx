import DanielGoogle from "@/components/DanielGoogle";
import MainButtons from "@/components/MainButtons";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col h-full p-4 pb-[300px] justify-center items-center gap-8">
      <DanielGoogle />
      <SearchBar />
      <MainButtons />
    </div>
  );
}
