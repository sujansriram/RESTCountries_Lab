

const fetchCountries = async () => {
    try{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data[0]);

        const countriesList = document.querySelector("ul");

        data.forEach(element => {
            const country = document.createElement("li");
            country.innerText = element.name.common + element.flag;
            countriesList.appendChild(country);
        });

        document.querySelector("button").addEventListener('click', event => {
            countriesList.innerHTML = "";
            document.querySelector("p").innerText = "Awaiting API...";
            setTimeout(() => filterCountries(), 1500);
        });

        const filterCountries = function(){
            const input = document.querySelector("input").value.toLowerCase();
            for (i = 0; i < data.length; i++){
                if (data[i].name.common.toLowerCase().includes(input)){
                    const country = document.createElement("li");
                    country.innerText = data[i].name.common + data[i].flag;
                    countriesList.appendChild(country);
                }
            }
            document.querySelector("p").innerText = "";
        }
    } catch(error){
        console.error(error);
        document.querySelector("p").innerText = "Error with the API";
    }

}

const setup = async () => {
    const countries = await fetchCountries();
}

window.addEventListener('load', setup);

// const logInput = function(){
//     const input = document.querySelector("input").value;
//     console.log(input);
// }


