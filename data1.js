/* Sommelier Atlas study content, part 1.
   Scope follows the CMS-Americas Introductory & Certified Theory curriculum guide (8.2023).
   S(id, name, group, [lon,lat] or null, zoom, climate, {cert, pl, I, C, t, q})
   I / C = study rows [label, text] at Introductory / Certified level
   t = terms [term, definition, "C"?]   q = questions [question, correct, wrong, wrong, wrong, "C"?] */
window.ATLAS = { stops: [] };
function S(id, n, g, co, z, cl, d) { window.ATLAS.stops.push(Object.assign({ id: id, n: n, g: g, co: co, z: z, cl: cl, I: [], C: [], t: [], q: [] }, d)); }

/* ───────── Foundations ───────── */
S("viti", "Grape Growing", "Foundations", null, 0, "Viticulture", {
  I: [
    ["Definition", "Viticulture is everything that happens in the vineyard: what nature provides plus the grower's decisions, all of which shape the final flavor of the wine."],
    ["Climate", "Types: continental, maritime, Mediterranean, desert/arid. Descriptors: cool, moderate, warm, hot. Climate is the long-term pattern. Weather is what one year delivers."],
    ["Latitude", "Most wine regions sit between 30° and 50° in each hemisphere. Regions outside that band exist thanks to climate moderators."],
    ["Moderators", "Altitude, diurnal shift, sunshine hours, bodies of water, wind, rain shadow."],
    ["Soil", "Soils give drainage or water retention, sun reflection, nutrients, temperature regulation and pest resistance. Know these matches: Champagne chalk, Chablis limestone, Côte d'Or limestone and clay, Haut-Médoc gravel, Pomerol clay, St-Émilion limestone and clay, Châteauneuf-du-Pape galets, Mosel slate."],
    ["The vine", "Genus Vitis, species vinifera: native to the Mediterranean, Europe and southwest Asia, with about 10,000 varieties. Varieties are chosen by wine law, climate fit, soil fit and marketability."],
    ["Vineyard work", "Training, canopy management, irrigation, yield control and green harvest. Botrytis cinerea is a mold that can be a good thing. Phylloxera is a vine louse that wrecked France in the mid-1800s; resistant American rootstock stopped it."],
    ["Yield and harvest", "Yield is measured in tons per acre or hectoliters per hectare. Sugar ripeness is measured in Brix. Picking is by hand or machine, timed by weather, style, law and producer goals."],
    ["Terroir", "Goût de terroir, the taste of earth: every environmental influence on a vine that makes a wine taste of its place."]
  ],
  C: [
    ["Farming approaches", "Organic, biodynamic, sustainable, dry farming."],
    ["Climate scale", "Macroclimate is a region, mesoclimate is a vineyard, microclimate is the space around a single vine. Degree-days total the heat above 50°F through the growing season."],
    ["Vine cycle", "Dormancy, bud break, flowering, fruit set, veraison, hangtime, maturity, harvest, pruning."],
    ["Vine parts and terms", "Rootstock, trunk, cordons, shoots and canes, clusters, canopy. Hybrid (two species), crossing (two varieties of one species), clone, mutation. Vitis labrusca examples: Concord, Catawba."],
    ["Training and aspect", "Two systems to know: head training (gobelet or bush vines) and cordon training on supports. Slope and aspect decide how much heat and light a site receives."],
    ["Named moderators", "San Pablo Bay, Benguela Current, Humboldt Current. Ranges that cast rain shadows: Vosges, Cascades, Andes."],
    ["Ripeness and disease", "Phenolic ripeness versus sugar ripeness. Night harvests. Vinifera is grafted onto American rootstock against phylloxera. Pierce's disease is another threat."]
  ],
  t: [
    ["Terroir", "The full set of environmental influences that give a wine its sense of place"],
    ["Diurnal shift", "The swing between daytime and nighttime temperature"],
    ["Rain shadow", "A dry zone on the sheltered side of a mountain range"],
    ["Green harvest", "Dropping unripe clusters to control yield and improve quality"],
    ["Brix", "A scale for measuring sugar in grapes"],
    ["Phylloxera", "A microscopic louse that attacks vine roots"],
    ["Veraison", "The start of ripening, when grapes soften and change color", "C"],
    ["Mesoclimate", "The climate of a single vineyard", "C"],
    ["Crossing", "A new variety bred from two varieties of the same species", "C"],
    ["Hybrid", "A vine bred from two different species", "C"]
  ],
  q: [
    ["Most of the world's wine regions lie between which latitudes?", "30° and 50°", "10° and 30°", "20° and 40°", "45° and 65°"],
    ["Which soil is the Mosel known for?", "Slate", "Chalk", "Gravel", "Galets"],
    ["Which soil is the Haut-Médoc known for?", "Gravel", "Slate", "Granite", "Chalk"],
    ["What is phylloxera?", "A louse that attacks vine roots", "A mold that shrivels grapes", "A spring frost event", "A leaf virus spread by pruning"],
    ["What stopped the spread of phylloxera?", "Grafting onto American rootstock", "Spraying copper sulfate", "Planting only on chalk", "Harvesting earlier"],
    ["Brix is a measurement of what?", "Sugar in the grapes", "Acid in the must", "Tannin in the skins", "Alcohol in the wine"],
    ["Botrytis cinerea is best described as:", "A mold that can help make sweet wine", "A root louse", "A vine training system", "A yeast used for fermentation"],
    ["Which of these is a climate moderator?", "A nearby body of water", "The grape variety", "The barrel size", "The vintage date"],
    ["A mesoclimate is the climate of:", "A vineyard", "A whole region", "A single vine", "A country", "C"],
    ["Veraison is the moment when:", "Grapes begin to ripen and change color", "Buds first open", "Flowers become berries", "Canes are cut back", "C"],
    ["Gobelet is an example of:", "Head training", "Cordon training", "Drip irrigation", "Green harvest", "C"],
    ["Concord belongs to which species?", "Vitis labrusca", "Vitis vinifera", "Vitis riparia", "Vitis berlandieri", "C"],
    ["Degree-days count heat above which threshold?", "50°F", "32°F", "40°F", "65°F", "C"]
  ]
});

S("vini", "Winemaking", "Foundations", null, 0, "Vinification", {
  I: [
    ["Definition", "Vinification covers every decision in the winery from harvest to bottling."],
    ["White wine", "Harvest, sort, destem, crush, press, ferment, fine or filter, bottle. Whites are pressed before fermentation."],
    ["Red wine", "Crush, macerate, ferment on the skins, press, age, fine or filter, bottle, bottle age. Reds are pressed after fermentation."],
    ["Rosé", "Red grapes are crushed, given a short skin maceration, then pressed and fermented like a white."],
    ["Fermentation", "Sugar + yeast → alcohol, CO₂, heat, aromas and flavors."],
    ["Vessels", "Wood, stainless steel or concrete. Size, shape (oval, round, egg), oxygen permeability and temperature control all matter."],
    ["Terms", "Must, chaptalization, acidification, water addition, lees, autolysis, malolactic fermentation, carbonic maceration."],
    ["Decisions", "Temperature control, oxygen management, and extraction through punch downs, pump overs, maceration time and fermentation temperature. Fining and filtration both clarify, by different means."],
    ["Packaging", "Bottles, kegs, boxes. Closures: cork, composites, screw cap (Stelvin), glass stopper (Vinolok)."]
  ],
  C: [
    ["Yeast", "Saccharomyces cerevisiae is the species that ferments wine."],
    ["Barrel sizes", "Barrique 225 L. Puncheon 300 L. Demi-muid 600 L. Foudre or botti 1,000 L and up. Smaller and newer barrels give more flavor. Botti are typical of Piedmont; barriques of Rioja."],
    ["Other woods", "Beyond oak: acacia, cherry, chestnut."],
    ["Rosé methods", "Maceration, blending (often for sparkling), and saignée, the bleeding of juice from a red ferment."],
    ["Cause and effect", "Skin contact changes color, extraction, pH and texture. Bâtonnage adds weight and texture. Whole-cluster, stem inclusion and whole-berry ferments each read differently in the glass."],
    ["Oxygen", "Reductive winemaking shields the wine from oxygen. Oxidative winemaking invites it."],
    ["Before bottling", "Cold stabilization, fining agents, sulfur additions (free versus bound)."]
  ],
  t: [
    ["Must", "Unfermented grape juice, with or without skins and seeds"],
    ["Chaptalization", "Adding sugar to must to raise the final alcohol"],
    ["Lees", "Spent yeast cells that settle after fermentation"],
    ["Autolysis", "The breakdown of dead yeast cells, giving bready flavors"],
    ["Malolactic fermentation", "Conversion of sharp malic acid into softer lactic acid"],
    ["Carbonic maceration", "Fermentation that begins inside whole, uncrushed berries under CO₂"],
    ["Bâtonnage", "Stirring the lees", "C"],
    ["Saignée", "Bleeding off juice from a red wine ferment to make rosé", "C"],
    ["Barrique", "A 225-liter barrel", "C"]
  ],
  q: [
    ["In red winemaking, when does pressing happen?", "After fermentation", "Before fermentation", "Before crushing", "After bottling"],
    ["Alcoholic fermentation turns sugar into alcohol and what gas?", "Carbon dioxide", "Oxygen", "Nitrogen", "Sulfur dioxide"],
    ["Chaptalization is the addition of:", "Sugar", "Acid", "Water", "Tannin"],
    ["Malolactic fermentation makes a wine taste:", "Softer and rounder", "Sweeter", "More tannic", "More alcoholic"],
    ["Stelvin is a brand of:", "Screw cap", "Glass stopper", "Composite cork", "Wine keg"],
    ["Punch downs and pump overs are used to manage:", "Extraction", "Filtration", "Chaptalization", "Riddling"],
    ["How does rosé usually get its color?", "A short maceration on red grape skins", "Long aging in new oak", "Adding lees", "Malolactic fermentation"],
    ["How large is a barrique?", "225 liters", "300 liters", "600 liters", "1,000 liters", "C"],
    ["Which species of yeast ferments wine?", "Saccharomyces cerevisiae", "Aspergillus oryzae", "Botrytis cinerea", "Brettanomyces bruxellensis", "C"],
    ["A demi-muid holds about:", "600 liters", "225 liters", "300 liters", "2,000 liters", "C"],
    ["Bâtonnage mainly adds:", "Weight and texture", "Color", "Acidity", "Carbonation", "C"],
    ["Large botti are most associated with:", "Piedmont", "Rioja", "Napa Valley", "Marlborough", "C"]
  ]
});

