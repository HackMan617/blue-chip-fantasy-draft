/* =========================================================
   Blue Chip Fantasy Draft
   Player pool: [name, position, tier]  tier 1 = best
   ========================================================= */

const NFL = {
  ARI: { name: "Arizona Cardinals", players: [
    ["Kyler Murray","QB",2],["James Conner","RB",2],["Trey Benson","RB",3],
    ["Marvin Harrison Jr.","WR",2],["Michael Wilson","WR",3],["Greg Dortch","WR",3],
    ["Trey McBride","TE",1],["Chad Ryland","K",3]]},
  ATL: { name: "Atlanta Falcons", players: [
    ["Michael Penix Jr.","QB",3],["Bijan Robinson","RB",1],["Tyler Allgeier","RB",3],
    ["Drake London","WR",1],["Darnell Mooney","WR",3],["Ray-Ray McCloud","WR",3],
    ["Kyle Pitts","TE",2],["Younghoe Koo","K",2]]},
  BAL: { name: "Baltimore Ravens", players: [
    ["Lamar Jackson","QB",1],["Derrick Henry","RB",1],["Justice Hill","RB",3],
    ["Zay Flowers","WR",2],["Rashod Bateman","WR",3],["DeAndre Hopkins","WR",3],
    ["Mark Andrews","TE",2],["Isaiah Likely","TE",3],["Tyler Loop","K",3]]},
  BUF: { name: "Buffalo Bills", players: [
    ["Josh Allen","QB",1],["James Cook","RB",1],["Ray Davis","RB",3],
    ["Khalil Shakir","WR",2],["Keon Coleman","WR",3],["Josh Palmer","WR",3],
    ["Dalton Kincaid","TE",2],["Dawson Knox","TE",3],["Matt Prater","K",3]]},
  CAR: { name: "Carolina Panthers", players: [
    ["Bryce Young","QB",3],["Chuba Hubbard","RB",2],["Rico Dowdle","RB",3],
    ["Tetairoa McMillan","WR",2],["Xavier Legette","WR",3],["Jalen Coker","WR",3],
    ["Ja'Tavion Sanders","TE",3],["Ryan Fitzgerald","K",3]]},
  CHI: { name: "Chicago Bears", players: [
    ["Caleb Williams","QB",2],["D'Andre Swift","RB",2],["Roschon Johnson","RB",3],
    ["DJ Moore","WR",2],["Rome Odunze","WR",2],["Luther Burden III","WR",3],
    ["Colston Loveland","TE",3],["Cole Kmet","TE",3],["Cairo Santos","K",2]]},
  CIN: { name: "Cincinnati Bengals", players: [
    ["Joe Burrow","QB",1],["Chase Brown","RB",2],["Samaje Perine","RB",3],
    ["Ja'Marr Chase","WR",1],["Tee Higgins","WR",1],["Andrei Iosivas","WR",3],
    ["Mike Gesicki","TE",3],["Evan McPherson","K",1]]},
  CLE: { name: "Cleveland Browns", players: [
    ["Dillon Gabriel","QB",3],["Quinshon Judkins","RB",2],["Jerome Ford","RB",3],
    ["Jerry Jeudy","WR",2],["Cedric Tillman","WR",3],["Isaiah Bond","WR",3],
    ["David Njoku","TE",2],["Andre Szmyt","K",3]]},
  DAL: { name: "Dallas Cowboys", players: [
    ["Dak Prescott","QB",2],["Javonte Williams","RB",2],["Jaydon Blue","RB",3],
    ["CeeDee Lamb","WR",1],["George Pickens","WR",2],["Jalen Tolbert","WR",3],
    ["Jake Ferguson","TE",2],["Brandon Aubrey","K",1]]},
  DEN: { name: "Denver Broncos", players: [
    ["Bo Nix","QB",2],["J.K. Dobbins","RB",2],["RJ Harvey","RB",3],
    ["Courtland Sutton","WR",2],["Marvin Mims Jr.","WR",3],["Troy Franklin","WR",3],
    ["Evan Engram","TE",3],["Wil Lutz","K",2]]},
  DET: { name: "Detroit Lions", players: [
    ["Jared Goff","QB",2],["Jahmyr Gibbs","RB",1],["David Montgomery","RB",2],
    ["Amon-Ra St. Brown","WR",1],["Jameson Williams","WR",3],["Isaac TeSlaa","WR",3],
    ["Sam LaPorta","TE",2],["Jake Bates","K",2]]},
  GB:  { name: "Green Bay Packers", players: [
    ["Jordan Love","QB",2],["Josh Jacobs","RB",1],["Emanuel Wilson","RB",3],
    ["Jayden Reed","WR",3],["Matthew Golden","WR",3],["Romeo Doubs","WR",3],
    ["Tucker Kraft","TE",2],["Brandon McManus","K",2]]},
  HOU: { name: "Houston Texans", players: [
    ["C.J. Stroud","QB",2],["Joe Mixon","RB",2],["Nick Chubb","RB",3],
    ["Nico Collins","WR",1],["Christian Kirk","WR",3],["Jayden Higgins","WR",3],
    ["Dalton Schultz","TE",3],["Ka'imi Fairbairn","K",2]]},
  IND: { name: "Indianapolis Colts", players: [
    ["Daniel Jones","QB",3],["Jonathan Taylor","RB",1],["Tyler Goodson","RB",3],
    ["Michael Pittman Jr.","WR",2],["Josh Downs","WR",3],["Alec Pierce","WR",3],
    ["Tyler Warren","TE",3],["Spencer Shrader","K",3]]},
  JAX: { name: "Jacksonville Jaguars", players: [
    ["Trevor Lawrence","QB",2],["Travis Etienne Jr.","RB",2],["Tank Bigsby","RB",3],
    ["Brian Thomas Jr.","WR",1],["Travis Hunter","WR",2],["Dyami Brown","WR",3],
    ["Brenton Strange","TE",3],["Cam Little","K",2]]},
  KC:  { name: "Kansas City Chiefs", players: [
    ["Patrick Mahomes","QB",1],["Isiah Pacheco","RB",2],["Kareem Hunt","RB",3],
    ["Rashee Rice","WR",2],["Xavier Worthy","WR",2],["Hollywood Brown","WR",3],
    ["Travis Kelce","TE",2],["Harrison Butker","K",1]]},
  LV:  { name: "Las Vegas Raiders", players: [
    ["Geno Smith","QB",3],["Ashton Jeanty","RB",1],["Raheem Mostert","RB",3],
    ["Jakobi Meyers","WR",3],["Tre Tucker","WR",3],["Dont'e Thornton Jr.","WR",3],
    ["Brock Bowers","TE",1],["Daniel Carlson","K",2]]},
  LAC: { name: "Los Angeles Chargers", players: [
    ["Justin Herbert","QB",2],["Omarion Hampton","RB",2],["Najee Harris","RB",3],
    ["Ladd McConkey","WR",2],["Quentin Johnston","WR",3],["Keenan Allen","WR",3],
    ["Will Dissly","TE",3],["Cameron Dicker","K",1]]},
  LAR: { name: "Los Angeles Rams", players: [
    ["Matthew Stafford","QB",2],["Kyren Williams","RB",1],["Blake Corum","RB",3],
    ["Puka Nacua","WR",1],["Davante Adams","WR",2],["Tutu Atwell","WR",3],
    ["Tyler Higbee","TE",3],["Joshua Karty","K",3]]},
  MIA: { name: "Miami Dolphins", players: [
    ["Tua Tagovailoa","QB",2],["De'Von Achane","RB",1],["Jaylen Wright","RB",3],
    ["Tyreek Hill","WR",2],["Jaylen Waddle","WR",2],["Malik Washington","WR",3],
    ["Darren Waller","TE",3],["Riley Patterson","K",3]]},
  MIN: { name: "Minnesota Vikings", players: [
    ["J.J. McCarthy","QB",3],["Aaron Jones","RB",2],["Jordan Mason","RB",3],
    ["Justin Jefferson","WR",1],["Jordan Addison","WR",2],["Jalen Nailor","WR",3],
    ["T.J. Hockenson","TE",2],["Will Reichard","K",2]]},
  NE:  { name: "New England Patriots", players: [
    ["Drake Maye","QB",2],["Rhamondre Stevenson","RB",2],["TreVeyon Henderson","RB",3],
    ["Stefon Diggs","WR",2],["DeMario Douglas","WR",3],["Kayshon Boutte","WR",3],
    ["Hunter Henry","TE",3],["Andres Borregales","K",3]]},
  NO:  { name: "New Orleans Saints", players: [
    ["Spencer Rattler","QB",3],["Alvin Kamara","RB",2],["Kendre Miller","RB",3],
    ["Chris Olave","WR",2],["Rashid Shaheed","WR",3],["Devaughn Vele","WR",3],
    ["Juwan Johnson","TE",3],["Blake Grupe","K",3]]},
  NYG: { name: "New York Giants", players: [
    ["Jaxson Dart","QB",3],["Cam Skattebo","RB",3],["Tyrone Tracy Jr.","RB",3],
    ["Malik Nabers","WR",1],["Wan'Dale Robinson","WR",3],["Darius Slayton","WR",3],
    ["Theo Johnson","TE",3],["Graham Gano","K",3]]},
  NYJ: { name: "New York Jets", players: [
    ["Justin Fields","QB",3],["Breece Hall","RB",2],["Braelon Allen","RB",3],
    ["Garrett Wilson","WR",1],["Josh Reynolds","WR",3],["Allen Lazard","WR",3],
    ["Mason Taylor","TE",3],["Nick Folk","K",3]]},
  PHI: { name: "Philadelphia Eagles", players: [
    ["Jalen Hurts","QB",1],["Saquon Barkley","RB",1],["Will Shipley","RB",3],
    ["A.J. Brown","WR",1],["DeVonta Smith","WR",2],["Jahan Dotson","WR",3],
    ["Dallas Goedert","TE",3],["Jake Elliott","K",2]]},
  PIT: { name: "Pittsburgh Steelers", players: [
    ["Aaron Rodgers","QB",3],["Jaylen Warren","RB",2],["Kaleb Johnson","RB",3],
    ["DK Metcalf","WR",2],["Calvin Austin III","WR",3],["Roman Wilson","WR",3],
    ["Pat Freiermuth","TE",3],["Chris Boswell","K",1]]},
  SF:  { name: "San Francisco 49ers", players: [
    ["Brock Purdy","QB",2],["Christian McCaffrey","RB",1],["Isaac Guerendo","RB",3],
    ["Ricky Pearsall","WR",3],["Jauan Jennings","WR",3],["Demarcus Robinson","WR",3],
    ["George Kittle","TE",1],["Jake Moody","K",3]]},
  SEA: { name: "Seattle Seahawks", players: [
    ["Sam Darnold","QB",3],["Kenneth Walker III","RB",2],["Zach Charbonnet","RB",3],
    ["Jaxon Smith-Njigba","WR",1],["Cooper Kupp","WR",3],["Marquez Valdes-Scantling","WR",3],
    ["AJ Barner","TE",3],["Jason Myers","K",2]]},
  TB:  { name: "Tampa Bay Buccaneers", players: [
    ["Baker Mayfield","QB",1],["Bucky Irving","RB",1],["Rachaad White","RB",3],
    ["Mike Evans","WR",2],["Chris Godwin","WR",2],["Emeka Egbuka","WR",3],
    ["Cade Otton","TE",3],["Chase McLaughlin","K",1]]},
  TEN: { name: "Tennessee Titans", players: [
    ["Cam Ward","QB",3],["Tony Pollard","RB",2],["Tyjae Spears","RB",3],
    ["Calvin Ridley","WR",2],["Van Jefferson","WR",3],["Elic Ayomanor","WR",3],
    ["Chig Okonkwo","TE",3],["Joey Slye","K",3]]},
  WAS: { name: "Washington Commanders", players: [
    ["Jayden Daniels","QB",1],["Jacory Croskey-Merritt","RB",3],["Austin Ekeler","RB",3],
    ["Terry McLaurin","WR",1],["Deebo Samuel","WR",2],["Luke McCaffrey","WR",3],
    ["Zach Ertz","TE",3],["Matt Gay","K",2]]}
};

