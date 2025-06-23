document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('purchase-form')) {
        const purchaseForm = document.getElementById('purchase-form');
        purchaseForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const ticketType = document.getElementById('ticket-type').value;
            const quantity = document.getElementById('quantity').value;
            
            document.getElementById('ticket-name').textContent = name;
            document.getElementById('ticket-type-display').textContent = ticketType;
            document.getElementById('ticket-quantity').textContent = quantity;

            const ticketId = 'LP' + new Date().getTime();
            
            JsBarcode("#barcode-img", ticketId, {
                format: "CODE128",
                displayValue: true,
                fontSize: 18,
                textMargin: 0
            });

            document.getElementById('ticket-result').style.display = 'block';
        });
    }

    if (document.querySelector('.gallery-container')) {
        const gallery = document.querySelector('.gallery-container');
        // Add your image names to this list
        const images = [
            'gallery1.jpg',
            'gallery2.jpg',
            'gallery3.jpg',
            'gallery4.jpg',
            'gallery5.jpg',
            'gallery6.jpg'
        ];

        images.forEach(imageName => {
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            img.src = `images/${imageName}`;
            img.alt = `Pool Image`;
            imgContainer.appendChild(img);
            gallery.appendChild(imgContainer);
        });
    }
}); 