Cypress.Commands.add('iniciarSesion', (usuario, contra) => {
    //lo que quiero que haga esa funcion

    cy.visit('https://www.saucedemo.com/')
    cy.get('[Placeholder=Username]').clear().type(usuario)
    cy.get('[Placeholder=Password]').clear().type(contra)
    cy.get('[data-test="login-button"]').click();
})

Cypress.Commands.add('agregar2ProductosInicio', () => {
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
})

Cypress.Commands.add('logout',()=>{
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.clearCookies();
    cy.get('.login_container').should('be.visible')
})

Cypress.Commands.add('verItemsCarrito', () => {
    cy.wait(4000)
    cy.get('#shopping_cart_container').click();
    cy.get('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_quantity').contains('1');
    cy.get('#item_5_title_link > div').contains('Sauce Labs Fleece Jacket');
    cy.get('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_quantity').contains('1')
    cy.get('#item_1_title_link > div').contains('Sauce Labs Bolt T-Shirt')
})

Cypress.Commands.add('verProductoCarrito', () => {
    cy.wait(4000)
    cy.get('#shopping_cart_container').click();
    cy.get('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_quantity').contains('1');
    cy.get('#item_5_title_link > div').contains('Sauce Labs Fleece Jacket');
    cy.get('.inventory_item_desc').should('be.visible')
    cy.get('.inventory_item_price').should('be.visible')
    cy.get('#remove-sauce-labs-fleece-jacket').contains('Remove')
    cy.get('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_quantity').contains('1')
    cy.get('#item_1_title_link > div').contains('Sauce Labs Bolt T-Shirt')
    cy.get('.inventory_item_desc').should('be.visible')
    cy.get('.inventory_item_price').should('be.visible')
    cy.get('#remove-sauce-labs-bolt-t-shirt').contains('Remove')
})

Cypress.Commands.add('continuarComprando',()=>{
    cy.get('#continue-shopping').click();
    cy.wait(200);
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').contains('2');
})

Cypress.Commands.add('irCheckout', (type = 'valido') => {
    cy.get('#checkout').contains('Checkout').click();
    cy.fixture('infoCheckout').then((data) => {
        const infoJson = data[type]
        cy.get('input[placeholder="First Name"]').clear().type(infoJson.FirstName);
        cy.get('input[placeholder="Last Name"]').clear().type(infoJson.LastName);
        cy.get('input[placeholder="Zip/Postal Code"]').clear().type(infoJson.Zip);
    });
    cy.get('#continue').contains('Continue').click();
})

Cypress.Commands.add('checkoutIncorrecto', (type = 'tipoDatoIncorrecto') => {
    cy.get('#checkout').contains('Checkout').click();
    cy.fixture('infoCheckout').then((data) => {
        const infoJson = data[type]
        cy.get('input[placeholder="First Name"]').clear().type(infoJson.FirstName);
        cy.get('input[placeholder="Last Name"]').clear().type(infoJson.LastName);
        cy.get('input[placeholder="Zip/Postal Code"]').clear().type(infoJson.Zip);
    });
    cy.wait(400)
    cy.get('.error-message-container.error').should('be.visible');
    cy.get('#continue').contains('Continue').click();
    
})

Cypress.Commands.add('vistaPreviaProductos', () => {
    cy.get('#checkout_summary_container > div > div.cart_list > div:nth-child(3) > div.cart_quantity').contains(1);
    cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Fleece Jacket')
    cy.get('#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_quantity').contains(1);
    cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Bolt T-Shirt')
    cy.get('#checkout_summary_container > div > div.summary_info > div.summary_total_label').contains('Total: $71.26')
})
Cypress.Commands.add('confirmarCompra', () => {
    // cy.get('#checkout_summary_container > div > div.summary_info > div.summary_total_label').contains('Total: $71.26');
    cy.get('[data-test="finish"]').contains('Finish').click();
    cy.get('#checkout_complete_container').contains('Thank you for your order!')
})

Cypress.Commands.add('agregarProductoCarrito', (producto) => {
    cy.get(producto).click();
    //cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
})

Cypress.Commands.add('eliminarProductoCarrito', (producto) => {
    //cy.get(producto).click();
    cy.get('button').contains('Remove').click();
    cy.get('#shopping_cart_container > a').should('be.empty')
})

Cypress.Commands.add('ordenarPorNombreAsc', () => {
    cy.wait(2000)
    //cy.get('#header_container > div.header_secondary_container > div > span > span').first().click();
    cy.wait(2000)//comentarop
    cy.get('.product_sort_container').select('az')
        .then(($titulos) => {
            //obtener el titulo de cada item
            const t = [...$titulos].map((titulo) => titulo.innerText)
            const titulosOrdenados = [...t].sort()
            expect(t).to.deep.equal(titulosOrdenados);
        })
})

Cypress.Commands.add('ordenarPorNombreDesc', () => {
    cy.wait(2000)
    //cy.get('#header_container > div.header_secondary_container > div > span > span').first().click();
    cy.wait(2000)//comentarop
    cy.get('.product_sort_container').select('za')
        .then(($titulos) => {
            //obtener el titulo de cada item
            const t = [...$titulos].map((titulo) => titulo.innerText)
            const titulosOrdenadosInverso = [...t].sort().reverse();
            expect(t).to.deep.equal(titulosOrdenadosInverso);
        })
})

