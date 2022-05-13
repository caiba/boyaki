describe('ログイン機能' , () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })
    it('正常入力値の確認' , () => {
        cy.get('#UserID').type('admin@caiba.net')
        cy.get('#Password').type('password')
        cy.get('#login').click()
        cy.contains('MAIN MENU' , { timeout: 30000 } ).should('exist'); 
    })
})