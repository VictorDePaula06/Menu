// Menu Data
const menuData = {
    especiais: [
        {
            id: 1,
            name: 'Risoto de Trufas',
            description: 'Arroz Arbório cremoso com trufa negra e parmesão envelhecido',
            price: 28,
            image: 'imagens/risoto.jpeg',
            discount: 15
        },
        {
            id: 2,
            name: 'Bife Wagyu',
            description: 'Premium Japanese A5 Wagyu com legumes da estação',
            price: 85,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 3,
            name: 'Lagosta Thermidor',
            description: 'Lagosta fresca do Maine em molho cremoso de conhaque',
            price: 65,
            image: 'imagens/lagosta.jpeg',
            discount: 10
        }
    ],
    chopp: [
        {
            id: 1,
            name: 'IPA Artesanal',
            description: 'Chopp Indian Pale Ale com notas cítricas e amargor equilibrado',
            price: 18,
            image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 2,
            name: 'Fizzy',
            description: 'Fizzy é uma bebida mista que combina o melhor de dois mundos, o da cevada e o da uva',
            price: 20,
            image: 'imagens/fizzy.jpeg'
        },
        {
            id: 3,
            name: 'Colorado',
            description: 'Cervaja Colorado ',
            price: 20,
            image: 'imagens/colorado.jpeg'
        },
        {
            id: 4,
            name: 'Stout Cremoso',
            description: 'Trela é uma gíria usada entre os mineiros e significa bate-papo, conversa despretensiosa. A Trela Pilsen é uma refrescante Cerveja Puro Malte com a qualidade Antuérpia',
            price: 20,
            image: 'imagens/trela.jpeg'
        },
    ],
    bebidas: [
        {
            id: 1,
            name: 'Mojito Clássico',
            description: 'Rum, hortelã fresca, limão e água com gás',
            price: 25,
            image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 2,
            name: ' Blackberry Gin Feez',
            description: 'Amoras, gim e limão são a combinação perfeita neste Blackberry Gin Fizz ',
            price: 25,
            image: 'imagens/gin.jpeg'
        },
        {
            id: 3,
            name: 'Caipirinha Classica',
            description: 'Limão, Vodka e açucar',
            price: 25,
            image: 'imagens/caipirinha.jpeg'
        },
        {
            id: 4,
            name: 'Caipirinha Morango',
            description: 'Morango, Vodka e açucar',
            price: 25,
            image: 'imagens/caipmorango.jpeg'
        },
        {
            id: 5,
            name: 'Negrone',
            description: 'Gin, Campari, Vermuto Tinto, Laranja',
            price: 25,
            image: 'imagens/negrone.jpeg'
        },
    ],
    pratos: [
        {
            id: 1,
            name: 'Baião de Dois',
            description: 'Arroz, feijão de corda, queijo coalho e carne de sol',
            price: 30,
            image: 'imagens/baiao.jpeg'
        },
        {
            id: 2,
            name: 'Costelinha Com Barbecue',
            description: 'Arroz, feijão de corda, queijo coalho e carne de sol',
            price: 40,
            image: 'imagens/costelinha.jpeg'
        },
        {
            id: 3,
            name: 'Parmegiana',
            description: 'Arroz, feijão de corda, queijo coalho e carne de sol',
            price: 25,
            image: 'imagens/parmegiana.jpeg'
        },
    ],
    sobremesas: [
        {
            id: 1,
            name: 'Pudim de Leite',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: 'imagens/pudim.jpeg'
        },
        {
            id: 2,
            name: 'Sorvete',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: 'imagens/sorvete.jpeg'
        },
        {
            id: 3,
            name: 'Brownie',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: 'imagens/brownie.jpeg'
        },
        {
            id: 4,
            name: 'Churros',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: 'imagens/churros.jpeg'
        },
        {
            id: 5,
            name: 'Petit Gâteua',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: 'imagens/pt.jpeg'
        },
    ],
    promocoes: [
        {
            id: 1,
            name: 'Combo Família',
            description: '1 Prato Principal + 4 Bebidas + 2 Sobremesas',
            price: 150,
            originalPrice: 200,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
            discount: 25
        },
        {
            id: 2,
            name: 'Happy Hour',
            description: '2 Chopps Artesanais + Porção',
            price: 45,
            originalPrice: 60,
            image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
            discount: 25
        }
    ]
};

// Gallery Data
const galleryData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        description: 'Ambiente interno'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        description: 'Bar'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        description: 'Área externa'
    }
];

// Cart state
let cart = [];

// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    const cartBadges = document.querySelectorAll('.cart-badge');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            hamburger.style.background = 'transparent';
        } else {
            hamburger.style.background = 'var(--text)';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Initialize gallery
    renderGallery();

    // Initialize menu sections
    renderMenuSections();

    // Initialize promotions
    renderPromotions();

    // Menu navigation
    const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
    const menuSections = document.querySelectorAll('.menu-section');

    menuNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active button
            menuNavBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update active section
            menuSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === category) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Cart functions
    window.addToCart = function(category, itemId) {
        const item = menuData[category].find(i => i.id === parseInt(itemId));
        if (item) {
            const cartItem = cart.find(i => i.id === item.id && i.category === category);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({
                    ...item,
                    category,
                    quantity: 1
                });
            }
            updateCartBadge();
            showCartNotification();
        }
    };

    window.updateCartBadge = function() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadges.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        });
    };

    window.showCartNotification = function() {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = 'Item adicionado ao carrinho!';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    };

    window.openCart = function() {
        const cartModal = document.createElement('div');
        cartModal.className = 'cart-modal';
        
        let total = 0;
        const cartContent = cart.map(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="updateQuantity('${item.category}', ${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.category}', ${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
            `;
        }).join('');

        cartModal.innerHTML = `
            <div class="cart-modal-content">
                <div class="cart-header">
                    <h2>Seu Pedido</h2>
                    <button onclick="closeCart()" class="close-cart">&times;</button>
                </div>
                <div class="cart-items">
                    ${cart.length > 0 ? cartContent : '<p class="empty-cart">Seu carrinho está vazio</p>'}
                </div>
                ${cart.length > 0 ? `
                    <div class="cart-footer">
                        <div class="cart-total">
                            <span>Total:</span>
                            <span>R$ ${total.toFixed(2)}</span>
                        </div>
                        <button onclick="checkout()" class="checkout-btn">Finalizar Pedido</button>
                    </div>
                ` : ''}
            </div>
        `;

        document.body.appendChild(cartModal);
        document.body.style.overflow = 'hidden';
    };

    window.closeCart = function() {
        const cartModal = document.querySelector('.cart-modal');
        if (cartModal) {
            cartModal.remove();
            document.body.style.overflow = 'auto';
        }
    };

    window.updateQuantity = function(category, itemId, newQuantity) {
        const itemIndex = cart.findIndex(i => i.id === itemId && i.category === category);
        if (itemIndex > -1) {
            if (newQuantity <= 0) {
                cart.splice(itemIndex, 1);
            } else {
                cart[itemIndex].quantity = newQuantity;
            }
            updateCartBadge();
            openCart(); // Refresh cart modal
        }
    };

    window.checkout = function() {
        const phone = '5511999999999'; // Substitua pelo número do WhatsApp do restaurante
        let message = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
        
        cart.forEach(item => {
            message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
        });

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `\nTotal: R$ ${total.toFixed(2)}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
        
        // Clear cart after checkout
        cart = [];
        updateCartBadge();
        closeCart();
    };
});

// Render gallery
function renderGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.description}">
            <div class="gallery-overlay">
                <p>${item.description}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Render promotions
function renderPromotions() {
    const promotionsGrid = document.querySelector('.promotions-grid');
    if (!promotionsGrid) return;

    menuData.promocoes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        
        card.innerHTML = `
            <div class="menu-image">
                <img src="${item.image}" alt="${item.name}">
                <div class="discount-badge">${item.discount}% OFF</div>
            </div>
            <div class="menu-content">
                <h3 class="menu-title">${item.name}</h3>
                <p class="menu-description">${item.description}</p>
                <div class="menu-price">
                    <span class="current-price">R$ ${item.price.toFixed(2)}</span>
                    <span class="original-price">R$ ${item.originalPrice.toFixed(2)}</span>
                </div>
                <button onclick="addToCart('promocoes', ${item.id})" class="add-to-cart-btn">
                    Adicionar ao Pedido
                </button>
            </div>
        `;
        
        promotionsGrid.appendChild(card);
    });
}

// Render menu sections
function renderMenuSections() {
    Object.entries(menuData).forEach(([category, items]) => {
        const container = document.querySelector(`#${category} .menu-grid`) || 
                         document.querySelector(`#${category} .specials-grid`);
        
        if (!container) return;

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = category === 'especiais' ? 'special-card' : 'menu-card';
            
            const discountPrice = item.discount 
                ? (item.price * (1 - item.discount / 100)).toFixed(2)
                : item.price.toFixed(2);

            card.innerHTML = `
                <div class="menu-image">
                    <img src="${item.image}" alt="${item.name}">
                    ${item.discount ? `
                        <div class="discount-badge">${item.discount}% OFF</div>
                    ` : ''}
                </div>
                <div class="menu-content">
                    <h3 class="menu-title">${item.name}</h3>
                    <p class="menu-description">${item.description}</p>
                    <div class="menu-price">
                        <span class="current-price">R$ ${discountPrice}</span>
                        ${item.discount ? `
                            <span class="original-price">R$ ${item.price.toFixed(2)}</span>
                        ` : ''}
                    </div>
                    <button onclick="addToCart('${category}', ${item.id})" class="add-to-cart-btn">
                        Adicionar ao Pedido
                    </button>
                </div>
            `;
            
            container.appendChild(card);
        });
    });
}