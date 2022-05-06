const categoryBtn = $('button');
const prodCount = $('product-count')

const renderProducts = async (event) => { 
    event.preventDefault();
    category = event.target.textContent.toLowerCase();
    document.location.replace(`/${category}`)
};

categoryBtn.click(renderProducts)


console.log('red')