/* =========================================================
   Player images
   ---------------------------------------------------------
   Every player shows his team's real logo (cropped from
   images/logos/<ABBR>.png). To use a real player photo
   instead, add an entry here:

     "Josh Allen": "https://your-host.com/allen.jpg"

   Only use images you have the rights to host.
   ========================================================= */
const PHOTOS = {
  // "Patrick Mahomes": "images/mahomes.jpg",
};

/* team abbreviation -> logo file. Falls back to a generated
   crest (see crest() below) if a logo fails to load. */
const LOGOS = Object.fromEntries(
  Object.keys(NFL).map(abbr => [abbr, `images/logos/${abbr}.png`])
);

/* [primary, secondary] per team, used for the crest avatars. */
const COLORS = {
  ARI:["#97233F","#000000"], ATL:["#A71930","#000000"], BAL:["#241773","#9E7C0C"],
  BUF:["#00338D","#C60C30"], CAR:["#0085CA","#101820"], CHI:["#0B162A","#C83803"],
  CIN:["#FB4F14","#000000"], CLE:["#311D00","#FF3C00"], DAL:["#041E42","#869397"],
  DEN:["#FB4F14","#002244"], DET:["#0076B6","#B0B7BC"], GB: ["#203731","#FFB612"],
  HOU:["#03202F","#A71930"], IND:["#002C5F","#A2AAAD"], JAX:["#006778","#D7A22A"],
  KC: ["#E31837","#FFB81C"], LV: ["#000000","#A5ACAF"], LAC:["#0080C6","#FFC20E"],
  LAR:["#003594","#FFD100"], MIA:["#008E97","#FC4C02"], MIN:["#4F2683","#FFC62F"],
  NE: ["#002244","#C60C30"], NO: ["#101820","#D3BC8D"], NYG:["#0B2265","#A71930"],
  NYJ:["#125740","#FFFFFF"], PHI:["#004C54","#A5ACAF"], PIT:["#101820","#FFB612"],
  SF: ["#AA0000","#B3995D"], SEA:["#002244","#69BE28"], TB: ["#D50A0A","#34302B"],
  TEN:["#0C2340","#4B92DB"], WAS:["#5A1414","#FFB612"]
};

