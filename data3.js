/* Sommelier Atlas, part 3: key places for each map stop.
   PL(stopId, [ISO country numbers to highlight], drawAreaOutline 1/0, [[name, longitude, latitude, note], ...]) */
function PL(id, cc, hull, places) { var s = window.ATLAS.stops.find(function (x) { return x.id === id; }); if (s) { s.cc = cc; s.hull = hull; s.places = places; } }

PL("bordeaux", [250], 1, [
  ["St-Estèphe", -0.77, 45.26, "Northernmost of the four famous Médoc communes."],
  ["Pauillac", -0.75, 45.20, "Home of Lafite, Latour and Mouton Rothschild."],
  ["St-Julien", -0.74, 45.16, "Left Bank commune between Pauillac and Margaux."],
  ["Margaux", -0.67, 45.04, "Southernmost of the four communes. Château Margaux."],
  ["Bordeaux city", -0.58, 44.84, "The port on the Garonne."],
  ["Pessac-Léognan", -0.63, 44.76, "Northern Graves. Château Haut-Brion. Dry reds and whites."],
  ["Sauternes", -0.34, 44.53, "Sweet botrytis wines. Château d'Yquem. Barsac is next door."],
  ["Entre-Deux-Mers", -0.25, 44.76, "Between the Garonne and Dordogne. Dry whites."],
  ["Pomerol", -0.20, 44.93, "Right Bank. Merlot on clay. No classification. Petrus."],
  ["St-Émilion", -0.155, 44.894, "Right Bank. Merlot and Cabernet Franc on limestone and clay."]
]);
PL("burgundy", [250], 1, [
  ["Chablis", 3.80, 47.81, "Chardonnay on Kimmeridgian limestone. Seven Grands Crus."],
  ["Gevrey-Chambertin", 4.97, 47.23, "Côte de Nuits. Pinot Noir."],
  ["Vosne-Romanée", 4.95, 47.16, "Côte de Nuits. Home of DRC."],
  ["Nuits-St-Georges", 4.95, 47.13, "Southern end of the Côte de Nuits."],
  ["Beaune", 4.84, 47.02, "Capital of the Burgundy wine trade."],
  ["Meursault", 4.77, 46.98, "Côte de Beaune. Chardonnay."],
  ["Puligny-Montrachet", 4.75, 46.95, "Côte de Beaune. Chardonnay, with Chassagne just south."],
  ["Mercurey", 4.72, 46.83, "Côte Chalonnaise, with Rully, Givry, Montagny, Bouzeron."],
  ["Pouilly-Fuissé", 4.74, 46.28, "Mâconnais. Chardonnay."],
  ["Morgon", 4.68, 46.16, "Beaujolais Cru. Gamay on granite. Côte du Py."]
]);
PL("loire", [250], 1, [
  ["Nantes", -1.55, 47.22, "Pays Nantais. Muscadet from Melon B, aged sur lie."],
  ["Savennières", -0.66, 47.38, "Anjou. Dry Chenin Blanc. Nicolas Joly."],
  ["Coteaux du Layon", -0.55, 47.25, "Sweet Chenin: Quarts-de-Chaume and Bonnezeaux."],
  ["Saumur", -0.08, 47.26, "Sparkling wine, and Cabernet Franc in Saumur-Champigny."],
  ["Bourgueil", 0.17, 47.28, "Touraine. Cabernet Franc."],
  ["Chinon", 0.24, 47.17, "Touraine. Cabernet Franc."],
  ["Vouvray", 0.80, 47.41, "Chenin Blanc on tuffeau: dry, off-dry, sweet, sparkling."],
  ["Sancerre", 2.84, 47.33, "Central Vineyards. Sauvignon Blanc, some Pinot Noir."],
  ["Pouilly-Fumé", 2.95, 47.28, "Across the river from Sancerre. Sauvignon Blanc on silex."]
]);
PL("rhone", [250], 1, [
  ["Lyon", 4.83, 45.76, "The city north of the vineyards."],
  ["Côte-Rôtie", 4.81, 45.49, "Syrah, sometimes co-fermented with Viognier."],
  ["Condrieu", 4.77, 45.46, "Viognier. Château-Grillet sits inside it."],
  ["Hermitage", 4.84, 45.07, "The hill of Hermitage, ringed by Crozes-Hermitage. Syrah."],
  ["Cornas", 4.85, 44.96, "100% Syrah on granite."],
  ["Montélimar", 4.75, 44.56, "Unofficial dividing line between north and south."],
  ["Gigondas", 5.00, 44.16, "Southern Cru. Grenache blends. Vacqueyras and Beaumes-de-Venise are neighbors."],
  ["Châteauneuf-du-Pape", 4.83, 44.06, "Grenache-led blends on galets."],
  ["Tavel", 4.70, 44.01, "Rosé only."],
  ["Avignon", 4.81, 43.95, "Main city of the south. Seat of the popes in the 1300s."]
]);
PL("champagne", [250], 1, [
  ["Reims", 4.03, 49.26, "City of the great houses."],
  ["Montagne de Reims", 4.15, 49.16, "Pinot Noir country."],
  ["Épernay", 3.96, 49.04, "Avenue de Champagne. Moët & Chandon."],
  ["Vallée de la Marne", 3.64, 49.07, "Along the Marne. Meunier country."],
  ["Côte des Blancs", 4.01, 48.96, "Chardonnay on chalk."],
  ["Côte de Sézanne", 3.72, 48.72, "Chardonnay, south of the Côte des Blancs."],
  ["Côte des Bar", 4.70, 48.23, "The Aube, far to the south. Pinot Noir."]
]);
PL("alsace", [250], 1, [
  ["Strasbourg", 7.75, 48.58, "Regional capital, on the Rhine."],
  ["Barr", 7.45, 48.41, "Bas-Rhin: lower and less sheltered."],
  ["Riquewihr", 7.30, 48.17, "Haut-Rhin. Hugel. Grand Cru Schlossberg is nearby."],
  ["Colmar", 7.36, 48.08, "Heart of the Haut-Rhin, one of the driest towns in France."],
  ["Guebwiller", 7.21, 47.91, "Southern Haut-Rhin, steep terraced Grands Crus."],
  ["Thann", 7.10, 47.81, "Southern end of the wine route. Rangen."]
]);
PL("southfrance", [250], 0, [
  ["Côtes de Provence", 6.48, 43.46, "Dry rosé from Grenache, Cinsault, Syrah, Mourvèdre."],
  ["Bandol", 5.75, 43.14, "Reds of at least 50% Mourvèdre. Domaine Tempier."],
  ["Limoux", 2.22, 43.05, "Mauzac, Chenin, Chardonnay. Crémant de Limoux."],
  ["Fitou", 2.98, 42.89, "Dry reds from Grenache and Carignan."],
  ["Rivesaltes", 2.87, 42.77, "Muscat de Rivesaltes, a vin doux naturel."],
  ["Banyuls", 3.13, 42.48, "Grenache vin doux naturel, at the Spanish border."],
  ["Cahors", 1.44, 44.45, "Cot (Malbec). Dry reds only."],
  ["Bergerac & Monbazillac", 0.48, 44.82, "Bordeaux varieties on the Dordogne. Monbazillac is sweet."],
  ["Madiran", -0.06, 43.55, "Tannat. Dry reds only."],
  ["Jurançon", -0.39, 43.29, "Gros and Petit Manseng, dry or off-dry."]
]);
PL("piedmont", [380], 1, [
  ["Turin", 7.69, 45.07, "Regional capital."],
  ["Gattinara & Ghemme", 8.39, 45.61, "Northern Piedmont. Nebbiolo, called Spanna."],
  ["Roero", 7.99, 44.80, "Across the Tanaro. Arneis and Nebbiolo."],
  ["Barbaresco", 8.08, 44.72, "Nebbiolo. Asili, Ovello, Montestefano, Pora."],
  ["Barolo", 7.94, 44.61, "Nebbiolo. Cannubi, Brunate, Monprivato."],
  ["Asti", 8.21, 44.90, "Moscato d'Asti, Asti and Barbera d'Asti."],
  ["Acqui Terme", 8.47, 44.68, "Brachetto d'Acqui."],
  ["Gavi", 8.80, 44.69, "Dry white from Cortese."]
]);
PL("lombardy", [380], 1, [
  ["Valtellina", 9.87, 46.17, "Alpine valley. Nebbiolo, called Chiavennasca."],
  ["Franciacorta", 9.97, 45.60, "Metodo classico sparkling wine, near Lake Iseo."],
  ["Milan", 9.19, 45.46, "Capital of Lombardy."],
  ["Reggio Emilia", 10.63, 44.70, "Lambrusco and Parmigiano country."],
  ["Modena", 10.93, 44.65, "Lambrusco di Sorbara and Grasparossa. Balsamic vinegar."],
  ["Bologna", 11.34, 44.49, "Capital of Emilia-Romagna."]
]);
PL("neitaly", [380], 1, [
  ["Bolzano", 11.35, 46.50, "Alto Adige (Südtirol). Lagrein, Pinot Bianco, Pinot Grigio."],
  ["Trento", 11.12, 46.07, "Trentino. Teroldego; metodo classico."],
  ["Valpolicella", 10.90, 45.55, "Corvina and Rondinella. Amarone, Ripasso, Recioto."],
  ["Verona", 10.99, 45.44, "The wine city of the Veneto."],
  ["Soave", 11.25, 45.42, "Garganega."],
  ["Valdobbiadene", 12.00, 45.90, "Prosecco Superiore DOCG hills, with Conegliano."],
  ["Conegliano", 12.30, 45.89, "Prosecco Superiore DOCG. Glera."],
  ["Venice", 12.33, 45.44, "Capital of the Veneto."],
  ["Collio & Colli Orientali", 13.45, 46.02, "Friuli, at the Slovenian border. Friulano, Ribolla Gialla."]
]);
PL("tuscany", [380], 1, [
  ["Florence", 11.25, 43.77, "Regional capital, north of Chianti Classico."],
  ["Chianti Classico", 11.32, 43.58, "Between Florence and Siena. At least 80% Sangiovese."],
  ["San Gimignano", 11.04, 43.47, "Vernaccia, Tuscany's white DOCG."],
  ["Siena", 11.33, 43.32, "Southern edge of Chianti Classico."],
  ["Montalcino", 11.49, 43.06, "Brunello: 100% Sangiovese."],
  ["Montepulciano", 11.78, 43.10, "Vino Nobile, from Prugnolo Gentile."],
  ["Bolgheri", 10.61, 43.23, "The coast. Bordeaux varieties. Sassicaia, Ornellaia."]
]);
PL("southitaly", [380], 1, [
  ["Jesi", 13.24, 43.52, "Marche. Verdicchio dei Castelli di Jesi."],
  ["Matelica", 13.01, 43.26, "Marche. Verdicchio di Matelica, further inland."],
  ["Montefalco", 12.65, 42.89, "Umbria. Sagrantino."],
  ["Chieti", 14.17, 42.35, "Abruzzo. Montepulciano d'Abruzzo."],
  ["Avellino", 14.79, 40.91, "Campania. Fiano di Avellino and Greco di Tufo."],
  ["Taurasi", 14.96, 41.01, "Campania. Aglianico."],
  ["Mt. Vesuvius", 14.43, 40.82, "The volcano behind Campania's soils."],
  ["Mt. Vulture", 15.63, 40.95, "Basilicata. Aglianico on an extinct volcano."],
  ["Manduria", 17.63, 40.40, "Puglia. Primitivo."],
  ["Cirò", 17.06, 39.38, "Calabria's best-known wine town."]
]);
PL("islands", [380], 0, [
  ["Mt. Etna", 14.99, 37.75, "Nerello Mascalese and Carricante on volcanic soil."],
  ["Vittoria", 14.53, 36.95, "Cerasuolo di Vittoria DOCG: Nero d'Avola and Frappato."],
  ["Marsala", 12.44, 37.80, "Sicily's fortified wine."],
  ["Palermo", 13.36, 38.12, "Capital of Sicily."],
  ["Gallura", 9.50, 40.92, "Northern Sardinia. Vermentino."],
  ["Nuoro", 9.33, 40.32, "Central Sardinia. Cannonau."],
  ["Cagliari", 9.11, 39.22, "Capital of Sardinia."]
]);
PL("galicia", [724], 1, [
  ["Santiago de Compostela", -8.54, 42.88, "Capital of Galicia."],
  ["Cambados", -8.81, 42.51, "Val do Salnés, heart of Rías Baixas Albariño."],
  ["Vigo", -8.72, 42.24, "Port city near the Miño and the Portuguese border."],
  ["Ribeira Sacra", -7.51, 42.52, "Steep river terraces. Mencía."],
  ["Valdeorras", -6.98, 42.42, "Godello and Mencía."]
]);
PL("rioja", [724], 1, [
  ["Haro", -2.85, 42.58, "Rioja Alta. The classic bodegas of the station quarter."],
  ["Laguardia", -2.58, 42.55, "Rioja Alavesa: the coolest and wettest subzone."],
  ["Logroño", -2.45, 42.47, "Regional capital, on the Ebro."],
  ["Alfaro", -1.75, 42.18, "Rioja Oriental: warmer, Mediterranean, more Garnacha."]
]);
PL("castilla", [724], 1, [
  ["Bierzo", -6.59, 42.55, "Mencía, on the way to Galicia."],
  ["Toro", -5.39, 41.52, "Tinta de Toro: ripe, concentrated Tempranillo."],
  ["Rueda", -4.96, 41.41, "Verdejo and Sauvignon Blanc."],
  ["Valladolid", -4.72, 41.65, "Regional capital on the meseta."],
  ["Peñafiel", -4.12, 41.60, "Ribera del Duero. Vega Sicilia and Pingus are nearby."],
  ["Aranda de Duero", -3.69, 41.67, "Eastern Ribera del Duero."]
]);
PL("catalonia", [724], 1, [
  ["Gratallops", 0.78, 41.19, "Village at the center of Priorat's revival."],
  ["Tarragona", 1.25, 41.12, "Coastal city south of Penedès."],
  ["Sant Sadurní d'Anoia", 1.79, 41.43, "Capital of Cava, in Penedès."],
  ["Barcelona", 2.17, 41.39, "Capital of Catalonia."]
]);
PL("spainother", [724], 0, [
  ["Getaria", -2.20, 43.30, "Getariako Txakolina, on the Basque coast."],
  ["Bilbao", -2.93, 43.26, "Bizkaiko Txakolina. Arabako Txakolina lies inland."],
  ["Jumilla", -1.33, 38.47, "Monastrell. Juan Gil."],
  ["Murcia", -1.13, 37.99, "Regional capital on the warm Mediterranean coast."],
  ["Castilla-La Mancha", -3.93, 38.99, "Where most Vinos de Pago are found."]
]);
PL("portugal", [620], 0, [
  ["Monção", -8.48, 42.08, "Vinho Verde. Alvarinho, on the Minho."],
  ["Porto & Vila Nova de Gaia", -8.62, 41.14, "Where Port is aged and shipped."],
  ["Peso da Régua", -7.79, 41.16, "Baixo Corgo, the western Douro."],
  ["Pinhão", -7.55, 41.19, "Cima Corgo, heart of the Douro."],
  ["Douro Superior", -7.14, 41.08, "The hot, dry east, toward Spain."],
  ["Dão", -7.91, 40.66, "Granite hills. Touriga Nacional."],
  ["Bairrada", -8.44, 40.44, "Near the Atlantic."],
  ["Lisbon", -9.14, 38.72, "The capital."],
  ["Alentejo", -7.91, 38.57, "The warm southern plains."],
  ["Madeira", -16.91, 32.65, "Volcanic island. Funchal is the main city."]
]);
PL("germany", [276], 0, [
  ["Ahr", 7.09, 50.54, "Small and northerly. Spätburgunder."],
  ["Mittelrhein", 7.77, 50.08, "Steep slate slopes along the Rhine gorge. Riesling."],
  ["Mosel", 7.07, 49.92, "Bernkastel, with Wehlen, Ürzig, Erden and Piesport nearby. Riesling on slate."],
  ["Rheingau", 7.98, 49.99, "Johannisberg. A long south-facing slope above the Rhine."],
  ["Nahe", 7.87, 49.82, "Riesling. Dönnhoff."],
  ["Rheinhessen", 8.34, 49.87, "The largest region."],
  ["Pfalz", 8.19, 49.41, "Warm and dry, a continuation of Alsace."],
  ["Franken", 9.93, 49.79, "Würzburg, on the Main. Silvaner in the Bocksbeutel."],
  ["Baden", 7.85, 47.99, "The warmest region. Spätburgunder."]
]);
PL("austria", [40], 0, [
  ["Wachau", 15.41, 48.36, "Steep Danube terraces. Steinfeder, Federspiel, Smaragd."],
  ["Kremstal", 15.61, 48.41, "Krems. Grüner Veltliner and Riesling."],
  ["Kamptal", 15.70, 48.48, "Langenlois. Grüner Veltliner and Riesling."],
  ["Vienna", 16.37, 48.21, "Wien, a capital with its own vineyards."],
  ["Burgenland", 16.67, 47.80, "Around Lake Neusiedl. Sweet wines and reds."],
  ["Mittelburgenland", 16.63, 47.58, "Blaufränkisch."],
  ["Styria", 15.54, 46.78, "Steiermark, in the south. Sauvignon Blanc."]
]);
PL("hungary", [348], 0, [
  ["Budapest", 19.04, 47.50, "The capital, on the Danube."],
  ["Mád", 21.28, 48.19, "A leading village of Tokaj."],
  ["Tokaj", 21.41, 48.12, "Where the Bodrog meets the Tisza. Furmint."],
  ["Sárospatak", 21.57, 48.32, "On the Bodrog River."]
]);
PL("greece", [300], 0, [
  ["Naoussa", 22.07, 40.63, "Xinomavro. Continental climate."],
  ["Thessaloniki", 22.94, 40.64, "The northern port."],
  ["Athens", 23.73, 37.98, "The capital."],
  ["Nemea", 22.66, 37.82, "Peloponnese. Agiorgitiko."],
  ["Santorini", 25.43, 36.40, "Assyrtiko on volcanic soil, basket-trained."]
]);
PL("northcoast", [840], 1, [
  ["Anderson Valley", -123.37, 39.01, "Mendocino. Cool: Pinot Noir and sparkling wine."],
  ["Healdsburg", -122.87, 38.61, "Sonoma. Dry Creek, Alexander and Russian River Valleys meet here."],
  ["Russian River Valley", -122.92, 38.47, "Sonoma. Foggy: Pinot Noir and Chardonnay."],
  ["Sonoma Coast", -123.24, 38.51, "The cold Pacific edge."],
  ["Calistoga", -122.58, 38.58, "Northern Napa: the warm end of the valley."],
  ["Howell Mountain", -122.45, 38.59, "Napa. Mountain Cabernet above the fog."],
  ["Oakville & Rutherford", -122.41, 38.45, "The valley floor heart of Napa Cabernet."],
  ["Stags Leap District", -122.31, 38.40, "Napa. Stag's Leap Wine Cellars won in Paris, 1976."],
  ["Napa", -122.29, 38.30, "The city at the valley's cool southern end."],
  ["Sonoma", -122.46, 38.29, "Site of Haraszthy's Buena Vista."],
  ["Carneros", -122.36, 38.24, "Shared by Napa and Sonoma. Cooled by San Pablo Bay."]
]);
PL("centralcoast", [840], 1, [
  ["Santa Cruz Mountains", -122.12, 37.30, "Ridge Monte Bello."],
  ["Monterey", -121.89, 36.60, "The bay that sends cold air down the Salinas Valley."],
  ["Santa Lucia Highlands", -121.45, 36.45, "Monterey County. Pinot Noir and Chardonnay."],
  ["Paso Robles", -120.69, 35.63, "San Luis Obispo County. Warm, with big diurnal shifts."],
  ["San Luis Obispo", -120.66, 35.28, "The county seat, near the coast."],
  ["Santa Maria Valley", -120.44, 34.95, "Santa Barbara County. Cool. Au Bon Climat."],
  ["Sta. Rita Hills", -120.35, 34.63, "Santa Barbara County. Pinot Noir and Chardonnay."],
  ["Santa Ynez Valley", -120.11, 34.67, "Warmer moving inland."],
  ["Happy Canyon", -119.95, 34.62, "The warm eastern end. Bordeaux varieties."],
  ["Santa Barbara", -119.70, 34.42, "The city at the southern end."]
]);
PL("newyork", [840], 0, [
  ["Lake Erie", -79.33, 42.44, "A long grape belt on the lake shore. Much Concord."],
  ["Keuka Lake", -77.22, 42.41, "Finger Lakes. Dr. Konstantin Frank."],
  ["Seneca Lake", -76.95, 42.70, "The deepest Finger Lake. Riesling."],
  ["Cayuga Lake", -76.60, 42.60, "Finger Lakes."],
  ["Hudson River Region", -74.09, 41.75, "One of America's oldest wine regions."],
  ["New York City", -74.00, 40.71, "The market."],
  ["Long Island", -72.49, 41.01, "North Fork. Atlantic-moderated: Merlot, Cabernet Franc."]
]);
PL("pnw", [840], 0, [
  ["Seattle", -122.33, 47.61, "West of the Cascades, on the wet side."],
  ["Yakima Valley", -120.51, 46.60, "Washington's first AVA."],
  ["Red Mountain", -119.48, 46.27, "Small, warm. Cabernet Sauvignon."],
  ["Horse Heaven Hills", -119.90, 45.95, "Above the Columbia River."],
  ["Walla Walla", -118.34, 46.06, "Shared by Washington and Oregon. Leonetti, L'Ecole No. 41."],
  ["Columbia Gorge", -121.52, 45.71, "Where the Columbia cuts through the Cascades."],
  ["Portland", -122.68, 45.52, "At the top of the Willamette Valley."],
  ["Dundee Hills", -123.01, 45.28, "Volcanic soils. Eyrie, Domaine Drouhin."],
  ["McMinnville", -123.20, 45.21, "At the mouth of the Van Duzer Corridor."],
  ["Eola-Amity Hills", -123.10, 44.98, "Cooled by Pacific wind through the corridor."]
]);
PL("canada", [124], 0, [
  ["Niagara Peninsula", -79.07, 43.20, "Ontario. Between Lake Ontario and Lake Erie. Icewine. Inniskillin."],
  ["Toronto", -79.38, 43.65, "Across Lake Ontario from Niagara."],
  ["Kelowna", -119.50, 49.89, "Okanagan Valley, British Columbia, on Lake Okanagan."],
  ["Osoyoos", -119.44, 49.03, "Southern Okanagan: Canada's only desert."]
]);
PL("mexico", [484], 0, [
  ["Tecate", -116.63, 32.57, "Northern end of the Baja wine route."],
  ["Valle de Guadalupe", -116.60, 32.07, "About 90% of Mexican wine."],
  ["Ensenada", -116.60, 31.87, "The port below the valley."],
  ["Parras", -102.18, 25.44, "Coahuila. Home of the oldest winery in the Americas, founded in 1597."]
]);
PL("chile", [152], 0, [
  ["Atacama Desert", -69.60, -24.50, "The barrier to the north."],
  ["Aconcagua", -70.72, -32.75, "Warm inland valley north of Santiago."],
  ["Casablanca", -71.41, -33.32, "West of the Coastal Range. Cool: whites and Pinot Noir."],
  ["Santiago", -70.65, -33.45, "The capital."],
  ["Maipo", -70.55, -33.70, "Cabernet Sauvignon. Concha y Toro, Santa Rita."],
  ["Cachapoal", -70.74, -34.17, "Northern half of Rapel."],
  ["Colchagua", -71.36, -34.64, "Southern half of Rapel. Carménère, Syrah."],
  ["Curicó", -71.24, -34.98, "Valle Central."],
  ["Maule", -71.66, -35.43, "Southern Valle Central. Old vines, País."]
]);
PL("argentina", [32], 0, [
  ["Salta", -65.41, -24.79, "The far north, with the highest vineyards."],
  ["Cafayate", -65.98, -26.07, "Torrontés."],
  ["San Juan", -68.54, -31.54, "North of Mendoza."],
  ["Mendoza", -68.84, -32.89, "The capital of Argentine wine."],
  ["Luján de Cuyo", -68.90, -33.08, "Classic Malbec."],
  ["Uco Valley", -69.10, -33.60, "Higher, cooler Malbec."],
  ["Patagonia", -68.06, -38.95, "Neuquén and Río Negro. Cool: Pinot Noir, Malbec."]
]);
PL("southafrica", [710], 1, [
  ["Swartland", 18.73, -33.46, "Old bush vines. Chenin Blanc, Syrah. Eben Sadie."],
  ["Paarl", 18.97, -33.73, "Home of the KWV."],
  ["Franschhoek", 19.12, -33.91, "Valley settled by French Huguenots."],
  ["Stellenbosch", 18.86, -33.93, "The best-known district."],
  ["Cape Town", 18.42, -33.92, "Under Table Mountain."],
  ["Constantia", 18.43, -34.03, "Historic sweet wine. Klein Constantia."],
  ["Elgin", 19.03, -34.15, "Cool, high plateau."],
  ["Walker Bay", 19.23, -34.42, "Hermanus. Pinot Noir and Chardonnay. Hamilton Russell."],
  ["Cape Agulhas", 20.00, -34.80, "Africa's southern tip."]
]);
PL("newzealand", [554], 0, [
  ["Auckland", 174.76, -36.85, "The largest city."],
  ["Gisborne", 178.02, -38.66, "Chardonnay."],
  ["Hawke's Bay", 176.84, -39.64, "Gimblett Gravels. Bordeaux blends and Syrah."],
  ["Martinborough", 175.46, -41.22, "Wairarapa. Pinot Noir."],
  ["Nelson", 173.28, -41.27, "Aromatic whites."],
  ["Marlborough", 173.96, -41.51, "Wairau Valley. Sauvignon Blanc. Cloudy Bay."],
  ["Awatere Valley", 174.07, -41.70, "Cooler, windier southern Marlborough."],
  ["Canterbury", 172.75, -43.06, "Waipara. Riesling and Pinot Noir."],
  ["Central Otago", 169.20, -45.04, "The only continental region. Pinot Noir. Felton Road."]
]);
PL("australia", [36], 0, [
  ["Margaret River", 115.07, -33.95, "Western Australia. Cabernet blends and Chardonnay."],
  ["Clare Valley", 138.61, -33.83, "Dry Riesling."],
  ["Barossa Valley", 138.96, -34.52, "Old-vine Shiraz. Penfolds."],
  ["Eden Valley", 139.12, -34.65, "Higher and cooler than Barossa. Riesling."],
  ["Adelaide", 138.60, -34.93, "Capital of South Australia."],
  ["McLaren Vale", 138.54, -35.22, "Shiraz and Grenache by the sea."],
  ["Coonawarra", 140.83, -37.29, "Cabernet Sauvignon on terra rossa."],
  ["Yarra Valley", 145.52, -37.65, "Victoria. Pinot Noir and Chardonnay."],
  ["Rutherglen", 146.46, -36.05, "Victoria. Fortified Muscat."],
  ["Riverina", 146.04, -34.29, "Irrigated, high-volume New South Wales."],
  ["Hunter Valley", 151.28, -32.78, "New South Wales. Semillon."],
  ["Sydney", 151.21, -33.87, "First vines planted nearby in 1788."],
  ["Tasmania", 147.14, -41.44, "Cool island. Sparkling wine and Pinot Noir."]
]);
PL("fortified", [724, 620], 0, [
  ["Jerez de la Frontera", -6.13, 36.69, "Sherry. Palomino on albariza."],
  ["Sanlúcar de Barrameda", -6.35, 36.78, "On the coast. Manzanilla."],
  ["El Puerto de Santa María", -6.23, 36.60, "Third town of the Sherry triangle."],
  ["Vila Nova de Gaia", -8.62, 41.14, "Port lodges, across the river from Porto."],
  ["Pinhão", -7.55, 41.19, "Douro vineyards on schist."],
  ["Funchal", -16.91, 32.65, "Madeira."],
  ["Marsala", 12.44, 37.80, "Sicily."],
  ["Banyuls", 3.13, 42.48, "Roussillon. Grenache vin doux naturel."],
  ["Beaumes-de-Venise", 5.03, 44.12, "Southern Rhône. Muscat vin doux naturel."]
]);
PL("beer", [203, 276, 56, 826, 372], 0, [
  ["Plzeň", 13.38, 49.75, "Czech Republic. Birthplace of Pilsner, 1842."],
  ["Žatec", 13.55, 50.33, "Home of Saaz hops."],
  ["Munich", 11.58, 48.14, "Oktoberfest, Hefeweizen, Doppelbock."],
  ["Hallertau", 11.75, 48.63, "Bavaria's hop-growing region."],
  ["Einbeck", 9.87, 51.82, "Origin of Bock."],
  ["Brussels", 4.35, 50.85, "Lambic, fermented by wild yeast."],
  ["Burton upon Trent", -1.64, 52.80, "England. Pale ale and IPA."],
  ["London", -0.12, 51.51, "Porter."],
  ["Dublin", -6.26, 53.35, "Irish dry stout."]
]);
PL("sake", [392], 0, [
  ["Nada", 135.25, 34.72, "Kobe, Hyogo. Japan's largest sake district."],
  ["Fushimi", 135.76, 34.93, "Kyoto. Soft water, gentle sake."],
  ["Saijo", 132.74, 34.43, "Hiroshima's brewing town."],
  ["Niigata", 139.04, 37.90, "Known for crisp, dry sake."],
  ["Akita", 140.10, 39.72, "Northern rice country."]
]);
