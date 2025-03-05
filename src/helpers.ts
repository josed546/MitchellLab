// import * as fs from 'fs';

// const indexedJsonToArray = (indexedJson) => {
//     // Get the highest index to determine array size
//     const maxIndex = Math.max(...Object.keys(indexedJson).map(Number));

//     // Create array with correct size, filled with null
//     const resultArray = new Array(maxIndex + 1).fill(null);

//     // Place each value at its corresponding index
//     Object.entries(indexedJson).forEach(([index, value]) => {
//         const yearMatch = value["Journal Year"].match(/\((\d{4})\)/);
//         const year = yearMatch ? parseInt(yearMatch[1]) : null;
//         value["year"] = year
//         resultArray[Number(index)] = value;
//     });

//     return resultArray;
// }

// const jsonObject = {
//     140: {
//         "Title": "BRANCHED ENDOSOMAL DISRUPTOR (BEND) LIPIDS MEDIATE DELIVERY OF mRNA AND CRISPR-CAS9 RIBONUCLEOPROTEIN COMPLEX FOR HEPATIC GENE EDITING AND T CELL ENGINEERING",
//         "Authors": "M.S. Padilla, K. Mrksich, Y. Wang, R.M. Haley, J.J. Li, E.L. Han, R. El-Mayta, E.H. Kim, S. Dias, N. Gong, S.V. Teerdhala, X. Han, V. Chowdhary, L. Xue, Z. Siddiqui, H.M. Yamagata, D. Kim, I.C. Yoon, J.M. Wilson, R. Radhakrishnan, M.J. Mitchell",
//         "Journal Year": "Nature Communications (2025)"
//     },
//     139: {
//         "Title": "PLACENTA-TROPIC VEGF mRNA LIPID NANOPARTICLES AMERLIORATE MURINE PRE-ECLAMPSIA",
//         "Authors": "K.L. Swingle, A.G. Hamilton, H.C. Safford, H.C. Geisler, A.S. Thatte, R. Palanki, A.M. Murray, E.L. Han, A.J. Mukalel, X. Han, R.A. Joseph, A.A. Ghalsasi, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature (2025)"
//     },
//     138: {
//         "Title": "MULTIARM-ASSISTED DESIGN OF DENDRON-LIKE IONIZABLE LIPIDS FACILITATES SYSTEMIC mRNA DELIVERY TO THE SPLEEN",
//         "Authors": "L. Xue, X. Xiong, G. Zhao, W. Molina-Arocho, R. Palanki, Z. Xiao, X. Han. I.C. Yoon, C.G. Figueroa-Espada, J. Xu, N. Gong, Q. Shi, Q. Chen, M.G. Alameh, A.E. Vaughan, M. Haldar, K. Wang D. Weissman, M.J. Mitchell",
//         "Journal Year": "Journal of the American Chemical Society (2025)"
//     },
//     137: {
//         "Title": "PEPTIDE-FUNCTIONALIZED LIPID NANOPARTICLES FOR TARGETED SYSTEMIC mRNA DELIVERY TO THE BRAIN",
//         "Authors": "E.L. Han, S. Tang, D. Kim, A.M. Murray, K.L. Swingle, A.G. Hamilton, K. Mrksich, M.S. Padilla, R. Palanki, J.J. Li, M.J. Mitchell",
//         "Journal Year": "Nano Letters (2025)"
//     },
//     136: {
//         "Title": "COMBINATORIAL DESIGN OF SILOXANE-INCORPORATED LIPID NANOPARTICLES AUGMENTS INTRACELLULAR PROCESSING FOR TISSUE-SPECIFIC mRNA THERAPEUTIC DELIVERY",
//         "Authors": "L. Xue, G. Zhao, N. Gong, X. Han, S.J. Shepherd, X. Xiong, Z. Xiao, R. Palanki, J. Xu, K.L. Swingle, C.C. Warzecha, R. El-Mayta, V. Chowdhary, I.C. Yoon, J. Xu, J. Cui, Y. Shi, M.G. Alameh, K. Wang, L. Wang, D.J. Pochan, D. Weissman, A.E. Vaughan, J.M. Wilson, M.J. Mitchell",
//         "Journal Year": "Nature Nanotechnology (2025)"
//     },
//     135: {
//         "Title": "SMALL STRUCTURAL CHANGES IN SILOXANE-BASED LIPIDOIDS IMPROVE TISSUE-SPECIFIC mRNA DELIVERY",
//         "Authors": "L. Xue, K.L. Swingle, M.J. Mitchell",
//         "Journal Year": "Nature Nanotechnology (2025)"
//     },
//     134: {
//         "Title": "PIPERAZINE-DERIVED BISPHOSPHONATE-BASED IONIZABLE LIPID NANOPARTICLES ENHANCE mRNA DELIVERY TO THE BONE MICROENVIRONMENT",
//         "Authors": "I.C. Yoon, L. Xue, Q. Chen, J. Liu, J. Xu, Z. Siddiqui, D. Kim, B. Chen, Q. Shi, E.L. Han, M.C. Ruiz, K.H. Vining, M.J. Mitchell",
//         "Journal Year": "Angewandte Chemie (2025)"
//     },
//     133: {
//         "Title": "ROBUST, SCALABLE MICROFLUIDIC MANUFACTURING OF RNA-LIPID NANOPARTICLES USING IMMOBILIZED ANTIFOULING LUBRICANT COATING",
//         "Authors": "Y.H. Hwang, S.J. Shepherd, D. Kim, A.J. Mukalel, M.J. Mitchell, D.A. Issadore, D. Lee",
//         "Journal Year": "ACS Nano (2025)"
//     },
//     132: {
//         "Title": "TOWARDS THE CLINICAL TRANSLATION OF A SILVER SULFIDE NANOPARTICLE CONTRAST AGENT: LARGE SCALE PRODUCTION WITH A HIGHLY PARALLELIZED MICROFLUIDIC CHIP",
//         "Authors": "K.J. Mossburg, S.J. Shepherd, D. Barragan, E.K. Berkow, P.S.N. Maidment, D.N.R. Berrios, J.C. Hsu, M.J. Siedlik, S. Yadavali, M.J. Mitchell, D. Issadore, D.P. Cormode",
//         "Journal Year": "European Journal of Nuclear Medicine and Molecular Imaging (2025)"
//     },
//     131: {
//         "Title": "OPTIMIZATION OF THE ACTIVITY AND BIODEGRADABILITY OF IONIZABLE LIPIDS FOR mRNA DELIVERY VIA DIRECTED CHEMICAL EVOLUTION",
//         "Authors": "X. Han, M.G. Alameh, Y. Xu, R. Palanki, R. El-Mayta, G. Dwivedi, K.L. Swingle, J. Xu, N. Gong, L. Xue, Q. Shi, I.C. Yoon, C.C. Warzecha, J.M. Wilson, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature Biomedical Engineering (2024)"
//     },
//     130: {
//         "Title": "TUMOUR-DERIVED SMALL EXTRACELLULAR VESICLES ACT AS A BARRIER TO THERAPEUTIC NANOPARTICLE DELIVERY",
//         "Authors": "N. Gong, W. Zhong, M.G. Alameh, X. Han, L. Xue, R. El-Mayta, G. Zhao, A.E. Vaughan, Z. Qin, F. Xu, A.G. Hamilton, D. Kim, J. Xu, J. Kim, X. Teng, J. Li, X.J. Liang, D. Weissman, W. Guo, M.J. Mitchell",
//         "Journal Year": "Nature Materials (2024)"
//     },
//     129: {
//         "Title": "BRANCHED ENDOSOMAL DISRUPTOR (BEND) LIPIDS MEDIATE DELIVERY OF mRNA AND CRISPR-CAS9 RIBONUCLEOPROTEIN COMPLEX FOR HEPATIC GENE EDITING AND T CELL ENGINEERING",
//         "Authors": "M.S. Padilla, K. Mrksich, Y. Wang, R.M. Haley, J.J. Li, E.L. Han, R. El-Mayta, E.H. Kim, S. Dias, N. Gong, S.V. Teerdhala, X. Han, V. Chowdhary, L. Xue, Z. Siddiqui, H.M. Yamagata, D. Kim, I.C. Yoon, J.M. Wilson, R. Radhakrishnan, M.J. Mitchell",
//         "Journal Year": "Nature Communications (2025)"
//     },
//     128: {
//         "Title": "PLACENTA-TROPIC VEGF mRNA LIPID NANOPARTICLES AMERLIORATE MURINE PRE-ECLAMPSIA",
//         "Authors": "K.L. Swingle, A.G. Hamilton, H.C. Safford, H.C. Geisler, A.S. Thatte, R. Palanki, A.M. Murray, E.L. Han, A.J. Mukalel, X. Han, R.A. Joseph, A.A. Ghalsasi, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature (2025)"
//     },
//     127: {
//         "Title": "MULTIARM-ASSISTED DESIGN OF DENDRON-LIKE IONIZABLE LIPIDS FACILITATES SYSTEMIC mRNA DELIVERY TO THE SPLEEN",
//         "Authors": "L. Xue, X. Xiong, G. Zhao, W. Molina-Arocho, R. Palanki, Z. Xiao, X. Han, I.C. Yoon, C.G. Figueroa-Espada, J. Xu, N. Gong, Q. Shi, Q. Chen, M.G. Alameh, A.E. Vaughan, M. Haldar, K. Wang D. Weissman, M.J. Mitchell",
//         "Journal Year": "Journal of the American Chemical Society (2025)"
//     },
//     126: {
//         "Title": "PEPTIDE-FUNCTIONALIZED LIPID NANOPARTICLES FOR TARGETED SYSTEMIC mRNA DELIVERY TO THE BRAIN",
//         "Authors": "E.L. Han, S. Tang, D. Kim, A.M. Murray, K.L. Swingle, A.G. Hamilton, K. Mrksich, M.S. Padilla, R. Palanki, J.J. Li, M.J. Mitchell",
//         "Journal Year": "Nano Letters (2025)"
//     },
//     125: {
//         "Title": "OLAH CONNECTS FATTY ACID METABOLISM TO THE SEVERITY OF RESPIRATORY VIRAL DISEASE",
//         "Authors": "R. Palanki, H. Yamagata, M.J. Mitchell",
//         "Journal Year": "Cell (2024)"
//     },
//     124: {
//         "Title": "IN UTERO DELIVERY OF TARGETED IONIZABLE LIPID NANOPARTICLES FACILITATES IN VIVO GENE EDITING OF HEMATOPOIETIC STEM CELLS",
//         "Authors": "R. Palanki, J.S. Riley, S.K. Bose, V. Luks, A. Dave, N. Kus, B.M. White, A.S. Ricciardi, K.L. Swingle, L. Xue, D. Sung, A.S. Thatte, H.C. Safford, V.S. Chaluvadi, M. Carpenter, E.L. Han, R. Maganti, A.G. Hamilton, K. Mrksich, M. Billingsley, P.W. Zoltick, M.G. Alameh, D. Weissman, M.J. Mitchell, W.H. Peranteau",
//         "Journal Year": "PNAS (2024)"
//     },
//     123: {
//         "Title": "DRUG DELIVERY TECHNOLOGIES FOR AUTOIMMUNITY THERAPIES",
//         "Authors": "A.S. Thatte, J.D. Weaver, R. Pearson, M.J. Mitchell",
//         "Journal Year": "Advanced Drug Delivery Reviews (2024)"
//     },
//     122: {
//         "Title": "FLOW CYTOMETRIC ANALYSIS OF THE MURINE PLACENTA TO EVALUATE NANOPARTICLE PLATFORMS DURING PREGNANCY",
//         "Authors": "K.L. Swingle, A.G. Hamilton, M.J. Mitchell",
//         "Journal Year": "Placenta (2024)"
//     },
//     121: {
//         "Title": "OPTIMIZED MICROFLUIDIC FORMULATION AND ORGANIC EXCIPIENTS FOR IMPROVED LIPID NANOPARTICLE MEDIATED GENOME EDITING",
//         "Authors": "R. Palanki, E.L. Han, A.M. Murray, R. Maganti, S. Tang, K.L. Swingle, D. Kim, H. Yamagata, H.C. Safford, K. Mrksich, W.H. Peranteau, M.J. Mitchell",
//         "Journal Year": "Lab on a Chip (2024)"
//     },
//     120: {
//         "Title": "FAST AND FACILE SYNTHESIS OF AMIDINE-INCORPORATED DEGRADABLE LIPIDS FOR VERSATILE mRNA DELIVERY IN VIVO",
//         "Authors": "X. Han, M.G. Alameh, N. Gong, L. Xue, M. Ghattas, G. Boija, J. Xu, G. Zhao, C.C. Warzecha, M.S. Padilla, R. El-Mayta, G. Dwivedi, Y. Xu, A.E. Vaughan, J.M. Wilson, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature Chemistry (2024)"
//     },
//     119: {
//         "Title": "LIPID-MEDIATED INTRACELLULAR DELIVERY OF RECOMBINANT bioPROTACs FOR THE RAPID DEGRADATION OF UNDRUGGABLE TARGETS",
//         "Authors": "A. Chan, R.M. Haley, M.A. Najar, D. Gonzalez-Martinez, L. Bugaj, G.M. Burslem, M.J. Mitchell, A. Tsourkas",
//         "Journal Year": "Nature Communications (2024)"
//     },
//     118: {
//         "Title": "ENHANCING IN SITU VACCINES USING DELIVERY TECHNOLOGIES",
//         "Authors": "N. Gong, M.G. Alameh, R. El-Mayta, L. Xue, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature Reviews Drug Discovery (2024)"
//     },
//     117: {
//         "Title": "HIGH-THROUGHPUT IN VIVO SCREENING IDENTIFIES DIFFERENTIAL INFLUENCES ON mRNA LIPID NANOPARTICLE IMMUNE CELL DELIVERY BY ADMINISTRATION ROUTE",
//         "Authors": "A.G. Hamilton, K.L. Swingle, A.S. Thatte, A.J. Mukalel, H.C. Safford, M.M. Billingsley, R. El-Mayta, X. Han, B.E. Nachod, R.A. Joseph, A.E. Metzloff, M.J. Mitchell",
//         "Journal Year": "ACS Nano (2024)"
//     },
//     116: {
//         "Title": "EGFR-TARGETED IONIZABLE LIPID NANOPARTICLES ENHANCE IN VIVO mRNA DELIVERY TO THE PLACENTA",
//         "Authors": "H.C. Geisler, A.A. Ghalsasi, H.C. Safford, K.L. Swingle, A.S. Thatte, A.J. Mukalel, N. Gong, A.G. Hamilton, E.L. Han, B.E. Nachod, M.S. Padilla, M.J. Mitchell",
//         "Journal Year": "Journal of Controlled Release (2024)"
//     },
//     115: {
//         "Title": "MECHANISMS AND BARRIERS IN NANOMEDICINE: PROGRESS IN THE FIELD AND FUTURE DIRECTIONS",
//         "Authors": "T. Anchordoquy, N. Artzi, I.V. Balyasnikova, Y. Barenholz, N.M. La-Beck, J.S. Brenner, W.C.W. Chan, P. Decuzzi, A.A. Exner, A. Gabizon, B. Godin, S.K. Lai, T. Lammers, M.J. Mitchell, S.M. Moghimi, V.R. Muzykantov, D. Peer, J. Nguyen, R. Popovtzer, M. Ricco, N.J. Serkova, R. Singh, A. Schroeder, A.A. Schwendeman, J.P. Straehla, T. Teesalu, S. Tilden, D. Simberg",
//         "Journal Year": "ACS Nano (2024)"
//     },
//     114: {
//         "Title": "VASCULAR ENDOTHELIAL-DERIVED SPARCL1 EXACERBATES VIRAL PNEUMONIA THROUGH PRO-INFLAMMATORY MACROPHAGE ACTIVATION",
//         "Authors": "G. Zhao, M.E. Gentile, L. Xue, C.V. Cosgriff, A.I. Weiner, S. Adams-Tzivelekidis, J. Wong, X. Li, S. Kass-Gergi, N.P. Holcomb, M.C. Basal, K.M. Stewart, J.D. Planer, E. Cantu, J.D. Christie, M.M. Crespo, M.J. Mitchell, N.J. Meyer, A.E. Vaughan",
//         "Journal Year": "Nature Communications (2024)"
//     },
//     113: {
//         "Title": "IONIZABLE LIPID NANOPARTICLES FOR RAS PROTEASE DELIVERY TO INHIBIT CANCER CELL PROLIFERATION",
//         "Authors": "E. Atsavapranee, R.M. Haley, M.M. Billingsley, A. Chan, B. Ruan, C.G. Figueroa-Espada, N. Gong, A.J. Mukalel, P.N. Bryan, M.J. Mitchell",
//         "Journal Year": "Journal of Controlled Release (2024)"
//     },
//     112: {
//         "Title": "ANTIGEN PRESENTING CELL MIMETIC LIPID NANOPARTICLES FOR RAPID mRNA CAR T CELL CANCER IMMUNOTHERAPY",
//         "Authors": "A.E. Metzloff, M.S. Padilla, N. Gong, M.M. Billingsley, X. Han, M. Merolle, D. Mai, C.G. Figueroa-Espada, A.S. Thatte, R.M. Haley, A.J. Mukalel, A.G. Hamilton, M.G. Alameh, D. Weissman, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "Journal Year": "Advanced Materials (2024)"
//     },
//     111: {
//         "Title": "INFLUENCE OF IONIZABLE LIPID TAIL LENGTH ON LIPID NANOPARTICLE DELIVERY OF mRNA OF VARYING LENGTH",
//         "Authors": "K. Mrksich, M.S. Padilla, R.A. Joseph, E.L. Han, D. Kim, R. Palanki, J. Xu, M.J. Mitchell",
//         "Journal Year": "Journal of Biomedical Materials Research Part A (2024)"
//     },
//     110: {
//         "Title": "IONIZABLE LIPID NANOPARTICLE-MEDIATED TRAIL mRNA DELIVERY IN THE TUMOR MICROENVIRONMENT TO INHIBIT COLON CANCER PROGRESSION",
//         "Authors": "W.N. Silva, P.A.C. Costa, S.R.A. Scalzo, H.A.S. Ferreira, P.H.D.M. Prazeres, C.L.V. Campos, M.T. Rodrigues Alves, N.J. Alves da Silva, A.L. de Castro Santos, L.C. Guimaraes, M.E.C. Ferris, A.S. Thatte, A.G. Hamilton, K.A. Bicalho, A.O. Lobo, H.D.C. Santiago, L. da Silva Barcelos, M.M. Figueredo, M.M. Teixeira, C. Vasconcelos Costa, M.J. Mitchell, F. Frezard, P.P.G. Guimaraes",
//         "Journal Year": "International Journal of Nanomedicine (2024)"
//     },
//     109: {
//         "Title": "OXIDIZED mRNA LIPID NANOPARTICLES FOR IN SITU CHIMERIC ANTIGEN RECEPTOR MONOCYTE ENGINEERING",
//         "Authors": "A.J. Mukalel, A.G. Hamilton, M.M. Billingsley, J. Li, A.S. Thatte, X. Han, H.C. Safford, M.S. Padilla, T. Papp, H. Parhiz, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Advanced Functional Materials (2024)"
//     },
//     108: {
//         "Title": "HIGH-THROUGHPUT BARCODING OF NANOPARTICLES IDENTIFIES CATIONIC, DEGRADABLE LIPID-LIKE MATERIALS FOR mRNA DELIVERY TO THE LUNGS IN FEMALE PRECLINICAL MODELS",
//         "Authors": "L. Xue, A.G. Hamilton, G. Zhao, Z. Xiao, R. El-Mayta, X. Han, N. Gong, X. Xiong, J. Xu, C.G. Figueroa-Espada, S.J. Shepherd, A.J. Mukalel, M.G. Alameh, J. Cui, K. Wang, A.E. Vaughan, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature Communications (2024)"
//     },
//     107: {
//         "Title": "IN SITU COMBINATORIAL SYNTHESIS OF DEGRADABLE BRANCHED LIPIDOIDS FOR SYSTEMIC DELIVERY OF mRNA THERAPEUTICS AND GENE EDITORS",
//         "Authors": "X. Han, J. Xu, Y. Xu, M.G. Alameh, L. Xue, N. Gong, R. El-Mayta, R. Palanki, C.C. Warzecha, G. Zhao, A.E. Vaughan, J.M. Wilson, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature Communications (2024)"
//     },
//     106: {
//         "Title": "SMALL-MOLECULE-MEDIATED CONTROL OF THE ANTI-TUMOUR ACTIVITY AND OFF-TUMOUR TOXICITY OF A SUPRAMOLECULAR BISPECIFIC T CELL ENGAGER",
//         "Authors": "N. Gong, X. Han, L. Xue, M.M. Billingsley, X. Huang, R. El-Mayta, J. Qin, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "Journal Year": "Nature Biomedical Engineering (2024)"
//     },
//     105: {
//         "Title": "EMERGING STRATEGIES FOR NANOMEDICINE IN AUTOIMMUNITY",
//         "Authors": "A.S. Thatte, M.M. Billingsley, D. Weissman, J.R. Melamed, M.J. Mitchell",
//         "Journal Year": "Advanced Drug Delivery Reviews (2024)"
//     },
//     104: {
//         "Title": "AN IMMUNOSUPPRESSIVE VASCULAR NICHE DRIVES MACROPHAGE POLARIZATION AND IMMUNOTHERAPY RESISTANCE IN GLIOBLASTOMA",
//         "Authors": "F. Yang, M.N. Akhtar, D. Zhang, R. El-Mayta, J. Shin, J.F. Dorsey, L. Zhang, X. Xu, W. Guo, S.J. Bagley, S.Y. Fuchs, C. Koumenis, J.D. Lathia, M.J. Mitchell, Y. Gong, Y. Fan",
//         "Journal Year": "Science Advances (2024)"
//     },
//     103: {
//         "Title": "PRECISION TREATMENT OF VIRAL PNEUMONIA THROUGH MACROPHAGE-TARGETED LIPID NANOPARTICLE DELIVERY",
//         "Authors": "G. Zhao, L. Xue, H.C. Geisler, J. Xu, X. Li, M.J. Mitchell, A.E. Vaughan",
//         "Journal Year": "PNAS (2024)"
//     },
//     102: {
//         "Title": "TGF-βR2 SIGNALING COORDINATES PULMONARY VASCULAR REPAIR AFTER VIRAL INJURY IN MICE AND HUMAN TISSUE",
//         "Authors": "G. Zhao, L. Xue, A.I. Weiner, N. Gong, S. Adams-Tzivelekidis, J. Wong, M.E. Gentile, A.N. Nottingham, M.C. Basil, S.M. Lin, T.K. Niethamer, J.M. Diamond, C.A. Bermudez, E. Cantu, X. Han, Y. Cao, M.G. Alameh, D. Weissman, E.E. Morrisey, M.J. Mitchell, A.E. Vaughan",
//         "Journal Year": "Science Translational Medicine (2024)"
//     },
//     101: {
//         "Title": "MICROFLUIDIC GENERATION OF DIVERSE LIPID NANOPARTICLE LIBRARIES",
//         "Authors": "A. Hanna, S.J. Shepherd, D. Issadore, M.J. Mitchell",
//         "Journal Year": "Nanomedicine (2024)"
//     },
//     100: {
//         "Title": "PREDICTIVE HIGH-THROUGHPUT PLATFORM FOR DUAL SCREENING OF mRNA LIPID NANOPARTICLE BLOOD-BRAIN BARRIER TRANSFECTION AND CROSSING",
//         "Authors": "E.L. Han, M.S. Padilla, R. Palanki, D. Kim, K. Mrksich, J.J. Li, S. Tang, I.C. Yoon, M.J. Mitchell",
//         "Journal Year": "Nano Letters (2024)"
//     },
//     99: {
//         "Title": "NANOPARTICLE-BASED DNA VACCINE PROTECTS AGAINST SARS-CoV-2 VARIANTS IN FEMALE PRECLINICAL MODELS",
//         "Authors": "L.C. Guimaraes, P.A.C. Costa, S.R.A. Scalzo Junior, H.A.S. Ferreira, A.C.S. Braga, L.C. de Oliveira, M.M. Figueiredo, S.J. Shepherd, A.G. Hamilton, C.M. Queiroz-Junior, W.N. da Silva, N.J.A. da Silva, M.T.R. Alves, A.K. Santos, K.K.S. da Faria, F.M. Marim, H. Fukumasu, A. Birbair, A. Teixeira-Carvalho, R.S. de Aguiar, M.J. Mitchell, M.M. Teixeira, V.V. Costa, F. Frezard, P.P.G. Guimaraes",
//         "Journal Year": "Nature Communications (2024)"
//     },
//     98: {
//         "Title": "RESPONSIVE BIOMATERIALS: OPTIMIZING CONTROL OF CANCER IMMUNOTHERAPY",
//         "Authors": "L. Xue, A.S. Thatte, D. Mai, R.M. Haley, N. Gong, X. Han, K. Wang, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "Journal Year": "Nature Reviews Materials (2024)"
//     },
//     97: {
//         "Title": "AN ONCOLYTIC CIRCULAR RNA THERAPY",
//         "Authors": "A.G. Hamilton, M.J. Mitchell",
//         "Journal Year": "Nature Cancer (2024)"
//     },
//     96: {
//         "Title": "siRNA LIPID NANOPARTICLES FOR CXCL12 SILENCING MODULATE BRAIN IMMUNE RESPONSE DURING ZIKA INFECTION",
//         "Authors": "P.A.C. Costa, W.N. da Silva, P.H.D.M. Prazeres, H.A.S. Ferreira, N.J.A. da Silva, M.M. Figueiredo, B. Oliveira, S.R.A. Scalzo, F.R. Santos, R.A. Fernandes, R. Palanki, A.G. Hamilton, A. Birbair, V.R. Santos, A.S. de Miranda, M.J. Mitchell, M.M. Teixeira, V.V. Costa, P.P.G. Guimaraes",
//         "Journal Year": "Biomedicine & Pharmacotherapy (2024)"
//     },
//     95: {
//         "Title": "BILE ACID-CONTAINING LIPID NANOPARTICLES ENHANCE EXTRAHEPATIC mRNA DELIVERY",
//         "Authors": "S.K. Patel, M.M. Billingsley, A.J. Mukalel, A.S. Thatte, A.G. Hamilton, N. Gong, R. El-Mayta, H.C. Safford, M. Merolle, M.J. Mitchell",
//         "Journal Year": "Theranostics (2024)"
//     },
//     94: {
//         "Title": "IN VIVO mRNA CAR T CELL ENGINEERING VIA TARGETED LIPID NANOPARTICLES WITH EXTRAHEPATIC TROPISM",
//         "Authors": "M.M. Billingsley, N. Gong, A.J. Mukalel, A.S. Thatte, R. El-Mayta, S.K. Patel, A.E. Metzloff, K.L. Swingle, X. Han, L. Xue, A.G. Hamilton, H.C. Safford, M.G. Alameh, T.E. Papp, H. Parhiz, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Small (2023)"
//     },
//     93: {
//         "Title": "ORTHOGONAL DESIGN OF EXPERIMENTS FOR ENGINEERING OF LIPID NANOPARTICLES FOR mRNA DELIVERY TO THE PLACENTA",
//         "Authors": "H.C. Safford, K.L. Swingle, H.C. Geisler, A.G. Hamilton, A.S. Thatte, A.A. Ghalsasi, M.M. Billingsley, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Small (2023)"
//     },
//     92: {
//         "Title": "RATIONAL DESIGN OF NANOMEDICINE FOR PLACENTAL DISORDERS: BIRTHING A NEW ERA IN WOMEN'S REPRODUCTIVE HEALTH",
//         "Authors": "H.C. Geisler, H.C. Safford, M.J. Mitchell",
//         "Journal Year": "Small (2023)"
//     },
//     91: {
//         "Title": "IN SITU PEGYLATION OF CAR T CELLS ALLEVIATES CYTOKINE RELEASE SYNDROME AND NEUROTOXICITY",
//         "Authors": "N. Gong, X. Han, L. Xue, R. El-Mayta, A.E. Metzloff, M.M. Billingsley, A.G. Hamilton, M.J. Mitchell",
//         "Journal Year": "Nature Materials (2023)"
//     },
//     90: {
//         "Title": "ADJUVANT LIPIDOID-SUBSTITUTED LIPID NANOPARTICLES AUGMENT THE IMMUNOGENICITY OF SAR-CoV-2 mRNA VACCINES",
//         "Authors": "X. Han, M.G. Alameh, K. Butowska, J.J. Knox, K. Lundgreen, M. Ghattas, N. Gong, L. Xue, Y. Xu, M. Lavertu, P. Bates, J. Xu, G. Nie, Y. Zhong, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature Nanotechnology (2023)"
//     },
//     89: {
//         "Title": "mRNA LIPID NANOPARTICLES FOR EX VIVO ENGINEERING OF IMMUNOSUPPRESSIVE T CELLS FOR AUTOIMMUNITY THERAPIES",
//         "Authors": "A.S. Thatte, A.G. Hamilton, B.E. Nachod, A.J. Mukalel, M.M. Billingsley, R. Palanki, K.L. Swingle, M.J. Mitchell",
//         "Journal Year": "Nano Letters (2023)"
//     },
//     88: {
//         "Title": "THROUGHPUT-SCALABLE MANUFACTURING OF SARS-CoV-2 mRNA LIPID NANOPARTICLE VACCINES",
//         "Authors": "S.J. Shepherd, X. Han, A.J. Mukalel, R. El-Mayta, A.S. Thatte, J. Wu, M.S. Padilla, M.G. Alameh, N. Srikumar, D. Lee, D. Weissman, D. Issadore, M.J. Mitchell",
//         "Journal Year": "PNAS (2023)"
//     },
//     87: {
//         "Title": "IN VIVO BONE MARROW MICROENVIRONMENT siRNA DELIVERY USING LIPID-POLYMER NANOPARTICLES FOR MULTIPLE MYELOMA THERAPY",
//         "Authors": "P.P.G. Guimaraes, C.G. Figueroa-Espada, R.S. Riley, N. Gong, L. Xue, T. Sewastianik, P.S. Dennis, C. Loebel, A. Chung, S.J. Shepherd, R.M. Haley, A.G. Hamilton, R. El-Mayta, K. Wang, R. Langer, D.G. Anderson, R.D. Carrasco, M.J. Mitchell",
//         "Journal Year": "PNAS (2023)"
//     },
//     86: {
//         "Title": "IONIZABLE LIPID NANOPARTICLES WITH INTEGRATED IMMUNE CHECKPOINT INHIBITION FOR mRNA CAR T CELL ENGINEERING",
//         "Authors": "A.G. Hamilton, K.L. Swingle, R.A. Joseph, D. Mai, N. Gong, M.M. Billingsley, M.G. Alameh, D. Weissman, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "Journal Year": "Advanced Healthcare Materials (2023)"
//     },
//     85: {
//         "Title": "DELIVERY OF PLASMID DNA BY IONIZABLE LIPID NANOPARTICLES TO INDUCE CAR EXPRESSION IN T CELLS",
//         "Authors": "P.H.D.M. Prazeres, H. Ferreira, P.A.C. Costa, W. da Silva, M.T. Alves, M.S. Padilla, A.S. Thatte, A.K. Santos, A.O. Lobo, A. Sabino, A. Sabino, H.L. Del Puerto, M.J. Mitchell, P.P.G. Guimaraes",
//         "Journal Year": "International Journal of Nanomedicine (2023)"
//     },
//     84: {
//         "Title": "UPREGULATION OF EXOSOME SECRETION FROM TUMOR-ASSOCIATED MACROPHAGES PLAYS A KEY ROLE IN THE SUPPRESSION OF ANTI-TUMOR IMMUNITY",
//         "Authors": "W. Zhong, Y. Lu, X. Han, J. Yang, Z. Qin, W. Zhang, Z. Yu, B. Wu, S. Liu, W. Xu, C. Zheng, L.M. Schuchter, G.C. Karakousis, T.C. Mitchell, R. Amaravadi, A.J. Flowers, P.A. Gimotty, M. Xiao, G. Mills, M. Herlyn, H. Dong, M.J. Mitchell, J. Kim, X. Xu, W. Guo",
//         "Journal Year": "Cell Reports (2023)"
//     },
//     83: {
//         "Title": "siRNA LIPID-POLYMER NANOPARTICLES TARGETING E-SELECTIN AND CYCLOPHILIN A IN BONE MARROW FOR COMBINATION MULTIPLE MYELOMA THERAPY",
//         "Authors": "C.G. Figueroa-Espada, P.P.G. Guimaraes, R.S. Riley, L. Xue, K. Wang, M.J. Mitchell",
//         "Journal Year": "Cellular and Molecular Bioengineering (2023)"
//     },
//     82: {
//         "Title": "IONIZABLE LIPID NANOPARTICLES FOR THERAPEUTIC BASE EDITING OF CONGENITAL BRAIN DISEASE",
//         "Authors": "R. Palanki, S.K. Bose, A. Dave, B.M. White, C. Berkowitz, V. Luks, F. Yaqoob, E. Han, K.L. Swingle, P. Menon, E. Hodgson, A. Biswas, M.M. Billingsley, L. Li, F. Yiping, M. Carpenter, A. Trokhan, J. Yeo, N. Johana, T.Y. Wan, M.G. Alameh, F.C. Bennett, P.B. Storm, R. Jain, J. Chan, D. Weissman, M.J. Mitchell, W.H. Peranteau",
//         "Journal Year": "ACS Nano (2023)"
//     },
//     81: {
//         "Title": "TARGETED NANOCARRIERS CO-OPTING PULMONARY INTRAVASCULAR LEUKOCYTES FOR DRUG DELIVERY TO THE INJURED BRAIN",
//         "Authors": "J. Nong, P.M. Glassman, J.W. Myerson, V. Zuluaga-Ramirez, A. Rodriguez-Garcia, A.J. Mukalel, S. Omo-Lamai, L.R. Walsh, M.E. Zamora, X. Gong, Z. Wang, K. Bhamidipati, R.Y. Kiseleva, C.H. Villa, C.F. Greineder, S.E. Kasner, D. Weissman, M.J. Mitchell, S. Muro, Y. Peridsky, J.S. Brenner, V.R. Muzykantov, O.A. Marcos-Contreras",
//         "Journal Year": "ACS Nano (2023)"
//     },
//     80: {
//         "Title": "LIPID NANOPARTICLE DELIVERY OF SMALL PROTEINS FOR POTENT IN VIVO RAS INHIBITION",
//         "Authors": "R.M. Haley, A. Chan, M.M. Billingsley, N. Gong, M.S. Padilla, E.H. Kim, H. Wang, D. Yin, K.J. Wangensteen, A. Tsourkas, M.J. Mitchell",
//         "Journal Year": "ACS Applied Materials & Interfaces (2023)"
//     },
//     79: {
//         "Title": "REROUTING NANOPARTICLES TO BONE MARROW VIA NEUTROPHIL HITCHHIKING",
//         "Authors": "N. Gong, M.J. Mitchell",
//         "Journal Year": "Nature Nanotechnology (2023)"
//     },
//     78: {
//         "Title": "OVERCOMING BIOLOGICAL BARRIERS TO NUCLEIC ACID DELIVERY USING LIPID NANOPARTICLES",
//         "Authors": "A.G. Hamilton, K.L. Swingle, M.J. Mitchell",
//         "Journal Year": "PLOS Biology (2023)"
//     },
//     77: {
//         "Title": "EXOSOME-DISRUPTING PEPTIDES FOR CANCER IMMUNOTHERAPY",
//         "Authors": "N. Gong, A.G. Hamilton, M.J. Mitchell",
//         "Journal Year": "Nature Materials (2023)"
//     },
//     76: {
//         "Title": "A HYDROGEL-ENTRAPPED LIVE VIRUS IMMUNIZATION",
//         "Authors": "N. Gong, A.G. Hamilton, M.J. Mitchell",
//         "Journal Year": "Nature Biomedical Engineering (2023)"
//     },
//     75: {
//         "Title": "DELIVERY TECHNOLOGIES FOR WOMEN'S HEALTH APPLICATIONS",
//         "Authors": "K.L. Swingle, A.S. Ricciardi, W.H. Peranteau, M.J. Mitchell",
//         "Journal Year": "Nature Reviews Bioengineering (2023)"
//     },
//     74: {
//         "Title": "IONIZABLE LIPID NANOPARTICLES FOR IN VIVO mRNA DELIVERY TO THE PLACENTA DURING PREGNANCY",
//         "Authors": "K.L. Swingle, H.C. Safford, H.C. Geisler, A.G. Hamilton, A.S. Thatte, M.M. Billingsley, R.A. Joseph, K. Mrksich, M.S. Padilla, A.A. Ghalsasi, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Journal of the American Chemical Society (2023)"
//     },
//     73: {
//         "Title": "LIGAND-TETHERED LIPID NANOPARTICLES FOR TARGETED RNA DELIVERY TO TREAT LIVER FIBROSIS",
//         "Authors": "X. Han, N. Gong, L. Xue, M.M. Billingsley, R. El-Mayta, S.J. Shepherd, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature Communications (2023)"
//     },
//     72: {
//         "Title": "NANOPARTICLE PROTEIN CORONA: FROM STRUCTURE AND FUNCTION TO THERAPEUTIC TARGETING",
//         "Authors": "G. Bashiri, M.S. Padilla, K.L. Swingle, S.J. Shepherd, M.J. Mitchell, K. Wang",
//         "Journal Year": "Lab on a Chip (2023)"
//     },
//     71: {
//         "Title": "PLATELET-MIMICKING NANOSPONGES FOR FUNCTIONAL REVERSAL OF ANTIPLATELET AGENTS",
//         "Authors": "J. Xu, N. Yan, C. Wang, C. Yao, X. Han, C. Yang, J. Xu, K. Wang, M.J. Mitchell, Y. Zhang, G. Nie",
//         "Journal Year": "Circulation Research (2023)"
//     },
//     70: {
//         "Title": "TESTING THE IN VITRO AND IN VIVO EFFICIENCY OF mRNA-LIPID NANOPARTICLES FORMULATED BY MICROFLUIDIC MIXING",
//         "Authors": "R. El-Mayta, M.S. Padilla, M.M. Billingsley, X. Han, M.J. Mitchell",
//         "Journal Year": "Journal of Visualized Experiments (2023)"
//     },
//     69: {
//         "Title": "FUTURE DIRECTIONS AND RESOURCE NEEDS FOR NATIONAL HEART, LUNG, AND BLOOD INSTITUTE (NHLBI) GENE THERAPY RESEARCH: A REPORT OF AN NHLBI WORKSHOP",
//         "Authors": "C.L. McDonald, P. Qasba, D.G. Anderson, G. Bao, R.A. Colvin, D.B. Kohn, P. Malik, M.J. Mitchell, W.T. Pu, D.J. Rawlings, D.A. Williams, T.R. Flotte",
//         "Journal Year": "Human Gene Therapy (2023)"
//     },
//     68: {
//         "Title": "ORAL FORMULATION OF WNT INHIBITOR COMPLEX REDUCES INFLAMMATION AND FIBROSIS IN INTRAPERITONEAL IMPLANTS IN VIVO",
//         "Authors": "A.L. de Castro Santos, N.J.A. da Silva, C.T.R. Viana, L.C.C. dos Santos, G.H.C. da Silva, S.R.A. Scalzo, P.A.C. Costa, W.N. da Silva, M.T.Q. Magalhaes, I.C.G. de Jesus, A. Birbair, F. Frezard, S. Guatimosim, R.M. Haley, M.J. Mitchell, S.P. Andrade, P.P. Campos, P.P.G. Guimaraes",
//         "Journal Year": "Drug Delivery and Translational Research (2023)"
//     },
//     67: {
//         "Title": "DOXORUBICIN-CONJUGATED siRNA LIPID NANOPARTICLES FOR COMBINATION CANCER THERAPY",
//         "Authors": "K. Butowska, X. Han, N. Gong, R. El-Mayta, R.M. Haley, L. Xue, W. Zhong, W. Guo, K. Wang, M.J. Mitchell",
//         "Journal Year": "Acta Pharmaceutica Sinica B (2023)"
//     },
//     66: {
//         "Title": "NANOTECHNOLOGY-BASED STRATEGIES AGAINST SARS-CoV-2 VARIANTS",
//         "Authors": "X. Huang, E. Kon, X. Han, X. Zhang, N. Kong, M.J. Mitchell, D. Peer, W. Tao",
//         "Journal Year": "Nature Nanotechnology (2022)"
//     },
//     65: {
//         "Title": "RATIONAL DESIGN OF BISPHOSPHONATE LIPID-LIKE MATERIALS FOR mRNA DELIVERY TO THE BONE MICROENVIRONMENT",
//         "Authors": "L. Xue, N. Gong, S.J. Shepherd, X. Xiong, X. Liao, X. Han, G. Zhao, C. Song, X. Huang, H. Zhang, M.S. Padilla, J. Qin, Y. Shi, M.G. Alameh, D.J. Pochan, K. Wang, F. Long, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Journal of the American Chemical Society (2022)"
//     },
//     64: {
//         "Title": "LIPID NANODISCS GIVE CANCER A STING",
//         "Authors": "N. Gong, M.J. Mitchell",
//         "Journal Year": "Nature Materials (2022)"
//     },
//     63: {
//         "Title": "HYDROXYCHOLESTEROL SUBSTITUTION IN IONIZABLE LIPID NANOPARTICLES FOR mRNA DELIVERY TO T CELLS",
//         "Authors": "S.K. Patel, M.M. Billingsley, C. Frazee, X. Han, K.L. Swingle, J. Qin, M.G. Alameh, K. Wang, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Journal of Controlled Release (2022)"
//     },
//     62: {
//         "Title": "ENDOTHELIAL PLASTICITY DRIVES ABERRANT VASCULARIZATION AND IMPEDES CARDIAC REPAIR AFTER MYOCARDIAL INFARCTION",
//         "Authors": "M. Huang, F. Yang, D. Zhang, M. Lin, H. Duan, R. El-Mayta, L. Zhang, L. Qin, S.V. Shewale, L. Pei, M.J. Mitchell, D.J. Rader, Y. Fan, Y. Gong",
//         "Journal Year": "Nature Cardiovascular Research (2022)"
//     },
//     61: {
//         "Title": "LIGHTING THE WAY TO PERSONALIZED mRNA IMMUNE CELL THERAPIES",
//         "Authors": "A.E. Metzloff, M.M. Billingsley, M.J. Mitchell",
//         "Journal Year": "Science Advances (2022)"
//     },
//     60: {
//         "Title": "ORTHOGONAL DESIGN OF EXPERIMENTS FOR OPTIMIZATION OF LIPID NANOPARTICLES FOR mRNA ENGINEERING OF CAR T CELLS",
//         "Authors": "M.M. Billingsley, A.G. Hamilton, D. Mai, S.K. Patel, K.L. Swingle, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "Journal Year": "Nano Letters (2022)"
//     },
//     59: {
//         "Title": "AMNIOTIC FLUID STABILIZED LIPID NANOPARTICLES FOR IN UTERO INTRA-AMNIOTIC mRNA DELIVERY",
//         "Authors": "K.L. Swingle, M.M. Billingsley, S.K. Bose, B. White, R. Palanki, A. Dave, S.K. Patel, N. Gong, A.G. Hamilton, M.G. Alameh, D. Weissman, W.H. Peranteau, M.J. Mitchell",
//         "Journal Year": "Journal of Controlled Release (2022)"
//     },
//     58: {
//         "Title": "RGD PEPTIDE-BASED LIPIDS FOR TARGETED mRNA DELIVERY AND GENE EDITING APPLICATIONS",
//         "Authors": "J. Qin, L. Xue, N. Gong, H. Zhang, S.J. Shepherd, R.M. Haley, K.L. Swingle, M.J. Mitchell",
//         "Journal Year": "RSC Advances (2022)"
//     },
//     57: {
//         "Title": "CYTOSOLIC DELIVERY OF SMALL PROTEIN SCAFFOLDS ENABLES EFFICIENT INHIBITION OF RAS AND MYC",
//         "Authors": "A. Chan, H.H. Wang, R.M. Haley, C. Song, D. Gonzalez-Martinez, L. Bugaj, M.J. Mitchell, A. Tsourkas",
//         "Journal Year": "Molecular Pharmaceutics (2022)"
//     },
//     56: {
//         "Title": "RATIONAL DESIGN OF ANTI-INFLAMMATORY LIPID NANOPARTICLES FOR mRNA DELIVERY",
//         "Authors": "H. Zhang, X. Han, M.G. Alameh, S.J. Shepherd, M.S. Padilla, L. Xue, K. Butowska, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Journal of Biomedical Materials Research Part A (2022)"
//     },
//     55: {
//         "Title": "(CONTROLLED) SPILL OF IL-2 FOR LOCALIZED TREATMENT OF MESOTHELIOMA",
//         "Authors": "R. Palanki, K.L. Swingle, M.J. Mitchell",
//         "Journal Year": "Clinical Cancer Research (2022)"
//     },
//     54: {
//         "Title": "DRUG DELIVERY TECHNOLOGIES FOR FETAL, NEONATAL, AND MATERNAL THERAPY",
//         "Authors": "R. Palanki, W.H. Peranteau, M.J. Mitchell",
//         "Journal Year": "Advanced Drug Delivery Reviews (2022)"
//     },
//     53: {
//         "Title": "IONIZABLE LIPID NANOPARTICLE-MEDIATED DELIVERY OF PLASMID DNA IN CARDIOMYOCYTES",
//         "Authors": "S. Scalzo, H.A.S. Ferreira, P.A. Costa, P.H.D.M. Prazeres, N.J.A. da Silva, L.C. Guimaraes, M.D.M. e Silva, M.T.R. Rodrigues Alves, C.T.R. Viana, I.C.G. Jesus, A.P. Rodrigues, A. Birbrair, A.O. Lobo, F. Frezard, M.J. Mitchell, S. Guatimosim, P.P.G. Guimaraes",
//         "Journal Year": "International Journal of Nanomedicine (2022)"
//     },
//     52: {
//         "Title": "ADDED TO PRE-EXISTING INFLAMMATION, mRNA-LIPID NANOPARTICLES INDUCE INFLAMMATION EXACERBATION (IE)",
//         "Authors": "H. Parhiz, J.S. Brenner, P. Patel, T.E. Papp, H. Shahnawaz, Q. Li, R. Shi, M. Zamora, A. Yadegari, O.A. Marcos-Contreras, A. Natesan, N. Pardi, V. Shuvaev, R. Kiseleva, J. Myerson, T. Uhler, R.S. Riley, X. Han, M.J. Mitchell, K. Lam, J. Heyes, D. Weissman, V. Muzykantov",
//         "Journal Year": "Journal of Controlled Release (2022)"
//     },
//     51: {
//         "Title": "AN IONIZABLE LIPID TOOLBOX FOR RNA DELIVERY",
//         "Authors": "X. Han, H. Zhang, K. Butowska, K.L. Swingle, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "Journal Year": "Nature Communications (2021)"
//     },
//     50: {
//         "Title": "SCALABLE mRNA AND siRNA LIPID NANOPARTICLE PRODUCTION USING A PARALLELIZED MICROFLUIDIC DEVICE",
//         "Authors": "S.J. Shepherd, C.C. Warzecha, S. Yadavali, R. El-Mayta, M.G. Alameh, L. Wang, D. Weissman, J.M. Wilson, D. Issadore, M.J. Mitchell",
//         "Journal Year": "Nano Letters (2021)"
//     },
//     49: {
//         "Title": "IONIZABLE LIPID NANOPARTICLES FOR IN UTERO mRNA DELIVERY",
//         "Authors": "R.S. Riley, M.V. Kashyap, M.M. Billingsley, B. White, M.G. Alameh, S.K. Bose, P.W. Zoltick, H. Li, R. Zhang, A.Y. Cheng, D. Weissman, W.H. Peranteau, M.J. Mitchell",
//         "Journal Year": "Science Advances (2021)"
//     },
//     48: {
//         "Title": "NANOMATERIALS FOR T-CELL CANCER IMMUNOTHERAPY",
//         "Authors": "N. Gong, N.C. Sheppard, M.M. Billingsley, C.H. June, M.J. Mitchell",
//         "Journal Year": "Nature Nanotechnology (2021)"
//     },
//     47: {
//         "Title": "ENGINEERING PRECISION NANOPARTICLES FOR DRUG DELIVERY",
//         "Authors": "M.J. Mitchell, M.M. Billingsley, R.M. Haley, M.E. Wechsler, N.A. Peppas, R. Langer",
//         "Journal Year": "Nature Reviews Drug Discovery (2021)"
//     },
//     46: {
//         "Title": "ONE-COMPONENT MULTIFUNCTIONAL SEQUENCE-DEFINED IONIZABLE AMPHIPHILIC JANUS DENDRIMER DELIVERY SYSTEMS FOR mRNA",
//         "Authors": "D. Zhang, E.N. Atochina-Vasserman, D.S. Maurya, N. Huang, Q. Xiao, N. Orna, M. Liu, H. Shahnawaz, H. Ni, K. Kim, M.M. Billingsley, D.J. Pochan, M.J. Mitchell, D. Weissman, V. Percec",
//         "Journal Year": "Journal of the American Chemical Society (2021)"
//     },
//     45: {
//         "Title": "MICROFLUIDIC FORMULATION OF NANOPARTICLES FOR BIOMEDICAL APPLICATIONS",
//         "Authors": "S.J. Shepherd, D. Issadore, M.J. Mitchell",
//         "Journal Year": "Biomaterials (2021)"
//     },
//     44: {
//         "Title": "LIPID NANOPARTICLE-MEDIATED DELIVERY OF mRNA THERAPEUTICS AND VACCINES",
//         "Authors": "K.L. Swingle, A.G. Hamilton, M.J. Mitchell",
//         "Journal Year": "Trends in Molecular Medicine (2021)"
//     },
//     43: {
//         "Title": "HELPER LIPID STRUCTURE INFLUENCES PROTEIN ADSORPTION AND DELIVERY OF LIPID NANOPARTICLES TO SPLEEN AND LIVER",
//         "Authors": "R. Zhang, R. El-Mayta, T.J. Murdoch, C.C. Warzecha, M.M. Billingsley, S.J. Shepherd, N. Gong, L. Wang, J.M. Wilson, D. Lee, M.J. Mitchell",
//         "Journal Year": "Biomaterials Science (2021)"
//     },
//     42: {
//         "Title": "A NANOPARTICLE PLATFORM FOR ACCELERATED ORAL DELIVERY SCREENING OF NUCLEIC ACIDS",
//         "Authors": "R. El-Mayta, R. Zhang, S.J. Shepherd, F. Wang, M.M. Billingsley, V. Dudkin, D. Klein, H.D. Lu, M.J. Mitchell",
//         "Journal Year": "Advanced Therapeutics (2021)"
//     },
//     41: {
//         "Title": "DELIVERY TECHNOLOGIES FOR T CELL GENE EDITING: APPLICATIONS IN CANCER IMMUNOTHERAPY",
//         "Authors": "E. Atsavapranee, M.M. Billingsley, M.J. Mitchell",
//         "Journal Year": "EBioMedicine (2021)"
//     },
//     40: {
//         "Title": "DELIVERY TECHNOLOGIES TO ENGINEER NATURAL KILLER CELLS FOR CANCER IMMUNOTHERAPY",
//         "Authors": "R. El-Mayta, Z. Zhang, A.G. Hamilton, M.J. Mitchell",
//         "Journal Year": "Cancer Gene Therapy (2021)"
//     },
//     39: {
//         "Title": "PEPTIDE FUNCTIONALIZED LIPOSOMES FOR RECEPTOR TARGETED CANCER THERAPY",
//         "Authors": "M.R. Aronson, S.H. Medina, M.J. Mitchell",
//         "Journal Year": "APL Bioengineering (2021)"
//     },
//     38: {
//         "Title": "DELIVERY TECHNOLOGIES FOR IN UTERO GENE THERAPY",
//         "Authors": "R. Palanki, W.H. Peranteau, M.J. Mitchell",
//         "Journal Year": "Advanced Drug Delivery Reviews (2021)"
//     },
//     37: {
//         "Title": "SUMMARY FROM THE FIRST KIDNEY CANCER RESEARCH SUMMIT, SEPTEMBER 12-13, 2019: A FOCUS ON TRANSLATIONAL RESEARCH",
//         "Authors": "T.K. Choueiri, M.B. Atkins, Z. Bakouny, M.I. Carlo, C.G. Drake, E. Jonasch, P. Kapur, B. Lewis, W.M. Linehan, M.J. Mitchell, S.K. Pal, K. Pels, S. Poteat, W.K. Rathmell, B.I. Rini, S. Signoretti, N. Tannir, R. Uzzo, C.G. Wood, H.J. Hammers",
//         "Journal Year": "Journal of the National Cancer Institute (2021)"
//     },
//     36: {
//         "Title": "IONIZABLE LIPID NANOPARTICLE MEDIATED mRNA DELIVERY FOR HUMAN CAR T CELL ENGINEERING",
//         "Authors": "M.M. Billingsley, N. Singh, P. Ravikumar, R. Zhang, C.H. June, M.J. Mitchell",
//         "Journal Year": "Nano Letters (2020)"
//     },
//     35: {
//         "Title": "PROTON-DRIVEN TRANSFORMABLE NANOVACCINE FOR CANCER IMMUNOTHERAPY",
//         "Authors": "N. Gong, Y. Zhang, X. Teng, Y. Wang, S. Huo, G. Qing, Q. Ni, X. Li, J. Wang, X. Ye, T. Zhang, S. Chen, Y. Wang, J. Yu, P.C. Wang, Y. Gan, J. Zhang, M.J. Mitchell, J. Li, X.J. Liang",
//         "Journal Year": "Nature Nanotechnology (2020)"
//     },
//     34: {
//         "Title": "NANOPARTICLE-ENCAPSULATED siRNAs FOR GENE SILENCING IN THE HAEMATOPOIETIC STEM-CELL NICHE",
//         "Authors": "M. Krohn-Grimberghe, M.J. Mitchell, M.J. Schloss, O.F. Khan, G. Courties, P.P.G. Guimaraes, D. Rohde, S. Cremer, P.S. Kowalski, Y. Sun, M. Tan, J. Webster, K. Wang, Y. Iwamoto, S.P. Schmidt, G.R. Wojtkiewicz, R. Nayar, V. Frodermann, M. Hulsmans, A. Chung, F.F. Hoyer, F.K. Swirski, R. Langer, D.G. Anderson, M. Nahrendorf",
//         "Journal Year": "Nature Biomedical Engineering (2020)"
//     },
//     33: {
//         "Title": "CYCLODEXTRINS IN DRUG DELIVERY: APPLICATIONS IN GENE AND COMBINATION THERAPY",
//         "Authors": "R.M. Haley, R. Gottardi, R. Langer, M.J. Mitchell",
//         "Journal Year": "Drug Delivery and Translational Research (2020)"
//     },
//     32: {
//         "Title": "NANOMATERIALS FOR THERAPEUTIC RNA DELIVERY",
//         "Authors": "X. Han, M.J. Mitchell, G. Nie",
//         "Journal Year": "Matter (2020)"
//     },
//     31: {
//         "Title": "EXPLOITING THE PLACENTA FOR NANOPARTICLE-MEDIATED DRUG DELIVERY DURING PREGNANCY",
//         "Authors": "C.G. Figueroa-Espada, S. Hofbauer, M.J. Mitchell, R.S. Riley",
//         "Journal Year": "Advanced Drug Delivery Reviews (2020)"
//     },
//     30: {
//         "Title": "CHIRAL SUPRAPARTICLES FOR CONTROLLABLE NANOMEDICINE",
//         "Authors": "J. Yeom, P.P.G. Guimarães, H.M. Ahn, B.K. Jung, Q. Hu, K. McHugh, M.J. Mitchell, C.O. Yun, R. Langer, A. Jaklenec",
//         "Journal Year": "Advanced Materials (2020)"
//     },
//     29: {
//         "Title": "IONIZABLE LIPID NANOPARTICLES ENCAPSULATING BARCODED mRNA FOR ACCELERATED IN VIVO DELIVERY SCREENING",
//         "Authors": "P.P.G. Guimarães, R. Zhang, R. Spektor, M. Tan, A. Chung, M.M. Billingsley, R. El-Mayta, R.S. Riley, L. Wang, J.M. Wilson, M.J. Mitchell",
//         "Journal Year": "Journal of Controlled Release (2019)"
//     },
//     28: {
//         "Title": "DELIVERY TECHNOLOGIES FOR CANCER IMMUNOTHERAPY",
//         "Authors": "R.S. Riley, C.H. June, R. Langer, M.J. Mitchell",
//         "Journal Year": "Nature Reviews Drug Discovery (2019)"
//     },
//     27: {
//         "Title": "NANOPARTICLES FOR NUCLEIC ACID DELIVERY: APPLICATIONS IN CANCER IMMUNOTHERAPY",
//         "Authors": "A.J. Mukalel, R.S. Riley, R. Zhang, M.J. Mitchell",
//         "Journal Year": "Cancer Letters (2019)"
//     },
//     26: {
//         "Title": "POTENT IN VIVO LUNG CANCER WNT SIGNALING INHIBITION VIA CYCLODEXTRIN-LGK974 INCLUSION COMPLEXES",
//         "Authors": "P.P.G. Guimarães, M. Tan, T. Tammela, K. Wu, A. Chung, M. Oberli, K. Wang, R. Spektor, R.S. Riley, C. Viana, T. Jacks, R. Langer, M.J. Mitchell",
//         "Journal Year": "Journal of Controlled Release (2018)"
//     },
//     25: {
//         "Title": "BIOMATERIALS FOR VACCINE-BASED CANCER IMMUNOTHERAPY",
//         "Authors": "R. Zhang, M.M. Billingsley, M.J. Mitchell",
//         "Journal Year": "Journal of Controlled Release (2018)"
//     },
//     24: {
//         "Title": "NANOPARTICLES FOR IMMUNE CYTOKINE TRAIL-BASED CANCER THERAPY",
//         "Authors": "P.P.G. Guimarães, S. Gaglione, T. Sewastianik, R. Carrasco, R. Langer, M.J. Mitchell",
//         "Journal Year": "ACS Nano (2018)"
//     },
//     23: {
//         "Title": "NANOMATERIAL INTERACTIONS WITH HUMAN NEUTROPHILS",
//         "Authors": "P.W. Bisso, S. Gaglione, P.P.G. Guimaraes, M.J. Mitchell, R. Langer",
//         "Journal Year": "ACS Biomaterials Science & Engineering (2018)"
//     },
//     22: {
//         "Title": "ADVANCES IN BIOMATERIALS FOR DRUG DELIVERY",
//         "Authors": "O.S. Fenton, K.N. Olafson, P.S. Pillai, M.J. Mitchell, R. Langer",
//         "Journal Year": "Advanced Materials (2018)"
//     },
//     21: {
//         "Title": "ENGINEERING AND PHYSICAL SCIENCES IN ONCOLOGY: CHALLENGES AND OPPORTUNITIES",
//         "Authors": "M.J. Mitchell, R.K. Jain, R. Langer",
//         "Journal Year": "Nature Reviews Cancer (2017)"
//     },
//     20: {
//         "Title": "POLYMERIC MECHANICAL AMPLIFIERS OF IMMUNE CYTOKINE-MEDIATED APOPTOSIS",
//         "Authors": "M.J. Mitchell, J. Webster, A. Chung, P.P.G. Guimarães, O.F. Khan, R. Langer",
//         "Journal Year": "Nature Communications (2017)"
//     },
//     19: {
//         "Title": "NANOSTRUCTURED FIBROUS MEMBRANES WITH ROSE SPIKE-LIKE ARCHITECTURE",
//         "Authors": "A. Nasajpour, S. Mandla, S. Shree, E. Mostafavi, S. Sharifi, A. Khalilpour, S. Saghazadeh, S. Hassan, M.J. Mitchell, J. Leijten, A. Moshaverinia, X. Hou, N. Annabi, R. Adelung, Y.K. Mishra, S.R. Shin, A. Tamayol, A. Khademhosseini",
//         "Journal Year": "Nano Letters (2017)"
//     },
//     18: {
//         "Title": "LIPID NANOPARTICLE–ASSISTED mRNA DELIVERY FOR POTENT CANCER IMMUNOTHERAPY",
//         "Authors": "M.A. Oberli, A.M. Reichmuth, J.R. Dorkin, M.J. Mitchell, O. Fenton, A. Jaklenec, D.G. Anderson, R. Langer, D. Blankschtein",
//         "Journal Year": "Nano Letters (2017)"
//     },
//     17: {
//         "Title": "TRAIL-COATED LEUKOCYTES THAT PREVENT THE BLOODBORNE METASTASIS OF PROSTATE CANCER",
//         "Authors": "E.C. Wayne, S. Chandrasekaran, M.J. Mitchell, M.F. Chan, R.E. Lee, C.B. Schaffer, M.R. King",
//         "Journal Year": "Journal of Controlled Release (2016)"
//     },
//     16: {
//         "Title": "LAMIN A/C DEFICIENCY REDUCES CIRCULATING TUMOR CELL RESISTANCE TO FLUID SHEAR STRESS",
//         "Authors": "M.J. Mitchell, C. Denais, M.F. Chan, X. Wang, J. Lammerding, M.R. King",
//         "Journal Year": "American Journal of Physiology – Cell Physiology (2015)"
//     },
//     15: {
//         "Title": "SURFACTANT FUNCTIONALIZATION INDUCES ROBUST, DIFFERENTIAL ADHESION OF TUMOR CELLS AND BLOOD CELLS TO CHARGED NANOTUBE-COATED BIOMATERIALS UNDER FLOW",
//         "Authors": "M.J. Mitchell, C.A. Castellanos, M.R. King",
//         "Journal Year": "Biomaterials (2015)"
//     },
//     14: {
//         "Title": "IMMOBILIZED SURFACTANT-NANOTUBE COMPLEXES SUPPORT SELECTIN-MEDIATED CAPTURE OF VIABLE CIRCULATING TUMOR CELLS IN THE ABSENCE OF CAPTURE ANTIBODIES",
//         "Authors": "M.J. Mitchell, C.A. Castellanos, M.R. King",
//         "Journal Year": "Journal of Biomedical Materials Research Part A (2015)"
//     },
//     13: {
//         "Title": "LEUKOCYTES AS CARRIERS FOR TARGETED CANCER DRUG DELIVERY",
//         "Authors": "M.J. Mitchell, M.R. King",
//         "Journal Year": "Expert Opinion on Drug Delivery (2015)"
//     },
//     12: {
//         "Title": "COOPERATIVE EFFECTS OF SUBSTRATE STIFFNESS AND FLUID SHEAR STRESS ON ENDOTHELIAL CELL BEHAVIOR",
//         "Authors": "J.C. Kohn, D.W. Zhou, F. Bordeleau, A. Zhou, B.N. Mason, M.J. Mitchell, M.R. King, C.A. Reinhart-King",
//         "Journal Year": "Biophysical Journal (2015)"
//     },
//     11: {
//         "Title": "TRAIL-COATED LEUKOCYTES THAT KILL CANCER CELLS IN CIRCULATION",
//         "Authors": "M.J. Mitchell, E. Wayne, K. Rana, C.B. Schaffer, M.R. King",
//         "Journal Year": "PNAS (2014)"
//     },
//     10: {
//         "Title": "UNNATURAL KILLER CELLS TO PREVENT BLOODBORNE METASTASIS: INSPIRATION FROM BIOLOGY AND ENGINEERING",
//         "Authors": "M.J. Mitchell, M.R. King",
//         "Journal Year": "Expert Review of Anticancer Therapy (2014)"
//     },
//     9: {
//         "Title": "FLUID SHEAR STRESS INCREASES NEUTROPHIL ACTIVATION VIA PLATELET-ACTIVATING FACTOR",
//         "Authors": "M.J. Mitchell, K.S. Lin, M.R. King",
//         "Journal Year": "Biophysical Journal (2014)"
//     },
//     8: {
//         "Title": "THE ROLE OF CELL GLYCOCALYX IN VASCULAR TRANSPORT OF CIRCULATING TUMOR CELLS",
//         "Authors": "M.J. Mitchell, M.R. King",
//         "Journal Year": "American Journal of Physiology - Cell Physiology (2014)"
//     },
//     7: {
//         "Title": "A MICROFLUIDIC DEVICE TO SORT CELLS BASED ON CHEMOTACTIC PHENOTYPE",
//         "Authors": "S. Bajpai, M.J. Mitchell, M.R. King, C.A. Reinhart-King",
//         "Journal Year": "Technology (2014)"
//     },
//     6: {
//         "Title": "STEM CELL ENRICHMENT VIA SELECTIN RECEPTORS: MIMICKING THE PH ENVIRONMENT OF TRAUMA",
//         "Authors": "T.M. Cao, M.J. Mitchell, J. Liesveld, M.R. King",
//         "Journal Year": "Sensors (2013)"
//     },
//     5: {
//         "Title": "COMPUTATIONAL AND EXPERIMENTAL MODELS OF CANCER CELL RESPONSE TO FLUID SHEAR STRESS",
//         "Authors": "M.J. Mitchell, M.R. King",
//         "Journal Year": "Frontiers in Oncology (2013)"
//     },
//     4: {
//         "Title": "FLUID SHEAR STRESS SENSITIZES CANCER CELLS TO RECEPTOR-MEDIATED APOPTOSIS VIA TRIMERIC DEATH RECEPTORS",
//         "Authors": "M.J. Mitchell, M.R. King",
//         "Journal Year": "New Journal of Physics (2013)"
//     },
//     3: {
//         "Title": "NANOSTRUCTURED SURFACES TO TARGET AND KILL CIRCULATING TUMOR CELLS WHILE REPELLING LEUKOCYTES",
//         "Authors": "M.J. Mitchell, C.A. Castellanos, M.R. King",
//         "Journal Year": "Journal of Nanomaterials (2012)"
//     },
//     2: {
//         "Title": "E-SELECTIN LIPOSOMAL AND NANOTUBE-TARGETED DELIVERY OF DOXORUBICIN TO CIRCULATING TUMOR CELLS",
//         "Authors": "M.J. Mitchell, C.S. Chen, V. Ponmudi, A.D. Hughes, M.R. King",
//         "Journal Year": "Journal of Controlled Release (2012)"
//     },
//     1: {
//         "Title": "SHEAR-INDUCED RESISTANCE TO NEUTROPHIL ACTIVATION VIA THE FORMYL PEPTIDE RECEPTOR",
//         "Authors": "M.J. Mitchell, M.R. King",
//         "Journal Year": "Biophysical Journal (2012)"
//     }
// }


