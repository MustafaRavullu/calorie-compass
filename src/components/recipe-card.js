function RecipeCard({ title, calories, id, addFunc, msgFunc }) {
  return (
    <div className="flex flex-col">
      <p>title: {title}</p>
      <p>calories: {calories}</p>
      <button
        type="button"
        className="bg-green-500 p-3"
        onClick={() => {
          addFunc({
            id: id,
            title: title,
            calories: calories,
            eaten: false,
          });
          msgFunc(true);
        }}
      >
        Add food
      </button>
    </div>
  );
}

export default RecipeCard;

// <div className="flex flex-col">
//   <p>title: hamburger</p>
//   <p>calories: 500</p>
//   <button
//     type="button"
//     className="bg-green-500 p-3"
//     onClick={() => {
//       addFoodToDiet({
//         id: 1,
//         title: "hamburger",
//         calories: 500,
//         eaten: false,
//       });
//       setShowMessage(true);
//     }}
//   >
//     Add food
//   </button>
// </div>;
