import CircleCalorieBar from "@/components/circle-calorie-bar";
import CardShadow from "@/components/card-shadow";

function Stats() {
  return (
    <main className="w-full flex-1 flex justify-center p-3">
      <div className="flex flex-col items-center border border-black h-fit rounded-md w-full sm:w-[400px] relative group bg-cc_background">
        <CircleCalorieBar />
        <p className="border-t border-black w-full text-center p-4 text-sm">
          Completed daily calorie need
        </p>
        <CardShadow />
      </div>
    </main>
  );
}

export default Stats;