/* ───────── France ───────── */
S("bordeaux", "Bordeaux", "France", [-0.58, 44.84], 9, "Maritime", {
  I: [
    ["Location", "Southwest France on the Atlantic coast. Maritime, turning more continental inland."],
    ["Water", "Atlantic Ocean, Gironde Estuary, Garonne River, Dordogne River."],
    ["Grapes", "Red: Cabernet Sauvignon, Merlot, Cabernet Franc, with small amounts of Malbec, Petit Verdot, Carménère. White: Sauvignon Blanc, Sémillon, a little Muscadelle."],
    ["Soil", "Gravel, clay, limestone, sand. Cabernet Sauvignon goes on gravel, Merlot on clay."],
    ["Left Bank", "Médoc and Haut-Médoc, with the communes St-Estèphe, Pauillac, St-Julien and Margaux. South of the city: Graves, Pessac-Léognan, Sauternes."],
    ["Right Bank", "Pomerol, St-Émilion, St-Émilion Grand Cru. Entre-Deux-Mers lies between the rivers."],
    ["1855 Classification", "First Growths: Lafite Rothschild, Latour, Mouton Rothschild (all Pauillac), Margaux (Margaux), Haut-Brion (Graves). The only change: Mouton rose from second to first in 1973."],
    ["Other rankings", "Pomerol has no classification. St-Émilion has a multi-tiered one that is revised periodically. Names to recognize: Yquem (Sauternes), Petrus (Pomerol), Ausone and Cheval Blanc (St-Émilion)."],
    ["Style and pairing", "Dry reds, dry whites, and botrytis-affected sweet whites from Sauternes. Bold reds with beef and lamb. Sweet wines with dessert and foie gras."]
  ],
  C: [
    ["More appellations", "Barsac (within the sweet wine zone of Graves), Lalande-de-Pomerol, Montagne-St-Émilion."],
    ["Classifications", "Cru Bourgeois: created in the 1930s, three levels. Graves, 1959: reds and whites. Sauternes, 1855: Château d'Yquem alone is Premier Cru Supérieur. St-Émilion: Premiers Grands Crus Classés A and B, then Grands Crus Classés."],
    ["Producers", "Pomerol: Pétrus, Lafleur, Le Pin, Clos l'Église. St-Émilion: Angélus, Ausone, Cheval Blanc, Pavie, Figeac. Know the 5 First and 14 Second Growths with their communes."],
    ["Vineyard hazards", "Humidity brings black and grey rot, and noble rot for sweet wine. Spring frost. Bordeaux mixture is the copper sulfate spray."],
    ["History", "Eleanor of Aquitaine's marriage tied Bordeaux to England. The Dutch drained the Médoc marshes. Today it is France's largest region for AOP wine."],
    ["Service", "Decant young Bordeaux for air and old Bordeaux for sediment."]
  ],
  t: [
    ["Château", "A wine estate in Bordeaux"],
    ["Left Bank", "The Médoc and Graves side, where Cabernet Sauvignon leads"],
    ["Right Bank", "The Pomerol and St-Émilion side, where Merlot leads"],
    ["Noble rot", "Botrytis that concentrates sugar for sweet wine"],
    ["First Growth", "The top tier of the 1855 Classification"],
    ["Bordeaux mixture", "A copper sulfate and lime spray used against mildew", "C"],
    ["Cru Bourgeois", "A Médoc classification below the 1855 growths, with three levels", "C"]
  ],
  q: [
    ["Which grape leads on the gravel of the Left Bank?", "Cabernet Sauvignon", "Merlot", "Malbec", "Gamay"],
    ["Which grape thrives on Pomerol's clay?", "Merlot", "Cabernet Sauvignon", "Petit Verdot", "Syrah"],
    ["Which château was promoted to First Growth in 1973?", "Mouton Rothschild", "Lafite Rothschild", "Latour", "Margaux"],
    ["Which First Growth comes from Graves?", "Haut-Brion", "Latour", "Margaux", "Lafite Rothschild"],
    ["Sauternes is famous for:", "Sweet botrytis-affected whites", "Dry reds", "Sparkling rosé", "Fortified reds"],
    ["Which appellation has no classification?", "Pomerol", "St-Émilion", "Sauternes", "Graves"],
    ["Which of these is a Left Bank commune?", "Pauillac", "Pomerol", "St-Émilion", "Sancerre"],
    ["Which two rivers join to form the Gironde?", "Garonne and Dordogne", "Loire and Layon", "Rhône and Saône", "Marne and Seine"],
    ["Château d'Yquem is in:", "Sauternes", "Pauillac", "Pomerol", "Margaux"],
    ["Which Sauternes estate is the only Premier Cru Supérieur?", "Château d'Yquem", "Château Climens", "Château Suduiraut", "Château Rieussec", "C"],
    ["The Graves classification of 1959 covers:", "Red and white wines", "Red wines only", "Sweet wines only", "White wines only", "C"],
    ["Which of these is a top Pomerol estate?", "Le Pin", "Château Pavie", "Château Figeac", "Château Angélus", "C"],
    ["Barsac is known for:", "Sweet white wine", "Dry rosé", "Sparkling wine", "Merlot-based reds", "C"]
  ]
});

S("burgundy", "Burgundy", "France", [4.84, 47.02], 8.5, "Cool continental", {
  I: [
    ["Location", "Five non-contiguous regions in eastern France: Chablis, Côte d'Or (Côte de Nuits and Côte de Beaune), Côte Chalonnaise, Mâconnais, Beaujolais."],
    ["Grapes", "White: Chardonnay, a little Aligoté. Red: Pinot Noir, and Gamay in Beaujolais."],
    ["Soil", "Chablis and the Côte d'Or: limestone and clay. Beaujolais: granite."],
    ["Hierarchy", "Regional (Bourgogne AOP), Village, Premier Cru, Grand Cru."],
    ["Chablis", "Chardonnay. Frost is the hazard. Recognize the Grand Cru Les Clos."],
    ["Côte de Nuits villages", "Gevrey-Chambertin, Morey-St-Denis, Chambolle-Musigny, Vougeot, Vosne-Romanée, Nuits-St-Georges."],
    ["Côte de Beaune villages", "Pommard, Volnay, Meursault, Puligny-Montrachet, Chassagne-Montrachet."],
    ["Beaujolais", "Beaujolais, Beaujolais-Villages, then the Crus. Recognize Morgon. Carbonic maceration is the regional technique."],
    ["Label terms", "Négociant, domaine, clos, monopole."]
  ],
  C: [
    ["Soils in detail", "Kimmeridgian and Portlandian limestone in Chablis; marl, schist and chalk elsewhere."],
    ["Chablis", "Chablis versus Petit Chablis. Seven Grands Crus. Oak use rises from village to Grand Cru."],
    ["Côte Chalonnaise", "Bouzeron (100% Aligoté), Rully, Mercurey, Givry, Montagny."],
    ["Mâconnais and Beaujolais", "Pouilly-Fuissé now has Premier Cru vineyards. Ten Beaujolais Crus. Côte du Py is the famous lieu-dit of Morgon."],
    ["Winemaking", "Bâtonnage, cold soak, whole cluster, semi-carbonic maceration, chaptalization. The Burgundy barrel is the pièce."],
    ["Producers", "Chablis: Dauvissat, Raveneau. Côte d'Or: DRC, Leroy, Coche-Dury, Leflaive, Roulot. Négociants: Jadot, Latour, Bichot, Bouchard, Drouhin, Faiveley."],
    ["History and extras", "Monks mapped the vineyards. The Napoleonic Code of inheritance fragmented them. Crémant de Bourgogne is the sparkling wine. Marc de Bourgogne is the pomace brandy."]
  ],
  t: [
    ["Négociant", "A merchant who buys grapes or wine and bottles under their own name"],
    ["Domaine", "An estate that grows its own grapes and makes its own wine"],
    ["Clos", "A walled vineyard"],
    ["Monopole", "A vineyard with a single owner"],
    ["Vieilles Vignes", "Old vines", "C"],
    ["Lieu-dit", "A named vineyard site", "C"],
    ["Pièce", "The 228-liter Burgundy barrel", "C"]
  ],
  q: [
    ["Which grape makes red wine in the Côte d'Or?", "Pinot Noir", "Gamay", "Syrah", "Cabernet Franc"],
    ["Which grape is Beaujolais made from?", "Gamay", "Pinot Noir", "Grenache", "Merlot"],
    ["Which grape is Chablis made from?", "Chardonnay", "Aligoté", "Sauvignon Blanc", "Chenin Blanc"],
    ["What is the top tier of the Burgundy hierarchy?", "Grand Cru", "Premier Cru", "Village", "Regional"],
    ["Which soil is typical of Beaujolais?", "Granite", "Limestone", "Gravel", "Slate"],
    ["Which village is in the Côte de Nuits?", "Gevrey-Chambertin", "Meursault", "Pommard", "Volnay"],
    ["Which village is in the Côte de Beaune?", "Puligny-Montrachet", "Vosne-Romanée", "Chambolle-Musigny", "Morgon"],
    ["A monopole is:", "A vineyard with one owner", "A walled cellar", "A merchant bottler", "A blend of villages"],
    ["Les Clos is a Grand Cru of:", "Chablis", "Meursault", "Pommard", "Morgon"],
    ["How many Grands Crus does Chablis have?", "7", "5", "10", "33", "C"],
    ["Bouzeron is made from 100%:", "Aligoté", "Chardonnay", "Pinot Blanc", "Gamay", "C"],
    ["How many Beaujolais Crus are there?", "10", "7", "5", "13", "C"],
    ["Côte du Py is a lieu-dit in:", "Morgon", "Fleurie", "Mercurey", "Volnay", "C"],
    ["Raveneau and Dauvissat are producers in:", "Chablis", "Beaujolais", "Vosne-Romanée", "Mâcon", "C"]
  ]
});

