import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductItem from "../../src/components/ProductItem";

describe('Product Item', () => {
  it('renders Product Item', () => {
    render(<ProductItem />);

    const linkElement = screen.getByRole('section', {className: "product-item"})
    expect(linkElement).toBeInTheDocument();
  })
})