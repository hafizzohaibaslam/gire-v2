"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, X, Search } from "lucide-react";
import { createContext, useContext, useState, ReactNode } from "react";

// Context types
type MultiSelectContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  options: string[];
  selectedOptions: string[];
  onChange: (options: string[]) => void;
  filteredOptions: string[];
  handleOptionToggle: (option: string) => void;
  handleSelectAll: () => void;
  handleClearAll: () => void;
  handleRemoveOption: (option: string) => void;
};

// Create context
const MultiSelectContext = createContext<MultiSelectContextType | null>(null);

// Hook to use context
const useMultiSelect = () => {
  const context = useContext(MultiSelectContext);
  if (!context) {
    throw new Error("useMultiSelect must be used within a MultiSelect.Root");
  }
  return context;
};

// Root component
type MultiSelectRootProps = {
  children: ReactNode;
  options: string[];
  selectedOptions: string[];
  onChange: (options: string[]) => void;
  className?: string;
};

const MultiSelectRoot = ({
  children,
  options,
  selectedOptions,
  onChange,
  className,
}: MultiSelectRootProps) => {
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

  const contextValue: MultiSelectContextType = {
    isOpen,
    setIsOpen,
    searchTerm,
    setSearchTerm,
    options,
    selectedOptions,
    onChange,
    filteredOptions,
    handleOptionToggle,
    handleSelectAll,
    handleClearAll,
    handleRemoveOption,
  };

  return (
    <MultiSelectContext.Provider value={contextValue}>
      <div className={cn("w-full relative", className)}>{children}</div>
    </MultiSelectContext.Provider>
  );
};

// Label component
type MultiSelectLabelProps = React.HTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
};

const MultiSelectLabel = ({
  children,
  className,
  htmlFor,
}: MultiSelectLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("block text-sm font-medium text-gray-900 mb-2", className)}
    >
      {children}
    </label>
  );
};

// Trigger component
type MultiSelectTriggerProps = {
  placeholder?: string;
  className?: string;
  children?: ReactNode;
};

const MultiSelectTrigger = ({
  placeholder = "Select fields...",
  className,
  children,
}: MultiSelectTriggerProps) => {
  const { isOpen, setIsOpen, selectedOptions, handleRemoveOption } =
    useMultiSelect();

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "relative w-full px-4 py-3 text-left bg-white border rounded-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "hover:border-gray-400",
        isOpen ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-300",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1 min-h-[20px]">
          {selectedOptions.length === 0 ? (
            <span className="text-gray-500">{placeholder}</span>
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
      {children}
    </div>
  );
};

// Content component (dropdown)
type MultiSelectContentProps = {
  children: ReactNode;
  className?: string;
};

const MultiSelectContent = ({
  children,
  className,
}: MultiSelectContentProps) => {
  const { isOpen } = useMultiSelect();

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

// Search component
type MultiSelectSearchProps = {
  placeholder?: string;
  className?: string;
};

const MultiSelectSearch = ({
  placeholder = "Search fields...",
  className,
}: MultiSelectSearchProps) => {
  const { searchTerm, setSearchTerm } = useMultiSelect();

  return (
    <div className={cn("p-3 border-b border-gray-100", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

// Actions component
type MultiSelectActionsProps = {
  selectAllText?: string;
  deselectAllText?: string;
  clearAllText?: string;
  className?: string;
};

const MultiSelectActions = ({
  selectAllText = "Select All",
  deselectAllText = "Deselect All",
  clearAllText = "Clear All",
  className,
}: MultiSelectActionsProps) => {
  const { selectedOptions, filteredOptions, handleSelectAll, handleClearAll } =
    useMultiSelect();

  return (
    <div
      className={cn(
        "flex items-center justify-between px-3 py-2 border-b border-gray-100",
        className
      )}
    >
      <button
        type="button"
        onClick={handleSelectAll}
        className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
      >
        {selectedOptions.length === filteredOptions.length
          ? deselectAllText
          : selectAllText}
      </button>
      {selectedOptions.length > 0 && (
        <button
          type="button"
          onClick={handleClearAll}
          className="text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          {clearAllText}
        </button>
      )}
    </div>
  );
};

// Options list component
type MultiSelectOptionsProps = {
  className?: string;
  emptyText?: string;
  maxHeight?: string;
};

const MultiSelectOptions = ({
  className,
  emptyText = "No fields found",
  maxHeight = "max-h-48",
}: MultiSelectOptionsProps) => {
  const { filteredOptions, selectedOptions, handleOptionToggle } =
    useMultiSelect();

  return (
    <div className={cn(`${maxHeight} overflow-y-auto`, className)}>
      {filteredOptions.length === 0 ? (
        <div className="px-3 py-4 text-sm text-gray-500 text-center">
          {emptyText}
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
              <span className="ml-3 text-sm text-gray-700">{option}</span>
            </label>
          );
        })
      )}
    </div>
  );
};

// Selected count component
type MultiSelectCountProps = {
  className?: string;
  singularText?: string;
  pluralText?: string;
};

const MultiSelectCount = ({
  className,
  singularText = "field selected",
  pluralText = "fields selected",
}: MultiSelectCountProps) => {
  const { selectedOptions } = useMultiSelect();

  if (selectedOptions.length === 0) return null;

  return (
    <div className={cn("mt-2 text-xs text-gray-500", className)}>
      {selectedOptions.length}{" "}
      {selectedOptions.length !== 1 ? pluralText : singularText}
    </div>
  );
};

// Compound component export
export const MultiSelect = {
  Root: MultiSelectRoot,
  Label: MultiSelectLabel,
  Trigger: MultiSelectTrigger,
  Content: MultiSelectContent,
  Search: MultiSelectSearch,
  Actions: MultiSelectActions,
  Options: MultiSelectOptions,
  Count: MultiSelectCount,
};

// Export the hook for custom implementations
export { useMultiSelect };
