
        
        const items = [
            { name: "Product 1", price: 10.99 },
            { name: "Product 2", price: 5.99 },
            { name: "Product 3", price: 8.49 }
        ];


        function calculateTotal() {
            const cartItems = document.getElementById("cart-items");
            const totalAmount = document.getElementById("total-amount");
            const printButton = document.querySelector(".print-button");

            let total = 0;

            cartItems.innerHTML = "";

    
            items.forEach((item, index) => {
                const row = document.createElement("tr");
                const itemName = document.createElement("td");
                const itemPrice = document.createElement("td");
                const itemQuantity = document.createElement("td");
                const itemTotal = document.createElement("td");

                itemName.textContent = item.name;
                itemPrice.textContent = item.price.toFixed(2);
                const quantityInput = document.createElement("input");
                quantityInput.type = "number";
                quantityInput.min = 0;
                quantityInput.value = 0;
                quantityInput.id = `quantity-${index}`;
                itemQuantity.appendChild(quantityInput);

                row.appendChild(itemName);
                row.appendChild(itemPrice);
                row.appendChild(itemQuantity);
                row.appendChild(itemTotal);

                cartItems.appendChild(row);

                quantityInput.addEventListener("input", () => {
                    const quantity = parseInt(quantityInput.value) || 0;
                    const itemTotalValue = (item.price * quantity).toFixed(2);
                    itemTotal.textContent = itemTotalValue;

                   
                    calculateTotal();
                });
            });

            
            const itemTotals = document.querySelectorAll("td:nth-child(4)");
            itemTotals.forEach((itemTotal) => {
                total += parseFloat(itemTotal.textContent);
            });

          
            totalAmount.textContent = total.toFixed(2);

        
            printButton.style.display = "block";
        }
   