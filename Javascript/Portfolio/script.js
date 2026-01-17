function addRecommendation() {
    const name = document.getElementById("recName").value;
    const text = document.getElementById("recText").value;

    if (name === "" || text === "") {
        alert("Please fill in both fields.");
        return;
    }

    const recList = document.getElementById("recList");

    const card = document.createElement("div");
    card.className = "rec-card";

    const h3 = document.createElement("h3");
    h3.innerText = name;

    const p = document.createElement("p");
    p.innerText = text;

    card.appendChild(h3);
    card.appendChild(p);

    recList.appendChild(card);

    alert("Recommendation added successfully! 🎉");

    document.getElementById("recName").value = "";
    document.getElementById("recText").value = "";
}
