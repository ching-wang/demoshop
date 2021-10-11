import {getAllProducts} from "./productRepo";

describe("product repository", () => {
    describe(getAllProducts.name, () => {
        it("gets all products", async () => {
            const products = await getAllProducts()

            expect(products.length).toBeGreaterThanOrEqual(34)

            products.forEach((product) => {
                expect(product).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    description: expect.any(String),
                    created_at: expect.any(Date),
                    updated_at: expect.any(Date),
                }))
            })
        })
    })
})
