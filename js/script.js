//portfolio navbar 
var navItems = document.querySelectorAll('.portfolioNavitem');
var itemListing = document.querySelector('.item_listing');
var brand = document.querySelectorAll('.brand');
var design = document.querySelectorAll('.design');
var photos = document.querySelectorAll('.photos');


navItems.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.id == 'all') {
            var itemListingRow = itemListing.firstElementChild;
            itemListingRow.innerHTML = '';
            itemListing.innerHTML = '';
            itemListing.appendChild(itemListingRow);
            brand.forEach((element1) => {
                itemListingRow.appendChild(element1);
            })
           var row=document.createElement('div');
           row.className='row';
           itemListing.appendChild(row);
            design.forEach((element1) => {
                row.appendChild(element1);
            })
            photos.forEach((element1) => {
                row.appendChild(element1);
                // itemListingRow.appendChild(element1);
            })
        }
        else if (element.id == 'brand') {
            var itemListingRow = itemListing.firstElementChild;
            itemListingRow.innerHTML = '';
            
            itemListing.innerHTML = '';
            itemListing.appendChild(itemListingRow);
            brand.forEach((element1) => {
                itemListingRow.appendChild(element1);
            })
        }
        else if (element.id == 'design') {
            var itemListingRow = itemListing.firstElementChild;
            itemListingRow.innerHTML = '';
            itemListing.innerHTML = '';
            itemListing.appendChild(itemListingRow);
            design.forEach((element1) => {
                itemListingRow.appendChild(element1);
            })
        }
        else if (element.id == 'photos') {
            console.log(itemListing.firstElementChild);
            var itemListingRow = itemListing.firstElementChild;
            itemListingRow.innerHTML = '';
            itemListing.innerHTML = '';
            itemListing.appendChild(itemListingRow);
            photos.forEach((element1) => {
                itemListingRow.appendChild(element1);
            })
        }
    })
})


//testimonial slider
var testimonialSlider=document.querySelector('.slider');
var Control1=document.querySelector('.control-1');
var Control2=document.querySelector('.control-2');
var controlArr=document.querySelectorAll('.control');

Control1.style.backgroundColor='#d1cfcf';
controlArr.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.classList.contains('control-1')){
            testimonialSlider.style.transform='translateX(25%)';
            testimonialSlider.style.transition='all 0.5s ease-in-out';
            Control1.style.backgroundColor='#d1cfcf';
            Control2.style.backgroundColor='#e4e4e4';
        }
        else if(element.classList.contains('control-2')){
            testimonialSlider.style.transform='translateX(-25%)';
            testimonialSlider.style.transition='all 0.5s ease-in-out';
            Control1.style.backgroundColor='#e4e4e4';
            Control2.style.backgroundColor='#d1cfcf';
        }
    })
})