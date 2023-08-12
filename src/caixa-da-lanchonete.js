class CaixaDaLanchonete {

    /**  Lista com os itens do Menu */
    Menu = {
        "cafe":["Café",3.0],
        "chantily":["Chantily (extra do Café)",1.5,"cafe"],
        "suco":["Suco Natural",6.2],
        "sanduiche":["Sanduíche",6.5],
        "queijo":["Queijo (extra do Sanduiche)", 2.0, "sanduiche"],
        "salgado":["Salgado",7.25],
        "combo1":["1 Suco e 1 Sanduíche",9.5],
        "combo2":["1 Café e 1 Sanduíche",7.5],
    }

    /** Lista com métodos de pagamento */
    PaymentMethods = {
        "dinheiro": 0.95,
        "debito": 1,
        "credito": 1.03,
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let carrinhoDeCompras = []
        let valorFinal = 0
        if (itens.length <= 0){
            return "Não há itens no carrinho de compra!"
        }
        for (let i = 0; i < itens.length; i++) {
            let Item =  itens[i].split(',')[0]
            let Quantidade = Number(itens[i].split(',')[1])

            if (Quantidade <= 0){
                return "Quantidade inválida!"
            }
            else if (!(Item in this.Menu)){
                return "Item inválido!"
            }
            else if (Number(this.Menu[Item].length) < 2 || Number(this.Menu[Item].length) > 3){
                return "Item inválido!" 
            }
            else if (Number(this.Menu[Item].length) == 3){
                let itemPrincipalNecessario = this.Menu[Item][2]
                if(!carrinhoDeCompras.includes(itemPrincipalNecessario)){
                    return "Item extra não pode ser pedido sem o principal"
                }
            }
            else if (!(metodoDePagamento in this.PaymentMethods)){
                return "Forma de pagamento inválida!"
            }
            let Preco = Number(this.Menu[Item][1])
            carrinhoDeCompras.push(Item)
            valorFinal = (Preco * Quantidade + Number(valorFinal))
        }

        return ("R$ " + (valorFinal * this.PaymentMethods[metodoDePagamento]).toFixed(2)).replace(".",",")
        
        
    }

}
export { CaixaDaLanchonete };