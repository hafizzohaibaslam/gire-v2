"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, X, Search } from "lucide-react";
import { useState } from "react";

type MultiSelectProps = {
  options: string[];
  selectedOptions: string[];
  onChange: (options: string[]) => void;
};

function MultiSelect({ options, selectedOptions, onChange }: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle option selection/deselection
  const handleOptionToggle = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((selected) => selected !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedOptions.length === filteredOptions.length) {
      onChange([]);
    } else {
      onChange(filteredOptions);
    }
  };

  // Handle clear all
  const handleClearAll = () => {
    onChange([]);
  };

  // Remove individual selected option
  const handleRemoveOption = (option: string) => {
    onChange(selectedOptions.filter((selected) => selected !== option));
  };

  return (
    <div className="w-full relative">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        Research Fields
      </label>

      {/* Multi-select container */}
      <div className="relative">
        {/* Trigger button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full px-4 py-3 text-left bg-white border rounded-lg shadow-sm transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "hover:border-gray-400",
            isOpen
              ? "border-blue-500 ring-2 ring-blue-500/20"
              : "border-gray-300"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1 min-h-[20px]">
              {selectedOptions.length === 0 ? (
                <span className="text-gray-500">Select fields...</span>
              ) : (
                selectedOptions.map((option) => (
                  <span
                    key={option}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200"
                  >
                    {option}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveOption(option);
                      }}
                      className="ml-1 text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))
              )}
            </div>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0",
                isOpen ? "rotate-180" : ""
              )}
            />
          </div>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl">
            {/* Search input */}
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search fields..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
              <button
                type="button"
                onClick={handleSelectAll}
                className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                {selectedOptions.length === filteredOptions.length
                  ? "Deselect All"
                  : "Select All"}
              </button>
              {selectedOptions.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Options list */}
            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-4 text-sm text-gray-500 text-center">
                  No fields found
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = selectedOptions.some(
                    (selected) => selected === option
                  );
                  return (
                    <label
                      key={option}
                      className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleOptionToggle(option)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="ml-3 text-sm text-gray-700">
                        {option}
                      </span>
                    </label>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* Selected count */}
      {selectedOptions.length > 0 && (
        <div className="mt-2 text-xs text-gray-500">
          {selectedOptions.length} field
          {selectedOptions.length !== 1 ? "s" : ""} selected
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
