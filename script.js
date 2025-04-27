const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "images/icon-visual.svg"
  }
]

const table = document.getElementById('scoreTable');

data.forEach((item, index) => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.className = `td${index + 1}`;

  td.innerHTML = `
      <span>
        <img src="${item.icon}" alt="icon-${item.category.toLowerCase()}">
        ${item.category}
      </span>
      <span class="result">
        <strong>${item.score}</strong> / 100
      </span>
    `;

  tr.appendChild(td);
  table.appendChild(tr);
});