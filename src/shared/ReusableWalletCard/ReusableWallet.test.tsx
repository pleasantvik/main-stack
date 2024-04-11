import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import ReuseableWalletCard from "./index";

describe("ReusableTransaction", () => {
  test("render title correctly", () => {
    // Create the virtual dom of the component we are trying to render
    render(
      <ReuseableWalletCard amount={100} isLoading={false} title="Deposit" />
    );
    const titleEl = screen.getByText("Deposit");
    expect(titleEl).toBeDefined();
  });

  test("render amount correctly", () => {
    // Create the virtual dom of the component we are trying to render
    render(
      <ReuseableWalletCard amount={100} isLoading={false} title="Deposit" />
    );
    const amountEl = screen.getByText("100.00");
    expect(amountEl).toBeDefined();
  });
});