S("loire", "Loire Valley", "France", [0.69, 47.39], 7.5, "Maritime to continental", {
  I: [
    ["Location", "Runs from the Atlantic coast into central France along the Loire, the country's longest river, which rises in the Massif Central."],
    ["Four regions, west to east", "Pays Nantais, Anjou-Saumur, Touraine, Central Vineyards."],
    ["Climate", "Pays Nantais: cool, wet maritime. Anjou-Saumur: maritime turning continental. Touraine and the Central Vineyards: continental."],
    ["Pays Nantais", "Muscadet and Muscadet de Sèvre-et-Maine, from Melon B, aged sur lie."],
    ["Anjou-Saumur", "Chenin Blanc and Cabernet Franc. Saumur, Saumur-Champigny, Savennières, and the sweet wines Quarts-de-Chaume and Bonnezeaux."],
    ["Touraine", "Chinon and Bourgueil (Cabernet Franc), Vouvray (Chenin Blanc, made sparkling, dry, off-dry or sweet). Vouvray's soil is tuffeau."],
    ["Central Vineyards", "Sancerre and Pouilly-Fumé: Sauvignon Blanc, with Pinot Noir for red."],
    ["Label terms", "Sur lie, sec, demi-sec."]
  ],
  C: [
    ["Soils", "Silex (flint) and Kimmeridgian clay in the Central Vineyards."],
    ["Botrytis", "Humidity from several rivers, including the Layon, brings noble rot to Bonnezeaux and Quarts-de-Chaume."],
    ["Sparkling", "Vouvray Pétillant, Crémant de Loire."],
    ["Label term", "Moelleux: sweet."],
    ["Producers", "Domaine Huet (Vouvray), Nicolas Joly (Savennières, a biodynamic pioneer)."],
    ["Pairing", "Match Chenin Blanc to its sweetness level. Sancerre and Pouilly-Fumé with goat cheese is the classic."]
  ],
  t: [
    ["Sur lie", "Aged on the lees"],
    ["Sec", "Dry"],
    ["Demi-sec", "Off-dry"],
    ["Tuffeau", "The soft limestone of Vouvray"],
    ["Moelleux", "Sweet", "C"],
    ["Silex", "Flint soil found in the Central Vineyards", "C"]
  ],
  q: [
    ["Which grape is Sancerre's white wine made from?", "Sauvignon Blanc", "Chenin Blanc", "Melon B", "Chardonnay"],
    ["Which grape is Vouvray made from?", "Chenin Blanc", "Sauvignon Blanc", "Melon B", "Muscadelle"],
    ["Which grape is Muscadet made from?", "Melon B", "Muscat", "Chenin Blanc", "Aligoté"],
    ["Which grape is Chinon known for?", "Cabernet Franc", "Pinot Noir", "Gamay", "Malbec"],
    ["Which Loire region is closest to the Atlantic?", "Pays Nantais", "Touraine", "Central Vineyards", "Anjou-Saumur"],
    ["Muscadet is traditionally aged:", "Sur lie", "In new oak", "Under flor", "In a solera"],
    ["Pouilly-Fumé is in which region?", "Central Vineyards", "Touraine", "Pays Nantais", "Anjou-Saumur"],
    ["Which of these is a sweet Chenin Blanc appellation?", "Quarts-de-Chaume", "Sancerre", "Chinon", "Muscadet"],
    ["Silex is a type of:", "Flint soil", "Sparkling wine", "Barrel", "Rootstock", "C"],
    ["Nicolas Joly is associated with:", "Savennières", "Sancerre", "Muscadet", "Chinon", "C"],
    ["Moelleux on a Loire label means:", "Sweet", "Dry", "Sparkling", "Aged on lees", "C"],
    ["Domaine Huet is a leading producer of:", "Vouvray", "Pouilly-Fumé", "Bourgueil", "Muscadet", "C"]
  ]
});

S("rhone", "Rhône Valley", "France", [4.83, 44.7], 7.5, "Continental north, Mediterranean south", {
  I: [
    ["Location", "Between Burgundy and Provence. Lyon sits to the north. A 30-mile gap separates the Northern and Southern Rhône."],
    ["Climate", "North: moderate continental with steep hillsides. South: Mediterranean with flatter terrain. The Mistral wind blows through both."],
    ["Soil", "North: decomposed granite and schist. South: galets (large round stones), alluvial soils, limestone."],
    ["Grapes", "North: Syrah for red; Viognier, Marsanne, Roussanne for white. South: Grenache and Mourvèdre for red; Grenache Blanc for white."],
    ["Northern AOPs", "Côte-Rôtie, Condrieu, St-Joseph, Hermitage, Crozes-Hermitage, Cornas."],
    ["Southern tiers", "Côtes-du-Rhône, then Côtes-du-Rhône Villages, then the Crus: Châteauneuf-du-Pape, Gigondas, Vacqueyras, Tavel (rosé), Muscat de Beaumes-de-Venise."],
    ["Winemaking", "Co-fermentation in the north. Blending in the south. Vines are staked against the Mistral in the north and trained as bush vines in the south."],
    ["Style and pairing", "Spicy, meaty reds and rich, aromatic whites. Pair with meat dishes built on herbs, bacon and peppercorn."]
  ],
  C: [
    ["More to know", "Château-Grillet (Viognier). Montélimar is the unofficial dividing line. Avignon is the main city of the south."],
    ["Southern grapes", "Cinsault for red. Bourboulenc, Clairette, Picpoul for white."],
    ["Co-fermentation", "Côte-Rôtie may co-ferment Syrah with a little Viognier."],
    ["Vins Doux Naturels", "Muscat de Beaumes-de-Venise is lightly fortified and unoaked."],
    ["Producers", "Chave, Chapoutier, Guigal, Beaucastel, Rayas."],
    ["Lore", "The papal crest is embossed on Châteauneuf-du-Pape bottles, a legacy of the popes at Avignon."]
  ],
  t: [
    ["Mistral", "The strong, cold, dry wind that blows down the Rhône Valley"],
    ["Galets", "Large rounded stones that cover vineyards in Châteauneuf-du-Pape"],
    ["Cru", "In the Southern Rhône, a single village with its own appellation"],
    ["Co-fermentation", "Fermenting two varieties together in one vat"],
    ["Vin Doux Naturel", "A sweet wine made by fortifying during fermentation", "C"]
  ],
  q: [
    ["Which red grape rules the Northern Rhône?", "Syrah", "Grenache", "Mourvèdre", "Gamay"],
    ["Which grape leads Southern Rhône red blends?", "Grenache", "Syrah", "Pinot Noir", "Cabernet Franc"],
    ["Condrieu is made from:", "Viognier", "Marsanne", "Roussanne", "Grenache Blanc"],
    ["Tavel is known for:", "Rosé", "Sparkling wine", "Sweet red", "Dry white"],
    ["What are galets?", "Large round stones", "Terraced slopes", "Bush vines", "Clay pots"],
    ["What is the Mistral?", "A strong wind", "A river", "A soil type", "A grape variety"],
    ["Which of these is a Northern Rhône appellation?", "Cornas", "Gigondas", "Vacqueyras", "Tavel"],
    ["Which is the climate of the Southern Rhône?", "Mediterranean", "Cool continental", "Maritime", "Alpine"],
    ["Northern Rhône soils are mainly:", "Granite and schist", "Chalk", "Gravel", "Slate"],
    ["Which appellation may co-ferment Syrah with Viognier?", "Côte-Rôtie", "Cornas", "Gigondas", "Tavel", "C"],
    ["Château-Grillet is made from:", "Viognier", "Syrah", "Marsanne", "Clairette", "C"],
    ["Muscat de Beaumes-de-Venise is a:", "Vin Doux Naturel", "Traditional method sparkling wine", "Botrytis wine", "Dry rosé", "C"],
    ["Which producer is from the Rhône?", "Guigal", "Trimbach", "Huet", "Raveneau", "C"]
  ]
});

