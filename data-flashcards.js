// FLASHCARD DATA — 75 cards
// cats: n=Nomenclature, m=Moles & mass, s=Stoichiometry, b=Bonding & shape, i=IMF, g=Gas laws, st=States, fl=Free response

const FLASHCARDS = [
  // NOMENCLATURE (6)
  {id:0,c:"n",q:"What is the correct name for N₂O₄?",a:"Dinitrogen tetroxide. 'Di'=2 N, 'tetr(a)'=4 O. The 'a' in tetra drops before 'oxide' → tetroxide, not tetraoxide. Watch out for 'dinitrogen tetraoxide' — it's the classic wrong answer."},
  {id:1,c:"n",q:"What is the IUPAC name for N₂O?",a:"Dinitrogen monoxide. Di=2 N, mono=1 O. 'Mono' is used for the second element even when only 1 atom is present."},
  {id:2,c:"n",q:"What is the chemical formula for diphosphorus pentoxide?",a:"P₂O₅. Di=2 P, pent(a)=5 O. The 'a' in penta drops before oxide → pentoxide."},
  {id:3,c:"n",q:"What are the Greek prefixes for 1 through 5?",a:"Mono(1), di(2), tri(3), tetra(4), penta(5). Trailing vowel drops before 'oxide': penta→pentoxide, tetra→tetroxide."},
  {id:4,c:"n",q:"When do you omit the prefix 'mono-'?",a:"Only for the FIRST element. 'Carbon monoxide' (CO) — no mono on carbon, but mono stays on oxygen. 'Monocarbon monoxide' is wrong."},
  {id:5,c:"n",q:"Name these: CO, SO₃, NO₂",a:"CO = carbon monoxide. SO₃ = sulfur trioxide. NO₂ = nitrogen dioxide. First element never gets mono-. Second element always gets a prefix."},

  // MOLES & MASS (13)
  {id:6,c:"m",q:"What is Avogadro's number and what does it represent?",a:"6.022 × 10²³ particles per mole. One mole of any substance contains this many formula units (atoms, molecules, or ions)."},
  {id:7,c:"m",q:"How many molecules are in 0.500 mol of CO₂?",a:"0.500 × 6.022×10²³ = 3.011×10²³ molecules. Half a mole = half of Avogadro's number."},
  {id:8,c:"m",q:"How many moles are in 36.0 g of H₂O?",a:"moles = mass ÷ molar mass = 36.0 ÷ 18.02 = 2.00 mol."},
  {id:9,c:"m",q:"What is the molar mass of Ca(NO₃)₂? (Ca=40.08, N=14.01, O=16.00)",a:"Ca: 40.08. Two NO₃ groups: 2×(14.01+3×16.00) = 2×62.01 = 124.02. Total: 40.08+124.02 = 164.10 g/mol. The subscript outside parentheses multiplies everything inside."},
  {id:10,c:"m",q:"What is the molar mass of CCl₄? (C=12.01, Cl=35.45)",a:"12.01 + 4(35.45) = 12.01 + 141.80 = 153.81 g/mol."},
  {id:11,c:"m",q:"What is the molar mass of C₆H₁₂O₆ (glucose)?",a:"6(12.01)+12(1.008)+6(16.00) = 72.06+12.10+96.00 = 180.18 g/mol."},
  {id:12,c:"m",q:"What is the molar mass of N₂O₄? (N=14.01, O=16.00)",a:"2(14.01)+4(16.00) = 28.02+64.00 = 92.02 g/mol."},
  {id:13,c:"m",q:"What is the molar mass of Ca₃(PO₄)₂? (Ca=40.08, P=30.97, O=16.00)",a:"3(40.08)+2(30.97)+8(16.00) = 120.24+61.94+128.00 = 310.18 g/mol. The '2' outside multiplies both P and all 4 oxygens inside."},
  {id:14,c:"m",q:"One mole of any pure substance contains how many formula units?",a:"6.022×10²³ formula units (Avogadro's number). True regardless of substance — 1 mol H₂O, 1 mol NaCl, 1 mol Fe all contain this many particles."},
  {id:15,c:"m",q:"How many moles of oxygen atoms are in 3.0 mol of H₂SO₄?",a:"H₂SO₄ has 4 oxygen atoms per formula unit. 3.0 mol × 4 = 12 mol O atoms."},
  {id:16,c:"m",q:"How many moles are in 9.21 g of N₂O₄ (MM = 92.02 g/mol)?",a:"moles = 9.21 ÷ 92.02 = 0.100 mol."},
  {id:17,c:"m",q:"How many molecules are in 9.21 g of N₂O₄?",a:"Step 1: moles = 9.21 ÷ 92.02 = 0.100 mol. Step 2: molecules = 0.100 × 6.022×10²³ = 6.02×10²² molecules."},
  {id:18,c:"m",q:"What is the mass of calcium in 1.00 mol of Ca₃(PO₄)₂?",a:"Ca₃(PO₄)₂ has 3 Ca atoms per formula unit. 1.00 mol × 3 × 40.08 g/mol = 120.24 g of Ca."},

  // STOICHIOMETRY (11)
  {id:19,c:"s",q:"What is the only thing you can change when balancing a chemical equation?",a:"Coefficients only — the large numbers in front of formulas. Never change subscripts (that would change the substance itself)."},
  {id:20,c:"s",q:"Balance: Al + O₂ → Al₂O₃",a:"4 Al + 3 O₂ → 2 Al₂O₃. Check: 4 Al left/right ✓, 6 O left/right ✓."},
  {id:21,c:"s",q:"Balance C₃H₈ + O₂ → CO₂ + H₂O. Coefficient of O₂?",a:"C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. Coefficient of O₂ is 5. Check: 3C, 8H, 10O each side ✓."},
  {id:22,c:"s",q:"What is the stoichiometry road map for mass-to-mass problems?",a:"grams A → (÷ MM) → moles A → (× mole ratio) → moles B → (× MM) → grams B. Never skip the mole step."},
  {id:23,c:"s",q:"N₂ + 3H₂ → 2NH₃: how many grams of NH₃ from 28.0 g of N₂?",a:"28.0 g N₂ ÷ 28.02 g/mol = 1.00 mol N₂. Ratio 1:2 → 2.00 mol NH₃. 2.00 × 17.03 g/mol = 34.1 g NH₃."},
  {id:24,c:"s",q:"2H₂ + O₂ → 2H₂O: how many grams of H₂O from 4.0 g of H₂?",a:"4.0 g ÷ 2.016 g/mol = 1.98 mol H₂. Ratio 1:1 → 1.98 mol H₂O. 1.98 × 18.02 = 35.7 g H₂O."},
  {id:25,c:"s",q:"What is percent yield and how do you calculate it?",a:"% yield = (actual yield ÷ theoretical yield) × 100. Theoretical is calculated from stoichiometry. Actual is measured in lab. % yield ≤ 100% always."},
  {id:26,c:"s",q:"Theoretical yield = 15.0 g, actual yield = 12.0 g. What is % yield?",a:"(12.0 ÷ 15.0) × 100 = 80.0%."},
  {id:27,c:"s",q:"Theoretical yield = 18.0 g, actual yield = 14.5 g. What is % yield?",a:"(14.5 ÷ 18.0) × 100 = 80.6%."},
  {id:28,c:"s",q:"What is the actual yield and how is it obtained?",a:"The actual yield is the mass of product physically recovered from the experiment. It must be measured — it cannot be calculated. Always ≤ theoretical yield."},
  {id:29,c:"s",q:"CaCO₃ → CaO + CO₂: if you double moles of CaCO₃, what happens to CO₂?",a:"CO₂ also doubles. The mole ratio is 1:1. Double the reactant → double the product."},
  {id:30,c:"s",q:"2H₂O₂ → 2H₂O + O₂: how many moles of O₂ from 0.500 mol H₂O₂?",a:"Ratio: 2 mol H₂O₂ : 1 mol O₂. 0.500 × (1/2) = 0.250 mol O₂."},

  // BONDING & SHAPE (12)
  {id:31,c:"b",q:"How is the H–Cl bond classified? (EN: H=2.1, Cl=3.0)",a:"Polar covalent. ΔEN = 3.0−2.1 = 0.9. Rules: ≤0.4 = nonpolar covalent; >0.4 and <1.5 = polar covalent; ≥2.0 = ionic."},
  {id:32,c:"b",q:"What are the three bond classifications by electronegativity difference?",a:"ΔEN ≤ 0.4: nonpolar covalent. 0.4 < ΔEN < 1.5: polar covalent. ΔEN ≥ 2.0: ionic. (Exam sheet says <1.5 for polar covalent upper boundary.)"},
  {id:33,c:"b",q:"What is a coordinate covalent bond?",a:"A covalent bond where BOTH shared electrons come from the same atom. Once formed, chemically identical to a regular covalent bond. Example: NH₃ lone pair donating to H⁺ → NH₄⁺."},
  {id:34,c:"b",q:"How many covalent bonds does neutral carbon typically form?",a:"4 bonds. Carbon has 4 valence electrons and needs 4 more to complete its octet."},
  {id:35,c:"b",q:"Which diatomic molecule contains a triple bond?",a:"N₂. Structure: :N≡N: — 3 shared pairs plus 1 lone pair on each N. O₂ has a double bond; H₂ and Cl₂ have single bonds."},
  {id:36,c:"b",q:"Draw the Lewis structure of NH₃ and name its shapes.",a:"N in center, 3 bonding pairs (to H), 1 lone pair. Electron geometry = tetrahedral (4 groups). Molecular shape = trigonal pyramidal (lone pair compressed bond angles <109.5°)."},
  {id:37,c:"b",q:"Why is CO₂ nonpolar despite having polar C=O bonds?",a:"CO₂ is linear (180°). The two C=O dipoles are equal and opposite — they cancel. Net dipole = 0 → nonpolar. Shape determines whether dipoles cancel."},
  {id:38,c:"b",q:"Is NH₃ polar or nonpolar? Explain.",a:"Polar. Trigonal pyramidal shape is asymmetric. The 3 N–H bond dipoles don't cancel due to the lone pair. Net dipole → polar molecule."},
  {id:39,c:"b",q:"Is CCl₄ polar or nonpolar? Explain.",a:"Nonpolar. Perfect tetrahedral geometry — all 4 C–Cl dipoles cancel symmetrically. Net dipole = 0 → nonpolar despite polar bonds."},
  {id:40,c:"b",q:"Which direction does electronegativity increase on the periodic table?",a:"Up and to the right, toward fluorine (EN=4.0, the highest). Increases going up a group and right across a period."},
  {id:41,c:"b",q:"What is the electron geometry vs. molecular shape of H₂O?",a:"4 electron groups (2 bonds + 2 lone pairs) → electron geometry = tetrahedral. Molecular shape = bent/angular (~104.5° bond angle)."},
  {id:42,c:"b",q:"What is the electron geometry vs. molecular shape of BF₃?",a:"3 bonding pairs, 0 lone pairs → electron geometry AND molecular shape = trigonal planar. Bond angles = 120°."},

  // IMF (11)
  {id:43,c:"i",q:"What are the three IMFs from weakest to strongest?",a:"1. London dispersion (all molecules, weakest for small nonpolar). 2. Dipole–dipole (polar molecules). 3. Hydrogen bonding (H directly bonded to N, O, or F — strongest)."},
  {id:44,c:"i",q:"What IMF acts between CO₂ molecules?",a:"London dispersion only. CO₂ is nonpolar (linear, dipoles cancel). No net dipole → no dipole–dipole. No H on N/O/F → no H-bonding."},
  {id:45,c:"i",q:"What IMF acts between HCl molecules?",a:"Dipole–dipole. HCl is polar (ΔEN=0.9). H is bonded to Cl, not N/O/F → no hydrogen bonding. Dominant IMF is dipole–dipole."},
  {id:46,c:"i",q:"What IMF acts between NH₃ molecules?",a:"Hydrogen bonding. H is bonded directly to N, which is one of the three qualifying atoms (N, O, F). Strongest of the three IMF types."},
  {id:47,c:"i",q:"Which of CO₂, Cl₂, CH₄, NH₃ can form hydrogen bonds with itself?",a:"NH₃. Requires H bonded to N, O, or F. CO₂ has no H. Cl₂ has no H. CH₄ has H bonded to C (not N/O/F)."},
  {id:48,c:"i",q:"Rank CH₄, HCl, H₂O from lowest to highest boiling point.",a:"CH₄ < HCl < H₂O. CH₄: London dispersion only. HCl: dipole–dipole. H₂O: hydrogen bonding → highest BP despite lowest molar mass."},
  {id:49,c:"i",q:"Which has a higher boiling point: CH₄ or NH₃? Why?",a:"NH₃ (BP −33°C) > CH₄ (BP −161°C). NH₃ has hydrogen bonding; CH₄ has only London dispersion. Stronger IMF → higher BP."},
  {id:50,c:"i",q:"Why does evaporation cool the remaining liquid?",a:"The highest-energy (fastest) molecules escape as vapor. The remaining liquid has lower average kinetic energy → lower temperature."},
  {id:51,c:"i",q:"When does a liquid boil?",a:"When its vapor pressure equals the external (atmospheric) pressure. NOT necessarily at 100°C — that's only true at exactly 1 atm."},
  {id:52,c:"i",q:"What happens at the molecular level when water boils?",a:"Hydrogen bonds (IMFs) BETWEEN water molecules are overcome. The covalent O–H bonds INSIDE each molecule are NOT broken. Breaking them would decompose water into H₂ and O₂."},
  {id:53,c:"i",q:"Compare CH₄ and NH₃: polarity, IMF, and boiling point.",a:"CH₄: nonpolar (tetrahedral, symmetric), London dispersion only, lower BP. NH₃: polar (trigonal pyramidal, lone pair), hydrogen bonding, higher BP."},

  // GAS LAWS (16)
  {id:54,c:"g",q:"State Boyle's Law and the key condition.",a:"P₁V₁ = P₂V₂ at constant temperature and fixed moles. Pressure and volume are inversely proportional."},
  {id:55,c:"g",q:"A gas at 4.0 L and 1.5 atm is compressed to 3.0 atm at constant T. New volume?",a:"V₂ = P₁V₁/P₂ = (1.5×4.0)/3.0 = 2.0 L. Pressure doubled → volume halved."},
  {id:56,c:"g",q:"State Charles's Law and the key condition.",a:"V₁/T₁ = V₂/T₂ at constant pressure and fixed moles. Volume and temperature (in Kelvin!) are directly proportional."},
  {id:57,c:"g",q:"A gas at 27°C occupies 6.0 L. Volume at 327°C at constant P?",a:"T₁=300 K, T₂=600 K. V₂ = 6.0×(600/300) = 12.0 L. MUST convert to Kelvin first."},
  {id:58,c:"g",q:"State the Combined Gas Law.",a:"P₁V₁/T₁ = P₂V₂/T₂. Use when both P and T change. Always convert °C to Kelvin."},
  {id:59,c:"g",q:"Gas at 2.0 atm, 4.0 L, 200 K → 4.0 atm, 400 K. New volume?",a:"V₂=(P₁V₁T₂)/(T₁P₂)=(2.0×4.0×400)/(200×4.0)=3200/800=4.0 L. P and T both doubled → effects cancel."},
  {id:60,c:"g",q:"State the Ideal Gas Law and identify all variables.",a:"PV = nRT. P=pressure (atm), V=volume (L), n=moles, R=0.0821 atm·L/mol·K, T=temperature (Kelvin)."},
  {id:61,c:"g",q:"Calculate the volume of 2.00 mol gas at 1.00 atm and 300 K.",a:"V=nRT/P=(2.00×0.0821×300)/1.00=49.3 L."},
  {id:62,c:"g",q:"Calculate the volume of 0.250 mol O₂ at 2.00 atm and 350 K.",a:"V=nRT/P=(0.250×0.0821×350)/2.00=3.59 L."},
  {id:63,c:"g",q:"State Dalton's Law of Partial Pressures.",a:"P_total = P₁ + P₂ + P₃ + … Each gas in a mixture exerts its own pressure independently."},
  {id:64,c:"g",q:"Gas over water: P_total=760 mmHg, P_water=24 mmHg. P_dry gas?",a:"P_dry = 760−24 = 736 mmHg. Water evaporates and mixes with the gas, contributing its own partial pressure."},
  {id:65,c:"g",q:"Gas over water: P_total=752 mmHg, P_water=21 mmHg. P_dry gas?",a:"P_dry = 752−21 = 731 mmHg."},
  {id:66,c:"g",q:"Why must temperature be in Kelvin for all gas law calculations?",a:"Gas laws use temperature ratios. Celsius has an arbitrary zero; Kelvin is absolute (0 K = zero molecular motion). Using °C gives wrong or undefined answers."},
  {id:67,c:"g",q:"What does kinetic molecular theory say about gas particles?",a:"(1) Constant, rapid, random motion. (2) Negligible particle volume. (3) Elastic collisions — no energy lost. (4) Average KE ∝ absolute temperature."},
  {id:68,c:"g",q:"2H₂O₂→2H₂O+O₂: volume of O₂ from 0.500 mol H₂O₂ at 1.00 atm, 300 K?",a:"0.500 mol H₂O₂ × (1/2) = 0.250 mol O₂. V=(0.250×0.0821×300)/1.00=6.16 L."},
  {id:69,c:"g",q:"Mg+2HCl→MgCl₂+H₂: volume of H₂ from 1.22 g Mg at 1.00 atm, 298 K?",a:"mol Mg=1.22÷24.31=0.0502 mol. Ratio 1:1→0.0502 mol H₂. V=(0.0502×0.0821×298)/1.00=1.23 L."},

  // STATES OF MATTER (3)
  {id:70,c:"st",q:"What is vapor pressure?",a:"The pressure exerted by vapor in equilibrium above a liquid. Increases with temperature. A liquid boils when vapor pressure = external pressure."},
  {id:71,c:"st",q:"What is the difference between evaporation and boiling?",a:"Evaporation: surface phenomenon at any temperature, highest-energy molecules escape. Boiling: occurs throughout the liquid when vapor pressure = external pressure at a specific temperature."},
  {id:72,c:"st",q:"Why does liquid water boiling NOT break O–H bonds?",a:"Boiling only overcomes IMFs (hydrogen bonds) between molecules. O–H covalent bonds inside each molecule are much stronger and remain intact. Breaking them would decompose water."},

  // FREE RESPONSE WORKED EXAMPLES (7)
  {id:73,c:"fl",q:"Free response: Draw NH₃ Lewis structure and explain polarity.",a:"N in center, 3 single bonds to H, 1 lone pair on N. Polar: trigonal pyramidal shape is asymmetric. Three N–H bond dipoles don't cancel due to lone pair → net dipole → polar."},
  {id:74,c:"fl",q:"Free response: Why subtract water vapor pressure when collecting gas over water?",a:"Water vapor mixes with collected gas, contributing its own partial pressure. Dalton's Law: P_total=P_gas+P_water. To isolate: P_gas=P_total−P_water vapor."},
  {id:75,c:"fl",q:"Free response: Rank CH₄, HCl, H₂O by boiling point and justify.",a:"CH₄ < HCl < H₂O. CH₄=London dispersion (weakest). HCl=dipole–dipole. H₂O=hydrogen bonding (strongest). Stronger IMF → more energy to separate → higher BP."},
  {id:76,c:"fl",q:"Free response: Mg+2HCl→MgCl₂+H₂. Moles H₂ from 1.22 g Mg, then volume at 1.00 atm, 298 K.",a:"Step 1: 1.22÷24.31=0.0502 mol Mg. Step 2: 1:1 ratio→0.0502 mol H₂. Step 3: V=(0.0502×0.0821×298)/1.00=1.23 L."},
  {id:77,c:"fl",q:"Free response: Ca₃(PO₄)₂ — molar mass AND mass of Ca in 1.00 mol.",a:"MM: 3(40.08)+2(30.97)+8(16.00)=310.18 g/mol. Ca mass: 3×40.08=120.24 g of Ca in 1.00 mol."},
  {id:78,c:"fl",q:"Free response: 2H₂O₂→2H₂O+O₂. Volume of O₂ at 1.00 atm, 300 K from 0.500 mol H₂O₂.",a:"0.500×(1/2)=0.250 mol O₂. V=(0.250×0.0821×300)/1.00=6.16 L."},
  {id:79,c:"fl",q:"Free response: N₂+3H₂→2NH₃. Grams of NH₃ from 28.0 g N₂.",a:"28.0÷28.02=1.00 mol N₂. ×(2/1)=2.00 mol NH₃. ×17.03=34.1 g NH₃."},
];

const CAT_LABELS = {
  n: "Nomenclature",
  m: "Moles & mass",
  s: "Stoichiometry",
  b: "Bonding & shape",
  i: "IMF",
  g: "Gas laws",
  st: "States",
  fl: "Free response"
};
