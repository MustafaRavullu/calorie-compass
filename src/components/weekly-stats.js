function WeeklyStats() {
  const calorieOfDaysOfTheWeek = [
    { id: 1, calorie: 1564, day: "Sun" },
    { id: 2, calorie: 2005, day: "Mon" },
    { id: 3, calorie: 3152, day: "Tue" },
    { id: 4, calorie: 1235, day: "Wed" },
    { id: 5, calorie: 2054, day: "Thu" },
    { id: 6, calorie: 1465, day: "Fri" },
    { id: 7, calorie: 3254, day: "Sat" },
  ];
  function calculateBarPx(dailyCal, completedCal) {
    const barHeightPercentage = (completedCal * 100) / dailyCal;
    const barHeightPx = (barHeightPercentage * 175) / 100;
    return Math.trunc(barHeightPx);
  }
  return (
    <>
      <div className="w-[95%] border-t  border-black grid grid-cols-7  relative">
        <div className="flex absolute w-full bottom-[200px] gap-2 z-[1] items-center">
          <span className="border border-dashed border-gray-500 h-[1px] flex-1"></span>
        </div>
        {calorieOfDaysOfTheWeek.map((item) => (
          <span key={item.day} className="relative flex justify-center">
            {item.day}
            <div
              className={`absolute  bottom-[25px] left-1/4 w-[25px]  bg-cc_green`}
              style={{ height: `${calculateBarPx(3211, item.calorie)}px` }}
            ></div>
          </span>
        ))}
      </div>
    </>
  );
}

export default WeeklyStats;
