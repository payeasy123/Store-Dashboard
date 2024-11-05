import { useState } from "react";

export interface ISearchProps<T extends Record<string, any>, K extends keyof T> {
    initialState: T[];
    setState: React.Dispatch<React.SetStateAction<T[]>>;
    conditionKeyword: K;
    resetState: T[];
}

export const useSearch = <T extends Record<string, any>, K extends keyof T>(props: ISearchProps<T, K>) => {
    const { conditionKeyword, initialState, setState, resetState } = props;

    const [searchKeyword, setSearchKeyword] = useState("");
    const clearSearch = () => setSearchKeyword("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
        const searchKeyword = e.target.value.toLowerCase();

        if (searchKeyword === "") {
            setState(resetState!);
            return;
        }

        const result = initialState.filter((item) => {
            const currentItem = item[conditionKeyword]?.toString().toLowerCase();
            return currentItem?.includes(searchKeyword);
        });

        setState(result);
    };

    const searchAlgorithm = (arr1: string[], searchedKeywordArr: string[]) => {
        const set = new Set(arr1);

        for (const item of searchedKeywordArr) {
            if (set.has(item)) {
                return true;
            }
        }
        return false;
    };

    return {
        clearSearch,
        searchKeyword,
        handleSearch,
    };
};