/* First letter of first and last name, e.g. "Josh Allen" -> "JA" */
function initials(name){
  const parts = name.replace(/[^A-Za-z .'-]/g,"").split(" ").filter(Boolean);
  const first = parts[0] ? parts[0][0] : "?";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/* A crest: team-colored shield, initials, position stripe. Returned as a
   data URI so there are no extra files and no network requests. */
function crest(player){
  const [c1, c2] = COLORS[player.team] || ["#1b56d3","#4fc3ff"];
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
      `<path d="M4 4h56v34c0 12-13 19-28 22C17 57 4 50 4 38Z" fill="${c1}"/>` +
      `<path d="M4 44c8 6 18 9 28 12 10-3 20-6 28-12v-6c-8 6-18 9-28 12-10-3-20-6-28-12Z" fill="${c2}" opacity="0.9"/>` +
      `<text x="32" y="30" text-anchor="middle" font-family="Barlow Condensed, Arial Narrow, sans-serif"` +
      ` font-size="26" font-weight="700" fill="#ffffff">${initials(player.name)}</text>` +
      `<text x="32" y="55" text-anchor="middle" font-family="Barlow Condensed, Arial Narrow, sans-serif"` +
      ` font-size="11" font-weight="700" fill="#ffffff" opacity="0.85">${player.pos}</text>` +
    `</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* Real photo when one is registered, else the team logo, else a generated
   crest. The onerror fallback means a broken photo/logo URL quietly
   reverts to the crest. */
function faceHTML(player, cls){
  const crestSrc = crest(player);
  const photo = PHOTOS[player.name];
  const logo = LOGOS[player.team];
  const src = photo || logo || crestSrc;
  const onerr = ` onerror="this.onerror=null;this.src='${crestSrc}'"`;
  return `<img class="${cls}" src="${src}" alt="${player.teamName}" loading="lazy"${onerr}>`;
}

/* Starting slots, then bench. eligible = positions allowed. */
const SLOTS = [
  { id:"qb",   label:"QB",   eligible:["QB"] },
  { id:"rb1",  label:"RB",   eligible:["RB"] },
  { id:"rb2",  label:"RB",   eligible:["RB"] },
  { id:"wr1",  label:"WR",   eligible:["WR"] },
  { id:"wr2",  label:"WR",   eligible:["WR"] },
  { id:"wr3",  label:"WR",   eligible:["WR"] },
  { id:"te",   label:"TE",   eligible:["TE"] },
  { id:"flex", label:"FLEX", eligible:["RB","WR","TE"] },
  { id:"k",    label:"K",    eligible:["K"] },
  { id:"b1",   label:"BN",   eligible:["QB","RB","WR","TE","K"], bench:true },
  { id:"b2",   label:"BN",   eligible:["QB","RB","WR","TE","K"], bench:true },
  { id:"b3",   label:"BN",   eligible:["QB","RB","WR","TE","K"], bench:true },
  { id:"b4",   label:"BN",   eligible:["QB","RB","WR","TE","K"], bench:true },
  { id:"b5",   label:"BN",   eligible:["QB","RB","WR","TE","K"], bench:true }
];

/* Per-position scoring ranges by tier: [floor, ceiling] fantasy points. */
const RANGE = {
  QB: { 1:[17,33], 2:[12,26], 3:[7,20] },
  RB: { 1:[11,27], 2:[7,19],  3:[3,13] },
  WR: { 1:[10,26], 2:[6,19],  3:[2,13] },
  TE: { 1:[8,20],  2:[5,15],  3:[2,10] },
  K:  { 1:[7,14],  2:[5,12],  3:[3,10] }
};

/* ---------------- state ---------------- */
const state = {
  id: null,
  teamName: "",
  owner: "",
  week: 0,
  totalPoints: 0,
  pool: [],                 // every player, this team's copy
  roster: {},               // slotId -> playerId
  lastWeek: null,           // { week, lines:[{name,pos,pts}], total }
  friends: []                // other local team ids
};

/* Flatten NFL object into a fresh pool with unique, stable ids and
   projections. Called per team so each team's points stay independent. */
function freshPool(){
  const pool = [];
  let id = 0;
  Object.keys(NFL).forEach(abbr => {
    NFL[abbr].players.forEach(([name, pos, tier]) => {
      const [lo, hi] = RANGE[pos][tier];
      pool.push({
        id: "p" + (id++),
        name, pos, tier,
        team: abbr,
        teamName: NFL[abbr].name,
        proj: +(((lo + hi) / 2)).toFixed(1),
        points: 0
      });
    });
  });
  pool.sort((a,b) => a.tier - b.tier || b.proj - a.proj);
  return pool;
}

const byId = id => state.pool.find(p => p.id === id);
const isDrafted = id => Object.values(state.roster).includes(id);

/* ---------------- local team storage ----------------
   Every team (yours and any simulated rivals) lives in localStorage so
   several teams can exist side by side in this browser and be compared. */
const STORAGE_KEY = "bcfd_teams_v1";
const ACTIVE_KEY = "bcfd_active_v1";

function loadTeams(){
  try{
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  }catch(e){
    return {};
  }
}
function saveTeams(teams){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(teams));
}
function genId(){
  return "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* Copy a stored team record into the live working `state`. */
function loadTeamIntoState(id, teams){
  const rec = teams[id];
  state.id = id;
  state.teamName = rec.teamName;
  state.owner = rec.owner || "";
  state.week = rec.week || 0;
  state.totalPoints = rec.totalPoints || 0;
  state.lastWeek = rec.lastWeek || null;
  state.friends = rec.friends ? [...rec.friends] : [];

  state.pool = freshPool();
  (rec.customPlayers || []).forEach(cp => state.pool.push(cp));
  state.pool.forEach(p => { p.points = (rec.points && rec.points[p.id]) || 0; });

  state.roster = {};
  SLOTS.forEach(s => state.roster[s.id] = (rec.roster && rec.roster[s.id]) || null);
}

/* Save the live working `state` back into its stored team record. */
function persist(){
  if (!state.id) return;
  const teams = loadTeams();
  const prev = teams[state.id];

  const points = {};
  Object.values(state.roster).forEach(pid => {
    if (!pid) return;
    const p = byId(pid);
    if (p) points[pid] = p.points;
  });

  teams[state.id] = {
    id: state.id,
    teamName: state.teamName,
    owner: state.owner,
    week: state.week,
    totalPoints: state.totalPoints,
    roster: { ...state.roster },
    points,
    customPlayers: state.pool.filter(p => p.id.startsWith("custom")),
    lastWeek: state.lastWeek,
    friends: state.friends,
    isBot: prev ? !!prev.isBot : false,
    createdAt: prev ? prev.createdAt : Date.now(),
    updatedAt: Date.now()
  };
  saveTeams(teams);
  localStorage.setItem(ACTIVE_KEY, state.id);
}

/* ---------------- element refs ---------------- */
const el = {
  launch: document.getElementById("launch"),
  app: document.getElementById("app"),
  teamNameInput: document.getElementById("teamNameInput"),
  ownerInput: document.getElementById("ownerInput"),
  createBtn: document.getElementById("createTeamBtn"),
  launchError: document.getElementById("launchError"),
  teamsSection: document.getElementById("teamsSection"),
  teamsList: document.getElementById("teamsList"),

  sbTeamName: document.getElementById("sbTeamName"),
  sbOwner: document.getElementById("sbOwner"),
  switchTeamBtn: document.getElementById("switchTeamBtn"),
  sbPoints: document.getElementById("sbPoints"),
  sbWeek: document.getElementById("sbWeek"),
  sbFilled: document.getElementById("sbFilled"),
  simBtn: document.getElementById("simBtn"),

  search: document.getElementById("searchInput"),
  teamFilter: document.getElementById("teamFilter"),
  posFilter: document.getElementById("posFilter"),
  hideDrafted: document.getElementById("hideDrafted"),
  playerList: document.getElementById("playerList"),
  boardEmpty: document.getElementById("boardEmpty"),
  poolCount: document.getElementById("poolCount"),

  newName: document.getElementById("newName"),
  newTeam: document.getElementById("newTeam"),
  newPos: document.getElementById("newPos"),
  addBtn: document.getElementById("addPlayerBtn"),
  addNote: document.getElementById("addNote"),

  slotList: document.getElementById("slotList"),
  clearBtn: document.getElementById("clearBtn"),
  recapBody: document.getElementById("recapBody"),

  friendList: document.getElementById("friendList"),
  friendEmpty: document.getElementById("friendEmpty"),
  friendSelect: document.getElementById("friendSelect"),
  addFriendBtn: document.getElementById("addFriendBtn"),
  quickRivalBtn: document.getElementById("quickRivalBtn"),

  compareOverlay: document.getElementById("compareOverlay"),
  compareBody: document.getElementById("compareBody"),
  compareClose: document.getElementById("compareClose")
};

/* ---------------- launch ---------------- */
function renderTeamsList(){
  const teams = loadTeams();
  const ids = Object.keys(teams).sort((a,b) => (teams[b].updatedAt || 0) - (teams[a].updatedAt || 0));

  el.teamsList.innerHTML = ids.map(id => {
    const t = teams[id];
    return `
      <li class="team-row">
        <span>
          <span class="team-row-name">${t.teamName}</span>
          <span class="team-row-meta">${t.owner ? t.owner + " · " : ""}${t.totalPoints.toFixed(1)} pts · wk ${t.week}${t.isBot ? " · rival" : ""}</span>
        </span>
        <span class="team-row-actions">
          <button class="btn btn-ghost" data-resume="${id}">Continue</button>
          <button class="drop" data-delete-team="${id}" title="Delete ${t.teamName}" aria-label="Delete ${t.teamName}">&times;</button>
        </span>
      </li>`;
  }).join("");

  el.teamsSection.hidden = ids.length === 0;
}

el.teamsList.addEventListener("click", e => {
  const resume = e.target.closest("[data-resume]");
  if (resume){ enterApp(resume.dataset.resume); return; }

  const del = e.target.closest("[data-delete-team]");
  if (del){
    const id = del.dataset.deleteTeam;
    const teams = loadTeams();
    const t = teams[id];
    if (t && confirm(`Delete "${t.teamName}"? This can't be undone.`)){
      delete teams[id];
      Object.values(teams).forEach(other => {
        other.friends = (other.friends || []).filter(f => f !== id);
      });
      saveTeams(teams);
      if (localStorage.getItem(ACTIVE_KEY) === id) localStorage.removeItem(ACTIVE_KEY);
      renderTeamsList();
    }
  }
});

