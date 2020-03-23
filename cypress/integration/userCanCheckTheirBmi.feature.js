describe("User can check their Bmi", () => {
    it("user can enter weight or height", ()=> {
        cy.visit("http://localhost:3002")
        cy.contains("BMI Calculator")
        cy.get('#myCheck').check()
        cy.get("#weight").type("90")
        cy.get("#height").type("1.78")
        cy.get('#Calculate').click()
    })

    it('displays a BMI value of 28.41', () => {
		cy.get('#results').should('contain', '28.41')
	})


})