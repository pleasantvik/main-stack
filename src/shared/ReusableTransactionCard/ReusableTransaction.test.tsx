import { render, screen } from "@testing-library/react";
import ReusableTransactionCard from "./index";
import { test, expect, describe } from "vitest";

describe("ReusableTransaction", () => {
  test("render productName and depositorName correctly", () => {
    // Create the virtual dom of the component we are trying to render
    render(
      <ReusableTransactionCard
        date="Jan 22, 1989"
        productName="beer"
        depositorName="tomi"
        withdrawalStatus="title"
        isLoading={false}
        amount={100}
        isMetaData={true}
      />
    );
    const productNameEl = screen.getByText("beer");
    const depositorNameEl = screen.getByText("tomi");
    expect(productNameEl).toBeDefined();
    expect(depositorNameEl).toBeDefined();
  });

  test("render date correctly", () => {
    // Create the virtual dom of the component we are trying to render
    render(
      <ReusableTransactionCard
        date="January 22, 1989"
        productName="beer"
        depositorName="tomi"
        withdrawalStatus="title"
        isLoading={false}
        amount={100}
        isMetaData={true}
      />
    );
    const dateEl = screen.getByText("Jan 22, 1989");

    expect(dateEl).toBeDefined();
  });
});