S("champagne", "Champagne", "France", [4.03, 49.26], 8.5, "Cool continental", {
  I: [
    ["Location", "On the 49th parallel, among the most northerly wine regions. Open to Atlantic weather: rain, frost and hail are constant threats."],
    ["Soil", "Limestone and chalk."],
    ["Grapes", "Chardonnay, Pinot Noir, Meunier. Picked early to keep natural acidity."],
    ["Champagne Method", "Make still wine. Assemble the cuvée. Add liqueur de tirage to create bubbles. Age sur lie (autolysis). Riddle on a pupitre or gyropalette. Disgorge. Add dosage with liqueur d'expédition."],
    ["Aging law", "Non-vintage: 12 months on lees, 15 months total. Vintage: 36 months total."],
    ["Styles", "Brut, Non-Vintage, Vintage, Blanc de Blancs, Blanc de Noirs, Rosé."],
    ["Houses", "Moët & Chandon, Roederer, Veuve Clicquot, Taittinger."],
    ["Service", "Never point the cork at anyone, and never take your hand off the cage and cork while opening."]
  ],
  C: [
    ["Subregions", "Montagne de Reims, Vallée de la Marne, Côte des Blancs, Côte de Sézanne, Côte des Bar."],
    ["Plantings", "Pinot Noir 38%, Meunier 32%, Chardonnay 30%."],
    ["Échelle des Crus", "Grand Cru and Premier Cru villages exist and may appear on labels. The CIVC is the regional trade body."],
    ["Producer types", "Négociant Manipulant (NM) buys grapes. Récoltant Manipulant (RM) is a grower-producer. Special Club is a growers' prestige bottling."],
    ["Sweetness, dry to sweet", "Brut Nature, Extra Brut, Brut, Extra Dry, Sec, Demi-Sec, Doux."],
    ["Lore", "Madame Clicquot is credited with the riddling rack. Know the prestige cuvée of each Grande Marque, plus Charles Heidsieck and Krug."]
  ],
  t: [
    ["Liqueur de tirage", "The wine, sugar and yeast mix that starts the second fermentation"],
    ["Rémuage", "Riddling: turning bottles so the lees collect in the neck"],
    ["Dégorgement", "Disgorging: removing the plug of lees"],
    ["Dosage", "The final sweetness adjustment after disgorging"],
    ["Blanc de Blancs", "White wine from white grapes, in Champagne meaning Chardonnay"],
    ["Blanc de Noirs", "White wine from black grapes"],
    ["Récoltant Manipulant", "A grower who makes Champagne from their own grapes", "C"],
    ["Tête de Cuvée", "A house's prestige bottling", "C"]
  ],
  q: [
    ["Which three grapes make Champagne?", "Chardonnay, Pinot Noir, Meunier", "Chardonnay, Pinot Blanc, Gamay", "Chenin Blanc, Pinot Noir, Aligoté", "Chardonnay, Pinot Gris, Meunier"],
    ["What is Champagne's signature soil?", "Chalk", "Slate", "Granite", "Gravel"],
    ["Blanc de Blancs Champagne is made from:", "Chardonnay", "Pinot Noir", "Meunier", "A blend of all three"],
    ["What creates the bubbles in Champagne?", "A second fermentation in the bottle", "Injected carbon dioxide", "Fermentation in a pressurized tank", "Unfinished first fermentation"],
    ["Riddling is done on a pupitre or a:", "Gyropalette", "Barrique", "Lagar", "Foudre"],
    ["What is the minimum total aging for non-vintage Champagne?", "15 months", "9 months", "24 months", "36 months"],
    ["What is the minimum total aging for vintage Champagne?", "36 months", "15 months", "18 months", "60 months"],
    ["Dosage is added:", "After disgorging", "Before the first fermentation", "During riddling", "At harvest"],
    ["Which subregion is famous for Chardonnay?", "Côte des Blancs", "Montagne de Reims", "Vallée de la Marne", "Côte des Bar", "C"],
    ["Which is the driest style?", "Brut Nature", "Extra Dry", "Sec", "Demi-Sec", "C"],
    ["RM on a label stands for:", "Récoltant Manipulant", "Réserve Millésimé", "Rosé Méthode", "Récolte Mixte", "C"],
    ["Which grape is the most planted in Champagne?", "Pinot Noir", "Chardonnay", "Meunier", "Pinot Blanc", "C"],
    ["Who is credited with inventing the riddling rack?", "Madame Clicquot", "Dom Pérignon", "Louis Roederer", "Charles Heidsieck", "C"]
  ]
});

S("alsace", "Alsace", "France", [7.36, 48.08], 8.5, "Cool continental, dry", {
  I: [
    ["Location", "Northeastern France on the German border, between the Vosges Mountains and the Rhine River."],
    ["Climate", "Cool continental with a dry, sunny growing season. The Vosges cast a rain shadow, making this one of France's driest regions."],
    ["Grapes", "Riesling, Gewurztraminer, Pinot Gris, Muscat. Pinot Noir for red. Over 90% of production is white."],
    ["Soil", "Extremely varied after a long geological history."],
    ["Law", "A variety named on the label must be 100% of the wine. Alsace AOP is the main appellation. Alsace Grand Cru AOP traditionally allows four grapes: Riesling, Pinot Gris, Gewurztraminer, Muscat. Crémant d'Alsace is the traditional method sparkling wine."],
    ["Winemaking", "Large neutral casks, little or no new oak. Sparkling, dry, off-dry and sweet wines are all made."],
    ["Sweet styles", "Vendange Tardive (VT): late harvest, rich, not always sweet. Sélection de Grains Nobles (SGN): botrytis-affected, tiny quantities, top vintages only."],
    ["History", "France and Germany fought over Alsace for centuries, which shows in its architecture, language and food."]
  ],
  C: [
    ["Departments", "Bas-Rhin in the north is lower and less sheltered. Haut-Rhin in the south is higher and better protected, and holds many of the best sites."],
    ["Grand Cru details", "51 Grand Cru vineyards, including Schlossberg, Brand, Goldert, Hengst. Pinot Noir joined the permitted grapes from the 2022 vintage. One Grand Cru allows Sylvaner and two allow blends."],
    ["More grapes", "Pinot Blanc, Silvaner, Chardonnay, Auxerrois."],
    ["Terms", "Foudre: the large neutral cask. Edelzwicker and Gentil: blends. Flûte d'Alsace: the tall bottle required for Alsace AOP."],
    ["Producers", "Trimbach, Weinbach, Marcel Deiss, Hugel, Pierre Sparr, Zind-Humbrecht."],
    ["Pairing", "Choucroute, tarte flambée (Flammkuchen), Baeckeoffe, smoky cured meats and sausages."]
  ],
  t: [
    ["Vendange Tardive", "Late harvest"],
    ["Sélection de Grains Nobles", "A selection of botrytis-affected grapes"],
    ["Crémant", "Traditional method sparkling wine made outside Champagne"],
    ["Rain shadow", "The dry zone east of the Vosges Mountains"],
    ["Foudre", "A large neutral oak cask", "C"],
    ["Edelzwicker", "A blend of Alsace grapes", "C"]
  ],
  q: [
    ["Which mountains shelter Alsace?", "Vosges", "Alps", "Pyrenees", "Massif Central"],
    ["Which river runs along Alsace?", "Rhine", "Rhône", "Loire", "Marne"],
    ["If an Alsace label names a grape, what share must it be?", "100%", "75%", "85%", "90%"],
    ["Which of these is one of the four traditional Grand Cru grapes?", "Gewurztraminer", "Chardonnay", "Sylvaner", "Auxerrois"],
    ["SGN wines are made from grapes affected by:", "Botrytis", "Frost", "Phylloxera", "Flor"],
    ["How is most Alsace wine aged?", "In large neutral casks", "In new barriques", "Under flor", "In clay amphorae"],
    ["What is Crémant d'Alsace?", "Traditional method sparkling wine", "A late-harvest sweet wine", "A fortified wine", "A red blend"],
    ["Over 90% of Alsace wine is:", "White", "Red", "Rosé", "Sparkling"],
    ["How many Grand Cru vineyards does Alsace have?", "51", "7", "33", "13", "C"],
    ["Which department holds many of the best-regarded sites?", "Haut-Rhin", "Bas-Rhin", "Côte-d'Or", "Marne", "C"],
    ["Which red grape was added to Alsace Grand Cru in 2022?", "Pinot Noir", "Gamay", "Syrah", "Cabernet Franc", "C"],
    ["Which of these is an Alsace Grand Cru?", "Schlossberg", "Les Clos", "Cannubi", "Côte du Py", "C"],
    ["Which producer is from Alsace?", "Zind-Humbrecht", "Chapoutier", "Dauvissat", "Tempier", "C"]
  ]
});

S("southfrance", "South of France", "France", [2.6, 43.4], 6.5, "Mediterranean; continental in the Southwest", {
  cert: 1,
  C: [
    ["Provence", "Mediterranean coast from the Italian border to the Rhône. Nearly 90% dry rosé. Grapes: Grenache, Cinsault, Syrah, Mourvèdre; whites from Clairette, Ugni Blanc, Rolle (Vermentino). Wine has been made here since about 600 BCE."],
    ["Provence AOPs", "Côtes de Provence: dry rosé dominant. Bandol: red dominant, at least 50% Mourvèdre. Bandol producers: Domaine Tempier, Pibarnon, Pradeaux."],
    ["Languedoc-Roussillon", "The Mediterranean arc down to the Spanish border. Lots of IGP wine (Pays d'Oc). Grenache, Syrah, Carignan, Mourvèdre, Cinsault."],
    ["Languedoc AOPs", "Limoux: whites from Mauzac, Chenin Blanc, Chardonnay. Crémant de Limoux: traditional method sparkling. Fitou: dry reds."],
    ["Roussillon VDNs", "Banyuls and Banyuls Grand Cru (Grenache). Muscat de Rivesaltes. Vins doux naturels are made by mutage: stopping fermentation with neutral grape spirit."],
    ["Southwest France", "Continental, between Bordeaux and the Pyrenees. Cahors: Cot (Malbec), dry reds only. Madiran: Tannat, dry reds only. Jurançon: Gros Manseng and Petit Manseng, dry (sec) or off-dry whites."],
    ["Dordogne", "Southeast of Bordeaux's Right Bank. Bergerac: Bordeaux varieties, red, white and rosé. Monbazillac: botrytis-affected sweet whites from Sémillon, Sauvignon Blanc, Muscadelle."],
    ["Pairing", "Dry rosé with bouillabaisse and shellfish. Bandol with beef and lamb. Banyuls with chocolate. Cahors and Madiran with duck, lamb, cassoulet. Monbazillac with foie gras and blue cheese."]
  ],
  t: [
    ["Mutage", "Stopping fermentation by adding neutral grape spirit", "C"],
    ["Cot", "The local name for Malbec in Cahors", "C"],
    ["Rolle", "The Provençal name for Vermentino", "C"],
    ["Pays d'Oc", "The large IGP covering Languedoc-Roussillon", "C"],
    ["Vin Doux Naturel", "A sweet wine fortified during fermentation", "C"]
  ],
  q: [
    ["Bandol reds must be at least 50%:", "Mourvèdre", "Grenache", "Syrah", "Carignan", "C"],
    ["Which grape dominates Cahors?", "Cot (Malbec)", "Tannat", "Merlot", "Cabernet Franc", "C"],
    ["Which grape dominates Madiran?", "Tannat", "Cot (Malbec)", "Mourvèdre", "Grenache", "C"],
    ["Jurançon is made from:", "Gros Manseng and Petit Manseng", "Mauzac and Chenin Blanc", "Clairette and Rolle", "Sémillon and Muscadelle", "C"],
    ["What style is most Provence wine?", "Dry rosé", "Sweet white", "Sparkling", "Fortified red", "C"],
    ["Banyuls is a:", "Vin Doux Naturel from Grenache", "Dry rosé from Cinsault", "Sparkling wine from Mauzac", "Botrytis wine from Sémillon", "C"],
    ["Monbazillac is known for:", "Botrytis-affected sweet wine", "Traditional method sparkling wine", "Tannic dry reds", "Dry rosé", "C"],
    ["Mauzac is a grape of:", "Limoux", "Bandol", "Cahors", "Madiran", "C"],
    ["Which river runs through Bergerac?", "Dordogne", "Rhône", "Loire", "Garonne", "C"],
    ["Domaine Tempier is a producer in:", "Bandol", "Cahors", "Banyuls", "Jurançon", "C"]
  ]
});

