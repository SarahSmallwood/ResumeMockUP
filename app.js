function showProfile(){
    let about = document.querySelector('.profileP');
    let showBio = about.style.display;
    let bioButton = document.querySelector('aboutMe')

    if(showBio === 'block'){
        about.style.display = 'none';
        bioButton.innerHTML = 'Show Bio';
    }
    else{
        about.style.display = 'block';
        bioButton.innerHTML = 'Hide Bio'
    }
}