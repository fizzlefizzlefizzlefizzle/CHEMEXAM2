// Quiz pool — MC generators and Fill generators
const QUIZ_MC_POOL = [
  ()=>{const c=R([{f:"N₂O₄",a:"Dinitrogen tetroxide",w:["Dinitrogen tetraoxide","Nitrogen(IV) oxide","Nitrogen oxide"],e:"Di=2N, tetra=4O. 'a' drops before oxide→tetroxide not tetraoxide. Tetraoxide is the classic trap."},
  {f:"N₂O",a:"Dinitrogen monoxide",w:["Dinitrogen dioxide","Nitrogen oxide","Nitrogen dioxide"],e:"Di=2N, mono=1O. Mono IS used for the second element."},
  {f:"P₂O₅",a:"Diphosphorus pentoxide",w:["Phosphorus pentoxide","Diphosphorus pentaoxide","Diphosphorus oxide"],e:"Di=2P, pent(a)=5O. 'a' drops before oxide→pentoxide."},
  {f:"SO₃",a:"Sulfur trioxide",w:["Disulfur trioxide","Monosulfur trioxide","Sulfur(III) oxide"],e:"No prefix on S (1 atom), tri=3O."},
  {f:"CO",a:"Carbon monoxide",w:["Carbon dioxide","Monocarbon oxide","Carbon oxide"],e:"No prefix on C (1 atom), mono=1O."},
  {f:"NO₂",a:"Nitrogen dioxide",w:["Nitrogen(II) oxide","Dinitrogen oxide","Mononitrogen dioxide"],e:"1N (no prefix), di=2O."}]);
  return{cat:"n",q:`Name this compound: ${c.f}`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{n:"Dinitrogen tetroxide",a:"N₂O₄",w:["NO₄","N₂O","N₄O₂"],e:"Di=2N, tetr(a)=4O→N₂O₄."},
  {n:"Diphosphorus pentoxide",a:"P₂O₅",w:["PO₅","P₂O₄","P₅O₂"],e:"Di=2P, pent(a)=5O→P₂O₅."},
  {n:"Sulfur trioxide",a:"SO₃",w:["S₃O","SO₂","S₂O₃"],e:"1S, tri=3O→SO₃."},
  {n:"Carbon monoxide",a:"CO",w:["CO₂","C₂O","CO₃"],e:"1C, mono=1O→CO."},
  {n:"Dinitrogen monoxide",a:"N₂O",w:["N₂O₂","NO","NO₂"],e:"Di=2N, mono=1O→N₂O."}]);
  return{cat:"n",q:`Formula for: ${c.n}`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{mass:36.0,sub:"H₂O",a:"2.00 mol",w:["0.500 mol","18.0 mol","36.0 mol"],e:"36.0÷18.02=2.00 mol."},
  {mass:44.0,sub:"CO₂ (MM=44.01)",a:"1.00 mol",w:["2.00 mol","0.500 mol","44.0 mol"],e:"44.0÷44.01≈1.00 mol."},
  {mass:28.0,sub:"N₂ (MM=28.02)",a:"1.00 mol",w:["2.00 mol","14.0 mol","0.500 mol"],e:"28.0÷28.02≈1.00 mol."},
  {mass:80.0,sub:"NaOH (MM=40.00)",a:"2.00 mol",w:["1.00 mol","0.500 mol","80.0 mol"],e:"80.0÷40.00=2.00 mol."},
  {mass:9.21,sub:"N₂O₄ (MM=92.02)",a:"0.100 mol",w:["0.200 mol","1.00 mol","0.0500 mol"],e:"9.21÷92.02=0.100 mol."},
  {mass:1.22,sub:"Mg (MM=24.31)",a:"0.0502 mol",w:["0.100 mol","24.3 mol","0.200 mol"],e:"1.22÷24.31=0.0502 mol."}]);
  return{cat:"m",q:`Moles in ${c.mass} g of ${c.sub}?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{sub:"Ca(NO₃)₂",a:"164.10 g/mol",w:["204.18 g/mol","102.09 g/mol","116.10 g/mol"],e:"40.08+2(14.01+3×16.00)=40.08+124.02=164.10."},
  {sub:"CCl₄",a:"153.81 g/mol",w:["47.46 g/mol","141.80 g/mol","165.82 g/mol"],e:"12.01+4(35.45)=153.81."},
  {sub:"C₆H₁₂O₆",a:"180.18 g/mol",w:["96.00 g/mol","168.00 g/mol","29.02 g/mol"],e:"6(12.01)+12(1.008)+6(16.00)=180.18."},
  {sub:"N₂O₄",a:"92.02 g/mol",w:["60.02 g/mol","108.02 g/mol","76.02 g/mol"],e:"2(14.01)+4(16.00)=92.02."},
  {sub:"Ca₃(PO₄)₂",a:"310.18 g/mol",w:["182.18 g/mol","278.18 g/mol","294.18 g/mol"],e:"3(40.08)+2(30.97)+8(16.00)=310.18."}]);
  return{cat:"m",q:`Molar mass of ${c.sub}?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{act:12.0,thy:15.0,a:"80.0%",w:["27.0%","125%","3.0%"],e:"(12.0/15.0)×100=80.0%."},
  {act:14.5,thy:18.0,a:"80.6%",w:["55.6%","124%","3.5%"],e:"(14.5/18.0)×100=80.6%."},
  {act:9.0,thy:12.0,a:"75.0%",w:["33.3%","133%","25.0%"],e:"(9.0/12.0)×100=75.0%."},
  {act:22.5,thy:30.0,a:"75.0%",w:["57.1%","133%","7.5%"],e:"(22.5/30.0)×100=75.0%."}]);
  return{cat:"s",q:`Theoretical=${c.thy}g, actual=${c.act}g. % yield?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{q:"Molecular shape of NH₃?",a:"Trigonal pyramidal",w:["Tetrahedral","Trigonal planar","Linear"],e:"4 groups (3 bonds+1 LP)→tetrahedral geometry; shape=trigonal pyramidal."},
  {q:"Molecular shape of H₂O?",a:"Bent (angular)",w:["Linear","Trigonal planar","Tetrahedral"],e:"4 groups (2 bonds+2 LP)→tetrahedral geometry; shape=bent."},
  {q:"Molecular shape of CO₂?",a:"Linear",w:["Bent","Trigonal planar","Tetrahedral"],e:"2 groups (2 double bonds, 0 LP)→linear, 180°."},
  {q:"Molecular shape of BF₃?",a:"Trigonal planar",w:["Trigonal pyramidal","Tetrahedral","Linear"],e:"3 groups (3 bonds, 0 LP)→trigonal planar, 120°."},
  {q:"Molecular shape of CH₄?",a:"Tetrahedral",w:["Trigonal pyramidal","Bent","Linear"],e:"4 groups (4 bonds, 0 LP)→perfect tetrahedral, 109.5°."},
  {q:"Electron geometry of NH₃?",a:"Tetrahedral",w:["Trigonal pyramidal","Trigonal planar","Linear"],e:"Electron geometry counts lone pairs. NH₃ has 4 groups→tetrahedral. Molecular shape is pyramidal."}]);
  return{cat:"b",q:c.q,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{m:"CO₂",a:"London dispersion",w:["Hydrogen bonding","Dipole–dipole","Ionic"],e:"CO₂ is nonpolar (linear). No dipole, no H on N/O/F→London dispersion only."},
  {m:"HCl",a:"Dipole–dipole",w:["Hydrogen bonding","London dispersion only","Ionic"],e:"HCl is polar (ΔEN=0.9). H bonded to Cl, not N/O/F→dipole–dipole."},
  {m:"H₂O",a:"Hydrogen bonding",w:["Dipole–dipole","London dispersion","Ionic"],e:"H bonded to O (one of N/O/F)→hydrogen bonding."},
  {m:"NH₃",a:"Hydrogen bonding",w:["Dipole–dipole","London dispersion","Ionic"],e:"H bonded to N (one of N/O/F)→hydrogen bonding."},
  {m:"CH₄",a:"London dispersion",w:["Dipole–dipole","Hydrogen bonding","Ionic"],e:"CH₄ is nonpolar, H bonded to C (not N/O/F)→London dispersion only."},
  {m:"Cl₂",a:"London dispersion",w:["Dipole–dipole","Hydrogen bonding","Ionic"],e:"Cl₂ is nonpolar diatomic→London dispersion only."}]);
  return{cat:"i",q:`Dominant IMF between ${c.m} molecules?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{p1:1.5,v1:4.0,p2:3.0,a:"2.0 L",w:["6.0 L","8.0 L","1.5 L"],e:"V₂=(1.5×4.0)/3.0=2.0 L. Pressure doubled→volume halved."},
  {p1:2.0,v1:6.0,p2:4.0,a:"3.0 L",w:["12.0 L","1.5 L","8.0 L"],e:"V₂=(2.0×6.0)/4.0=3.0 L."},
  {p1:1.0,v1:8.0,p2:2.0,a:"4.0 L",w:["16.0 L","2.0 L","6.0 L"],e:"V₂=(1.0×8.0)/2.0=4.0 L."},
  {p1:3.0,v1:2.0,p2:1.0,a:"6.0 L",w:["0.67 L","9.0 L","4.0 L"],e:"V₂=(3.0×2.0)/1.0=6.0 L. Pressure decreased→volume increases."},
  {p1:4.0,v1:3.0,p2:2.0,a:"6.0 L",w:["1.5 L","12.0 L","3.0 L"],e:"V₂=(4.0×3.0)/2.0=6.0 L."}]);
  return{cat:"g",q:`Boyle's Law: ${c.v1} L at ${c.p1} atm → volume at ${c.p2} atm?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{t1:27,v1:6.0,t2:327,a:"12.0 L",w:["3.0 L","72.7 L","0.5 L"],e:"T₁=300K, T₂=600K. V₂=6.0×(600/300)=12.0 L."},
  {t1:0,v1:4.0,t2:273,a:"8.0 L",w:["2.0 L","4.0 L","16.0 L"],e:"T₁=273K, T₂=546K. V₂=4.0×(546/273)=8.0 L."},
  {t1:27,v1:3.0,t2:127,a:"4.0 L",w:["1.5 L","6.0 L","9.0 L"],e:"T₁=300K, T₂=400K. V₂=3.0×(400/300)=4.0 L."},
  {t1:100,v1:5.0,t2:200,a:"6.34 L",w:["10.0 L","2.5 L","3.15 L"],e:"T₁=373K, T₂=473K. V₂=5.0×(473/373)=6.34 L."},
  {t1:0,v1:2.0,t2:546,a:"6.0 L",w:["4.0 L","1.0 L","12.0 L"],e:"T₁=273K, T₂=819K. V₂=2.0×(819/273)=6.0 L."}]);
  return{cat:"g",q:`Charles's Law: ${c.v1} L at ${c.t1}°C → volume at ${c.t2}°C?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{pt:760,pw:24,a:"736 mmHg",w:["760 mmHg","784 mmHg","24 mmHg"],e:"736=760−24."},
  {pt:752,pw:21,a:"731 mmHg",w:["752 mmHg","773 mmHg","21 mmHg"],e:"731=752−21."},
  {pt:740,pw:18,a:"722 mmHg",w:["740 mmHg","758 mmHg","18 mmHg"],e:"722=740−18."},
  {pt:780,pw:28,a:"752 mmHg",w:["780 mmHg","808 mmHg","28 mmHg"],e:"752=780−28."},
  {pt:755,pw:19,a:"736 mmHg",w:["755 mmHg","774 mmHg","19 mmHg"],e:"736=755−19."}]);
  return{cat:"g",q:`Gas over water: P_total=${c.pt} mmHg, P_water=${c.pw} mmHg. Dry gas pressure?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{n:2.00,p:1.00,T:300,a:"49.3 L",w:["24.6 L","12.3 L","0.0821 L"],e:"V=(2.00×0.0821×300)/1.00=49.3 L."},
  {n:0.250,p:2.00,T:350,a:"3.59 L",w:["7.19 L","1.80 L","0.902 L"],e:"V=(0.250×0.0821×350)/2.00=3.59 L."},
  {n:1.00,p:1.00,T:273,a:"22.4 L",w:["11.2 L","44.8 L","0.0821 L"],e:"V=(1.00×0.0821×273)/1.00=22.4 L (molar volume at STP)."},
  {n:0.500,p:1.00,T:300,a:"12.3 L",w:["24.6 L","6.16 L","0.0821 L"],e:"V=(0.500×0.0821×300)/1.00=12.3 L."},
  {n:0.125,p:1.00,T:300,a:"3.08 L",w:["6.16 L","1.54 L","12.3 L"],e:"V=(0.125×0.0821×300)/1.00=3.08 L."}]);
  return{cat:"g",q:`Ideal gas: n=${c.n} mol, P=${c.p} atm, T=${c.T} K. Volume?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{p1:2.0,v1:4.0,T1:200,p2:4.0,T2:400,a:"4.0 L",w:["8.0 L","2.0 L","1.0 L"],e:"V₂=(2.0×4.0×400)/(200×4.0)=4.0 L. P and T both doubled→cancel."},
  {p1:1.0,v1:3.0,T1:300,p2:2.0,T2:600,a:"3.0 L",w:["6.0 L","1.5 L","12.0 L"],e:"V₂=(1.0×3.0×600)/(300×2.0)=3.0 L."},
  {p1:1.0,v1:6.0,T1:300,p2:3.0,T2:300,a:"2.0 L",w:["18.0 L","1.0 L","6.0 L"],e:"V₂=(1.0×6.0×300)/(300×3.0)=2.0 L. T constant→Boyle's Law."},
  {p1:2.0,v1:5.0,T1:250,p2:1.0,T2:500,a:"20.0 L",w:["10.0 L","5.0 L","2.5 L"],e:"V₂=(2.0×5.0×500)/(250×1.0)=20.0 L."}]);
  return{cat:"g",q:`Combined gas law: P₁=${c.p1}atm, V₁=${c.v1}L, T₁=${c.T1}K → P₂=${c.p2}atm, T₂=${c.T2}K. V₂?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{q:"H–Cl ΔEN=0.9. Bond type?",a:"Polar covalent",w:["Nonpolar covalent","Ionic","Coordinate covalent"],e:"0.9 is between 0.4 and 1.5→polar covalent."},
  {q:"C–H ΔEN=0.4. Bond type?",a:"Nonpolar covalent",w:["Polar covalent","Ionic","Coordinate covalent"],e:"≤0.4→nonpolar covalent."},
  {q:"Na–Cl ΔEN≈2.1. Bond type?",a:"Ionic",w:["Polar covalent","Nonpolar covalent","Coordinate covalent"],e:"≥2.0→ionic."},
  {q:"N–H ΔEN=0.9. Bond type?",a:"Polar covalent",w:["Nonpolar covalent","Ionic","Hydrogen bond"],e:"0.9 between 0.4 and 1.5→polar covalent."},
  {q:"O–H ΔEN=1.4. Bond type?",a:"Polar covalent",w:["Nonpolar covalent","Ionic","Coordinate covalent"],e:"1.4 between 0.4 and 1.5→polar covalent."},
  {q:"F–F ΔEN=0.0. Bond type?",a:"Nonpolar covalent",w:["Polar covalent","Ionic","Coordinate covalent"],e:"Same element→ΔEN=0→nonpolar covalent."}]);
  return{cat:"b",q:c.q,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{q:"Which is nonpolar?",a:"CCl₄",w:["NH₃","HCl","H₂O"],e:"CCl₄: perfect tetrahedral→dipoles cancel→nonpolar."},
  {q:"Which can H-bond with itself?",a:"NH₃",w:["CO₂","Cl₂","CH₄"],e:"NH₃: H bonded to N (one of N/O/F)→H-bonding."},
  {q:"Which has the highest BP?",a:"H₂O",w:["CH₄","CO₂","Cl₂"],e:"H₂O: hydrogen bonding→highest BP."},
  {q:"Doubling mol CaCO₃ in CaCO₃→CaO+CO₂:",a:"Double moles CO₂",w:["Halve CO₂","Triple CO₂","Leave CO₂ unchanged"],e:"1:1 ratio→double reactant=double product."},
  {q:"To balance equations you can change:",a:"Coefficients only",w:["Subscripts only","Both","Neither"],e:"Subscripts change substance identity. Only coefficients can be adjusted."},
  {q:"Actual yield of a reaction:",a:"Must be measured in lab",w:["Equals theoretical yield","Calculated from equation","Always exceeds theoretical"],e:"Actual yield is experimental. Always ≤ theoretical."}]);
  return{cat:"s",q:c.q,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{q:"When liquid water boils:",a:"IMFs between molecules are overcome",w:["O–H covalent bonds break","Atoms convert to ions","Water decomposes to H₂ and O₂"],e:"Boiling=phase change=overcoming IMFs (H-bonds between molecules). O–H bonds inside molecules are NOT broken."},
  {q:"A liquid boils when:",a:"Vapor pressure=external pressure",w:["Temperature reaches 100°C","Vapor pressure=zero","All H-bonds break"],e:"100°C only at 1 atm. General definition: vapor pressure=external pressure."},
  {q:"Evaporation cools liquid because:",a:"Highest-energy molecules escape",w:["Lowest-energy molecules escape","External pressure increases","Heat flows in"],e:"Fastest molecules escape→average KE of remaining liquid decreases→temperature drops."},
  {q:"KMT says gas particles:",a:"Are in constant, rapid, random motion",w:["Packed in fixed positions","Cannot move past each other","Held by strong attractions"],e:"KMT: constant random motion, negligible volume, elastic collisions, KE∝temperature."}]);
  return{cat:"st",q:c.q,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{rxn:"N₂+3H₂→2NH₃",mass:28.0,a:"34.1 g",w:["17.0 g","68.2 g","14.0 g"],e:"28.0÷28.02=1.00 mol N₂×(2/1)=2.00 mol NH₃×17.03=34.1 g."},
  {rxn:"2H₂+O₂→2H₂O",mass:4.0,a:"35.7 g",w:["71.4 g","18.0 g","4.0 g"],e:"4.0÷2.016=1.98 mol H₂×1=1.98 mol H₂O×18.02=35.7 g."},
  {rxn:"CaCO₃→CaO+CO₂",mass:50.0,a:"22.0 g",w:["44.0 g","11.0 g","50.0 g"],e:"50.0÷100.09=0.500 mol CaCO₃×1=0.500 mol CO₂×44.01=22.0 g."}]);
  return{cat:"s",q:`${c.rxn}: grams of product from ${c.mass}g reactant?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{sub:"3.0 mol H₂SO₄",el:"O",n:4,a:"12 mol",w:["7 mol","4 mol","3 mol"],e:"4 O per formula unit. 3.0×4=12 mol O."},
  {sub:"2.0 mol Ca(NO₃)₂",el:"N",n:2,a:"4.0 mol",w:["2.0 mol","6.0 mol","1.0 mol"],e:"2 N per formula unit. 2.0×2=4.0 mol N."},
  {sub:"1.0 mol Ca₃(PO₄)₂",el:"Ca",n:3,a:"3.0 mol",w:["2.0 mol","1.0 mol","6.0 mol"],e:"3 Ca per formula unit. 1.0×3=3.0 mol Ca."},
  {sub:"0.500 mol H₂O",el:"H",n:2,a:"1.00 mol",w:["0.500 mol","2.00 mol","4.00 mol"],e:"2 H per formula unit. 0.500×2=1.00 mol H."},
  {sub:"2.0 mol CO₂",el:"O",n:2,a:"4.0 mol",w:["2.0 mol","6.0 mol","1.0 mol"],e:"2 O per formula unit. 2.0×2=4.0 mol O."}]);
  return{cat:"m",q:`Moles of ${c.el} atoms in ${c.sub}?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{mol:0.500,sub:"CO₂",a:"3.011 × 10²³",w:["6.022 × 10²³","1.204 × 10²⁴","1.50 × 10²³"],e:"0.500×6.022×10²³=3.011×10²³."},
  {mol:2.0,sub:"H₂O",a:"1.204 × 10²⁴",w:["6.022 × 10²³","3.011 × 10²³","2.408 × 10²⁴"],e:"2.0×6.022×10²³=1.204×10²⁴."},
  {mol:0.100,sub:"N₂O₄",a:"6.022 × 10²²",w:["6.022 × 10²³","3.011 × 10²²","1.204 × 10²³"],e:"0.100×6.022×10²³=6.022×10²²."},
  {mol:3.0,sub:"NaCl",a:"1.807 × 10²⁴",w:["6.022 × 10²³","3.011 × 10²³","6.022 × 10²⁴"],e:"3.0×6.022×10²³=1.807×10²⁴."}]);
  return{cat:"m",q:`Molecules in ${c.mol} mol of ${c.sub}?`,a:c.a,w:c.w,e:c.e};},

  ()=>{const c=R([{q:"Coordinate covalent bond differs because:",a:"Both electrons come from same atom",w:["Involves complete electron transfer","It is ionic","Cannot be broken"],e:"Normal: each atom gives 1e⁻. Coordinate: one atom donates both. Once formed, identical to regular covalent bond."},
  {q:"Electronegativity increases:",a:"Up and to the right (toward F)",w:["Down a group","To the left","Toward lower-left"],e:"F (top-right) has highest EN=4.0."},
  {q:"One mole contains:",a:"6.022 × 10²³ formula units",w:["1 gram","12 particles","Number=atomic number"],e:"Definition: 6.022×10²³ particles per mole."},
  {q:"Carbon typically forms ___ covalent bonds:",a:"4",w:["2","3","1"],e:"4 valence electrons→forms 4 bonds to complete octet."},
  {q:"Which molecule has a triple bond?",a:"N₂",w:["O₂","H₂","Cl₂"],e:":N≡N: — 3 shared pairs. O₂ double bond. H₂/Cl₂ single bonds."}]);
  return{cat:"b",q:c.q,a:c.a,w:c.w,e:c.e};},
];

const QUIZ_FILL_POOL = [
  ()=>R([{cat:"m",q:"One mole of any substance contains ___ particles.",a:"6.022 × 10²³",h:"Avogadro's number",e:"Definition of a mole. 6.022×10²³ is Avogadro's number. Applies to any substance."},
  {cat:"m",q:"To convert grams to moles, divide mass by ___.",a:"molar mass",h:"The denominator in moles=mass/???",e:"Molar mass (g/mol) bridges grams and moles. Sum of all atomic masses in the formula."},
  {cat:"m",q:"To find number of molecules, multiply moles by ___.",a:"6.022 × 10²³",h:"Avogadro's number",e:"Molecules=moles×6.022×10²³."}]),
  ()=>R([{cat:"g",q:"In PV=nRT, R = ___ atm·L/mol·K.",a:"0.0821",h:"Given on the equation sheet",e:"R=0.0821 atm·L/mol·K. P must be in atm, V in L, T in Kelvin."},
  {cat:"g",q:"To convert Celsius to Kelvin, add ___ to the Celsius temperature.",a:"273.15",h:"T(K)=T(°C)+273.15",e:"0°C=273.15 K. Always required for gas law calculations."},
  {cat:"g",q:"Boyle's Law applies at constant ___.",a:"temperature",h:"P₁V₁=P₂V₂ — what's fixed?",e:"Boyle: constant T. Charles: constant P. Combined: neither."},
  {cat:"g",q:"Charles's Law applies at constant ___.",a:"pressure",h:"V₁/T₁=V₂/T₂ — what's fixed?",e:"When only V and T change at constant P, use Charles's Law."},
  {cat:"g",q:"Dalton's Law: P_total equals the ___ of all partial pressures.",a:"sum",h:"P_total=P₁+P₂+P₃+...",e:"Over water: P_dry=P_total−P_water vapor."}]),
  ()=>R([{cat:"s",q:"% yield=(actual yield÷___ yield)×100.",a:"theoretical",h:"The calculated maximum yield",e:"Theoretical=calculated from stoich. Actual=measured. % yield ≤ 100% always."},
  {cat:"s",q:"In stoichiometry, the mole ratio comes from the ___ in the balanced equation.",a:"coefficients",h:"The big numbers in front of each formula",e:"Coefficients ARE the mole ratio."},
  {cat:"s",q:"To balance equations you may only change ___, not subscripts.",a:"coefficients",h:"Numbers in front of formulas",e:"Subscripts define the substance. Only coefficients can be adjusted."},
  {cat:"s",q:"Stoich road map: grams A → moles A → moles B → ___.",a:"grams B",h:"Final conversion step",e:"g÷MM=mol→mol×ratio=mol B→mol×MM=g B."}]),
  ()=>R([{cat:"i",q:"Hydrogen bonding requires H bonded to N, ___, or F.",a:"O",h:"Three specific electronegative elements",e:"N, O, F are small and highly electronegative."},
  {cat:"i",q:"Weakest to strongest IMF: London dispersion, dipole–dipole, ___.",a:"hydrogen bonding",h:"The one requiring H bonded to N, O, or F",e:"Stronger IMF=higher BP."},
  {cat:"i",q:"A stronger intermolecular force leads to a ___ boiling point.",a:"higher",h:"More energy needed to separate molecules",e:"IMFs hold molecules together. Stronger=harder to separate=higher BP."},
  {cat:"i",q:"CO₂ has polar bonds but is ___ overall due to its linear shape.",a:"nonpolar",h:"Symmetric shape cancels dipoles",e:"Linear→180°→two equal opposite dipoles cancel→nonpolar."}]),
  ()=>R([{cat:"b",q:"ΔEN between 0.4 and 1.5→bond is ___ covalent.",a:"polar",h:"Three categories: nonpolar(≤0.4), polar(0.4–1.5), ionic(≥2.0)",e:"Exam sheet says >0.4 and <1.5: polar covalent."},
  {cat:"b",q:"ΔEN ≤ 0.4→bond is ___ covalent.",a:"nonpolar",h:"Electrons shared equally",e:"Examples: H–H(0.0), C–H(0.4), Cl–Cl(0.0)."},
  {cat:"b",q:"In a coordinate covalent bond, ___ electrons come from the same atom.",a:"both",h:"Unlike regular bonds (one from each)",e:"Example: NH₃ lone pair donates both e⁻ to H⁺."},
  {cat:"b",q:"NH₃ has ___ bonding pairs and 1 lone pair on nitrogen.",a:"3",h:"N has 5 valence electrons; 3 used for bonds",e:"N: 5 valence e⁻. 3 bonds=3e⁻. Remaining 2=1 lone pair."}]),
  ()=>R([{cat:"n",q:"The prefix for 4 atoms is ___.",a:"tetra-",h:"Mono(1), di(2), tri(3), ___",e:"Mono(1), di(2), tri(3), tetra(4), penta(5). Trailing vowel drops before oxide."},
  {cat:"n",q:"'Mono-' is omitted for the ___ element in covalent naming.",a:"first",h:"But NOT for the second element",e:"CO=carbon monoxide (not monocarbon monoxide). Mono stays on oxygen."},
  {cat:"n",q:"'Penta' drops its trailing 'a' before 'oxide' → ___ oxide.",a:"pentoxide",h:"Penta+oxide=?",e:"Vowel-dropping rule: penta+oxide=pentoxide, tetra+oxide=tetroxide."}]),
  ()=>R([{cat:"g",q:"Gas collected over water: P_dry=P_total ___ P_water.",a:"minus",h:"Dalton's Law rearranged",e:"P_total=P_gas+P_water→P_gas=P_total−P_water."},
  {cat:"g",q:"KMT says gas particles move in constant, rapid, ___ motion.",a:"random",h:"No preferred direction",e:"Random motion, negligible volume, elastic collisions, avg KE∝T."},
  {cat:"st",q:"When water boils, the ___ between molecules are overcome, not the covalent bonds.",a:"intermolecular forces",h:"IMFs vs. intramolecular bonds",e:"Boiling breaks H-bonds between molecules. O–H bonds inside molecules are NOT broken."}]),
  ()=>R([{cat:"s",q:"N₂+3H₂→2NH₃: mol N₂ to mol NH₃ ratio is ___.",a:"1:2 (or 2/1)",h:"Read the coefficients",e:"Coefficients=mole ratio. 1 N₂:2 NH₃. Multiply mol N₂×(2/1)=mol NH₃."},
  {cat:"m",q:"Mass of Ca in 1.00 mol Ca₃(PO₄)₂=___ g.",a:"120.24",h:"3 Ca atoms×40.08 g/mol",e:"3×40.08=120.24 g."},
  {cat:"m",q:"Molar mass of Ca₃(PO₄)₂=___ g/mol.",a:"310.18",h:"3Ca+2P+8O",e:"3(40.08)+2(30.97)+8(16.00)=310.18."}]),
  ()=>R([{cat:"b",q:"Carbon typically forms ___ covalent bonds.",a:"4",h:"4 valence electrons",e:"C needs 4 bonds to reach octet."},
  {cat:"b",q:"N₂ contains a ___ bond.",a:"triple",h:"Each N has 5 valence electrons",e:":N≡N: — 3 shared pairs. Very strong bond."},
  {cat:"i",q:"NH₃ has a higher BP than CH₄ because NH₃ has ___ while CH₄ has only London dispersion.",a:"hydrogen bonding",h:"H bonded to N, O, or F",e:"NH₃ BP=−33°C, CH₄ BP=−161°C. H-bonding far stronger than LD."}]),
  ()=>R([{cat:"s",q:"2H₂O₂→2H₂O+O₂: 0.500 mol H₂O₂ produces ___ mol O₂.",a:"0.250",h:"2:1 ratio of H₂O₂:O₂",e:"0.500×(1/2)=0.250 mol O₂."},
  {cat:"g",q:"Volume of 0.250 mol O₂ at 1.00 atm, 300 K=___ L.",a:"6.16",h:"V=(0.250×0.0821×300)/1.00",e:"6.158≈6.16 L."},
  {cat:"s",q:"Mg+2HCl→MgCl₂+H₂: 0.0502 mol Mg produces ___ mol H₂.",a:"0.0502",h:"1:1 mole ratio",e:"0.0502 mol Mg gives 0.0502 mol H₂."}]),
];

function R(a){return a[Math.floor(Math.random()*a.length)];}
