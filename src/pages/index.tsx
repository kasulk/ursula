import useSWR from "swr";
import StocksList from "../components/StocksList";
import { SortParamType, StockType } from "../../types";
import SortDropdown from "@/components/SortDropdown";
import { FormEvent, useState } from "react";
// import Image from "next/image";

export default function Home() {
  const [sortParam, setSortParam] = useState<SortParamType>({
    // TS: Yair
    sortBy: "Symbol",
    sortDirection: "ascending",
  });

  //* move swr to stocklistitem?
  const { data: stocks } = useSWR("/api/demostocks", { fallbackData: [] });

  function handleSortSubmit(event: FormEvent<HTMLFormElement>) {
    const sortOption = event.target as HTMLSelectElement;
    const sortOptionValues = sortOption.value.split("-");

    setSortParam({
      sortBy: sortOptionValues[0] as "Symbol", // TS: Yair
      sortDirection: sortOptionValues[1] as "ascending", // TS: Yair
    });
  }

  //! doesn't work
  // function sortStocksList(
  //   a: StockType,
  //   b: StockType,
  //   sortBy: any,
  //   sortDirection: any
  // ) {
  //   // const sortBy = sortParam.sortBy;

  //   if (sortDirection === "ascending") {
  //     if (a[sortBy] < b[sortBy]) {
  //       return -1;
  //     }
  //     if (a[sortBy] > b[sortBy]) {
  //       return 1;
  //     }
  //   } else if (sortDirection === "descending") {
  //     if (a[sortBy] < b[sortBy]) {
  //       return 1;
  //     }
  //     if (a[sortBy] > b[sortBy]) {
  //       return -1;
  //     }
  //   }
  // return 0;
  // }

  stocks.sort((a: StockType, b: StockType) => {
    // sortStocksList(a, b, sortParam.sortBy, sortParam.sortDirection); //! doesn't work

    const sortBy = sortParam.sortBy;
    const sortDirection = sortParam.sortDirection;

    if (sortDirection === "ascending") {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
    } else if (sortDirection === "descending") {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
    }

    return 0;
  });

  return (
    <>
      <SortDropdown onSubmit={handleSortSubmit} />
      <StocksList stocks={stocks}></StocksList>
    </>
  );
}
