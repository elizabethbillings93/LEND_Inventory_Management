const categoryBtn = $('button');
const prodCount = $('product-count')

const renderProducts = async (event) => { 
    event.preventDefault();
    category = event.target.textContent.toLowerCase();
    document.location.replace(`/${category}`)
};


// Target the text content of product-count classes.
const updateCounts = async (event) => {
    event.preventDefault();
    var keypressed = event.keyCode
    console.log(keypressed)
}

categoryBtn.click(renderProducts)

// Run updateCounts on key press. 
prodCount.onkeypress(updateCounts)

