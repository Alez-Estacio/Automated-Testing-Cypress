const { should } = require("chai");
const { beforeEach } = require("mocha")



module.exports = {
    projectId: "ejv3fc", 
};

describe("Test suite - conjunto ", () =>{
    
    //Es un bucle para entrar al link de la pagina cada vez que va hacer una prueba
    beforeEach(()=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com")
    
    })


    it.only("1 Validacion del logo Orange HRM", () =>{
                
    
        cy.get(".orangehrm-login-branding > img").should("be.visible")
    })


    it.only("2 Validacion del logo HR FOR ALL", () =>{
                
        cy.get('.orangehrm-login-logo').should("be.visible")
    })


    it.only("3 Validacion de texto LOGIN", () =>{
      
      cy.get('.oxd-text--h5').should('contain', 'Login')
    })


    it.only("4 Validacion de visibilidad de User:Admin y Passwor:admin ", () =>{
                
        cy.get('.oxd-sheet > :nth-child(1)').should("be.visible")
        cy.get('.oxd-sheet > :nth-child(1)').should("be.visible")
    })


    it.only("5 Validacion  del campo username", () =>{

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
    })


    it.only("6 Validacion  del campo Password", () =>{

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
    })


    it.only("7 Validacion del link recuperacion de contraseña sea visible y funcional", () =>{
  
        cy.get('.orangehrm-login-forgot > .oxd-text').click();

        cy.get('.oxd-button--ghost').click();

        cy.get('.orangehrm-login-forgot > .oxd-text').should("be.visible")

    })


    it.only("8 Validar que en la parte inferior exista una etiqueta con un texto que diga la version de la pagina", () => {  
        
        const versionLabel = cy.get('.orangehrm-copyright-wrapper > :nth-child(1)');
    })


    it.only("9 Validar en la parte inferior exista la etiqueta con un texto que diga los derechos reservados ", () => {  
        
        const versionLabel = cy.get('.orangehrm-copyright-wrapper > :nth-child(2)');
    })


    it.only("10 Validar que el boton login sea visible y funcional", () => {

        cy.get('.oxd-button').should("be.visible")
        cy.get('.oxd-button').click();

    }) 

    
    it.only("11 Validar que los iconos de redes sociales sean visible", () => {

        cy.get('.orangehrm-login-footer-sm').should("be.visible")
    })  



})



