// Menu Data
const menuData = {
    especiais: [
        {
            id: 1,
            name: 'Risoto de Trufas',
            description: 'Arroz Arbório cremoso com trufa negra e parmesão envelhecido',
            price: 28,
            image: 'https://images.unsplash.com/photo-1673421161165-c4fb04a2a583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
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
            image: 'https://images.unsplash.com/photo-1533682440656-6a20b8267c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
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
            name: 'Stout Cremoso',
            description: 'Chopp escuro com notas de café e chocolate',
            price: 20,
            image: 'https://images.unsplash.com/photo-1644333192059-70d04c1bbbd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }
    ],
    bebidas: [
        {
            id: 1,
            name: 'Mojito Clássico',
            description: 'Rum, hortelã fresca, limão e água com gás',
            price: 25,
            image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }
    ],
    pratos: [
        {
            id: 1,
            name: 'Baião de Dois',
            description: 'Arroz, feijão de corda, queijo coalho e carne de sol',
            price: 45,
            image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        }
    ],
    sobremesas: [
        {
            id: 1,
            name: 'Pudim de Leite',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: '/imagens/pudim.jpeg'
        },
        {
            id: 2,
            name: 'Sorvete',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: '/imagens/sorvete.jpeg'
        },
        {
            id: 3,
            name: 'Brownie',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: '/imagens/brownie.jpeg'
        },
        {
            id: 4,
            name: 'Churros',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: '/imagens/churros.jpeg'
        },
        {
            id: 5,
            name: 'Petit Gâteua',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: '/imagens/pt.jpeg'
        },

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

// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');

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
});

// Render gallery
function renderGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
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

// Render menu sections
function renderMenuSections() {
    Object.entries(menuData).forEach(([category, items]) => {
        const container = document.querySelector(`#${category} .menu-grid`) || 
                         document.querySelector(`#${category} .specials-grid`);
        
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
                </div>
            `;
            
            container.appendChild(card);
        });
    });
}