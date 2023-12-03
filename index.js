// Sample data for initial parties
const initialParties = [
    { name: "Party 1", date: "2023-12-10", time: "20:00", location: "Venue 1", description: "Description 1" },
    { name: "Party 2", date: "2023-12-15", time: "19:30", location: "Venue 2", description: "Description 2" }
  ];
  
  // Initialize party list with sample data
  const partyList = document.getElementById("party-list");
  
  function renderPartyList() {
    partyList.innerHTML = "";
    initialParties.forEach((party, index) => {
      const partyItem = document.createElement("div");
      partyItem.innerHTML = `
        <p>${party.name} - ${party.date}, ${party.time} - ${party.location}</p>
        <p>${party.description}</p>
        <button onclick="deleteParty(${index})">Delete</button>
      `;
      partyList.appendChild(partyItem);
    });
  }
  
  renderPartyList();
  
  function addParty() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
  
    const newParty = { name, date, time, location, description };
    initialParties.push(newParty);
  
    renderPartyList();
  
    // Clear the form after adding the party
    document.getElementById("party-form").reset();
  }
  
  function deleteParty(index) {
    initialParties.splice(index, 1);
    renderPartyList();
  }

  function addParty(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
  
    const newParty = { name, date, time, location, description };
    initialParties.push(newParty);
  
    renderPartyList();
  
    // Clear the form after adding the party
    document.getElementById("party-form").reset();
  }