const categoryBtn = $('button');

const renderProducts = async (event) => { 
    event.preventDefault();
    category = event.target.textContent.toLowerCase();
    document.location.replace(`/${category}`)
};



categoryBtn.click(renderProducts)
