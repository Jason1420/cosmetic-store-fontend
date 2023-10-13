import React, { useEffect, useState } from 'react'
import './AllBrands.scss'
interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const AllBrands: React.FC<Props> = ({ handleLoading }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const allBrands = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9']
    const brandA = [
        "Azzaro", "Avène", "Aveda", "Aurora", "Au Départ", "Attar Collection", "Atkinsons", "Atelier Cologne", "Asics", "Asap",
        "Artistic&Co", "Artist Couture", "Aromatica", "Armitron", "Armani Jeans", "Armani Exchange", "Armand Nicolet", "Armaf",
        "Aristino", "Ariana Grande"
    ];
    const brandB = [
        "Buscemi", "Burt's Bees", "Burberry", "Bumble And Bumble", "Bulova", "Bullko", "Brut", "Britney Spears", "Briston",
        "Briogeo", "Bread beauty", "Brave Soul", "Braun", "Bottega Veneta", "Boscia", "Boohooman", "Bonpoint", "Bonest Gatti",
        "Bond No.9", "Bomberg", "Bolongaro Trevor", "Bolon", "Boldr", "Bobbi Brown", "Boadicea The Victorious", "BMW",
        "Blue Lizard", "BloomingDales", "Bite Beauty", "Biotrade", "BioRePeelCl3", "Biomeek", "Biologique Recherche",
        "Bioderma", "Bio‑Oil", "Bikkembergs", "BH Cosmetics", "Better Not Younger", "Bertha", "Bershka", "Bering", "Berdoues",
        "Bentley", "Benkii", "Benefit Cosmetics", "Belulu", "Bella Aurora", "Beentrill", "Beautyblender", "BeautyBio", "Bearbrick",
        "Be Classy", "Bath & Body Works", "Bape", "Balmain", "Bally", "Balenciaga", "Babe Laboratorios"
    ];
    const brandC = [
        "Cure", "Cult Gaia", "Cronus Art", "Crocs", "Cristiano Ronaldo", "Creed", "Cosrx", "Cosmoderma", "Cosmetics Skin Solutions", "Corthe", "Corniche", "Corèle V", "Converse", "Comly", "Comfort Zone", "Cole Haan", "Coca-Cola", "Coach", "Clive Christian", "Clinique", "Clean Reserve", "Clé De Peau", "Clarks", "Clarins", "Clae", "Civasan", "City Rhythm", "Citizen",
        "Cipo & Baxx", "Cinema Secrets", "Chrome Hearts", "Christina", "Christian Van Sant", "Christian Louboutin", "Chopard",
        "Chloé", "Chiara Ferragni", "Chautfifth", "Chaumet", "Châu Thiện Phú", "Chasing Scents", "Charriol", "Charlotte Tilbury",
        "Charles & Keith", "Chanel", "Champion", "Chacott", "CHA", "Cerave", "Cellcosmet & Cellmen", "Celine", "Cedar Crest", "CéCy De Jewel", "Cavalli Class", "Caudalie", "Casmara", "Casio", "Cartier", "Carrera Jeans", "Carrera", "Carolina Herrera", "Canova", "Calvin Klein", "Callaway", "Cacharel"]
    const brandD = [
        "Dyson", "Duxot", "Dunhill", "Dufa", "Ducray", "Duca Di Morrone", "DSquared2", "Drunk Elephant", "Dreyfuss & Co", "Drew House", "Dr.Jart", "Dr.Arrivo", "Dr.Barbara Sturm", "Dr Glatt", "Dr Dennis Gross", "dpHUE", "Dooney & Bourke", "Domba", "Dolce & Gabbana", "Dockers", "DMK", "DKNY", "Dita", "Direnzo", "Diptyque", "Dior", "Diesel", "Dickies", "DHC", "Devialet", "DevaCurl", "Dermedic", "Dermeden", "Dermaquest", "Dermalogica", "Dermaceutic", "Dermaceleb", "Decorté", "Décaar", "DC Shoes", "DBH", "Davidoff", "Darphin", "Daniel Wellington", "Danessa Myricks Beauty"]
    const brandE = [
        "Express", "Exoderm", "Exideal", "Evenswiss", "Eve Lom", "Eucerin", "Etro", "Etienne Aigner", "Etat Libre d'Orange", "Estée Lauder",
        "Escentric Molecules", "Escada", "Ermenegildo Zegna", "Enzo Ferrari", "Endocare", "Emporio Armani", "Éminence", "Emile Chouriet",
        "EltaMD", "Elly", "Ellis Brooklyn", "ELLE", "Elizabeth Taylor", "Elizabeth Arden", "Elisabetta Franchi", "Elie Saab", "Edox",
        "Edition"
    ];
    const brandF = ["Fusion Meso", "Furla", "Friulchem Spa", "Fresh", "Frederique Constant", "Frederic Malle", "Fred Perry", "Freck Beauty",
        "Franck Muller", "Franck Boclet", "Fragrance World", "Fraco", "Fossil", "Forvr Mood", "Fort & Manlé", "Foreo", "Floral Street",
        "Find Kapoor", "Filorga", "Fila", "Ferre Milano", "Ferrari", "Fenty Beauty", "Fendi", "Feeling Of Yui", "Fear Of God - FOG",
        "Farmona", "FaceGym"
        // Thêm các thương hiệu E khác nếu cần
    ];
    const brandG = ["Guy Laroche", "Guess", "Guerlain", "Gucci", "Gruppo Gamma", "Grès", "Grande Cosmetics", "Goyard",
        "Gosto", "GoodnDoc", "Glowbiotics", "Glow Recipe", "GLO Science", "GlamGlow", "Givenchy", "Giuseppe Zanotti", "Giovanni",
        "Giorgio Armani", "Gigi Laboratories", "GiGi", "Giarité", "Gianni Conti", "Gian Marco Venturi", "Ghala Zayed", "Gevril",
        "Germano Bellesi", "Geox", "Gentle Monster", "Genie", "Gemax", "Garmin", "Gant"
    ];
    const brandH = [
        "Hydrogen", "Hydro Tech", "Hyaestic",
        "Huy Thanh Jewelry", "Huxley", "Hush & Hush", "Hugo Boss", "Huda Beauty", "Hublot", "Hourglass", "HoMedics", "Hollister",
        "Hoka One One", "Hitachi", "Histolab", "Hermès", "Heritor", "Herbivore Botanicals", "HeraDG", "Henry London", "Heliocare",
        "Helena Rubinstein", "HBB", "Harmont & Blaine", "Hanboro", "Hamilton", "Hackett"
    ];
    const brandI = [
        "It Cosmetics", "Issey Miyake", "Isle Of Paradise", "iS Clinical", "Irresistor", "Invicta", "IntelDerm", "InstaNatural",
        "Innoaesthetics", "Initio Parfums Prives", "Inglot", "Ingersoll", "Image", "ILIA", "Ih Nom Uh Nit", "Ice Watch", "I&W Carnival"
    ];

    const brandJ = [
        "Jw Pei", "Juvera Cosmetic", "Just Cavalli", "Julius", "Juliette Has A Gun", "Juicy Couture", "Josie Maran", "Joop",
        "John Varvatos", "Jo Malone", "Jimmy Choo", "Jil Sander", "Jennifer Lopez", "Jemmia Diamond", "Jean Paul Gaultier",
        "JBW", "Jaguar", "Jaded London", "Jacquemus", "Jack Black", "J.Lindeberg"
        // Thêm các thương hiệu J khác nếu cần
    ];
    const brandK = [
        "Kyung lab", "Kya Jewel", "KVD Beauty",
        "Kuboraum", "Kosé", "Korloff", "Kor Japan", "Knot", "Kilian", "Kiehl's", "Kérastase", "Kenzo", "Kenneth Cole",
        "KB Pure", "Katy Perry", "Kate Spade", "Kate Somerville", "Karl Lagerfeld", "Kalos", "Kakkuda", "Kaja",
        "K-Swiss Tubes Pharo"
    ];
    const brandL = [
        "Lyn", "Luminox", "Lumberjack", "Lucien Piccard", "Louis Vuitton", "Longines", "Longchamp", "Long4Lashes",
        "Lolita Lempicka", "Logically Skin", "Loewe", "Lộc Phúc Fine Jewelry", "Liz Claiborne", "Living Proof",
        "Liquides Imaginaires", "Lili Jewelry", "Lilah b", "LifeWork", "Life Science Investment (LSI)", "Liber Classy",
        "Li-Ning", "Levi's", "Les Hommes", "Leka", "Lee", "Le Labo", "Le Coq Sportif", "Le Chateau", "Lawless Beauty",
        "Laura Mercier", "Laura Biagiotti", "Lattafa", "LashFood", "Lars Amadeus", "Lanvin", "Lancôme", "Lalique",
        "Lacoste", "La Roche-Posay", "La Prairie", "La Mer", "La Martina", "L'Oreal", "L'Occitane"
    ];
    const brandM = [
        "Muzigae Mansion", "Murad", "MTG", "Movado", "Moschino", "Moroccanoil", "Morina", "Montegrappa",
        "Montblanc", "Montale", "Montagut", "Monotheme", "Mondaine", "Moncler", "Mona Frema",
        "Molton Brown", "Molsion", "MLB", "Mizuno", "Miu Miu", "Missoni", "Misbhv", "Misaki Monaco",
        "Miraclesuit", "Minh Hà Pearl Jewelry", "Milk Makeup", "Mido", "Micocah", "Michael Kors",
        "Mesoestetic", "Meri", "Mercedes-Benz", "Mendittorosa", "Memo Paris", "Melvita", "Melt Cosmetics",
        "Melissa MLS", "Melissa", "Meishoku", "Meez", "Mediphar", "Medik8", "Medici Of Florence",
        "Md:ceuticals", "MD Dermatics", "MCM", "Mccosmetics", "Mazzucato", "May's House Designer",
        "Maurice Lacroix", "Matsuda", "Mathey-Tissot", "Masque Milano", "Maserati", "Martiderm",
        "Marshall", "Mario Badescu", "Marine Serre", "Mariagedebien", "Marcelo Burlon", "Marc Jacobs",
        "Map Of The Heart", "Manolo Blahnik", "Mangosteen", "Mango", "Mancera", "Malin + Goetz",
        "Make Up For Ever", "Make P:rem", "Maison Michel", "Maison Matine", "Maison Martin Margiela",
        "Maison Louis Marie", "Maison Francis Kurkdjian", "Maison Alhambra", "Mahrcato", "Mahagrid",
        "Made In Italy", "Mad Et Len", "Mach & Mach", "M2 Beauté", "M.A.C"
    ]
    const brandN = [
        "NuFace", "Nudestix",
        "North Sails", "Nocibé", "Nishane", "Nina Ricci", "Nike", "Newchic", "New Era", "New Balance",
        "Neutrogena", "Nest New York", "Nescens", "Nerdy", "Neova", "Neostrata", "Neoretin", "Neil Barrett",
        "Neighborhood", "NBS", "Naza", "Nautica", "Native", "Natasha Denona", "Nasomatto", "Nars", "Narciso",
        "Napapijri", "Naomi & Nicole", "NanoTime Beauty", "Nanoluxe", "Nails Inc"
    ]
    const brandO = [
        "Oxford University", "Ouai",
        "Orto Parisi", "Ormonde Jayne", "Oriza L. Legrand", "Origins", "Orient", "On & Off", "Omega", "Omate",
        "Olympia Star", "Olym Pianus", "OleHenriksen", "Ohui", "Oh! Oh !", "Ogival", "Off-White", "Obagi Medical",
        "Oakley"
    ]
    const brandP = [
        "Pureology", "Pur", "Puma", "Pull&Bear", "Prissana", "Priori", "Prin", "Primera", "PrettyFit",
        "Prada", "Porsche Design", "Ponagar", "Police", "Polaroid", "Playa", "Pixi", "Pinko", "Pierre Lannier",
        "Pierre Guillaume Paris", "Pierre Cardin", "Pier One", "Piaget", "Phú Quý", "Philosophy", "Phillip Lim",
        "Philipp Plein", "PGM", "Peter Thomas Roth", "Persol", "Perry Ellis", "Perris Monte Carlo", "Perricone MD",
        "Penhaligon's", "Pedro", "Peauhonnête", "Peace Out", "PCA Skin", "Pazzion", "Paula's Choice",
        "Patek Philippe", "Pat McGrath Labs", "Parker", "Parfums De Marly", "Pandora", "Panasonic",
        "Palm Angels", "Paco Rabanne"
    ]
    const brandQ = [
        "Quiksilver", "QMS Medicosmetics", "Q&Q"
    ];
    const brandR = [
        "Ruslan Baginskiy", "Royal Crown", "Rossano Ferretti",
        "Rosie Jane", "Rosantica", "Romantic Crown", "Rolex", "Roja Parfums", "Roger & Gallet", "Rockport", "RoC",
        "Roberto Cavalli", "Robert Wayne", "RMS Beauty", "Rituals", "Rimowa", "Rilastil", "Reyane Tradition",
        "Revitalash", "Replay", "Repetto Paris", "Renoderm", "Relumins", "Rejuve", "Rejuran", "Reiser",
        "Regent Street", "Reebok", "Raymond Weil", "Rayban", "Rasasi", "Rare Beauty", "Ramon Molvizar",
        "Ralph Lauren", "Railtek", "Rado"
    ];
    const brandS = [
        "SY Medipharm", "Swissline", "Swissforce", "Swarovski", "SVR",
        "Supreme", "Supperdry", "Supergoop", "Sunlight", "Sunday Riley", "Summer Fridays", "Sulwhasoo",
        "Su:m37", "Stussy", "Stuhrling", "Stuart Weitzman", "StriVectin", "StretcHeal", "Stretch Angels",
        "Strangers Parfumerie", "Stella McCartney", "Starter Black Label", "SRX", "SRWATCH", "Spinnaker",
        "Sparco", "Spao", "Soskin", "Soponder", "Somatoline SkinExpert", "Sol De Janeiro", "Sokolov",
        "SmoothSkin", "SMFK", "Smashbox", "SMAS", "Slip", "Sledgers", "Skinsense", "SkinMedica", "SkinMD",
        "SkinClinic", "SkinCeuticals", "Skinbetter Science", "Skin Inc", "Skechers", "Skagen", "SK-II",
        "Sinobi", "Sinn", "Shucare", "Shu Uemura", "shoopen", "Shiseido", "Sherlyn Diamond",
        "Shani Darden Skincare", "SevenFriday", "Sergio Tacchini", "Serge Lutens", "Sephora Favorites",
        "Sephora Collection", "Self-Portrait", "Sekonda", "Seiko", "Saucony", "Sara Miller", "Sanoflore",
        "San Vitale", "Samsung", "Samsonite", "Salvatore Ferragamo", "Saks Fifth Avenue",
        "Saint De Paris & Crew No 9", "Saga"
    ];
    const brandT = [
        "Tumi", "TTWN BEAR", "Tsar Bomba", "Trussardi", "TruSkin Naturals",
        "True + Luscious", "Triumph", "TriPollar", "Transino", "Toy Watch", "Tory Burch", "Topman", "Topicrem",
        "Too Faced", "Tonly Monders", "Tonino Lamborghini", "Tommy Hilfiger", "Tom Ford", "Tocca", "Titoni",
        "Titan", "Tissot", "Timex", "Timberland", "Tiffany & Co.", "Thomas Kosmala", "Thomas Earnshaw",
        "Thom Browne", "ThirdStreet", "Thierry Mugler", "Theodoros Kalotinis", "The Perfect Derma Peel",
        "The Ordinary", "The North Face", "The Merchant Of Venice", "The Kooples", "The House Of Oud",
        "The Centaur", "The Body Shop", "The 7 Virtues", "Teslar", "Teoxane", "Tenamyd", "Telfar", "Tegoder",
        "Ted Baker", "Tatcha", "Tarte", "Tanzky", "Tamburins", "T3"
    ];

    const brandU = [
        "Usolab", "Uriage", "Urban Decay", "Uniqlo", "Ungaro", "Under Armour", "U.S. Polo Assn."
    ];
    const brandV = [
        "Voluspa",
        "Volayon", "Vogue", "Viwat", "Vivienne Westwood", "Vivant Skincare", "Viseart Paris", "Virtue",
        "Vionic", "Violet Voss", "Viniciobelt", "Viktor & Rolf", "Victorinox", "Victoria's Secret",
        "Vichy", "Vi Derm", "Vetements", "Versace", "Verb", "Vera Wang", "Venuco", "Venturo",
        "Venezianico", "Vegamour", "Vascara", "Vans", "Vanav", "Van Cleef & Arpels", "Valmont",
        "Valentino"
    ];
    const brandW = [
        "WULFUL", "Wolf 1834", "Wilson", "Whoo", "WHOAU", "Westman Atelier", "Wenger",
        "Wellmaxx", "Weird Market", "Weilaiya", "Waldhoff"
    ];
    const brandX = ["Xvessel", "Xexymix", "Xerjoff", "X-Ray"];
    const brandY = [
        "YSL", "Youkshimwon", "Yoox", "YOON", "Yaman"
    ];
    const brandZ = [
        "Zo Skin Health", "Ziozia", "Zinvo", "Zimmermann",
        "Ziiiro", "Zeppelin", "Zenith", "Zelos", "Zara", "ZamST", "Zadig & Voltaire", "13 De Marzo"
    ];
    const brand09 = ["13 De Marzo"
    ];
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])
    return (
        <div className='all-brands-container'>
            <div className="all-brands__title">
                Tất cả thương hiệu
            </div>

            <div className="all-brands__list">
                {allBrands.map((item, index) => {
                    return (
                        <div className="brand" key={index}>
                            <a href={`#${item}`}>{item}</a>
                        </div>
                    )
                })}
            </div>

            <div className="all-brands__content">
                <div className="block">
                    <div className="title">
                        A-D
                    </div>
                    <div className="content">
                        <div className="brands" id='A'>
                            {brandA.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='B'>
                            {brandB.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='C'>
                            {brandC.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='D'>
                            {brandD.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className="block">
                    <div className="title">
                        E-H
                    </div>
                    <div className="content">
                        <div className="brands" id='E'>
                            {brandE.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='F'>
                            {brandF.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='G'>
                            {brandG.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='H'>
                            {brandH.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className="block">
                    <div className="title">
                        I-L
                    </div>
                    <div className="content">
                        <div className="brands" id='I'>
                            {brandI.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='J'>
                            {brandJ.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='K'>
                            {brandK.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='L'>
                            {brandL.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className="block">
                    <div className="title">
                        M-P
                    </div>
                    <div className="content">
                        <div className="brands" id='M'>
                            {brandM.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='N'>
                            {brandN.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='O'>
                            {brandO.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='P'>
                            {brandP.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className="block">
                    <div className="title">
                        Q-T
                    </div>
                    <div className="content">
                        <div className="brands" id='Q'>
                            {brandQ.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='R'>
                            {brandR.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='S'>
                            {brandS.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='T'>
                            {brandT.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className="block">
                    <div className="title">
                        U-X
                    </div>
                    <div className="content">
                        <div className="brands" id='U'>
                            {brandU.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='V'>
                            {brandV.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='W'>
                            {brandW.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='X'>
                            {brandX.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className="block">
                    <div className="title">
                        Y-0-9
                    </div>
                    <div className="content" id='Y'>
                        <div className="brands">
                            {brandY.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='Z'>
                            {brandZ.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="brands" id='0-9'>
                            {brand09.map((item, index) => {
                                return (
                                    <div className="brand" key={index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>
                {/* <div className="e-h-content">
                </div>
                <div className="i-l-content">
                </div>
                <div className="m-p-content">
                </div>
                <div className="q-t-content">
                </div>
                <div className="u-x-content">
                </div>
                <div className="y-0-9-content">
                </div> */}
            </div>
        </div>
    )
}

export default AllBrands