// console.log(indexedJsonToArray(jsonObject))

// fs.writeFile('publications.ts', JSON.stringify(indexedJsonToArray(jsonObject), null, 4), (err) => {
//     if (err) {
//         console.error('An error occurred:', err);
//     } else {
//         console.log('File written successfully!');
//     }
// });

// /*
// export interface Publication {
//     title: string;
//     authors: string;
//     journalYear: string;
// }

// export const publications:  = [
//     {
//         "title": "SHEAR-INDUCED RESISTANCE TO NEUTROPHIL ACTIVATION VIA THE FORMYL PEPTIDE RECEPTOR",
//         "authors": "M.J. Mitchell, M.R. King",
//         "journalYear": "Biophysical Journal (2012)"
//     },
//     {
//         "title": "E-SELECTIN LIPOSOMAL AND NANOTUBE-TARGETED DELIVERY OF DOXORUBICIN TO CIRCULATING TUMOR CELLS",
//         "authors": "M.J. Mitchell, C.S. Chen, V. Ponmudi, A.D. Hughes, M.R. King",
//         "journalYear": "Journal of Controlled Release (2012)"
//     },
//     {
//         "title": "NANOSTRUCTURED SURFACES TO TARGET AND KILL CIRCULATING TUMOR CELLS WHILE REPELLING LEUKOCYTES",
//         "authors": "M.J. Mitchell, C.A. Castellanos, M.R. King",
//         "journalYear": "Journal of Nanomaterials (2012)"
//     },
//     {
//         "title": "FLUID SHEAR STRESS SENSITIZES CANCER CELLS TO RECEPTOR-MEDIATED APOPTOSIS VIA TRIMERIC DEATH RECEPTORS",
//         "authors": "M.J. Mitchell, M.R. King",
//         "journalYear": "New Journal of Physics (2013)"
//     },
//     {
//         "title": "COMPUTATIONAL AND EXPERIMENTAL MODELS OF CANCER CELL RESPONSE TO FLUID SHEAR STRESS",
//         "authors": "M.J. Mitchell, M.R. King",
//         "journalYear": "Frontiers in Oncology (2013)"
//     },
//     {
//         "title": "STEM CELL ENRICHMENT VIA SELECTIN RECEPTORS: MIMICKING THE PH ENVIRONMENT OF TRAUMA",
//         "authors": "T.M. Cao, M.J. Mitchell, J. Liesveld, M.R. King",
//         "journalYear": "Sensors (2013)"
//     },
//     {
//         "title": "A MICROFLUIDIC DEVICE TO SORT CELLS BASED ON CHEMOTACTIC PHENOTYPE",
//         "authors": "S. Bajpai, M.J. Mitchell, M.R. King, C.A. Reinhart-King",
//         "journalYear": "Technology (2014)"
//     },
//     {
//         "title": "THE ROLE OF CELL GLYCOCALYX IN VASCULAR TRANSPORT OF CIRCULATING TUMOR CELLS",
//         "authors": "M.J. Mitchell, M.R. King",
//         "journalYear": "American Journal of Physiology - Cell Physiology (2014)"
//     },
//     {
//         "title": "FLUID SHEAR STRESS INCREASES NEUTROPHIL ACTIVATION VIA PLATELET-ACTIVATING FACTOR",
//         "authors": "M.J. Mitchell, K.S. Lin, M.R. King",
//         "journalYear": "Biophysical Journal (2014)"
//     },
//     {
//         "title": "UNNATURAL KILLER CELLS TO PREVENT BLOODBORNE METASTASIS: INSPIRATION FROM BIOLOGY AND ENGINEERING",
//         "authors": "M.J. Mitchell, M.R. King",
//         "journalYear": "Expert Review of Anticancer Therapy (2014)"
//     },
//     {
//         "title": "TRAIL-COATED LEUKOCYTES THAT KILL CANCER CELLS IN CIRCULATION",
//         "authors": "M.J. Mitchell, E. Wayne, K. Rana, C.B. Schaffer, M.R. King",
//         "journalYear": "PNAS (2014)"
//     },
//     {
//         "title": "COOPERATIVE EFFECTS OF SUBSTRATE STIFFNESS AND FLUID SHEAR STRESS ON ENDOTHELIAL CELL BEHAVIOR",
//         "authors": "J.C. Kohn, D.W. Zhou, F. Bordeleau, A. Zhou, B.N. Mason, M.J. Mitchell, M.R. King, C.A. Reinhart-King",
//         "journalYear": "Biophysical Journal (2015)"
//     },
//     {
//         "title": "LEUKOCYTES AS CARRIERS FOR TARGETED CANCER DRUG DELIVERY",
//         "authors": "M.J. Mitchell, M.R. King",
//         "journalYear": "Expert Opinion on Drug Delivery (2015)"
//     },
//     {
//         "title": "IMMOBILIZED SURFACTANT-NANOTUBE COMPLEXES SUPPORT SELECTIN-MEDIATED CAPTURE OF VIABLE CIRCULATING TUMOR CELLS IN THE ABSENCE OF CAPTURE ANTIBODIES",
//         "authors": "M.J. Mitchell, C.A. Castellanos, M.R. King",
//         "journalYear": "Journal of Biomedical Materials Research Part A (2015)"
//     },
//     {
//         "title": "SURFACTANT FUNCTIONALIZATION INDUCES ROBUST, DIFFERENTIAL ADHESION OF TUMOR CELLS AND BLOOD CELLS TO CHARGED NANOTUBE-COATED BIOMATERIALS UNDER FLOW",
//         "authors": "M.J. Mitchell, C.A. Castellanos, M.R. King",
//         "journalYear": "Biomaterials (2015)"
//     },
//     {
//         "title": "LAMIN A/C DEFICIENCY REDUCES CIRCULATING TUMOR CELL RESISTANCE TO FLUID SHEAR STRESS",
//         "authors": "M.J. Mitchell, C. Denais, M.F. Chan, X. Wang, J. Lammerding, M.R. King",
//         "journalYear": "American Journal of Physiology – Cell Physiology (2015)"
//     },
//     {
//         "title": "TRAIL-COATED LEUKOCYTES THAT PREVENT THE BLOODBORNE METASTASIS OF PROSTATE CANCER",
//         "authors": "E.C. Wayne, S. Chandrasekaran, M.J. Mitchell, M.F. Chan, R.E. Lee, C.B. Schaffer, M.R. King",
//         "journalYear": "Journal of Controlled Release (2016)"
//     },
//     {
//         "title": "LIPID NANOPARTICLE–ASSISTED mRNA DELIVERY FOR POTENT CANCER IMMUNOTHERAPY",
//         "authors": "M.A. Oberli, A.M. Reichmuth, J.R. Dorkin, M.J. Mitchell, O. Fenton, A. Jaklenec, D.G. Anderson, R. Langer, D. Blankschtein",
//         "journalYear": "Nano Letters (2017)"
//     },
//     {
//         "title": "NANOSTRUCTURED FIBROUS MEMBRANES WITH ROSE SPIKE-LIKE ARCHITECTURE",
//         "authors": "A. Nasajpour, S. Mandla, S. Shree, E. Mostafavi, S. Sharifi, A. Khalilpour, S. Saghazadeh, S. Hassan, M.J. Mitchell, J. Leijten, A. Moshaverinia, X. Hou, N. Annabi, R. Adelung, Y.K. Mishra, S.R. Shin, A. Tamayol, A. Khademhosseini",
//         "journalYear": "Nano Letters (2017)"
//     },
//     {
//         "title": "POLYMERIC MECHANICAL AMPLIFIERS OF IMMUNE CYTOKINE-MEDIATED APOPTOSIS",
//         "authors": "M.J. Mitchell, J. Webster, A. Chung, P.P.G. Guimarães, O.F. Khan, R. Langer",
//         "journalYear": "Nature Communications (2017)"
//     },
//     {
//         "title": "ENGINEERING AND PHYSICAL SCIENCES IN ONCOLOGY: CHALLENGES AND OPPORTUNITIES",
//         "authors": "M.J. Mitchell, R.K. Jain, R. Langer",
//         "journalYear": "Nature Reviews Cancer (2017)"
//     },
//     {
//         "title": "ADVANCES IN BIOMATERIALS FOR DRUG DELIVERY",
//         "authors": "O.S. Fenton, K.N. Olafson, P.S. Pillai, M.J. Mitchell, R. Langer",
//         "journalYear": "Advanced Materials (2018)"
//     },
//     {
//         "title": "NANOMATERIAL INTERACTIONS WITH HUMAN NEUTROPHILS",
//         "authors": "P.W. Bisso, S. Gaglione, P.P.G. Guimaraes, M.J. Mitchell, R. Langer",
//         "journalYear": "ACS Biomaterials Science & Engineering (2018)"
//     },
//     {
//         "title": "NANOPARTICLES FOR IMMUNE CYTOKINE TRAIL-BASED CANCER THERAPY",
//         "authors": "P.P.G. Guimarães, S. Gaglione, T. Sewastianik, R. Carrasco, R. Langer, M.J. Mitchell",
//         "journalYear": "ACS Nano (2018)"
//     },
//     {
//         "title": "BIOMATERIALS FOR VACCINE-BASED CANCER IMMUNOTHERAPY",
//         "authors": "R. Zhang, M.M. Billingsley, M.J. Mitchell",
//         "journalYear": "Journal of Controlled Release (2018)"
//     },
//     {
//         "title": "POTENT IN VIVO LUNG CANCER WNT SIGNALING INHIBITION VIA CYCLODEXTRIN-LGK974 INCLUSION COMPLEXES",
//         "authors": "P.P.G. Guimarães, M. Tan, T. Tammela, K. Wu, A. Chung, M. Oberli, K. Wang, R. Spektor, R.S. Riley, C. Viana, T. Jacks, R. Langer, M.J. Mitchell",
//         "journalYear": "Journal of Controlled Release (2018)"
//     },
//     {
//         "title": "NANOPARTICLES FOR NUCLEIC ACID DELIVERY: APPLICATIONS IN CANCER IMMUNOTHERAPY",
//         "authors": "A.J. Mukalel, R.S. Riley, R. Zhang, M.J. Mitchell",
//         "journalYear": "Cancer Letters (2019)"
//     },
//     {
//         "title": "DELIVERY TECHNOLOGIES FOR CANCER IMMUNOTHERAPY",
//         "authors": "R.S. Riley, C.H. June, R. Langer, M.J. Mitchell",
//         "journalYear": "Nature Reviews Drug Discovery (2019)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLES ENCAPSULATING BARCODED mRNA FOR ACCELERATED IN VIVO DELIVERY SCREENING",
//         "authors": "P.P.G. Guimarães, R. Zhang, R. Spektor, M. Tan, A. Chung, M.M. Billingsley, R. El-Mayta, R.S. Riley, L. Wang, J.M. Wilson, M.J. Mitchell",
//         "journalYear": "Journal of Controlled Release (2019)"
//     },
//     {
//         "title": "CHIRAL SUPRAPARTICLES FOR CONTROLLABLE NANOMEDICINE",
//         "authors": "J. Yeom, P.P.G. Guimarães, H.M. Ahn, B.K. Jung, Q. Hu, K. McHugh, M.J. Mitchell, C.O. Yun, R. Langer, A. Jaklenec",
//         "journalYear": "Advanced Materials (2020)"
//     },
//     {
//         "title": "EXPLOITING THE PLACENTA FOR NANOPARTICLE-MEDIATED DRUG DELIVERY DURING PREGNANCY",
//         "authors": "C.G. Figueroa-Espada, S. Hofbauer, M.J. Mitchell, R.S. Riley",
//         "journalYear": "Advanced Drug Delivery Reviews (2020)"
//     },
//     {
//         "title": "NANOMATERIALS FOR THERAPEUTIC RNA DELIVERY",
//         "authors": "X. Han, M.J. Mitchell, G. Nie",
//         "journalYear": "Matter (2020)"
//     },
//     {
//         "title": "CYCLODEXTRINS IN DRUG DELIVERY: APPLICATIONS IN GENE AND COMBINATION THERAPY",
//         "authors": "R.M. Haley, R. Gottardi, R. Langer, M.J. Mitchell",
//         "journalYear": "Drug Delivery and Translational Research (2020)"
//     },
//     {
//         "title": "NANOPARTICLE-ENCAPSULATED siRNAs FOR GENE SILENCING IN THE HAEMATOPOIETIC STEM-CELL NICHE",
//         "authors": "M. Krohn-Grimberghe, M.J. Mitchell, M.J. Schloss, O.F. Khan, G. Courties, P.P.G. Guimaraes, D. Rohde, S. Cremer, P.S. Kowalski, Y. Sun, M. Tan, J. Webster, K. Wang, Y. Iwamoto, S.P. Schmidt, G.R. Wojtkiewicz, R. Nayar, V. Frodermann, M. Hulsmans, A. Chung, F.F. Hoyer, F.K. Swirski, R. Langer, D.G. Anderson, M. Nahrendorf",
//         "journalYear": "Nature Biomedical Engineering (2020)"
//     },
//     {
//         "title": "PROTON-DRIVEN TRANSFORMABLE NANOVACCINE FOR CANCER IMMUNOTHERAPY",
//         "authors": "N. Gong, Y. Zhang, X. Teng, Y. Wang, S. Huo, G. Qing, Q. Ni, X. Li, J. Wang, X. Ye, T. Zhang, S. Chen, Y. Wang, J. Yu, P.C. Wang, Y. Gan, J. Zhang, M.J. Mitchell, J. Li, X.J. Liang",
//         "journalYear": "Nature Nanotechnology (2020)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLE MEDIATED mRNA DELIVERY FOR HUMAN CAR T CELL ENGINEERING",
//         "authors": "M.M. Billingsley, N. Singh, P. Ravikumar, R. Zhang, C.H. June, M.J. Mitchell",
//         "journalYear": "Nano Letters (2020)"
//     },
//     {
//         "title": "SUMMARY FROM THE FIRST KIDNEY CANCER RESEARCH SUMMIT, SEPTEMBER 12-13, 2019: A FOCUS ON TRANSLATIONAL RESEARCH",
//         "authors": "T.K. Choueiri, M.B. Atkins, Z. Bakouny, M.I. Carlo, C.G. Drake, E. Jonasch, P. Kapur, B. Lewis, W.M. Linehan, M.J. Mitchell, S.K. Pal, K. Pels, S. Poteat, W.K. Rathmell, B.I. Rini, S. Signoretti, N. Tannir, R. Uzzo, C.G. Wood, H.J. Hammers",
//         "journalYear": "Journal of the National Cancer Institute (2021)"
//     },
//     {
//         "title": "DELIVERY TECHNOLOGIES FOR IN UTERO GENE THERAPY",
//         "authors": "R. Palanki, W.H. Peranteau, M.J. Mitchell",
//         "journalYear": "Advanced Drug Delivery Reviews (2021)"
//     },
//     {
//         "title": "PEPTIDE FUNCTIONALIZED LIPOSOMES FOR RECEPTOR TARGETED CANCER THERAPY",
//         "authors": "M.R. Aronson, S.H. Medina, M.J. Mitchell",
//         "journalYear": "APL Bioengineering (2021)"
//     },
//     {
//         "title": "DELIVERY TECHNOLOGIES TO ENGINEER NATURAL KILLER CELLS FOR CANCER IMMUNOTHERAPY",
//         "authors": "R. El-Mayta, Z. Zhang, A.G. Hamilton, M.J. Mitchell",
//         "journalYear": "Cancer Gene Therapy (2021)"
//     },
//     {
//         "title": "DELIVERY TECHNOLOGIES FOR T CELL GENE EDITING: APPLICATIONS IN CANCER IMMUNOTHERAPY",
//         "authors": "E. Atsavapranee, M.M. Billingsley, M.J. Mitchell",
//         "journalYear": "EBioMedicine (2021)"
//     },
//     {
//         "title": "A NANOPARTICLE PLATFORM FOR ACCELERATED ORAL DELIVERY SCREENING OF NUCLEIC ACIDS",
//         "authors": "R. El-Mayta, R. Zhang, S.J. Shepherd, F. Wang, M.M. Billingsley, V. Dudkin, D. Klein, H.D. Lu, M.J. Mitchell",
//         "journalYear": "Advanced Therapeutics (2021)"
//     },
//     {
//         "title": "HELPER LIPID STRUCTURE INFLUENCES PROTEIN ADSORPTION AND DELIVERY OF LIPID NANOPARTICLES TO SPLEEN AND LIVER",
//         "authors": "R. Zhang, R. El-Mayta, T.J. Murdoch, C.C. Warzecha, M.M. Billingsley, S.J. Shepherd, N. Gong, L. Wang, J.M. Wilson, D. Lee, M.J. Mitchell",
//         "journalYear": "Biomaterials Science (2021)"
//     },
//     {
//         "title": "LIPID NANOPARTICLE-MEDIATED DELIVERY OF mRNA THERAPEUTICS AND VACCINES",
//         "authors": "K.L. Swingle, A.G. Hamilton, M.J. Mitchell",
//         "journalYear": "Trends in Molecular Medicine (2021)"
//     },
//     {
//         "title": "MICROFLUIDIC FORMULATION OF NANOPARTICLES FOR BIOMEDICAL APPLICATIONS",
//         "authors": "S.J. Shepherd, D. Issadore, M.J. Mitchell",
//         "journalYear": "Biomaterials (2021)"
//     },
//     {
//         "title": "ONE-COMPONENT MULTIFUNCTIONAL SEQUENCE-DEFINED IONIZABLE AMPHIPHILIC JANUS DENDRIMER DELIVERY SYSTEMS FOR mRNA",
//         "authors": "D. Zhang, E.N. Atochina-Vasserman, D.S. Maurya, N. Huang, Q. Xiao, N. Orna, M. Liu, H. Shahnawaz, H. Ni, K. Kim, M.M. Billingsley, D.J. Pochan, M.J. Mitchell, D. Weissman, V. Percec",
//         "journalYear": "Journal of the American Chemical Society (2021)"
//     },
//     {
//         "title": "ENGINEERING PRECISION NANOPARTICLES FOR DRUG DELIVERY",
//         "authors": "M.J. Mitchell, M.M. Billingsley, R.M. Haley, M.E. Wechsler, N.A. Peppas, R. Langer",
//         "journalYear": "Nature Reviews Drug Discovery (2021)"
//     },
//     {
//         "title": "NANOMATERIALS FOR T-CELL CANCER IMMUNOTHERAPY",
//         "authors": "N. Gong, N.C. Sheppard, M.M. Billingsley, C.H. June, M.J. Mitchell",
//         "journalYear": "Nature Nanotechnology (2021)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLES FOR IN UTERO mRNA DELIVERY",
//         "authors": "R.S. Riley, M.V. Kashyap, M.M. Billingsley, B. White, M.G. Alameh, S.K. Bose, P.W. Zoltick, H. Li, R. Zhang, A.Y. Cheng, D. Weissman, W.H. Peranteau, M.J. Mitchell",
//         "journalYear": "Science Advances (2021)"
//     },
//     {
//         "title": "SCALABLE mRNA AND siRNA LIPID NANOPARTICLE PRODUCTION USING A PARALLELIZED MICROFLUIDIC DEVICE",
//         "authors": "S.J. Shepherd, C.C. Warzecha, S. Yadavali, R. El-Mayta, M.G. Alameh, L. Wang, D. Weissman, J.M. Wilson, D. Issadore, M.J. Mitchell",
//         "journalYear": "Nano Letters (2021)"
//     },
//     {
//         "title": "AN IONIZABLE LIPID TOOLBOX FOR RNA DELIVERY",
//         "authors": "X. Han, H. Zhang, K. Butowska, K.L. Swingle, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature Communications (2021)"
//     },
//     {
//         "title": "ADDED TO PRE-EXISTING INFLAMMATION, mRNA-LIPID NANOPARTICLES INDUCE INFLAMMATION EXACERBATION (IE)",
//         "authors": "H. Parhiz, J.S. Brenner, P. Patel, T.E. Papp, H. Shahnawaz, Q. Li, R. Shi, M. Zamora, A. Yadegari, O.A. Marcos-Contreras, A. Natesan, N. Pardi, V. Shuvaev, R. Kiseleva, J. Myerson, T. Uhler, R.S. Riley, X. Han, M.J. Mitchell, K. Lam, J. Heyes, D. Weissman, V. Muzykantov",
//         "journalYear": "Journal of Controlled Release (2022)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLE-MEDIATED DELIVERY OF PLASMID DNA IN CARDIOMYOCYTES",
//         "authors": "S. Scalzo, H.A.S. Ferreira, P.A. Costa, P.H.D.M. Prazeres, N.J.A. da Silva, L.C. Guimaraes, M.D.M. e Silva, M.T.R. Rodrigues Alves, C.T.R. Viana, I.C.G. Jesus, A.P. Rodrigues, A. Birbrair, A.O. Lobo, F. Frezard, M.J. Mitchell, S. Guatimosim, P.P.G. Guimaraes",
//         "journalYear": "International Journal of Nanomedicine (2022)"
//     },
//     {
//         "title": "DRUG DELIVERY TECHNOLOGIES FOR FETAL, NEONATAL, AND MATERNAL THERAPY",
//         "authors": "R. Palanki, W.H. Peranteau, M.J. Mitchell",
//         "journalYear": "Advanced Drug Delivery Reviews (2022)"
//     },
//     {
//         "title": "(CONTROLLED) SPILL OF IL-2 FOR LOCALIZED TREATMENT OF MESOTHELIOMA",
//         "authors": "R. Palanki, K.L. Swingle, M.J. Mitchell",
//         "journalYear": "Clinical Cancer Research (2022)"
//     },
//     {
//         "title": "RATIONAL DESIGN OF ANTI-INFLAMMATORY LIPID NANOPARTICLES FOR mRNA DELIVERY",
//         "authors": "H. Zhang, X. Han, M.G. Alameh, S.J. Shepherd, M.S. Padilla, L. Xue, K. Butowska, D. Weissman, M.J. Mitchell",
//         "journalYear": "Journal of Biomedical Materials Research Part A (2022)"
//     },
//     {
//         "title": "CYTOSOLIC DELIVERY OF SMALL PROTEIN SCAFFOLDS ENABLES EFFICIENT INHIBITION OF RAS AND MYC",
//         "authors": "A. Chan, H.H. Wang, R.M. Haley, C. Song, D. Gonzalez-Martinez, L. Bugaj, M.J. Mitchell, A. Tsourkas",
//         "journalYear": "Molecular Pharmaceutics (2022)"
//     },
//     {
//         "title": "RGD PEPTIDE-BASED LIPIDS FOR TARGETED mRNA DELIVERY AND GENE EDITING APPLICATIONS",
//         "authors": "J. Qin, L. Xue, N. Gong, H. Zhang, S.J. Shepherd, R.M. Haley, K.L. Swingle, M.J. Mitchell",
//         "journalYear": "RSC Advances (2022)"
//     },
//     {
//         "title": "AMNIOTIC FLUID STABILIZED LIPID NANOPARTICLES FOR IN UTERO INTRA-AMNIOTIC mRNA DELIVERY",
//         "authors": "K.L. Swingle, M.M. Billingsley, S.K. Bose, B. White, R. Palanki, A. Dave, S.K. Patel, N. Gong, A.G. Hamilton, M.G. Alameh, D. Weissman, W.H. Peranteau, M.J. Mitchell",
//         "journalYear": "Journal of Controlled Release (2022)"
//     },
//     {
//         "title": "ORTHOGONAL DESIGN OF EXPERIMENTS FOR OPTIMIZATION OF LIPID NANOPARTICLES FOR mRNA ENGINEERING OF CAR T CELLS",
//         "authors": "M.M. Billingsley, A.G. Hamilton, D. Mai, S.K. Patel, K.L. Swingle, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "journalYear": "Nano Letters (2022)"
//     },
//     {
//         "title": "LIGHTING THE WAY TO PERSONALIZED mRNA IMMUNE CELL THERAPIES",
//         "authors": "A.E. Metzloff, M.M. Billingsley, M.J. Mitchell",
//         "journalYear": "Science Advances (2022)"
//     },
//     {
//         "title": "ENDOTHELIAL PLASTICITY DRIVES ABERRANT VASCULARIZATION AND IMPEDES CARDIAC REPAIR AFTER MYOCARDIAL INFARCTION",
//         "authors": "M. Huang, F. Yang, D. Zhang, M. Lin, H. Duan, R. El-Mayta, L. Zhang, L. Qin, S.V. Shewale, L. Pei, M.J. Mitchell, D.J. Rader, Y. Fan, Y. Gong",
//         "journalYear": "Nature Cardiovascular Research (2022)"
//     },
//     {
//         "title": "HYDROXYCHOLESTEROL SUBSTITUTION IN IONIZABLE LIPID NANOPARTICLES FOR mRNA DELIVERY TO T CELLS",
//         "authors": "S.K. Patel, M.M. Billingsley, C. Frazee, X. Han, K.L. Swingle, J. Qin, M.G. Alameh, K. Wang, D. Weissman, M.J. Mitchell",
//         "journalYear": "Journal of Controlled Release (2022)"
//     },
//     {
//         "title": "LIPID NANODISCS GIVE CANCER A STING",
//         "authors": "N. Gong, M.J. Mitchell",
//         "journalYear": "Nature Materials (2022)"
//     },
//     {
//         "title": "RATIONAL DESIGN OF BISPHOSPHONATE LIPID-LIKE MATERIALS FOR mRNA DELIVERY TO THE BONE MICROENVIRONMENT",
//         "authors": "L. Xue, N. Gong, S.J. Shepherd, X. Xiong, X. Liao, X. Han, G. Zhao, C. Song, X. Huang, H. Zhang, M.S. Padilla, J. Qin, Y. Shi, M.G. Alameh, D.J. Pochan, K. Wang, F. Long, D. Weissman, M.J. Mitchell",
//         "journalYear": "Journal of the American Chemical Society (2022)"
//     },
//     {
//         "title": "NANOTECHNOLOGY-BASED STRATEGIES AGAINST SARS-CoV-2 VARIANTS",
//         "authors": "X. Huang, E. Kon, X. Han, X. Zhang, N. Kong, M.J. Mitchell, D. Peer, W. Tao",
//         "journalYear": "Nature Nanotechnology (2022)"
//     },
//     {
//         "title": "DOXORUBICIN-CONJUGATED siRNA LIPID NANOPARTICLES FOR COMBINATION CANCER THERAPY",
//         "authors": "K. Butowska, X. Han, N. Gong, R. El-Mayta, R.M. Haley, L. Xue, W. Zhong, W. Guo, K. Wang, M.J. Mitchell",
//         "journalYear": "Acta Pharmaceutica Sinica B (2023)"
//     },
//     {
//         "title": "ORAL FORMULATION OF WNT INHIBITOR COMPLEX REDUCES INFLAMMATION AND FIBROSIS IN INTRAPERITONEAL IMPLANTS IN VIVO",
//         "authors": "A.L. de Castro Santos, N.J.A. da Silva, C.T.R. Viana, L.C.C. dos Santos, G.H.C. da Silva, S.R.A. Scalzo, P.A.C. Costa, W.N. da Silva, M.T.Q. Magalhaes, I.C.G. de Jesus, A. Birbair, F. Frezard, S. Guatimosim, R.M. Haley, M.J. Mitchell, S.P. Andrade, P.P. Campos, P.P.G. Guimaraes",
//         "journalYear": "Drug Delivery and Translational Research (2023)"
//     },
//     {
//         "title": "FUTURE DIRECTIONS AND RESOURCE NEEDS FOR NATIONAL HEART, LUNG, AND BLOOD INSTITUTE (NHLBI) GENE THERAPY RESEARCH: A REPORT OF AN NHLBI WORKSHOP",
//         "authors": "C.L. McDonald, P. Qasba, D.G. Anderson, G. Bao, R.A. Colvin, D.B. Kohn, P. Malik, M.J. Mitchell, W.T. Pu, D.J. Rawlings, D.A. Williams, T.R. Flotte",
//         "journalYear": "Human Gene Therapy (2023)"
//     },
//     {
//         "title": "TESTING THE IN VITRO AND IN VIVO EFFICIENCY OF mRNA-LIPID NANOPARTICLES FORMULATED BY MICROFLUIDIC MIXING",
//         "authors": "R. El-Mayta, M.S. Padilla, M.M. Billingsley, X. Han, M.J. Mitchell",
//         "journalYear": "Journal of Visualized Experiments (2023)"
//     },
//     {
//         "title": "PLATELET-MIMICKING NANOSPONGES FOR FUNCTIONAL REVERSAL OF ANTIPLATELET AGENTS",
//         "authors": "J. Xu, N. Yan, C. Wang, C. Yao, X. Han, C. Yang, J. Xu, K. Wang, M.J. Mitchell, Y. Zhang, G. Nie",
//         "journalYear": "Circulation Research (2023)"
//     },
//     {
//         "title": "NANOPARTICLE PROTEIN CORONA: FROM STRUCTURE AND FUNCTION TO THERAPEUTIC TARGETING",
//         "authors": "G. Bashiri, M.S. Padilla, K.L. Swingle, S.J. Shepherd, M.J. Mitchell, K. Wang",
//         "journalYear": "Lab on a Chip (2023)"
//     },
//     {
//         "title": "LIGAND-TETHERED LIPID NANOPARTICLES FOR TARGETED RNA DELIVERY TO TREAT LIVER FIBROSIS",
//         "authors": "X. Han, N. Gong, L. Xue, M.M. Billingsley, R. El-Mayta, S.J. Shepherd, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature Communications (2023)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLES FOR IN VIVO mRNA DELIVERY TO THE PLACENTA DURING PREGNANCY",
//         "authors": "K.L. Swingle, H.C. Safford, H.C. Geisler, A.G. Hamilton, A.S. Thatte, M.M. Billingsley, R.A. Joseph, K. Mrksich, M.S. Padilla, A.A. Ghalsasi, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "journalYear": "Journal of the American Chemical Society (2023)"
//     },
//     {
//         "title": "DELIVERY TECHNOLOGIES FOR WOMEN'S HEALTH APPLICATIONS",
//         "authors": "K.L. Swingle, A.S. Ricciardi, W.H. Peranteau, M.J. Mitchell",
//         "journalYear": "Nature Reviews Bioengineering (2023)"
//     },
//     {
//         "title": "A HYDROGEL-ENTRAPPED LIVE VIRUS IMMUNIZATION",
//         "authors": "N. Gong, A.G. Hamilton, M.J. Mitchell",
//         "journalYear": "Nature Biomedical Engineering (2023)"
//     },
//     {
//         "title": "EXOSOME-DISRUPTING PEPTIDES FOR CANCER IMMUNOTHERAPY",
//         "authors": "N. Gong, A.G. Hamilton, M.J. Mitchell",
//         "journalYear": "Nature Materials (2023)"
//     },
//     {
//         "title": "OVERCOMING BIOLOGICAL BARRIERS TO NUCLEIC ACID DELIVERY USING LIPID NANOPARTICLES",
//         "authors": "A.G. Hamilton, K.L. Swingle, M.J. Mitchell",
//         "journalYear": "PLOS Biology (2023)"
//     },
//     {
//         "title": "REROUTING NANOPARTICLES TO BONE MARROW VIA NEUTROPHIL HITCHHIKING",
//         "authors": "N. Gong, M.J. Mitchell",
//         "journalYear": "Nature Nanotechnology (2023)"
//     },
//     {
//         "title": "LIPID NANOPARTICLE DELIVERY OF SMALL PROTEINS FOR POTENT IN VIVO RAS INHIBITION",
//         "authors": "R.M. Haley, A. Chan, M.M. Billingsley, N. Gong, M.S. Padilla, E.H. Kim, H. Wang, D. Yin, K.J. Wangensteen, A. Tsourkas, M.J. Mitchell",
//         "journalYear": "ACS Applied Materials & Interfaces (2023)"
//     },
//     {
//         "title": "TARGETED NANOCARRIERS CO-OPTING PULMONARY INTRAVASCULAR LEUKOCYTES FOR DRUG DELIVERY TO THE INJURED BRAIN",
//         "authors": "J. Nong, P.M. Glassman, J.W. Myerson, V. Zuluaga-Ramirez, A. Rodriguez-Garcia, A.J. Mukalel, S. Omo-Lamai, L.R. Walsh, M.E. Zamora, X. Gong, Z. Wang, K. Bhamidipati, R.Y. Kiseleva, C.H. Villa, C.F. Greineder, S.E. Kasner, D. Weissman, M.J. Mitchell, S. Muro, Y. Peridsky, J.S. Brenner, V.R. Muzykantov, O.A. Marcos-Contreras",
//         "journalYear": "ACS Nano (2023)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLES FOR THERAPEUTIC BASE EDITING OF CONGENITAL BRAIN DISEASE",
//         "authors": "R. Palanki, S.K. Bose, A. Dave, B.M. White, C. Berkowitz, V. Luks, F. Yaqoob, E. Han, K.L. Swingle, P. Menon, E. Hodgson, A. Biswas, M.M. Billingsley, L. Li, F. Yiping, M. Carpenter, A. Trokhan, J. Yeo, N. Johana, T.Y. Wan, M.G. Alameh, F.C. Bennett, P.B. Storm, R. Jain, J. Chan, D. Weissman, M.J. Mitchell, W.H. Peranteau",
//         "journalYear": "ACS Nano (2023)"
//     },
//     {
//         "title": "siRNA LIPID-POLYMER NANOPARTICLES TARGETING E-SELECTIN AND CYCLOPHILIN A IN BONE MARROW FOR COMBINATION MULTIPLE MYELOMA THERAPY",
//         "authors": "C.G. Figueroa-Espada, P.P.G. Guimaraes, R.S. Riley, L. Xue, K. Wang, M.J. Mitchell",
//         "journalYear": "Cellular and Molecular Bioengineering (2023)"
//     },
//     {
//         "title": "UPREGULATION OF EXOSOME SECRETION FROM TUMOR-ASSOCIATED MACROPHAGES PLAYS A KEY ROLE IN THE SUPPRESSION OF ANTI-TUMOR IMMUNITY",
//         "authors": "W. Zhong, Y. Lu, X. Han, J. Yang, Z. Qin, W. Zhang, Z. Yu, B. Wu, S. Liu, W. Xu, C. Zheng, L.M. Schuchter, G.C. Karakousis, T.C. Mitchell, R. Amaravadi, A.J. Flowers, P.A. Gimotty, M. Xiao, G. Mills, M. Herlyn, H. Dong, M.J. Mitchell, J. Kim, X. Xu, W. Guo",
//         "journalYear": "Cell Reports (2023)"
//     },
//     {
//         "title": "DELIVERY OF PLASMID DNA BY IONIZABLE LIPID NANOPARTICLES TO INDUCE CAR EXPRESSION IN T CELLS",
//         "authors": "P.H.D.M. Prazeres, H. Ferreira, P.A.C. Costa, W. da Silva, M.T. Alves, M.S. Padilla, A.S. Thatte, A.K. Santos, A.O. Lobo, A. Sabino, A. Sabino, H.L. Del Puerto, M.J. Mitchell, P.P.G. Guimaraes",
//         "journalYear": "International Journal of Nanomedicine (2023)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLES WITH INTEGRATED IMMUNE CHECKPOINT INHIBITION FOR mRNA CAR T CELL ENGINEERING",
//         "authors": "A.G. Hamilton, K.L. Swingle, R.A. Joseph, D. Mai, N. Gong, M.M. Billingsley, M.G. Alameh, D. Weissman, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "journalYear": "Advanced Healthcare Materials (2023)"
//     },
//     {
//         "title": "IN VIVO BONE MARROW MICROENVIRONMENT siRNA DELIVERY USING LIPID-POLYMER NANOPARTICLES FOR MULTIPLE MYELOMA THERAPY",
//         "authors": "P.P.G. Guimaraes, C.G. Figueroa-Espada, R.S. Riley, N. Gong, L. Xue, T. Sewastianik, P.S. Dennis, C. Loebel, A. Chung, S.J. Shepherd, R.M. Haley, A.G. Hamilton, R. El-Mayta, K. Wang, R. Langer, D.G. Anderson, R.D. Carrasco, M.J. Mitchell",
//         "journalYear": "PNAS (2023)"
//     },
//     {
//         "title": "THROUGHPUT-SCALABLE MANUFACTURING OF SARS-CoV-2 mRNA LIPID NANOPARTICLE VACCINES",
//         "authors": "S.J. Shepherd, X. Han, A.J. Mukalel, R. El-Mayta, A.S. Thatte, J. Wu, M.S. Padilla, M.G. Alameh, N. Srikumar, D. Lee, D. Weissman, D. Issadore, M.J. Mitchell",
//         "journalYear": "PNAS (2023)"
//     },
//     {
//         "title": "mRNA LIPID NANOPARTICLES FOR EX VIVO ENGINEERING OF IMMUNOSUPPRESSIVE T CELLS FOR AUTOIMMUNITY THERAPIES",
//         "authors": "A.S. Thatte, A.G. Hamilton, B.E. Nachod, A.J. Mukalel, M.M. Billingsley, R. Palanki, K.L. Swingle, M.J. Mitchell",
//         "journalYear": "Nano Letters (2023)"
//     },
//     {
//         "title": "ADJUVANT LIPIDOID-SUBSTITUTED LIPID NANOPARTICLES AUGMENT THE IMMUNOGENICITY OF SAR-CoV-2 mRNA VACCINES",
//         "authors": "X. Han, M.G. Alameh, K. Butowska, J.J. Knox, K. Lundgreen, M. Ghattas, N. Gong, L. Xue, Y. Xu, M. Lavertu, P. Bates, J. Xu, G. Nie, Y. Zhong, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature Nanotechnology (2023)"
//     },
//     {
//         "title": "IN SITU PEGYLATION OF CAR T CELLS ALLEVIATES CYTOKINE RELEASE SYNDROME AND NEUROTOXICITY",
//         "authors": "N. Gong, X. Han, L. Xue, R. El-Mayta, A.E. Metzloff, M.M. Billingsley, A.G. Hamilton, M.J. Mitchell",
//         "journalYear": "Nature Materials (2023)"
//     },
//     {
//         "title": "RATIONAL DESIGN OF NANOMEDICINE FOR PLACENTAL DISORDERS: BIRTHING A NEW ERA IN WOMEN'S REPRODUCTIVE HEALTH",
//         "authors": "H.C. Geisler, H.C. Safford, M.J. Mitchell",
//         "journalYear": "Small (2023)"
//     },
//     {
//         "title": "ORTHOGONAL DESIGN OF EXPERIMENTS FOR ENGINEERING OF LIPID NANOPARTICLES FOR mRNA DELIVERY TO THE PLACENTA",
//         "authors": "H.C. Safford, K.L. Swingle, H.C. Geisler, A.G. Hamilton, A.S. Thatte, A.A. Ghalsasi, M.M. Billingsley, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "journalYear": "Small (2023)"
//     },
//     {
//         "title": "IN VIVO mRNA CAR T CELL ENGINEERING VIA TARGETED LIPID NANOPARTICLES WITH EXTRAHEPATIC TROPISM",
//         "authors": "M.M. Billingsley, N. Gong, A.J. Mukalel, A.S. Thatte, R. El-Mayta, S.K. Patel, A.E. Metzloff, K.L. Swingle, X. Han, L. Xue, A.G. Hamilton, H.C. Safford, M.G. Alameh, T.E. Papp, H. Parhiz, D. Weissman, M.J. Mitchell",
//         "journalYear": "Small (2023)"
//     },
//     {
//         "title": "BILE ACID-CONTAINING LIPID NANOPARTICLES ENHANCE EXTRAHEPATIC mRNA DELIVERY",
//         "authors": "S.K. Patel, M.M. Billingsley, A.J. Mukalel, A.S. Thatte, A.G. Hamilton, N. Gong, R. El-Mayta, H.C. Safford, M. Merolle, M.J. Mitchell",
//         "journalYear": "Theranostics (2024)"
//     },
//     {
//         "title": "siRNA LIPID NANOPARTICLES FOR CXCL12 SILENCING MODULATE BRAIN IMMUNE RESPONSE DURING ZIKA INFECTION",
//         "authors": "P.A.C. Costa, W.N. da Silva, P.H.D.M. Prazeres, H.A.S. Ferreira, N.J.A. da Silva, M.M. Figueiredo, B. Oliveira, S.R.A. Scalzo, F.R. Santos, R.A. Fernandes, R. Palanki, A.G. Hamilton, A. Birbair, V.R. Santos, A.S. de Miranda, M.J. Mitchell, M.M. Teixeira, V.V. Costa, P.P.G. Guimaraes",
//         "journalYear": "Biomedicine & Pharmacotherapy (2024)"
//     },
//     {
//         "title": "AN ONCOLYTIC CIRCULAR RNA THERAPY",
//         "authors": "A.G. Hamilton, M.J. Mitchell",
//         "journalYear": "Nature Cancer (2024)"
//     },
//     {
//         "title": "RESPONSIVE BIOMATERIALS: OPTIMIZING CONTROL OF CANCER IMMUNOTHERAPY",
//         "authors": "L. Xue, A.S. Thatte, D. Mai, R.M. Haley, N. Gong, X. Han, K. Wang, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "journalYear": "Nature Reviews Materials (2024)"
//     },
//     {
//         "title": "NANOPARTICLE-BASED DNA VACCINE PROTECTS AGAINST SARS-CoV-2 VARIANTS IN FEMALE PRECLINICAL MODELS",
//         "authors": "L.C. Guimaraes, P.A.C. Costa, S.R.A. Scalzo Junior, H.A.S. Ferreira, A.C.S. Braga, L.C. de Oliveira, M.M. Figueiredo, S.J. Shepherd, A.G. Hamilton, C.M. Queiroz-Junior, W.N. da Silva, N.J.A. da Silva, M.T.R. Alves, A.K. Santos, K.K.S. da Faria, F.M. Marim, H. Fukumasu, A. Birbair, A. Teixeira-Carvalho, R.S. de Aguiar, M.J. Mitchell, M.M. Teixeira, V.V. Costa, F. Frezard, P.P.G. Guimaraes",
//         "journalYear": "Nature Communications (2024)"
//     },
//     {
//         "title": "PREDICTIVE HIGH-THROUGHPUT PLATFORM FOR DUAL SCREENING OF mRNA LIPID NANOPARTICLE BLOOD-BRAIN BARRIER TRANSFECTION AND CROSSING",
//         "authors": "E.L. Han, M.S. Padilla, R. Palanki, D. Kim, K. Mrksich, J.J. Li, S. Tang, I.C. Yoon, M.J. Mitchell",
//         "journalYear": "Nano Letters (2024)"
//     },
//     {
//         "title": "MICROFLUIDIC GENERATION OF DIVERSE LIPID NANOPARTICLE LIBRARIES",
//         "authors": "A. Hanna, S.J. Shepherd, D. Issadore, M.J. Mitchell",
//         "journalYear": "Nanomedicine (2024)"
//     },
//     {
//         "title": "TGF-βR2 SIGNALING COORDINATES PULMONARY VASCULAR REPAIR AFTER VIRAL INJURY IN MICE AND HUMAN TISSUE",
//         "authors": "G. Zhao, L. Xue, A.I. Weiner, N. Gong, S. Adams-Tzivelekidis, J. Wong, M.E. Gentile, A.N. Nottingham, M.C. Basil, S.M. Lin, T.K. Niethamer, J.M. Diamond, C.A. Bermudez, E. Cantu, X. Han, Y. Cao, M.G. Alameh, D. Weissman, E.E. Morrisey, M.J. Mitchell, A.E. Vaughan",
//         "journalYear": "Science Translational Medicine (2024)"
//     },
//     {
//         "title": "PRECISION TREATMENT OF VIRAL PNEUMONIA THROUGH MACROPHAGE-TARGETED LIPID NANOPARTICLE DELIVERY",
//         "authors": "G. Zhao, L. Xue, H.C. Geisler, J. Xu, X. Li, M.J. Mitchell, A.E. Vaughan",
//         "journalYear": "PNAS (2024)"
//     },
//     {
//         "title": "AN IMMUNOSUPPRESSIVE VASCULAR NICHE DRIVES MACROPHAGE POLARIZATION AND IMMUNOTHERAPY RESISTANCE IN GLIOBLASTOMA",
//         "authors": "F. Yang, M.N. Akhtar, D. Zhang, R. El-Mayta, J. Shin, J.F. Dorsey, L. Zhang, X. Xu, W. Guo, S.J. Bagley, S.Y. Fuchs, C. Koumenis, J.D. Lathia, M.J. Mitchell, Y. Gong, Y. Fan",
//         "journalYear": "Science Advances (2024)"
//     },
//     {
//         "title": "EMERGING STRATEGIES FOR NANOMEDICINE IN AUTOIMMUNITY",
//         "authors": "A.S. Thatte, M.M. Billingsley, D. Weissman, J.R. Melamed, M.J. Mitchell",
//         "journalYear": "Advanced Drug Delivery Reviews (2024)"
//     },
//     {
//         "title": "SMALL-MOLECULE-MEDIATED CONTROL OF THE ANTI-TUMOUR ACTIVITY AND OFF-TUMOUR TOXICITY OF A SUPRAMOLECULAR BISPECIFIC T CELL ENGAGER",
//         "authors": "N. Gong, X. Han, L. Xue, M.M. Billingsley, X. Huang, R. El-Mayta, J. Qin, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "journalYear": "Nature Biomedical Engineering (2024)"
//     },
//     {
//         "title": "IN SITU COMBINATORIAL SYNTHESIS OF DEGRADABLE BRANCHED LIPIDOIDS FOR SYSTEMIC DELIVERY OF mRNA THERAPEUTICS AND GENE EDITORS",
//         "authors": "X. Han, J. Xu, Y. Xu, M.G. Alameh, L. Xue, N. Gong, R. El-Mayta, R. Palanki, C.C. Warzecha, G. Zhao, A.E. Vaughan, J.M. Wilson, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature Communications (2024)"
//     },
//     {
//         "title": "HIGH-THROUGHPUT BARCODING OF NANOPARTICLES IDENTIFIES CATIONIC, DEGRADABLE LIPID-LIKE MATERIALS FOR mRNA DELIVERY TO THE LUNGS IN FEMALE PRECLINICAL MODELS",
//         "authors": "L. Xue, A.G. Hamilton, G. Zhao, Z. Xiao, R. El-Mayta, X. Han, N. Gong, X. Xiong, J. Xu, C.G. Figueroa-Espada, S.J. Shepherd, A.J. Mukalel, M.G. Alameh, J. Cui, K. Wang, A.E. Vaughan, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature Communications (2024)"
//     },
//     {
//         "title": "OXIDIZED mRNA LIPID NANOPARTICLES FOR IN SITU CHIMERIC ANTIGEN RECEPTOR MONOCYTE ENGINEERING",
//         "authors": "A.J. Mukalel, A.G. Hamilton, M.M. Billingsley, J. Li, A.S. Thatte, X. Han, H.C. Safford, M.S. Padilla, T. Papp, H. Parhiz, D. Weissman, M.J. Mitchell",
//         "journalYear": "Advanced Functional Materials (2024)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLE-MEDIATED TRAIL mRNA DELIVERY IN THE TUMOR MICROENVIRONMENT TO INHIBIT COLON CANCER PROGRESSION",
//         "authors": "W.N. Silva, P.A.C. Costa, S.R.A. Scalzo, H.A.S. Ferreira, P.H.D.M. Prazeres, C.L.V. Campos, M.T. Rodrigues Alves, N.J. Alves da Silva, A.L. de Castro Santos, L.C. Guimaraes, M.E.C. Ferris, A.S. Thatte, A.G. Hamilton, K.A. Bicalho, A.O. Lobo, H.D.C. Santiago, L. da Silva Barcelos, M.M. Figueredo, M.M. Teixeira, C. Vasconcelos Costa, M.J. Mitchell, F. Frezard, P.P.G. Guimaraes",
//         "journalYear": "International Journal of Nanomedicine (2024)"
//     },
//     {
//         "title": "INFLUENCE OF IONIZABLE LIPID TAIL LENGTH ON LIPID NANOPARTICLE DELIVERY OF mRNA OF VARYING LENGTH",
//         "authors": "K. Mrksich, M.S. Padilla, R.A. Joseph, E.L. Han, D. Kim, R. Palanki, J. Xu, M.J. Mitchell",
//         "journalYear": "Journal of Biomedical Materials Research Part A (2024)"
//     },
//     {
//         "title": "ANTIGEN PRESENTING CELL MIMETIC LIPID NANOPARTICLES FOR RAPID mRNA CAR T CELL CANCER IMMUNOTHERAPY",
//         "authors": "A.E. Metzloff, M.S. Padilla, N. Gong, M.M. Billingsley, X. Han, M. Merolle, D. Mai, C.G. Figueroa-Espada, A.S. Thatte, R.M. Haley, A.J. Mukalel, A.G. Hamilton, M.G. Alameh, D. Weissman, N.C. Sheppard, C.H. June, M.J. Mitchell",
//         "journalYear": "Advanced Materials (2024)"
//     },
//     {
//         "title": "IONIZABLE LIPID NANOPARTICLES FOR RAS PROTEASE DELIVERY TO INHIBIT CANCER CELL PROLIFERATION",
//         "authors": "E. Atsavapranee, R.M. Haley, M.M. Billingsley, A. Chan, B. Ruan, C.G. Figueroa-Espada, N. Gong, A.J. Mukalel, P.N. Bryan, M.J. Mitchell",
//         "journalYear": "Journal of Controlled Release (2024)"
//     },
//     {
//         "title": "VASCULAR ENDOTHELIAL-DERIVED SPARCL1 EXACERBATES VIRAL PNEUMONIA THROUGH PRO-INFLAMMATORY MACROPHAGE ACTIVATION",
//         "authors": "G. Zhao, M.E. Gentile, L. Xue, C.V. Cosgriff, A.I. Weiner, S. Adams-Tzivelekidis, J. Wong, X. Li, S. Kass-Gergi, N.P. Holcomb, M.C. Basal, K.M. Stewart, J.D. Planer, E. Cantu, J.D. Christie, M.M. Crespo, M.J. Mitchell, N.J. Meyer, A.E. Vaughan",
//         "journalYear": "Nature Communications (2024)"
//     },
//     {
//         "title": "MECHANISMS AND BARRIERS IN NANOMEDICINE: PROGRESS IN THE FIELD AND FUTURE DIRECTIONS",
//         "authors": "T. Anchordoquy, N. Artzi, I.V. Balyasnikova, Y. Barenholz, N.M. La-Beck, J.S. Brenner, W.C.W. Chan, P. Decuzzi, A.A. Exner, A. Gabizon, B. Godin, S.K. Lai, T. Lammers, M.J. Mitchell, S.M. Moghimi, V.R. Muzykantov, D. Peer, J. Nguyen, R. Popovtzer, M. Ricco, N.J. Serkova, R. Singh, A. Schroeder, A.A. Schwendeman, J.P. Straehla, T. Teesalu, S. Tilden, D. Simberg",
//         "journalYear": "ACS Nano (2024)"
//     },
//     {
//         "title": "EGFR-TARGETED IONIZABLE LIPID NANOPARTICLES ENHANCE IN VIVO mRNA DELIVERY TO THE PLACENTA",
//         "authors": "H.C. Geisler, A.A. Ghalsasi, H.C. Safford, K.L. Swingle, A.S. Thatte, A.J. Mukalel, N. Gong, A.G. Hamilton, E.L. Han, B.E. Nachod, M.S. Padilla, M.J. Mitchell",
//         "journalYear": "Journal of Controlled Release (2024)"
//     },
//     {
//         "title": "HIGH-THROUGHPUT IN VIVO SCREENING IDENTIFIES DIFFERENTIAL INFLUENCES ON mRNA LIPID NANOPARTICLE IMMUNE CELL DELIVERY BY ADMINISTRATION ROUTE",
//         "authors": "A.G. Hamilton, K.L. Swingle, A.S. Thatte, A.J. Mukalel, H.C. Safford, M.M. Billingsley, R. El-Mayta, X. Han, B.E. Nachod, R.A. Joseph, A.E. Metzloff, M.J. Mitchell",
//         "journalYear": "ACS Nano (2024)"
//     },
//     {
//         "title": "ENHANCING IN SITU VACCINES USING DELIVERY TECHNOLOGIES",
//         "authors": "N. Gong, M.G. Alameh, R. El-Mayta, L. Xue, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature Reviews Drug Discovery (2024)"
//     },
//     {
//         "title": "LIPID-MEDIATED INTRACELLULAR DELIVERY OF RECOMBINANT bioPROTACs FOR THE RAPID DEGRADATION OF UNDRUGGABLE TARGETS",
//         "authors": "A. Chan, R.M. Haley, M.A. Najar, D. Gonzalez-Martinez, L. Bugaj, G.M. Burslem, M.J. Mitchell, A. Tsourkas",
//         "journalYear": "Nature Communications (2024)"
//     },
//     {
//         "title": "FAST AND FACILE SYNTHESIS OF AMIDINE-INCORPORATED DEGRADABLE LIPIDS FOR VERSATILE mRNA DELIVERY IN VIVO",
//         "authors": "X. Han, M.G. Alameh, N. Gong, L. Xue, M. Ghattas, G. Boija, J. Xu, G. Zhao, C.C. Warzecha, M.S. Padilla, R. El-Mayta, G. Dwivedi, Y. Xu, A.E. Vaughan, J.M. Wilson, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature Chemistry (2024)"
//     },
//     {
//         "title": "OPTIMIZED MICROFLUIDIC FORMULATION AND ORGANIC EXCIPIENTS FOR IMPROVED LIPID NANOPARTICLE MEDIATED GENOME EDITING",
//         "authors": "R. Palanki, E.L. Han, A.M. Murray, R. Maganti, S. Tang, K.L. Swingle, D. Kim, H. Yamagata, H.C. Safford, K. Mrksich, W.H. Peranteau, M.J. Mitchell",
//         "journalYear": "Lab on a Chip (2024)"
//     },
//     {
//         "title": "FLOW CYTOMETRIC ANALYSIS OF THE MURINE PLACENTA TO EVALUATE NANOPARTICLE PLATFORMS DURING PREGNANCY",
//         "authors": "K.L. Swingle, A.G. Hamilton, M.J. Mitchell",
//         "journalYear": "Placenta (2024)"
//     },
//     {
//         "title": "DRUG DELIVERY TECHNOLOGIES FOR AUTOIMMUNITY THERAPIES",
//         "authors": "A.S. Thatte, J.D. Weaver, R. Pearson, M.J. Mitchell",
//         "journalYear": "Advanced Drug Delivery Reviews (2024)"
//     },
//     {
//         "title": "IN UTERO DELIVERY OF TARGETED IONIZABLE LIPID NANOPARTICLES FACILITATES IN VIVO GENE EDITING OF HEMATOPOIETIC STEM CELLS",
//         "authors": "R. Palanki, J.S. Riley, S.K. Bose, V. Luks, A. Dave, N. Kus, B.M. White, A.S. Ricciardi, K.L. Swingle, L. Xue, D. Sung, A.S. Thatte, H.C. Safford, V.S. Chaluvadi, M. Carpenter, E.L. Han, R. Maganti, A.G. Hamilton, K. Mrksich, M. Billingsley, P.W. Zoltick, M.G. Alameh, D. Weissman, M.J. Mitchell, W.H. Peranteau",
//         "journalYear": "PNAS (2024)"
//     },
//     {
//         "title": "OLAH CONNECTS FATTY ACID METABOLISM TO THE SEVERITY OF RESPIRATORY VIRAL DISEASE",
//         "authors": "R. Palanki, H. Yamagata, M.J. Mitchell",
//         "journalYear": "Cell (2024)"
//     },
//     {
//         "title": "PEPTIDE-FUNCTIONALIZED LIPID NANOPARTICLES FOR TARGETED SYSTEMIC mRNA DELIVERY TO THE BRAIN",
//         "authors": "E.L. Han, S. Tang, D. Kim, A.M. Murray, K.L. Swingle, A.G. Hamilton, K. Mrksich, M.S. Padilla, R. Palanki, J.J. Li, M.J. Mitchell",
//         "journalYear": "Nano Letters (2025)"
//     },
//     {
//         "title": "MULTIARM-ASSISTED DESIGN OF DENDRON-LIKE IONIZABLE LIPIDS FACILITATES SYSTEMIC mRNA DELIVERY TO THE SPLEEN",
//         "authors": "L. Xue, X. Xiong, G. Zhao, W. Molina-Arocho, R. Palanki, Z. Xiao, X. Han, I.C. Yoon, C.G. Figueroa-Espada, J. Xu, N. Gong, Q. Shi, Q. Chen, M.G. Alameh, A.E. Vaughan, M. Haldar, K. Wang D. Weissman, M.J. Mitchell",
//         "journalYear": "Journal of the American Chemical Society (2025)"
//     },
//     {
//         "title": "PLACENTA-TROPIC VEGF mRNA LIPID NANOPARTICLES AMERLIORATE MURINE PRE-ECLAMPSIA",
//         "authors": "K.L. Swingle, A.G. Hamilton, H.C. Safford, H.C. Geisler, A.S. Thatte, R. Palanki, A.M. Murray, E.L. Han, A.J. Mukalel, X. Han, R.A. Joseph, A.A. Ghalsasi, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature (2025)"
//     },
//     {
//         "title": "BRANCHED ENDOSOMAL DISRUPTOR (BEND) LIPIDS MEDIATE DELIVERY OF mRNA AND CRISPR-CAS9 RIBONUCLEOPROTEIN COMPLEX FOR HEPATIC GENE EDITING AND T CELL ENGINEERING",
//         "authors": "M.S. Padilla, K. Mrksich, Y. Wang, R.M. Haley, J.J. Li, E.L. Han, R. El-Mayta, E.H. Kim, S. Dias, N. Gong, S.V. Teerdhala, X. Han, V. Chowdhary, L. Xue, Z. Siddiqui, H.M. Yamagata, D. Kim, I.C. Yoon, J.M. Wilson, R. Radhakrishnan, M.J. Mitchell",
//         "journalYear": "Nature Communications (2025)"
//     },
//     {
//         "title": "TUMOUR-DERIVED SMALL EXTRACELLULAR VESICLES ACT AS A BARRIER TO THERAPEUTIC NANOPARTICLE DELIVERY",
//         "authors": "N. Gong, W. Zhong, M.G. Alameh, X. Han, L. Xue, R. El-Mayta, G. Zhao, A.E. Vaughan, Z. Qin, F. Xu, A.G. Hamilton, D. Kim, J. Xu, J. Kim, X. Teng, J. Li, X.J. Liang, D. Weissman, W. Guo, M.J. Mitchell",
//         "journalYear": "Nature Materials (2024)"
//     },
//     {
//         "title": "OPTIMIZATION OF THE ACTIVITY AND BIODEGRADABILITY OF IONIZABLE LIPIDS FOR mRNA DELIVERY VIA DIRECTED CHEMICAL EVOLUTION",
//         "authors": "X. Han, M.G. Alameh, Y. Xu, R. Palanki, R. El-Mayta, G. Dwivedi, K.L. Swingle, J. Xu, N. Gong, L. Xue, Q. Shi, I.C. Yoon, C.C. Warzecha, J.M. Wilson, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature Biomedical Engineering (2024)"
//     },
//     {
//         "title": "TOWARDS THE CLINICAL TRANSLATION OF A SILVER SULFIDE NANOPARTICLE CONTRAST AGENT: LARGE SCALE PRODUCTION WITH A HIGHLY PARALLELIZED MICROFLUIDIC CHIP",
//         "authors": "K.J. Mossburg, S.J. Shepherd, D. Barragan, E.K. Berkow, P.S.N. Maidment, D.N.R. Berrios, J.C. Hsu, M.J. Siedlik, S. Yadavali, M.J. Mitchell, D. Issadore, D.P. Cormode",
//         "journalYear": "European Journal of Nuclear Medicine and Molecular Imaging (2025)"
//     },
//     {
//         "title": "ROBUST, SCALABLE MICROFLUIDIC MANUFACTURING OF RNA-LIPID NANOPARTICLES USING IMMOBILIZED ANTIFOULING LUBRICANT COATING",
//         "authors": "Y.H. Hwang, S.J. Shepherd, D. Kim, A.J. Mukalel, M.J. Mitchell, D.A. Issadore, D. Lee",
//         "journalYear": "ACS Nano (2025)"
//     },
//     {
//         "title": "PIPERAZINE-DERIVED BISPHOSPHONATE-BASED IONIZABLE LIPID NANOPARTICLES ENHANCE mRNA DELIVERY TO THE BONE MICROENVIRONMENT",
//         "authors": "I.C. Yoon, L. Xue, Q. Chen, J. Liu, J. Xu, Z. Siddiqui, D. Kim, B. Chen, Q. Shi, E.L. Han, M.C. Ruiz, K.H. Vining, M.J. Mitchell",
//         "journalYear": "Angewandte Chemie (2025)"
//     },
//     {
//         "title": "SMALL STRUCTURAL CHANGES IN SILOXANE-BASED LIPIDOIDS IMPROVE TISSUE-SPECIFIC mRNA DELIVERY",
//         "authors": "L. Xue, K.L. Swingle, M.J. Mitchell",
//         "journalYear": "Nature Nanotechnology (2025)"
//     },
//     {
//         "title": "COMBINATORIAL DESIGN OF SILOXANE-INCORPORATED LIPID NANOPARTICLES AUGMENTS INTRACELLULAR PROCESSING FOR TISSUE-SPECIFIC mRNA THERAPEUTIC DELIVERY",
//         "authors": "L. Xue, G. Zhao, N. Gong, X. Han, S.J. Shepherd, X. Xiong, Z. Xiao, R. Palanki, J. Xu, K.L. Swingle, C.C. Warzecha, R. El-Mayta, V. Chowdhary, I.C. Yoon, J. Xu, J. Cui, Y. Shi, M.G. Alameh, K. Wang, L. Wang, D.J. Pochan, D. Weissman, A.E. Vaughan, J.M. Wilson, M.J. Mitchell",
//         "journalYear": "Nature Nanotechnology (2025)"
//     },
//     {
//         "title": "PEPTIDE-FUNCTIONALIZED LIPID NANOPARTICLES FOR TARGETED SYSTEMIC mRNA DELIVERY TO THE BRAIN",
//         "authors": "E.L. Han, S. Tang, D. Kim, A.M. Murray, K.L. Swingle, A.G. Hamilton, K. Mrksich, M.S. Padilla, R. Palanki, J.J. Li, M.J. Mitchell",
//         "journalYear": "Nano Letters (2025)"
//     },
//     {
//         "title": "MULTIARM-ASSISTED DESIGN OF DENDRON-LIKE IONIZABLE LIPIDS FACILITATES SYSTEMIC mRNA DELIVERY TO THE SPLEEN",
//         "authors": "L. Xue, X. Xiong, G. Zhao, W. Molina-Arocho, R. Palanki, Z. Xiao, X. Han. I.C. Yoon, C.G. Figueroa-Espada, J. Xu, N. Gong, Q. Shi, Q. Chen, M.G. Alameh, A.E. Vaughan, M. Haldar, K. Wang D. Weissman, M.J. Mitchell",
//         "journalYear": "Journal of the American Chemical Society (2025)"
//     },
//     {
//         "title": "PLACENTA-TROPIC VEGF mRNA LIPID NANOPARTICLES AMERLIORATE MURINE PRE-ECLAMPSIA",
//         "authors": "K.L. Swingle, A.G. Hamilton, H.C. Safford, H.C. Geisler, A.S. Thatte, R. Palanki, A.M. Murray, E.L. Han, A.J. Mukalel, X. Han, R.A. Joseph, A.A. Ghalsasi, M.G. Alameh, D. Weissman, M.J. Mitchell",
//         "journalYear": "Nature (2025)"
//     },
//     {
//         "title": "BRANCHED ENDOSOMAL DISRUPTOR (BEND) LIPIDS MEDIATE DELIVERY OF mRNA AND CRISPR-CAS9 RIBONUCLEOPROTEIN COMPLEX FOR HEPATIC GENE EDITING AND T CELL ENGINEERING",
//         "authors": "M.S. Padilla, K. Mrksich, Y. Wang, R.M. Haley, J.J. Li, E.L. Han, R. El-Mayta, E.H. Kim, S. Dias, N. Gong, S.V. Teerdhala, X. Han, V. Chowdhary, L. Xue, Z. Siddiqui, H.M. Yamagata, D. Kim, I.C. Yoon, J.M. Wilson, R. Radhakrishnan, M.J. Mitchell",
//         "journalYear": "Nature Communications (2025)"
//     }
// ];
// */
// TODO can probably get rid of this