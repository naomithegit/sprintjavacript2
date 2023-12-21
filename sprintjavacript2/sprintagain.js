document.addEventListener('DOMContentLoaded', function () {
    fetchAndDisplayData();
});
//start here and probably delete
//
//function formatPerson(person) {
    //return `<p>${person.name}, ${person.age} years old, from ${person.city}</p>`;
  //}

  // Function to emit (display) formatted records
  //function displayRecords(data) {
    //const container = document.body; // Change this if you have a different container
    //data.forEach(person => {
      //const formattedInfo = formatPerson(person);
      //console.log(formattedInfo); // Log to console
      //container.innerHTML += formattedInfo; // Display in HTML
    //});
  //}
  // and finish here

function fetchAndDisplayData() {
    fetch('sprintdata.json')
        .then(response => response.json())
        .then(data => {
            console.log('Data from JSON file:', data);
            displayData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    const outputDiv = document.getElementById('output');
    
    data.forEach(item => {
        const itemParagraph = document.createElement('p');
        itemParagraph.textContent = `Name: ${item.name},  Age: ${item.age},  City: ${item.city},  Can ${item.team} Win Super Bowl: ${item.believer}`;
        outputDiv.appendChild(itemParagraph);
    });
}

// also should probably be deleted
//function describeData(data) {
    // Function 1: Total number of records
    //return `Total Records: ${data.length}`;
//}
        //console.log("total records: ", data.length)
        // and end here. 

        function displayData(data) {
            const outputDiv = document.getElementById('output');
            
            data.forEach(item => {
                const itemParagraph = document.createElement('p');
                itemParagraph.textContent = `Hi. My name is ${item.name} and I'm ${item.age} years old. I hail from ${item.city}. I am a diehard football fan. Though I'd never dare to doubt how awesome my team is  I still wonder if we, the ${item.team}, can go all the way and  win the Super Bowl this year? So, here it is, my honest opinion...drum roll please...Can we win? The answer is:  ${item.believer}`;
                outputDiv.appendChild(itemParagraph);
            });
        }

        
        
        ///function displayDataLength(data) {
            //const lengthParagraph = document.createElement('p');
            //lengthParagraph.textContent = `Data Length: ${data.length}`;
            //document.getElementById('output').appendChild(lengthParagraph);
           // data.forEach(item => {
                //const itemParagraph = document.createElement('p');
                //itemParagraph.textContent = `Hi. My name is ${item.name} and I'm ${item.age},  City: ${item.city}... Question:  Can the ${item.team} Win the Super Bowl this year? ${item.believer}`;
                //outputDiv.appendChild(itemParagraph);
           // });
        //}
        
            // Log to console
            //console.log("Data Length:", data.length);
        

    

        
        
        console.log("HELLO!!!!! It's Vegas or bust, baby!!!! ")
        console.log("Taylor has her money on the Chiefs.");
        console.log("time is running out, folks.");

       


    const firstName = "Newman";
    if(firstName == "Newman") {
     console.log(`Yes, the person is ${firstName}.`)
    }else
     console.log(`Their first name is unknown.`)


     const bestTean = [0];
     if(bestTean === "Patriots") {
      console.log(`Yes, the best team  is the ${[0]}.`)
     }else
      console.log(`If not the Patriots, then god knows who is gonna win it all.`);

    let variable = true;
    console.log(typeof variable)

     
     const loyalFan = 78;
    if(loyalFan >= 50){

    console.log(`${loyalFan} years is a long time to be a loyal fan.`)
    }else
    console.log(`You might be young but you missed watching the true legends of the game! `)
              



    
    

      