function enterApp(id){
  const teams = loadTeams();
  if (!teams[id]) return;
  loadTeamIntoState(id, teams);
  el.launch.hidden = true;
  el.app.hidden = false;
  el.sbTeamName.textContent = state.teamName;
  el.sbOwner.textContent = state.owner ? "Managed by " + state.owner : "";
  renderAll();
}

function showLaunch(){
  el.app.hidden = true;
  el.launch.hidden = false;
  el.teamNameInput.value = "";
  el.ownerInput.value = "";
  el.launchError.hidden = true;
  renderTeamsList();
}

function createTeam(){
  const name = el.teamNameInput.value.trim();
  if (!name){
    el.launchError.hidden = false;
    el.teamNameInput.focus();
    return;
  }

  const id = genId();
  const teams = loadTeams();
  const roster = {};
  SLOTS.forEach(s => roster[s.id] = null);

  teams[id] = {
    id,
    teamName: name,
    owner: el.ownerInput.value.trim(),
    week: 0,
    totalPoints: 0,
    roster,
    points: {},
    customPlayers: [],
    lastWeek: null,
    friends: [],
    isBot: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  saveTeams(teams);
  enterApp(id);
  el.search.focus();
}

el.createBtn.addEventListener("click", createTeam);
[el.teamNameInput, el.ownerInput].forEach(i =>
  i.addEventListener("keydown", e => { if (e.key === "Enter") createTeam(); })
);
el.teamNameInput.addEventListener("input", () => el.launchError.hidden = true);
el.switchTeamBtn.addEventListener("click", showLaunch);

/* ---------------- filter dropdowns ---------------- */
function fillTeamSelects(){
  const abbrs = Object.keys(NFL).sort((a,b) => NFL[a].name.localeCompare(NFL[b].name));

  el.teamFilter.innerHTML = '<option value="ALL">All 32 teams</option>' +
    abbrs.map(a => `<option value="${a}">${NFL[a].name}</option>`).join("");

  el.newTeam.innerHTML = abbrs.map(a => `<option value="${a}">${NFL[a].name}</option>`).join("");
}

/* ---------------- draft board ---------------- */
function visiblePlayers(){
  const q = el.search.value.trim().toLowerCase();
  const team = el.teamFilter.value;
  const pos = el.posFilter.value;

  return state.pool.filter(p => {
    if (el.hideDrafted.checked && isDrafted(p.id)) return false;
    if (team !== "ALL" && p.team !== team) return false;
    if (pos !== "ALL" && p.pos !== pos) return false;
    if (q && !p.name.toLowerCase().includes(q)) return false;
    return true;
  });
}

function renderBoard(){
  const list = visiblePlayers();
  el.playerList.innerHTML = list.map(p => {
    const taken = isDrafted(p.id);
    const action = taken
      ? `<span class="taken-tag">On my team</span>`
      : `<button class="btn btn-ghost" data-draft="${p.id}">Draft</button>`;
    return `
      <li class="player${taken ? " taken" : ""}">
        ${faceHTML(p, "face")}
        <span class="pos ${p.pos}">${p.pos}</span>
        <span><span class="p-name">${p.name}</span><br><span class="p-team">${p.teamName}</span></span>
        <span class="p-proj" title="Projected points per week">${p.proj}</span>
        ${action}
      </li>`;
  }).join("");

  el.boardEmpty.hidden = list.length > 0;
  el.poolCount.textContent = `${list.length} shown · ${state.pool.length} in pool`;
}

el.playerList.addEventListener("click", e => {
  const btn = e.target.closest("[data-draft]");
  if (btn) draftPlayer(btn.dataset.draft);
});

[el.search, el.teamFilter, el.posFilter, el.hideDrafted].forEach(c =>
  c.addEventListener("input", renderBoard)
);

/* ---------------- drafting ---------------- */
function openSlotFor(pos){
  const starter = SLOTS.find(s => !s.bench && !state.roster[s.id] && s.eligible.includes(pos));
  if (starter) return starter;
  return SLOTS.find(s => s.bench && !state.roster[s.id]);
}

function draftPlayer(id){
  const p = byId(id);
  if (!p || isDrafted(id)) return;

  const slot = openSlotFor(p.pos);
  if (!slot){
    alert(`Every slot that can hold a ${p.pos} is full. Drop someone first.`);
    return;
  }
  state.roster[slot.id] = id;
  renderAll();
}

function dropPlayer(slotId){
  state.roster[slotId] = null;
  renderAll();
}

el.clearBtn.addEventListener("click", () => {
  if (!confirm("Drop every player and reset your points?")) return;
  SLOTS.forEach(s => state.roster[s.id] = null);
  state.pool.forEach(p => p.points = 0);
  state.week = 0;
  state.totalPoints = 0;
  state.lastWeek = null;
  renderAll();
});

/* ---------------- roster panel ---------------- */
function renderRoster(){
  el.slotList.innerHTML = SLOTS.map(s => {
    const id = state.roster[s.id];
    if (!id){
      return `
        <li class="slot${s.bench ? " bench" : ""}">
          <span class="slot-label">${s.label}</span>
          <span class="face face-sm face-empty" aria-hidden="true"></span>
          <span class="slot-open">${s.bench ? "Bench spot open" : "Pick a " + s.eligible.join("/")}</span>
          <span></span>
        </li>`;
    }
    const p = byId(id);
    return `
      <li class="slot slot-filled${s.bench ? " bench" : ""}">
        <span class="slot-label">${s.label}</span>
        ${faceHTML(p, "face face-sm")}
        <span class="slot-player">${p.name}<small>${p.pos} · ${p.teamName}</small></span>
        <span>
          <span class="slot-pts">${p.points.toFixed(1)}</span>
          <button class="drop" data-drop="${s.id}" title="Drop ${p.name}" aria-label="Drop ${p.name}">&times;</button>
        </span>
      </li>`;
  }).join("");
}

el.slotList.addEventListener("click", e => {
  const btn = e.target.closest("[data-drop]");
  if (btn) dropPlayer(btn.dataset.drop);
});

/* ---------------- weekly scoring ---------------- */
function scorePlayer(p){
  const [lo, hi] = RANGE[p.pos][p.tier];
  // average two rolls so results cluster near the middle, with room for busts and booms
  const roll = (Math.random() + Math.random()) / 2;
  const boom = Math.random() < 0.08 ? (hi - lo) * 0.35 : 0;
  return Math.max(0, +(lo + roll * (hi - lo) + boom).toFixed(1));
}

function playWeek(){
  const starters = SLOTS.filter(s => !s.bench && state.roster[s.id]);
  if (!starters.length) return;

  state.week++;
  const lines = [];
  let total = 0;

  starters.forEach(s => {
    const p = byId(state.roster[s.id]);
    const pts = scorePlayer(p);
    p.points += pts;
    total += pts;
    lines.push({ slot: s.label, name: p.name, pos: p.pos, pts });
  });

  total = +total.toFixed(1);
  state.totalPoints = +(state.totalPoints + total).toFixed(1);
  state.lastWeek = { week: state.week, lines, total };
  renderAll();
}

el.simBtn.addEventListener("click", playWeek);

function renderRecap(){
  if (!state.lastWeek){
    el.recapBody.innerHTML = `<p class="empty">Draft at least one starter, then play a week to see scoring here.</p>`;
    return;
  }
  const w = state.lastWeek;
  const rows = [...w.lines].sort((a,b) => b.pts - a.pts).map(l =>
    `<div class="recap-line"><span>${l.name} <em style="color:#8b9bb8;font-style:normal">${l.slot}</em></span><span>${l.pts.toFixed(1)}</span></div>`
  ).join("");

  el.recapBody.innerHTML = `
    <p class="recap-week">Week ${w.week} results</p>
    ${rows}
    <div class="recap-total"><span>Week total</span><span>${w.total.toFixed(1)}</span></div>`;
}

/* ---------------- add a custom player ---------------- */
function note(msg){
  el.addNote.hidden = false;
  el.addNote.textContent = msg;
}

el.addBtn.addEventListener("click", () => {
  const name = el.newName.value.trim();
  if (!name){ note("Enter a player name first."); return; }

  const abbr = el.newTeam.value;
  const pos = el.newPos.value;
  const [lo, hi] = RANGE[pos][3];

  const player = {
    id: "custom" + Date.now(),
    name, pos, tier: 3,
    team: abbr,
    teamName: NFL[abbr].name,
    proj: +(((lo + hi) / 2)).toFixed(1),
    points: 0
  };
  state.pool.push(player);
  el.newName.value = "";
  note(`${name} added to ${NFL[abbr].name} as a ${pos}.`);
  renderAll();
});

el.newName.addEventListener("keydown", e => { if (e.key === "Enter") el.addBtn.click(); });

/* ---------------- friends & comparison ---------------- */
function renderFriends(){
  const teams = loadTeams();
  const friendIds = state.friends.filter(id => teams[id] && id !== state.id);

  el.friendList.innerHTML = friendIds.map(id => {
    const f = teams[id];
    const diff = +(state.totalPoints - f.totalPoints).toFixed(1);
    const diffClass = diff > 0 ? "ahead" : diff < 0 ? "behind" : "";
    const diffLabel = diff === 0 ? "tied" : (diff > 0 ? "+" : "") + diff.toFixed(1);
    return `
      <li class="friend-row">
        <span>
          <span class="friend-name">${f.teamName}</span>
          <span class="friend-meta">${f.totalPoints.toFixed(1)} pts · wk ${f.week}${f.isBot ? " · rival" : ""}</span>
        </span>
        <span class="friend-diff ${diffClass}">${diffLabel}</span>
        <span class="friend-actions">
          <button class="btn btn-ghost" data-compare="${id}">Compare</button>
          <button class="drop" data-unfriend="${id}" title="Remove ${f.teamName}" aria-label="Remove ${f.teamName}">&times;</button>
        </span>
      </li>`;
  }).join("");
  el.friendEmpty.hidden = friendIds.length > 0;

  const candidates = Object.keys(teams).filter(id => id !== state.id && !state.friends.includes(id));
  el.friendSelect.innerHTML = candidates.length
    ? candidates.map(id => `<option value="${id}">${teams[id].teamName}</option>`).join("")
    : `<option value="">No other teams yet</option>`;
  el.friendSelect.disabled = candidates.length === 0;
  el.addFriendBtn.disabled = candidates.length === 0;
}

el.addFriendBtn.addEventListener("click", () => {
  const id = el.friendSelect.value;
  if (!id) return;
  if (!state.friends.includes(id)) state.friends.push(id);
  renderAll();
});

el.friendList.addEventListener("click", e => {
  const cmp = e.target.closest("[data-compare]");
  if (cmp){ openCompare(cmp.dataset.compare); return; }

  const rm = e.target.closest("[data-unfriend]");
  if (rm){
    state.friends = state.friends.filter(id => id !== rm.dataset.unfriend);
    renderAll();
  }
});

/* Fully random roster + a few simulated weeks, so a rival has something
   to compare against right away. */
const RIVAL_NAMES = [
  "Gridiron Ghosts","End Zone Elites","Blitz Brigade","Red Zone Raiders",
  "Hail Mary Heroes","Turf Titans","Rollout Renegades","Fourth & Long Legends"
];

function randomRosterFill(pool, roster){
  const used = new Set();
  SLOTS.forEach(slot => {
    const options = pool.filter(p => slot.eligible.includes(p.pos) && !used.has(p.id));
    if (!options.length) return;
    const pick = options[Math.floor(Math.random() * options.length)];
    roster[slot.id] = pick.id;
    used.add(pick.id);
  });
}

function simulateWeeks(pool, roster, weeks){
  let total = 0, lastWeek = null;
  for (let w = 1; w <= weeks; w++){
    let weekTotal = 0;
    const lines = [];
    SLOTS.filter(s => !s.bench).forEach(s => {
      const pid = roster[s.id];
      if (!pid) return;
      const p = pool.find(pp => pp.id === pid);
      const pts = scorePlayer(p);
      p.points = +(p.points + pts).toFixed(1);
      weekTotal += pts;
      lines.push({ slot: s.label, name: p.name, pos: p.pos, pts });
    });
    weekTotal = +weekTotal.toFixed(1);
    total = +(total + weekTotal).toFixed(1);
    lastWeek = { week: w, lines, total: weekTotal };
  }
  return { total, lastWeek };
}

function createRivalTeam(){
  const pool = freshPool();
  const roster = {};
  SLOTS.forEach(s => roster[s.id] = null);
  randomRosterFill(pool, roster);

  const weeks = 1 + Math.floor(Math.random() * 4);
  const { total, lastWeek } = simulateWeeks(pool, roster, weeks);

  const points = {};
  Object.values(roster).forEach(pid => {
    if (!pid) return;
    const p = pool.find(pp => pp.id === pid);
    points[pid] = p.points;
  });

  const id = genId();
  const teams = loadTeams();
  teams[id] = {
    id,
    teamName: RIVAL_NAMES[Math.floor(Math.random() * RIVAL_NAMES.length)] + " " + (10 + Math.floor(Math.random() * 90)),
    owner: "Simulated rival",
    week: weeks,
    totalPoints: total,
    roster,
    points,
    customPlayers: [],
    lastWeek,
    friends: [],
    isBot: true,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  saveTeams(teams);

  state.friends.push(id);
  renderAll();
}

el.quickRivalBtn.addEventListener("click", createRivalTeam);

function openCompare(friendId){
  const teams = loadTeams();
  const friend = teams[friendId];
  if (!friend) return;

  const friendPool = freshPool();
  (friend.customPlayers || []).forEach(cp => friendPool.push(cp));
  friendPool.forEach(p => { p.points = (friend.points && friend.points[p.id]) || 0; });
  const friendById = id => friendPool.find(p => p.id === id);

  const rows = SLOTS.filter(s => !s.bench).map(s => {
    const mine = state.roster[s.id] ? byId(state.roster[s.id]) : null;
    const theirs = friend.roster[s.id] ? friendById(friend.roster[s.id]) : null;
    const minePts = mine ? mine.points : 0;
    const theirPts = theirs ? theirs.points : 0;

    return `
      <div class="cmp-row">
        <div class="cmp-side${mine && minePts > theirPts ? " cmp-win" : ""}">
          ${mine
            ? `<span class="cmp-name">${mine.name}</span><span class="cmp-pts">${minePts.toFixed(1)}</span>`
            : `<span class="cmp-empty">—</span>`}
        </div>
        <div class="cmp-slot">${s.label}</div>
        <div class="cmp-side cmp-side-right${theirs && theirPts > minePts ? " cmp-win" : ""}">
          ${theirs
            ? `<span class="cmp-pts">${theirPts.toFixed(1)}</span><span class="cmp-name">${theirs.name}</span>`
            : `<span class="cmp-empty">—</span>`}
        </div>
      </div>`;
  }).join("");

  const diff = +(state.totalPoints - friend.totalPoints).toFixed(1);
  const headline = diff === 0
    ? `Tied at ${state.totalPoints.toFixed(1)} points`
    : diff > 0
      ? `${state.teamName} leads by ${diff.toFixed(1)}`
      : `${friend.teamName} leads by ${Math.abs(diff).toFixed(1)}`;

  el.compareBody.innerHTML = `
    <div class="cmp-head">
      <div class="cmp-team">
        <h3>${state.teamName}</h3>
        <span>${state.totalPoints.toFixed(1)} pts · wk ${state.week}</span>
      </div>
      <div class="cmp-vs">VS</div>
      <div class="cmp-team cmp-team-right">
        <h3>${friend.teamName}</h3>
        <span>${friend.totalPoints.toFixed(1)} pts · wk ${friend.week}</span>
      </div>
    </div>
    <p class="cmp-headline">${headline}</p>
    <div class="cmp-rows">${rows}</div>`;

  el.compareOverlay.hidden = false;
}

el.compareClose.addEventListener("click", () => el.compareOverlay.hidden = true);
el.compareOverlay.addEventListener("click", e => {
  if (e.target === el.compareOverlay) el.compareOverlay.hidden = true;
});

/* ---------------- header + full render ---------------- */
function renderHeader(){
  const filled = SLOTS.filter(s => state.roster[s.id]).length;
  const hasStarter = SLOTS.some(s => !s.bench && state.roster[s.id]);

  el.sbPoints.textContent = state.totalPoints.toFixed(1);
  el.sbWeek.textContent = state.week;
  el.sbFilled.textContent = `${filled}/${SLOTS.length}`;
  el.simBtn.disabled = !hasStarter;
  el.simBtn.textContent = `Play week ${state.week + 1}`;
}

function renderAll(){
  persist();
  renderHeader();
  renderBoard();
  renderRoster();
  renderRecap();
  renderFriends();
}

/* ---------------- boot ---------------- */
fillTeamSelects();
(function boot(){
  const teams = loadTeams();
  const activeId = localStorage.getItem(ACTIVE_KEY);
  if (activeId && teams[activeId]){
    enterApp(activeId);
  } else {
    renderTeamsList();
  }
})();