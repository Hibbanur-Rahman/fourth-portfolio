//portfolio navbar 
var navItems=document.querySelectorAll('.portfolioNavitem');
var itemListing=document.querySelector('.item_listing');
var brand=document.querySelectorAll('.brand');
var design=document.querySelectorAll('.design');
var photos=document.querySelectorAll('.photos');

navItems.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.id=='all'){
            console.log(itemListing.firstElementChild);
            var itemListingRow=itemListing.firstElementChild;
            console.log(itemListingRow);
            itemListingRow.innerHTML='';
            itemListing.innerHTML='';
            itemListing.appendChild(itemListingRow);
            brand.forEach((element1)=>{
                itemListingRow.appendChild(element1);
            })
            design.forEach((element1)=>{
                itemListingRow.appendChild(element1);
            })
            photos.forEach((element1)=>{
                itemListingRow.appendChild(element1);
            })
        }
        else if(element.id=='brand'){
            console.log(itemListing.firstElementChild);
            var itemListingRow=itemListing.firstElementChild;
            console.log(itemListingRow);
            itemListingRow.innerHTML='';
            itemListing.innerHTML='';
            itemListing.appendChild(itemListingRow);
            brand.forEach((element1)=>{
                itemListingRow.appendChild(element1);
            })
        }
        else if(element.id=='design'){
            console.log(itemListing.firstElementChild);
            var itemListingRow=itemListing.firstElementChild;
            console.log(itemListingRow);
            itemListingRow.innerHTML='';
            itemListing.innerHTML='';
            itemListing.appendChild(itemListingRow);
            design.forEach((element1)=>{
                itemListingRow.appendChild(element1);
            })
        }
        else if(element.id=='photos'){
            console.log(itemListing.firstElementChild);
            var itemListingRow=itemListing.firstElementChild;
            console.log(itemListingRow);
            itemListingRow.innerHTML='';
            itemListing.innerHTML='';
            itemListing.appendChild(itemListingRow);
            photos.forEach((element1)=>{
                itemListingRow.appendChild(element1);
            })
        }
    })
})
