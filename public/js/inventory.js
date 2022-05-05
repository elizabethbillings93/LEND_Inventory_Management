const categoryBtn = $('button');

const renderProducts = (event) => { 
    category = event.target.textContent;

    if(category == "Dairy"){
        console.log('red')
    }
}



categoryBtn.click(renderProducts)