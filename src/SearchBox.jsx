const SearchBox = () => {
  return (
    <form id="searchForm" class="flex flex-col p-4 bg-white rounded-md shadow-lg w-80 mx-auto">
      <div class="flex items-center mb-1">

        <div class="bg-blue-400 rounded-full h-4 w-4 flex-shrink-0"></div>
        <input type="text" name="depart" placeholder="Départ"
          class="bg-transparent form-input ml-2 flex-1 text-gray-600 focus:outline-none">
        </input>
      </div>

      <div class="h-px bg-gray-300 mx-6 my-2"></div>

      <div class="flex items-center mt-1">
        <div class="bg-[#199675] rounded-full h-4 w-4 flex-shrink-0"></div>
        <input type="text" name="destination" placeholder="Destination"
          class="bg-transparent form-input ml-2 flex-1 text-gray-600 focus:outline-none">
        </input>
      </div>

      <div class="flex items-center mt-8">
        <select name="timeOption"
          class="bg-transparent form-select ml-2 flex-1 text-gray-600 focus:outline-none">
          <option value="departure">
            Heure de départ
          </option>
          <option value="arrival">
            Heure d'arrivée
          </option>
        </select>
      </div>

      <div class="flex items-center mt-1">
        <input type="time" name="time"
          class="bg-transparent form-input ml-2 flex-1 text-gray-600 focus:outline-none" />
      </div>

      <button
        class="btn btn-block rounded-md mt-8 bg-[#199675] w-full max-w-xs border-transparent text-white mx-auto block text-md font-medium hover:bg-[#16a085] hover:border-transparent"
        type="submit">Rechercher
      </button>

    </form>
  );
};

export default SearchBox;
