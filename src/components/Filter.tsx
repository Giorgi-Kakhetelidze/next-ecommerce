import React from "react";

function Filter() {
  return (
    <div className="mt-12 flex justify-between gap-2">
      <div className="flex gap-6 flex-wrap">
        <select
          name=""
          id=""
          className="cursor-pointer py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">Physical </option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name=""
          id=""
          className="cursor-pointer py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Size</option>
          <option value="">Size</option>
        </select>
        <select
          name=""
          id=""
          className="cursor-pointer py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option value="">Test</option>
        </select>
        <select
          name=""
          id=""
          className="cursor-pointer py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="cursor-pointer py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
        
      </div>
      <div className="pr-1">
          <select
            name=""
            id=""
            className="cursor-pointer py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          >
            <option>Sort By</option>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
    </div>
  );
}

export default Filter;
