document.addEventListener("DOMContentLoaded", function() {
    function getRandomCharacter() {
        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }

    function displayCharacter(char) {
        document.getElementById("charName").textContent = char.name;
        document.getElementById("backstory").textContent = char.backstory;
        
        const seed = encodeURIComponent(char.name);
        document.getElementById("avatar").innerHTML = 
            `<img src="https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}" alt="أفاتار">`;
        
        document.getElementById("characterCard").classList.remove("hidden");
    }

    document.getElementById("generateBtn").addEventListener("click", function() {
        const char = getRandomCharacter();
        displayCharacter(char);
    });
});
