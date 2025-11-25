//transactions ----------------------------------------------------------------------------------
let budgets = {};

let transactions = [];

let categories = ["🎟️ ENTERTAINMENT", "🚌 TRANSPORTATION ", "🔑 RENT", "💼 WORK", "🥑 GROCERIES", "🧥 CLOTHING", "🍣 RESTAURANTS", "🚙 CAR", "💳 SUBSCRIPTIONS", "🤷🏻‍♂️ OTHER"];

function initializeCategories(){
    const categorySelect = document.getElementById("categoriesInput");

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function toggleForm() {
    const form = document.getElementById('addForm');
    form.classList.toggle('show');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    } else {
        const month = date.toLocaleString('en', { month: 'short' });
        const day = date.getDate();
        return `${month} ${day}`;
    }
}


function addTransaction() {
    const date = document.getElementById('dateInput').value;
    const name = document.getElementById('nameInput').value;
    const category = document.getElementById('categoriesInput').value;
    const price = parseFloat(document.getElementById('priceInput').value);

    if (!date || !name || !price) {
        alert('Please fill all fields');
        return;
    }

    transactions.push({date, name, category, price});

    // Clear form fields
    document.getElementById('dateInput').value = "";
    document.getElementById('nameInput').value = "";
    document.getElementById('categoriesInput').value = "";
    document.getElementById('priceInput').value = "";

    //--------------------------------------------------------------------------
    // LOCAL STORAGE - Uložení dat
    saveTransactions();
    //--------------------------------------------------------------------------

    toggleForm();
    renderTransactions();
    renderCategories();
}

//-----------render transactions-----------
function renderTransactions(){
    const list = document.getElementById('transactionsList');
    list.innerHTML = '';

    transactions.forEach ( i => {
        const item = document.createElement("div");
        item.className = "transaction-item";

        const priceClass = i.price > 0 ? "price-positive" : "price-negative";
        const priceSign = i.price > 0 ? "+ " : " ";

        item.innerHTML = `
            <div class="transaction-left">
                <div class="transaction-date">${formatDate((i.date))}</div>
                <div class="transaction-name">${i.name}</div>
            </div>

            <div class="transaction-right">
                <div class="transaction-category">${i.category}</div>
                <div class="transaction-price ${priceClass}">${priceSign} ${i.price} Kč</div>
                <div class="transaction-delete" style="cursor: pointer;" onclick="deleteTransaction(${transactions.indexOf(i)})">🗑️</div>
            </div>
        
        `;

        list.appendChild(item);
    });

    updateTotalSpends();
} 

//total spends----------------------------------------------------------------------------------
function calculateTotalSpends() {
    
    let sum = 0;

    transactions.forEach( i => {
        sum += parseFloat(i.price);
    });

    return sum;
    
}

function updateTotalSpends() {
    const totalSpends = document.getElementById("totalSpends");

    if(totalSpends) {
        const total = calculateTotalSpends();
        totalSpends.innerHTML = `${total.toLocaleString('cs-CZ')} Kč<p class='totalSpendsSubtext'>Total spends</p>`;
    }
}

//categories ----------------------------------------------------------------------------------
function calculateCategoryTotals() {

    const totals = {
        "🎟️ ENTERTAINMENT": 0,
        "🚌 TRANSPORTATION ": 0,
        "🔑 RENT": 0,
        "💼 WORK": 0,
        "🥑 GROCERIES": 0,
        "🧥 CLOTHING": 0,
        "🍣 RESTAURANTS": 0,
        "🚙 CAR": 0,
        "💳 SUBSCRIPTIONS": 0,
        "🤷🏻‍♂️ OTHER": 0
    }

    transactions.forEach(i => {
        totals[i.category] += parseFloat(i.price);
    });

    return totals;
}

function renderCategories() {
    const categories = document.getElementById("category-content");
    categories.innerHTML = "";

    const totals = calculateCategoryTotals();//není to globální pole, musím ho zavolat takhle

    for ( let category in totals) {

        if (category === "💼 WORK") continue;
        if (category === "🔑 RENT") continue;

        const categoryRow = document.createElement("div");
        categoryRow.classList = "category-row";


        categoryRow.innerHTML = `
            
            <div class="category-name">
                ${category}
            </div>

            <div class="category-info">
                <p class="spent">${totals[category].toLocaleString('cs-CZ')} Kč</p>

                <!-- Progress bar -->
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>

                <input 
                    type="number"
                    class="budget" 
                    placeholder="Enter your budget"
                    value="${budgets[category] || 0}"
                    onchange="saveBudget('${category}', this.value )"
                />
                <p>Kč</p>
            </div>
            
        `;

        categories.appendChild(categoryRow);

        // --- progress bar ---
        const fillEl = categoryRow.querySelector('.progress-fill');
        const budgetVal = parseFloat(budgets[category]) || 0;
        const spentVal = parseFloat(totals[category]) || 0;
        const spentAbs = Math.abs(spentVal);
        let percent = budgetVal > 0 ? (spentAbs / budgetVal) * 100 : 0;
        percent = Math.max(0, Math.min(percent, 100));
        if (fillEl) {
            fillEl.style.width = percent + '%';
            fillEl.classList.remove('green', 'orange', 'red');
            if (percent <= 25) {
                fillEl.classList.add('green');
            } else if (percent <= 75) {
                fillEl.classList.add('orange');
            } else {
                fillEl.classList.add('red');
            }
        }

    }  

};

function saveBudget(category, value){
    budgets[category] = parseFloat(value);
    saveBudgets();
    renderCategories();
}

function saveBudgets(){
    localStorage.setItem('budgets', JSON.stringify(budgets));
}

function loadBudgets(){
    const stored = localStorage.getItem('budgets');
    if (stored) {
        try {
            budgets = JSON.parse(stored);
        } catch(e) {
            budgets = {};
        }
    }
}

//--------------------------------------------------------------------------
// LOCAL STORAGE FUNCTIONS - Začátek
//--------------------------------------------------------------------------

function loadTransactions() {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
        transactions = JSON.parse(storedTransactions);
        renderTransactions();
        renderCategories();
    }
}

function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
//--------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    initializeCategories();


    //--------------------------------------------------------------------------
    // LOCAL STORAGE - Načtení dat při startu
    loadBudgets();
    loadTransactions();
    updateTotalSpends();
    renderCategories();
    //--------------------------------------------------------------------------
});

// ---------- Tmavé pozadí ----------
(function(){
    const btn = document.getElementById('toggleTheme');
    const body = document.body;
    const saved = localStorage.getItem('theme') || `light`;

    if (saved === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }

    if (!btn) return;
    btn.textContent = body.classList.contains('dark') ? 'Dark Theme' : 'Light Theme';
    btn.addEventListener('click', () => {
        body.classList.toggle('dark');
        const mode = body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
        btn.textContent = mode === 'dark' ? 'Dark Theme' : 'Light Theme';
    });
})();

// ---------- Vymazání paměti ----------
function resetStorage() {
    localStorage.clear();
    alert("Local Storage Cleared.");
}

function deleteTransaction(index) {
    if (typeof index !== 'number') return;
    if (index < 0 || index >= transactions.length) return;

    transactions.splice(index, 1);
    saveTransactions();
    renderTransactions();
    renderCategories();
    updateTotalSpends();
}

function deleteLocalStorage() {
    // Smaž všechna data z localStorage
    localStorage.clear();
    
    // Resetuj pole a objekty v paměti
    transactions = [];
    budgets = {};
    
    // Překresli UI
    renderTransactions();
    renderCategories();
    updateTotalSpends();
    
    alert("Všechna data byla smazána");
}