describe('Testeando standard_user', {testisolation:false},()=>{
    it.skip('Agrego un articulo al carrito desde la pagina principal',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.wait(4000)
    })

    it.skip('Desloguearse con articulos guardados en el carrito',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.logout();
        cy.iniciarSesion(usuario, contra);
        cy.verItemsCarrito();
        cy.wait(4000)
    })

    it.skip('Proceso de compra',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.wait(4000);
        cy.verItemsCarrito();
        cy.irCheckout('valido');
        cy.vistaPreviaProductos();
        cy.confirmarCompra();
    })

    it.skip('Ver carrito',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.verProductoCarrito();
    })

    it.skip('Ver carrito y continuar comprando',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.verProductoCarrito();
        cy.continuarComprando();
    })

    it.skip('Completar con tipos de dato incorectos en el checkout',()=>{
        const usuario="standard_user"
        const contra="secret_sauce"
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.wait(4000);
        cy.verItemsCarrito();
        cy.checkoutIncorrecto('tipoDatoIncorrecto');
    })

    it.skip('Ver todos los items desde el menu hamburguesa',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        const opcion='#inventory_sidebar_link';
        cy.iniciarSesion(usuario, contra);
        cy.seleccionarOpcionMenu(opcion);
    })

    it.skip('Agregar un producto desde inventory_item',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregarProductoDesdeDetalle();
    })

    it.skip('Eliminar un articulo al carrito desde inventory-item',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregarProductoDesdeDetalle();
        cy.eliminarProductoDesdeDetalle();

    })

    it.skip('Eliminar un articulo al carrito desde la pagina principal',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        const producto='#add-to-cart-sauce-labs-fleece-jacket'
        cy.agregarProductoCarrito(producto);
        cy.eliminarProductoCarrito(producto);
    })

    it.skip('Ordenar inevntario de manera ascendente segun el nombre',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.ordenarPorNombreAsc();
    })

    it.skip('Ordenar inventario de manera descendente segun el nombre',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.ordenarPorNombreDesc();
    })

    it.skip('Dejar vacia la info del checkout',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.wait(4000);
        cy.verItemsCarrito();
        cy.get('#checkout').contains('Checkout').click();
        cy.get('#continue').contains('Continue').click();
        
    })

    it.skip('Cancelar una compra',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.verItemsCarrito();
        cy.irCheckout('valido');
        cy.vistaPreviaProductos();
        cy.cancelarCompra();
    })

    it.skip('Reiniciar el carrito',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        const opcion='#reset_sidebar_link';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.seleccionarOpcionMenu(opcion);
    })

    it.skip('Ver que los productos se muestren correctamente',()=>{//VER POR QUE NO ALMACENA EN SCREENSHOTS
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.verListaProductos();
    })

    it.skip('Ver la descripcion completa de cada producto',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.verProductosDetallados();
    })

    it.skip('Desloguearse',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.logout();
    })

    it.skip('Ordenar inventario de manera ascendente segun el precio',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.ordenarPorPrecio('hilo');
    })

    it.skip('Ordenar inventario de manera descendente segun el precio',()=>{
        const usuario='standard_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.ordenarPorPrecio('lohi');
    })
    
})
describe('Testeando problem_user', {testisolation:false},()=>{
    it.skip('Aquí vamos a ver el proceso de compra del user 2',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.wait(4000);
        cy.verItemsCarrito();
        cy.irCheckout('valido');
        cy.vistaPreviaProductos();
        cy.confirmarCompra();
    })
    
    it.skip('Aqui vemos el catalogo de productos',()=>{//VER QUE ONDA ESTE TEST
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.verListaProductos();
    })

    it.skip('Desloguearnos habiendo guardado previamnete productos',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.logout();
    })

    it.skip('Aquí vemos informacion detallada del producto',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.verProductosDetallados();
    })

    it.skip('Agrego un articulo al carrito desde la pagina principal',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.wait(4000)
    })

    it.skip('Agrego un articulo al carrito desde inventory-item',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregarProductoDesdeDetalle();
    })

    it.skip('Eliminar un articulo al carrito desde la pagina principal',()=>{
        const usuario='problem_user'; 
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        const producto='#add-to-cart-sauce-labs-fleece-jacket'
        cy.agregarProductoCarrito(producto);
        cy.eliminarProductoCarrito(producto);
    })

    it.skip('Eliminar un articulo al carrito desde inventory-item',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregarProductoDesdeDetalle();
        cy.eliminarProductoDesdeDetalle();
    })

    it.skip('Ordenar inevntario de manera ascendente segun el nombre',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.ordenarPorNombreAsc();
    })

    
    it('Ordenar inventario de manera descendente segun el nombre',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.ordenarPorNombreDesc();
    })

    it.skip('Ordenar inventario de manera ascendente segun el precio',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.ordenarPorPrecio('hilo');
    })

    it.skip('Ordenar inventario de manera descendente segun el precio',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.ordenarPorPrecio('lohi');
    })

    it.skip('Ver carrito',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.verProductoCarrito();
    })

    it.skip('Ver carrito y continuar comprando',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.verProductoCarrito();
        cy.continuarComprando();
    })

    it.skip('Dejar vacia la info del checkout',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.wait(4000);
        cy.verItemsCarrito();
        cy.get('#checkout').contains('Checkout').click();
        cy.get('#continue').contains('Continue').click();
        
    })

    
    it.skip('Completar con tipos de dato incorectos en el checkout',()=>{
        const usuario="problem_user"
        const contra="secret_sauce"
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.wait(4000);
        cy.verItemsCarrito();
        cy.checkoutIncorrecto('tipoDatoIncorrecto');
    })

    it.skip('Cancelar una compra',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.verItemsCarrito();
        cy.irCheckout('valido');
        cy.vistaPreviaProductos();
        cy.cancelarCompra();
    })

    it.skip('Ver todos los items desde el menu hamburguesa',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        const opcion='#inventory_sidebar_link';
        cy.iniciarSesion(usuario, contra);
        cy.seleccionarOpcionMenu(opcion);
    })

    
    it.skip('Desloguearse',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        cy.iniciarSesion(usuario, contra);
        cy.logout();
    })

    
    it.skip('Reiniciar el carrito',()=>{
        const usuario='problem_user';
        const contra='secret_sauce';
        const opcion='#reset_sidebar_link';
        cy.iniciarSesion(usuario, contra);
        cy.agregar2ProductosInicio();
        cy.seleccionarOpcionMenu(opcion);
    })



    

    


})