/* ───────── Italy ───────── */
S("piedmont", "Piedmont", "Italy", [8.03, 44.7], 8.5, "Continental", {
  I: [
    ["Location", "Northwest Italy, bordering Switzerland and France. The name means foot of the mountains. The Alps provide a rain shadow; the Po River drains the valley."],
    ["Grapes", "Red: Nebbiolo, Barbera, Dolcetto, Brachetto. White: Moscato, Arneis, Cortese."],
    ["Classification", "IGP, DOC, DOCG."],
    ["Barolo and Barbaresco", "Both DOCG, both dry reds from Nebbiolo. Both have legal aging minimums. Traditional aging is in large barrels."],
    ["Other DOCGs", "Moscato d'Asti: off-dry, semi-sparkling Moscato. Gavi: dry white from Cortese. Barbera d'Asti: dry red from Barbera."],
    ["Terms", "Nebbia is the fog that rolls off the Alpine foothills. Label terms: Normale, Riserva."],
    ["Pairing", "Big tannins need meat or fat."]
  ],
  C: [
    ["Aging law", "Barolo: 38 months total, at least 18 in oak. Barbaresco: 26 months total, at least 9 in oak."],
    ["Geography", "Tanaro River and the Langhe Hills. Top Barolo vineyards: Cannubi, Brunate, Monprivato. Top Barbaresco vineyards: Ovello, Montestefano, Pora, Asili."],
    ["More DOCGs", "Asti (fully sparkling Moscato), Brachetto d'Acqui (off-dry, semi-sparkling red), Alta Langa (metodo classico), Roero (Nebbiolo), Roero Arneis, Ghemme and Gattinara (Nebbiolo, locally called Spanna)."],
    ["Producers", "Barolo: Vietti, Giacomo Conterno, Bruno Giacosa, Ceretto, Sandrone, Elio Altare, Giuseppe Mascarello. Barbaresco: Gaja, La Spinetta, Produttori del Barbaresco."],
    ["Style debate", "Traditionalists use long macerations and big old casks. Modernists use shorter macerations and barriques."]
  ],
  t: [
    ["Nebbia", "The fog of Piedmont, which gives Nebbiolo its name"],
    ["Riserva", "A wine given longer aging than the standard release"],
    ["DOCG", "Italy's highest tier of wine appellation"],
    ["Spanna", "The local name for Nebbiolo in Ghemme and Gattinara", "C"],
    ["Sorì", "A privileged, south-facing vineyard site", "C"]
  ],
  q: [
    ["Which grape makes Barolo?", "Nebbiolo", "Barbera", "Dolcetto", "Sangiovese"],
    ["Which grape makes Barbaresco?", "Nebbiolo", "Brachetto", "Corvina", "Barbera"],
    ["Which grape makes Gavi?", "Cortese", "Arneis", "Moscato", "Garganega"],
    ["Moscato d'Asti is best described as:", "Off-dry and semi-sparkling", "Dry and still", "Sweet and fortified", "Dry and fully sparkling"],
    ["Which river valley defines northern Italy?", "Po", "Tiber", "Arno", "Adige"],
    ["Which mountains give Piedmont its rain shadow?", "Alps", "Pyrenees", "Vosges", "Dolomites"],
    ["How is Barolo traditionally aged?", "In large barrels", "In stainless steel only", "Under flor", "In amphorae"],
    ["What is Barolo's minimum total aging?", "38 months", "26 months", "24 months", "60 months", "C"],
    ["What is Barbaresco's minimum total aging?", "26 months", "38 months", "18 months", "12 months", "C"],
    ["Cannubi is a top vineyard of:", "Barolo", "Barbaresco", "Gavi", "Roero", "C"],
    ["Spanna is a local name for:", "Nebbiolo", "Barbera", "Dolcetto", "Arneis", "C"],
    ["Which producer is most associated with Barbaresco?", "Gaja", "Giacomo Conterno", "Elio Altare", "Sandrone", "C"],
    ["Brachetto d'Acqui is:", "An off-dry, semi-sparkling red", "A dry white", "A fortified red", "A metodo classico white", "C"]
  ]
});

S("lombardy", "Lombardy & Emilia-Romagna", "Italy", [10.2, 45.3], 8, "Cool continental", {
  I: [
    ["Location", "Lombardy: northern Italy on the Swiss border, in the Alpine foothills, with many lakes. Emilia-Romagna: straddles northern and central Italy along the Apennines."],
    ["Franciacorta DOCG", "Lombardy's metodo classico sparkling wine from Chardonnay, Pinot Nero and Pinot Bianco. Minimum 18 months on the lees and 25 months total from harvest."],
    ["Versus Champagne", "Same method and similar grapes, from a warmer place, with longer minimum lees aging for non-vintage."],
    ["Lambrusco", "Emilia-Romagna's sparkling red, made frizzante or spumante from the Lambrusco grape."],
    ["Label terms", "Metodo classico, spumante, millesimato."]
  ],
  C: [
    ["Valtellina", "Valtellina Superiore DOCG: dry red from Nebbiolo, here called Chiavennasca. Sforzato di Valtellina DOCG: made from dried (passito) Chiavennasca."],
    ["Franciacorta Satèn", "Brut only, maximum 5 atmospheres of pressure, Chardonnay with up to 50% Pinot Bianco."],
    ["Lambrusco in detail", "Usually tank method, but can be metodo classico or ancestrale. Subzones: Sorbara, Grasparossa di Castelvetro, Salamino di Santa Croce. Sweetness: secco, amabile, dolce."],
    ["Producers", "Franciacorta: Bellavista, Ca' del Bosco."],
    ["Pairing and business", "Lambrusco with the food of Modena and Reggio: Parmesan, salami, balsamic. Franciacorta is as flexible as Champagne. Lambrusco loses its fizz quickly when poured by the glass."]
  ],
  t: [
    ["Metodo Classico", "The Italian term for the traditional method"],
    ["Spumante", "Fully sparkling"],
    ["Frizzante", "Lightly sparkling"],
    ["Millesimato", "Vintage-dated"],
    ["Chiavennasca", "The local name for Nebbiolo in Valtellina", "C"],
    ["Amabile", "Semi-sweet", "C"]
  ],
  q: [
    ["Franciacorta is made by which method?", "Metodo classico", "Charmat", "Ancestral", "Carbonation"],
    ["Which region is Franciacorta in?", "Lombardy", "Veneto", "Piedmont", "Tuscany"],
    ["Which grapes go into Franciacorta?", "Chardonnay, Pinot Nero, Pinot Bianco", "Glera and Garganega", "Moscato and Cortese", "Trebbiano and Malvasia"],
    ["What is the minimum lees aging for Franciacorta?", "18 months", "9 months", "12 months", "36 months"],
    ["Lambrusco comes from which region?", "Emilia-Romagna", "Lombardy", "Friuli", "Umbria"],
    ["Frizzante means:", "Lightly sparkling", "Fully sparkling", "Sweet", "Vintage-dated"],
    ["Chiavennasca is a local name for:", "Nebbiolo", "Pinot Nero", "Lambrusco", "Corvina", "C"],
    ["Franciacorta Satèn has a maximum pressure of:", "5 atmospheres", "3 atmospheres", "6 atmospheres", "2.5 atmospheres", "C"],
    ["Sforzato di Valtellina is made from:", "Dried Nebbiolo grapes", "Botrytized Chardonnay", "Frozen Pinot Nero", "Fortified Lambrusco", "C"],
    ["Which is a Lambrusco subzone?", "Sorbara", "Cannubi", "Bolgheri", "Soave", "C"],
    ["Ca' del Bosco is a producer of:", "Franciacorta", "Lambrusco", "Prosecco", "Barolo", "C"]
  ]
});