Cypress.Commands.add('cancelarCompra', () => {
    //cy.get(producto).click();
    cy.get('button').contains('Cancel').click();
    cy.get('#inventory_container').should('be.visible')
})

Cypress.Commands.add('verListaProductos', () => {
    //cy.get(producto).click();
    cy.get('.inventory_item_label>a').eq(0).contains('Sauce').should('be.visible');
    cy.get('.inventory_item_label>a').eq(1).contains('Sauce').should('be.visible');
    cy.get('.inventory_item_label>a').eq(2).contains('Sauce').should('be.visible');
    cy.get('.inventory_item_label>a').eq(3).contains('Sauce').should('be.visible');
    cy.get('.inventory_item_label>a').eq(4).contains('Sauce').should('be.visible');
    cy.get('.inventory_item_label>a').eq(5).contains('Sauce').should('be.visible');
    cy.get('.inventory_item_desc').should('be.visible')
    cy.get('.btn_primary').should('be.visible')
})

Cypress.Commands.add('verProductosDetallados', () => {
    //variable donde asigno un numero random entre 0 y 5
    const getRandomInteger = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
      
        return Math.floor(Math.random() * (max - min)) + min
      }
      
    const nroItem=getRandomInteger(0,5)
    cy.get('.inventory_item_label > a').eq(nroItem).click();
    cy.get('.inventory_details_container .inventory_details_img_container').should('be.visible');
    cy.get('.inventory_details_container .inventory_details_name').should('be.visible');
    cy.get('.inventory_details_container .inventory_details_desc').should('be.visible');
    cy.get('.inventory_details_container .inventory_details_price').should('be.visible');
    cy.get('.inventory_details_container .inventory_details_desc_container .btn').should('be.visible');
    cy.get('.left_component .btn_secondary.back').click();
    cy.get('.inventory_item_label > a').should('be.visible');
})
Cypress.Commands.add('seleccionarOpcionMenu', (opcion) => {
    cy.get('#react-burger-menu-btn').click();
    cy.get(opcion).click();

    if (opcion === '#reset_sidebar_link') {
            cy.get('#reset_sidebar_link').click();
           // cy.wait(200)
            cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').contains('Add to cart');
            cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').contains('Add to cart')
            //cy.get(200)
            cy.get('#shopping_cart_container > a > span').should('be.empty')
    }

    if(opcion == '#inventory_sidebar_link'){
        cy.get('.inventory_item_label>a').should('be.visible');
    }
})

let titulo2;
Cypress.Commands.add('agregarProductoDesdeDetalle', () => {
    //variable donde asigno un numero random entre 0 y 5
    const getRandomInteger = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
      
        return Math.floor(Math.random() * (max - min)) + min
      }

    //variable donde guardo el titulo del item seleccionado de manera aleatoria
    let titulo;
      
    const nroItem=getRandomInteger(0,5)
    cy.get('.inventory_item_label > a').eq(nroItem).click().invoke('text').then((titulo)=>{
        titulo2 = titulo.trim();
        cy.get('.inventory_details_container .inventory_details_desc_container .btn').click();
    cy.get('#shopping_cart_container > a').click();
    cy.get('.cart_quantity').contains('1')
    cy.wait(200)
    cy.get('.cart_item_label>a').should('contain',titulo2)
    });
})

Cypress.Commands.add('eliminarProductoDesdeDetalle',()=>{
    cy.get('[data-test="continue-shopping"]').click();
    cy.get('.inventory_item_label>a').contains(titulo2).click();
    cy.get('#remove').click();
    cy.get('#shopping_cart_container > a').should('be.empty')
    cy.get('#shopping_cart_container > a').click();
    cy.get('.cart_quantity_label').eq(0).should('be.visible');
    cy.get('.cart_desc_label').eq(0).should('be.visible')

})

Cypress.Commands.add('ordenarPorPrecio', (select) => {
    cy.wait(2000)
    //cy.get('#header_container > div.header_secondary_container > div > span > span').first().click();
    cy.wait(2000)//comentarop
    
    if(select=='hilo'){
        cy.get('.product_sort_container').select('hilo')
        cy.get('.inventory_item_price').then(($precios) => {
            //obtener el precio de cada item
            const p = [...$precios].map((precio) => parseFloat(precio.textContent.trim().replace('$', '')))
            const preciosOrdenados = [...p].sort((a, b) => b - a)
            expect(p).to.deep.equal(preciosOrdenados);
            console.log('contenido de array 1'+p)
            console.log('contenido de array 2'+preciosOrdenados)

        })
    }else if (select=='lohi'){
        cy.get('.product_sort_container').select('lohi')
        cy.get('.inventory_item_price').then(($precios) => {
            //obtener el precio de cada item
            const p = [...$precios].map((precio) => parseFloat(precio.textContent.trim().replace('$', '')))
            const preciosOrdenados = [...p].sort((a, b) => a - b);
            console.log('contenido de array 1'+p)
            console.log('contenido de array 2'+preciosOrdenados)
            expect(p).to.deep.equal(preciosOrdenados);
        })
    }
})