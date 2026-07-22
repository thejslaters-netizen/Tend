const zones = [
  {
    name: "Welcome & Nourishment",
    rooms: "Kitchen, living room, entry",
    theme: "This is the heart of my home. Here I nourish body, mind, and spirit.",
    tasks: [
      task("Reset the sink", "Kitchen", "Daily", "5 min", "gentle", "A clean sink makes tomorrow easier to begin.", "As I clear this sink, I create space for new blessings.", "This kitchen is ready to nourish again."),
      task("Clear and wipe the counters", "Kitchen", "Daily", "5 min", "gentle", "Clear surfaces reduce visual noise and create room to work.", "As I clear this space, I clear my mind.", "There is room here for nourishment and ease."),
      task("Sweep the kitchen floor", "Kitchen", "Several times weekly", "5 min", "gentle", "Removing crumbs and debris refreshes the room quickly.", "With every sweep, I welcome a fresh beginning.", "Peace begins from the ground beneath my feet."),
      task("Mop the kitchen floor", "Kitchen", "Weekly", "15 min", "steady", "A freshly cleaned floor renews the whole room.", "I renew this home one step at a time.", "This room feels grounded, clean, and cared for."),
      task("Reset pillows and blankets", "Living room", "Daily", "5 min", "gentle", "A welcoming room encourages rest and connection.", "I prepare this room to hold comfort and belonging.", "This space is ready to welcome the people who live here."),
      task("Vacuum the living room", "Living room", "Weekly", "15 min", "steady", "A refreshed floor makes the whole room feel lighter.", "Each small act contributes to a peaceful home.", "This room feels lighter and easier to enjoy."),
      task("Reset shoes and coats", "Entry", "Several times weekly", "5 min", "gentle", "An orderly entrance makes arriving and leaving easier.", "As I cross this threshold, I leave hurry behind.", "Peace begins at the doorway."),
      task("Wipe the front door", "Entry", "Monthly", "10 min", "steady", "The entrance reflects the care within.", "May everyone who enters here feel welcomed.", "This threshold feels fresh and inviting.")
    ]
  },
  {
    name: "Rest & Renewal",
    rooms: "Bedroom, main bathroom",
    theme: "These spaces restore my body, protect my health, and prepare me for rest.",
    tasks: [
      task("Make the bed", "Bedroom", "Daily", "3 min", "gentle", "A made bed creates an immediate point of order.", "I begin with one small act and let peace grow from here.", "Rest will be waiting for me tonight."),
      task("Put away visible clothing", "Bedroom", "As needed", "5 min", "gentle", "Clearing clothing reduces visual clutter.", "As I care for what clothes me, I care for myself.", "This room is becoming a place of rest."),
      task("Change the sheets", "Bedroom", "Weekly", "15 min", "steady", "Fresh bedding supports comfort and renewal.", "I prepare a peaceful place for my body to rest.", "May this bed hold comfort and restoration."),
      task("Clean the main bathroom", "Main bathroom", "Weekly", "20 min", "steady", "A clean bathroom supports health, dignity, and ease.", "Ordinary care protects the wellbeing of this home.", "This space is fresh, functional, and renewed."),
      task("Wipe the mirror and sink", "Main bathroom", "Several times weekly", "5 min", "gentle", "This small task brightens the entire room.", "I clear away residue and welcome clarity.", "This space reflects freshness and care.")
    ]
  },
  {
    name: "Presence & Strength",
    rooms: "Meditation room, gym",
    theme: "One room strengthens my spirit; the other strengthens my body.",
    tasks: [
      task("Refresh the meditation space", "Meditation room", "Weekly", "10 min", "gentle", "A cared-for sacred space makes stillness easier to enter.", "I make room for quiet, wisdom, and presence.", "May this room support clarity and peace."),
      task("Dust and vacuum", "Meditation room", "Monthly", "20 min", "steady", "Removing dust preserves the calm and beauty of the room.", "I uncover beauty through gentle care.", "This space feels clear and receptive."),
      task("Wipe gym equipment", "Gym", "Weekly", "10 min", "gentle", "Clean equipment supports consistency and health.", "I care for the tools that help me grow stronger.", "This space is ready to support my strength."),
      task("Vacuum the gym", "Gym", "Weekly", "15 min", "steady", "A refreshed floor makes movement more pleasant.", "I prepare this room for steady progress.", "May every effort here strengthen me with patience.")
    ]
  },
  {
    name: "Connection & Hospitality",
    rooms: "Family room, guest room",
    theme: "These rooms hold belonging, conversation, welcome, and rest.",
    tasks: [
      task("Reset the family room", "Family room", "Several times weekly", "10 min", "gentle", "Straightening the room creates space for connection.", "I make room for presence and belonging.", "This room is ready for rest and conversation."),
      task("Vacuum the family room", "Family room", "Weekly", "15 min", "steady", "A refreshed room feels lighter and more inviting.", "I care for the place where we gather.", "This room feels comfortable and welcoming."),
      task("Refresh the guest room", "Guest room", "Monthly", "20 min", "steady", "A prepared guest room expresses hospitality before it is needed.", "I prepare a place of welcome and ease.", "May every guest feel safe and cared for here."),
      task("Dust the guest room", "Guest room", "Monthly", "10 min", "gentle", "Removing dust keeps the room peaceful and ready.", "Gentle care keeps welcome alive.", "This room is calm, clean, and ready.")
    ]
  },
  {
    name: "Deeper Care",
    rooms: "Guest bathroom and monthly tasks",
    theme: "These tasks do not need constant attention. They simply wait for their turn.",
    tasks: [
      task("Clean the guest bathroom", "Guest bathroom", "Monthly", "20 min", "steady", "Monthly care keeps this room ready without adding weekly pressure.", "I care for this space in its proper season.", "This room is fresh and ready when needed."),
      task("Clean refrigerator shelves", "Kitchen", "Monthly", "20 min", "steady", "A clean refrigerator reduces waste and protects nourishment.", "I honor the abundance already present in my home.", "This space holds nourishment with freshness and care."),
      task("Dust ceiling fans and vents", "Whole home", "Monthly", "20 min", "abundant", "Removing hidden dust improves freshness throughout the home.", "I tend even the quiet corners with care.", "The air and spaces around me feel renewed."),
      task("Choose one drawer or shelf", "Whole home", "Monthly", "15 min", "steady", "One small decluttering project prevents overwhelm.", "I release what no longer serves this home.", "There is more room for what matters."),
      task("Wipe doors and switches", "Whole home", "Monthly", "20 min", "abundant", "Frequently touched surfaces benefit from periodic care.", "Care lives in the smallest details.", "This home feels quietly refreshed.")
    ]
  }
];