S("neitaly", "Northeast Italy", "Italy", [12.0, 45.85], 7.5, "Cool continental; milder in Veneto", {
  pl: "Northeast Italy",
  I: [
    ["Three regions", "Trentino-Alto Adige borders Austria and Switzerland. Friuli borders Slovenia. Veneto includes Venice and Verona. The Alps frame all three."],
    ["Trentino-Alto Adige", "Pinot Grigio, Chardonnay, Sauvignon Blanc, Pinot Bianco. Mostly DOC wines labeled by single grape variety."],
    ["Friuli", "Friulano and Ribolla Gialla lead the whites."],
    ["Veneto grapes", "White: Garganega, Glera. Red: Corvina, Rondinella."],
    ["Veneto wines", "Prosecco DOC: spumante from Glera by the Charmat method. Soave: dry white, mostly Garganega. Valpolicella: dry red from Corvina and Rondinella."],
    ["Amarone", "Amarone della Valpolicella DOCG: grapes are dried by the appassimento process to concentrate sugar. Minimum 14% abv."],
    ["Umbrella appellation", "Delle Venezie DOC covers Veneto, Friuli and Trentino."],
    ["Label terms", "Classico, Superiore, Secco, Amabile."]
  ],
  C: [
    ["More grapes", "Trentino-Alto Adige: Pinot Nero, Teroldego, Lagrein. Friuli: Refosco dal Peduncolo Rosso, Merlot, Sauvignon. Veneto: Trebbiano di Soave."],
    ["Appellations", "Alto Adige (Südtiroler), Trentino, Valdadige. Friuli Isonzo, Friuli Colli Orientali, Friuli Grave. Friuli is known for orange and natural wines."],
    ["Veneto in detail", "Conegliano Valdobbiadene Prosecco Superiore DOCG. Recioto di Soave: sweet white from dried Garganega. Recioto della Valpolicella: sweet red from dried grapes."],
    ["Ripasso", "Valpolicella Ripasso: young Valpolicella is re-passed over the leftover skins and lees of Amarone or Recioto for a short second fermentation, gaining flavor, tannin and alcohol."],
    ["Producers", "Alto Adige: Cantina Terlano, Tiefenbrunner (many are co-ops). Friuli: Jermann, Livio Felluga, Gravner. Amarone: Bertani, Masi, Allegrini, Dal Forno, Quintarelli. Prosecco: Bisol, Mionetto, La Marca."]
  ],
  t: [
    ["Appassimento", "Drying grapes after harvest to concentrate sugar"],
    ["Charmat", "The tank method of making sparkling wine"],
    ["Classico", "From the historic heart of an appellation"],
    ["Superiore", "A higher minimum alcohol level, often with longer aging"],
    ["Recioto", "A sweet wine made from dried grapes", "C"],
    ["Ripasso", "Valpolicella re-fermented on Amarone skins and lees", "C"]
  ],
  q: [
    ["Which grape makes Prosecco?", "Glera", "Garganega", "Friulano", "Cortese"],
    ["Which grape makes Soave?", "Garganega", "Glera", "Pinot Grigio", "Ribolla Gialla"],
    ["Which grape leads Valpolicella?", "Corvina", "Nebbiolo", "Sangiovese", "Teroldego"],
    ["How is Prosecco made sparkling?", "Charmat (tank) method", "Traditional method", "Ancestral method", "Transfer method"],
    ["What happens in appassimento?", "Grapes are dried to concentrate sugar", "Wine is aged under flor", "Must is frozen", "Wine is fortified"],
    ["Which wine is made from dried grapes and reaches at least 14% abv?", "Amarone della Valpolicella", "Soave", "Prosecco", "Friulano"],
    ["Which region borders Slovenia?", "Friuli", "Veneto", "Trentino-Alto Adige", "Lombardy"],
    ["Friulano is a white grape of:", "Friuli", "Veneto", "Alto Adige", "Piedmont"],
    ["Recioto di Soave is:", "A sweet white from dried grapes", "A dry sparkling white", "A fortified white", "A dry rosé", "C"],
    ["Lagrein and Teroldego are red grapes of:", "Trentino-Alto Adige", "Veneto", "Friuli", "Tuscany", "C"],
    ["Ripasso gains its extra body from:", "Amarone skins and lees", "New oak barrels", "Added grape spirit", "Botrytis", "C"],
    ["Which producer is known for Amarone?", "Quintarelli", "Jermann", "Bisol", "Gaja", "C"],
    ["Which is the higher Prosecco designation?", "Conegliano Valdobbiadene DOCG", "Delle Venezie DOC", "Valdadige DOC", "Friuli Grave DOC", "C"]
  ]
});

S("tuscany", "Tuscany", "Italy", [11.3, 43.4], 8, "Continental and maritime", {
  I: [
    ["Location", "From the Ligurian Sea in the west to the Apennine foothills in the east. Maritime influence strengthens toward the coast."],
    ["Grapes", "Red: Sangiovese, called Brunello or Sangiovese Grosso in Montalcino. White: Trebbiano, Vermentino, Vernaccia."],
    ["Appellations", "Chianti DOCG, Chianti Classico DOCG, Brunello di Montalcino DOCG, Rosso di Montalcino, Vin Santo."],
    ["Brunello", "The law requires aging and sets the minimum."],
    ["Label terms", "Superiore: more alcohol. Classico: the classic center of a region. Riserva: longer aging."],
    ["Super Tuscans", "Bordeaux-variety blends, Bordeaux varieties with Sangiovese, or pure Sangiovese made outside the traditional rules."],
    ["Names to recognize", "Antinori, Ruffino, Sassicaia."],
    ["Soil and style", "Galestro is the local rocky soil. Dry reds, dry whites, sweet Vin Santo."]
  ],
  C: [
    ["Minimums", "Brunello di Montalcino: 100% Sangiovese. Chianti Classico: at least 80%. Chianti: at least 70%."],
    ["More appellations", "Vino Nobile di Montepulciano DOCG (Sangiovese, here called Prugnolo Gentile), Rosso di Montepulciano, Bolgheri DOC (Cabernet Sauvignon, Merlot, Cabernet Franc)."],
    ["On the map", "Identify Chianti, Chianti Classico, Montalcino and Bolgheri. Seas: Ligurian and Tyrrhenian."],
    ["Style", "Sangiovese shows moderate color and tart acidity that outweighs its tannin. Volatile acidity is common."],
    ["Classification", "Gran Selezione exists at the top of Chianti Classico."],
    ["Producers", "Ornellaia, Masseto, Tignanello, Solaia, Biondi-Santi, Banfi, Soldera, Le Pergole Torte."],
    ["Lore and service", "The Gallo Nero, a black rooster, marks Chianti Classico bottles. Decant young Brunello."]
  ],
  t: [
    ["Classico", "The historic center of a wine region"],
    ["Riserva", "A wine aged longer than the standard version"],
    ["Super Tuscan", "A Tuscan wine made outside traditional appellation rules, often with Bordeaux varieties"],
    ["Galestro", "A crumbly, rocky soil found in Tuscany"],
    ["Vin Santo", "Tuscany's sweet wine from dried grapes"],
    ["Prugnolo Gentile", "The name for Sangiovese in Montepulciano", "C"],
    ["Gallo Nero", "The black rooster emblem of Chianti Classico", "C"]
  ],
  q: [
    ["Which grape is the backbone of Chianti?", "Sangiovese", "Nebbiolo", "Montepulciano", "Aglianico"],
    ["Brunello is a local name for:", "Sangiovese", "Cabernet Sauvignon", "Canaiolo", "Trebbiano"],
    ["What does Classico mean on an Italian label?", "From the historic center of the region", "Aged in classic oak", "Made by the traditional method", "A higher alcohol level"],
    ["Sassicaia is an example of:", "A Super Tuscan", "A Vin Santo", "A Chianti Riserva", "A Brunello"],
    ["Vin Santo is:", "A sweet wine", "A sparkling wine", "A dry rosé", "A fortified red"],
    ["Riserva on a label means:", "Longer aging", "Higher sugar", "Single vineyard", "Organic farming"],
    ["Which mountains border Tuscany to the east?", "Apennines", "Alps", "Dolomites", "Pyrenees"],
    ["Brunello di Montalcino must be what percentage Sangiovese?", "100%", "80%", "70%", "85%", "C"],
    ["Chianti Classico must be at least what percentage Sangiovese?", "80%", "70%", "100%", "51%", "C"],
    ["Bolgheri is best known for:", "Bordeaux varieties", "Sangiovese", "Vernaccia", "Nebbiolo", "C"],
    ["Prugnolo Gentile is Sangiovese in:", "Montepulciano", "Montalcino", "Bolgheri", "Chianti", "C"],
    ["What marks a bottle of Chianti Classico?", "A black rooster", "A papal crest", "A green lizard", "A flattened flask shape", "C"],
    ["Which is a top producer of Brunello?", "Biondi-Santi", "Ornellaia", "Gaja", "Quintarelli", "C"]
  ]
});

S("southitaly", "Central & Southern Italy", "Italy", [14.6, 41.1], 6.5, "Maritime coasts, continental inland, Mediterranean south", {
  I: [
    ["Central regions", "Umbria, Marche, Abruzzo. Maritime on the coast, continental inland, with the Apennines down the spine."],
    ["Southern regions", "Campania, Puglia, Basilicata, Calabria. Mediterranean."],
    ["Central wines", "Umbria: Sagrantino di Montefalco DOCG. Abruzzo: Montepulciano d'Abruzzo DOC."],
    ["Campania", "Taurasi DOCG (red, Aglianico), Greco di Tufo DOCG and Fiano di Avellino DOCG (whites)."],
    ["Grapes", "Red: Aglianico, Montepulciano, Sagrantino, Primitivo. White: Fiano, Greco, Verdicchio."],
    ["Label terms", "Superiore: higher alcohol. Riserva: longer aging."]
  ],
  C: [
    ["Marche", "Verdicchio dei Castelli di Jesi DOC and Verdicchio di Matelica DOC."],
    ["Soil and landmarks", "Campania's soils are volcanic. Know Mt. Vesuvius and the Ligurian, Tyrrhenian and Adriatic Seas."],
    ["Service", "Decant young Taurasi and Sagrantino di Montefalco."],
    ["On the floor", "Have producers, cuvées and vintages ready if you recommend these wines in service."]
  ],
  t: [
    ["Superiore", "A higher minimum alcohol level"],
    ["Riserva", "Longer minimum aging"],
    ["Aglianico", "The red grape of Taurasi"],
    ["Verdicchio", "The white grape of the Marche"],
    ["Sagrantino", "The tannic red grape of Montefalco in Umbria"]
  ],
  q: [
    ["Which grape makes Taurasi?", "Aglianico", "Primitivo", "Sagrantino", "Montepulciano"],
    ["Taurasi is in which region?", "Campania", "Puglia", "Umbria", "Abruzzo"],
    ["Sagrantino di Montefalco comes from:", "Umbria", "Campania", "Marche", "Calabria"],
    ["Which grape makes the main red of Abruzzo?", "Montepulciano", "Sangiovese", "Aglianico", "Nero d'Avola"],
    ["Which pair are white wines of Campania?", "Greco di Tufo and Fiano di Avellino", "Soave and Gavi", "Verdicchio and Vernaccia", "Taurasi and Sagrantino"],
    ["What is the climate of southern Italy?", "Mediterranean", "Cool continental", "Alpine", "Maritime"],
    ["Verdicchio is the white grape of:", "Marche", "Campania", "Puglia", "Basilicata", "C"],
    ["Campania's soils are mostly:", "Volcanic", "Chalk", "Slate", "Gravel", "C"],
    ["Which wine should be decanted when young?", "Taurasi", "Fiano di Avellino", "Greco di Tufo", "Verdicchio di Matelica", "C"],
    ["Which sea lies off Italy's east coast?", "Adriatic", "Tyrrhenian", "Ligurian", "Aegean", "C"]
  ]
});

