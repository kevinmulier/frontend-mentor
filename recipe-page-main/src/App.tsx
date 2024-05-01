function App() {
  return (
    <div className="w-full sm:max-w-[640px] sm:my-10 sm:p-10 bg-white sm:rounded-2xl">
      <img src="/images/image-omelette.jpeg" alt="Omelette" className="sm:rounded-lg sm:mb-10" />
      <div className="max-sm:p-10">
        <h1 className="text-4xl font-youngSerif mb-8">Simple Omelette Recipe</h1>
        <p className="text-sm font-outfit text-[hsl(24,5%,18%)] mb-8">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of
          cheese, vegetables, or meats.{" "}
        </p>
        <section className="p-6 bg-[hsl(330,100%,98%)] rounded-lg font-outfit">
          <h2 className="text-lg font-semibold text-[hsl(332,51%,32%)]">Preparation time</h2>
          <ul className="flex flex-col gap-2 list-disc marker:text-[hsl(332,51%,32%)] pl-5 pt-3 font-light text-[hsl(24,5%,18%)] text-sm">
            <li className="pl-4">
              <span className="font-semibold">Total: </span>Approximately 10 minutes
            </li>
            <li className="pl-4">
              <span className="font-semibold">Preparation: </span>5 minutes
            </li>
            <li className="pl-4">
              <span className="font-semibold">Cooking: </span>5 minutes
            </li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-youngSerif text-[hsl(14,45%,36%)] mt-8">Ingredients</h3>
          <ul className="flex flex-col gap-2 list-disc marker:text-[hsl(14,45%,36%)] pl-5 pt-3 font-light font-outfit text-[hsl(24,5%,18%)] text-sm">
            <li className="pl-4">2-3 large eggs</li>
            <li className="pl-4">Salt, to taste</li>
            <li className="pl-4">Pepper, to taste</li>
            <li className="pl-4">1 tablespoon of butter or oil</li>
            <li className="pl-4">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </section>
        <div className="h-px w-full bg-[hsl(30,18%,87%)] my-8" />
        <section>
          <h3 className="text-2xl font-youngSerif text-[hsl(14,45%,36%)]">Instructions</h3>
          <ol className="flex flex-col gap-2 list-decimal marker:text-[hsl(14,45%,36%)] marker:font-bold pl-5 pt-3 font-light font-outfit text-[hsl(24,5%,18%)] text-sm">
            <li className="pl-4">
              <span className="font-bold">Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add
              a tablespoon of water or milk for a fluffier texture.
            </li>
            <li className="pl-4">
              <span className="font-bold">Heat the pan: </span>Place a non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li className="pl-4">
              <span className="font-bold">Cook the omelette: </span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
              evenly coat the surface.
            </li>
            <li className="pl-4">
              <span className="font-bold">Add fillings (optional): </span>When the eggs begin to set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li className="pl-4">
              <span className="font-bold">Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </li>
            <li className="pl-4">
              <span className="font-bold">Enjoy: </span>Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </section>
        <div className="h-px w-full bg-[hsl(30,18%,87%)] my-8" />
        <section>
          <h3 className="text-2xl font-youngSerif text-[hsl(14,45%,36%)]">Nutrition</h3>
          <p className="font-light font-outfit text-[hsl(24,5%,18%)] text-sm my-6">
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <div className="flex flex-col">
            <div className="flex pl-7">
              <span className="w-1/2 font-light font-outfit text-[hsl(24,5%,18%)]">Calories</span>
              <span className="w-1/2 font-bold font-outfit text-[hsl(14,45%,36%)]">277kcal</span>
            </div>
            <div className="h-px w-full bg-[hsl(30,18%,87%)] my-2" />
            <div className="flex pl-7">
              <span className="w-1/2 font-light font-outfit text-[hsl(24,5%,18%)]">Carbs</span>
              <span className="w-1/2 font-bold font-outfit text-[hsl(14,45%,36%)]">0g</span>
            </div>
            <div className="h-px w-full bg-[hsl(30,18%,87%)] my-2" />
            <div className="flex pl-7">
              <span className="w-1/2 font-light font-outfit text-[hsl(24,5%,18%)]">Protein</span>
              <span className="w-1/2 font-bold font-outfit text-[hsl(14,45%,36%)]">20g</span>
            </div>
            <div className="h-px w-full bg-[hsl(30,18%,87%)] my-2" />
            <div className="flex pl-7">
              <span className="w-1/2 font-light font-outfit text-[hsl(24,5%,18%)]">Fat</span>
              <span className="w-1/2 font-bold font-outfit text-[hsl(14,45%,36%)]">22g</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