const rescueTasks = [
  task("Gather visible trash", "Restore My Home", "Now", "5 min", "gentle", "Removing trash creates an immediate sense of relief.", "I release what has finished its purpose.", "The room can breathe more easily now."),
  task("Collect dishes", "Restore My Home", "Now", "5 min", "gentle", "Gathering dishes restores order without requiring perfection.", "I bring scattered things back together.", "The home feels lighter already."),
  task("Start one load of laundry", "Restore My Home", "Now", "5 min", "gentle", "Beginning one cycle creates momentum.", "I begin what will support me tomorrow.", "This act of care is already in motion."),
  task("Clear one main surface", "Restore My Home", "Now", "5 min", "gentle", "One clear surface can change the feeling of a whole room.", "I do not need to clear everything to create peace.", "This small area of calm is enough for today."),
  task("Reset the room you need most", "Restore My Home", "Now", "10 min", "steady", "Restoring one important room gives you a place to recover.", "I begin where peace will help me most.", "I have created a place to rest and begin again.")
];

function task(name, room, frequency, time, energy, why, mantra, blessing) {
  return { id: `${room}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'), name, room, frequency, time, energy, why, mantra, blessing };
}

let state = JSON.parse(localStorage.getItem('tendState')) || { zoneIndex: 0, energy: 'steady', completed: {}, seed: 0 };
let visibleTasks = [];
let selectedTask = null;

const greeting = document.getElementById('greeting');
const zoneTitle = document.getElementById('zoneTitle');
const zoneTheme = document.getElementById('zoneTheme');
const taskList = document.getElementById('taskList');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const taskCountTitle = document.getElementById('taskCountTitle');

function init() {
  const hour = new Date().getHours();
  greeting.textContent = hour < 12 ? 'Good morning.' : hour < 18 ? 'Good afternoon.' : 'Good evening.';
  document.querySelectorAll('.energy-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.energy === state.energy);
    btn.addEventListener('click', () => {
      state.energy = btn.dataset.energy;
      document.querySelectorAll('.energy-btn').forEach(b => b.classList.toggle('active', b === btn));
      save();
      render();
    });
  });
  document.getElementById('nextZoneBtn').addEventListener('click', () => {
    state.zoneIndex = (state.zoneIndex + 1) % zones.length;
    state.seed++;
    save();
    render();
  });
  document.getElementById('refreshTasksBtn').addEventListener('click', () => {
    state.seed++;
    save();
    render();
  });
  renderZoneList();
  render();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');
}

function chooseTasks() {
  if (state.energy === 'rescue') return rescueTasks.slice(0, 5);
  const zone = zones[state.zoneIndex];
  const limits = { gentle: 3, steady: 5, abundant: 7 };
  const energyRank = { gentle: 1, steady: 2, abundant: 3 };
  const allowedRank = energyRank[state.energy];
  const eligible = zone.tasks.filter(t => energyRank[t.energy] <= allowedRank);
  const rotated = eligible.slice(state.seed % Math.max(eligible.length, 1)).concat(eligible.slice(0, state.seed % Math.max(eligible.length, 1)));
  return rotated.slice(0, limits[state.energy]);
}

function render() {
  const zone = state.energy === 'rescue' ? { name: 'Restore My Home', theme: 'One step at a time. No giant list. No shame.' } : zones[state.zoneIndex];
  zoneTitle.textContent = zone.name;
  zoneTheme.textContent = zone.theme;
  visibleTasks = chooseTasks();
  taskCountTitle.textContent = state.energy === 'rescue' ? 'Let the app guide you one step at a time.' : `${visibleTasks.length} gentle acts are enough.`;
  taskList.innerHTML = '';
  visibleTasks.forEach(t => {
    const completed = Boolean(state.completed[t.id]);
    const item = document.createElement('div');
    item.className = `task-item${completed ? ' completed' : ''}`;
    item.innerHTML = `
      <button class="check-btn" aria-label="Mark ${t.name} complete">${completed ? '✓' : ''}</button>
      <div><p class="task-name">${t.name}</p><p class="task-meta">${t.room} · ${t.time} · ${t.frequency}</p></div>
      <button class="info-btn" aria-label="Why this task matters">i</button>`;
    item.querySelector('.check-btn').addEventListener('click', () => toggleComplete(t.id));
    item.querySelector('.info-btn').addEventListener('click', () => openTask(t));
    taskList.appendChild(item);
  });
  updateProgress();
}

function toggleComplete(id) {
  state.completed[id] = !state.completed[id];
  save();
  render();
}

function updateProgress() {
  const done = visibleTasks.filter(t => state.completed[t.id]).length;
  const pct = visibleTasks.length ? Math.round(done / visibleTasks.length * 100) : 0;
  progressBar.style.width = `${pct}%`;
  if (done === 0) progressText.textContent = 'No pressure. Begin with one small thing.';
  else if (done < visibleTasks.length) progressText.textContent = `You have already created more peace. ${done} act${done === 1 ? '' : 's'} complete.`;
  else progressText.textContent = 'Enough for today. Pause and receive the peace you created.';
}

function openTask(t) {
  selectedTask = t;
  document.getElementById('dialogRoom').textContent = `${t.room} · ${t.time}`;
  document.getElementById('dialogTitle').textContent = t.name;
  document.getElementById('dialogWhy').textContent = t.why;
  document.getElementById('dialogMantra').textContent = `“${t.mantra}”`;
  document.getElementById('dialogBlessing').textContent = t.blessing;
  document.getElementById('completeFromDialog').textContent = state.completed[t.id] ? 'Mark incomplete' : 'Mark complete';
  document.getElementById('taskDialog').showModal();
}

document.getElementById('completeFromDialog').addEventListener('click', () => {
  if (selectedTask) toggleComplete(selectedTask.id);
});

function renderZoneList() {
  const zoneList = document.getElementById('zoneList');
  zoneList.innerHTML = zones.map((z, i) => `<div class="zone-chip"><strong>Zone ${i + 1}: ${z.name}</strong><span>${z.rooms}</span></div>`).join('');
}

function save() { localStorage.setItem('tendState', JSON.stringify(state)); }
init();