S("islands", "Sicily & Sardinia", "Italy", [13.6, 37.9], 6, "Mediterranean", {
  I: [
    ["Location", "Sicily lies off the southern tip of Italy. Sardinia lies south of France and west of the mainland."],
    ["Etna", "Mt. Etna is Sicily's defining feature. Etna DOC makes rosso and bianco on volcanic soil."],
    ["Sicily grapes", "Red: Nerello Mascalese, Nero d'Avola, Frappato. White: Carricante."],
    ["Sicily appellations", "Etna DOC, Cerasuolo di Vittoria DOCG."],
    ["Sardinia", "Cannonau di Sardegna DOC (red; Cannonau is Grenache) and Vermentino di Sardegna DOC (white)."],
    ["Style", "Dry whites, dry reds, and the fortified wine Marsala."]
  ],
  C: [
    ["More Sicily", "Marsala DOC and Sicilia DOC. White grapes Grillo, Inzolia, Catarratto."],
    ["Marsala terms", "Secco, semi-secco, dolce."],
    ["Geography", "Tyrrhenian Sea to the north of Sicily and east of Sardinia."],
    ["On the floor", "Know producers if you plan to recommend these wines in service."]
  ],
  t: [
    ["Cannonau", "The Sardinian name for Grenache"],
    ["Nerello Mascalese", "The leading red grape of Mt. Etna"],
    ["Carricante", "The leading white grape of Mt. Etna"],
    ["Marsala", "Sicily's fortified wine"],
    ["Grillo", "A Sicilian white grape used for Marsala and dry whites", "C"]
  ],
  q: [
    ["Which volcano defines Sicily's best-known wine zone?", "Mt. Etna", "Mt. Vesuvius", "Stromboli", "Mt. Vulture"],
    ["Which red grape leads Etna Rosso?", "Nerello Mascalese", "Nero d'Avola", "Cannonau", "Aglianico"],
    ["Cannonau is another name for:", "Grenache", "Syrah", "Mourvèdre", "Carignan"],
    ["Which white grape is Sardinia known for?", "Vermentino", "Carricante", "Fiano", "Garganega"],
    ["Which is Sicily's fortified wine?", "Marsala", "Vin Santo", "Recioto", "Amarone"],
    ["What kind of soil is found on Etna?", "Volcanic", "Chalk", "Gravel", "Slate"],
    ["Which is Sicily's DOCG?", "Cerasuolo di Vittoria", "Etna", "Marsala", "Cannonau di Sardegna"],
    ["Which white grape grows on Etna?", "Carricante", "Vermentino", "Verdicchio", "Cortese"],
    ["Grillo, Inzolia and Catarratto are white grapes of:", "Sicily", "Sardinia", "Campania", "Friuli", "C"],
    ["Marsala's sweetness levels are:", "Secco, semi-secco, dolce", "Brut, sec, doux", "Fino, amontillado, oloroso", "Trocken, halbtrocken, süss", "C"]
  ]
});

/* ───────── Spain ───────── */
S("galicia", "Galicia", "Spain", [-8.65, 42.4], 8, "Maritime, humid", {
  pl: "Galicia · Rías Baixas",
  I: [
    ["Location", "The northwest corner of the Iberian Peninsula, known as Green Spain. Cooler and wetter than the rest of the country."],
    ["Water", "Atlantic Ocean and the Miño River (Minho in Portugal). Rías Baixas means low estuaries."],
    ["Soil", "Granite."],
    ["Rías Baixas DO", "Wines labeled Albariño must be 100% Albariño: dry, crisp, aromatic whites."],
    ["Vineyard and cellar", "High canopy trellising keeps grapes above the humidity. Modern stainless steel winemaking; lees aging is common."],
    ["Pairing", "Albariño with simply prepared shellfish."]
  ],
  C: [
    ["Inland DOs", "Valdeorras: Godello for white, Mencía for red. Ribeira Sacra: Mencía, Godello and Albariño on steep terraced slopes."],
    ["Climate", "Maritime at the coast, more continental moving inland."],
    ["Producers", "Pazo Señoráns, Granbazán, Lagar de Cervera."]
  ],
  t: [
    ["Rías Baixas", "Low estuaries: the coastal DO for Albariño"],
    ["Green Spain", "The cool, wet Atlantic north of Spain"],
    ["Albariño", "The aromatic white grape of Rías Baixas"],
    ["Godello", "The white grape of Valdeorras", "C"],
    ["Mencía", "The red grape of Ribeira Sacra and Bierzo", "C"]
  ],
  q: [
    ["Which grape is Rías Baixas known for?", "Albariño", "Verdejo", "Viura", "Godello"],
    ["What soil is typical of Rías Baixas?", "Granite", "Chalk", "Llicorella", "Clay"],
    ["Why are vines trained high in Rías Baixas?", "To avoid humidity", "To reflect heat", "To resist wind", "To reduce sunburn"],
    ["A wine labeled Albariño in Rías Baixas must be what share Albariño?", "100%", "75%", "85%", "51%"],
    ["Which river forms part of the border with Portugal?", "Miño", "Ebro", "Duero", "Tajo"],
    ["What is the classic pairing for Albariño?", "Shellfish", "Grilled lamb", "Blue cheese", "Chocolate"],
    ["Which is the white grape of Valdeorras?", "Godello", "Albariño", "Verdejo", "Xarel-lo", "C"],
    ["Which DO is known for steep terraced slopes?", "Ribeira Sacra", "Rías Baixas", "Rueda", "Penedès", "C"],
    ["Which red grape grows in Ribeira Sacra?", "Mencía", "Tempranillo", "Garnacha", "Monastrell", "C"]
  ]
});

S("rioja", "Rioja", "Spain", [-2.5, 42.45], 8, "Continental", {
  I: [
    ["Location", "North-central Spain, along the Ebro River, in the foothills of the Cantabrian and Pyrenees mountains. The Cantabrians cast a rain shadow."],
    ["Grapes", "Red: Tempranillo, Garnacha. White: Viura."],
    ["Appellation", "Rioja DOCa: red (tinto) from Tempranillo, white (blanco) from Viura."],
    ["Aging tiers", "Crianza, Reserva, Gran Reserva, in ascending order of time in barrel and bottle."],
    ["Oak", "Rioja is traditionally aged in American oak."],
    ["Style", "Dry reds and whites, from young and fresh to long-aged."]
  ],
  C: [
    ["Subzones", "Rioja Alta (continental), Rioja Alavesa (coolest and wettest), Rioja Oriental (Mediterranean). Viñedo Singular marks a single vineyard."],
    ["Tinto aging", "Crianza: 2 years, 1 in oak. Reserva: 3 years, 1 in oak. Gran Reserva: 5 years, 2 in oak. Joven wines see little or no oak and often use carbonic maceration."],
    ["More grapes", "Red: Mazuelo, Graciano. White: Malvasia, Garnacha Blanca."],
    ["Soil", "Calcareous clay, ferrous clay, alluvial."],
    ["Producers", "Marqués de Riscal, Marqués de Cáceres, Finca Allende, López de Heredia, La Rioja Alta."],
    ["History", "When phylloxera hit France, Bordeaux merchants came to Rioja and brought barrel aging with them. Gran Reserva is usually made only in the best vintages."]
  ],
  t: [
    ["Crianza", "The first tier of oak-aged Rioja"],
    ["Reserva", "The middle aging tier, above Crianza"],
    ["Gran Reserva", "The longest-aged tier"],
    ["DOCa", "Spain's highest appellation category"],
    ["Joven", "A young wine with little or no oak", "C"],
    ["Viñedo Singular", "A classified single vineyard", "C"]
  ],
  q: [
    ["Which grape leads red Rioja?", "Tempranillo", "Garnacha", "Monastrell", "Mencía"],
    ["Which grape leads white Rioja?", "Viura", "Albariño", "Verdejo", "Godello"],
    ["Which river runs through Rioja?", "Ebro", "Duero", "Miño", "Tajo"],
    ["Which tier is aged longest?", "Gran Reserva", "Reserva", "Crianza", "Joven"],
    ["Which oak is traditional in Rioja?", "American", "French", "Slavonian", "Hungarian"],
    ["What is Rioja's appellation status?", "DOCa", "DO", "DO Pago", "IGP"],
    ["How long must Rioja Gran Reserva tinto age in total?", "5 years", "3 years", "2 years", "7 years", "C"],
    ["How long must Rioja Crianza tinto spend in oak?", "1 year", "6 months", "2 years", "18 months", "C"],
    ["Which Rioja subzone is the coolest and wettest?", "Rioja Alavesa", "Rioja Oriental", "Rioja Alta", "Rioja Baja", "C"],
    ["Which Rioja subzone is Mediterranean?", "Rioja Oriental", "Rioja Alta", "Rioja Alavesa", "Rioja Norte", "C"],
    ["Why did Bordeaux merchants come to Rioja in the 1800s?", "Phylloxera had struck France", "Rioja was cheaper to farm", "Spain banned French imports", "The Ebro flooded Bordeaux's rivals", "C"],
    ["Which producer is a Rioja traditionalist?", "López de Heredia", "Vega Sicilia", "Álvaro Palacios", "Pingus", "C"]
  ]
});

S("castilla", "Castilla y León", "Spain", [-4.4, 41.6], 7.5, "Continental, extreme", {
  I: [
    ["Location", "North-central Spain on the high-altitude meseta. Continental with extreme seasonal and diurnal swings. The Duero River becomes the Douro in Portugal."],
    ["Grapes", "Red: Tempranillo. White: Verdejo, Sauvignon Blanc."],
    ["Ribera del Duero DO", "Tempranillo-based reds, from fresh and early-drinking to long-aged in American or French oak."],
    ["Toro DO", "Tempranillo-based reds that emphasize ripeness and concentration."],
    ["Rueda DO", "Fresh whites from Verdejo and Sauvignon Blanc."],
    ["Aging tiers", "Ribera del Duero uses Crianza, Reserva, Gran Reserva."]
  ],
  C: [
    ["Bierzo DO", "Mencía-based reds to drink young or age a few years."],
    ["Synonyms", "Tempranillo is Tinta del País in Ribera del Duero and Tinta de Toro in Toro."],
    ["Tinto aging", "Crianza: 2 years, 1 in oak. Reserva: 3 years, 1 in oak. Gran Reserva: 5 years, 2 in oak."],
    ["Producers", "Ribera del Duero: Vega Sicilia, Pesquera, Pingus. Bierzo: Descendientes de J. Palacios. Rueda: Martinsancho."]
  ],
  t: [
    ["Meseta", "Spain's high central plateau"],
    ["Verdejo", "The white grape of Rueda"],
    ["Duero", "The river of Ribera del Duero, called the Douro in Portugal"],
    ["Tinta del País", "The local name for Tempranillo in Ribera del Duero", "C"],
    ["Tinta de Toro", "The local name for Tempranillo in Toro", "C"]
  ],
  q: [
    ["Which grape makes Ribera del Duero?", "Tempranillo", "Garnacha", "Mencía", "Monastrell"],
    ["Which grape is Rueda known for?", "Verdejo", "Albariño", "Viura", "Xarel-lo"],
    ["What is the Duero called in Portugal?", "Douro", "Minho", "Tejo", "Dão"],
    ["Toro reds are based on:", "Tempranillo", "Garnacha", "Cariñena", "Mencía"],
    ["What is the climate of Castilla y León?", "Continental with big diurnal shifts", "Maritime and humid", "Subtropical", "Cool Mediterranean"],
    ["Which DO makes fresh white wine?", "Rueda", "Toro", "Ribera del Duero", "Bierzo"],
    ["Which grape leads Bierzo?", "Mencía", "Tempranillo", "Verdejo", "Graciano", "C"],
    ["Tinta del País is a name for:", "Tempranillo", "Garnacha", "Mencía", "Monastrell", "C"],
    ["Vega Sicilia is a producer in:", "Ribera del Duero", "Rioja", "Priorat", "Toro", "C"],
    ["How long must Ribera del Duero Reserva age in total?", "3 years", "2 years", "5 years", "4 years", "C"]
  ]
});

S("catalonia", "Catalonia", "Spain", [1.3, 41.5], 8, "Mediterranean", {
  I: [
    ["Location", "Northeastern Spain in the Pyrenean foothills, near the Mediterranean and Barcelona."],
    ["Cava DO", "Traditional method sparkling wine, white and rosado. Grapes: Xarel-lo, Parellada, Macabeo. The gyropalette, a Spanish invention, usually replaces hand riddling."],
    ["Priorat DOCa", "Powerful, spicy dry reds from Garnacha and Cariñena, often with international varieties and French oak."],
    ["Priorat's land", "Hot, dry, steep terraced slopes that cannot be worked by machine. Llicorella soil lets roots dig deep for water. Bush vines (gobelet) give naturally low yields."],
    ["Lore", "Priorat is a modern Spanish wine that made a big impact in a short time."]
  ],
  C: [
    ["Cava law", "The DO covers sites across Spain, but most Cava comes from Penedès in Catalonia. Cava de Guarda: 9 months on lees. Reserva: 18 months."],
    ["Climate", "Priorat sees large diurnal shifts. Cava vineyards are moderated by altitude."],
    ["More grapes", "Garnacha Blanca; Pinot Noir and other international varieties."],
    ["Producers", "Priorat: René Barbier (Clos Mogador), Álvaro Palacios, Clos Erasmus, Clos Martinet, Scala Dei. Cava: Gramona."],
    ["History", "The Gratallops project of the late 1980s built Priorat's modern style and reputation."]
  ],
  t: [
    ["Cava", "Spain's traditional method sparkling wine"],
    ["Llicorella", "The slate-based soil of Priorat"],
    ["Gobelet", "Bush vine training"],
    ["Gyropalette", "A machine that riddles many bottles at once"],
    ["Rosado", "Rosé"],
    ["Penedès", "The Catalan DO where most Cava is made", "C"]
  ],
  q: [
    ["How is Cava made sparkling?", "Traditional method", "Charmat method", "Ancestral method", "Carbonation"],
    ["Which trio are the classic Cava grapes?", "Xarel-lo, Parellada, Macabeo", "Albariño, Godello, Treixadura", "Viura, Malvasia, Verdejo", "Chardonnay, Pinot Noir, Meunier"],
    ["Which grapes lead Priorat?", "Garnacha and Cariñena", "Tempranillo and Graciano", "Mencía and Godello", "Monastrell and Bobal"],
    ["What is llicorella?", "Priorat's soil", "A Cava grape", "A riddling machine", "A local wind"],
    ["What is Priorat's appellation status?", "DOCa", "DO", "IGP", "DO Pago"],
    ["Which Spanish invention replaced hand riddling?", "Gyropalette", "Pupitre", "Lagar", "Solera"],
    ["How are vines trained on Priorat's slopes?", "As bush vines", "On high pergolas", "On vertical trellises", "In basket shapes"],
    ["Where is most Cava made?", "Penedès", "Rioja", "Priorat", "Rías Baixas", "C"],
    ["What is the minimum lees aging for basic Cava?", "9 months", "12 months", "15 months", "18 months", "C"],
    ["What is the minimum lees aging for Cava Reserva?", "18 months", "9 months", "30 months", "36 months", "C"],
    ["Clos Mogador is a wine of:", "Priorat", "Penedès", "Rioja", "Ribera del Duero", "C"]
  ]
});

S("spainother", "Basque Country, Jumilla & Pago", "Spain", [-1.33, 38.47], 6, "Maritime north, Mediterranean southeast", {
  cert: 1, pl: "Jumilla & other Spanish DOs",
  C: [
    ["País Vasco", "Atlantic coast of northern Spain, in Green Spain. Moderate maritime climate."],
    ["Txakolina", "Three DOs: Bizkaiko Txakolina, Arabako Txakolina, Getariako Txakolina. Mostly dry whites that are lightly effervescent with high acidity, meant to be drunk young. Grapes: Hondarrabi Zuri (white), Hondarrabi Beltza (red)."],
    ["Murcia", "Mediterranean coast of southeast Spain, warm. Jumilla DO makes dry reds from Monastrell (Mourvèdre), pure or blended."],
    ["Jumilla's vines", "Sandy soils kept phylloxera out until the 1980s, so many Monastrell vines were ungrafted. Producer: Juan Gil."],
    ["DO Pago", "A single-estate appellation, first created in 2003, concentrated in Castilla-La Mancha. There were 20 as of 2022. Understand the concept; the list of names is not required."],
    ["Pairing", "Txakoli whites are traditionally served with oily seafood."]
  ],
  t: [
    ["Txakoli", "The light, spritzy, high-acid white of the Basque Country", "C"],
    ["Monastrell", "The Spanish name for Mourvèdre", "C"],
    ["Vino de Pago", "A Spanish appellation for a single estate", "C"],
    ["Hondarrabi Zuri", "The white grape of Txakoli", "C"],
    ["Green Spain", "The cool, wet Atlantic north of Spain", "C"]
  ],
  q: [
    ["Which grape leads Jumilla?", "Monastrell", "Tempranillo", "Garnacha", "Bobal", "C"],
    ["Monastrell is known in France as:", "Mourvèdre", "Carignan", "Grenache", "Cinsault", "C"],
    ["Txakoli is typically:", "Dry, lightly sparkling and high in acid", "Sweet and fortified", "Oaky and full-bodied", "Deeply colored and tannic", "C"],
    ["Which white grape makes Txakoli?", "Hondarrabi Zuri", "Albariño", "Verdejo", "Xarel-lo", "C"],
    ["How many Txakolina DOs are there?", "3", "1", "2", "5", "C"],
    ["A Vino de Pago is an appellation for:", "A single estate", "A whole region", "Sparkling wine only", "Fortified wine only", "C"],
    ["When was the first DO Pago created?", "2003", "1933", "1970", "1991", "C"],
    ["Why did Jumilla's vines stay ungrafted for so long?", "Sandy soil kept phylloxera away", "The altitude was too high", "Winters were too cold", "The vines were all hybrids", "C"],
    ["Where are most Pagos concentrated?", "Castilla-La Mancha", "Galicia", "Catalonia", "País Vasco", "C"]
  ]
});
