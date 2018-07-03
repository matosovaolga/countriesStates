export interface State {
    /**
     * A state or province's 2-letter ISO abbrevation.
     */
    iso: string;
    /**
     * The state or province's full name.
     */
    name: string;
}

export type Region = "Asia" | "Europe" | "Africa" | "Oceania" | "Americas" | "Antarctica";

export interface Country {
    /**
     * The country's 2-letter ISO abbreviation.
     */
    iso: string;
    /**
     * The country's full name.
     */
    name: string;
    /**
     * Whether the country has postal or ZIP codes.
     */
    hasPostalCodes: boolean;
    /**
     * The country's region or continent. Values can be "Asia", "Europe", "Africa", "Oceania", "Americas" or "Antarctica".
     */
    region: Region;
    /**
     * The country's states or provinces. Note: most countries do not have any states or provinces.
     */
    states: State[];
    /**
     * A regex to check if a given ZIP or postal code is a match for the country.
     */
    zipRegex: string | number;
}

export const countries: Country[] = [
    {
        "region": "Asia",
        "iso": "AF",
        "name": "Afghanistan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Badakhsh?n",
		"iso": "AF-BDS"
	},
	{
		"name": "Baghl?n",
		"iso": "AF-BGL"
	},
	{
		"name": "Balkh",
		"iso": "AF-BAL"
	},
	{
		"name": "B?dgh?s",
		"iso": "AF-BDG"
	},
	{
		"name": "B?my?n",
		"iso": "AF-BAM"
	},
	{
		"name": "D?ykund?",
		"iso": "AF-DAY"
	},
	{
		"name": "Far?h",
		"iso": "AF-FRA"
	},
	{
		"name": "F?ry?b",
		"iso": "AF-FYB"
	},
	{
		"name": "Ghazn?",
		"iso": "AF-GHA"
	},
	{
		"name": "Gh?r",
		"iso": "AF-GHO"
	},
	{
		"name": "Helmand",
		"iso": "AF-HEL"
	},
	{
		"name": "Her?t",
		"iso": "AF-HER"
	},
	{
		"name": "Jowzj?n",
		"iso": "AF-JOW"
	},
	{
		"name": "Kandah?r",
		"iso": "AF-KAN"
	},
	{
		"name": "Kh?st",
		"iso": "AF-KHO"
	},
	{
		"name": "Kunar",
		"iso": "AF-KNR"
	},
	{
		"name": "Kunduz",
		"iso": "AF-KDZ"
	},
	{
		"name": "K?bul",
		"iso": "AF-KAB"
	},
	{
		"name": "K?p?s?",
		"iso": "AF-KAP"
	},
	{
		"name": "Laghm?n",
		"iso": "AF-LAG"
	},
	{
		"name": "L?gar",
		"iso": "AF-LOG"
	},
	{
		"name": "Nangarh?r",
		"iso": "AF-NAN"
	},
	{
		"name": "N?mr?z",
		"iso": "AF-NIM"
	},
	{
		"name": "N?rist?n",
		"iso": "AF-NUR"
	},
	{
		"name": "Paktiy?",
		"iso": "AF-PIA"
	},
	{
		"name": "Pakt?k?",
		"iso": "AF-PKA"
	},
	{
		"name": "Panjshayr",
		"iso": "AF-PAN"
	},
	{
		"name": "Parw?n",
		"iso": "AF-PAR"
	},
	{
		"name": "Samang?n",
		"iso": "AF-SAM"
	},
	{
		"name": "Sar-e Pul",
		"iso": "AF-SAR"
	},
	{
		"name": "Takh?r",
		"iso": "AF-TAK"
	},
	{
		"name": "Uruzg?n",
		"iso": "AF-URU"
	},
	{
		"name": "Wardak",
		"iso": "AF-WAR"
	},
	{
		"name": "Z?bul",
		"iso": "AF-ZAB"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "AX",
        "name": "Ã…land Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "AL",
        "name": "Albania",
        "hasPostalCodes": true,
        "states": [{
		"name": "Berat",
		"iso": "AL-01"
	},
	{
		"name": "Dib?r",
		"iso": "AL-09"
	},
	{
		"name": "Durr?s",
		"iso": "AL-02"
	},
	{
		"name": "Elbasan",
		"iso": "AL-03"
	},
	{
		"name": "Fier",
		"iso": "AL-04"
	},
	{
		"name": "Gjirokast?r",
		"iso": "AL-05"
	},
	{
		"name": "Kor??",
		"iso": "AL-06"
	},
	{
		"name": "Kuk?s",
		"iso": "AL-07"
	},
	{
		"name": "Lezh?",
		"iso": "AL-08"
	},
	{
		"name": "Shkod?r",
		"iso": "AL-10"
	},
	{
		"name": "Tiran?",
		"iso": "AL-11"
	},
	{
		"name": "Vlor?",
		"iso": "AL-12"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "DZ",
        "name": "Algeria",
        "hasPostalCodes": true,
        "states": [{
		"name": "Adrar",
		"iso": "DZ-01"
	},
	{
		"name": "Alger",
		"iso": "DZ-16"
	},
	{
		"name": "Annaba",
		"iso": "DZ-23"
	},
	{
		"name": "A?n Defla",
		"iso": "DZ-44"
	},
	{
		"name": "A?n T?mouchent",
		"iso": "DZ-46"
	},
	{
		"name": "Batna",
		"iso": "DZ-05"
	},
	{
		"name": "Biskra",
		"iso": "DZ-07"
	},
	{
		"name": "Blida",
		"iso": "DZ-09"
	},
	{
		"name": "Bordj Bou Arr?ridj",
		"iso": "DZ-34"
	},
	{
		"name": "Bouira",
		"iso": "DZ-10"
	},
	{
		"name": "Boumerd?s",
		"iso": "DZ-35"
	},
	{
		"name": "B?char",
		"iso": "DZ-08"
	},
	{
		"name": "B?ja?a",
		"iso": "DZ-06"
	},
	{
		"name": "Chlef",
		"iso": "DZ-02"
	},
	{
		"name": "Constantine",
		"iso": "DZ-25"
	},
	{
		"name": "Djelfa",
		"iso": "DZ-17"
	},
	{
		"name": "El Bayadh",
		"iso": "DZ-32"
	},
	{
		"name": "El Oued",
		"iso": "DZ-39"
	},
	{
		"name": "El Tarf",
		"iso": "DZ-36"
	},
	{
		"name": "Gharda?a",
		"iso": "DZ-47"
	},
	{
		"name": "Guelma",
		"iso": "DZ-24"
	},
	{
		"name": "Illizi",
		"iso": "DZ-33"
	},
	{
		"name": "Jijel",
		"iso": "DZ-18"
	},
	{
		"name": "Khenchela",
		"iso": "DZ-40"
	},
	{
		"name": "Laghouat",
		"iso": "DZ-03"
	},
	{
		"name": "Mascara",
		"iso": "DZ-29"
	},
	{
		"name": "Mila",
		"iso": "DZ-43"
	},
	{
		"name": "Mostaganem",
		"iso": "DZ-27"
	},
	{
		"name": "Msila",
		"iso": "DZ-28"
	},
	{
		"name": "M?d?a",
		"iso": "DZ-26"
	},
	{
		"name": "Naama",
		"iso": "DZ-45"
	},
	{
		"name": "Oran",
		"iso": "DZ-31"
	},
	{
		"name": "Ouargla",
		"iso": "DZ-30"
	},
	{
		"name": "Oum el Bouaghi",
		"iso": "DZ-04"
	},
	{
		"name": "Relizane",
		"iso": "DZ-48"
	},
	{
		"name": "Sa?da",
		"iso": "DZ-20"
	},
	{
		"name": "Sidi Bel Abb?s",
		"iso": "DZ-22"
	},
	{
		"name": "Skikda",
		"iso": "DZ-21"
	},
	{
		"name": "Souk Ahras",
		"iso": "DZ-41"
	},
	{
		"name": "S?tif",
		"iso": "DZ-19"
	},
	{
		"name": "Tamanghasset",
		"iso": "DZ-11"
	},
	{
		"name": "Tiaret",
		"iso": "DZ-14"
	},
	{
		"name": "Tindouf",
		"iso": "DZ-37"
	},
	{
		"name": "Tipaza",
		"iso": "DZ-42"
	},
	{
		"name": "Tissemsilt",
		"iso": "DZ-38"
	},
	{
		"name": "Tizi Ouzou",
		"iso": "DZ-15"
	},
	{
		"name": "Tlemcen",
		"iso": "DZ-13"
	},
	{
		"name": "T?bessa",
		"iso": "DZ-12"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "AS",
        "name": "American Samoa",
        "hasPostalCodes": true,
        "states": [{
		"name": "A'ana",
		"iso": "WS-AA"
	},
	{
		"name": "Aiga-i-le-Tai",
		"iso": "WS-AL"
	},
	{
		"name": "Atua",
		"iso": "WS-AT"
	},
	{
		"name": "Fa'asaleleaga",
		"iso": "WS-FA"
	},
	{
		"name": "Gaga'emauga",
		"iso": "WS-GE"
	},
	{
		"name": "Gagaifomauga",
		"iso": "WS-GI"
	},
	{
		"name": "Palauli",
		"iso": "WS-PA"
	},
	{
		"name": "Satupa'itea",
		"iso": "WS-SA"
	},
	{
		"name": "Tuamasaga",
		"iso": "WS-TU"
	},
	{
		"name": "Va'a-o-Fonoti",
		"iso": "WS-VF"
	},
	{
		"name": "Vaisigano",
		"iso": "WS-VS"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "AD",
        "name": "Andorra",
        "hasPostalCodes": true,
        "states": [{
		"name": "Andorra la Vella",
		"iso": "AD-07"
	},
	{
		"name": "Canillo",
		"iso": "AD-02"
	},
	{
		"name": "Encamp",
		"iso": "AD-03"
	},
	{
		"name": "Escaldes-Engordany",
		"iso": "AD-08"
	},
	{
		"name": "La Massana",
		"iso": "AD-04"
	},
	{
		"name": "Ordino",
		"iso": "AD-05"
	},
	{
		"name": "Sant Juli? de L?ria",
		"iso": "AD-06"
	}],
        "zipRegex": "^(?:AD)*(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "AO",
        "name": "Angola",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bengo",
		"iso": "AO-BGO"
	},
	{
		"name": "Benguela",
		"iso": "AO-BGU"
	},
	{
		"name": "Bi?",
		"iso": "AO-BIE"
	},
	{
		"name": "Cabinda",
		"iso": "AO-CAB"
	},
	{
		"name": "Cunene",
		"iso": "AO-CNN"
	},
	{
		"name": "Huambo",
		"iso": "AO-HUA"
	},
	{
		"name": "Hu?la",
		"iso": "AO-HUI"
	},
	{
		"name": "Kuando Kubango",
		"iso": "AO-CCU"
	},
	{
		"name": "Kwanza Norte",
		"iso": "AO-CNO"
	},
	{
		"name": "Kwanza Sul",
		"iso": "AO-CUS"
	},
	{
		"name": "Luanda",
		"iso": "AO-LUA"
	},
	{
		"name": "Lunda Norte",
		"iso": "AO-LNO"
	},
	{
		"name": "Lunda Sul",
		"iso": "AO-LSU"
	},
	{
		"name": "Malange",
		"iso": "AO-MAL"
	},
	{
		"name": "Moxico",
		"iso": "AO-MOX"
	},
	{
		"name": "Namibe",
		"iso": "AO-NAM"
	},
	{
		"name": "U?ge",
		"iso": "AO-UIG"
	},
	{
		"name": "Zaire",
		"iso": "AO-ZAI"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "AI",
        "name": "Anguilla",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(AI-2640)$"
    },
    {
        "region": "Antarctica",
        "iso": "AQ",
        "name": "Antarctica",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(7151)$"
    },
    {
        "region": "Americas",
        "iso": "AG",
        "name": "Antigua and Barbuda",
        "hasPostalCodes": false,
        "states": [{
		"name": "Barbuda",
		"iso": "AG-10"
	},
	{
		"name": "Redonda",
		"iso": "AG-11"
	},
	{
		"name": "Saint George",
		"iso": "AG-03"
	},
	{
		"name": "Saint John",
		"iso": "AG-04"
	},
	{
		"name": "Saint Mary",
		"iso": "AG-05"
	},
	{
		"name": "Saint Paul",
		"iso": "AG-06"
	},
	{
		"name": "Saint Peter",
		"iso": "AG-07"
	},
	{
		"name": "Saint Philip",
		"iso": "AG-08"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "AR",
        "name": "Argentina",
        "hasPostalCodes": true,
        "states": [{
		"name": "Buenos Aires",
		"iso": "AR-B"
	},
	{
		"name": "Catamarca",
		"iso": "AR-K"
	},
	{
		"name": "Chaco",
		"iso": "AR-H"
	},
	{
		"name": "Chubut",
		"iso": "AR-U"
	},
	{
		"name": "Ciudad Aut?noma de Buenos Aires",
		"iso": "AR-C"
	},
	{
		"name": "Corrientes",
		"iso": "AR-W"
	},
	{
		"name": "C?rdoba",
		"iso": "AR-X"
	},
	{
		"name": "Entre R?os",
		"iso": "AR-E"
	},
	{
		"name": "Formosa",
		"iso": "AR-P"
	},
	{
		"name": "Jujuy",
		"iso": "AR-Y"
	},
	{
		"name": "La Pampa",
		"iso": "AR-L"
	},
	{
		"name": "La Rioja",
		"iso": "AR-F"
	},
	{
		"name": "Mendoza",
		"iso": "AR-M"
	},
	{
		"name": "Misiones",
		"iso": "AR-N"
	},
	{
		"name": "Neuqu?n",
		"iso": "AR-Q"
	},
	{
		"name": "R?o Negro",
		"iso": "AR-R"
	},
	{
		"name": "Salta",
		"iso": "AR-A"
	},
	{
		"name": "San Juan",
		"iso": "AR-J"
	},
	{
		"name": "San Luis",
		"iso": "AR-D"
	},
	{
		"name": "Santa Cruz",
		"iso": "AR-Z"
	},
	{
		"name": "Santa Fe",
		"iso": "AR-S"
	},
	{
		"name": "Santiago del Estero",
		"iso": "AR-G"
	},
	{
		"name": "Tierra del Fuego",
		"iso": "AR-V"
	},
	{
		"name": "Tucum?n",
		"iso": "AR-T"
	}],
        "zipRegex": "^([A-Z]\\d{4}[A-Z]{3})|([A-Z]\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "AM",
        "name": "Armenia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Aragac?otn",
		"iso": "AM-AG"
	},
	{
		"name": "Ararat",
		"iso": "AM-AR"
	},
	{
		"name": "Armavir",
		"iso": "AM-AV"
	},
	{
		"name": "Erevan",
		"iso": "AM-ER"
	},
	{
		"name": "Ge?ark'unik'",
		"iso": "AM-GR"
	},
	{
		"name": "Kotayk'",
		"iso": "AM-KT"
	},
	{
		"name": "Lo?i",
		"iso": "AM-LO"
	},
	{
		"name": "Syunik'",
		"iso": "AM-SU"
	},
	{
		"name": "Tavu?",
		"iso": "AM-TV"
	},
	{
		"name": "Vayo? Jor",
		"iso": "AM-VD"
	},
	{
		"name": "?irak",
		"iso": "AM-SH"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "AW",
        "name": "Aruba",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(0000 AW)$"
    },
    {
        "region": "Oceania",
        "iso": "AU",
        "name": "Australia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Australian Capital Territory",
		"iso": "AU-ACT"
	},
	{
		"name": "New South Wales",
		"iso": "AU-NSW"
	},
	{
		"name": "Northern Territory",
		"iso": "AU-NT"
	},
	{
		"name": "Queensland",
		"iso": "AU-QLD"
	},
	{
		"name": "South Australia",
		"iso": "AU-SA"
	},
	{
		"name": "Tasmania",
		"iso": "AU-TAS"
	},
	{
		"name": "Victoria",
		"iso": "AU-VIC"
	},
	{
		"name": "Western Australia",
		"iso": "AU-WA"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "AT",
        "name": "Austria",
        "hasPostalCodes": true,
        "states": [{
		"name": "Burgenland",
		"iso": "AT-1"
	},
	{
		"name": "K?rnten",
		"iso": "AT-2"
	},
	{
		"name": "Nieder?sterreich",
		"iso": "AT-3"
	},
	{
		"name": "Ober?sterreich",
		"iso": "AT-4"
	},
	{
		"name": "Salzburg",
		"iso": "AT-5"
	},
	{
		"name": "Steiermark",
		"iso": "AT-6"
	},
	{
		"name": "Tirol",
		"iso": "AT-7"
	},
	{
		"name": "Vorarlberg",
		"iso": "AT-8"
	},
	{
		"name": "Wien",
		"iso": "AT-9"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "AZ",
        "name": "Azerbaijan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Nax??van",
		"iso": "AZ-NX"
	}],
        "zipRegex": "^(AZ) (\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BS",
        "name": "Bahamas",
        "hasPostalCodes": false,
        "states": [{
		"name": "Acklins",
		"iso": "BS-AK"
	},
	{
		"name": "Berry Islands",
		"iso": "BS-BY"
	},
	{
		"name": "Bimini",
		"iso": "BS-BI"
	},
	{
		"name": "Black Point",
		"iso": "BS-BP"
	},
	{
		"name": "Cat Island",
		"iso": "BS-CI"
	},
	{
		"name": "Central Abaco",
		"iso": "BS-CO"
	},
	{
		"name": "Central Andros",
		"iso": "BS-CS"
	},
	{
		"name": "Central Eleuthera",
		"iso": "BS-CE"
	},
	{
		"name": "City of Freeport",
		"iso": "BS-FP"
	},
	{
		"name": "Crooked Island and Long Cay",
		"iso": "BS-CK"
	},
	{
		"name": "East Grand Bahama",
		"iso": "BS-EG"
	},
	{
		"name": "Exuma",
		"iso": "BS-EX"
	},
	{
		"name": "Grand Cay",
		"iso": "BS-GC"
	},
	{
		"name": "Harbour Island",
		"iso": "BS-HI"
	},
	{
		"name": "Hope Town",
		"iso": "BS-HT"
	},
	{
		"name": "Inagua",
		"iso": "BS-IN"
	},
	{
		"name": "Long Island",
		"iso": "BS-LI"
	},
	{
		"name": "Mangrove Cay",
		"iso": "BS-MC"
	},
	{
		"name": "Mayaguana",
		"iso": "BS-MG"
	},
	{
		"name": "Moores Island",
		"iso": "BS-MI"
	},
	{
		"name": "North Abaco",
		"iso": "BS-NO"
	},
	{
		"name": "North Andros",
		"iso": "BS-NS"
	},
	{
		"name": "North Eleuthera",
		"iso": "BS-NE"
	},
	{
		"name": "Ragged Island",
		"iso": "BS-RI"
	},
	{
		"name": "Rum Cay",
		"iso": "BS-RC"
	},
	{
		"name": "San Salvador",
		"iso": "BS-SS"
	},
	{
		"name": "South Abaco",
		"iso": "BS-SO"
	},
	{
		"name": "South Andros",
		"iso": "BS-SA"
	},
	{
		"name": "South Eleuthera",
		"iso": "BS-SE"
	},
	{
		"name": "Spanish Wells",
		"iso": "BS-SW"
	},
	{
		"name": "West Grand Bahama",
		"iso": "BS-WG"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "BH",
        "name": "Bahrain",
        "hasPostalCodes": true,
        "states": [{
		"name": "Al Jan?b?yah",
		"iso": "BH-14"
	},
	{
		"name": "Al Man?mah",
		"iso": "BH-13"
	},
	{
		"name": "Al Mu?arraq",
		"iso": "BH-15"
	},
	{
		"name": "Al Wus??",
		"iso": "BH-16"
	},
	{
		"name": "Ash Sham?l?yah",
		"iso": "BH-17"
	}],
        "zipRegex": "^(\\d{3}\\d?)$"
    },
    {
        "region": "Asia",
        "iso": "BD",
        "name": "Bangladesh",
        "hasPostalCodes": true,
        "states": [{
		"name": "Barisal",
		"iso": "BD-A"
	},
	{
		"name": "Chittagong",
		"iso": "BD-B"
	},
	{
		"name": "Dhaka",
		"iso": "BD-C"
	},
	{
		"name": "Khulna",
		"iso": "BD-D"
	},
	{
		"name": "Rajshahi",
		"iso": "BD-E"
	},
	{
		"name": "Rangpur",
		"iso": "BD-F"
	},
	{
		"name": "Sylhet",
		"iso": "BD-G"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BB",
        "name": "Barbados",
        "hasPostalCodes": true,
        "states": [{
		"name": "Christ Church",
		"iso": "BB-01"
	},
	{
		"name": "Saint Andrew",
		"iso": "BB-02"
	},
	{
		"name": "Saint George",
		"iso": "BB-03"
	},
	{
		"name": "Saint James",
		"iso": "BB-04"
	},
	{
		"name": "Saint John",
		"iso": "BB-05"
	},
	{
		"name": "Saint Joseph",
		"iso": "BB-06"
	},
	{
		"name": "Saint Lucy",
		"iso": "BB-07"
	},
	{
		"name": "Saint Michael",
		"iso": "BB-08"
	},
	{
		"name": "Saint Peter",
		"iso": "BB-09"
	},
	{
		"name": "Saint Philip",
		"iso": "BB-10"
	},
	{
		"name": "Saint Thomas",
		"iso": "BB-11"
	}],
        "zipRegex": "^(?:BB)*(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "BY",
        "name": "Belarus",
        "hasPostalCodes": true,
        "states": [{
		"name": "Brestskaya voblasts'",
		"iso": "BY-BR"
	},
	{
		"name": "Homyel'skaya voblasts'",
		"iso": "BY-HO"
	},
	{
		"name": "Horad Minsk",
		"iso": "BY-HM"
	},
	{
		"name": "Hrodzenskaya voblasts'",
		"iso": "BY-HR"
	},
	{
		"name": "Mahilyowskaya voblasts'",
		"iso": "BY-MA"
	},
	{
		"name": "Minskaya voblasts'",
		"iso": "BY-MI"
	},
	{
		"name": "Vitsyebskaya voblasts'",
		"iso": "BY-VI"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Europe",
        "iso": "BE",
        "name": "Belgium",
        "hasPostalCodes": true,
        "states": [{
		"name": "Brussels Hoofdstedelijk Gewest",
		"iso": "BE-BRU"
	},
	{
		"name": "R?gion Wallonne",
		"iso": "BE-WAL"
	},
	{
		"name": "Vlaams Gewest",
		"iso": "BE-VLG"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BZ",
        "name": "Belize",
        "hasPostalCodes": false,
        "states": [{
		"name": "Belize",
		"iso": "BZ-BZ"
	},
	{
		"name": "Cayo",
		"iso": "BZ-CY"
	},
	{
		"name": "Corozal",
		"iso": "BZ-CZL"
	},
	{
		"name": "Orange Walk",
		"iso": "BZ-OW"
	},
	{
		"name": "Stann Creek",
		"iso": "BZ-SC"
	},
	{
		"name": "Toledo",
		"iso": "BZ-TOL"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "BJ",
        "name": "Benin",
        "hasPostalCodes": false,
        "states": [{
		"name": "Alibori",
		"iso": "BJ-AL"
	},
	{
		"name": "Atakora",
		"iso": "BJ-AK"
	},
	{
		"name": "Atlantique",
		"iso": "BJ-AQ"
	},
	{
		"name": "Borgou",
		"iso": "BJ-BO"
	},
	{
		"name": "Collines",
		"iso": "BJ-CO"
	},
	{
		"name": "Donga",
		"iso": "BJ-DO"
	},
	{
		"name": "Kouffo",
		"iso": "BJ-KO"
	},
	{
		"name": "Littoral",
		"iso": "BJ-LI"
	},
	{
		"name": "Mono",
		"iso": "BJ-MO"
	},
	{
		"name": "Ou?m?",
		"iso": "BJ-OU"
	},
	{
		"name": "Plateau",
		"iso": "BJ-PL"
	},
	{
		"name": "Zou",
		"iso": "BJ-ZO"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BM",
        "name": "Bermuda",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^([A-Z]{2} \\d{2})$"
    },
    {
        "region": "Asia",
        "iso": "BT",
        "name": "Bhutan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Bumthang",
		"iso": "BT-33"
	},
	{
		"name": "Chhukha",
		"iso": "BT-12"
	},
	{
		"name": "Dagana",
		"iso": "BT-22"
	},
	{
		"name": "Gasa",
		"iso": "BT-GA"
	},
	{
		"name": "Ha",
		"iso": "BT-13"
	},
	{
		"name": "Lhuentse",
		"iso": "BT-44"
	},
	{
		"name": "Monggar",
		"iso": "BT-42"
	},
	{
		"name": "Paro",
		"iso": "BT-11"
	},
	{
		"name": "Pemagatshel",
		"iso": "BT-43"
	},
	{
		"name": "Punakha",
		"iso": "BT-23"
	},
	{
		"name": "Samdrup Jongkha",
		"iso": "BT-45"
	},
	{
		"name": "Samtse",
		"iso": "BT-14"
	},
	{
		"name": "Sarpang",
		"iso": "BT-31"
	},
	{
		"name": "Thimphu",
		"iso": "BT-15"
	},
	{
		"name": "Trashi Yangtse",
		"iso": "BT-TY"
	},
	{
		"name": "Trashigang",
		"iso": "BT-41"
	},
	{
		"name": "Trongsa",
		"iso": "BT-32"
	},
	{
		"name": "Tsirang",
		"iso": "BT-21"
	},
	{
		"name": "Wangdue Phodrang",
		"iso": "BT-24"
	},
	{
		"name": "Zhemgang",
		"iso": "BT-34"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "BO",
        "name": "Bolivia, Plurinational State of",
        "hasPostalCodes": true,
        "states": [{
		"name": "Chuquisaca",
		"iso": "BO-H"
	},
	{
		"name": "Cochabamba",
		"iso": "BO-C"
	},
	{
		"name": "El Beni",
		"iso": "BO-B"
	},
	{
		"name": "La Paz",
		"iso": "BO-L"
	},
	{
		"name": "Oruro",
		"iso": "BO-O"
	},
	{
		"name": "Pando",
		"iso": "BO-N"
	},
	{
		"name": "Potos?",
		"iso": "BO-P"
	},
	{
		"name": "Santa Cruz",
		"iso": "BO-S"
	},
	{
		"name": "Tarija",
		"iso": "BO-T"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BQ",
        "name": "Bonaire, Sint Eustatius and Saba",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(0000 BQ)$"
    },
    {
        "region": "Europe",
        "iso": "BA",
        "name": "Bosnia and Herzegovina",
        "hasPostalCodes": true,
        "states": [{
		"name": "Br?ko distrikt",
		"iso": "BA-BRC"
	},
	{
		"name": "Federacija Bosna i Hercegovina",
		"iso": "BA-BIH"
	},
	{
		"name": "Republika Srpska",
		"iso": "BA-SRP"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "BW",
        "name": "Botswana",
        "hasPostalCodes": false,
        "states": [{
		"name": "Central",
		"iso": "BW-CE"
	},
	{
		"name": "Chobe",
		"iso": "BW-CH"
	},
	{
		"name": "Francistown",
		"iso": "BW-FR"
	},
	{
		"name": "Gaborone",
		"iso": "BW-GA"
	},
	{
		"name": "Ghanzi",
		"iso": "BW-GH"
	},
	{
		"name": "Jwaneng",
		"iso": "BW-JW"
	},
	{
		"name": "Kgalagadi",
		"iso": "BW-KG"
	},
	{
		"name": "Kgatleng",
		"iso": "BW-KL"
	},
	{
		"name": "Kweneng",
		"iso": "BW-KW"
	},
	{
		"name": "Lobatse",
		"iso": "BW-LO"
	},
	{
		"name": "North-East",
		"iso": "BW-NE"
	},
	{
		"name": "North-West",
		"iso": "BW-NW"
	},
	{
		"name": "Selibe Phikwe",
		"iso": "BW-SP"
	},
	{
		"name": "South-East",
		"iso": "BW-SE"
	},
	{
		"name": "Southern",
		"iso": "BW-SO"
	},
	{
		"name": "Sowa Town",
		"iso": "BW-ST"
	}],
        "zipRegex": ""
    },
    {
        "region": "Antarctica",
        "iso": "BV",
        "name": "Bouvet Island",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BR",
        "name": "Brazil",
        "hasPostalCodes": true,
        "states": [{
		"name": "Acre",
		"iso": "BR-AC"
	},
	{
		"name": "Alagoas",
		"iso": "BR-AL"
	},
	{
		"name": "Amap?",
		"iso": "BR-AP"
	},
	{
		"name": "Amazonas",
		"iso": "BR-AM"
	},
	{
		"name": "Bahia",
		"iso": "BR-BA"
	},
	{
		"name": "Cear?",
		"iso": "BR-CE"
	},
	{
		"name": "Distrito Federal",
		"iso": "BR-DF"
	},
	{
		"name": "Esp?rito Santo",
		"iso": "BR-ES"
	},
	{
		"name": "Goi?s",
		"iso": "BR-GO"
	},
	{
		"name": "Maranh?o",
		"iso": "BR-MA"
	},
	{
		"name": "Mato Grosso",
		"iso": "BR-MT"
	},
	{
		"name": "Mato Grosso do Sul",
		"iso": "BR-MS"
	},
	{
		"name": "Minas Gerais",
		"iso": "BR-MG"
	},
	{
		"name": "Paran?",
		"iso": "BR-PR"
	},
	{
		"name": "Para?ba",
		"iso": "BR-PB"
	},
	{
		"name": "Par?",
		"iso": "BR-PA"
	},
	{
		"name": "Pernambuco",
		"iso": "BR-PE"
	},
	{
		"name": "Piau?",
		"iso": "BR-PI"
	},
	{
		"name": "Rio Grande do Norte",
		"iso": "BR-RN"
	},
	{
		"name": "Rio Grande do Sul",
		"iso": "BR-RS"
	},
	{
		"name": "Rio de Janeiro",
		"iso": "BR-RJ"
	},
	{
		"name": "Rond?nia",
		"iso": "BR-RO"
	},
	{
		"name": "Roraima",
		"iso": "BR-RR"
	},
	{
		"name": "Santa Catarina",
		"iso": "BR-SC"
	},
	{
		"name": "Sergipe",
		"iso": "BR-SE"
	},
	{
		"name": "S?o Paulo",
		"iso": "BR-SP"
	},
	{
		"name": "Tocantins",
		"iso": "BR-TO"
	}],
        "zipRegex": "^[0-9]{5}-[0-9]{3}$"
    },
    {
        "region": "Africa",
        "iso": "IO",
        "name": "British Indian Ocean Territory",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(BB9D 1ZZ)$"
    },
    {
        "region": "Asia",
        "iso": "BN",
        "name": "Brunei Darussalam",
        "hasPostalCodes": true,
        "states": [{
		"name": "Belait",
		"iso": "BN-BE"
	},
	{
		"name": "Brunei-Muara",
		"iso": "BN-BM"
	},
	{
		"name": "Temburong",
		"iso": "BN-TE"
	},
	{
		"name": "Tutong",
		"iso": "BN-TU"
	}],
        "zipRegex": "^([A-Z]{2}\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "BG",
        "name": "Bulgaria",
        "hasPostalCodes": true,
        "states": [{
		"name": "Blagoevgrad",
		"iso": "BG-01"
	},
	{
		"name": "Burgas",
		"iso": "BG-02"
	},
	{
		"name": "Dobrich",
		"iso": "BG-08"
	},
	{
		"name": "Gabrovo",
		"iso": "BG-07"
	},
	{
		"name": "Haskovo",
		"iso": "BG-26"
	},
	{
		"name": "Kardzhali",
		"iso": "BG-09"
	},
	{
		"name": "Kyustendil",
		"iso": "BG-10"
	},
	{
		"name": "Lovech",
		"iso": "BG-11"
	},
	{
		"name": "Montana",
		"iso": "BG-12"
	},
	{
		"name": "Pazardzhik",
		"iso": "BG-13"
	},
	{
		"name": "Pernik",
		"iso": "BG-14"
	},
	{
		"name": "Pleven",
		"iso": "BG-15"
	},
	{
		"name": "Plovdiv",
		"iso": "BG-16"
	},
	{
		"name": "Razgrad",
		"iso": "BG-17"
	},
	{
		"name": "Ruse",
		"iso": "BG-18"
	},
	{
		"name": "Shumen",
		"iso": "BG-27"
	},
	{
		"name": "Silistra",
		"iso": "BG-19"
	},
	{
		"name": "Sliven",
		"iso": "BG-20"
	},
	{
		"name": "Smolyan",
		"iso": "BG-21"
	},
	{
		"name": "Sofia",
		"iso": "BG-23"
	},
	{
		"name": "Sofia-Grad",
		"iso": "BG-22"
	},
	{
		"name": "Stara Zagora",
		"iso": "BG-24"
	},
	{
		"name": "Targovishte",
		"iso": "BG-25"
	},
	{
		"name": "Varna",
		"iso": "BG-03"
	},
	{
		"name": "Veliko Tarnovo",
		"iso": "BG-04"
	},
	{
		"name": "Vidin",
		"iso": "BG-05"
	},
	{
		"name": "Vratsa",
		"iso": "BG-06"
	},
	{
		"name": "Yambol",
		"iso": "BG-28"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "BF",
        "name": "Burkina Faso",
        "hasPostalCodes": false,
        "states": [{
		"name": "Boucle du Mouhoun",
		"iso": "BF-01"
	},
	{
		"name": "Cascades",
		"iso": "BF-02"
	},
	{
		"name": "Centre",
		"iso": "BF-03"
	},
	{
		"name": "Centre-Est",
		"iso": "BF-04"
	},
	{
		"name": "Centre-Nord",
		"iso": "BF-05"
	},
	{
		"name": "Centre-Ouest",
		"iso": "BF-06"
	},
	{
		"name": "Centre-Sud",
		"iso": "BF-07"
	},
	{
		"name": "Est",
		"iso": "BF-08"
	},
	{
		"name": "Hauts-Bassins",
		"iso": "BF-09"
	},
	{
		"name": "Nord",
		"iso": "BF-10"
	},
	{
		"name": "Plateau-Central",
		"iso": "BF-11"
	},
	{
		"name": "Sahel",
		"iso": "BF-12"
	},
	{
		"name": "Sud-Ouest",
		"iso": "BF-13"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "BI",
        "name": "Burundi",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bubanza",
		"iso": "BI-BB"
	},
	{
		"name": "Bujumbura Mairie",
		"iso": "BI-BM"
	},
	{
		"name": "Bujumbura Rural",
		"iso": "BI-BL"
	},
	{
		"name": "Bururi",
		"iso": "BI-BR"
	},
	{
		"name": "Cankuzo",
		"iso": "BI-CA"
	},
	{
		"name": "Cibitoke",
		"iso": "BI-CI"
	},
	{
		"name": "Gitega",
		"iso": "BI-GI"
	},
	{
		"name": "Karuzi",
		"iso": "BI-KR"
	},
	{
		"name": "Kayanza",
		"iso": "BI-KY"
	},
	{
		"name": "Kirundo",
		"iso": "BI-KI"
	},
	{
		"name": "Makamba",
		"iso": "BI-MA"
	},
	{
		"name": "Muramvya",
		"iso": "BI-MU"
	},
	{
		"name": "Muyinga",
		"iso": "BI-MY"
	},
	{
		"name": "Mwaro",
		"iso": "BI-MW"
	},
	{
		"name": "Ngozi",
		"iso": "BI-NG"
	},
	{
		"name": "Rutana",
		"iso": "BI-RT"
	},
	{
		"name": "Ruyigi",
		"iso": "BI-RY"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "KH",
        "name": "Cambodia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Baat Dambang",
		"iso": "KH-2"
	},
	{
		"name": "Banteay Mean Chey",
		"iso": "KH-1"
	},
	{
		"name": "Kampong Chaam",
		"iso": "KH-3"
	},
	{
		"name": "Kampong Chhnang",
		"iso": "KH-4"
	},
	{
		"name": "Kampong Spueu",
		"iso": "KH-5"
	},
	{
		"name": "Kampong Thum",
		"iso": "KH-6"
	},
	{
		"name": "Kampot",
		"iso": "KH-7"
	},
	{
		"name": "Kandaal",
		"iso": "KH-8"
	},
	{
		"name": "Kaoh Kong",
		"iso": "KH-9"
	},
	{
		"name": "Kracheh",
		"iso": "KH-10"
	},
	{
		"name": "Krong Kaeb",
		"iso": "KH-23"
	},
	{
		"name": "Krong Pailin",
		"iso": "KH-24"
	},
	{
		"name": "Krong Preah Sihanouk",
		"iso": "KH-18"
	},
	{
		"name": "Mondol Kiri",
		"iso": "KH-11"
	},
	{
		"name": "Otdar Mean Chey",
		"iso": "KH-22"
	},
	{
		"name": "Phnom Penh",
		"iso": "KH-12"
	},
	{
		"name": "Pousaat",
		"iso": "KH-15"
	},
	{
		"name": "Preah Vihear",
		"iso": "KH-13"
	},
	{
		"name": "Prey Veaeng",
		"iso": "KH-14"
	},
	{
		"name": "Rotanak Kiri",
		"iso": "KH-16"
	},
	{
		"name": "Siem Reab",
		"iso": "KH-17"
	},
	{
		"name": "Stueng Traeng",
		"iso": "KH-19"
	},
	{
		"name": "Svaay Rieng",
		"iso": "KH-20"
	},
	{
		"name": "Taakaev",
		"iso": "KH-21"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "CM",
        "name": "Cameroon",
        "hasPostalCodes": false,
        "states": [{
		"name": "Adamaoua",
		"iso": "CM-AD"
	},
	{
		"name": "Centre",
		"iso": "CM-CE"
	},
	{
		"name": "East",
		"iso": "CM-ES"
	},
	{
		"name": "Far North",
		"iso": "CM-EN"
	},
	{
		"name": "Littoral",
		"iso": "CM-LT"
	},
	{
		"name": "North",
		"iso": "CM-NO"
	},
	{
		"name": "North-West",
		"iso": "CM-NW"
	},
	{
		"name": "South",
		"iso": "CM-SU"
	},
	{
		"name": "South-West",
		"iso": "CM-SW"
	},
	{
		"name": "West",
		"iso": "CM-OU"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "CA",
        "name": "Canada",
        "hasPostalCodes": true,
        "states": [
            {
                "iso": "AB",
                "name": "Alberta"
            },
            {
                "iso": "BC",
                "name": "British Columbia"
            },
            {
                "iso": "MB",
                "name": "Manitoba"
            },
            {
                "iso": "NB",
                "name": "New Brunswick"
            },
            {
                "iso": "NL",
                "name": "Newfoundland and Labrador"
            },
            {
                "iso": "NS",
                "name": "Nova Scotia"
            },
            {
                "iso": "NT",
                "name": "Northwest Territories"
            },
            {
                "iso": "NU",
                "name": "Nunavut"
            },
            {
                "iso": "ON",
                "name": "Ontario"
            },
            {
                "iso": "PE",
                "name": "Prince Edward Island"
            },
            {
                "iso": "QC",
                "name": "Quebec"
            },
            {
                "iso": "SK",
                "name": "Saskatchewan"
            },
            {
                "iso": "YT",
                "name": "Yukon"
            }
        ],
        "zipRegex": "^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] +?[0-9][A-Z][0-9]$"
    },
    {
        "region": "Africa",
        "iso": "CV",
        "name": "Cape Verde",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ilhas de Barlavento",
		"iso": "CV-B"
	},
	{
		"name": "Ilhas de Sotavento",
		"iso": "CV-S"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "KY",
        "name": "Cayman Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[K][Y][0-9]{1}[-]([0-9]){4}$"
    },
    {
        "region": "Africa",
        "iso": "CF",
        "name": "Central African Republic",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bamingui-Bangoran",
		"iso": "CF-BB"
	},
	{
		"name": "Bangui",
		"iso": "CF-BGF"
	},
	{
		"name": "Basse-Kotto",
		"iso": "CF-BK"
	},
	{
		"name": "Gribingui",
		"iso": "CF-KB"
	},
	{
		"name": "Haut-Mbomou",
		"iso": "CF-HM"
	},
	{
		"name": "Haute-Kotto",
		"iso": "CF-HK"
	},
	{
		"name": "Haute-Sangha / Mamb?r?-Kad??",
		"iso": "CF-HS"
	},
	{
		"name": "K?mo-Gribingui",
		"iso": "CF-KG"
	},
	{
		"name": "Lobaye",
		"iso": "CF-LB"
	},
	{
		"name": "Mbomou",
		"iso": "CF-MB"
	},
	{
		"name": "Nana-Mamb?r?",
		"iso": "CF-NM"
	},
	{
		"name": "Ombella-Mpoko",
		"iso": "CF-MP"
	},
	{
		"name": "Ouaka",
		"iso": "CF-UK"
	},
	{
		"name": "Ouham",
		"iso": "CF-AC"
	},
	{
		"name": "Ouham-Pend?",
		"iso": "CF-OP"
	},
	{
		"name": "Sangha",
		"iso": "CF-SE"
	},
	{
		"name": "Vakaga",
		"iso": "CF-VK"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "TD",
        "name": "Chad",
        "hasPostalCodes": true,
        "states": [{
		"name": "Al Ba??ah",
		"iso": "TD-BA"
	},
	{
		"name": "Al Bu?ayrah",
		"iso": "TD-LC"
	},
	{
		"name": "Ba?r al Ghaz?l",
		"iso": "TD-BG"
	},
	{
		"name": "B?rk?",
		"iso": "TD-BO"
	},
	{
		"name": "Inn?d?",
		"iso": "TD-EN"
	},
	{
		"name": "K?nim",
		"iso": "TD-KA"
	},
	{
		"name": "L?q?n al Gharb?",
		"iso": "TD-LO"
	},
	{
		"name": "L?q?n ash Sharq?",
		"iso": "TD-LR"
	},
	{
		"name": "Mad?nat Injam?n?",
		"iso": "TD-ND"
	},
	{
		"name": "M?nd?l",
		"iso": "TD-MA"
	},
	{
		"name": "M?y? K?bb? al Gharb?",
		"iso": "TD-MO"
	},
	{
		"name": "M?y? K?bb? ash Sharq?",
		"iso": "TD-ME"
	},
	{
		"name": "Q?r?",
		"iso": "TD-GR"
	},
	{
		"name": "Sal?m?t",
		"iso": "TD-SA"
	},
	{
		"name": "Sh?r? B?qirm?",
		"iso": "TD-CB"
	},
	{
		"name": "Sh?r? al Awsa?",
		"iso": "TD-MC"
	},
	{
		"name": "S?l?",
		"iso": "TD-SI"
	},
	{
		"name": "Tibast?",
		"iso": "TD-TI"
	},
	{
		"name": "T?njil?",
		"iso": "TD-TA"
	},
	{
		"name": "Wadd?y",
		"iso": "TD-OD"
	},
	{
		"name": "W?d? F?r?",
		"iso": "TD-WF"
	},
	{
		"name": "?ajjar Lam?s",
		"iso": "TD-HL"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "CL",
        "name": "Chile",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ais?n del General Carlos Iba?ez del Campo",
		"iso": "CL-AI"
	},
	{
		"name": "Antofagasta",
		"iso": "CL-AN"
	},
	{
		"name": "Araucan?a",
		"iso": "CL-AR"
	},
	{
		"name": "Arica y Parinacota",
		"iso": "CL-AP"
	},
	{
		"name": "Atacama",
		"iso": "CL-AT"
	},
	{
		"name": "B?o-B?o",
		"iso": "CL-BI"
	},
	{
		"name": "Coquimbo",
		"iso": "CL-CO"
	},
	{
		"name": "Libertador General Bernardo O'Higgins",
		"iso": "CL-LI"
	},
	{
		"name": "Los Lagos",
		"iso": "CL-LL"
	},
	{
		"name": "Los R?os",
		"iso": "CL-LR"
	},
	{
		"name": "Magallanes",
		"iso": "CL-MA"
	},
	{
		"name": "Maule",
		"iso": "CL-ML"
	},
	{
		"name": "Regi?n Metropolitana de Santiago",
		"iso": "CL-RM"
	},
	{
		"name": "Tarapac?",
		"iso": "CL-TA"
	},
	{
		"name": "Valpara?so",
		"iso": "CL-VS"
	}],
        "zipRegex": "^(\\d{7})$"
    },
    {
        "region": "Asia",
        "iso": "CN",
        "name": "China",
        "hasPostalCodes": true,
        "states": [{
		"name": "Guangxi",
		"iso": "CN-45"
	},
	{
		"name": "Nei Mongol",
		"iso": "CN-15"
        },
	{
		"name": "Ningxia",
		"iso": "CN-64"
	},
	{
		"name": "Xinjiang",
		"iso": "CN-65"
	},
	{
		"name": "Xizang",
		"iso": "CN-54"
	},
	{
		"name": "Beijing",
		"iso": "CN-11"
	},
	{
		"name": "Chongqing",
		"iso": "CN-50"
	},
	{
		"name": "Shanghai",
		"iso": "CN-31"
	},
	{
		"name": "Tianjin",
		"iso": "CN-12"
	},
	{
		"name": "Anhui",
		"iso": "CN-34"
	},
	{
		"name": "Fujian",
		"iso": "CN-35"
	},
	{
		"name": "Gansu",
		"iso": "CN-62"
	},
	{
		"name": "Guangdong",
		"iso": "CN-44"
	},
	{
		"name": "Guizhou",
		"iso": "CN-52"
	},
	{
		"name": "Hainan",
		"iso": "CN-46"
	},
	{
		"name": "Hebei",
		"iso": "CN-13"
	},
	{
		"name": "Heilongjiang",
		"iso": "CN-23"
	},
	{
		"name": "Henan",
		"iso": "CN-41"
	},
	{
		"name": "Hubei",
		"iso": "CN-42"
	},
	{
		"name": "Hunan",
		"iso": "CN-43"
	},
	{
		"name": "Jiangsu",
		"iso": "CN-32"
	},
	{
		"name": "Jiangxi",
		"iso": "CN-36"
	},
	{
		"name": "Jilin",
		"iso": "CN-22"
	},
	{
		"name": "Liaoning",
		"iso": "CN-21"
	},
	{
		"name": "Qinghai",
		"iso": "CN-63"
	},
	{
		"name": "Shaanxi",
		"iso": "CN-61"
	},
	{
		"name": "Shandong",
		"iso": "CN-37"
	},
	{
		"name": "Shanxi",
		"iso": "CN-14"
	},
	{
		"name": "Sichuan",
		"iso": "CN-51"
	},
	{
		"name": "Taiwan",
		"iso": "CN-71"
	},
	{
		"name": "Yunnan",
		"iso": "CN-53"
	},
	{
		"name": "Zhejiang",
		"iso": "CN-33"
	},
	{
		"name": "Hong Kong",
		"iso": "CN-91"
	},
	{
		"name": "Macao",
		"iso": "CN-92"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Oceania",
        "iso": "CX",
        "name": "Christmas Island",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(6978)$"
    },
    {
        "region": "Oceania",
        "iso": "CC",
        "name": "Cocos (Keeling) Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(6799 W3)$"
    },
    {
        "region": "Americas",
        "iso": "CO",
        "name": "Colombia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Amazonas",
		"iso": "CO-AMA"
	},
	{
		"name": "Antioquia",
		"iso": "CO-ANT"
	},
	{
		"name": "Arauca",
		"iso": "CO-ARA"
	},
	{
		"name": "Atl?ntico",
		"iso": "CO-ATL"
	},
	{
		"name": "Bol?var",
		"iso": "CO-BOL"
	},
	{
		"name": "Boyac?",
		"iso": "CO-BOY"
	},
	{
		"name": "Caldas",
		"iso": "CO-CAL"
	},
	{
		"name": "Caquet?",
		"iso": "CO-CAQ"
	},
	{
		"name": "Casanare",
		"iso": "CO-CAS"
	},
	{
		"name": "Cauca",
		"iso": "CO-CAU"
	},
	{
		"name": "Cesar",
		"iso": "CO-CES"
	},
	{
		"name": "Choc?",
		"iso": "CO-CHO"
	},
	{
		"name": "Cundinamarca",
		"iso": "CO-CUN"
	},
	{
		"name": "C?rdoba",
		"iso": "CO-COR"
	},
	{
		"name": "Distrito Capital de Bogot?",
		"iso": "CO-DC"
	},
	{
		"name": "Guain?a",
		"iso": "CO-GUA"
	},
	{
		"name": "Guaviare",
		"iso": "CO-GUV"
	},
	{
		"name": "Huila",
		"iso": "CO-HUI"
	},
	{
		"name": "La Guajira",
		"iso": "CO-LAG"
	},
	{
		"name": "Magdalena",
		"iso": "CO-MAG"
	},
	{
		"name": "Meta",
		"iso": "CO-MET"
	},
	{
		"name": "Nari?o",
		"iso": "CO-NAR"
	},
	{
		"name": "Norte de Santander",
		"iso": "CO-NSA"
	},
	{
		"name": "Putumayo",
		"iso": "CO-PUT"
	},
	{
		"name": "Quind?o",
		"iso": "CO-QUI"
	},
	{
		"name": "Risaralda",
		"iso": "CO-RIS"
	},
	{
		"name": "San Andr?s, Providencia y Santa Catalina",
		"iso": "CO-SAP"
	},
	{
		"name": "Santander",
		"iso": "CO-SAN"
	},
	{
		"name": "Sucre",
		"iso": "CO-SUC"
	},
	{
		"name": "Tolima",
		"iso": "CO-TOL"
	},
	{
		"name": "Valle del Cauca",
		"iso": "CO-VAC"
	},
	{
		"name": "Vaup?s",
		"iso": "CO-VAU"
	},
	{
		"name": "Vichada",
		"iso": "CO-VID"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Africa",
        "iso": "KM",
        "name": "Comoros",
        "hasPostalCodes": false,
        "states": [{
		"name": "Anjouan",
		"iso": "KM-A"
	},
	{
		"name": "Grande Comore",
		"iso": "KM-G"
	},
	{
		"name": "Moh?li",
		"iso": "KM-M"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "CG",
        "name": "Congo",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bouenza",
		"iso": "CG-11"
	},
	{
		"name": "Brazzaville",
		"iso": "CG-BZV"
	},
	{
		"name": "Cuvette",
		"iso": "CG-8"
	},
	{
		"name": "Cuvette-Ouest",
		"iso": "CG-15"
	},
	{
		"name": "Kouilou",
		"iso": "CG-5"
	},
	{
		"name": "Likouala",
		"iso": "CG-7"
	},
	{
		"name": "L?koumou",
		"iso": "CG-2"
	},
	{
		"name": "Niari",
		"iso": "CG-9"
	},
	{
		"name": "Plateaux",
		"iso": "CG-14"
	},
	{
		"name": "Pointe-Noire",
		"iso": "CG-16"
	},
	{
		"name": "Pool",
		"iso": "CG-12"
	},
	{
		"name": "Sangha",
		"iso": "CG-13"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "CD",
        "name": "Congo, the Democratic Republic of the",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bandundu",
		"iso": "CD-BN"
	},
	{
		"name": "Bas-Congo",
		"iso": "CD-BC"
	},
	{
		"name": "Kasai-Occidental",
		"iso": "CD-KW"
	},
	{
		"name": "Kasai-Oriental",
		"iso": "CD-KE"
	},
	{
		"name": "Katanga",
		"iso": "CD-KA"
	},
	{
		"name": "Kinshasa",
		"iso": "CD-KN"
	},
	{
		"name": "Maniema",
		"iso": "CD-MA"
	},
	{
		"name": "Nord-Kivu",
		"iso": "CD-NK"
	},
	{
		"name": "Orientale",
		"iso": "CD-OR"
	},
	{
		"name": "Sud-Kivu",
		"iso": "CD-SK"
	},
	{
		"name": "?quateur",
		"iso": "CD-EQ"
	}],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "CK",
        "name": "Cook Islands",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "CR",
        "name": "Costa Rica",
        "hasPostalCodes": true,
        "states": [{
		"name": "Alajuela",
		"iso": "CR-A"
	},
	{
		"name": "Cartago",
		"iso": "CR-C"
	},
	{
		"name": "Guanacaste",
		"iso": "CR-G"
	},
	{
		"name": "Heredia",
		"iso": "CR-H"
	},
	{
		"name": "Lim?n",
		"iso": "CR-L"
	},
	{
		"name": "Puntarenas",
		"iso": "CR-P"
	},
	{
		"name": "San Jos?",
		"iso": "CR-SJ"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "CI",
        "name": "CÃ´te d'Ivoire",
        "hasPostalCodes": false,
        "states": [{
		"name": "18 Montagnes",
		"iso": "CI-06"
	},
	{
		"name": "Agn?bi",
		"iso": "CI-16"
	},
	{
		"name": "Bafing",
		"iso": "CI-17"
	},
	{
		"name": "Bas-Sassandra",
		"iso": "CI-09"
	},
	{
		"name": "Dengu?l?",
		"iso": "CI-10"
	},
	{
		"name": "Fromager",
		"iso": "CI-18"
	},
	{
		"name": "Haut-Sassandra",
		"iso": "CI-02"
	},
	{
		"name": "Lacs",
		"iso": "CI-07"
	},
	{
		"name": "Lagunes",
		"iso": "CI-01"
	},
	{
		"name": "Marahou?",
		"iso": "CI-12"
	},
	{
		"name": "Moyen-Cavally",
		"iso": "CI-19"
	},
	{
		"name": "Moyen-Como?",
		"iso": "CI-05"
	},
	{
		"name": "Nzi-Como?",
		"iso": "CI-11"
	},
	{
		"name": "Savanes",
		"iso": "CI-03"
	},
	{
		"name": "Sud-Bandama",
		"iso": "CI-15"
	},
	{
		"name": "Sud-Como?",
		"iso": "CI-13"
	},
	{
		"name": "Vall?e du Bandama",
		"iso": "CI-04"
	},
	{
		"name": "Worodougou",
		"iso": "CI-14"
	},
	{
		"name": "Zanzan",
		"iso": "CI-08"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "HR",
        "name": "Croatia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Bjelovarsko-bilogorska ?upanija",
		"iso": "HR-07"
	},
	{
		"name": "Brodsko-posavska ?upanija",
		"iso": "HR-12"
	},
	{
		"name": "Dubrova?ko-neretvanska ?upanija",
		"iso": "HR-19"
	},
	{
		"name": "Grad Zagreb",
		"iso": "HR-21"
	},
	{
		"name": "Istarska ?upanija",
		"iso": "HR-18"
	},
	{
		"name": "Karlova?ka ?upanija",
		"iso": "HR-04"
	},
	{
		"name": "Koprivni?ko-kri?eva?ka ?upanija",
		"iso": "HR-06"
	},
	{
		"name": "Krapinsko-zagorska ?upanija",
		"iso": "HR-02"
	},
	{
		"name": "Li?ko-senjska ?upanija",
		"iso": "HR-09"
	},
	{
		"name": "Me?imurska ?upanija",
		"iso": "HR-20"
	},
	{
		"name": "Osje?ko-baranjska ?upanija",
		"iso": "HR-14"
	},
	{
		"name": "Po?e?ko-slavonska ?upanija",
		"iso": "HR-11"
	},
	{
		"name": "Primorsko-goranska ?upanija",
		"iso": "HR-08"
	},
	{
		"name": "Sisa?ko-moslava?ka ?upanija",
		"iso": "HR-03"
	},
	{
		"name": "Splitsko-dalmatinska ?upanija",
		"iso": "HR-17"
	},
	{
		"name": "Vara?dinska ?upanija",
		"iso": "HR-05"
	},
	{
		"name": "Viroviti?ko-podravska ?upanija",
		"iso": "HR-10"
	},
	{
		"name": "Vukovarsko-srijemska ?upanija",
		"iso": "HR-16"
	},
	{
		"name": "Zadarska ?upanija",
		"iso": "HR-13"
	},
	{
		"name": "Zagreba?ka ?upanija",
		"iso": "HR-01"
	},
	{
		"name": "?ibensko-kninska ?upanija",
		"iso": "HR-15"
	}],
        "zipRegex": "^(?:HR)*(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "CU",
        "name": "Cuba",
        "hasPostalCodes": true,
        "states": [{
		"name": "Artemisa",
		"iso": "CU-15"
	},
	{
		"name": "Camag?ey",
		"iso": "CU-09"
	},
	{
		"name": "Ciego de ?vila",
		"iso": "CU-08"
	},
	{
		"name": "Cienfuegos",
		"iso": "CU-06"
	},
	{
		"name": "Granma",
		"iso": "CU-12"
	},
	{
		"name": "Guant?namo",
		"iso": "CU-14"
	},
	{
		"name": "Holgu?n",
		"iso": "CU-11"
	},
	{
		"name": "Isla de la Juventud",
		"iso": "CU-99"
	},
	{
		"name": "La Habana",
		"iso": "CU-03"
	},
	{
		"name": "Las Tunas",
		"iso": "CU-10"
	},
	{
		"name": "Matanzas",
		"iso": "CU-04"
	},
	{
		"name": "Mayabeque",
		"iso": "CU-16"
	},
	{
		"name": "Pinar del R?o",
		"iso": "CU-01"
	},
	{
		"name": "Sancti Sp?ritus",
		"iso": "CU-07"
	},
	{
		"name": "Santiago de Cuba",
		"iso": "CU-13"
	},
	{
		"name": "Villa Clara",
		"iso": "CU-05"
	}],
        "zipRegex": "^(?:CP)*(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "CW",
        "name": "CuraÃ§ao",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(0000 CW)$"
    },
    {
        "region": "Europe",
        "iso": "CY",
        "name": "Cyprus",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ammochostos",
		"iso": "CY-04"
	},
	{
		"name": "Keryneia",
		"iso": "CY-06"
	},
	{
		"name": "Larnaka",
		"iso": "CY-03"
	},
	{
		"name": "Lefkosia",
		"iso": "CY-01"
	},
	{
		"name": "Lemesos",
		"iso": "CY-02"
	},
	{
		"name": "Pafos",
		"iso": "CY-05"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "CZ",
        "name": "Czech Republic",
        "hasPostalCodes": true,
        "states": [{
		"name": "Jihomoravsk? kraj",
		"iso": "CZ-JM"
	},
	{
		"name": "Jiho?esk? kraj",
		"iso": "CZ-JC"
	},
	{
		"name": "Karlovarsk? kraj",
		"iso": "CZ-KA"
	},
	{
		"name": "Kr?lov?hradeck? kraj",
		"iso": "CZ-KR"
	},
	{
		"name": "Libereck? kraj",
		"iso": "CZ-LI"
	},
	{
		"name": "Moravskoslezsk? kraj",
		"iso": "CZ-MO"
	},
	{
		"name": "Olomouck? kraj",
		"iso": "CZ-OL"
	},
	{
		"name": "Pardubick? kraj",
		"iso": "CZ-PA"
	},
	{
		"name": "Plze?sk? kraj",
		"iso": "CZ-PL"
	},
	{
		"name": "Praha, hlavn? m?sto",
		"iso": "CZ-PR"
	},
	{
		"name": "St?edo?esk? kraj",
		"iso": "CZ-ST"
	},
	{
		"name": "Vyso?ina",
		"iso": "CZ-VY"
	},
	{
		"name": "Zl?nsk? kraj",
		"iso": "CZ-ZL"
	},
	{
		"name": "?steck? kraj",
		"iso": "CZ-US"
	}],
        "zipRegex": "^[0-9]{3} [0-9]{2}$"
    },
    {
        "region": "Europe",
        "iso": "DK",
        "name": "Denmark",
        "hasPostalCodes": true,
        "states": [{
		"name": "Hovedstaden",
		"iso": "DK-84"
	},
	{
		"name": "Midtjylland",
		"iso": "DK-82"
	},
	{
		"name": "Nordjylland",
		"iso": "DK-81"
	},
	{
		"name": "Sj?lland",
		"iso": "DK-85"
	},
	{
		"name": "Syddanmark",
		"iso": "DK-83"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "DJ",
        "name": "Djibouti",
        "hasPostalCodes": false,
        "states": [{
		"name": "Ali Sabieh",
		"iso": "DJ-AS"
	},
	{
		"name": "Arta",
		"iso": "DJ-AR"
	},
	{
		"name": "Dikhil",
		"iso": "DJ-DI"
	},
	{
		"name": "Djibouti",
		"iso": "DJ-DJ"
	},
	{
		"name": "Obock",
		"iso": "DJ-OB"
	},
	{
		"name": "Tadjourah",
		"iso": "DJ-TA"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "DM",
        "name": "Dominica",
        "hasPostalCodes": false,
        "states": [{
		"name": "Saint Andrew",
		"iso": "DM-02"
	},
	{
		"name": "Saint David",
		"iso": "DM-03"
	},
	{
		"name": "Saint George",
		"iso": "DM-04"
	},
	{
		"name": "Saint John",
		"iso": "DM-05"
	},
	{
		"name": "Saint Joseph",
		"iso": "DM-06"
	},
	{
		"name": "Saint Luke",
		"iso": "DM-07"
	},
	{
		"name": "Saint Mark",
		"iso": "DM-08"
	},
	{
		"name": "Saint Patrick",
		"iso": "DM-09"
	},
	{
		"name": "Saint Paul",
		"iso": "DM-10"
	},
	{
		"name": "Saint Peter",
		"iso": "DM-11"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "DO",
        "name": "Dominican Republic",
        "hasPostalCodes": true,
        "states": [{
		"name": "Cibao Nordeste",
		"iso": "DO-33"
	},
	{
		"name": "Cibao Noroeste",
		"iso": "DO-34"
	},
	{
		"name": "Cibao Norte",
		"iso": "DO-35"
	},
	{
		"name": "Cibao Sur",
		"iso": "DO-36"
	},
	{
		"name": "El Valle",
		"iso": "DO-37"
	},
	{
		"name": "Enriquillo",
		"iso": "DO-38"
	},
	{
		"name": "Higuamo",
		"iso": "DO-39"
	},
	{
		"name": "Ozama",
		"iso": "DO-40"
	},
	{
		"name": "Valdesia",
		"iso": "DO-41"
	},
	{
		"name": "Yuma",
		"iso": "DO-42"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "EC",
        "name": "Ecuador",
        "hasPostalCodes": true,
        "states": [{
		"name": "Azuay",
		"iso": "EC-A"
	},
	{
		"name": "Bol?var",
		"iso": "EC-B"
	},
	{
		"name": "Carchi",
		"iso": "EC-C"
	},
	{
		"name": "Ca?ar",
		"iso": "EC-F"
	},
	{
		"name": "Chimborazo",
		"iso": "EC-H"
	},
	{
		"name": "Cotopaxi",
		"iso": "EC-X"
	},
	{
		"name": "El Oro",
		"iso": "EC-O"
	},
	{
		"name": "Esmeraldas",
		"iso": "EC-E"
	},
	{
		"name": "Gal?pagos",
		"iso": "EC-W"
	},
	{
		"name": "Guayas",
		"iso": "EC-G"
	},
	{
		"name": "Imbabura",
		"iso": "EC-I"
	},
	{
		"name": "Loja",
		"iso": "EC-L"
	},
	{
		"name": "Los R?os",
		"iso": "EC-R"
	},
	{
		"name": "Manab?",
		"iso": "EC-M"
	},
	{
		"name": "Morona-Santiago",
		"iso": "EC-S"
	},
	{
		"name": "Napo",
		"iso": "EC-N"
	},
	{
		"name": "Orellana",
		"iso": "EC-D"
	},
	{
		"name": "Pastaza",
		"iso": "EC-Y"
	},
	{
		"name": "Pichincha",
		"iso": "EC-P"
	},
	{
		"name": "Santa Elena",
		"iso": "EC-SE"
	},
	{
		"name": "Santo Domingo de los Ts?chilas",
		"iso": "EC-SD"
	},
	{
		"name": "Sucumb?os",
		"iso": "EC-U"
	},
	{
		"name": "Tungurahua",
		"iso": "EC-T"
	},
	{
		"name": "Zamora-Chinchipe",
		"iso": "EC-Z"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Africa",
        "iso": "EG",
        "name": "Egypt",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ad Daqahl?yah",
		"iso": "EG-DK"
	},
	{
		"name": "Al Ba?r al A?mar",
		"iso": "EG-BA"
	},
	{
		"name": "Al Bu?ayrah",
		"iso": "EG-BH"
	},
	{
		"name": "Al Fayy?m",
		"iso": "EG-FYM"
	},
	{
		"name": "Al Gharb?yah",
		"iso": "EG-GH"
	},
	{
		"name": "Al Iskandar?yah",
		"iso": "EG-ALX"
	},
	{
		"name": "Al Ism???l?yah",
		"iso": "EG-IS"
	},
	{
		"name": "Al J?zah",
		"iso": "EG-GZ"
	},
	{
		"name": "Al Miny?",
		"iso": "EG-MN"
	},
	{
		"name": "Al Min?f?yah",
		"iso": "EG-MNF"
	},
	{
		"name": "Al Qaly?b?yah",
		"iso": "EG-KB"
	},
	{
		"name": "Al Q?hirah",
		"iso": "EG-C"
	},
	{
		"name": "Al Uq?ur",
		"iso": "EG-LX"
	},
	{
		"name": "Al W?d? al Jad?d",
		"iso": "EG-WAD"
	},
	{
		"name": "As Suways",
		"iso": "EG-SUZ"
	},
	{
		"name": "As S?dis min Ukt?bar",
		"iso": "EG-SU"
	},
	{
		"name": "Ash Sharq?yah",
		"iso": "EG-SHR"
	},
	{
		"name": "Asw?n",
		"iso": "EG-ASN"
	},
	{
		"name": "Asy??",
		"iso": "EG-AST"
	},
	{
		"name": "Ban? Suwayf",
		"iso": "EG-BNS"
	},
	{
		"name": "B?r Sa??d",
		"iso": "EG-PTS"
	},
	{
		"name": "Dumy??",
		"iso": "EG-DT"
	},
	{
		"name": "Jan?b S?n?'",
		"iso": "EG-JS"
	},
	{
		"name": "Kafr ash Shaykh",
		"iso": "EG-KFS"
	},
	{
		"name": "Ma?r??",
		"iso": "EG-MT"
	},
	{
		"name": "Qin?",
		"iso": "EG-KN"
	},
	{
		"name": "Sham?l S?n?'",
		"iso": "EG-SIN"
	},
	{
		"name": "S?h?j",
		"iso": "EG-SHG"
	},
	{
		"name": "?ulw?n",
		"iso": "EG-HU"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "SV",
        "name": "El Salvador",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ahuachap?n",
		"iso": "SV-AH"
	},
	{
		"name": "Caba?as",
		"iso": "SV-CA"
	},
	{
		"name": "Chalatenango",
		"iso": "SV-CH"
	},
	{
		"name": "Cuscatl?n",
		"iso": "SV-CU"
	},
	{
		"name": "La Libertad",
		"iso": "SV-LI"
	},
	{
		"name": "La Paz",
		"iso": "SV-PA"
	},
	{
		"name": "La Uni?n",
		"iso": "SV-UN"
	},
	{
		"name": "Moraz?n",
		"iso": "SV-MO"
	},
	{
		"name": "San Miguel",
		"iso": "SV-SM"
	},
	{
		"name": "San Salvador",
		"iso": "SV-SS"
	},
	{
		"name": "San Vicente",
		"iso": "SV-SV"
	},
	{
		"name": "Santa Ana",
		"iso": "SV-SA"
	},
	{
		"name": "Sonsonate",
		"iso": "SV-SO"
	},
	{
		"name": "Usulut?n",
		"iso": "SV-US"
	}],
        "zipRegex": "^(01101)$"
    },
    {
        "region": "Africa",
        "iso": "GQ",
        "name": "Equatorial Guinea",
        "hasPostalCodes": false,
        "states": [{
		"name": "Regi?n Continental",
		"iso": "GQ-C"
	},
	{
		"name": "Regi?n Insular",
		"iso": "GQ-I"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "ER",
        "name": "Eritrea",
        "hasPostalCodes": false,
        "states": [{
		"name": "Al Awsa?",
		"iso": "ER-MA"
	},
	{
		"name": "Al Jan?b?",
		"iso": "ER-DU"
	},
	{
		"name": "Ansab?",
		"iso": "ER-AN"
	},
	{
		"name": "Jan?b? al Ba?r? al A?mar",
		"iso": "ER-DK"
	},
	{
		"name": "Q?sh-Barkah",
		"iso": "ER-GB"
	},
	{
		"name": "Shim?l? al Ba?r? al A?mar",
		"iso": "ER-SK"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "EE",
        "name": "Estonia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Harjumaa",
		"iso": "EE-37"
	},
	{
		"name": "Hiiumaa",
		"iso": "EE-39"
	},
	{
		"name": "Ida-Virumaa",
		"iso": "EE-44"
	},
	{
		"name": "J?rvamaa",
		"iso": "EE-51"
	},
	{
		"name": "J?gevamaa",
		"iso": "EE-49"
	},
	{
		"name": "L??ne-Virumaa",
		"iso": "EE-59"
	},
	{
		"name": "L??nemaa",
		"iso": "EE-57"
	},
	{
		"name": "P?rnumaa",
		"iso": "EE-67"
	},
	{
		"name": "P?lvamaa",
		"iso": "EE-65"
	},
	{
		"name": "Raplamaa",
		"iso": "EE-70"
	},
	{
		"name": "Saaremaa",
		"iso": "EE-74"
	},
	{
		"name": "Tartumaa",
		"iso": "EE-78"
	},
	{
		"name": "Valgamaa",
		"iso": "EE-82"
	},
	{
		"name": "Viljandimaa",
		"iso": "EE-84"
	},
	{
		"name": "V?rumaa",
		"iso": "EE-86"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "ET",
        "name": "Ethiopia",
        "hasPostalCodes": true,
        "states": [{
		"name": "B?nshangul Gumuz",
		"iso": "ET-BE"
	},
	{
		"name": "Dir? Dawa",
		"iso": "ET-DD"
	},
	{
		"name": "Gamb?la Hizboch",
		"iso": "ET-GA"
	},
	{
		"name": "H?rer? Hizb",
		"iso": "ET-HA"
	},
	{
		"name": "Orom?ya",
		"iso": "ET-OR"
	},
	{
		"name": "Sumal?",
		"iso": "ET-SO"
	},
	{
		"name": "Tigray",
		"iso": "ET-TI"
	},
	{
		"name": "YeDebub Bih?roch Bih?reseboch na Hizboch",
		"iso": "ET-SN"
	},
	{
		"name": "?d?s ?beba",
		"iso": "ET-AA"
	},
	{
		"name": "?far",
		"iso": "ET-AF"
	},
	{
		"name": "?mara",
		"iso": "ET-AM"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "FK",
        "name": "Falkland Islands (Malvinas)",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(FIQQ 1ZZ)$"
    },
    {
        "region": "Europe",
        "iso": "FO",
        "name": "Faroe Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:FO)*(\\d{3})$"
    },
    {
        "region": "Oceania",
        "iso": "FJ",
        "name": "Fiji",
        "hasPostalCodes": false,
        "states": [{
		"name": "Central",
		"iso": "FJ-C"
	},
	{
		"name": "Eastern",
		"iso": "FJ-E"
	},
	{
		"name": "Northern",
		"iso": "FJ-N"
	},
	{
		"name": "Rotuma",
		"iso": "FJ-R"
	},
	{
		"name": "Western",
		"iso": "FJ-W"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "FI",
        "name": "Finland",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ahvenanmaan maakunta",
		"iso": "FI-01"
	},
	{
		"name": "Etel?-Karjala",
		"iso": "FI-02"
	},
	{
		"name": "Etel?-Pohjanmaa",
		"iso": "FI-03"
	},
	{
		"name": "Etel?-Savo",
		"iso": "FI-04"
	},
	{
		"name": "Kainuu",
		"iso": "FI-05"
	},
	{
		"name": "Kanta-H?me",
		"iso": "FI-06"
	},
	{
		"name": "Keski-Pohjanmaa",
		"iso": "FI-07"
	},
	{
		"name": "Keski-Suomi",
		"iso": "FI-08"
	},
	{
		"name": "Kymenlaakso",
		"iso": "FI-09"
	},
	{
		"name": "Lappi",
		"iso": "FI-10"
	},
	{
		"name": "Pirkanmaa",
		"iso": "FI-11"
	},
	{
		"name": "Pohjanmaa",
		"iso": "FI-12"
	},
	{
		"name": "Pohjois-Karjala",
		"iso": "FI-13"
	},
	{
		"name": "Pohjois-Pohjanmaa",
		"iso": "FI-14"
	},
	{
		"name": "Pohjois-Savo",
		"iso": "FI-15"
	},
	{
		"name": "P?ij?t-H?me",
		"iso": "FI-16"
	},
	{
		"name": "Satakunta",
		"iso": "FI-17"
	},
	{
		"name": "Uusimaa",
		"iso": "FI-18"
	},
	{
		"name": "Varsinais-Suomi",
		"iso": "FI-19"
	}],
        "zipRegex": "^(?:FI)*(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "FR",
        "name": "France",
        "hasPostalCodes": true,
        "states": [{
		"name": "Alsace",
		"iso": "FR-A"
	},
	{
		"name": "Aquitaine",
		"iso": "FR-B"
	},
	{
		"name": "Auvergne",
		"iso": "FR-C"
	},
	{
		"name": "Brittany",
		"iso": "FR-E"
	},
	{
		"name": "Burgundy",
		"iso": "FR-D"
	},
	{
		"name": "Centre-Val de Loire",
		"iso": "FR-F"
	},
	{
		"name": "Champagne-Ardenne",
		"iso": "FR-G"
	},
	{
		"name": "Corsica",
		"iso": "FR-H"
	},
	{
		"name": "Franche-Comt?",
		"iso": "FR-I"
	},
	{
		"name": "Languedoc-Roussillon",
		"iso": "FR-K"
	},
	{
		"name": "Limousin",
		"iso": "FR-L"
	},
	{
		"name": "Lorraine",
		"iso": "FR-M"
	},
	{
		"name": "Lower Normandy",
		"iso": "FR-P"
	},
	{
		"name": "Midi-Pyr?n?es",
		"iso": "FR-N"
	},
	{
		"name": "Nord-Pas-de-Calais",
		"iso": "FR-O"
	},
	{
		"name": "Pays de la Loire",
		"iso": "FR-R"
	},
	{
		"name": "Picardy",
		"iso": "FR-S"
	},
	{
		"name": "Poitou-Charentes",
		"iso": "FR-T"
	},
	{
		"name": "Provence-Alpes-C?te d'Azur",
		"iso": "FR-U"
	},
	{
		"name": "Rh?ne-Alpes",
		"iso": "FR-V"
	},
	{
		"name": "Upper Normandy",
		"iso": "FR-Q"
	},
	{
		"name": "?le-de-France",
		"iso": "FR-J"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "GF",
        "name": "French Guiana",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((973)\\d{2})$"
    },
    {
        "region": "Oceania",
        "iso": "PF",
        "name": "French Polynesia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((987)\\d{2})$"
    },
    {
        "region": "Antarctica",
        "iso": "TF",
        "name": "French Southern Territories",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^((984)\\d{2})$"
    },
    {
        "region": "Africa",
        "iso": "GA",
        "name": "Gabon",
        "hasPostalCodes": true,
        "states": [{
		"name": "Estuaire",
		"iso": "GA-1"
	},
	{
		"name": "Haut-Ogoou?",
		"iso": "GA-2"
	},
	{
		"name": "Moyen-Ogoou?",
		"iso": "GA-3"
	},
	{
		"name": "Ngouni?",
		"iso": "GA-4"
	},
	{
		"name": "Nyanga",
		"iso": "GA-5"
	},
	{
		"name": "Ogoou?-Ivindo",
		"iso": "GA-6"
	},
	{
		"name": "Ogoou?-Lolo",
		"iso": "GA-7"
	},
	{
		"name": "Ogoou?-Maritime",
		"iso": "GA-8"
	},
	{
		"name": "Woleu-Ntem",
		"iso": "GA-9"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "GM",
        "name": "Gambia",
        "hasPostalCodes": false,
        "states": [{
		"name": "Banjul",
		"iso": "GM-B"
	},
	{
		"name": "Central River",
		"iso": "GM-M"
	},
	{
		"name": "Lower River",
		"iso": "GM-L"
	},
	{
		"name": "North Bank",
		"iso": "GM-N"
	},
	{
		"name": "Upper River",
		"iso": "GM-U"
	},
	{
		"name": "Western",
		"iso": "GM-W"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "GE",
        "name": "Georgia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Abkhazia",
		"iso": "GE-AB"
	},
	{
		"name": "Ajaria",
		"iso": "GE-AJ"
	},
	{
		"name": "Guria",
		"iso": "GE-GU"
	},
	{
		"name": "Imereti",
		"iso": "GE-IM"
	},
	{
		"name": "K'akheti",
		"iso": "GE-KA"
	},
	{
		"name": "Kvemo Kartli",
		"iso": "GE-KK"
	},
	{
		"name": "Mtskheta-Mtianeti",
		"iso": "GE-MM"
	},
	{
		"name": "Rach'a-Lechkhumi-Kvemo Svaneti",
		"iso": "GE-RL"
	},
	{
		"name": "Samegrelo-Zemo Svaneti",
		"iso": "GE-SZ"
	},
	{
		"name": "Samtskhe-Javakheti",
		"iso": "GE-SJ"
	},
	{
		"name": "Shida Kartli",
		"iso": "GE-SK"
	},
	{
		"name": "Tbilisi",
		"iso": "GE-TB"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "DE",
        "name": "Germany",
        "hasPostalCodes": true,
        "states": [{
		"name": "Baden-W?rttemberg",
		"iso": "DE-BW"
	},
	{
		"name": "Bayern",
		"iso": "DE-BY"
	},
	{
		"name": "Berlin",
		"iso": "DE-BE"
	},
	{
		"name": "Brandenburg",
		"iso": "DE-BB"
	},
	{
		"name": "Bremen",
		"iso": "DE-HB"
	},
	{
		"name": "Hamburg",
		"iso": "DE-HH"
	},
	{
		"name": "Hessen",
		"iso": "DE-HE"
	},
	{
		"name": "Mecklenburg-Vorpommern",
		"iso": "DE-MV"
	},
	{
		"name": "Niedersachsen",
		"iso": "DE-NI"
	},
	{
		"name": "Nordrhein-Westfalen",
		"iso": "DE-NW"
	},
	{
		"name": "Rheinland-Pfalz",
		"iso": "DE-RP"
	},
	{
		"name": "Saarland",
		"iso": "DE-SL"
	},
	{
		"name": "Sachsen",
		"iso": "DE-SN"
	},
	{
		"name": "Sachsen-Anhalt",
		"iso": "DE-ST"
	},
	{
		"name": "Schleswig-Holstein",
		"iso": "DE-SH"
	},
	{
		"name": "Th?ringen",
		"iso": "DE-TH"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "GH",
        "name": "Ghana",
        "hasPostalCodes": false,
        "states": [{
		"name": "Ashanti",
		"iso": "GH-AH"
	},
	{
		"name": "Brong-Ahafo",
		"iso": "GH-BA"
	},
	{
		"name": "Central",
		"iso": "GH-CP"
	},
	{
		"name": "Eastern",
		"iso": "GH-EP"
	},
	{
		"name": "Greater Accra",
		"iso": "GH-AA"
	},
	{
		"name": "Northern",
		"iso": "GH-NP"
	},
	{
		"name": "Upper East",
		"iso": "GH-UE"
	},
	{
		"name": "Upper West",
		"iso": "GH-UW"
	},
	{
		"name": "Volta",
		"iso": "GH-TV"
	},
	{
		"name": "Western",
		"iso": "GH-WP"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "GI",
        "name": "Gibraltar",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(GX11 1AA)$"
    },
    {
        "region": "Europe",
        "iso": "GR",
        "name": "Greece",
        "hasPostalCodes": true,
        "states": [
	{
		"name": "Anatoliki Makedonia kai Thraki",
		"iso": "GR-A"
	},
	{
		"name": "Attiki",
		"iso": "GR-I"
	},
	{
		"name": "Dytiki Ellada",
		"iso": "GR-G"
	},
	{
		"name": "Dytiki Makedonia",
		"iso": "GR-C"
	},
	{
		"name": "Ionia Nisia",
		"iso": "GR-F"
	},
	{
		"name": "Ipeiros",
		"iso": "GR-D"
	},
	{
		"name": "Kentriki Makedonia",
		"iso": "GR-B"
	},
	{
		"name": "Kriti",
		"iso": "GR-M"
	},
	{
		"name": "Notio Aigaio",
		"iso": "GR-L"
	},
	{
		"name": "Peloponnisos",
		"iso": "GR-J"
	},
	{
		"name": "Sterea Ellada",
		"iso": "GR-H"
	},
	{
		"name": "Thessalia",
		"iso": "GR-E"
	},
	{
		"name": "Voreio Aigaio",
		"iso": "GR-K"
	}],
        "zipRegex": "^(\\d{3}) \\d{2}$"
    },
    {
        "region": "Americas",
        "iso": "GL",
        "name": "Greenland",
        "hasPostalCodes": true,
        "states": [{
		"name": "Kommune Kujalleq",
		"iso": "GL-KU"
	},
	{
		"name": "Kommuneqarfik Sermersooq",
		"iso": "GL-SM"
	},
	{
		"name": "Qaasuitsup Kommunia",
		"iso": "GL-QA"
	},
	{
		"name": "Qeqqata Kommunia",
		"iso": "GL-QE"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "GD",
        "name": "Grenada",
        "hasPostalCodes": false,
        "states": [{
		"name": "Saint Andrew",
		"iso": "GD-01"
	},
	{
		"name": "Saint David",
		"iso": "GD-02"
	},
	{
		"name": "Saint George",
		"iso": "GD-03"
	},
	{
		"name": "Saint John",
		"iso": "GD-04"
	},
	{
		"name": "Saint Mark",
		"iso": "GD-05"
	},
	{
		"name": "Saint Patrick",
		"iso": "GD-06"
	},
	{
		"name": "Southern Grenadine Islands",
		"iso": "GD-10"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "GP",
        "name": "Guadeloupe",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((971)[0-9][0-0])$"
    },
    {
        "region": "Oceania",
        "iso": "GU",
        "name": "Guam",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((969)[1-3][0-2])$"
    },
    {
        "region": "Americas",
        "iso": "GT",
        "name": "Guatemala",
        "hasPostalCodes": true,
        "states": [{
		"name": "Alta Verapaz",
		"iso": "GT-AV"
	},
	{
		"name": "Baja Verapaz",
		"iso": "GT-BV"
	},
	{
		"name": "Chimaltenango",
		"iso": "GT-CM"
	},
	{
		"name": "Chiquimula",
		"iso": "GT-CQ"
	},
	{
		"name": "El Progreso",
		"iso": "GT-PR"
	},
	{
		"name": "Escuintla",
		"iso": "GT-ES"
	},
	{
		"name": "Guatemala",
		"iso": "GT-GU"
	},
	{
		"name": "Huehuetenango",
		"iso": "GT-HU"
	},
	{
		"name": "Izabal",
		"iso": "GT-IZ"
	},
	{
		"name": "Jalapa",
		"iso": "GT-JA"
	},
	{
		"name": "Jutiapa",
		"iso": "GT-JU"
	},
	{
		"name": "Pet?n",
		"iso": "GT-PE"
	},
	{
		"name": "Quetzaltenango",
		"iso": "GT-QZ"
	},
	{
		"name": "Quich?",
		"iso": "GT-QC"
	},
	{
		"name": "Retalhuleu",
		"iso": "GT-RE"
	},
	{
		"name": "Sacatep?quez",
		"iso": "GT-SA"
	},
	{
		"name": "San Marcos",
		"iso": "GT-SM"
	},
	{
		"name": "Santa Rosa",
		"iso": "GT-SR"
	},
	{
		"name": "Solol?",
		"iso": "GT-SO"
	},
	{
		"name": "Suchitep?quez",
		"iso": "GT-SU"
	},
	{
		"name": "Totonicap?n",
		"iso": "GT-TO"
	},
	{
		"name": "Zacapa",
		"iso": "GT-ZA"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "GG",
        "name": "Guernsey",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "((GY)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
    },
    {
        "region": "Africa",
        "iso": "GN",
        "name": "Guinea",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bok?",
		"iso": "GN-B"
	},
	{
		"name": "Conakry",
		"iso": "GN-C"
	},
	{
		"name": "Faranah",
		"iso": "GN-F"
	},
	{
		"name": "Kankan",
		"iso": "GN-K"
	},
	{
		"name": "Kindia",
		"iso": "GN-D"
	},
	{
		"name": "Lab?",
		"iso": "GN-L"
	},
	{
		"name": "Mamou",
		"iso": "GN-M"
	},
	{
		"name": "Nz?r?kor?",
		"iso": "GN-N"
	}],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "GW",
        "name": "Guinea-Bissau",
        "hasPostalCodes": true,
        "states": [{
		"name": "Leste",
		"iso": "GW-L"
	},
	{
		"name": "Norte",
		"iso": "GW-N"
	},
	{
		"name": "Sul",
		"iso": "GW-S"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "GY",
        "name": "Guyana",
        "hasPostalCodes": false,
        "states": [{
		"name": "Barima-Waini",
		"iso": "GY-BA"
	},
	{
		"name": "Cuyuni-Mazaruni",
		"iso": "GY-CU"
	},
	{
		"name": "Demerara-Mahaica",
		"iso": "GY-DE"
	},
	{
		"name": "East Berbice-Corentyne",
		"iso": "GY-EB"
	},
	{
		"name": "Essequibo Islands-West Demerara",
		"iso": "GY-ES"
	},
	{
		"name": "Mahaica-Berbice",
		"iso": "GY-MA"
	},
	{
		"name": "Pomeroon-Supenaam",
		"iso": "GY-PM"
	},
	{
		"name": "Potaro-Siparuni",
		"iso": "GY-PT"
	},
	{
		"name": "Upper Demerara-Berbice",
		"iso": "GY-UD"
	},
	{
		"name": "Upper Takutu-Upper Essequibo",
		"iso": "GY-UT"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "HT",
        "name": "Haiti",
        "hasPostalCodes": true,
        "states": [{
		"name": "Artibonite",
		"iso": "HT-AR"
	},
	{
		"name": "Centre",
		"iso": "HT-CE"
	},
	{
		"name": "Grande-Anse",
		"iso": "HT-GA"
	},
	{
		"name": "Nippes",
		"iso": "HT-NI"
	},
	{
		"name": "Nord",
		"iso": "HT-ND"
	},
	{
		"name": "Nord-Est",
		"iso": "HT-NE"
	},
	{
		"name": "Nord-Ouest",
		"iso": "HT-NO"
	},
	{
		"name": "Ouest",
		"iso": "HT-OU"
	},
	{
		"name": "Sud",
		"iso": "HT-SD"
	},
	{
		"name": "Sud-Est",
		"iso": "HT-SE"
	}],
        "zipRegex": "^(?:HT)*(\\d{4})$"
    },
    {
        "region": "Antarctica",
        "iso": "HM",
        "name": "Heard Island and McDonald Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(7151)$"
    },
    {
        "region": "Europe",
        "iso": "VA",
        "name": "Holy See (Vatican City State)",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": -120
    },
    {
        "region": "Americas",
        "iso": "HN",
        "name": "Honduras",
        "hasPostalCodes": true,
        "states": [{
		"name": "Atl?ntida",
		"iso": "HN-AT"
	},
	{
		"name": "Choluteca",
		"iso": "HN-CH"
	},
	{
		"name": "Col?n",
		"iso": "HN-CL"
	},
	{
		"name": "Comayagua",
		"iso": "HN-CM"
	},
	{
		"name": "Cop?n",
		"iso": "HN-CP"
	},
	{
		"name": "Cort?s",
		"iso": "HN-CR"
	},
	{
		"name": "El Para?so",
		"iso": "HN-EP"
	},
	{
		"name": "Francisco Moraz?n",
		"iso": "HN-FM"
	},
	{
		"name": "Gracias a Dios",
		"iso": "HN-GD"
	},
	{
		"name": "Intibuc?",
		"iso": "HN-IN"
	},
	{
		"name": "Islas de la Bah?a",
		"iso": "HN-IB"
	},
	{
		"name": "La Paz",
		"iso": "HN-LP"
	},
	{
		"name": "Lempira",
		"iso": "HN-LE"
	},
	{
		"name": "Ocotepeque",
		"iso": "HN-OC"
	},
	{
		"name": "Olancho",
		"iso": "HN-OL"
	},
	{
		"name": "Santa B?rbara",
		"iso": "HN-SB"
	},
	{
		"name": "Valle",
		"iso": "HN-VA"
	},
	{
		"name": "Yoro",
		"iso": "HN-YO"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "HK",
        "name": "Hong Kong",
        "hasPostalCodes": false,
        "states": [{"name": "Hong Kong Island", "iso": "HONG KONG"},
	{"name": "Kowloon", "iso": "KOWLOON"},
	{"name": "New Territories", "iso": "NEW TERRITORIES"}],
        "zipRegex": "^(999077)$"
    },
    {
        "region": "Europe",
        "iso": "HU",
        "name": "Hungary",
        "hasPostalCodes": true,
        "states": [{
		"name": "Baranya",
		"iso": "HU-BA"
	},
	{
		"name": "Borsod-Aba?j-Zempl?n",
		"iso": "HU-BZ"
	},
	{
		"name": "Budapest",
		"iso": "HU-BU"
	},
	{
		"name": "B?cs-Kiskun",
		"iso": "HU-BK"
	},
	{
		"name": "B?k?s",
		"iso": "HU-BE"
	},
	{
		"name": "B?k?scsaba",
		"iso": "HU-BC"
	},
	{
		"name": "Csongr?d",
		"iso": "HU-CS"
	},
	{
		"name": "Debrecen",
		"iso": "HU-DE"
	},
	{
		"name": "Duna?jv?ros",
		"iso": "HU-DU"
	},
	{
		"name": "Eger",
		"iso": "HU-EG"
	},
	{
		"name": "Fej?r",
		"iso": "HU-FE"
	},
	{
		"name": "Gy?r",
		"iso": "HU-GY"
	},
	{
		"name": "Gy?r-Moson-Sopron",
		"iso": "HU-GS"
	},
	{
		"name": "Hajd?-Bihar",
		"iso": "HU-HB"
	},
	{
		"name": "Heves",
		"iso": "HU-HE"
	},
	{
		"name": "H?dmez?v?s?rhely",
		"iso": "HU-HV"
	},
	{
		"name": "J?sz-Nagykun-Szolnok",
		"iso": "HU-JN"
	},
	{
		"name": "Kaposv?r",
		"iso": "HU-KV"
	},
	{
		"name": "Kecskem?t",
		"iso": "HU-KM"
	},
	{
		"name": "Kom?rom-Esztergom",
		"iso": "HU-KE"
	},
	{
		"name": "Miskolc",
		"iso": "HU-MI"
	},
	{
		"name": "Nagykanizsa",
		"iso": "HU-NK"
	},
	{
		"name": "Ny?regyh?za",
		"iso": "HU-NY"
	},
	{
		"name": "N?gr?d",
		"iso": "HU-NO"
	},
	{
		"name": "Pest",
		"iso": "HU-PE"
	},
	{
		"name": "P?cs",
		"iso": "HU-PS"
	},
	{
		"name": "Salg?tarj?n",
		"iso": "HU-ST"
	},
	{
		"name": "Somogy",
		"iso": "HU-SO"
	},
	{
		"name": "Sopron",
		"iso": "HU-SN"
	},
	{
		"name": "Szabolcs-Szatm?r-Bereg",
		"iso": "HU-SZ"
	},
	{
		"name": "Szeged",
		"iso": "HU-SD"
	},
	{
		"name": "Szeksz?rd",
		"iso": "HU-SS"
	},
	{
		"name": "Szolnok",
		"iso": "HU-SK"
	},
	{
		"name": "Szombathely",
		"iso": "HU-SH"
	},
	{
		"name": "Sz?kesfeh?rv?r",
		"iso": "HU-SF"
	},
	{
		"name": "Tatab?nya",
		"iso": "HU-TB"
	},
	{
		"name": "Tolna",
		"iso": "HU-TO"
	},
	{
		"name": "Vas",
		"iso": "HU-VA"
	},
	{
		"name": "Veszpr?m",
		"iso": "HU-VE"
	},
	{
		"name": "Veszpr?m",
		"iso": "HU-VM"
	},
	{
		"name": "Zala",
		"iso": "HU-ZA"
	},
	{
		"name": "Zalaegerszeg",
		"iso": "HU-ZE"
	},
	{
		"name": "?rd",
		"iso": "HU-ER"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "IS",
        "name": "Iceland",
        "hasPostalCodes": true,
        "states": [
	{
		"name": "Austurland",
		"iso": "IS-7"
	},
	{
		"name": "H?fu?borgarsv??i utan Reykjav?kur",
		"iso": "IS-1"
	},
	{
		"name": "Nor?urland eystra",
		"iso": "IS-6"
	},
	{
		"name": "Nor?urland vestra",
		"iso": "IS-5"
	},
	{
		"name": "Reykjav?k",
		"iso": "IS-0"
	},
	{
		"name": "Su?urland",
		"iso": "IS-8"
	},
	{
		"name": "Su?urnes",
		"iso": "IS-2"
	},
	{
		"name": "Vestfir?ir",
		"iso": "IS-4"
	},
	{
		"name": "Vesturland",
		"iso": "IS-3"
	}],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Asia",
        "iso": "IN",
        "name": "India",
        "hasPostalCodes": true,
        "states": [{
		"name": "Andaman and Nicobar Islands",
		"iso": "IN-AN"
	},
	{
		"name": "Chandigarh",
		"iso": "IN-CH"
	},
	{
		"name": "Dadra and Nagar Haveli",
		"iso": "IN-DN"
	},
	{
		"name": "Daman and Diu",
		"iso": "IN-DD"
	},
	{
		"name": "Delhi",
		"iso": "IN-DL"
	},
	{
		"name": "Lakshadweep",
		"iso": "IN-LD"
	},
	{
		"name": "Puducherry",
		"iso": "IN-PY"
	},
	{
		"name": "Andhra Pradesh",
		"iso": "IN-AP"
	},
	{
		"name": "Arunachal Pradesh",
		"iso": "IN-AR"
	},
	{
		"name": "Assam",
		"iso": "IN-AS"
	},
	{
		"name": "Bihar",
		"iso": "IN-BR"
	},
	{
		"name": "Chhattisgarh",
		"iso": "IN-CT"
	},
	{
		"name": "Goa",
		"iso": "IN-GA"
	},
	{
		"name": "Gujarat",
		"iso": "IN-GJ"
	},
	{
		"name": "Haryana",
		"iso": "IN-HR"
	},
	{
		"name": "Himachal Pradesh",
		"iso": "IN-HP"
	},
	{
		"name": "Jammu and Kashmir",
		"iso": "IN-JK"
	},
	{
		"name": "Jharkhand",
		"iso": "IN-JH"
	},
	{
		"name": "Karnataka",
		"iso": "IN-KA"
	},
	{
		"name": "Kerala",
		"iso": "IN-KL"
	},
	{
		"name": "Madhya Pradesh",
		"iso": "IN-MP"
	},
	{
		"name": "Maharashtra",
		"iso": "IN-MH"
	},
	{
		"name": "Manipur",
		"iso": "IN-MN"
	},
	{
		"name": "Meghalaya",
		"iso": "IN-ML"
	},
	{
		"name": "Mizoram",
		"iso": "IN-MZ"
	},
	{
		"name": "Nagaland",
		"iso": "IN-NL"
	},
	{
		"name": "Odisha",
		"iso": "IN-OR"
	},
	{
		"name": "Punjab",
		"iso": "IN-PB"
	},
	{
		"name": "Rajasthan",
		"iso": "IN-RJ"
	},
	{
		"name": "Sikkim",
		"iso": "IN-SK"
	},
	{
		"name": "Tamil Nadu",
		"iso": "IN-TN"
	},
	{
		"name": "Telangana",
		"iso": "IN-TG"
	},
	{
		"name": "Tripura",
		"iso": "IN-TR"
	},
	{
		"name": "Uttar Pradesh",
		"iso": "IN-UP"
	},
	{
		"name": "Uttarakhand",
		"iso": "IN-UT"
	},
	{
		"name": "West Bengal",
		"iso": "IN-WB"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Asia",
        "iso": "ID",
        "name": "Indonesia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Jawa",
		"iso": "ID-JW"
	},
	{
		"name": "Kalimantan",
		"iso": "ID-KA"
	},
	{
		"name": "Maluku",
		"iso": "ID-ML"
	},
	{
		"name": "Nusa Tenggara",
		"iso": "ID-NU"
	},
	{
		"name": "Papua",
		"iso": "ID-PP"
	},
	{
		"name": "Sulawesi",
		"iso": "ID-SL"
	},
	{
		"name": "Sumatera",
		"iso": "ID-SM"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "IR",
        "name": "Iran, Islamic Republic of",
        "hasPostalCodes": true,
        "states": [{
		"name": "Alborz",
		"iso": "IR-32"
	},
	{
		"name": "Ardab?l",
		"iso": "IR-03"
	},
	{
		"name": "B?shehr",
		"iso": "IR-06"
	},
	{
		"name": "Chah?r Ma??ll va Bakht??r?",
		"iso": "IR-08"
	},
	{
		"name": "E?fah?n",
		"iso": "IR-04"
	},
	{
		"name": "F?rs",
		"iso": "IR-14"
	},
	{
		"name": "Golest?n",
		"iso": "IR-27"
	},
	{
		"name": "G?l?n",
		"iso": "IR-19"
	},
	{
		"name": "Hamad?n",
		"iso": "IR-24"
	},
	{
		"name": "Hormozg?n",
		"iso": "IR-23"
	},
	{
		"name": "Kerm?n",
		"iso": "IR-15"
	},
	{
		"name": "Kerm?nsh?h",
		"iso": "IR-17"
	},
	{
		"name": "Khor?s?n-e Jan?b?",
		"iso": "IR-29"
	},
	{
		"name": "Khor?s?n-e Razav?",
		"iso": "IR-30"
	},
	{
		"name": "Khor?s?n-e Shem?l?",
		"iso": "IR-31"
	},
	{
		"name": "Kh?zest?n",
		"iso": "IR-10"
	},
	{
		"name": "Kohg?l?yeh va B?yer A?mad",
		"iso": "IR-18"
	},
	{
		"name": "Kordest?n",
		"iso": "IR-16"
	},
	{
		"name": "Lorest?n",
		"iso": "IR-20"
	},
	{
		"name": "Markaz?",
		"iso": "IR-22"
	},
	{
		"name": "M?zandar?n",
		"iso": "IR-21"
	},
	{
		"name": "Qazv?n",
		"iso": "IR-28"
	},
	{
		"name": "Qom",
		"iso": "IR-26"
	},
	{
		"name": "Semn?n",
		"iso": "IR-12"
	},
	{
		"name": "S?st?n va Bal?chest?n",
		"iso": "IR-13"
	},
	{
		"name": "Tehr?n",
		"iso": "IR-07"
	},
	{
		"name": "Yazd",
		"iso": "IR-25"
	},
	{
		"name": "Zanj?n",
		"iso": "IR-11"
	},
	{
		"name": "?z?arb?yj?n-e Gharb?",
		"iso": "IR-02"
	},
	{
		"name": "?z?arb?yj?n-e Sharq?",
		"iso": "IR-01"
	},
	{
		"name": "?l?m",
		"iso": "IR-05"
	}],
        "zipRegex": "^\\d{5}([\\-]\\d{5})?$"
    },
    {
        "region": "Asia",
        "iso": "IQ",
        "name": "Iraq",
        "hasPostalCodes": true,
        "states": [{
		"name": "Al Anb?r",
		"iso": "IQ-AN"
	},
	{
		"name": "Al Ba?rah",
		"iso": "IQ-BA"
	},
	{
		"name": "Al Muthann?",
		"iso": "IQ-MU"
	},
	{
		"name": "Al Q?dis?yah",
		"iso": "IQ-QA"
	},
	{
		"name": "An Najaf",
		"iso": "IQ-NA"
	},
	{
		"name": "Arb?l",
		"iso": "IQ-AR"
	},
	{
		"name": "As Sulaym?n?yah",
		"iso": "IQ-SU"
	},
	{
		"name": "At Ta'm?m",
		"iso": "IQ-TS"
	},
	{
		"name": "Baghd?d",
		"iso": "IQ-BG"
	},
	{
		"name": "B?bil",
		"iso": "IQ-BB"
	},
	{
		"name": "Dah?k",
		"iso": "IQ-DA"
	},
	{
		"name": "Dh? Q?r",
		"iso": "IQ-DQ"
	},
	{
		"name": "Diy?l?",
		"iso": "IQ-DI"
	},
	{
		"name": "Karbal?'",
		"iso": "IQ-KA"
	},
	{
		"name": "Mays?n",
		"iso": "IQ-MA"
	},
	{
		"name": "N?naw?",
		"iso": "IQ-NI"
	},
	{
		"name": "W?si?",
		"iso": "IQ-WA"
	},
	{
		"name": "?al?? ad D?n",
		"iso": "IQ-SD"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "IE",
        "name": "Ireland",
        "hasPostalCodes": true,
        "states": [{
		"name": "Connaught",
		"iso": "IE-C"
	},
	{
		"name": "Leinster",
		"iso": "IE-L"
	},
	{
		"name": "Munster",
		"iso": "IE-M"
	},
	{
		"name": "Ulster",
		"iso": "IE-U"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "IM",
        "name": "Isle of Man",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "((IM)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
    },
    {
        "region": "Asia",
        "iso": "IL",
        "name": "Israel",
        "hasPostalCodes": true,
        "states": [{
		"name": "HaDarom",
		"iso": "IL-D"
	},
	{
		"name": "HaMerkaz",
		"iso": "IL-M"
	},
	{
		"name": "HaTsafon",
		"iso": "IL-Z"
	},
	{
		"name": "H?efa",
		"iso": "IL-HA"
	},
	{
		"name": "Tel-Aviv",
		"iso": "IL-TA"
	},
	{
		"name": "Yerushalayim",
		"iso": "IL-JM"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "IT",
        "name": "Italy",
        "hasPostalCodes": true,
        "states": [{
		"name": "Abruzzo",
		"iso": "IT-65"
	},
	{
		"name": "Basilicata",
		"iso": "IT-77"
	},
	{
		"name": "Calabria",
		"iso": "IT-78"
	},
	{
		"name": "Campania",
		"iso": "IT-72"
	},
	{
		"name": "Emilia-Romagna",
		"iso": "IT-45"
	},
	{
		"name": "Friuli-Venezia Giulia",
		"iso": "IT-36"
	},
	{
		"name": "Lazio",
		"iso": "IT-62"
	},
	{
		"name": "Liguria",
		"iso": "IT-42"
	},
	{
		"name": "Lombardia",
		"iso": "IT-25"
	},
	{
		"name": "Marche",
		"iso": "IT-57"
	},
	{
		"name": "Molise",
		"iso": "IT-67"
	},
	{
		"name": "Piemonte",
		"iso": "IT-21"
	},
	{
		"name": "Puglia",
		"iso": "IT-75"
	},
	{
		"name": "Sardegna",
		"iso": "IT-88"
	},
	{
		"name": "Sicilia",
		"iso": "IT-82"
	},
	{
		"name": "Toscana",
		"iso": "IT-52"
	},
	{
		"name": "Trentino-Alto Adige",
		"iso": "IT-32"
	},
	{
		"name": "Umbria",
		"iso": "IT-55"
	},
	{
		"name": "Valle d'Aosta",
		"iso": "IT-23"
	},
	{
		"name": "Veneto",
		"iso": "IT-34"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "JM",
        "name": "Jamaica",
        "hasPostalCodes": false,
        "states": [{
		"name": "Clarendon",
		"iso": "JM-13"
	},
	{
		"name": "Hanover",
		"iso": "JM-09"
	},
	{
		"name": "Kingston",
		"iso": "JM-01"
	},
	{
		"name": "Manchester",
		"iso": "JM-12"
	},
	{
		"name": "Portland",
		"iso": "JM-04"
	},
	{
		"name": "Saint Andrew",
		"iso": "JM-02"
	},
	{
		"name": "Saint Ann",
		"iso": "JM-06"
	},
	{
		"name": "Saint Catherine",
		"iso": "JM-14"
	},
	{
		"name": "Saint Elizabeth",
		"iso": "JM-11"
	},
	{
		"name": "Saint James",
		"iso": "JM-08"
	},
	{
		"name": "Saint Mary",
		"iso": "JM-05"
	},
	{
		"name": "Saint Thomas",
		"iso": "JM-03"
	},
	{
		"name": "Trelawny",
		"iso": "JM-07"
	},
	{
		"name": "Westmoreland",
		"iso": "JM-10"
	}],
        "zipRegex": "^((JM)[A-Z]{3,3}\\d{2,2})$"
    },
    {
        "region": "Asia",
        "iso": "JP",
        "name": "Japan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Aiti",
		"iso": "JP-23"
	},
	{
		"name": "Akita",
		"iso": "JP-05"
	},
	{
		"name": "Aomori",
		"iso": "JP-02"
	},
	{
		"name": "Ehime",
		"iso": "JP-38"
	},
	{
		"name": "Gihu",
		"iso": "JP-21"
	},
	{
		"name": "Gunma",
		"iso": "JP-10"
	},
	{
		"name": "Hirosima",
		"iso": "JP-34"
	},
	{
		"name": "Hokkaid?",
		"iso": "JP-01"
	},
	{
		"name": "Hukui",
		"iso": "JP-18"
	},
	{
		"name": "Hukuoka",
		"iso": "JP-40"
	},
	{
		"name": "Hukusima",
		"iso": "JP-07"
	},
	{
		"name": "Hy?go",
		"iso": "JP-28"
	},
	{
		"name": "Ibaraki",
		"iso": "JP-08"
	},
	{
		"name": "Isikawa",
		"iso": "JP-17"
	},
	{
		"name": "Iwate",
		"iso": "JP-03"
	},
	{
		"name": "Kagawa",
		"iso": "JP-37"
	},
	{
		"name": "Kagosima",
		"iso": "JP-46"
	},
	{
		"name": "Kanagawa",
		"iso": "JP-14"
	},
	{
		"name": "Kumamoto",
		"iso": "JP-43"
	},
	{
		"name": "Ky?to",
		"iso": "JP-26"
	},
	{
		"name": "K?ti",
		"iso": "JP-39"
	},
	{
		"name": "Mie",
		"iso": "JP-24"
	},
	{
		"name": "Miyagi",
		"iso": "JP-04"
	},
	{
		"name": "Miyazaki",
		"iso": "JP-45"
	},
	{
		"name": "Nagano",
		"iso": "JP-20"
	},
	{
		"name": "Nagasaki",
		"iso": "JP-42"
	},
	{
		"name": "Nara",
		"iso": "JP-29"
	},
	{
		"name": "Niigata",
		"iso": "JP-15"
	},
	{
		"name": "Okayama",
		"iso": "JP-33"
	},
	{
		"name": "Okinawa",
		"iso": "JP-47"
	},
	{
		"name": "Saga",
		"iso": "JP-41"
	},
	{
		"name": "Saitama",
		"iso": "JP-11"
	},
	{
		"name": "Siga",
		"iso": "JP-25"
	},
	{
		"name": "Simane",
		"iso": "JP-32"
	},
	{
		"name": "Sizuoka",
		"iso": "JP-22"
	},
	{
		"name": "Tiba",
		"iso": "JP-12"
	},
	{
		"name": "Tokusima",
		"iso": "JP-36"
	},
	{
		"name": "Totigi",
		"iso": "JP-09"
	},
	{
		"name": "Tottori",
		"iso": "JP-31"
	},
	{
		"name": "Toyama",
		"iso": "JP-16"
	},
	{
		"name": "T?ky?",
		"iso": "JP-13"
	},
	{
		"name": "Wakayama",
		"iso": "JP-30"
	},
	{
		"name": "Yamagata",
		"iso": "JP-06"
	},
	{
		"name": "Yamaguti",
		"iso": "JP-35"
	},
	{
		"name": "Yamanasi",
		"iso": "JP-19"
	},
	{
		"name": "?ita",
		"iso": "JP-44"
	},
	{
		"name": "?saka",
		"iso": "JP-27"
	}],
        "zipRegex": "^(\\d{3}-\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "JE",
        "name": "Jersey",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "(JE)([0-9]\\d{1})"
    },
    {
        "region": "Asia",
        "iso": "JO",
        "name": "Jordan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Al Balq?'",
		"iso": "JO-BA"
	},
	{
		"name": "Al ?Aqabah",
		"iso": "JO-AQ"
	},
	{
		"name": "Az Zarq?'",
		"iso": "JO-AZ"
	},
	{
		"name": "A? ?af?lah",
		"iso": "JO-AT"
	},
	{
		"name": "Irbid",
		"iso": "JO-IR"
	},
	{
		"name": "Jerash",
		"iso": "JO-JA"
	},
	{
		"name": "Karak",
		"iso": "JO-KA"
	},
	{
		"name": "Ma'?n",
		"iso": "JO-MN"
	},
	{
		"name": "Mafraq",
		"iso": "JO-MA"
	},
	{
		"name": "M?dab?",
		"iso": "JO-MD"
	},
	{
		"name": "?Ajl?n",
		"iso": "JO-AJ"
	},
	{
		"name": "‘Amm?n",
		"iso": "JO-AM"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "KZ",
        "name": "Kazakhstan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Almaty",
		"iso": "KZ-ALA"
	},
	{
		"name": "Almaty oblysy",
		"iso": "KZ-ALM"
	},
	{
		"name": "Aqmola oblysy",
		"iso": "KZ-AKM"
	},
	{
		"name": "Aqt?be oblysy",
		"iso": "KZ-AKT"
	},
	{
		"name": "Astana",
		"iso": "KZ-AST"
	},
	{
		"name": "Atyra? oblysy",
		"iso": "KZ-ATY"
	},
	{
		"name": "Batys Qazaqstan oblysy",
		"iso": "KZ-ZAP"
	},
	{
		"name": "Mangghysta? oblysy",
		"iso": "KZ-MAN"
	},
	{
		"name": "Ongt?stik Qazaqstan oblysy",
		"iso": "KZ-YUZ"
	},
	{
		"name": "Pavlodar oblysy",
		"iso": "KZ-PAV"
	},
	{
		"name": "Qaraghandy oblysy",
		"iso": "KZ-KAR"
	},
	{
		"name": "Qostanay oblysy",
		"iso": "KZ-KUS"
	},
	{
		"name": "Qyzylorda oblysy",
		"iso": "KZ-KZY"
	},
	{
		"name": "Shyghys Qazaqstan oblysy",
		"iso": "KZ-VOS"
	},
	{
		"name": "Solt?stik Qazaqstan oblysy",
		"iso": "KZ-SEV"
	},
	{
		"name": "Zhambyl oblysy",
		"iso": "KZ-ZHA"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Africa",
        "iso": "KE",
        "name": "Kenya",
        "hasPostalCodes": false,
        "states": [{
		"name": "Central",
		"iso": "KE-200"
	},
	{
		"name": "Coast",
		"iso": "KE-300"
	},
	{
		"name": "Eastern",
		"iso": "KE-400"
	},
	{
		"name": "Nairobi",
		"iso": "KE-110"
	},
	{
		"name": "North-Eastern",
		"iso": "KE-500"
	},
	{
		"name": "Nyanza",
		"iso": "KE-600"
	},
	{
		"name": "Rift Valley",
		"iso": "KE-700"
	},
	{
		"name": "Western",
		"iso": "KE-800"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "KI",
        "name": "Kiribati",
        "hasPostalCodes": false,
        "states": [{
		"name": "Gilbert Islands",
		"iso": "KI-G"
	},
	{
		"name": "Line Islands",
		"iso": "KI-L"
	},
	{
		"name": "Phoenix Islands",
		"iso": "KI-P"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "KP",
        "name": "Korea, Democratic People's Republic of",
        "hasPostalCodes": false,
        "states": [{
		"name": "Chagang",
		"iso": "KP-04"
	},
	{
		"name": "Kangwon",
		"iso": "KP-07"
	},
	{
		"name": "North Hamgyong",
		"iso": "KP-09"
	},
	{
		"name": "North Hwanghae",
		"iso": "KP-06"
	},
	{
		"name": "North Pyongan",
		"iso": "KP-03"
	},
	{
		"name": "Pyongyang",
		"iso": "KP-01"
	},
	{
		"name": "Rason",
		"iso": "KP-13"
	},
	{
		"name": "Ryanggang",
		"iso": "KP-10"
	},
	{
		"name": "South Hamgyong",
		"iso": "KP-08"
	},
	{
		"name": "South Hwanghae",
		"iso": "KP-05"
	},
	{
		"name": "South Pyongan",
		"iso": "KP-02"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "KR",
        "name": "Korea, Republic of",
        "hasPostalCodes": true,
        "states": [{
		"name": "Busan-gwangyeoksi",
		"iso": "KR-26"
	},
	{
		"name": "Chungcheongbuk-do",
		"iso": "KR-43"
	},
	{
		"name": "Chungcheongnam-do",
		"iso": "KR-44"
	},
	{
		"name": "Daegu-gwangyeoksi",
		"iso": "KR-27"
	},
	{
		"name": "Daejeon-gwangyeoksi",
		"iso": "KR-30"
	},
	{
		"name": "Gangwon-do",
		"iso": "KR-42"
	},
	{
		"name": "Gwangju-gwangyeoksi",
		"iso": "KR-29"
	},
	{
		"name": "Gyeonggi-do",
		"iso": "KR-41"
	},
	{
		"name": "Gyeongsangbuk-do",
		"iso": "KR-47"
	},
	{
		"name": "Gyeongsangnam-do",
		"iso": "KR-48"
	},
	{
		"name": "Incheon-gwangyeoksi",
		"iso": "KR-28"
	},
	{
		"name": "Jeju-teukbyeoljachido",
		"iso": "KR-49"
	},
	{
		"name": "Jeollabuk-do",
		"iso": "KR-45"
	},
	{
		"name": "Jeollanam-do",
		"iso": "KR-46"
	},
	{
		"name": "Sejong",
		"iso": "KR-50"
	},
	{
		"name": "Seoul-teukbyeolsi",
		"iso": "KR-11"
	},
	{
		"name": "Ulsan-gwangyeoksi",
		"iso": "KR-31"
	}],
        "zipRegex": "^(\\d{3}[-]\\d{3})$"
    },
    {
        "region": "Asia",
        "iso": "KW",
        "name": "Kuwait",
        "hasPostalCodes": true,
        "states": [{
		"name": "Al A?madi",
		"iso": "KW-AH"
	},
	{
		"name": "Al Farw?n?yah",
		"iso": "KW-FA"
	},
	{
		"name": "Al Jahr?’",
		"iso": "KW-JA"
	},
	{
		"name": "Al Kuwayt",
		"iso": "KW-KU"
	},
	{
		"name": "Mub?rak al Kab?r",
		"iso": "KW-MU"
	},
	{
		"name": "?awall?",
		"iso": "KW-HA"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "KG",
        "name": "Kyrgyzstan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Batken",
		"iso": "KG-B"
	},
	{
		"name": "Bishkek",
		"iso": "KG-GB"
	},
	{
		"name": "Ch?",
		"iso": "KG-C"
	},
	{
		"name": "Jalal-Abad",
		"iso": "KG-J"
	},
	{
		"name": "Naryn",
		"iso": "KG-N"
	},
	{
		"name": "Osh",
		"iso": "KG-O"
	},
	{
		"name": "Talas",
		"iso": "KG-T"
	},
	{
		"name": "Ysyk-K?l",
		"iso": "KG-Y"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Asia",
        "iso": "LA",
        "name": "Lao People's Democratic Republic",
        "hasPostalCodes": true,
        "states": [{
		"name": "Attapu",
		"iso": "LA-AT"
	},
	{
		"name": "Bok?o",
		"iso": "LA-BK"
	},
	{
		"name": "Bolikhamxai",
		"iso": "LA-BL"
	},
	{
		"name": "Champasak",
		"iso": "LA-CH"
	},
	{
		"name": "Houaphan",
		"iso": "LA-HO"
	},
	{
		"name": "Khammouan",
		"iso": "LA-KH"
	},
	{
		"name": "Louang Namtha",
		"iso": "LA-LM"
	},
	{
		"name": "Louangphabang",
		"iso": "LA-LP"
	},
	{
		"name": "Oud?mxai",
		"iso": "LA-OU"
	},
	{
		"name": "Ph?ngsali",
		"iso": "LA-PH"
	},
	{
		"name": "Salavan",
		"iso": "LA-SL"
	},
	{
		"name": "Savannakh?t",
		"iso": "LA-SV"
	},
	{
		"name": "Vientiane",
		"iso": "LA-VT"
	},
	{
		"name": "Vientiane",
		"iso": "LA-VI"
	},
	{
		"name": "Xaignabouli",
		"iso": "LA-XA"
	},
	{
		"name": "Xais?mboun",
		"iso": "LA-XN"
	},
	{
		"name": "Xiangkhoang",
		"iso": "LA-XI"
	},
	{
		"name": "X?kong",
		"iso": "LA-XE"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "LV",
        "name": "Latvia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Aglonas novads",
		"iso": "LV-001"
	},
	{
		"name": "Aizkraukles novads",
		"iso": "LV-002"
	},
	{
		"name": "Aizputes novads",
		"iso": "LV-003"
	},
	{
		"name": "Akn?stes novads",
		"iso": "LV-004"
	},
	{
		"name": "Alojas novads",
		"iso": "LV-005"
	},
	{
		"name": "Alsungas novads",
		"iso": "LV-006"
	},
	{
		"name": "Al?ksnes novads",
		"iso": "LV-007"
	},
	{
		"name": "Amatas novads",
		"iso": "LV-008"
	},
	{
		"name": "Apes novads",
		"iso": "LV-009"
	},
	{
		"name": "Auces novads",
		"iso": "LV-010"
	},
	{
		"name": "Bab?tes novads",
		"iso": "LV-012"
	},
	{
		"name": "Baldones novads",
		"iso": "LV-013"
	},
	{
		"name": "Baltinavas novads",
		"iso": "LV-014"
	},
	{
		"name": "Balvu novads",
		"iso": "LV-015"
	},
	{
		"name": "Bauskas novads",
		"iso": "LV-016"
	},
	{
		"name": "Bever?nas novads",
		"iso": "LV-017"
	},
	{
		"name": "Broc?nu novads",
		"iso": "LV-018"
	},
	{
		"name": "Burtnieku novads",
		"iso": "LV-019"
	},
	{
		"name": "Carnikavas novads",
		"iso": "LV-020"
	},
	{
		"name": "Cesvaines novads",
		"iso": "LV-021"
	},
	{
		"name": "Ciblas novads",
		"iso": "LV-023"
	},
	{
		"name": "C?su novads",
		"iso": "LV-022"
	},
	{
		"name": "Dagdas novads",
		"iso": "LV-024"
	},
	{
		"name": "Daugavpils",
		"iso": "LV-DGV"
	},
	{
		"name": "Daugavpils novads",
		"iso": "LV-025"
	},
	{
		"name": "Dobeles novads",
		"iso": "LV-026"
	},
	{
		"name": "Dundagas novads",
		"iso": "LV-027"
	},
	{
		"name": "Durbes novads",
		"iso": "LV-028"
	},
	{
		"name": "Engures novads",
		"iso": "LV-029"
	},
	{
		"name": "Garkalnes novads",
		"iso": "LV-031"
	},
	{
		"name": "Grobi?as novads",
		"iso": "LV-032"
	},
	{
		"name": "Gulbenes novads",
		"iso": "LV-033"
	},
	{
		"name": "Iecavas novads",
		"iso": "LV-034"
	},
	{
		"name": "Ik??iles novads",
		"iso": "LV-035"
	},
	{
		"name": "Il?kstes novads",
		"iso": "LV-036"
	},
	{
		"name": "In?ukalna novads",
		"iso": "LV-037"
	},
	{
		"name": "Jaunjelgavas novads",
		"iso": "LV-038"
	},
	{
		"name": "Jaunpiebalgas novads",
		"iso": "LV-039"
	},
	{
		"name": "Jaunpils novads",
		"iso": "LV-040"
	},
	{
		"name": "Jelgava",
		"iso": "LV-JEL"
	},
	{
		"name": "Jelgavas novads",
		"iso": "LV-041"
	},
	{
		"name": "J?kabpils",
		"iso": "LV-JKB"
	},
	{
		"name": "J?kabpils novads",
		"iso": "LV-042"
	},
	{
		"name": "J?rmala",
		"iso": "LV-JUR"
	},
	{
		"name": "Kandavas novads",
		"iso": "LV-043"
	},
	{
		"name": "Koc?nu novads",
		"iso": "LV-045"
	},
	{
		"name": "Kokneses novads",
		"iso": "LV-046"
	},
	{
		"name": "Krimuldas novads",
		"iso": "LV-048"
	},
	{
		"name": "Krustpils novads",
		"iso": "LV-049"
	},
	{
		"name": "Kr?slavas novads",
		"iso": "LV-047"
	},
	{
		"name": "Kuld?gas novads",
		"iso": "LV-050"
	},
	{
		"name": "K?rsavas novads",
		"iso": "LV-044"
	},
	{
		"name": "Lielv?rdes novads",
		"iso": "LV-053"
	},
	{
		"name": "Liep?ja",
		"iso": "LV-LPX"
	},
	{
		"name": "Limba?u novads",
		"iso": "LV-054"
	},
	{
		"name": "Lub?nas novads",
		"iso": "LV-057"
	},
	{
		"name": "Ludzas novads",
		"iso": "LV-058"
	},
	{
		"name": "L?gatnes novads",
		"iso": "LV-055"
	},
	{
		"name": "L?v?nu novads",
		"iso": "LV-056"
	},
	{
		"name": "Madonas novads",
		"iso": "LV-059"
	},
	{
		"name": "Mazsalacas novads",
		"iso": "LV-060"
	},
	{
		"name": "M?lpils novads",
		"iso": "LV-061"
	},
	{
		"name": "M?rupes novads",
		"iso": "LV-062"
	},
	{
		"name": "M?rsraga novads",
		"iso": "LV-063"
	},
	{
		"name": "Nauk??nu novads",
		"iso": "LV-064"
	},
	{
		"name": "Neretas novads",
		"iso": "LV-065"
	},
	{
		"name": "N?cas novads",
		"iso": "LV-066"
	},
	{
		"name": "Ogres novads",
		"iso": "LV-067"
	},
	{
		"name": "Olaines novads",
		"iso": "LV-068"
	},
	{
		"name": "Ozolnieku novads",
		"iso": "LV-069"
	},
	{
		"name": "Prei?u novads",
		"iso": "LV-073"
	},
	{
		"name": "Priekules novads",
		"iso": "LV-074"
	},
	{
		"name": "Prieku?u novads",
		"iso": "LV-075"
	},
	{
		"name": "P?rgaujas novads",
		"iso": "LV-070"
	},
	{
		"name": "P?vilostas novads",
		"iso": "LV-071"
	},
	{
		"name": "P?avi?u novads",
		"iso": "LV-072"
	},
	{
		"name": "Raunas novads",
		"iso": "LV-076"
	},
	{
		"name": "Riebi?u novads",
		"iso": "LV-078"
	},
	{
		"name": "Rojas novads",
		"iso": "LV-079"
	},
	{
		"name": "Ropa?u novads",
		"iso": "LV-080"
	},
	{
		"name": "Rucavas novads",
		"iso": "LV-081"
	},
	{
		"name": "Rug?ju novads",
		"iso": "LV-082"
	},
	{
		"name": "Rund?les novads",
		"iso": "LV-083"
	},
	{
		"name": "R?zekne",
		"iso": "LV-REZ"
	},
	{
		"name": "R?zeknes novads",
		"iso": "LV-077"
	},
	{
		"name": "R?ga",
		"iso": "LV-RIX"
	},
	{
		"name": "R?jienas novads",
		"iso": "LV-084"
	},
	{
		"name": "Salacgr?vas novads",
		"iso": "LV-086"
	},
	{
		"name": "Salas novads",
		"iso": "LV-085"
	},
	{
		"name": "Salaspils novads",
		"iso": "LV-087"
	},
	{
		"name": "Saldus novads",
		"iso": "LV-088"
	},
	{
		"name": "Saulkrastu novads",
		"iso": "LV-089"
	},
	{
		"name": "Siguldas novads",
		"iso": "LV-091"
	},
	{
		"name": "Skrundas novads",
		"iso": "LV-093"
	},
	{
		"name": "Skr?veru novads",
		"iso": "LV-092"
	},
	{
		"name": "Smiltenes novads",
		"iso": "LV-094"
	},
	{
		"name": "Stopi?u novads",
		"iso": "LV-095"
	},
	{
		"name": "Stren?u novads",
		"iso": "LV-096"
	},
	{
		"name": "S?jas novads",
		"iso": "LV-090"
	},
	{
		"name": "Talsu novads",
		"iso": "LV-097"
	},
	{
		"name": "Tukuma novads",
		"iso": "LV-099"
	},
	{
		"name": "T?rvetes novads",
		"iso": "LV-098"
	},
	{
		"name": "Vai?odes novads",
		"iso": "LV-100"
	},
	{
		"name": "Valkas novads",
		"iso": "LV-101"
	},
	{
		"name": "Valmiera",
		"iso": "LV-VMR"
	},
	{
		"name": "Varak??nu novads",
		"iso": "LV-102"
	},
	{
		"name": "Vecpiebalgas novads",
		"iso": "LV-104"
	},
	{
		"name": "Vecumnieku novads",
		"iso": "LV-105"
	},
	{
		"name": "Ventspils",
		"iso": "LV-VEN"
	},
	{
		"name": "Ventspils novads",
		"iso": "LV-106"
	},
	{
		"name": "Vies?tes novads",
		"iso": "LV-107"
	},
	{
		"name": "Vi?akas novads",
		"iso": "LV-108"
	},
	{
		"name": "Vi??nu novads",
		"iso": "LV-109"
	},
	{
		"name": "V?rkavas novads",
		"iso": "LV-103"
	},
	{
		"name": "Zilupes novads",
		"iso": "LV-110"
	},
	{
		"name": "?da?u novads",
		"iso": "LV-011"
	},
	{
		"name": "?rg?u novads",
		"iso": "LV-030"
	},
	{
		"name": "?eguma novads",
		"iso": "LV-051"
	},
	{
		"name": "?ekavas novads",
		"iso": "LV-052"
	}],
        "zipRegex": "^[L]{1}[V]{1}[-]([0-9]){4}$"
    },
    {
        "region": "Asia",
        "iso": "LB",
        "name": "Lebanon",
        "hasPostalCodes": true,
        "states": [{
		"name": "Aakk?r",
		"iso": "LB-AK"
	},
	{
		"name": "Baalbek-Hermel",
		"iso": "LB-BH"
	},
	{
		"name": "Beyrouth",
		"iso": "LB-BA"
	},
	{
		"name": "B?qaa",
		"iso": "LB-BI"
	},
	{
		"name": "Liban-Nord",
		"iso": "LB-AS"
	},
	{
		"name": "Liban-Sud",
		"iso": "LB-JA"
	},
	{
		"name": "Mont-Liban",
		"iso": "LB-JL"
	},
	{
		"name": "Nabat?y?",
		"iso": "LB-NA"
	}],
        "zipRegex": "^(\\d{4}(\\d{4})?)$"
    },
    {
        "region": "Africa",
        "iso": "LS",
        "name": "Lesotho",
        "hasPostalCodes": true,
        "states": [{
		"name": "Berea",
		"iso": "LS-D"
	},
	{
		"name": "Butha-Buthe",
		"iso": "LS-B"
	},
	{
		"name": "Leribe",
		"iso": "LS-C"
	},
	{
		"name": "Mafeteng",
		"iso": "LS-E"
	},
	{
		"name": "Maseru",
		"iso": "LS-A"
	},
	{
		"name": "Mohale's Hoek",
		"iso": "LS-F"
	},
	{
		"name": "Mokhotlong",
		"iso": "LS-J"
	},
	{
		"name": "Qacha's Nek",
		"iso": "LS-H"
	},
	{
		"name": "Quthing",
		"iso": "LS-G"
	},
	{
		"name": "Thaba-Tseka",
		"iso": "LS-K"
	}],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "LR",
        "name": "Liberia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Bomi",
		"iso": "LR-BM"
	},
	{
		"name": "Bong",
		"iso": "LR-BG"
	},
	{
		"name": "Gbarpolu",
		"iso": "LR-GP"
	},
	{
		"name": "Grand Bassa",
		"iso": "LR-GB"
	},
	{
		"name": "Grand Cape Mount",
		"iso": "LR-CM"
	},
	{
		"name": "Grand Gedeh",
		"iso": "LR-GG"
	},
	{
		"name": "Grand Kru",
		"iso": "LR-GK"
	},
	{
		"name": "Lofa",
		"iso": "LR-LO"
	},
	{
		"name": "Margibi",
		"iso": "LR-MG"
	},
	{
		"name": "Maryland",
		"iso": "LR-MY"
	},
	{
		"name": "Montserrado",
		"iso": "LR-MO"
	},
	{
		"name": "Nimba",
		"iso": "LR-NI"
	},
	{
		"name": "River Gee",
		"iso": "LR-RG"
	},
	{
		"name": "Rivercess",
		"iso": "LR-RI"
	},
	{
		"name": "Sinoe",
		"iso": "LR-SI"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "LY",
        "name": "Libya",
        "hasPostalCodes": true,
        "states": [{
		"name": "Al Bu?n?n",
		"iso": "LY-BU"
	},
	{
		"name": "Al Jabal al Akh?ar",
		"iso": "LY-JA"
	},
	{
		"name": "Al Jabal al Gharb?",
		"iso": "LY-JG"
	},
	{
		"name": "Al Jif?rah",
		"iso": "LY-JI"
	},
	{
		"name": "Al Jufrah",
		"iso": "LY-JU"
	},
	{
		"name": "Al Kufrah",
		"iso": "LY-KF"
	},
	{
		"name": "Al Marj",
		"iso": "LY-MJ"
	},
	{
		"name": "Al Marqab",
		"iso": "LY-MB"
	},
	{
		"name": "Al W???t",
		"iso": "LY-WA"
	},
	{
		"name": "An Nuqa? al Khams",
		"iso": "LY-NQ"
	},
	{
		"name": "Az Z?wiyah",
		"iso": "LY-ZA"
	},
	{
		"name": "Bangh?z?",
		"iso": "LY-BA"
	},
	{
		"name": "Darnah",
		"iso": "LY-DR"
	},
	{
		"name": "Gh?t",
		"iso": "LY-GT"
	},
	{
		"name": "Mi?r?tah",
		"iso": "LY-MI"
	},
	{
		"name": "Murzuq",
		"iso": "LY-MQ"
	},
	{
		"name": "N?l?t",
		"iso": "LY-NL"
	},
	{
		"name": "Sabh?",
		"iso": "LY-SB"
	},
	{
		"name": "Surt",
		"iso": "LY-SR"
	},
	{
		"name": "W?d? al ?ay?t",
		"iso": "LY-WD"
	},
	{
		"name": "W?d? ash Sh??i?",
		"iso": "LY-WS"
	},
	{
		"name": "?ar?bulus",
		"iso": "LY-TB"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "LI",
        "name": "Liechtenstein",
        "hasPostalCodes": true,
        "states": [{
		"name": "Balzers",
		"iso": "LI-01"
	},
	{
		"name": "Eschen",
		"iso": "LI-02"
	},
	{
		"name": "Gamprin",
		"iso": "LI-03"
	},
	{
		"name": "Mauren",
		"iso": "LI-04"
	},
	{
		"name": "Planken",
		"iso": "LI-05"
	},
	{
		"name": "Ruggell",
		"iso": "LI-06"
	},
	{
		"name": "Schaan",
		"iso": "LI-07"
	},
	{
		"name": "Schellenberg",
		"iso": "LI-08"
	},
	{
		"name": "Triesen",
		"iso": "LI-09"
	},
	{
		"name": "Triesenberg",
		"iso": "LI-10"
	},
	{
		"name": "Vaduz",
		"iso": "LI-11"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "LT",
        "name": "Lithuania",
        "hasPostalCodes": true,
        "states": [{
		"name": "Alytaus Apskritis",
		"iso": "LT-AL"
	},
	{
		"name": "Kauno Apskritis",
		"iso": "LT-KU"
	},
	{
		"name": "Klaip?dos Apskritis",
		"iso": "LT-KL"
	},
	{
		"name": "Marijampol?s Apskritis",
		"iso": "LT-MR"
	},
	{
		"name": "Panev??io Apskritis",
		"iso": "LT-PN"
	},
	{
		"name": "Taurag?s Apskritis",
		"iso": "LT-TA"
	},
	{
		"name": "Tel?i? Apskritis",
		"iso": "LT-TE"
	},
	{
		"name": "Utenos Apskritis",
		"iso": "LT-UT"
	},
	{
		"name": "Vilniaus Apskritis",
		"iso": "LT-VL"
	},
	{
		"name": "?iauli? Apskritis",
		"iso": "LT-SA"
	}],
        "zipRegex": "^(?:LT)*(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "LU",
        "name": "Luxembourg",
        "hasPostalCodes": true,
        "states": [{
		"name": "Diekirch",
		"iso": "LU-D"
	},
	{
		"name": "Grevenmacher",
		"iso": "LU-G"
	},
	{
		"name": "Luxembourg",
		"iso": "LU-L"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "MO",
        "name": "Macao",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "MK",
        "name": "Macedonia, the Former Yugoslav Republic of",
        "hasPostalCodes": true,
        "states": [{
		"name": "Aerodrom",
		"iso": "MK-01"
	},
	{
		"name": "Ara?inovo",
		"iso": "MK-02"
	},
	{
		"name": "Berovo",
		"iso": "MK-03"
	},
	{
		"name": "Bitola",
		"iso": "MK-04"
	},
	{
		"name": "Bogdanci",
		"iso": "MK-05"
	},
	{
		"name": "Bogovinje",
		"iso": "MK-06"
	},
	{
		"name": "Bosilovo",
		"iso": "MK-07"
	},
	{
		"name": "Brvenica",
		"iso": "MK-08"
	},
	{
		"name": "Butel",
		"iso": "MK-09"
	},
	{
		"name": "Centar",
		"iso": "MK-77"
	},
	{
		"name": "Centar ?upa",
		"iso": "MK-78"
	},
	{
		"name": "Debar",
		"iso": "MK-21"
	},
	{
		"name": "Debarca",
		"iso": "MK-22"
	},
	{
		"name": "Del?evo",
		"iso": "MK-23"
	},
	{
		"name": "Demir Hisar",
		"iso": "MK-25"
	},
	{
		"name": "Demir Kapija",
		"iso": "MK-24"
	},
	{
		"name": "Dojran",
		"iso": "MK-26"
	},
	{
		"name": "Dolneni",
		"iso": "MK-27"
	},
	{
		"name": "Drugovo",
		"iso": "MK-28"
	},
	{
		"name": "Gazi Baba",
		"iso": "MK-17"
	},
	{
		"name": "Gevgelija",
		"iso": "MK-18"
	},
	{
		"name": "Gjor?e Petrov",
		"iso": "MK-29"
	},
	{
		"name": "Gostivar",
		"iso": "MK-19"
	},
	{
		"name": "Gradsko",
		"iso": "MK-20"
	},
	{
		"name": "Ilinden",
		"iso": "MK-34"
	},
	{
		"name": "Jegunovce",
		"iso": "MK-35"
	},
	{
		"name": "Karbinci",
		"iso": "MK-37"
	},
	{
		"name": "Karpo?",
		"iso": "MK-38"
	},
	{
		"name": "Kavadarci",
		"iso": "MK-36"
	},
	{
		"name": "Kisela Voda",
		"iso": "MK-39"
	},
	{
		"name": "Ki?evo",
		"iso": "MK-40"
	},
	{
		"name": "Kon?e",
		"iso": "MK-41"
	},
	{
		"name": "Ko?ani",
		"iso": "MK-42"
	},
	{
		"name": "Kratovo",
		"iso": "MK-43"
	},
	{
		"name": "Kriva Palanka",
		"iso": "MK-44"
	},
	{
		"name": "Krivoga?tani",
		"iso": "MK-45"
	},
	{
		"name": "Kru?evo",
		"iso": "MK-46"
	},
	{
		"name": "Kumanovo",
		"iso": "MK-47"
	},
	{
		"name": "Lipkovo",
		"iso": "MK-48"
	},
	{
		"name": "Lozovo",
		"iso": "MK-49"
	},
	{
		"name": "Makedonska Kamenica",
		"iso": "MK-51"
	},
	{
		"name": "Makedonski Brod",
		"iso": "MK-52"
	},
	{
		"name": "Mavrovo i Rostu?a",
		"iso": "MK-50"
	},
	{
		"name": "Mogila",
		"iso": "MK-53"
	},
	{
		"name": "Negotino",
		"iso": "MK-54"
	},
	{
		"name": "Novaci",
		"iso": "MK-55"
	},
	{
		"name": "Novo Selo",
		"iso": "MK-56"
	},
	{
		"name": "Ohrid",
		"iso": "MK-58"
	},
	{
		"name": "Oslomej",
		"iso": "MK-57"
	},
	{
		"name": "Peh?evo",
		"iso": "MK-60"
	},
	{
		"name": "Petrovec",
		"iso": "MK-59"
	},
	{
		"name": "Plasnica",
		"iso": "MK-61"
	},
	{
		"name": "Prilep",
		"iso": "MK-62"
	},
	{
		"name": "Probi?tip",
		"iso": "MK-63"
	},
	{
		"name": "Radovi?",
		"iso": "MK-64"
	},
	{
		"name": "Rankovce",
		"iso": "MK-65"
	},
	{
		"name": "Resen",
		"iso": "MK-66"
	},
	{
		"name": "Rosoman",
		"iso": "MK-67"
	},
	{
		"name": "Saraj",
		"iso": "MK-68"
	},
	{
		"name": "Sopi?te",
		"iso": "MK-70"
	},
	{
		"name": "Staro Nagori?ane",
		"iso": "MK-71"
	},
	{
		"name": "Struga",
		"iso": "MK-72"
	},
	{
		"name": "Strumica",
		"iso": "MK-73"
	},
	{
		"name": "Studeni?ani",
		"iso": "MK-74"
	},
	{
		"name": "Sveti Nikole",
		"iso": "MK-69"
	},
	{
		"name": "Tearce",
		"iso": "MK-75"
	},
	{
		"name": "Tetovo",
		"iso": "MK-76"
	},
	{
		"name": "Valandovo",
		"iso": "MK-10"
	},
	{
		"name": "Vasilevo",
		"iso": "MK-11"
	},
	{
		"name": "Veles",
		"iso": "MK-13"
	},
	{
		"name": "Vev?ani",
		"iso": "MK-12"
	},
	{
		"name": "Vinica",
		"iso": "MK-14"
	},
	{
		"name": "Vrane?tica",
		"iso": "MK-15"
	},
	{
		"name": "Vrap?i?te",
		"iso": "MK-16"
	},
	{
		"name": "Zajas",
		"iso": "MK-31"
	},
	{
		"name": "Zelenikovo",
		"iso": "MK-32"
	},
	{
		"name": "Zrnovci",
		"iso": "MK-33"
	},
	{
		"name": "?air",
		"iso": "MK-79"
	},
	{
		"name": "?a?ka",
		"iso": "MK-80"
	},
	{
		"name": "?e?inovo-Oble?evo",
		"iso": "MK-81"
	},
	{
		"name": "?u?er Sandevo",
		"iso": "MK-82"
	},
	{
		"name": "?tip",
		"iso": "MK-83"
	},
	{
		"name": "?uto Orizari",
		"iso": "MK-84"
	},
	{
		"name": "?elino",
		"iso": "MK-30"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "MG",
        "name": "Madagascar",
        "hasPostalCodes": true,
        "states": [{
		"name": "Antananarivo",
		"iso": "MG-T"
	},
	{
		"name": "Antsiranana",
		"iso": "MG-D"
	},
	{
		"name": "Fianarantsoa",
		"iso": "MG-F"
	},
	{
		"name": "Mahajanga",
		"iso": "MG-M"
	},
	{
		"name": "Toamasina",
		"iso": "MG-A"
	},
	{
		"name": "Toliara",
		"iso": "MG-U"
	}],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "MW",
        "name": "Malawi",
        "hasPostalCodes": false,
        "states": [{
		"name": "Central Region",
		"iso": "MW-C"
	},
	{
		"name": "Northern Region",
		"iso": "MW-N"
	},
	{
		"name": "Southern Region",
		"iso": "MW-S"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "MY",
        "name": "Malaysia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Wilayah Persekutuan Kuala Lumpur",
		"iso": "MY-14"
	},
	{
		"name": "Wilayah Persekutuan Labuan",
		"iso": "MY-15"
	},
	{
		"name": "Wilayah Persekutuan Putrajaya",
		"iso": "MY-16"
	},
	{
		"name": "Johor",
		"iso": "MY-01"
	},
	{
		"name": "Kedah",
		"iso": "MY-02"
	},
	{
		"name": "Kelantan",
		"iso": "MY-03"
	},
	{
		"name": "Melaka",
		"iso": "MY-04"
	},
	{
		"name": "Negeri Sembilan",
		"iso": "MY-05"
	},
	{
		"name": "Pahang",
		"iso": "MY-06"
        },
	{
		"name": "Perak",
		"iso": "MY-08"
	},
	{
		"name": "Perlis",
		"iso": "MY-09"
	},
	{
		"name": "Pulau Pinang",
		"iso": "MY-07"
	},
	{
		"name": "Sabah",
		"iso": "MY-12"
	},
	{
		"name": "Sarawak",
		"iso": "MY-13"
	},
	{
		"name": "Selangor",
		"iso": "MY-10"
	},
	{
		"name": "Terengganu",
		"iso": "MY-11"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "MV",
        "name": "Maldives",
        "hasPostalCodes": true,
        "states": [{
		"name": "Central",
		"iso": "MV-CE"
	},
	{
		"name": "Male",
		"iso": "MV-MLE"
	},
	{
		"name": "North",
		"iso": "MV-NO"
	},
	{
		"name": "North Central",
		"iso": "MV-NC"
	},
	{
		"name": "South",
		"iso": "MV-SU"
	},
	{
		"name": "South Central",
		"iso": "MV-SC"
	},
	{
		"name": "Upper North",
		"iso": "MV-UN"
	},
	{
		"name": "Upper South",
		"iso": "MV-US"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "ML",
        "name": "Mali",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bamako",
		"iso": "ML-BKO"
	},
	{
		"name": "Gao",
		"iso": "ML-7"
	},
	{
		"name": "Kayes",
		"iso": "ML-1"
	},
	{
		"name": "Kidal",
		"iso": "ML-8"
	},
	{
		"name": "Koulikoro",
		"iso": "ML-2"
	},
	{
		"name": "Mopti",
		"iso": "ML-5"
	},
	{
		"name": "Sikasso",
		"iso": "ML-3"
	},
	{
		"name": "S?gou",
		"iso": "ML-4"
	},
	{
		"name": "Tombouctou",
		"iso": "ML-6"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "MT",
        "name": "Malta",
        "hasPostalCodes": true,
        "states": [{
		"name": "Attard",
		"iso": "MT-01"
	},
	{
		"name": "Balzan",
		"iso": "MT-02"
	},
	{
		"name": "Birgu",
		"iso": "MT-03"
	},
	{
		"name": "Birkirkara",
		"iso": "MT-04"
	},
	{
		"name": "Bir?ebbu?a",
		"iso": "MT-05"
	},
	{
		"name": "Bormla",
		"iso": "MT-06"
	},
	{
		"name": "Dingli",
		"iso": "MT-07"
	},
	{
		"name": "Fgura",
		"iso": "MT-08"
	},
	{
		"name": "Floriana",
		"iso": "MT-09"
	},
	{
		"name": "Fontana",
		"iso": "MT-10"
	},
	{
		"name": "Gudja",
		"iso": "MT-11"
	},
	{
		"name": "G?ajnsielem",
		"iso": "MT-13"
	},
	{
		"name": "G?arb",
		"iso": "MT-14"
	},
	{
		"name": "G?arg?ur",
		"iso": "MT-15"
	},
	{
		"name": "G?asri",
		"iso": "MT-16"
	},
	{
		"name": "G?axaq",
		"iso": "MT-17"
	},
	{
		"name": "G?ira",
		"iso": "MT-12"
	},
	{
		"name": "Iklin",
		"iso": "MT-19"
	},
	{
		"name": "Isla",
		"iso": "MT-20"
	},
	{
		"name": "Kalkara",
		"iso": "MT-21"
	},
	{
		"name": "Ker?em",
		"iso": "MT-22"
	},
	{
		"name": "Kirkop",
		"iso": "MT-23"
	},
	{
		"name": "Lija",
		"iso": "MT-24"
	},
	{
		"name": "Luqa",
		"iso": "MT-25"
	},
	{
		"name": "Marsa",
		"iso": "MT-26"
	},
	{
		"name": "Marsaskala",
		"iso": "MT-27"
	},
	{
		"name": "Marsaxlokk",
		"iso": "MT-28"
	},
	{
		"name": "Mdina",
		"iso": "MT-29"
	},
	{
		"name": "Mellie?a",
		"iso": "MT-30"
	},
	{
		"name": "Mosta",
		"iso": "MT-32"
	},
	{
		"name": "Mqabba",
		"iso": "MT-33"
	},
	{
		"name": "Msida",
		"iso": "MT-34"
	},
	{
		"name": "Mtarfa",
		"iso": "MT-35"
	},
	{
		"name": "Munxar",
		"iso": "MT-36"
	},
	{
		"name": "M?arr",
		"iso": "MT-31"
	},
	{
		"name": "Nadur",
		"iso": "MT-37"
	},
	{
		"name": "Naxxar",
		"iso": "MT-38"
	},
	{
		"name": "Paola",
		"iso": "MT-39"
	},
	{
		"name": "Pembroke",
		"iso": "MT-40"
	},
	{
		"name": "Piet?",
		"iso": "MT-41"
	},
	{
		"name": "Qala",
		"iso": "MT-42"
	},
	{
		"name": "Qormi",
		"iso": "MT-43"
	},
	{
		"name": "Qrendi",
		"iso": "MT-44"
	},
	{
		"name": "Rabat G?awdex",
		"iso": "MT-45"
	},
	{
		"name": "Rabat Malta",
		"iso": "MT-46"
	},
	{
		"name": "Safi",
		"iso": "MT-47"
	},
	{
		"name": "San Lawrenz",
		"iso": "MT-50"
	},
	{
		"name": "San Pawl il-Ba?ar",
		"iso": "MT-51"
	},
	{
		"name": "San ?iljan",
		"iso": "MT-48"
	},
	{
		"name": "San ?wann",
		"iso": "MT-49"
	},
	{
		"name": "Sannat",
		"iso": "MT-52"
	},
	{
		"name": "Santa Lu?ija",
		"iso": "MT-53"
	},
	{
		"name": "Santa Venera",
		"iso": "MT-54"
	},
	{
		"name": "Si??iewi",
		"iso": "MT-55"
	},
	{
		"name": "Sliema",
		"iso": "MT-56"
	},
	{
		"name": "Swieqi",
		"iso": "MT-57"
	},
	{
		"name": "Ta' Xbiex",
		"iso": "MT-58"
	},
	{
		"name": "Tarxien",
		"iso": "MT-59"
	},
	{
		"name": "Valletta",
		"iso": "MT-60"
	},
	{
		"name": "Xag?ra",
		"iso": "MT-61"
	},
	{
		"name": "Xewkija",
		"iso": "MT-62"
	},
	{
		"name": "Xg?ajra",
		"iso": "MT-63"
	},
	{
		"name": "?amrun",
		"iso": "MT-18"
	},
	{
		"name": "?abbar",
		"iso": "MT-64"
	},
	{
		"name": "?ebbu? G?awdex",
		"iso": "MT-65"
	},
	{
		"name": "?ebbu? Malta",
		"iso": "MT-66"
	},
	{
		"name": "?ejtun",
		"iso": "MT-67"
	},
	{
		"name": "?urrieq",
		"iso": "MT-68"
	}],
        "zipRegex": "^[A-Z]{3} [0-9]{4}$"
    },
    {
        "region": "Oceania",
        "iso": "MH",
        "name": "Marshall Islands",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ralik chain",
		"iso": "MH-L"
	},
	{
		"name": "Ratak chain",
		"iso": "MH-T"
	}],
        "zipRegex": "^((969)[6-7][0-9])$"
    },
    {
        "region": "Americas",
        "iso": "MQ",
        "name": "Martinique",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "MR",
        "name": "Mauritania",
        "hasPostalCodes": false,
        "states": [{
		"name": "Adrar",
		"iso": "MR-07"
	},
	{
		"name": "Assaba",
		"iso": "MR-03"
	},
	{
		"name": "Brakna",
		"iso": "MR-05"
	},
	{
		"name": "Dakhlet Nou?dhibou",
		"iso": "MR-08"
	},
	{
		"name": "Gorgol",
		"iso": "MR-04"
	},
	{
		"name": "Guidimaka",
		"iso": "MR-10"
	},
	{
		"name": "Hodh ech Chargui",
		"iso": "MR-01"
	},
	{
		"name": "Hodh el Gharbi",
		"iso": "MR-02"
	},
	{
		"name": "Inchiri",
		"iso": "MR-12"
	},
	{
		"name": "Nouakchott",
		"iso": "MR-NKC"
	},
	{
		"name": "Tagant",
		"iso": "MR-09"
	},
	{
		"name": "Tiris Zemmour",
		"iso": "MR-11"
	},
	{
		"name": "Trarza",
		"iso": "MR-06"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "MU",
        "name": "Mauritius",
        "hasPostalCodes": false,
        "states": [{
		"name": "Agalega Islands",
		"iso": "MU-AG"
	},
	{
		"name": "Beau Bassin-Rose Hill",
		"iso": "MU-BR"
	},
	{
		"name": "Black River",
		"iso": "MU-BL"
	},
	{
		"name": "Cargados Carajos Shoals",
		"iso": "MU-CC"
	},
	{
		"name": "Curepipe",
		"iso": "MU-CU"
	},
	{
		"name": "Flacq",
		"iso": "MU-FL"
	},
	{
		"name": "Grand Port",
		"iso": "MU-GP"
	},
	{
		"name": "Moka",
		"iso": "MU-MO"
	},
	{
		"name": "Pamplemousses",
		"iso": "MU-PA"
	},
	{
		"name": "Plaines Wilhems",
		"iso": "MU-PW"
	},
	{
		"name": "Port Louis",
		"iso": "MU-PL"
	},
	{
		"name": "Port Louis",
		"iso": "MU-PU"
	},
	{
		"name": "Quatre Bornes",
		"iso": "MU-QB"
	},
	{
		"name": "Rivi?re du Rempart",
		"iso": "MU-RR"
	},
	{
		"name": "Rodrigues Island",
		"iso": "MU-RO"
	},
	{
		"name": "Savanne",
		"iso": "MU-SA"
	},
	{
		"name": "Vacoas-Phoenix",
		"iso": "MU-VP"
	}],
        "zipRegex": "^([0-9A-Z]\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "YT",
        "name": "Mayotte",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "MX",
        "name": "Mexico",
        "hasPostalCodes": true,
        "states": [{
		"name": "Distrito Federal",
		"iso": "MX-DIF"
	},
	{
		"name": "Aguascalientes",
		"iso": "MX-AGU"
	},
	{
		"name": "Baja California",
		"iso": "MX-BCN"
	},
	{
		"name": "Baja California Sur",
		"iso": "MX-BCS"
	},
	{
		"name": "Campeche",
		"iso": "MX-CAM"
	},
	{
		"name": "Chiapas",
		"iso": "MX-CHP"
	},
	{
		"name": "Chihuahua",
		"iso": "MX-CHH"
	},
	{
		"name": "Coahuila",
		"iso": "MX-COA"
	},
	{
		"name": "Colima",
		"iso": "MX-COL"
	},
	{
		"name": "Durango",
		"iso": "MX-DUR"
	},
	{
		"name": "Guanajuato",
		"iso": "MX-GUA"
	},
	{
		"name": "Guerrero",
		"iso": "MX-GRO"
	},
	{
		"name": "Hidalgo",
		"iso": "MX-HID"
	},
	{
		"name": "Jalisco",
		"iso": "MX-JAL"
	},
	{
		"name": "Michoac?n",
		"iso": "MX-MIC"
	},
	{
		"name": "Morelos",
		"iso": "MX-MOR"
	},
	{
		"name": "M?xico",
		"iso": "MX-MEX"
	},
	{
		"name": "Nayarit",
		"iso": "MX-NAY"
	},
	{
		"name": "Nuevo Le?n",
		"iso": "MX-NLE"
	},
	{
		"name": "Oaxaca",
		"iso": "MX-OAX"
	},
	{
		"name": "Puebla",
		"iso": "MX-PUE"
	},
	{
		"name": "Quer?taro",
		"iso": "MX-QUE"
	},
	{
		"name": "Quintana Roo",
		"iso": "MX-ROO"
	},
	{
		"name": "San Luis Potos?",
		"iso": "MX-SLP"
	},
	{
		"name": "Sinaloa",
		"iso": "MX-SIN"
	},
	{
		"name": "Sonora",
		"iso": "MX-SON"
	},
	{
		"name": "Tabasco",
		"iso": "MX-TAB"
	},
	{
		"name": "Tamaulipas",
		"iso": "MX-TAM"
	},
	{
		"name": "Tlaxcala",
		"iso": "MX-TLA"
	},
	{
		"name": "Veracruz",
		"iso": "MX-VER"
	},
	{
		"name": "Yucat?n",
		"iso": "MX-YUC"
	},
	{
		"name": "Zacatecas",
		"iso": "MX-ZAC"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "FM",
        "name": "Micronesia, Federated States of",
        "hasPostalCodes": true,
        "states": [{
		"name": "Chuuk",
		"iso": "FM-TRK"
	},
	{
		"name": "Kosrae",
		"iso": "FM-KSA"
	},
	{
		"name": "Pohnpei",
		"iso": "FM-PNI"
	},
	{
		"name": "Yap",
		"iso": "FM-YAP"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "MD",
        "name": "Moldova, Republic of",
        "hasPostalCodes": true,
        "states": [{
		"name": "Anenii Noi",
		"iso": "MD-AN"
	},
	{
		"name": "Basarabeasca",
		"iso": "MD-BS"
	},
	{
		"name": "Briceni",
		"iso": "MD-BR"
	},
	{
		"name": "B?l?i",
		"iso": "MD-BA"
	},
	{
		"name": "Cahul",
		"iso": "MD-CA"
	},
	{
		"name": "Cantemir",
		"iso": "MD-CT"
	},
	{
		"name": "Chi?in?u",
		"iso": "MD-CU"
	},
	{
		"name": "Cimi?lia",
		"iso": "MD-CM"
	},
	{
		"name": "Criuleni",
		"iso": "MD-CR"
	},
	{
		"name": "C?l?ra?i",
		"iso": "MD-CL"
	},
	{
		"name": "C?u?eni",
		"iso": "MD-CS"
	},
	{
		"name": "Dondu?eni",
		"iso": "MD-DO"
	},
	{
		"name": "Drochia",
		"iso": "MD-DR"
	},
	{
		"name": "Dub?sari",
		"iso": "MD-DU"
	},
	{
		"name": "Edine?",
		"iso": "MD-ED"
	},
	{
		"name": "Flore?ti",
		"iso": "MD-FL"
	},
	{
		"name": "F?le?ti",
		"iso": "MD-FA"
	},
	{
		"name": "Glodeni",
		"iso": "MD-GL"
	},
	{
		"name": "G?g?uzia, Unitatea teritorial? autonom?",
		"iso": "MD-GA"
	},
	{
		"name": "H?nce?ti",
		"iso": "MD-HI"
	},
	{
		"name": "Ialoveni",
		"iso": "MD-IA"
	},
	{
		"name": "Leova",
		"iso": "MD-LE"
	},
	{
		"name": "Nisporeni",
		"iso": "MD-NI"
	},
	{
		"name": "Ocni?a",
		"iso": "MD-OC"
	},
	{
		"name": "Orhei",
		"iso": "MD-OR"
	},
	{
		"name": "Rezina",
		"iso": "MD-RE"
	},
	{
		"name": "R??cani",
		"iso": "MD-RI"
	},
	{
		"name": "Soroca",
		"iso": "MD-SO"
	},
	{
		"name": "Str??eni",
		"iso": "MD-ST"
	},
	{
		"name": "St?nga Nistrului, unitatea teritorial? din",
		"iso": "MD-SN"
	},
	{
		"name": "S?ngerei",
		"iso": "MD-SI"
	},
	{
		"name": "Taraclia",
		"iso": "MD-TA"
	},
	{
		"name": "Telene?ti",
		"iso": "MD-TE"
	},
	{
		"name": "Tighina",
		"iso": "MD-BD"
	},
	{
		"name": "Ungheni",
		"iso": "MD-UN"
	},
	{
		"name": "?old?ne?ti",
		"iso": "MD-SD"
	},
	{
		"name": "?tefan Vod?",
		"iso": "MD-SV"
	}],
        "zipRegex": "^(?:MD)*(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "MC",
        "name": "Monaco",
        "hasPostalCodes": true,
        "states": [{
		"name": "Fontvieille",
		"iso": "MC-FO"
	},
	{
		"name": "Jardin Exotique",
		"iso": "MC-JE"
	},
	{
		"name": "La Colle",
		"iso": "MC-CL"
	},
	{
		"name": "La Condamine",
		"iso": "MC-CO"
	},
	{
		"name": "La Gare",
		"iso": "MC-GA"
	},
	{
		"name": "La Source",
		"iso": "MC-SO"
	},
	{
		"name": "Larvotto",
		"iso": "MC-LA"
	},
	{
		"name": "Malbousquet",
		"iso": "MC-MA"
	},
	{
		"name": "Monaco-Ville",
		"iso": "MC-MO"
	},
	{
		"name": "Moneghetti",
		"iso": "MC-MG"
	},
	{
		"name": "Monte-Carlo",
		"iso": "MC-MC"
	},
	{
		"name": "Moulins",
		"iso": "MC-MU"
	},
	{
		"name": "Port-Hercule",
		"iso": "MC-PH"
	},
	{
		"name": "Saint-Roman",
		"iso": "MC-SR"
	},
	{
		"name": "Sainte-D?vote",
		"iso": "MC-SD"
	},
	{
		"name": "Sp?lugues",
		"iso": "MC-SP"
	},
	{
		"name": "Vallon de la Rousse",
		"iso": "MC-VR"
	}
],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "MN",
        "name": "Mongolia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Arhangay",
		"iso": "MN-073"
	},
	{
		"name": "Bayan-?lgiy",
		"iso": "MN-071"
	},
	{
		"name": "Bayanhongor",
		"iso": "MN-069"
	},
	{
		"name": "Bulgan",
		"iso": "MN-067"
	},
	{
		"name": "Darhan uul",
		"iso": "MN-037"
	},
	{
		"name": "Dornod",
		"iso": "MN-061"
	},
	{
		"name": "Dornogov?",
		"iso": "MN-063"
	},
	{
		"name": "Dundgov?",
		"iso": "MN-059"
	},
	{
		"name": "Dzavhan",
		"iso": "MN-057"
	},
	{
		"name": "Gov?-Altay",
		"iso": "MN-065"
	},
	{
		"name": "Gov?-S?mber",
		"iso": "MN-064"
	},
	{
		"name": "Hentiy",
		"iso": "MN-039"
	},
	{
		"name": "Hovd",
		"iso": "MN-043"
	},
	{
		"name": "H?vsg?l",
		"iso": "MN-041"
	},
	{
		"name": "Orhon",
		"iso": "MN-035"
	},
	{
		"name": "Selenge",
		"iso": "MN-049"
	},
	{
		"name": "S?hbaatar",
		"iso": "MN-051"
	},
	{
		"name": "T?v",
		"iso": "MN-047"
	},
	{
		"name": "Ulaanbaatar",
		"iso": "MN-1"
	},
	{
		"name": "Uvs",
		"iso": "MN-046"
	},
	{
		"name": "?mn?gov?",
		"iso": "MN-053"
	},
	{
		"name": "?v?rhangay",
		"iso": "MN-055"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "ME",
        "name": "Montenegro",
        "hasPostalCodes": true,
        "states": [{
		"name": "Andrijevica",
		"iso": "ME-01"
	},
	{
		"name": "Bar",
		"iso": "ME-02"
	},
	{
		"name": "Berane",
		"iso": "ME-03"
	},
	{
		"name": "Bijelo Polje",
		"iso": "ME-04"
	},
	{
		"name": "Budva",
		"iso": "ME-05"
	},
	{
		"name": "Cetinje",
		"iso": "ME-06"
	},
	{
		"name": "Danilovgrad",
		"iso": "ME-07"
	},
	{
		"name": "Gusinje",
		"iso": "ME-22"
	},
	{
		"name": "Herceg-Novi",
		"iso": "ME-08"
	},
	{
		"name": "Kola?in",
		"iso": "ME-09"
	},
	{
		"name": "Kotor",
		"iso": "ME-10"
	},
	{
		"name": "Mojkovac",
		"iso": "ME-11"
	},
	{
		"name": "Nik?i?",
		"iso": "ME-12"
	},
	{
		"name": "Petnjica",
		"iso": "ME-23"
	},
	{
		"name": "Plav",
		"iso": "ME-13"
	},
	{
		"name": "Pljevlja",
		"iso": "ME-14"
	},
	{
		"name": "Plu?ine",
		"iso": "ME-15"
	},
	{
		"name": "Podgorica",
		"iso": "ME-16"
	},
	{
		"name": "Ro?aje",
		"iso": "ME-17"
	},
	{
		"name": "Tivat",
		"iso": "ME-19"
	},
	{
		"name": "Ulcinj",
		"iso": "ME-20"
	},
	{
		"name": "?avnik",
		"iso": "ME-18"
	},
	{
		"name": "?abljak",
		"iso": "ME-21"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "MS",
        "name": "Montserrat",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "MA",
        "name": "Morocco",
        "hasPostalCodes": true,
        "states": [{
		"name": "Chaouia-Ouardigha",
		"iso": "MA-09"
	},
	{
		"name": "Doukhala-Abda",
		"iso": "MA-10"
	},
	{
		"name": "F?s-Boulemane",
		"iso": "MA-05"
	},
	{
		"name": "Gharb-Chrarda-Beni Hssen",
		"iso": "MA-02"
	},
	{
		"name": "Grand Casablanca",
		"iso": "MA-08"
	},
	{
		"name": "Guelmim-Es Smara",
		"iso": "MA-14"
	},
	{
		"name": "L'Oriental",
		"iso": "MA-04"
	},
	{
		"name": "La?youne-Boujdour-Sakia el Hamra",
		"iso": "MA-15"
	},
	{
		"name": "Marrakech-Tensift-Al Haouz",
		"iso": "MA-11"
	},
	{
		"name": "Mekn?s-Tafilalet",
		"iso": "MA-06"
	},
	{
		"name": "Oued ed Dahab-Lagouira",
		"iso": "MA-16"
	},
	{
		"name": "Rabat-Sal?-Zemmour-Zaer",
		"iso": "MA-07"
	},
	{
		"name": "Souss-Massa-Dr?a",
		"iso": "MA-13"
	},
	{
		"name": "Tadla-Azilal",
		"iso": "MA-12"
	},
	{
		"name": "Tanger-T?touan",
		"iso": "MA-01"
	},
	{
		"name": "Taza-Al Hoceima-Taounate",
		"iso": "MA-03"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "MZ",
        "name": "Mozambique",
        "hasPostalCodes": true,
        "states": [{
		"name": "Cabo Delgado",
		"iso": "MZ-P"
	},
	{
		"name": "Gaza",
		"iso": "MZ-G"
	},
	{
		"name": "Inhambane",
		"iso": "MZ-I"
	},
	{
		"name": "Manica",
		"iso": "MZ-B"
	},
	{
		"name": "Maputo",
		"iso": "MZ-MPM"
	},
	{
		"name": "Maputo",
		"iso": "MZ-L"
	},
	{
		"name": "Nampula",
		"iso": "MZ-N"
	},
	{
		"name": "Niassa",
		"iso": "MZ-A"
	},
	{
		"name": "Sofala",
		"iso": "MZ-S"
	},
	{
		"name": "Tete",
		"iso": "MZ-T"
	},
	{
		"name": "Zamb?zia",
		"iso": "MZ-Q"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "MM",
        "name": "Myanmar",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ayeyarwady",
		"iso": "MM-07"
	},
	{
		"name": "Bago",
		"iso": "MM-02"
	},
	{
		"name": "Chin",
		"iso": "MM-14"
	},
	{
		"name": "Kachin",
		"iso": "MM-11"
	},
	{
		"name": "Kayah",
		"iso": "MM-12"
	},
	{
		"name": "Kayin",
		"iso": "MM-13"
	},
	{
		"name": "Magway",
		"iso": "MM-03"
	},
	{
		"name": "Mandalay",
		"iso": "MM-04"
	},
	{
		"name": "Mon",
		"iso": "MM-15"
	},
	{
		"name": "Rakhine",
		"iso": "MM-16"
	},
	{
		"name": "Sagaing",
		"iso": "MM-01"
	},
	{
		"name": "Shan",
		"iso": "MM-17"
	},
	{
		"name": "Tanintharyi",
		"iso": "MM-05"
	},
	{
		"name": "Yangon",
		"iso": "MM-06"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "NA",
        "name": "Namibia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Erongo",
		"iso": "NA-ER"
	},
	{
		"name": "Hardap",
		"iso": "NA-HA"
	},
	{
		"name": "Karas",
		"iso": "NA-KA"
	},
	{
		"name": "Kavango East",
		"iso": "NA-KE"
	},
	{
		"name": "Kavango West",
		"iso": "NA-KW"
	},
	{
		"name": "Khomas",
		"iso": "NA-KH"
	},
	{
		"name": "Kunene",
		"iso": "NA-KU"
	},
	{
		"name": "Ohangwena",
		"iso": "NA-OW"
	},
	{
		"name": "Omaheke",
		"iso": "NA-OH"
	},
	{
		"name": "Omusati",
		"iso": "NA-OS"
	},
	{
		"name": "Oshana",
		"iso": "NA-ON"
	},
	{
		"name": "Oshikoto",
		"iso": "NA-OT"
	},
	{
		"name": "Otjozondjupa",
		"iso": "NA-OD"
	},
	{
		"name": "Zambezi",
		"iso": "NA-CA"
	}],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "NR",
        "name": "Nauru",
        "hasPostalCodes": false,
        "states": [{
		"name": "Aiwo",
		"iso": "NR-01"
	},
	{
		"name": "Anabar",
		"iso": "NR-02"
	},
	{
		"name": "Anetan",
		"iso": "NR-03"
	},
	{
		"name": "Anibare",
		"iso": "NR-04"
	},
	{
		"name": "Baiti",
		"iso": "NR-05"
	},
	{
		"name": "Boe",
		"iso": "NR-06"
	},
	{
		"name": "Buada",
		"iso": "NR-07"
	},
	{
		"name": "Denigomodu",
		"iso": "NR-08"
	},
	{
		"name": "Ewa",
		"iso": "NR-09"
	},
	{
		"name": "Ijuw",
		"iso": "NR-10"
	},
	{
		"name": "Meneng",
		"iso": "NR-11"
	},
	{
		"name": "Nibok",
		"iso": "NR-12"
	},
	{
		"name": "Uaboe",
		"iso": "NR-13"
	},
	{
		"name": "Yaren",
		"iso": "NR-14"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "NP",
        "name": "Nepal",
        "hasPostalCodes": true,
        "states": [{
		"name": "Madhya Pashchimanchal",
		"iso": "NP-2"
	},
	{
		"name": "Madhyamanchal",
		"iso": "NP-1"
	},
	{
		"name": "Pashchimanchal",
		"iso": "NP-3"
	},
	{
		"name": "Purwanchal",
		"iso": "NP-4"
	},
	{
		"name": "Sudur Pashchimanchal",
		"iso": "NP-5"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "NL",
        "name": "Netherlands",
        "hasPostalCodes": true,
        "states": [{
		"name": "Drenthe",
		"iso": "NL-DR"
	},
	{
		"name": "Flevoland",
		"iso": "NL-FL"
	},
	{
		"name": "Frysl?n",
		"iso": "NL-FR"
	},
	{
		"name": "Gelderland",
		"iso": "NL-GE"
	},
	{
		"name": "Groningen",
		"iso": "NL-GR"
	},
	{
		"name": "Limburg",
		"iso": "NL-LI"
	},
	{
		"name": "Noord-Brabant",
		"iso": "NL-NB"
	},
	{
		"name": "Noord-Holland",
		"iso": "NL-NH"
	},
	{
		"name": "Overijssel",
		"iso": "NL-OV"
	},
	{
		"name": "Utrecht",
		"iso": "NL-UT"
	},
	{
		"name": "Zeeland",
		"iso": "NL-ZE"
	},
	{
		"name": "Zuid-Holland",
		"iso": "NL-ZH"
	},
	{
		"name": "Aruba",
		"iso": "NL-AW"
	},
	{
		"name": "Cura?ao",
		"iso": "NL-CW"
	},
	{
		"name": "Sint Maarten",
		"iso": "NL-SX"
	},
	{
		"name": "Bonaire",
		"iso": "NL-BQ1"
	},
	{
		"name": "Saba",
		"iso": "NL-BQ2"
	},
	{
		"name": "Sint Eustatius",
		"iso": "NL-BQ3"
	}],
        "zipRegex": "[0-9]{4} [A-Z]{2}"
    },
    {
        "region": "Oceania",
        "iso": "NC",
        "name": "New Caledonia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "NZ",
        "name": "New Zealand",
        "hasPostalCodes": true,
        "states": [{
		"name": "North Island",
		"iso": "NZ-N"
	},
	{
		"name": "South Island",
		"iso": "NZ-S"
	},
	{
		"name": "Auckland",
		"iso": "NZ-AUK"
	},
	{
		"name": "Bay of Plenty",
		"iso": "NZ-BOP"
	},
	{
		"name": "Canterbury",
		"iso": "NZ-CAN"
	},
	{
		"name": "Hawke's Bay",
		"iso": "NZ-HKB"
	},
	{
		"name": "Manawatu-Wanganui",
		"iso": "NZ-MWT"
	},
	{
		"name": "Northland",
		"iso": "NZ-NTL"
	},
	{
		"name": "Otago",
		"iso": "NZ-OTA"
	},
	{
		"name": "Southland",
		"iso": "NZ-STL"
	},
	{
		"name": "Taranaki",
		"iso": "NZ-TKI"
	},
	{
		"name": "Waikato",
		"iso": "NZ-WKO"
	},
	{
		"name": "Wellington",
		"iso": "NZ-WGN"
	},
	{
		"name": "West Coast",
		"iso": "NZ-WTC"
	},
	{
		"name": "Chatham Islands Territory",
		"iso": "NZ-CIT"
	},
	{
		"name": "Gisborne District",
		"iso": "NZ-GIS"
	},
	{
		"name": "Marlborough District",
		"iso": "NZ-MBH"
	},
	{
		"name": "Nelson City",
		"iso": "NZ-NSN"
	},
	{
		"name": "Tasman District",
		"iso": "NZ-TAS"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "NI",
        "name": "Nicaragua",
        "hasPostalCodes": true,
        "states": [{
		"name": "Atl?ntico Norte",
		"iso": "NI-AN"
	},
	{
		"name": "Atl?ntico Sur",
		"iso": "NI-AS"
	},
	{
		"name": "Boaco",
		"iso": "NI-BO"
	},
	{
		"name": "Carazo",
		"iso": "NI-CA"
	},
	{
		"name": "Chinandega",
		"iso": "NI-CI"
	},
	{
		"name": "Chontales",
		"iso": "NI-CO"
	},
	{
		"name": "Estel?",
		"iso": "NI-ES"
	},
	{
		"name": "Granada",
		"iso": "NI-GR"
	},
	{
		"name": "Jinotega",
		"iso": "NI-JI"
	},
	{
		"name": "Le?n",
		"iso": "NI-LE"
	},
	{
		"name": "Madriz",
		"iso": "NI-MD"
	},
	{
		"name": "Managua",
		"iso": "NI-MN"
	},
	{
		"name": "Masaya",
		"iso": "NI-MS"
	},
	{
		"name": "Matagalpa",
		"iso": "NI-MT"
	},
	{
		"name": "Nueva Segovia",
		"iso": "NI-NS"
	},
	{
		"name": "Rivas",
		"iso": "NI-RI"
	},
	{
		"name": "R?o San Juan",
		"iso": "NI-SJ"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "NE",
        "name": "Niger",
        "hasPostalCodes": true,
        "states": [{
		"name": "Agadez",
		"iso": "NE-1"
	},
	{
		"name": "Diffa",
		"iso": "NE-2"
	},
	{
		"name": "Dosso",
		"iso": "NE-3"
	},
	{
		"name": "Maradi",
		"iso": "NE-4"
	},
	{
		"name": "Niamey",
		"iso": "NE-8"
	},
	{
		"name": "Tahoua",
		"iso": "NE-5"
	},
	{
		"name": "Tillab?ri",
		"iso": "NE-6"
	},
	{
		"name": "Zinder",
		"iso": "NE-7"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "NG",
        "name": "Nigeria",
        "hasPostalCodes": true,
        "states": [{
		"name": "Abia",
		"iso": "NG-AB"
	},
	{
		"name": "Abuja Federal Capital Territory",
		"iso": "NG-FC"
	},
	{
		"name": "Adamawa",
		"iso": "NG-AD"
	},
	{
		"name": "Akwa Ibom",
		"iso": "NG-AK"
	},
	{
		"name": "Anambra",
		"iso": "NG-AN"
	},
	{
		"name": "Bauchi",
		"iso": "NG-BA"
	},
	{
		"name": "Bayelsa",
		"iso": "NG-BY"
	},
	{
		"name": "Benue",
		"iso": "NG-BE"
	},
	{
		"name": "Borno",
		"iso": "NG-BO"
	},
	{
		"name": "Cross River",
		"iso": "NG-CR"
	},
	{
		"name": "Delta",
		"iso": "NG-DE"
	},
	{
		"name": "Ebonyi",
		"iso": "NG-EB"
	},
	{
		"name": "Edo",
		"iso": "NG-ED"
	},
	{
		"name": "Ekiti",
		"iso": "NG-EK"
	},
	{
		"name": "Enugu",
		"iso": "NG-EN"
	},
	{
		"name": "Gombe",
		"iso": "NG-GO"
	},
	{
		"name": "Imo",
		"iso": "NG-IM"
	},
	{
		"name": "Jigawa",
		"iso": "NG-JI"
	},
	{
		"name": "Kaduna",
		"iso": "NG-KD"
	},
	{
		"name": "Kano",
		"iso": "NG-KN"
	},
	{
		"name": "Katsina",
		"iso": "NG-KT"
	},
	{
		"name": "Kebbi",
		"iso": "NG-KE"
	},
	{
		"name": "Kogi",
		"iso": "NG-KO"
	},
	{
		"name": "Kwara",
		"iso": "NG-KW"
	},
	{
		"name": "Lagos",
		"iso": "NG-LA"
	},
	{
		"name": "Nassarawa",
		"iso": "NG-NA"
	},
	{
		"name": "Niger",
		"iso": "NG-NI"
	},
	{
		"name": "Ogun",
		"iso": "NG-OG"
	},
	{
		"name": "Ondo",
		"iso": "NG-ON"
	},
	{
		"name": "Osun",
		"iso": "NG-OS"
	},
	{
		"name": "Oyo",
		"iso": "NG-OY"
	},
	{
		"name": "Plateau",
		"iso": "NG-PL"
	},
	{
		"name": "Rivers",
		"iso": "NG-RI"
	},
	{
		"name": "Sokoto",
		"iso": "NG-SO"
	},
	{
		"name": "Taraba",
		"iso": "NG-TA"
	},
	{
		"name": "Yobe",
		"iso": "NG-YO"
	},
	{
		"name": "Zamfara",
		"iso": "NG-ZA"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Oceania",
        "iso": "NU",
        "name": "Niue",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "NF",
        "name": "Norfolk Island",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(2899)$"
    },
    {
        "region": "Oceania",
        "iso": "MP",
        "name": "Northern Mariana Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "NO",
        "name": "Norway",
        "hasPostalCodes": true,
        "states": [{
		"name": "Akershus",
		"iso": "NO-02"
	},
	{
		"name": "Aust-Agder",
		"iso": "NO-09"
	},
	{
		"name": "Buskerud",
		"iso": "NO-06"
	},
	{
		"name": "Finnmark",
		"iso": "NO-20"
	},
	{
		"name": "Hedmark",
		"iso": "NO-04"
	},
	{
		"name": "Hordaland",
		"iso": "NO-12"
	},
	{
		"name": "Jan Mayen",
		"iso": "NO-22"
	},
	{
		"name": "M?re og Romsdal",
		"iso": "NO-15"
	},
	{
		"name": "Nord-Tr?ndelag",
		"iso": "NO-17"
	},
	{
		"name": "Nordland",
		"iso": "NO-18"
	},
	{
		"name": "Oppland",
		"iso": "NO-05"
	},
	{
		"name": "Oslo",
		"iso": "NO-03"
	},
	{
		"name": "Rogaland",
		"iso": "NO-11"
	},
	{
		"name": "Sogn og Fjordane",
		"iso": "NO-14"
	},
	{
		"name": "Svalbard",
		"iso": "NO-21"
	},
	{
		"name": "S?r-Tr?ndelag",
		"iso": "NO-16"
	},
	{
		"name": "Telemark",
		"iso": "NO-08"
	},
	{
		"name": "Troms",
		"iso": "NO-19"
	},
	{
		"name": "Vest-Agder",
		"iso": "NO-10"
	},
	{
		"name": "Vestfold",
		"iso": "NO-07"
	},
	{
		"name": "?stfold",
		"iso": "NO-01"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "OM",
        "name": "Oman",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ad D?khil?yah",
		"iso": "OM-DA"
	},
	{
		"name": "Al Buraym?",
		"iso": "OM-BU"
	},
	{
		"name": "Al B??inah",
		"iso": "OM-BA"
	},
	{
		"name": "Al Wus??",
		"iso": "OM-WU"
	},
	{
		"name": "Ash Sharq?yah",
		"iso": "OM-SH"
	},
	{
		"name": "Az? Z??hirah",
		"iso": "OM-ZA"
	},
	{
		"name": "Masqa?",
		"iso": "OM-MA"
	},
	{
		"name": "Musandam",
		"iso": "OM-MU"
	},
	{
		"name": "Z?uf?r",
		"iso": "OM-ZU"
	}],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Asia",
        "iso": "PK",
        "name": "Pakistan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Azad Kashmir",
		"iso": "PK-JK"
	},
	{
		"name": "Balochistan",
		"iso": "PK-BA"
	},
	{
		"name": "Federally Administered Tribal Areas",
		"iso": "PK-TA"
	},
	{
		"name": "Gilgit-Baltistan",
		"iso": "PK-GB"
	},
	{
		"name": "Islamabad",
		"iso": "PK-IS"
	},
	{
		"name": "Khyber Pakhtunkhwa",
		"iso": "PK-KP"
	},
	{
		"name": "Punjab",
		"iso": "PK-PB"
	},
	{
		"name": "Sindh",
		"iso": "PK-SD"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "PW",
        "name": "Palau",
        "hasPostalCodes": true,
        "states": [{
		"name": "Aimeliik",
		"iso": "PW-002"
	},
	{
		"name": "Airai",
		"iso": "PW-004"
	},
	{
		"name": "Angaur",
		"iso": "PW-010"
	},
	{
		"name": "Hatobohei",
		"iso": "PW-050"
	},
	{
		"name": "Kayangel",
		"iso": "PW-100"
	},
	{
		"name": "Koror",
		"iso": "PW-150"
	},
	{
		"name": "Melekeok",
		"iso": "PW-212"
	},
	{
		"name": "Ngaraard",
		"iso": "PW-214"
	},
	{
		"name": "Ngarchelong",
		"iso": "PW-218"
	},
	{
		"name": "Ngardmau",
		"iso": "PW-222"
	},
	{
		"name": "Ngatpang",
		"iso": "PW-224"
	},
	{
		"name": "Ngchesar",
		"iso": "PW-226"
	},
	{
		"name": "Ngeremlengui",
		"iso": "PW-227"
	},
	{
		"name": "Ngiwal",
		"iso": "PW-228"
	},
	{
		"name": "Peleliu",
		"iso": "PW-350"
	},
	{
		"name": "Sonsorol",
		"iso": "PW-370"
	}],
        "zipRegex": "^(96940)$"
    },
    {
        "region": "Asia",
        "iso": "PS",
        "name": "Palestine, State of",
        "hasPostalCodes": true,
        "states": [{
		"name": "Bethlehem",
		"iso": "PS-BTH"
	},
	{
		"name": "Deir El Balah",
		"iso": "PS-DEB"
	},
	{
		"name": "Gaza",
		"iso": "PS-GZA"
	},
	{
		"name": "Hebron",
		"iso": "PS-HBN"
	},
	{
		"name": "Jenin",
		"iso": "PS-JEN"
	},
	{
		"name": "Jericho – Al Aghwar",
		"iso": "PS-JRH"
	},
	{
		"name": "Jerusalem",
		"iso": "PS-JEM"
	},
	{
		"name": "Khan Yunis",
		"iso": "PS-KYS"
	},
	{
		"name": "Nablus",
		"iso": "PS-NBS"
	},
	{
		"name": "North Gaza",
		"iso": "PS-NGZ"
	},
	{
		"name": "Qalqilya",
		"iso": "PS-QQA"
	},
	{
		"name": "Rafah",
		"iso": "PS-RFH"
	},
	{
		"name": "Ramallah",
		"iso": "PS-RBH"
	},
	{
		"name": "Salfit",
		"iso": "PS-SLT"
	},
	{
		"name": "Tubas",
		"iso": "PS-TBS"
	},
	{
		"name": "Tulkarm",
		"iso": "PS-TKM"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "PA",
        "name": "Panama",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bocas del Toro",
		"iso": "PA-1"
	},
	{
		"name": "Chiriqu?",
		"iso": "PA-4"
	},
	{
		"name": "Cocl?",
		"iso": "PA-2"
	},
	{
		"name": "Col?n",
		"iso": "PA-3"
	},
	{
		"name": "Dari?n",
		"iso": "PA-5"
	},
	{
		"name": "Ember?",
		"iso": "PA-EM"
	},
	{
		"name": "Herrera",
		"iso": "PA-6"
	},
	{
		"name": "Kuna Yala",
		"iso": "PA-KY"
	},
	{
		"name": "Los Santos",
		"iso": "PA-7"
	},
	{
		"name": "Ng?be-Bugl?",
		"iso": "PA-NB"
	},
	{
		"name": "Panam?",
		"iso": "PA-8"
	},
	{
		"name": "Panam? Oeste",
		"iso": "PA-10"
	},
	{
		"name": "Veraguas",
		"iso": "PA-9"
	}],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "PG",
        "name": "Papua New Guinea",
        "hasPostalCodes": true,
        "states": [{
		"name": "Bougainville",
		"iso": "PG-NSB"
	},
	{
		"name": "Central",
		"iso": "PG-CPM"
	},
	{
		"name": "Chimbu",
		"iso": "PG-CPK"
	},
	{
		"name": "East New Britain",
		"iso": "PG-EBR"
	},
	{
		"name": "East Sepik",
		"iso": "PG-ESW"
	},
	{
		"name": "Eastern Highlands",
		"iso": "PG-EHG"
	},
	{
		"name": "Enga",
		"iso": "PG-EPW"
	},
	{
		"name": "Gulf",
		"iso": "PG-GPK"
	},
	{
		"name": "Madang",
		"iso": "PG-MPM"
	},
	{
		"name": "Manus",
		"iso": "PG-MRL"
	},
	{
		"name": "Milne Bay",
		"iso": "PG-MBA"
	},
	{
		"name": "Morobe",
		"iso": "PG-MPL"
	},
	{
		"name": "National Capital District",
		"iso": "PG-NCD"
	},
	{
		"name": "New Ireland",
		"iso": "PG-NIK"
	},
	{
		"name": "Northern",
		"iso": "PG-NPP"
	},
	{
		"name": "Sandaun",
		"iso": "PG-SAN"
	},
	{
		"name": "Southern Highlands",
		"iso": "PG-SHM"
	},
	{
		"name": "West New Britain",
		"iso": "PG-WBK"
	},
	{
		"name": "Western",
		"iso": "PG-WPD"
	},
	{
		"name": "Western Highlands",
		"iso": "PG-WHM"
	}],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Americas",
        "iso": "PY",
        "name": "Paraguay",
        "hasPostalCodes": true,
        "states": [{
		"name": "Alto Paraguay",
		"iso": "PY-16"
	},
	{
		"name": "Alto Paran?",
		"iso": "PY-10"
	},
	{
		"name": "Amambay",
		"iso": "PY-13"
	},
	{
		"name": "Asunci?n",
		"iso": "PY-ASU"
	},
	{
		"name": "Boquer?n",
		"iso": "PY-19"
	},
	{
		"name": "Caaguaz?",
		"iso": "PY-5"
	},
	{
		"name": "Caazap?",
		"iso": "PY-6"
	},
	{
		"name": "Canindey?",
		"iso": "PY-14"
	},
	{
		"name": "Central",
		"iso": "PY-11"
	},
	{
		"name": "Concepci?n",
		"iso": "PY-1"
	},
	{
		"name": "Cordillera",
		"iso": "PY-3"
	},
	{
		"name": "Guair?",
		"iso": "PY-4"
	},
	{
		"name": "Itap?a",
		"iso": "PY-7"
	},
	{
		"name": "Misiones",
		"iso": "PY-8"
	},
	{
		"name": "Paraguar?",
		"iso": "PY-9"
	},
	{
		"name": "Presidente Hayes",
		"iso": "PY-15"
	},
	{
		"name": "San Pedro",
		"iso": "PY-2"
	},
	{
		"name": "?eembuc?",
		"iso": "PY-12"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "PE",
        "name": "Peru",
        "hasPostalCodes": true,
        "states": [{
		"name": "Amazonas",
		"iso": "PE-AMA"
	},
	{
		"name": "Ancash",
		"iso": "PE-ANC"
	},
	{
		"name": "Apur?mac",
		"iso": "PE-APU"
	},
	{
		"name": "Arequipa",
		"iso": "PE-ARE"
	},
	{
		"name": "Ayacucho",
		"iso": "PE-AYA"
	},
	{
		"name": "Cajamarca",
		"iso": "PE-CAJ"
	},
	{
		"name": "Cusco",
		"iso": "PE-CUS"
	},
	{
		"name": "El Callao",
		"iso": "PE-CAL"
	},
	{
		"name": "Huancavelica",
		"iso": "PE-HUV"
	},
	{
		"name": "Hu?nuco",
		"iso": "PE-HUC"
	},
	{
		"name": "Ica",
		"iso": "PE-ICA"
	},
	{
		"name": "Jun?n",
		"iso": "PE-JUN"
	},
	{
		"name": "La Libertad",
		"iso": "PE-LAL"
	},
	{
		"name": "Lambayeque",
		"iso": "PE-LAM"
	},
	{
		"name": "Lima",
		"iso": "PE-LIM"
	},
	{
		"name": "Loreto",
		"iso": "PE-LOR"
	},
	{
		"name": "Madre de Dios",
		"iso": "PE-MDD"
	},
	{
		"name": "Moquegua",
		"iso": "PE-MOQ"
	},
	{
		"name": "Municipalidad Metropolitana de Lima",
		"iso": "PE-LMA"
	},
	{
		"name": "Pasco",
		"iso": "PE-PAS"
	},
	{
		"name": "Piura",
		"iso": "PE-PIU"
	},
	{
		"name": "Puno",
		"iso": "PE-PUN"
	},
	{
		"name": "San Mart?n",
		"iso": "PE-SAM"
	},
	{
		"name": "Tacna",
		"iso": "PE-TAC"
	},
	{
		"name": "Tumbes",
		"iso": "PE-TUM"
	},
	{
		"name": "Ucayali",
		"iso": "PE-UCA"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "PH",
        "name": "Philippines",
        "hasPostalCodes": true,
        "states": [{
		"name": "Autonomous Region in Muslim Mindanao",
		"iso": "PH-14"
	},
	{
		"name": "Bicol",
		"iso": "PH-05"
	},
	{
		"name": "Cagayan Valley",
		"iso": "PH-02"
	},
	{
		"name": "Calabarzon",
		"iso": "PH-40"
	},
	{
		"name": "Caraga",
		"iso": "PH-13"
	},
	{
		"name": "Central Luzon",
		"iso": "PH-03"
	},
	{
		"name": "Central Visayas",
		"iso": "PH-07"
	},
	{
		"name": "Cordillera Administrative Region",
		"iso": "PH-15"
	},
	{
		"name": "Davao",
		"iso": "PH-11"
	},
	{
		"name": "Eastern Visayas",
		"iso": "PH-08"
	},
	{
		"name": "Ilocos",
		"iso": "PH-01"
	},
	{
		"name": "Mimaropa",
		"iso": "PH-41"
	},
	{
		"name": "National Capital Region",
		"iso": "PH-00"
	},
	{
		"name": "Northern Mindanao",
		"iso": "PH-10"
	},
	{
		"name": "Soccsksargen",
		"iso": "PH-12"
	},
	{
		"name": "Western Visayas",
		"iso": "PH-06"
	},
	{
		"name": "Zamboanga Peninsula",
		"iso": "PH-09"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Oceania",
        "iso": "PN",
        "name": "Pitcairn",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(PCR9 1ZZ)$"
    },
    {
        "region": "Europe",
        "iso": "PL",
        "name": "Poland",
        "hasPostalCodes": true,
        "states": [{
		"name": "Dolno?l?skie",
		"iso": "PL-DS"
	},
	{
		"name": "Kujawsko-pomorskie",
		"iso": "PL-KP"
	},
	{
		"name": "Lubelskie",
		"iso": "PL-LU"
	},
	{
		"name": "Lubuskie",
		"iso": "PL-LB"
	},
	{
		"name": "Mazowieckie",
		"iso": "PL-MZ"
	},
	{
		"name": "Ma?opolskie",
		"iso": "PL-MA"
	},
	{
		"name": "Opolskie",
		"iso": "PL-OP"
	},
	{
		"name": "Podkarpackie",
		"iso": "PL-PK"
	},
	{
		"name": "Podlaskie",
		"iso": "PL-PD"
	},
	{
		"name": "Pomorskie",
		"iso": "PL-PM"
	},
	{
		"name": "Warmi?sko-mazurskie",
		"iso": "PL-WN"
	},
	{
		"name": "Wielkopolskie",
		"iso": "PL-WP"
	},
	{
		"name": "Zachodniopomorskie",
		"iso": "PL-ZP"
	},
	{
		"name": "??dzkie",
		"iso": "PL-LD"
	},
	{
		"name": "?l?skie",
		"iso": "PL-SL"
	},
	{
		"name": "?wi?tokrzyskie",
		"iso": "PL-SK"
	}],
        "zipRegex": "^[0-9]{2}[-]([0-9]){3}$"
    },
    {
        "region": "Europe",
        "iso": "PT",
        "name": "Portugal",
        "hasPostalCodes": true,
        "states": [{
		"name": "Aveiro",
		"iso": "PT-01"
	},
	{
		"name": "Beja",
		"iso": "PT-02"
	},
	{
		"name": "Braga",
		"iso": "PT-03"
	},
	{
		"name": "Bragan?a",
		"iso": "PT-04"
	},
	{
		"name": "Castelo Branco",
		"iso": "PT-05"
	},
	{
		"name": "Coimbra",
		"iso": "PT-06"
	},
	{
		"name": "Faro",
		"iso": "PT-08"
	},
	{
		"name": "Guarda",
		"iso": "PT-09"
	},
	{
		"name": "Leiria",
		"iso": "PT-10"
	},
	{
		"name": "Lisboa",
		"iso": "PT-11"
	},
	{
		"name": "Portalegre",
		"iso": "PT-12"
	},
	{
		"name": "Porto",
		"iso": "PT-13"
	},
	{
		"name": "Regi?o Aut?noma da Madeira",
		"iso": "PT-30"
	},
	{
		"name": "Regi?o Aut?noma dos A?ores",
		"iso": "PT-20"
	},
	{
		"name": "Santar?m",
		"iso": "PT-14"
	},
	{
		"name": "Set?bal",
		"iso": "PT-15"
	},
	{
		"name": "Viana do Castelo",
		"iso": "PT-16"
	},
	{
		"name": "Vila Real",
		"iso": "PT-17"
	},
	{
		"name": "Viseu",
		"iso": "PT-18"
	},
	{
		"name": "?vora",
		"iso": "PT-07"
	}],
        "zipRegex": "^\\d{4}((-|\\s)?\\d{3})?$"
    },
    {
        "region": "Americas",
        "iso": "PR",
        "name": "Puerto Rico",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^\\d{5}((-|\\s)?\\d{4})?$"
    },
    {
        "region": "Asia",
        "iso": "QA",
        "name": "Qatar",
        "hasPostalCodes": false,
        "states": [{
		"name": "Ad Daw?ah",
		"iso": "QA-DA"
	},
	{
		"name": "Al Khawr wa adh Dhakh?rah",
		"iso": "QA-KH"
	},
	{
		"name": "Al Wakrah",
		"iso": "QA-WA"
	},
	{
		"name": "Ar Rayy?n",
		"iso": "QA-RA"
	},
	{
		"name": "Ash Sham?l",
		"iso": "QA-MS"
	},
	{
		"name": "Az? Za?`?yin",
		"iso": "QA-ZA"
	},
	{
		"name": "Umm ?al?l",
		"iso": "QA-US"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "RE",
        "name": "RÃ©union",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "[9]{1}[7|8][4|7|8]\\d{2}"
    },
    {
        "region": "Europe",
        "iso": "RO",
        "name": "Romania",
        "hasPostalCodes": true,
        "states": [{
		"name": "Alba",
		"iso": "RO-AB"
	},
	{
		"name": "Arad",
		"iso": "RO-AR"
	},
	{
		"name": "Arge?",
		"iso": "RO-AG"
	},
	{
		"name": "Bac?u",
		"iso": "RO-BC"
	},
	{
		"name": "Bihor",
		"iso": "RO-BH"
	},
	{
		"name": "Bistri?a-N?s?ud",
		"iso": "RO-BN"
	},
	{
		"name": "Boto?ani",
		"iso": "RO-BT"
	},
	{
		"name": "Bra?ov",
		"iso": "RO-BV"
	},
	{
		"name": "Br?ila",
		"iso": "RO-BR"
	},
	{
		"name": "Bucure?ti",
		"iso": "RO-B"
	},
	{
		"name": "Buz?u",
		"iso": "RO-BZ"
	},
	{
		"name": "Cara?-Severin",
		"iso": "RO-CS"
	},
	{
		"name": "Cluj",
		"iso": "RO-CJ"
	},
	{
		"name": "Constan?a",
		"iso": "RO-CT"
	},
	{
		"name": "Covasna",
		"iso": "RO-CV"
	},
	{
		"name": "C?l?ra?i",
		"iso": "RO-CL"
	},
	{
		"name": "Dolj",
		"iso": "RO-DJ"
	},
	{
		"name": "D?mbovi?a",
		"iso": "RO-DB"
	},
	{
		"name": "Gala?i",
		"iso": "RO-GL"
	},
	{
		"name": "Giurgiu",
		"iso": "RO-GR"
	},
	{
		"name": "Gorj",
		"iso": "RO-GJ"
	},
	{
		"name": "Harghita",
		"iso": "RO-HR"
	},
	{
		"name": "Hunedoara",
		"iso": "RO-HD"
	},
	{
		"name": "Ialomi?a",
		"iso": "RO-IL"
	},
	{
		"name": "Ia?i",
		"iso": "RO-IS"
	},
	{
		"name": "Ilfov",
		"iso": "RO-IF"
	},
	{
		"name": "Maramure?",
		"iso": "RO-MM"
	},
	{
		"name": "Mehedin?i",
		"iso": "RO-MH"
	},
	{
		"name": "Mure?",
		"iso": "RO-MS"
	},
	{
		"name": "Neam?",
		"iso": "RO-NT"
	},
	{
		"name": "Olt",
		"iso": "RO-OT"
	},
	{
		"name": "Prahova",
		"iso": "RO-PH"
	},
	{
		"name": "Satu Mare",
		"iso": "RO-SM"
	},
	{
		"name": "Sibiu",
		"iso": "RO-SB"
	},
	{
		"name": "Suceava",
		"iso": "RO-SV"
	},
	{
		"name": "S?laj",
		"iso": "RO-SJ"
	},
	{
		"name": "Teleorman",
		"iso": "RO-TR"
	},
	{
		"name": "Timi?",
		"iso": "RO-TM"
	},
	{
		"name": "Tulcea",
		"iso": "RO-TL"
	},
	{
		"name": "Vaslui",
		"iso": "RO-VS"
	},
	{
		"name": "Vrancea",
		"iso": "RO-VN"
	},
	{
		"name": "V?lcea",
		"iso": "RO-VL"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Europe",
        "iso": "RU",
        "name": "Russian Federation",
        "hasPostalCodes": true,
        "states": [{
		"name": "Amurskaya oblast'",
		"iso": "RU-AMU"
	},
	{
		"name": "Arkhangel'skaya oblast'",
		"iso": "RU-ARK"
	},
	{
		"name": "Astrakhanskaya oblast'",
		"iso": "RU-AST"
	},
	{
		"name": "Belgorodskaya oblast'",
		"iso": "RU-BEL"
	},
	{
		"name": "Bryanskaya oblast'",
		"iso": "RU-BRY"
	},
	{
		"name": "Chelyabinskaya oblast'",
		"iso": "RU-CHE"
	},
	{
		"name": "Irkutskaya oblast'",
		"iso": "RU-IRK"
	},
	{
		"name": "Ivanovskaya oblast'",
		"iso": "RU-IVA"
	},
	{
		"name": "Kaliningradskaya oblast'",
		"iso": "RU-KGD"
	},
	{
		"name": "Kaluzhskaya oblast'",
		"iso": "RU-KLU"
	},
	{
		"name": "Kemerovskaya oblast'",
		"iso": "RU-KEM"
	},
	{
		"name": "Kirovskaya oblast'",
		"iso": "RU-KIR"
	},
	{
		"name": "Kostromskaya oblast'",
		"iso": "RU-KOS"
	},
	{
		"name": "Kurganskaya oblast'",
		"iso": "RU-KGN"
	},
	{
		"name": "Kurskaya oblast'",
		"iso": "RU-KRS"
	},
	{
		"name": "Leningradskaya oblast'",
		"iso": "RU-LEN"
	},
	{
		"name": "Lipetskaya oblast'",
		"iso": "RU-LIP"
	},
	{
		"name": "Magadanskaya oblast'",
		"iso": "RU-MAG"
	},
	{
		"name": "Moskovskaya oblast'",
		"iso": "RU-MOS"
	},
	{
		"name": "Murmanskaya oblast'",
		"iso": "RU-MUR"
	},
	{
		"name": "Nizhegorodskaya oblast'",
		"iso": "RU-NIZ"
	},
	{
		"name": "Novgorodskaya oblast'",
		"iso": "RU-NGR"
	},
	{
		"name": "Novosibirskaya oblast'",
		"iso": "RU-NVS"
	},
	{
		"name": "Omskaya oblast'",
		"iso": "RU-OMS"
	},
	{
		"name": "Orenburgskaya oblast'",
		"iso": "RU-ORE"
	},
	{
		"name": "Orlovskaya oblast'",
		"iso": "RU-ORL"
	},
	{
		"name": "Penzenskaya oblast'",
		"iso": "RU-PNZ"
	},
	{
		"name": "Pskovskaya oblast'",
		"iso": "RU-PSK"
	},
	{
		"name": "Rostovskaya oblast'",
		"iso": "RU-ROS"
	},
	{
		"name": "Ryazanskaya oblast'",
		"iso": "RU-RYA"
	},
	{
		"name": "Sakhalinskaya oblast'",
		"iso": "RU-SAK"
	},
	{
		"name": "Samarskaya oblast'",
		"iso": "RU-SAM"
	},
	{
		"name": "Saratovskaya oblast'",
		"iso": "RU-SAR"
	},
	{
		"name": "Smolenskaya oblast'",
		"iso": "RU-SMO"
	},
	{
		"name": "Sverdlovskaya oblast'",
		"iso": "RU-SVE"
	},
	{
		"name": "Tambovskaya oblast'",
		"iso": "RU-TAM"
	},
	{
		"name": "Tomskaya oblast'",
		"iso": "RU-TOM"
	},
	{
		"name": "Tul'skaya oblast'",
		"iso": "RU-TUL"
	},
	{
		"name": "Tverskaya oblast'",
		"iso": "RU-TVE"
	},
	{
		"name": "Tyumenskaya oblast'",
		"iso": "RU-TYU"
	},
	{
		"name": "Ul'yanovskaya oblast'",
		"iso": "RU-ULY"
	},
	{
		"name": "Vladimirskaya oblast'",
		"iso": "RU-VLA"
	},
	{
		"name": "Volgogradskaya oblast'",
		"iso": "RU-VGG"
	},
	{
		"name": "Vologodskaya oblast'",
		"iso": "RU-VLG"
	},
	{
		"name": "Voronezhskaya oblast'",
		"iso": "RU-VOR"
	},
	{
		"name": "Yaroslavskaya oblast'",
		"iso": "RU-YAR"
	},
	{
		"name": "Altayskiy kray",
		"iso": "RU-ALT"
	},
	{
		"name": "Kamchatskiy kray",
		"iso": "RU-KAM"
	},
	{
		"name": "Khabarovskiy kray",
		"iso": "RU-KHA"
	},
	{
		"name": "Krasnodarskiy kray",
		"iso": "RU-KDA"
	},
	{
		"name": "Krasnoyarskiy kray",
		"iso": "RU-KYA"
	},
	{
		"name": "Permskiy kray",
		"iso": "RU-PER"
	},
	{
		"name": "Primorskiy kray",
		"iso": "RU-PRI"
	},
	{
		"name": "Stavropol'skiy kray",
		"iso": "RU-STA"
	},
	{
		"name": "Zabaykal'skiy kray",
		"iso": "RU-ZAB"
	},
	{
		"name": "Moskva",
		"iso": "RU-MOW"
	},
	{
		"name": "Sankt-Peterburg",
		"iso": "RU-SPE"
	},
	{
		"name": "Chukotskiy avtonomnyy okrug",
		"iso": "RU-CHU"
	},
	{
		"name": "Khanty-Mansiyskiy avtonomnyy okrug-Yugra",
		"iso": "RU-KHM"
	},
	{
		"name": "Nenetskiy avtonomnyy okrug",
		"iso": "RU-NEN"
	},
	{
		"name": "Yamalo-Nenetskiy avtonomnyy okrug",
		"iso": "RU-YAN"
	},
	{
		"name": "Yevreyskaya avtonomnaya oblast'",
		"iso": "RU-YEV"
	},
	{
		"name": "Adygeya, Respublika",
		"iso": "RU-AD"
	},
	{
		"name": "Altay, Respublika",
		"iso": "RU-AL"
	},
	{
		"name": "Bashkortostan, Respublika",
		"iso": "RU-BA"
	},
	{
		"name": "Buryatiya, Respublika",
		"iso": "RU-BU"
	},
	{
		"name": "Chechenskaya Respublika",
		"iso": "RU-CE"
	},
	{
		"name": "Chuvashskaya Respublika",
		"iso": "RU-CU"
	},
	{
		"name": "Dagestan, Respublika",
		"iso": "RU-DA"
	},
	{
		"name": "Ingushetiya, Respublika",
		"iso": "RU-IN"
	},
	{
		"name": "Kabardino-Balkarskaya Respublika",
		"iso": "RU-KB"
	},
	{
		"name": "Kalmykiya, Respublika",
		"iso": "RU-KL"
	},
	{
		"name": "Karachayevo-Cherkesskaya Respublika",
		"iso": "RU-KC"
	},
	{
		"name": "Kareliya, Respublika",
		"iso": "RU-KR"
	},
	{
		"name": "Khakasiya, Respublika",
		"iso": "RU-KK"
	},
	{
		"name": "Komi, Respublika",
		"iso": "RU-KO"
	},
	{
		"name": "Mariy El, Respublika",
		"iso": "RU-ME"
	},
	{
		"name": "Mordoviya, Respublika",
		"iso": "RU-MO"
	},
	{
		"name": "Sakha, Respublika",
		"iso": "RU-SA"
	},
	{
		"name": "Severnaya Osetiya-Alaniya, Respublika",
		"iso": "RU-SE"
	},
	{
		"name": "Tatarstan, Respublika",
		"iso": "RU-TA"
	},
	{
		"name": "Tyva, Respublika",
		"iso": "RU-TY"
	},
	{
		"name": "Udmurtskaya Respublika",
		"iso": "RU-UD"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Africa",
        "iso": "RW",
        "name": "Rwanda",
        "hasPostalCodes": false,
        "states": [{
		"name": "Est",
		"iso": "RW-02"
	},
	{
		"name": "Nord",
		"iso": "RW-03"
	},
	{
		"name": "Ouest",
		"iso": "RW-04"
	},
	{
		"name": "Sud",
		"iso": "RW-05"
	},
	{
		"name": "Ville de Kigali",
		"iso": "RW-01"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BL",
        "name": "Saint BarthÃ©lemy",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "SH",
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ascension",
		"iso": "SH-AC"
	},
	{
		"name": "Saint Helena",
		"iso": "SH-HL"
	},
	{
		"name": "Tristan da Cunha",
		"iso": "SH-TA"
	}],
        "zipRegex": "^[A-Z]{4} (1ZZ)$"
    },
    {
        "region": "Americas",
        "iso": "KN",
        "name": "Saint Kitts and Nevis",
        "hasPostalCodes": false,
        "states": [{
		"name": "Nevis",
		"iso": "KN-N"
	},
	{
		"name": "Saint Kitts",
		"iso": "KN-K"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "LC",
        "name": "Saint Lucia",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "MF",
        "name": "Saint Martin (French part)",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "PM",
        "name": "Saint Pierre and Miquelon",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "VC",
        "name": "Saint Vincent and the Grenadines",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "(VC)(\\d{4})"
    },
    {
        "region": "Oceania",
        "iso": "WS",
        "name": "Samoa",
        "hasPostalCodes": true,
        "states": [{
		"name": "A'ana",
		"iso": "WS-AA"
	},
	{
		"name": "Aiga-i-le-Tai",
		"iso": "WS-AL"
	},
	{
		"name": "Atua",
		"iso": "WS-AT"
	},
	{
		"name": "Fa'asaleleaga",
		"iso": "WS-FA"
	},
	{
		"name": "Gaga'emauga",
		"iso": "WS-GE"
	},
	{
		"name": "Gagaifomauga",
		"iso": "WS-GI"
	},
	{
		"name": "Palauli",
		"iso": "WS-PA"
	},
	{
		"name": "Satupa'itea",
		"iso": "WS-SA"
	},
	{
		"name": "Tuamasaga",
		"iso": "WS-TU"
	},
	{
		"name": "Va'a-o-Fonoti",
		"iso": "WS-VF"
	},
	{
		"name": "Vaisigano",
		"iso": "WS-VS"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "SM",
        "name": "San Marino",
        "hasPostalCodes": true,
        "states": [{
		"name": "Acquaviva",
		"iso": "SM-01"
	},
	{
		"name": "Borgo Maggiore",
		"iso": "SM-06"
	},
	{
		"name": "Chiesanuova",
		"iso": "SM-02"
	},
	{
		"name": "Domagnano",
		"iso": "SM-03"
	},
	{
		"name": "Faetano",
		"iso": "SM-04"
	},
	{
		"name": "Fiorentino",
		"iso": "SM-05"
	},
	{
		"name": "Montegiardino",
		"iso": "SM-08"
	},
	{
		"name": "San Marino",
		"iso": "SM-07"
	},
	{
		"name": "Serravalle",
		"iso": "SM-09"
	}],
        "zipRegex": "^(4789\\d)$"
    },
    {
        "region": "Africa",
        "iso": "ST",
        "name": "Sao Tome and Principe",
        "hasPostalCodes": false,
        "states": [{
		"name": "Pr?ncipe",
		"iso": "ST-P"
	},
	{
		"name": "S?o Tom?",
		"iso": "ST-S"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "SA",
        "name": "Saudi Arabia",
        "hasPostalCodes": false,
        "states": [{
		"name": "Al B??ah",
		"iso": "SA-11"
	},
	{
		"name": "Al Jawf",
		"iso": "SA-12"
	},
	{
		"name": "Al Mad?nah",
		"iso": "SA-03"
	},
	{
		"name": "Al Qa??m",
		"iso": "SA-05"
	},
	{
		"name": "Al ?ud?d ash Sham?l?yah",
		"iso": "SA-08"
	},
	{
		"name": "Ar Riy??",
		"iso": "SA-01"
	},
	{
		"name": "Ash Sharq?yah",
		"iso": "SA-04"
	},
	{
		"name": "J?z?n",
		"iso": "SA-09"
	},
	{
		"name": "Makkah",
		"iso": "SA-02"
	},
	{
		"name": "Najr?n",
		"iso": "SA-10"
	},
	{
		"name": "Tab?k",
		"iso": "SA-07"
	},
	{
		"name": "??s?r",
		"iso": "SA-14"
	},
	{
		"name": "??'il",
		"iso": "SA-06"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "SN",
        "name": "Senegal",
        "hasPostalCodes": true,
        "states": [{
		"name": "Dakar",
		"iso": "SN-DK"
	},
	{
		"name": "Diourbel",
		"iso": "SN-DB"
	},
	{
		"name": "Fatick",
		"iso": "SN-FK"
	},
	{
		"name": "Kaffrine",
		"iso": "SN-KA"
	},
	{
		"name": "Kaolack",
		"iso": "SN-KL"
	},
	{
		"name": "Kolda",
		"iso": "SN-KD"
	},
	{
		"name": "K?dougou",
		"iso": "SN-KE"
	},
	{
		"name": "Louga",
		"iso": "SN-LG"
	},
	{
		"name": "Matam",
		"iso": "SN-MT"
	},
	{
		"name": "Saint-Louis",
		"iso": "SN-SL"
	},
	{
		"name": "S?dhiou",
		"iso": "SN-SE"
	},
	{
		"name": "Tambacounda",
		"iso": "SN-TC"
	},
	{
		"name": "Thi?s",
		"iso": "SN-TH"
	},
	{
		"name": "Ziguinchor",
		"iso": "SN-ZG"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "RS",
        "name": "Serbia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Kosovo-Metohija",
		"iso": "RS-KM"
	},
	{
		"name": "Vojvodina",
		"iso": "RS-VO"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "SC",
        "name": "Seychelles",
        "hasPostalCodes": false,
        "states": [{
		"name": "Anse Boileau",
		"iso": "SC-02"
	},
	{
		"name": "Anse Etoile",
		"iso": "SC-03"
	},
	{
		"name": "Anse Royale",
		"iso": "SC-05"
	},
	{
		"name": "Anse aux Pins",
		"iso": "SC-01"
	},
	{
		"name": "Au Cap",
		"iso": "SC-04"
	},
	{
		"name": "Baie Lazare",
		"iso": "SC-06"
	},
	{
		"name": "Baie Sainte Anne",
		"iso": "SC-07"
	},
	{
		"name": "Beau Vallon",
		"iso": "SC-08"
	},
	{
		"name": "Bel Air",
		"iso": "SC-09"
	},
	{
		"name": "Bel Ombre",
		"iso": "SC-10"
	},
	{
		"name": "Cascade",
		"iso": "SC-11"
	},
	{
		"name": "English River",
		"iso": "SC-16"
	},
	{
		"name": "Glacis",
		"iso": "SC-12"
	},
	{
		"name": "Grand Anse Mahe",
		"iso": "SC-13"
	},
	{
		"name": "Grand Anse Praslin",
		"iso": "SC-14"
	},
	{
		"name": "La Digue",
		"iso": "SC-15"
	},
	{
		"name": "Les Mamelles",
		"iso": "SC-24"
	},
	{
		"name": "Mont Buxton",
		"iso": "SC-17"
	},
	{
		"name": "Mont Fleuri",
		"iso": "SC-18"
	},
	{
		"name": "Plaisance",
		"iso": "SC-19"
	},
	{
		"name": "Pointe Larue",
		"iso": "SC-20"
	},
	{
		"name": "Port Glaud",
		"iso": "SC-21"
	},
	{
		"name": "Roche Caiman",
		"iso": "SC-25"
	},
	{
		"name": "Saint Louis",
		"iso": "SC-22"
	},
	{
		"name": "Takamaka",
		"iso": "SC-23"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "SL",
        "name": "Sierra Leone",
        "hasPostalCodes": false,
        "states": [{
		"name": "Eastern",
		"iso": "SL-E"
	},
	{
		"name": "Northern",
		"iso": "SL-N"
	},
	{
		"name": "Southern",
		"iso": "SL-S"
	},
	{
		"name": "Western Area",
		"iso": "SL-W"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "SG",
        "name": "Singapore",
        "hasPostalCodes": true,
        "states": [{
		"name": "Central Singapore",
		"iso": "SG-01"
	},
	{
		"name": "North East",
		"iso": "SG-02"
	},
	{
		"name": "North West",
		"iso": "SG-03"
	},
	{
		"name": "South East",
		"iso": "SG-04"
	},
	{
		"name": "South West",
		"iso": "SG-05"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Americas",
        "iso": "SX",
        "name": "Sint Maarten (Dutch part)",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(0000 AA)$"
    },
    {
        "region": "Europe",
        "iso": "SK",
        "name": "Slovakia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Banskobystrick? kraj",
		"iso": "SK-BC"
	},
	{
		"name": "Bratislavsk? kraj",
		"iso": "SK-BL"
	},
	{
		"name": "Ko?ick? kraj",
		"iso": "SK-KI"
	},
	{
		"name": "Nitriansky kraj",
		"iso": "SK-NI"
	},
	{
		"name": "Pre?ovsk? kraj",
		"iso": "SK-PV"
	},
	{
		"name": "Tren?iansky kraj",
		"iso": "SK-TC"
	},
	{
		"name": "Trnavsk? kraj",
		"iso": "SK-TA"
	},
	{
		"name": "?ilinsk? kraj",
		"iso": "SK-ZI"
	}],
        "zipRegex": "^(\\d{3} \\d{2})$"
    },
    {
        "region": "Europe",
        "iso": "SI",
        "name": "Slovenia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ajdov??ina",
		"iso": "SI-001"
	},
	{
		"name": "Apa?e",
		"iso": "SI-195"
	},
	{
		"name": "Beltinci",
		"iso": "SI-002"
	},
	{
		"name": "Benedikt",
		"iso": "SI-148"
	},
	{
		"name": "Bistrica ob Sotli",
		"iso": "SI-149"
	},
	{
		"name": "Bled",
		"iso": "SI-003"
	},
	{
		"name": "Bloke",
		"iso": "SI-150"
	},
	{
		"name": "Bohinj",
		"iso": "SI-004"
	},
	{
		"name": "Borovnica",
		"iso": "SI-005"
	},
	{
		"name": "Bovec",
		"iso": "SI-006"
	},
	{
		"name": "Braslov?e",
		"iso": "SI-151"
	},
	{
		"name": "Brda",
		"iso": "SI-007"
	},
	{
		"name": "Brezovica",
		"iso": "SI-008"
	},
	{
		"name": "Bre?ice",
		"iso": "SI-009"
	},
	{
		"name": "Cankova",
		"iso": "SI-152"
	},
	{
		"name": "Celje",
		"iso": "SI-011"
	},
	{
		"name": "Cerklje na Gorenjskem",
		"iso": "SI-012"
	},
	{
		"name": "Cerknica",
		"iso": "SI-013"
	},
	{
		"name": "Cerkno",
		"iso": "SI-014"
	},
	{
		"name": "Cerkvenjak",
		"iso": "SI-153"
	},
	{
		"name": "Cirkulane",
		"iso": "SI-196"
	},
	{
		"name": "Destrnik",
		"iso": "SI-018"
	},
	{
		"name": "Diva?a",
		"iso": "SI-019"
	},
	{
		"name": "Dobje",
		"iso": "SI-154"
	},
	{
		"name": "Dobrepolje",
		"iso": "SI-020"
	},
	{
		"name": "Dobrna",
		"iso": "SI-155"
	},
	{
		"name": "Dobrova–Polhov Gradec",
		"iso": "SI-021"
	},
	{
		"name": "Dobrovnik",
		"iso": "SI-156"
	},
	{
		"name": "Dol pri Ljubljani",
		"iso": "SI-022"
	},
	{
		"name": "Dolenjske Toplice",
		"iso": "SI-157"
	},
	{
		"name": "Dom?ale",
		"iso": "SI-023"
	},
	{
		"name": "Dornava",
		"iso": "SI-024"
	},
	{
		"name": "Dravograd",
		"iso": "SI-025"
	},
	{
		"name": "Duplek",
		"iso": "SI-026"
	},
	{
		"name": "Gorenja vas–Poljane",
		"iso": "SI-027"
	},
	{
		"name": "Gori?nica",
		"iso": "SI-028"
	},
	{
		"name": "Gorje",
		"iso": "SI-207"
	},
	{
		"name": "Gornja Radgona",
		"iso": "SI-029"
	},
	{
		"name": "Gornji Grad",
		"iso": "SI-030"
	},
	{
		"name": "Gornji Petrovci",
		"iso": "SI-031"
	},
	{
		"name": "Grad",
		"iso": "SI-158"
	},
	{
		"name": "Grosuplje",
		"iso": "SI-032"
	},
	{
		"name": "Hajdina",
		"iso": "SI-159"
	},
	{
		"name": "Hodo?",
		"iso": "SI-161"
	},
	{
		"name": "Horjul",
		"iso": "SI-162"
	},
	{
		"name": "Ho?e–Slivnica",
		"iso": "SI-160"
	},
	{
		"name": "Hrastnik",
		"iso": "SI-034"
	},
	{
		"name": "Hrpelje-Kozina",
		"iso": "SI-035"
	},
	{
		"name": "Idrija",
		"iso": "SI-036"
	},
	{
		"name": "Ig",
		"iso": "SI-037"
	},
	{
		"name": "Ilirska Bistrica",
		"iso": "SI-038"
	},
	{
		"name": "Ivan?na Gorica",
		"iso": "SI-039"
	},
	{
		"name": "Izola",
		"iso": "SI-040"
	},
	{
		"name": "Jesenice",
		"iso": "SI-041"
	},
	{
		"name": "Jezersko",
		"iso": "SI-163"
	},
	{
		"name": "Jur?inci",
		"iso": "SI-042"
	},
	{
		"name": "Kamnik",
		"iso": "SI-043"
	},
	{
		"name": "Kanal",
		"iso": "SI-044"
	},
	{
		"name": "Kidri?evo",
		"iso": "SI-045"
	},
	{
		"name": "Kobarid",
		"iso": "SI-046"
	},
	{
		"name": "Kobilje",
		"iso": "SI-047"
	},
	{
		"name": "Komen",
		"iso": "SI-049"
	},
	{
		"name": "Komenda",
		"iso": "SI-164"
	},
	{
		"name": "Koper",
		"iso": "SI-050"
	},
	{
		"name": "Kosanjevica na Krki",
		"iso": "SI-197"
	},
	{
		"name": "Kostel",
		"iso": "SI-165"
	},
	{
		"name": "Kozje",
		"iso": "SI-051"
	},
	{
		"name": "Ko?evje",
		"iso": "SI-048"
	},
	{
		"name": "Kranj",
		"iso": "SI-052"
	},
	{
		"name": "Kranjska Gora",
		"iso": "SI-053"
	},
	{
		"name": "Kri?evci",
		"iso": "SI-166"
	},
	{
		"name": "Kr?ko",
		"iso": "SI-054"
	},
	{
		"name": "Kungota",
		"iso": "SI-055"
	},
	{
		"name": "Kuzma",
		"iso": "SI-056"
	},
	{
		"name": "La?ko",
		"iso": "SI-057"
	},
	{
		"name": "Lenart",
		"iso": "SI-058"
	},
	{
		"name": "Lendava",
		"iso": "SI-059"
	},
	{
		"name": "Litija",
		"iso": "SI-060"
	},
	{
		"name": "Ljubljana",
		"iso": "SI-061"
	},
	{
		"name": "Ljubno",
		"iso": "SI-062"
	},
	{
		"name": "Ljutomer",
		"iso": "SI-063"
	},
	{
		"name": "Log-Dragomer",
		"iso": "SI-208"
	},
	{
		"name": "Logatec",
		"iso": "SI-064"
	},
	{
		"name": "Lovrenc na Pohorju",
		"iso": "SI-167"
	},
	{
		"name": "Lo?ka Dolina",
		"iso": "SI-065"
	},
	{
		"name": "Lo?ki Potok",
		"iso": "SI-066"
	},
	{
		"name": "Lukovica",
		"iso": "SI-068"
	},
	{
		"name": "Lu?e",
		"iso": "SI-067"
	},
	{
		"name": "Maj?perk",
		"iso": "SI-069"
	},
	{
		"name": "Makole",
		"iso": "SI-198"
	},
	{
		"name": "Maribor",
		"iso": "SI-070"
	},
	{
		"name": "Markovci",
		"iso": "SI-168"
	},
	{
		"name": "Medvode",
		"iso": "SI-071"
	},
	{
		"name": "Menge?",
		"iso": "SI-072"
	},
	{
		"name": "Metlika",
		"iso": "SI-073"
	},
	{
		"name": "Me?ica",
		"iso": "SI-074"
	},
	{
		"name": "Miklav? na Dravskem Polju",
		"iso": "SI-169"
	},
	{
		"name": "Miren–Kostanjevica",
		"iso": "SI-075"
	},
	{
		"name": "Mirna Pe?",
		"iso": "SI-170"
	},
	{
		"name": "Mislinja",
		"iso": "SI-076"
	},
	{
		"name": "Mokronog–Trebelno",
		"iso": "SI-199"
	},
	{
		"name": "Moravske Toplice",
		"iso": "SI-078"
	},
	{
		"name": "Morav?e",
		"iso": "SI-077"
	},
	{
		"name": "Mozirje",
		"iso": "SI-079"
	},
	{
		"name": "Murska Sobota",
		"iso": "SI-080"
	},
	{
		"name": "Muta",
		"iso": "SI-081"
	},
	{
		"name": "Naklo",
		"iso": "SI-082"
	},
	{
		"name": "Nazarje",
		"iso": "SI-083"
	},
	{
		"name": "Nova Gorica",
		"iso": "SI-084"
	},
	{
		"name": "Novo Mesto",
		"iso": "SI-085"
	},
	{
		"name": "Odranci",
		"iso": "SI-086"
	},
	{
		"name": "Oplotnica",
		"iso": "SI-171"
	},
	{
		"name": "Ormo?",
		"iso": "SI-087"
	},
	{
		"name": "Osilnica",
		"iso": "SI-088"
	},
	{
		"name": "Pesnica",
		"iso": "SI-089"
	},
	{
		"name": "Piran",
		"iso": "SI-090"
	},
	{
		"name": "Pivka",
		"iso": "SI-091"
	},
	{
		"name": "Podlehnik",
		"iso": "SI-172"
	},
	{
		"name": "Podvelka",
		"iso": "SI-093"
	},
	{
		"name": "Pod?etrtek",
		"iso": "SI-092"
	},
	{
		"name": "Polj?ane",
		"iso": "SI-200"
	},
	{
		"name": "Polzela",
		"iso": "SI-173"
	},
	{
		"name": "Postojna",
		"iso": "SI-094"
	},
	{
		"name": "Prebold",
		"iso": "SI-174"
	},
	{
		"name": "Preddvor",
		"iso": "SI-095"
	},
	{
		"name": "Prevalje",
		"iso": "SI-175"
	},
	{
		"name": "Ptuj",
		"iso": "SI-096"
	},
	{
		"name": "Puconci",
		"iso": "SI-097"
	},
	{
		"name": "Radenci",
		"iso": "SI-100"
	},
	{
		"name": "Rade?e",
		"iso": "SI-099"
	},
	{
		"name": "Radlje ob Dravi",
		"iso": "SI-101"
	},
	{
		"name": "Radovljica",
		"iso": "SI-102"
	},
	{
		"name": "Ravne na Koro?kem",
		"iso": "SI-103"
	},
	{
		"name": "Razkri?je",
		"iso": "SI-176"
	},
	{
		"name": "Ra?e–Fram",
		"iso": "SI-098"
	},
	{
		"name": "Ren?e-Vogrsko",
		"iso": "SI-201"
	},
	{
		"name": "Re?ica ob Savinji",
		"iso": "SI-209"
	},
	{
		"name": "Ribnica",
		"iso": "SI-104"
	},
	{
		"name": "Ribnica na Pohorju",
		"iso": "SI-177"
	},
	{
		"name": "Rogatec",
		"iso": "SI-107"
	},
	{
		"name": "Roga?ka Slatina",
		"iso": "SI-106"
	},
	{
		"name": "Roga?ovci",
		"iso": "SI-105"
	},
	{
		"name": "Ru?e",
		"iso": "SI-108"
	},
	{
		"name": "Selnica ob Dravi",
		"iso": "SI-178"
	},
	{
		"name": "Semi?",
		"iso": "SI-109"
	},
	{
		"name": "Sevnica",
		"iso": "SI-110"
	},
	{
		"name": "Se?ana",
		"iso": "SI-111"
	},
	{
		"name": "Slovenj Gradec",
		"iso": "SI-112"
	},
	{
		"name": "Slovenska Bistrica",
		"iso": "SI-113"
	},
	{
		"name": "Slovenske Konjice",
		"iso": "SI-114"
	},
	{
		"name": "Sodra?ica",
		"iso": "SI-179"
	},
	{
		"name": "Sol?ava",
		"iso": "SI-180"
	},
	{
		"name": "Sredi??e ob Dravi",
		"iso": "SI-202"
	},
	{
		"name": "Star?e",
		"iso": "SI-115"
	},
	{
		"name": "Stra?a",
		"iso": "SI-203"
	},
	{
		"name": "Sveta Ana",
		"iso": "SI-181"
	},
	{
		"name": "Sveta Trojica v Slovenskih Goricah",
		"iso": "SI-204"
	},
	{
		"name": "Sveti Andra? v Slovenskih Goricah",
		"iso": "SI-182"
	},
	{
		"name": "Sveti Jurij",
		"iso": "SI-116"
	},
	{
		"name": "Sveti Jurij v Slovenskih Goricah",
		"iso": "SI-210"
	},
	{
		"name": "Sveti Toma?",
		"iso": "SI-205"
	},
	{
		"name": "Tabor",
		"iso": "SI-184"
	},
	{
		"name": "Ti?ina",
		"iso": "SI-010"
	},
	{
		"name": "Tolmin",
		"iso": "SI-128"
	},
	{
		"name": "Trbovlje",
		"iso": "SI-129"
	},
	{
		"name": "Trebnje",
		"iso": "SI-130"
	},
	{
		"name": "Trnovska Vas",
		"iso": "SI-185"
	},
	{
		"name": "Trzin",
		"iso": "SI-186"
	},
	{
		"name": "Tr?i?",
		"iso": "SI-131"
	},
	{
		"name": "Turni??e",
		"iso": "SI-132"
	},
	{
		"name": "Velenje",
		"iso": "SI-133"
	},
	{
		"name": "Velika Polana",
		"iso": "SI-187"
	},
	{
		"name": "Velike La??e",
		"iso": "SI-134"
	},
	{
		"name": "Ver?ej",
		"iso": "SI-188"
	},
	{
		"name": "Videm",
		"iso": "SI-135"
	},
	{
		"name": "Vipava",
		"iso": "SI-136"
	},
	{
		"name": "Vitanje",
		"iso": "SI-137"
	},
	{
		"name": "Vodice",
		"iso": "SI-138"
	},
	{
		"name": "Vojnik",
		"iso": "SI-139"
	},
	{
		"name": "Vransko",
		"iso": "SI-189"
	},
	{
		"name": "Vrhnika",
		"iso": "SI-140"
	},
	{
		"name": "Vuzenica",
		"iso": "SI-141"
	},
	{
		"name": "Zagorje ob Savi",
		"iso": "SI-142"
	},
	{
		"name": "Zavr?",
		"iso": "SI-143"
	},
	{
		"name": "Zre?e",
		"iso": "SI-144"
	},
	{
		"name": "?ren?ovci",
		"iso": "SI-015"
	},
	{
		"name": "?rna na Koro?kem",
		"iso": "SI-016"
	},
	{
		"name": "?rnomelj",
		"iso": "SI-017"
	},
	{
		"name": "?alovci",
		"iso": "SI-033"
	},
	{
		"name": "?empeter–Vrtojba",
		"iso": "SI-183"
	},
	{
		"name": "?entilj",
		"iso": "SI-118"
	},
	{
		"name": "?entjernej",
		"iso": "SI-119"
	},
	{
		"name": "?entjur",
		"iso": "SI-120"
	},
	{
		"name": "?entrupert",
		"iso": "SI-211"
	},
	{
		"name": "?en?ur",
		"iso": "SI-117"
	},
	{
		"name": "?kocjan",
		"iso": "SI-121"
	},
	{
		"name": "?kofja Loka",
		"iso": "SI-122"
	},
	{
		"name": "?kofljica",
		"iso": "SI-123"
	},
	{
		"name": "?marje pri Jel?ah",
		"iso": "SI-124"
	},
	{
		"name": "?marje?ke Toplice",
		"iso": "SI-206"
	},
	{
		"name": "?martno ob Paki",
		"iso": "SI-125"
	},
	{
		"name": "?martno pri Litiji",
		"iso": "SI-194"
	},
	{
		"name": "?o?tanj",
		"iso": "SI-126"
	},
	{
		"name": "?tore",
		"iso": "SI-127"
	},
	{
		"name": "?alec",
		"iso": "SI-190"
	},
	{
		"name": "?elezniki",
		"iso": "SI-146"
	},
	{
		"name": "?etale",
		"iso": "SI-191"
	},
	{
		"name": "?iri",
		"iso": "SI-147"
	},
	{
		"name": "?irovnica",
		"iso": "SI-192"
	},
	{
		"name": "?u?emberk",
		"iso": "SI-193"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Oceania",
        "iso": "SB",
        "name": "Solomon Islands",
        "hasPostalCodes": false,
        "states": [{
		"name": "Capital Territory",
		"iso": "SB-CT"
	},
	{
		"name": "Central",
		"iso": "SB-CE"
	},
	{
		"name": "Choiseul",
		"iso": "SB-CH"
	},
	{
		"name": "Guadalcanal",
		"iso": "SB-GU"
	},
	{
		"name": "Isabel",
		"iso": "SB-IS"
	},
	{
		"name": "Makira-Ulawa",
		"iso": "SB-MK"
	},
	{
		"name": "Malaita",
		"iso": "SB-ML"
	},
	{
		"name": "Rennell and Bellona",
		"iso": "SB-RB"
	},
	{
		"name": "Temotu",
		"iso": "SB-TE"
	},
	{
		"name": "Western",
		"iso": "SB-WE"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "SO",
        "name": "Somalia",
        "hasPostalCodes": false,
        "states": [{
		"name": "Awdal",
		"iso": "SO-AW"
	},
	{
		"name": "Bakool",
		"iso": "SO-BK"
	},
	{
		"name": "Banaadir",
		"iso": "SO-BN"
	},
	{
		"name": "Bari",
		"iso": "SO-BR"
	},
	{
		"name": "Bay",
		"iso": "SO-BY"
	},
	{
		"name": "Galguduud",
		"iso": "SO-GA"
	},
	{
		"name": "Gedo",
		"iso": "SO-GE"
	},
	{
		"name": "Hiiraan",
		"iso": "SO-HI"
	},
	{
		"name": "Jubbada Dhexe",
		"iso": "SO-JD"
	},
	{
		"name": "Jubbada Hoose",
		"iso": "SO-JH"
	},
	{
		"name": "Mudug",
		"iso": "SO-MU"
	},
	{
		"name": "Nugaal",
		"iso": "SO-NU"
	},
	{
		"name": "Sanaag",
		"iso": "SO-SA"
	},
	{
		"name": "Shabeellaha Dhexe",
		"iso": "SO-SD"
	},
	{
		"name": "Shabeellaha Hoose",
		"iso": "SO-SH"
	},
	{
		"name": "Sool",
		"iso": "SO-SO"
	},
	{
		"name": "Togdheer",
		"iso": "SO-TO"
	},
	{
		"name": "Woqooyi Galbeed",
		"iso": "SO-WO"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "ZA",
        "name": "South Africa",
        "hasPostalCodes": true,
        "states": [{
		"name": "Eastern Cape",
		"iso": "ZA-EC"
	},
	{
		"name": "Free State",
		"iso": "ZA-FS"
	},
	{
		"name": "Gauteng",
		"iso": "ZA-GT"
	},
	{
		"name": "KwaZulu-Natal",
		"iso": "ZA-NL"
	},
	{
		"name": "Limpopo",
		"iso": "ZA-LP"
	},
	{
		"name": "Mpumalanga",
		"iso": "ZA-MP"
	},
	{
		"name": "North West",
		"iso": "ZA-NW"
	},
	{
		"name": "Northern Cape",
		"iso": "ZA-NC"
	},
	{
		"name": "Western Cape",
		"iso": "ZA-WC"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "GS",
        "name": "South Georgia and the South Sandwich Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(SIQQ 1ZZ)$"
    },
    {
        "region": "Africa",
        "iso": "SS",
        "name": "South Sudan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Central Equatoria",
		"iso": "SS-EC"
	},
	{
		"name": "Eastern Equatoria",
		"iso": "SS-EE"
	},
	{
		"name": "Jonglei",
		"iso": "SS-JG"
	},
	{
		"name": "Lakes",
		"iso": "SS-LK"
	},
	{
		"name": "Northern Bahr el Ghazal",
		"iso": "SS-BN"
	},
	{
		"name": "Unity",
		"iso": "SS-UY"
	},
	{
		"name": "Upper Nile",
		"iso": "SS-NU"
	},
	{
		"name": "Warrap",
		"iso": "SS-WR"
	},
	{
		"name": "Western Bahr el Ghazal",
		"iso": "SS-BW"
	},
	{
		"name": "Western Equatoria",
		"iso": "SS-EW"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "ES",
        "name": "Spain",
        "hasPostalCodes": true,
        "states": [{
		"name": "A Coru?a",
		"iso": "ES-C"
	},
	{
		"name": "Albacete",
		"iso": "ES-AB"
	},
	{
		"name": "Alicante",
		"iso": "ES-A"
	},
	{
		"name": "Almer?a",
		"iso": "ES-AL"
	},
	{
		"name": "Asturias",
		"iso": "ES-O"
	},
	{
		"name": "Badajoz",
		"iso": "ES-BA"
	},
	{
		"name": "Balears",
		"iso": "ES-PM"
	},
	{
		"name": "Barcelona",
		"iso": "ES-B"
	},
	{
		"name": "Burgos",
		"iso": "ES-BU"
	},
	{
		"name": "Cantabria",
		"iso": "ES-S"
	},
	{
		"name": "Castell?n",
		"iso": "ES-CS"
	},
	{
		"name": "Ciudad Real",
		"iso": "ES-CR"
	},
	{
		"name": "Cuenca",
		"iso": "ES-CU"
	},
	{
		"name": "C?ceres",
		"iso": "ES-CC"
	},
	{
		"name": "C?diz",
		"iso": "ES-CA"
	},
	{
		"name": "C?rdoba",
		"iso": "ES-CO"
	},
	{
		"name": "Girona",
		"iso": "ES-GI"
	},
	{
		"name": "Granada",
		"iso": "ES-GR"
	},
	{
		"name": "Guadalajara",
		"iso": "ES-GU"
	},
	{
		"name": "Guip?zcoa",
		"iso": "ES-SS"
	},
	{
		"name": "Huelva",
		"iso": "ES-H"
	},
	{
		"name": "Huesca",
		"iso": "ES-HU"
	},
	{
		"name": "Ja?n",
		"iso": "ES-J"
	},
	{
		"name": "La Rioja",
		"iso": "ES-LO"
	},
	{
		"name": "Las Palmas",
		"iso": "ES-GC"
	},
	{
		"name": "Le?n",
		"iso": "ES-LE"
	},
	{
		"name": "Lleida",
		"iso": "ES-L"
	},
	{
		"name": "Lugo",
		"iso": "ES-LU"
	},
	{
		"name": "Madrid",
		"iso": "ES-M"
	},
	{
		"name": "Murcia",
		"iso": "ES-MU"
	},
	{
		"name": "M?laga",
		"iso": "ES-MA"
	},
	{
		"name": "Navarra",
		"iso": "ES-NA"
	},
	{
		"name": "Ourense",
		"iso": "ES-OR"
	},
	{
		"name": "Palencia",
		"iso": "ES-P"
	},
	{
		"name": "Pontevedra",
		"iso": "ES-PO"
	},
	{
		"name": "Salamanca",
		"iso": "ES-SA"
	},
	{
		"name": "Santa Cruz de Tenerife",
		"iso": "ES-TF"
	},
	{
		"name": "Segovia",
		"iso": "ES-SG"
	},
	{
		"name": "Sevilla",
		"iso": "ES-SE"
	},
	{
		"name": "Soria",
		"iso": "ES-SO"
	},
	{
		"name": "Tarragona",
		"iso": "ES-T"
	},
	{
		"name": "Teruel",
		"iso": "ES-TE"
	},
	{
		"name": "Toledo",
		"iso": "ES-TO"
	},
	{
		"name": "Valencia",
		"iso": "ES-V"
	},
	{
		"name": "Valladolid",
		"iso": "ES-VA"
	},
	{
		"name": "Vizcaya",
		"iso": "ES-BI"
	},
	{
		"name": "Zamora",
		"iso": "ES-ZA"
	},
	{
		"name": "Zaragoza",
		"iso": "ES-Z"
	},
	{
		"name": "?lava",
		"iso": "ES-VI"
	},
	{
		"name": "?vila",
		"iso": "ES-AV"
	},
	{
		"name": "Ceuta",
		"iso": "ES-CE"
	},
	{
		"name": "Melilla",
		"iso": "ES-ML"
	},
	{
		"name": "Andaluc?a",
		"iso": "ES-AN"
	},
	{
		"name": "Arag?n",
		"iso": "ES-AR"
	},
	{
		"name": "Asturias, Principado de",
		"iso": "ES-AS"
	},
	{
		"name": "Canarias",
		"iso": "ES-CN"
	},
	{
		"name": "Cantabria",
		"iso": "ES-CB"
	},
	{
		"name": "Castilla y Le?n",
		"iso": "ES-CL"
	},
	{
		"name": "Castilla-La Mancha",
		"iso": "ES-CM"
	},
	{
		"name": "Catalunya",
		"iso": "ES-CT"
	},
	{
		"name": "Extremadura",
		"iso": "ES-EX"
	},
	{
		"name": "Galicia",
		"iso": "ES-GA"
	},
	{
		"name": "Illes Balears",
		"iso": "ES-IB"
	},
	{
		"name": "La Rioja",
		"iso": "ES-RI"
	},
	{
		"name": "Madrid, Comunidad de",
		"iso": "ES-MD"
	},
	{
		"name": "Murcia, Regi?n de",
		"iso": "ES-MC"
	},
	{
		"name": "Navarra, Comunidad Foral de",
		"iso": "ES-NC"
	},
	{
		"name": "Pa?s Vasco",
		"iso": "ES-PV"
	},
	{
		"name": "Valenciana, Comunidad",
		"iso": "ES-VC"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "LK",
        "name": "Sri Lanka",
        "hasPostalCodes": true,
        "states": [{
		"name": "Central Province",
		"iso": "LK-2"
	},
	{
		"name": "Eastern Province",
		"iso": "LK-5"
	},
	{
		"name": "North Central Province",
		"iso": "LK-7"
	},
	{
		"name": "North Western Province",
		"iso": "LK-6"
	},
	{
		"name": "Northern Province",
		"iso": "LK-4"
	},
	{
		"name": "Sabaragamuwa Province",
		"iso": "LK-9"
	},
	{
		"name": "Southern Province",
		"iso": "LK-3"
	},
	{
		"name": "Uva Province",
		"iso": "LK-8"
	},
	{
		"name": "Western Province",
		"iso": "LK-1"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "SD",
        "name": "Sudan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Al Ba?r al A?mar",
		"iso": "SD-RS"
	},
	{
		"name": "Al Jaz?rah",
		"iso": "SD-GZ"
	},
	{
		"name": "Al Khar??m",
		"iso": "SD-KH"
	},
	{
		"name": "Al Qa??rif",
		"iso": "SD-GD"
	},
	{
		"name": "An N?l",
		"iso": "SD-NR"
	},
	{
		"name": "An N?l al Abya?",
		"iso": "SD-NW"
	},
	{
		"name": "An N?l al Azraq",
		"iso": "SD-NB"
	},
	{
		"name": "Ash Sham?l?yah",
		"iso": "SD-NO"
	},
	{
		"name": "Gharb D?rf?r",
		"iso": "SD-DW"
	},
	{
		"name": "Jan?b D?rf?r",
		"iso": "SD-DS"
	},
	{
		"name": "Jan?b Kurduf?n",
		"iso": "SD-KS"
	},
	{
		"name": "Kassal?",
		"iso": "SD-KA"
	},
	{
		"name": "Sham?l D?rf?r",
		"iso": "SD-DN"
	},
	{
		"name": "Sham?l Kurduf?n",
		"iso": "SD-KN"
	},
	{
		"name": "Sharq D?rf?r",
		"iso": "SD-DE"
	},
	{
		"name": "Sinn?r",
		"iso": "SD-SI"
	},
	{
		"name": "Zalingei",
		"iso": "SD-DC"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "SR",
        "name": "Suriname",
        "hasPostalCodes": false,
        "states": [{
		"name": "Brokopondo",
		"iso": "SR-BR"
	},
	{
		"name": "Commewijne",
		"iso": "SR-CM"
	},
	{
		"name": "Coronie",
		"iso": "SR-CR"
	},
	{
		"name": "Marowijne",
		"iso": "SR-MA"
	},
	{
		"name": "Nickerie",
		"iso": "SR-NI"
	},
	{
		"name": "Para",
		"iso": "SR-PR"
	},
	{
		"name": "Paramaribo",
		"iso": "SR-PM"
	},
	{
		"name": "Saramacca",
		"iso": "SR-SA"
	},
	{
		"name": "Sipaliwini",
		"iso": "SR-SI"
	},
	{
		"name": "Wanica",
		"iso": "SR-WA"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "SJ",
        "name": "Svalbard and Jan Mayen",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "SZ",
        "name": "Swaziland",
        "hasPostalCodes": true,
        "states": [{
		"name": "Hhohho",
		"iso": "SZ-HH"
	},
	{
		"name": "Lubombo",
		"iso": "SZ-LU"
	},
	{
		"name": "Manzini",
		"iso": "SZ-MA"
	},
	{
		"name": "Shiselweni",
		"iso": "SZ-SH"
	}],
        "zipRegex": "^([A-Z]\\d{3})$"
    },
    {
        "region": "Europe",
        "iso": "SE",
        "name": "Sweden",
        "hasPostalCodes": true,
        "states": [{
		"name": "Blekinge l?n",
		"iso": "SE-K"
	},
	{
		"name": "Dalarnas l?n",
		"iso": "SE-W"
	},
	{
		"name": "Gotlands l?n",
		"iso": "SE-I"
	},
	{
		"name": "G?vleborgs l?n",
		"iso": "SE-X"
	},
	{
		"name": "Hallands l?n",
		"iso": "SE-N"
	},
	{
		"name": "J?mtlands l?n",
		"iso": "SE-Z"
	},
	{
		"name": "J?nk?pings l?n",
		"iso": "SE-F"
	},
	{
		"name": "Kalmar l?n",
		"iso": "SE-H"
	},
	{
		"name": "Kronobergs l?n",
		"iso": "SE-G"
	},
	{
		"name": "Norrbottens l?n",
		"iso": "SE-BD"
	},
	{
		"name": "Sk?ne l?n",
		"iso": "SE-M"
	},
	{
		"name": "Stockholms l?n",
		"iso": "SE-AB"
	},
	{
		"name": "S?dermanlands l?n",
		"iso": "SE-D"
	},
	{
		"name": "Uppsala l?n",
		"iso": "SE-C"
	},
	{
		"name": "V?rmlands l?n",
		"iso": "SE-S"
	},
	{
		"name": "V?sterbottens l?n",
		"iso": "SE-AC"
	},
	{
		"name": "V?sternorrlands l?n",
		"iso": "SE-Y"
	},
	{
		"name": "V?stmanlands l?n",
		"iso": "SE-U"
	},
	{
		"name": "V?stra G?talands l?n",
		"iso": "SE-O"
	},
	{
		"name": "?rebro l?n",
		"iso": "SE-T"
	},
	{
		"name": "?sterg?tlands l?n",
		"iso": "SE-E"
	}],
        "zipRegex": "^(\\d{3} \\d{2})$"
    },
    {
        "region": "Europe",
        "iso": "CH",
        "name": "Switzerland",
        "hasPostalCodes": true,
        "states": [{
		"name": "Aargau",
		"iso": "CH-AG"
	},
	{
		"name": "Appenzell Ausserrhoden",
		"iso": "CH-AR"
	},
	{
		"name": "Appenzell Innerrhoden",
		"iso": "CH-AI"
	},
	{
		"name": "Basel-Landschaft",
		"iso": "CH-BL"
	},
	{
		"name": "Basel-Stadt",
		"iso": "CH-BS"
	},
	{
		"name": "Bern",
		"iso": "CH-BE"
	},
	{
		"name": "Fribourg",
		"iso": "CH-FR"
	},
	{
		"name": "Gen?ve",
		"iso": "CH-GE"
	},
	{
		"name": "Glarus",
		"iso": "CH-GL"
	},
	{
		"name": "Graub?nden",
		"iso": "CH-GR"
	},
	{
		"name": "Jura",
		"iso": "CH-JU"
	},
	{
		"name": "Luzern",
		"iso": "CH-LU"
	},
	{
		"name": "Neuch?tel",
		"iso": "CH-NE"
	},
	{
		"name": "Nidwalden",
		"iso": "CH-NW"
	},
	{
		"name": "Obwalden",
		"iso": "CH-OW"
	},
	{
		"name": "Sankt Gallen",
		"iso": "CH-SG"
	},
	{
		"name": "Schaffhausen",
		"iso": "CH-SH"
	},
	{
		"name": "Schwyz",
		"iso": "CH-SZ"
	},
	{
		"name": "Solothurn",
		"iso": "CH-SO"
	},
	{
		"name": "Thurgau",
		"iso": "CH-TG"
	},
	{
		"name": "Ticino",
		"iso": "CH-TI"
	},
	{
		"name": "Uri",
		"iso": "CH-UR"
	},
	{
		"name": "Valais",
		"iso": "CH-VS"
	},
	{
		"name": "Vaud",
		"iso": "CH-VD"
	},
	{
		"name": "Zug",
		"iso": "CH-ZG"
	},
	{
		"name": "Z?rich",
		"iso": "CH-ZH"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "SY",
        "name": "Syrian Arab Republic",
        "hasPostalCodes": false,
        "states": [{
		"name": "Al L?dhiq?yah",
		"iso": "SY-LA"
	},
	{
		"name": "Al Qunay?irah",
		"iso": "SY-QU"
	},
	{
		"name": "Al ?asakah",
		"iso": "SY-HA"
	},
	{
		"name": "Ar Raqqah",
		"iso": "SY-RA"
	},
	{
		"name": "As Suwayd?'",
		"iso": "SY-SU"
	},
	{
		"name": "Dar??",
		"iso": "SY-DR"
	},
	{
		"name": "Dayr az Zawr",
		"iso": "SY-DY"
	},
	{
		"name": "Dimashq",
		"iso": "SY-DI"
	},
	{
		"name": "Idlib",
		"iso": "SY-ID"
	},
	{
		"name": "R?f Dimashq",
		"iso": "SY-RD"
	},
	{
		"name": "?ar??s",
		"iso": "SY-TA"
	},
	{
		"name": "?alab",
		"iso": "SY-HL"
	},
	{
		"name": "?am?h",
		"iso": "SY-HM"
	},
	{
		"name": "?im?",
		"iso": "SY-HI"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "TW",
        "name": "Taiwan, Province of China",
        "hasPostalCodes": true,
        "states": [{
		"name": "Changhua",
		"iso": "TW-CHA"
	},
	{
		"name": "Chiayi",
		"iso": "TW-CYQ"
	},
	{
		"name": "Chiayi",
		"iso": "TW-CYI"
	},
	{
		"name": "Hsinchu",
		"iso": "TW-HSZ"
	},
	{
		"name": "Hsinchu",
		"iso": "TW-HSQ"
	},
	{
		"name": "Hualien",
		"iso": "TW-HUA"
	},
	{
		"name": "Ilan",
		"iso": "TW-ILA"
	},
	{
		"name": "Kaohsiung",
		"iso": "TW-KHQ"
	},
	{
		"name": "Kaohsiung",
		"iso": "TW-KHH"
	},
	{
		"name": "Keelung",
		"iso": "TW-KEE"
	},
	{
		"name": "Miaoli",
		"iso": "TW-MIA"
	},
	{
		"name": "Nantou",
		"iso": "TW-NAN"
	},
	{
		"name": "Penghu",
		"iso": "TW-PEN"
	},
	{
		"name": "Pingtung",
		"iso": "TW-PIF"
	},
	{
		"name": "Taichung",
		"iso": "TW-TXG"
	},
	{
		"name": "Taichung",
		"iso": "TW-TXQ"
	},
	{
		"name": "Tainan",
		"iso": "TW-TNN"
	},
	{
		"name": "Tainan",
		"iso": "TW-TNQ"
	},
	{
		"name": "Taipei",
		"iso": "TW-TPE"
	},
	{
		"name": "Taipei",
		"iso": "TW-TPQ"
	},
	{
		"name": "Taitung",
		"iso": "TW-TTT"
	},
	{
		"name": "Taoyuan",
		"iso": "TW-TAO"
	},
	{
		"name": "Yunlin",
		"iso": "TW-YUN"
	}],
        "zipRegex": "^(\\d{3} \\d{2})|(\\d{3})$"
    },
    {
        "region": "Asia",
        "iso": "TJ",
        "name": "Tajikistan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Dushanbe",
		"iso": "TJ-DU"
	},
	{
		"name": "Khatlon",
		"iso": "TJ-KT"
	},
	{
		"name": "K?histoni Badakhshon",
		"iso": "TJ-GB"
	},
	{
		"name": "Sughd",
		"iso": "TJ-SU"
	}],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "TZ",
        "name": "Tanzania, United Republic of",
        "hasPostalCodes": false,
        "states": [{
		"name": "Arusha",
		"iso": "TZ-01"
	},
	{
		"name": "Dar es Salaam",
		"iso": "TZ-02"
	},
	{
		"name": "Dodoma",
		"iso": "TZ-03"
	},
	{
		"name": "Iringa",
		"iso": "TZ-04"
	},
	{
		"name": "Kagera",
		"iso": "TZ-05"
	},
	{
		"name": "Kaskazini Pemba",
		"iso": "TZ-06"
	},
	{
		"name": "Kaskazini Unguja",
		"iso": "TZ-07"
	},
	{
		"name": "Kigoma",
		"iso": "TZ-08"
	},
	{
		"name": "Kilimanjaro",
		"iso": "TZ-09"
	},
	{
		"name": "Kusini Pemba",
		"iso": "TZ-10"
	},
	{
		"name": "Kusini Unguja",
		"iso": "TZ-11"
	},
	{
		"name": "Lindi",
		"iso": "TZ-12"
	},
	{
		"name": "Manyara",
		"iso": "TZ-26"
	},
	{
		"name": "Mara",
		"iso": "TZ-13"
	},
	{
		"name": "Mbeya",
		"iso": "TZ-14"
	},
	{
		"name": "Mjini Magharibi",
		"iso": "TZ-15"
	},
	{
		"name": "Morogoro",
		"iso": "TZ-16"
	},
	{
		"name": "Mtwara",
		"iso": "TZ-17"
	},
	{
		"name": "Mwanza",
		"iso": "TZ-18"
	},
	{
		"name": "Pwani",
		"iso": "TZ-19"
	},
	{
		"name": "Rukwa",
		"iso": "TZ-20"
	},
	{
		"name": "Ruvuma",
		"iso": "TZ-21"
	},
	{
		"name": "Shinyanga",
		"iso": "TZ-22"
	},
	{
		"name": "Singida",
		"iso": "TZ-23"
	},
	{
		"name": "Tabora",
		"iso": "TZ-24"
	},
	{
		"name": "Tanga",
		"iso": "TZ-25"
	}],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "TH",
        "name": "Thailand",
        "hasPostalCodes": true,
        "states": [{
		"name": "Amnat Charoen",
		"iso": "TH-37"
	},
	{
		"name": "Ang Thong",
		"iso": "TH-15"
	},
	{
		"name": "Bueng Kan",
		"iso": "TH-38"
	},
	{
		"name": "Buri Ram",
		"iso": "TH-31"
	},
	{
		"name": "Chachoengsao",
		"iso": "TH-24"
	},
	{
		"name": "Chai Nat",
		"iso": "TH-18"
	},
	{
		"name": "Chaiyaphum",
		"iso": "TH-36"
	},
	{
		"name": "Chanthaburi",
		"iso": "TH-22"
	},
	{
		"name": "Chiang Mai",
		"iso": "TH-50"
	},
	{
		"name": "Chiang Rai",
		"iso": "TH-57"
	},
	{
		"name": "Chon Buri",
		"iso": "TH-20"
	},
	{
		"name": "Chumphon",
		"iso": "TH-86"
	},
	{
		"name": "Kalasin",
		"iso": "TH-46"
	},
	{
		"name": "Kamphaeng Phet",
		"iso": "TH-62"
	},
	{
		"name": "Kanchanaburi",
		"iso": "TH-71"
	},
	{
		"name": "Khon Kaen",
		"iso": "TH-40"
	},
	{
		"name": "Krabi",
		"iso": "TH-81"
	},
	{
		"name": "Krung Thep Maha Nakhon",
		"iso": "TH-10"
	},
	{
		"name": "Lampang",
		"iso": "TH-52"
	},
	{
		"name": "Lamphun",
		"iso": "TH-51"
	},
	{
		"name": "Loei",
		"iso": "TH-42"
	},
	{
		"name": "Lop Buri",
		"iso": "TH-16"
	},
	{
		"name": "Mae Hong Son",
		"iso": "TH-58"
	},
	{
		"name": "Maha Sarakham",
		"iso": "TH-44"
	},
	{
		"name": "Mukdahan",
		"iso": "TH-49"
	},
	{
		"name": "Nakhon Nayok",
		"iso": "TH-26"
	},
	{
		"name": "Nakhon Pathom",
		"iso": "TH-73"
	},
	{
		"name": "Nakhon Phanom",
		"iso": "TH-48"
	},
	{
		"name": "Nakhon Ratchasima",
		"iso": "TH-30"
	},
	{
		"name": "Nakhon Sawan",
		"iso": "TH-60"
	},
	{
		"name": "Nakhon Si Thammarat",
		"iso": "TH-80"
	},
	{
		"name": "Nan",
		"iso": "TH-55"
	},
	{
		"name": "Narathiwat",
		"iso": "TH-96"
	},
	{
		"name": "Nong Bua Lam Phu",
		"iso": "TH-39"
	},
	{
		"name": "Nong Khai",
		"iso": "TH-43"
	},
	{
		"name": "Nonthaburi",
		"iso": "TH-12"
	},
	{
		"name": "Pathum Thani",
		"iso": "TH-13"
	},
	{
		"name": "Pattani",
		"iso": "TH-94"
	},
	{
		"name": "Phangnga",
		"iso": "TH-82"
	},
	{
		"name": "Phatthalung",
		"iso": "TH-93"
	},
	{
		"name": "Phatthaya",
		"iso": "TH-S"
	},
	{
		"name": "Phayao",
		"iso": "TH-56"
	},
	{
		"name": "Phetchabun",
		"iso": "TH-67"
	},
	{
		"name": "Phetchaburi",
		"iso": "TH-76"
	},
	{
		"name": "Phichit",
		"iso": "TH-66"
	},
	{
		"name": "Phitsanulok",
		"iso": "TH-65"
	},
	{
		"name": "Phra Nakhon Si Ayutthaya",
		"iso": "TH-14"
	},
	{
		"name": "Phrae",
		"iso": "TH-54"
	},
	{
		"name": "Phuket",
		"iso": "TH-83"
	},
	{
		"name": "Prachin Buri",
		"iso": "TH-25"
	},
	{
		"name": "Prachuap Khiri Khan",
		"iso": "TH-77"
	},
	{
		"name": "Ranong",
		"iso": "TH-85"
	},
	{
		"name": "Ratchaburi",
		"iso": "TH-70"
	},
	{
		"name": "Rayong",
		"iso": "TH-21"
	},
	{
		"name": "Roi Et",
		"iso": "TH-45"
	},
	{
		"name": "Sa Kaeo",
		"iso": "TH-27"
	},
	{
		"name": "Sakon Nakhon",
		"iso": "TH-47"
	},
	{
		"name": "Samut Prakan",
		"iso": "TH-11"
	},
	{
		"name": "Samut Sakhon",
		"iso": "TH-74"
	},
	{
		"name": "Samut Songkhram",
		"iso": "TH-75"
	},
	{
		"name": "Saraburi",
		"iso": "TH-19"
	},
	{
		"name": "Satun",
		"iso": "TH-91"
	},
	{
		"name": "Si Sa Ket",
		"iso": "TH-33"
	},
	{
		"name": "Sing Buri",
		"iso": "TH-17"
	},
	{
		"name": "Songkhla",
		"iso": "TH-90"
	},
	{
		"name": "Sukhothai",
		"iso": "TH-64"
	},
	{
		"name": "Suphan Buri",
		"iso": "TH-72"
	},
	{
		"name": "Surat Thani",
		"iso": "TH-84"
	},
	{
		"name": "Surin",
		"iso": "TH-32"
	},
	{
		"name": "Tak",
		"iso": "TH-63"
	},
	{
		"name": "Trang",
		"iso": "TH-92"
	},
	{
		"name": "Trat",
		"iso": "TH-23"
	},
	{
		"name": "Ubon Ratchathani",
		"iso": "TH-34"
	},
	{
		"name": "Udon Thani",
		"iso": "TH-41"
	},
	{
		"name": "Uthai Thani",
		"iso": "TH-61"
	},
	{
		"name": "Uttaradit",
		"iso": "TH-53"
	},
	{
		"name": "Yala",
		"iso": "TH-95"
	},
	{
		"name": "Yasothon",
		"iso": "TH-35"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "TL",
        "name": "Timor-Leste",
        "hasPostalCodes": false,
        "states": [{
		"name": "Aileu",
		"iso": "TL-AL"
	},
	{
		"name": "Ainaro",
		"iso": "TL-AN"
	},
	{
		"name": "Baucau",
		"iso": "TL-BA"
	},
	{
		"name": "Bobonaro",
		"iso": "TL-BO"
	},
	{
		"name": "Cova Lima",
		"iso": "TL-CO"
	},
	{
		"name": "D?li",
		"iso": "TL-DI"
	},
	{
		"name": "Ermera",
		"iso": "TL-ER"
	},
	{
		"name": "Lautem",
		"iso": "TL-LA"
	},
	{
		"name": "Liqui?a",
		"iso": "TL-LI"
	},
	{
		"name": "Manatuto",
		"iso": "TL-MT"
	},
	{
		"name": "Manufahi",
		"iso": "TL-MF"
	},
	{
		"name": "Oecussi",
		"iso": "TL-OE"
	},
	{
		"name": "Viqueque",
		"iso": "TL-VI"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "TG",
        "name": "Togo",
        "hasPostalCodes": true,
        "states": [{
		"name": "Centre",
		"iso": "TG-C"
	},
	{
		"name": "Kara",
		"iso": "TG-K"
	},
	{
		"name": "Maritime",
		"iso": "TG-M"
	},
	{
		"name": "Plateaux",
		"iso": "TG-P"
	},
	{
		"name": "Savannes",
		"iso": "TG-S"
	}],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "TK",
        "name": "Tokelau",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "TO",
        "name": "Tonga",
        "hasPostalCodes": false,
        "states": [{
		"name": "'Eua",
		"iso": "TO-01"
	},
	{
		"name": "Ha'apai",
		"iso": "TO-02"
	},
	{
		"name": "Niuas",
		"iso": "TO-03"
	},
	{
		"name": "Tongatapu",
		"iso": "TO-04"
	},
	{
		"name": "Vava'u",
		"iso": "TO-05"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "TT",
        "name": "Trinidad and Tobago",
        "hasPostalCodes": true,
        "states": [{
		"name": "Arima",
		"iso": "TT-ARI"
	},
	{
		"name": "Chaguanas",
		"iso": "TT-CHA"
	},
	{
		"name": "Couva-Tabaquite-Talparo",
		"iso": "TT-CTT"
	},
	{
		"name": "Diego Martin",
		"iso": "TT-DMN"
	},
	{
		"name": "Eastern Tobago",
		"iso": "TT-ETO"
	},
	{
		"name": "Penal-Debe",
		"iso": "TT-PED"
	},
	{
		"name": "Point Fortin",
		"iso": "TT-PTF"
	},
	{
		"name": "Port of Spain",
		"iso": "TT-POS"
	},
	{
		"name": "Princes Town",
		"iso": "TT-PRT"
	},
	{
		"name": "Rio Claro-Mayaro",
		"iso": "TT-RCM"
	},
	{
		"name": "San Fernando",
		"iso": "TT-SFO"
	},
	{
		"name": "San Juan-Laventille",
		"iso": "TT-SJL"
	},
	{
		"name": "Sangre Grande",
		"iso": "TT-SGE"
	},
	{
		"name": "Siparia",
		"iso": "TT-SIP"
	},
	{
		"name": "Tunapuna-Piarco",
		"iso": "TT-TUP"
	},
	{
		"name": "Western Tobago",
		"iso": "TT-WTO"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "TN",
        "name": "Tunisia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ariana",
		"iso": "TN-12"
	},
	{
		"name": "Ben Arous",
		"iso": "TN-13"
	},
	{
		"name": "Bizerte",
		"iso": "TN-23"
	},
	{
		"name": "B?ja",
		"iso": "TN-31"
	},
	{
		"name": "Gab?s",
		"iso": "TN-81"
	},
	{
		"name": "Gafsa",
		"iso": "TN-71"
	},
	{
		"name": "Jendouba",
		"iso": "TN-32"
	},
	{
		"name": "Kairouan",
		"iso": "TN-41"
	},
	{
		"name": "Kasserine",
		"iso": "TN-42"
	},
	{
		"name": "Kebili",
		"iso": "TN-73"
	},
	{
		"name": "La Manouba",
		"iso": "TN-14"
	},
	{
		"name": "Le Kef",
		"iso": "TN-33"
	},
	{
		"name": "Mahdia",
		"iso": "TN-53"
	},
	{
		"name": "Medenine",
		"iso": "TN-82"
	},
	{
		"name": "Monastir",
		"iso": "TN-52"
	},
	{
		"name": "Nabeul",
		"iso": "TN-21"
	},
	{
		"name": "Sfax",
		"iso": "TN-61"
	},
	{
		"name": "Sidi Bouzid",
		"iso": "TN-43"
	},
	{
		"name": "Siliana",
		"iso": "TN-34"
	},
	{
		"name": "Sousse",
		"iso": "TN-51"
	},
	{
		"name": "Tataouine",
		"iso": "TN-83"
	},
	{
		"name": "Tozeur",
		"iso": "TN-72"
	},
	{
		"name": "Tunis",
		"iso": "TN-11"
	},
	{
		"name": "Zaghouan",
		"iso": "TN-22"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "TR",
        "name": "Turkey",
        "hasPostalCodes": true,
        "states": [{
		"name": "Adana",
		"iso": "TR-01"
	},
	{
		"name": "Ad?yaman",
		"iso": "TR-02"
	},
	{
		"name": "Afyonkarahisar",
		"iso": "TR-03"
	},
	{
		"name": "Aksaray",
		"iso": "TR-68"
	},
	{
		"name": "Amasya",
		"iso": "TR-05"
	},
	{
		"name": "Ankara",
		"iso": "TR-06"
	},
	{
		"name": "Antalya",
		"iso": "TR-07"
	},
	{
		"name": "Ardahan",
		"iso": "TR-75"
	},
	{
		"name": "Artvin",
		"iso": "TR-08"
	},
	{
		"name": "Ayd?n",
		"iso": "TR-09"
	},
	{
		"name": "A?r?",
		"iso": "TR-04"
	},
	{
		"name": "Bal?kesir",
		"iso": "TR-10"
	},
	{
		"name": "Bart?n",
		"iso": "TR-74"
	},
	{
		"name": "Batman",
		"iso": "TR-72"
	},
	{
		"name": "Bayburt",
		"iso": "TR-69"
	},
	{
		"name": "Bilecik",
		"iso": "TR-11"
	},
	{
		"name": "Bing?l",
		"iso": "TR-12"
	},
	{
		"name": "Bitlis",
		"iso": "TR-13"
	},
	{
		"name": "Bolu",
		"iso": "TR-14"
	},
	{
		"name": "Burdur",
		"iso": "TR-15"
	},
	{
		"name": "Bursa",
		"iso": "TR-16"
	},
	{
		"name": "Denizli",
		"iso": "TR-20"
	},
	{
		"name": "Diyarbak?r",
		"iso": "TR-21"
	},
	{
		"name": "D?zce",
		"iso": "TR-81"
	},
	{
		"name": "Edirne",
		"iso": "TR-22"
	},
	{
		"name": "Elaz??",
		"iso": "TR-23"
	},
	{
		"name": "Erzincan",
		"iso": "TR-24"
	},
	{
		"name": "Erzurum",
		"iso": "TR-25"
	},
	{
		"name": "Eski?ehir",
		"iso": "TR-26"
	},
	{
		"name": "Gaziantep",
		"iso": "TR-27"
	},
	{
		"name": "Giresun",
		"iso": "TR-28"
	},
	{
		"name": "G?m??hane",
		"iso": "TR-29"
	},
	{
		"name": "Hakk?ri",
		"iso": "TR-30"
	},
	{
		"name": "Hatay",
		"iso": "TR-31"
	},
	{
		"name": "Isparta",
		"iso": "TR-32"
	},
	{
		"name": "I?d?r",
		"iso": "TR-76"
	},
	{
		"name": "Kahramanmara?",
		"iso": "TR-46"
	},
	{
		"name": "Karab?k",
		"iso": "TR-78"
	},
	{
		"name": "Karaman",
		"iso": "TR-70"
	},
	{
		"name": "Kars",
		"iso": "TR-36"
	},
	{
		"name": "Kastamonu",
		"iso": "TR-37"
	},
	{
		"name": "Kayseri",
		"iso": "TR-38"
	},
	{
		"name": "Kilis",
		"iso": "TR-79"
	},
	{
		"name": "Kocaeli",
		"iso": "TR-41"
	},
	{
		"name": "Konya",
		"iso": "TR-42"
	},
	{
		"name": "K?tahya",
		"iso": "TR-43"
	},
	{
		"name": "K?rklareli",
		"iso": "TR-39"
	},
	{
		"name": "K?r?kkale",
		"iso": "TR-71"
	},
	{
		"name": "K?r?ehir",
		"iso": "TR-40"
	},
	{
		"name": "Malatya",
		"iso": "TR-44"
	},
	{
		"name": "Manisa",
		"iso": "TR-45"
	},
	{
		"name": "Mardin",
		"iso": "TR-47"
	},
	{
		"name": "Mersin",
		"iso": "TR-33"
	},
	{
		"name": "Mu?la",
		"iso": "TR-48"
	},
	{
		"name": "Mu?",
		"iso": "TR-49"
	},
	{
		"name": "Nev?ehir",
		"iso": "TR-50"
	},
	{
		"name": "Ni?de",
		"iso": "TR-51"
	},
	{
		"name": "Ordu",
		"iso": "TR-52"
	},
	{
		"name": "Osmaniye",
		"iso": "TR-80"
	},
	{
		"name": "Rize",
		"iso": "TR-53"
	},
	{
		"name": "Sakarya",
		"iso": "TR-54"
	},
	{
		"name": "Samsun",
		"iso": "TR-55"
	},
	{
		"name": "Siirt",
		"iso": "TR-56"
	},
	{
		"name": "Sinop",
		"iso": "TR-57"
	},
	{
		"name": "Sivas",
		"iso": "TR-58"
	},
	{
		"name": "Tekirda?",
		"iso": "TR-59"
	},
	{
		"name": "Tokat",
		"iso": "TR-60"
	},
	{
		"name": "Trabzon",
		"iso": "TR-61"
	},
	{
		"name": "Tunceli",
		"iso": "TR-62"
	},
	{
		"name": "U?ak",
		"iso": "TR-64"
	},
	{
		"name": "Van",
		"iso": "TR-65"
	},
	{
		"name": "Yalova",
		"iso": "TR-77"
	},
	{
		"name": "Yozgat",
		"iso": "TR-66"
	},
	{
		"name": "Zonguldak",
		"iso": "TR-67"
	},
	{
		"name": "?anakkale",
		"iso": "TR-17"
	},
	{
		"name": "?ank?r?",
		"iso": "TR-18"
	},
	{
		"name": "?orum",
		"iso": "TR-19"
	},
	{
		"name": "?stanbul",
		"iso": "TR-34"
	},
	{
		"name": "?zmir",
		"iso": "TR-35"
	},
	{
		"name": "?anl?urfa",
		"iso": "TR-63"
	},
	{
		"name": "??rnak",
		"iso": "TR-73"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "TM",
        "name": "Turkmenistan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Ahal",
		"iso": "TM-A"
	},
	{
		"name": "A?gabat",
		"iso": "TM-S"
	},
	{
		"name": "Balkan",
		"iso": "TM-B"
	},
	{
		"name": "Da?oguz",
		"iso": "TM-D"
	},
	{
		"name": "Lebap",
		"iso": "TM-L"
	},
	{
		"name": "Mary",
		"iso": "TM-M"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Americas",
        "iso": "TC",
        "name": "Turks and Caicos Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(TKCA 1ZZ)$"
    },
    {
        "region": "Oceania",
        "iso": "TV",
        "name": "Tuvalu",
        "hasPostalCodes": false,
        "states": [{
		"name": "Funafuti",
		"iso": "TV-FUN"
	},
	{
		"name": "Nanumanga",
		"iso": "TV-NMG"
	},
	{
		"name": "Nanumea",
		"iso": "TV-NMA"
	},
	{
		"name": "Niutao",
		"iso": "TV-NIT"
	},
	{
		"name": "Nui",
		"iso": "TV-NUI"
	},
	{
		"name": "Nukufetau",
		"iso": "TV-NKF"
	},
	{
		"name": "Nukulaelae",
		"iso": "TV-NKL"
	},
	{
		"name": "Vaitupu",
		"iso": "TV-VAI"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "UG",
        "name": "Uganda",
        "hasPostalCodes": false,
        "states": [{
		"name": "Central",
		"iso": "UG-C"
	},
	{
		"name": "Eastern",
		"iso": "UG-E"
	},
	{
		"name": "Northern",
		"iso": "UG-N"
	},
	{
		"name": "Western",
		"iso": "UG-W"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "UA",
        "name": "Ukraine",
        "hasPostalCodes": true,
        "states": [{
		"name": "Avtonomna Respublika Krym",
		"iso": "UA-43"
	},
	{
		"name": "Cherkas'ka Oblast'",
		"iso": "UA-71"
	},
	{
		"name": "Chernihivs'ka Oblast'",
		"iso": "UA-74"
	},
	{
		"name": "Chernivets'ka Oblast'",
		"iso": "UA-77"
	},
	{
		"name": "Dnipropetrovs'ka Oblast'",
		"iso": "UA-12"
	},
	{
		"name": "Donets'ka Oblast'",
		"iso": "UA-14"
	},
	{
		"name": "Ivano-Frankivs'ka Oblast'",
		"iso": "UA-26"
	},
	{
		"name": "Kharkivs'ka Oblast'",
		"iso": "UA-63"
	},
	{
		"name": "Khersons'ka Oblast'",
		"iso": "UA-65"
	},
	{
		"name": "Khmel'nyts'ka Oblast'",
		"iso": "UA-68"
	},
	{
		"name": "Kirovohrads'ka Oblast'",
		"iso": "UA-35"
	},
	{
		"name": "Ky?v",
		"iso": "UA-30"
	},
	{
		"name": "Ky?vs'ka Oblast'",
		"iso": "UA-32"
	},
	{
		"name": "L'vivs'ka Oblast'",
		"iso": "UA-46"
	},
	{
		"name": "Luhans'ka Oblast'",
		"iso": "UA-09"
	},
	{
		"name": "Mykola?vs'ka Oblast'",
		"iso": "UA-48"
	},
	{
		"name": "Odes'ka Oblast'",
		"iso": "UA-51"
	},
	{
		"name": "Poltavs'ka Oblast'",
		"iso": "UA-53"
	},
	{
		"name": "Rivnens'ka Oblast'",
		"iso": "UA-56"
	},
	{
		"name": "Sevastopol'",
		"iso": "UA-40"
	},
	{
		"name": "Sums'ka Oblast'",
		"iso": "UA-59"
	},
	{
		"name": "Ternopil's'ka Oblast'",
		"iso": "UA-61"
	},
	{
		"name": "Vinnyts'ka Oblast'",
		"iso": "UA-05"
	},
	{
		"name": "Volyns'ka Oblast'",
		"iso": "UA-07"
	},
	{
		"name": "Zakarpats'ka Oblast'",
		"iso": "UA-21"
	},
	{
		"name": "Zaporiz'ka Oblast'",
		"iso": "UA-23"
	},
	{
		"name": "Zhytomyrs'ka Oblast'",
		"iso": "UA-18"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "AE",
        "name": "United Arab Emirates",
        "hasPostalCodes": false,
        "states": [{
		"name": "'Ajm?n",
		"iso": "AE-AJ"
	},
	{
		"name": "Ab? Z?aby",
		"iso": "AE-AZ"
	},
	{
		"name": "Al Fujayrah",
		"iso": "AE-FU"
	},
	{
		"name": "Ash Sh?riqah",
		"iso": "AE-SH"
	},
	{
		"name": "Dubayy",
		"iso": "AE-DU"
	},
	{
		"name": "Ra's al Khaymah",
		"iso": "AE-RK"
	},
	{
		"name": "Umm al Qaywayn",
		"iso": "AE-UQ"
	}],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "GB",
        "name": "United Kingdom",
        "hasPostalCodes": true,
        "states": [{
		"name": "Barking and Dagenham",
		"iso": "GB-BDG"
	},
	{
		"name": "Barnet",
		"iso": "GB-BNE"
	},
	{
		"name": "Bexley",
		"iso": "GB-BEX"
	},
	{
		"name": "Brent",
		"iso": "GB-BEN"
	},
	{
		"name": "Bromley",
		"iso": "GB-BRY"
	},
	{
		"name": "Camden",
		"iso": "GB-CMD"
	},
	{
		"name": "Croydon",
		"iso": "GB-CRY"
	},
	{
		"name": "Ealing",
		"iso": "GB-EAL"
	},
	{
		"name": "Enfield",
		"iso": "GB-ENF"
	},
	{
		"name": "Greenwich",
		"iso": "GB-GRE"
	},
	{
		"name": "Hackney",
		"iso": "GB-HCK"
	},
	{
		"name": "Hammersmith and Fulham",
		"iso": "GB-HMF"
	},
	{
		"name": "Haringey",
		"iso": "GB-HRY"
	},
	{
		"name": "Harrow",
		"iso": "GB-HRW"
	},
	{
		"name": "Havering",
		"iso": "GB-HAV"
	},
	{
		"name": "Hillingdon",
		"iso": "GB-HIL"
	},
	{
		"name": "Hounslow",
		"iso": "GB-HNS"
	},
	{
		"name": "Islington",
		"iso": "GB-ISL"
	},
	{
		"name": "Kensington and Chelsea",
		"iso": "GB-KEC"
	},
	{
		"name": "Kingston upon Thames",
		"iso": "GB-KTT"
	},
	{
		"name": "Lambeth",
		"iso": "GB-LBH"
	},
	{
		"name": "Lewisham",
		"iso": "GB-LEW"
	},
	{
		"name": "Merton",
		"iso": "GB-MRT"
	},
	{
		"name": "Newham",
		"iso": "GB-NWM"
	},
	{
		"name": "Redbridge",
		"iso": "GB-RDB"
	},
	{
		"name": "Richmond upon Thames",
		"iso": "GB-RIC"
	},
	{
		"name": "Southwark",
		"iso": "GB-SWK"
	},
	{
		"name": "Sutton",
		"iso": "GB-STN"
	},
	{
		"name": "Tower Hamlets",
		"iso": "GB-TWH"
	},
	{
		"name": "Waltham Forest",
		"iso": "GB-WFT"
	},
	{
		"name": "Wandsworth",
		"iso": "GB-WND"
	},
	{
		"name": "Westminster",
		"iso": "GB-WSM"
	},
	{
		"name": "England and Wales",
		"iso": "GB-EAW"
	},
	{
		"name": "Great Britain",
		"iso": "GB-GBN"
	},
	{
		"name": "United Kingdom",
		"iso": "GB-UKM"
	},
	{
		"name": "London, City of",
		"iso": "GB-LND"
	},
	{
		"name": "Aberdeen City",
		"iso": "GB-ABE"
	},
	{
		"name": "Aberdeenshire",
		"iso": "GB-ABD"
	},
	{
		"name": "Angus",
		"iso": "GB-ANS"
	},
	{
		"name": "Argyll and Bute",
		"iso": "GB-AGB"
	},
	{
		"name": "Clackmannanshire",
		"iso": "GB-CLK"
	},
	{
		"name": "Dumfries and Galloway",
		"iso": "GB-DGY"
	},
	{
		"name": "Dundee City",
		"iso": "GB-DND"
	},
	{
		"name": "East Ayrshire",
		"iso": "GB-EAY"
	},
	{
		"name": "East Dunbartonshire",
		"iso": "GB-EDU"
	},
	{
		"name": "East Lothian",
		"iso": "GB-ELN"
	},
	{
		"name": "East Renfrewshire",
		"iso": "GB-ERW"
	},
	{
		"name": "Edinburgh, City of",
		"iso": "GB-EDH"
	},
	{
		"name": "Eilean Siar",
		"iso": "GB-ELS"
	},
	{
		"name": "Falkirk",
		"iso": "GB-FAL"
	},
	{
		"name": "Fife",
		"iso": "GB-FIF"
	},
	{
		"name": "Glasgow City",
		"iso": "GB-GLG"
	},
	{
		"name": "Highland",
		"iso": "GB-HLD"
	},
	{
		"name": "Inverclyde",
		"iso": "GB-IVC"
	},
	{
		"name": "Midlothian",
		"iso": "GB-MLN"
	},
	{
		"name": "Moray",
		"iso": "GB-MRY"
	},
	{
		"name": "North Ayrshire",
		"iso": "GB-NAY"
	},
	{
		"name": "North Lanarkshire",
		"iso": "GB-NLK"
	},
	{
		"name": "Orkney Islands",
		"iso": "GB-ORK"
	},
	{
		"name": "Perth and Kinross",
		"iso": "GB-PKN"
	},
	{
		"name": "Renfrewshire",
		"iso": "GB-RFW"
	},
	{
		"name": "Scottish Borders, The",
		"iso": "GB-SCB"
	},
	{
		"name": "Shetland Islands",
		"iso": "GB-ZET"
	},
	{
		"name": "South Ayrshire",
		"iso": "GB-SAY"
	},
	{
		"name": "South Lanarkshire",
		"iso": "GB-SLK"
	},
	{
		"name": "Stirling",
		"iso": "GB-STG"
	},
	{
		"name": "West Dunbartonshire",
		"iso": "GB-WDU"
	},
	{
		"name": "West Lothian",
		"iso": "GB-WLN"
	},
	{
		"name": "England",
		"iso": "GB-ENG"
	},
	{
		"name": "Scotland",
		"iso": "GB-SCT"
	},
	{
		"name": "Wales",
		"iso": "GB-WLS"
	},
	{
		"name": "Antrim",
		"iso": "GB-ANT"
	},
	{
		"name": "Ards",
		"iso": "GB-ARD"
	},
	{
		"name": "Armagh",
		"iso": "GB-ARM"
	},
	{
		"name": "Ballymena",
		"iso": "GB-BLA"
	},
	{
		"name": "Ballymoney",
		"iso": "GB-BLY"
	},
	{
		"name": "Banbridge",
		"iso": "GB-BNB"
	},
	{
		"name": "Belfast",
		"iso": "GB-BFS"
	},
	{
		"name": "Carrickfergus",
		"iso": "GB-CKF"
	},
	{
		"name": "Castlereagh",
		"iso": "GB-CSR"
	},
	{
		"name": "Coleraine",
		"iso": "GB-CLR"
	},
	{
		"name": "Cookstown",
		"iso": "GB-CKT"
	},
	{
		"name": "Craigavon",
		"iso": "GB-CGV",
	},
	{
		"name": "Derry",
		"iso": "GB-DRY"
	},
	{
		"name": "Down",
		"iso": "GB-DOW"
	},
	{
		"name": "Dungannon and South Tyrone",
		"iso": "GB-DGN"
	},
	{
		"name": "Fermanagh",
		"iso": "GB-FER"
	},
	{
		"name": "Larne",
		"iso": "GB-LRN"
	},
	{
		"name": "Limavady",
		"iso": "GB-LMV"
	},
	{
		"name": "Lisburn",
		"iso": "GB-LSB"
	},
	{
		"name": "Magherafelt",
		"iso": "GB-MFT"
	},
	{
		"name": "Moyle",
		"iso": "GB-MYL"
	},
	{
		"name": "Newry and Mourne District",
		"iso": "GB-NYM"
	},
	{
		"name": "Newtownabbey",
		"iso": "GB-NTA"
	},
	{
		"name": "North Down",
		"iso": "GB-NDN"
	},
	{
		"name": "Omagh",
		"iso": "GB-OMH"
	},
	{
		"name": "Strabane",
		"iso": "GB-STB"
	},
	{
		"name": "Barnsley",
		"iso": "GB-BNS"
	},
	{
		"name": "Birmingham",
		"iso": "GB-BIR"
	},
	{
		"name": "Bolton",
		"iso": "GB-BOL"
	},
	{
		"name": "Bradford",
		"iso": "GB-BRD"
	},
	{
		"name": "Bury",
		"iso": "GB-BUR"
	},
	{
		"name": "Calderdale",
		"iso": "GB-CLD"
	},
	{
		"name": "Coventry",
		"iso": "GB-COV"
	},
	{
		"name": "Doncaster",
		"iso": "GB-DNC"
	},
	{
		"name": "Dudley",
		"iso": "GB-DUD"
	},
	{
		"name": "Gateshead",
		"iso": "GB-GAT"
	},
	{
		"name": "Kirklees",
		"iso": "GB-KIR"
	},
	{
		"name": "Knowsley",
		"iso": "GB-KWL"
	},
	{
		"name": "Leeds",
		"iso": "GB-LDS"
	},
	{
		"name": "Liverpool",
		"iso": "GB-LIV"
	},
	{
		"name": "Manchester",
		"iso": "GB-MAN"
	},
	{
		"name": "Newcastle upon Tyne",
		"iso": "GB-NET"
	},
	{
		"name": "North Tyneside",
		"iso": "GB-NTY"
	},
	{
		"name": "Oldham",
		"iso": "GB-OLD"
	},
	{
		"name": "Rochdale",
		"iso": "GB-RCH"
	},
	{
		"name": "Rotherham",
		"iso": "GB-ROT"
	},
	{
		"name": "Salford",
		"iso": "GB-SLF"
	},
	{
		"name": "Sandwell",
		"iso": "GB-SAW"
	},
	{
		"name": "Sefton",
		"iso": "GB-SFT"
	},
	{
		"name": "Sheffield",
		"iso": "GB-SHF"
	},
	{
		"name": "Solihull",
		"iso": "GB-SOL"
	},
	{
		"name": "South Tyneside",
		"iso": "GB-STY"
	},
	{
		"name": "St. Helens",
		"iso": "GB-SHN"
	},
	{
		"name": "Stockport",
		"iso": "GB-SKP"
	},
	{
		"name": "Sunderland",
		"iso": "GB-SND"
	},
	{
		"name": "Tameside",
		"iso": "GB-TAM"
	},
	{
		"name": "Trafford",
		"iso": "GB-TRF"
	},
	{
		"name": "Wakefield",
		"iso": "GB-WKF"
	},
	{
		"name": "Walsall",
		"iso": "GB-WLL"
	},
	{
		"name": "Wigan",
		"iso": "GB-WGN"
	},
	{
		"name": "Wirral",
		"iso": "GB-WRL"
	},
	{
		"name": "Wolverhampton",
		"iso": "GB-WLV"
	},
	{
		"name": "Northern Ireland",
		"iso": "GB-NIR"
	},
	{
		"name": "Buckinghamshire",
		"iso": "GB-BKM"
	},
	{
		"name": "Cambridgeshire",
		"iso": "GB-CAM"
	},
	{
		"name": "Cumbria",
		"iso": "GB-CMA"
	},
	{
		"name": "Derbyshire",
		"iso": "GB-DBY"
	},
	{
		"name": "Devon",
		"iso": "GB-DEV"
	},
	{
		"name": "Dorset",
		"iso": "GB-DOR"
	},
	{
		"name": "East Sussex",
		"iso": "GB-ESX"
	},
	{
		"name": "Essex",
		"iso": "GB-ESS"
	},
	{
		"name": "Gloucestershire",
		"iso": "GB-GLS"
	},
	{
		"name": "Hampshire",
		"iso": "GB-HAM"
	},
	{
		"name": "Hertfordshire",
		"iso": "GB-HRT"
	},
	{
		"name": "Kent",
		"iso": "GB-KEN"
	},
	{
		"name": "Lancashire",
		"iso": "GB-LAN"
	},
	{
		"name": "Leicestershire",
		"iso": "GB-LEC"
	},
	{
		"name": "Lincolnshire",
		"iso": "GB-LIN"
	},
	{
		"name": "Norfolk",
		"iso": "GB-NFK"
	},
	{
		"name": "North Yorkshire",
		"iso": "GB-NYK"
	},
	{
		"name": "Northamptonshire",
		"iso": "GB-NTH"
	},
	{
		"name": "Nottinghamshire",
		"iso": "GB-NTT"
	},
	{
		"name": "Oxfordshire",
		"iso": "GB-OXF"
	},
	{
		"name": "Somerset",
		"iso": "GB-SOM"
	},
	{
		"name": "Staffordshire",
		"iso": "GB-STS"
	},
	{
		"name": "Suffolk",
		"iso": "GB-SFK"
	},
	{
		"name": "Surrey",
		"iso": "GB-SRY"
	},
	{
		"name": "Warwickshire",
		"iso": "GB-WAR"
	},
	{
		"name": "West Sussex",
		"iso": "GB-WSX"
	},
	{
		"name": "Worcestershire",
		"iso": "GB-WOR"
	},
	{
		"name": "Bath and North East Somerset",
		"iso": "GB-BAS"
	},
	{
		"name": "Bedford",
		"iso": "GB-BDF"
	},
	{
		"name": "Blackburn with Darwen",
		"iso": "GB-BBD"
	},
	{
		"name": "Blackpool",
		"iso": "GB-BPL"
	},
	{
		"name": "Blaenau Gwent",
		"iso": "GB-BGW"
	},
	{
		"name": "Bournemouth",
		"iso": "GB-BMH"
	},
	{
		"name": "Bracknell Forest",
		"iso": "GB-BRC"
	},
	{
		"name": "Bridgend",
		"iso": "GB-BGE"
	},
	{
		"name": "Brighton and Hove",
		"iso": "GB-BNH"
	},
	{
		"name": "Bristol, City of",
		"iso": "GB-BST"
	},
	{
		"name": "Caerphilly",
		"iso": "GB-CAY"
	},
	{
		"name": "Cardiff",
		"iso": "GB-CRF"
	},
	{
		"name": "Carmarthenshire",
		"iso": "GB-CMN"
	},
	{
		"name": "Central Bedfordshire",
		"iso": "GB-CBF"
	},
	{
		"name": "Ceredigion",
		"iso": "GB-CGN"
	},
	{
		"name": "Cheshire East",
		"iso": "GB-CHE"
	},
	{
		"name": "Cheshire West and Chester",
		"iso": "GB-CHW"
	},
	{
		"name": "Conwy",
		"iso": "GB-CWY"
	},
	{
		"name": "Cornwall",
		"iso": "GB-CON"
	},
	{
		"name": "Darlington",
		"iso": "GB-DAL"
	},
	{
		"name": "Denbighshire",
		"iso": "GB-DEN"
	},
	{
		"name": "Derby",
		"iso": "GB-DER"
	},
	{
		"name": "Durham, County",
		"iso": "GB-DUR"
	},
	{
		"name": "East Riding of Yorkshire",
		"iso": "GB-ERY"
	},
	{
		"name": "Flintshire",
		"iso": "GB-FLN"
	},
	{
		"name": "Gwynedd",
		"iso": "GB-GWN"
	},
	{
		"name": "Halton",
		"iso": "GB-HAL"
	},
	{
		"name": "Hartlepool",
		"iso": "GB-HPL"
	},
	{
		"name": "Herefordshire",
		"iso": "GB-HEF"
	},
	{
		"name": "Isle of Anglesey",
		"iso": "GB-AGY"
	},
	{
		"name": "Isle of Wight",
		"iso": "GB-IOW"
	},
	{
		"name": "Isles of Scilly",
		"iso": "GB-IOS"
	},
	{
		"name": "Kingston upon Hull",
		"iso": "GB-KHL"
	},
	{
		"name": "Leicester",
		"iso": "GB-LCE"
	},
	{
		"name": "Luton",
		"iso": "GB-LUT"
	},
	{
		"name": "Medway",
		"iso": "GB-MDW"
	},
	{
		"name": "Merthyr Tydfil",
		"iso": "GB-MTY"
	},
	{
		"name": "Middlesbrough",
		"iso": "GB-MDB"
	},
	{
		"name": "Milton Keynes",
		"iso": "GB-MIK"
	},
	{
		"name": "Monmouthshire",
		"iso": "GB-MON"
	},
	{
		"name": "Neath Port Talbot",
		"iso": "GB-NTL"
	},
	{
		"name": "Newport",
		"iso": "GB-NWP"
	},
	{
		"name": "North East Lincolnshire",
		"iso": "GB-NEL"
	},
	{
		"name": "North Lincolnshire",
		"iso": "GB-NLN"
	},
	{
		"name": "North Somerset",
		"iso": "GB-NSM"
	},
	{
		"name": "Northumberland",
		"iso": "GB-NBL"
	},
	{
		"name": "Nottingham",
		"iso": "GB-NGM"
	},
	{
		"name": "Pembrokeshire",
		"iso": "GB-PEM"
	},
	{
		"name": "Peterborough",
		"iso": "GB-PTE"
	},
	{
		"name": "Plymouth",
		"iso": "GB-PLY"
	},
	{
		"name": "Poole",
		"iso": "GB-POL"
	},
	{
		"name": "Portsmouth",
		"iso": "GB-POR"
	},
	{
		"name": "Powys",
		"iso": "GB-POW"
	},
	{
		"name": "Reading",
		"iso": "GB-RDG"
	},
	{
		"name": "Redcar and Cleveland",
		"iso": "GB-RCC"
	},
	{
		"name": "Rhondda, Cynon, Taff",
		"iso": "GB-RCT"
	},
	{
		"name": "Rutland",
		"iso": "GB-RUT"
	},
	{
		"name": "Shropshire",
		"iso": "GB-SHR"
	},
	{
		"name": "Slough",
		"iso": "GB-SLG"
	},
	{
		"name": "South Gloucestershire",
		"iso": "GB-SGC"
	},
	{
		"name": "Southampton",
		"iso": "GB-STH"
	},
	{
		"name": "Southend-on-Sea",
		"iso": "GB-SOS"
	},
	{
		"name": "Stockton-on-Tees",
		"iso": "GB-STT"
	},
	{
		"name": "Stoke-on-Trent",
		"iso": "GB-STE"
	},
	{
		"name": "Swansea",
		"iso": "GB-SWA"
	},
	{
		"name": "Swindon",
		"iso": "GB-SWD"
	},
	{
		"name": "Telford and Wrekin",
		"iso": "GB-TFW"
	},
	{
		"name": "Thurrock",
		"iso": "GB-THR"
	},
	{
		"name": "Torbay",
		"iso": "GB-TOB"
	},
	{
		"name": "Torfaen",
		"iso": "GB-TOF"
	},
	{
		"name": "Vale of Glamorgan, The",
		"iso": "GB-VGL"
	},
	{
		"name": "Warrington",
		"iso": "GB-WRT"
	},
	{
		"name": "West Berkshire",
		"iso": "GB-WBK"
	},
	{
		"name": "Wiltshire",
		"iso": "GB-WIL"
	},
	{
		"name": "Windsor and Maidenhead",
		"iso": "GB-WNM"
	},
	{
		"name": "Wokingham",
		"iso": "GB-WOK"
	},
	{
		"name": "Wrexham",
		"iso": "GB-WRX"
	},
	{
		"name": "York",
		"iso": "GB-YOR"
	}],
        "zipRegex": "^(((([A-PR-UWYZ][0-9][0-9A-HJKS-UW]?)|([A-PR-UWYZ][A-HK-Y][0-9][0-9ABEHMNPRV-Y]?))\\s{0,2}[0-9]([ABD-HJLNP-UW-Z]{2}))|(GIR\\s{0,2}0AA))$"
    },
    {
        "region": "Americas",
        "iso": "US",
        "name": "United States",
        "hasPostalCodes": true,
        "states": [
            {
                "iso": "AL",
                "name": "Alabama"
            },
            {
                "iso": "AK",
                "name": "Alaska"
            },
            {
                "iso": "AZ",
                "name": "Arizona"
            },
            {
                "iso": "AR",
                "name": "Arkansas"
            },
            {
                "iso": "CA",
                "name": "California"
            },
            {
                "iso": "CO",
                "name": "Colorado"
            },
            {
                "iso": "CT",
                "name": "Connecticut"
            },
            {
                "iso": "DE",
                "name": "Delaware"
            },
            {
                "iso": "DC",
                "name": "District Of Columbia"
            },
            {
                "iso": "FL",
                "name": "Florida"
            },
            {
                "iso": "GA",
                "name": "Georgia"
            },
            {
                "iso": "HI",
                "name": "Hawaii"
            },
            {
                "iso": "ID",
                "name": "Idaho"
            },
            {
                "iso": "IL",
                "name": "Illinois"
            },
            {
                "iso": "IN",
                "name": "Indiana"
            },
            {
                "iso": "IA",
                "name": "Iowa"
            },
            {
                "iso": "KS",
                "name": "Kansas"
            },
            {
                "iso": "KY",
                "name": "Kentucky"
            },
            {
                "iso": "LA",
                "name": "Louisiana"
            },
            {
                "iso": "ME",
                "name": "Maine"
            },
            {
                "iso": "MD",
                "name": "Maryland"
            },
            {
                "iso": "MA",
                "name": "Massachusetts"
            },
            {
                "iso": "MI",
                "name": "Michigan"
            },
            {
                "iso": "MN",
                "name": "Minnesota"
            },
            {
                "iso": "MS",
                "name": "Mississippi"
            },
            {
                "iso": "MO",
                "name": "Missouri"
            },
            {
                "iso": "MT",
                "name": "Montana"
            },
            {
                "iso": "NE",
                "name": "Nebraska"
            },
            {
                "iso": "NV",
                "name": "Nevada"
            },
            {
                "iso": "NH",
                "name": "New Hampshire"
            },
            {
                "iso": "NJ",
                "name": "New Jersey"
            },
            {
                "iso": "NM",
                "name": "New Mexico"
            },
            {
                "iso": "NY",
                "name": "New York"
            },
            {
                "iso": "NC",
                "name": "North Carolina"
            },
            {
                "iso": "ND",
                "name": "North Dakota"
            },
            {
                "iso": "OH",
                "name": "Ohio"
            },
            {
                "iso": "OK",
                "name": "Oklahoma"
            },
            {
                "iso": "OR",
                "name": "Oregon"
            },
            {
                "iso": "PA",
                "name": "Pennsylvania"
            },
            {
                "iso": "RI",
                "name": "Rhode Island"
            },
            {
                "iso": "SC",
                "name": "South Carolina"
            },
            {
                "iso": "SD",
                "name": "South Dakota"
            },
            {
                "iso": "TN",
                "name": "Tennessee"
            },
            {
                "iso": "TX",
                "name": "Texas"
            },
            {
                "iso": "UT",
                "name": "Utah"
            },
            {
                "iso": "VT",
                "name": "Vermont"
            },
            {
                "iso": "VA",
                "name": "Virginia"
            },
            {
                "iso": "WA",
                "name": "Washington"
            },
            {
                "iso": "WV",
                "name": "West Virginia"
            },
            {
                "iso": "WI",
                "name": "Wisconsin"
            },
            {
                "iso": "WY",
                "name": "Wyoming"
            }
        ],
        "zipRegex": "^\\d{5}([\\-]\\d{4})?$"
    },
    {
        "region": "Americas",
        "iso": "UM",
        "name": "United States Minor Outlying Islands",
        "hasPostalCodes": true,
        "states": [{
		"name": "Baker Island",
		"iso": "UM-81"
	},
	{
		"name": "Howland Island",
		"iso": "UM-84"
	},
	{
		"name": "Jarvis Island",
		"iso": "UM-86"
	},
	{
		"name": "Johnston Atoll",
		"iso": "UM-67"
	},
	{
		"name": "Kingman Reef",
		"iso": "UM-89"
	},
	{
		"name": "Midway Islands",
		"iso": "UM-71"
	},
	{
		"name": "Navassa Island",
		"iso": "UM-76"
	},
	{
		"name": "Palmyra Atoll",
		"iso": "UM-95"
	},
	{
		"name": "Wake Island",
		"iso": "UM-79"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "UY",
        "name": "Uruguay",
        "hasPostalCodes": true,
        "states": [{
		"name": "Artigas",
		"iso": "UY-AR"
	},
	{
		"name": "Canelones",
		"iso": "UY-CA"
	},
	{
		"name": "Cerro Largo",
		"iso": "UY-CL"
	},
	{
		"name": "Colonia",
		"iso": "UY-CO"
	},
	{
		"name": "Durazno",
		"iso": "UY-DU"
	},
	{
		"name": "Flores",
		"iso": "UY-FS"
	},
	{
		"name": "Florida",
		"iso": "UY-FD"
	},
	{
		"name": "Lavalleja",
		"iso": "UY-LA"
	},
	{
		"name": "Maldonado",
		"iso": "UY-MA"
	},
	{
		"name": "Montevideo",
		"iso": "UY-MO"
	},
	{
		"name": "Paysand?",
		"iso": "UY-PA"
	},
	{
		"name": "Rivera",
		"iso": "UY-RV"
	},
	{
		"name": "Rocha",
		"iso": "UY-RO"
	},
	{
		"name": "R?o Negro",
		"iso": "UY-RN"
	},
	{
		"name": "Salto",
		"iso": "UY-SA"
	},
	{
		"name": "San Jos?",
		"iso": "UY-SJ"
	},
	{
		"name": "Soriano",
		"iso": "UY-SO"
	},
	{
		"name": "Tacuaremb?",
		"iso": "UY-TA"
	},
	{
		"name": "Treinta y Tres",
		"iso": "UY-TT"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "UZ",
        "name": "Uzbekistan",
        "hasPostalCodes": true,
        "states": [{
		"name": "Andijon",
		"iso": "UZ-AN"
	},
	{
		"name": "Buxoro",
		"iso": "UZ-BU"
	},
	{
		"name": "Farg‘ona",
		"iso": "UZ-FA"
	},
	{
		"name": "Jizzax",
		"iso": "UZ-JI"
	},
	{
		"name": "Namangan",
		"iso": "UZ-NG"
	},
	{
		"name": "Navoiy",
		"iso": "UZ-NW"
	},
	{
		"name": "Qashqadaryo",
		"iso": "UZ-QA"
	},
	{
		"name": "Qoraqalpog‘iston Respublikasi",
		"iso": "UZ-QR"
	},
	{
		"name": "Samarqand",
		"iso": "UZ-SA"
	},
	{
		"name": "Sirdaryo",
		"iso": "UZ-SI"
	},
	{
		"name": "Surxondaryo",
		"iso": "UZ-SU"
	},
	{
		"name": "Toshkent",
		"iso": "UZ-TO"
	},
	{
		"name": "Toshkent",
		"iso": "UZ-TK"
	},
	{
		"name": "Xorazm",
		"iso": "UZ-XO"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Oceania",
        "iso": "VU",
        "name": "Vanuatu",
        "hasPostalCodes": false,
        "states": [{
		"name": "Malampa",
		"iso": "VU-MAP"
	},
	{
		"name": "P?nama",
		"iso": "VU-PAM"
	},
	{
		"name": "Sanma",
		"iso": "VU-SAM"
	},
	{
		"name": "Sh?fa",
		"iso": "VU-SEE"
	},
	{
		"name": "Taf?a",
		"iso": "VU-TAE"
	},
	{
		"name": "Torba",
		"iso": "VU-TOB"
	}],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "VE",
        "name": "Venezuela, Bolivarian Republic of",
        "hasPostalCodes": true,
        "states": [{
		"name": "Amazonas",
		"iso": "VE-Z"
	},
	{
		"name": "Anzo?tegui",
		"iso": "VE-B"
	},
	{
		"name": "Apure",
		"iso": "VE-C"
	},
	{
		"name": "Aragua",
		"iso": "VE-D"
	},
	{
		"name": "Barinas",
		"iso": "VE-E"
	},
	{
		"name": "Bol?var",
		"iso": "VE-F"
	},
	{
		"name": "Carabobo",
		"iso": "VE-G"
	},
	{
		"name": "Cojedes",
		"iso": "VE-H"
	},
	{
		"name": "Delta Amacuro",
		"iso": "VE-Y"
	},
	{
		"name": "Dependencias Federales",
		"iso": "VE-W"
	},
	{
		"name": "Distrito Capital",
		"iso": "VE-A"
	},
	{
		"name": "Falc?n",
		"iso": "VE-I"
	},
	{
		"name": "Gu?rico",
		"iso": "VE-J"
	},
	{
		"name": "Lara",
		"iso": "VE-K"
	},
	{
		"name": "Miranda",
		"iso": "VE-M"
	},
	{
		"name": "Monagas",
		"iso": "VE-N"
	},
	{
		"name": "M?rida",
		"iso": "VE-L"
	},
	{
		"name": "Nueva Esparta",
		"iso": "VE-O"
	},
	{
		"name": "Portuguesa",
		"iso": "VE-P"
	},
	{
		"name": "Sucre",
		"iso": "VE-R"
	},
	{
		"name": "Trujillo",
		"iso": "VE-T"
	},
	{
		"name": "T?chira",
		"iso": "VE-S"
	},
	{
		"name": "Vargas",
		"iso": "VE-X"
	},
	{
		"name": "Yaracuy",
		"iso": "VE-U"
	},
	{
		"name": "Zulia",
		"iso": "VE-V"
	}],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "VN",
        "name": "Viet Nam",
        "hasPostalCodes": true,
        "states": [{
		"name": "An Giang",
		"iso": "VN-44"
	},
	{
		"name": "B? R?a–V?ng T?u",
		"iso": "VN-43"
	},
	{
		"name": "B?nh D??ng",
		"iso": "VN-57"
	},
	{
		"name": "B?nh Ph??c",
		"iso": "VN-58"
	},
	{
		"name": "B?nh Thu?n",
		"iso": "VN-40"
	},
	{
		"name": "B?nh ??nh",
		"iso": "VN-31"
	},
	{
		"name": "B?c Li?u",
		"iso": "VN-55"
	},
	{
		"name": "B?c Giang",
		"iso": "VN-54"
	},
	{
		"name": "B?c K?n",
		"iso": "VN-53"
	},
	{
		"name": "B?c Ninh",
		"iso": "VN-56"
	},
	{
		"name": "B?n Tre",
		"iso": "VN-50"
	},
	{
		"name": "Cao B?ng",
		"iso": "VN-04"
	},
	{
		"name": "C? Mau",
		"iso": "VN-59"
	},
	{
		"name": "C?n Th?",
		"iso": "VN-CT"
	},
	{
		"name": "Gia Lai",
		"iso": "VN-30"
	},
	{
		"name": "H? Giang",
		"iso": "VN-03"
	},
	{
		"name": "H? Nam",
		"iso": "VN-63"
	},
	{
		"name": "H? N?i",
		"iso": "VN-HN"
	},
	{
		"name": "H? T?y",
		"iso": "VN-15"
	},
	{
		"name": "H? T?nh",
		"iso": "VN-23"
	},
	{
		"name": "H?a B?nh",
		"iso": "VN-14"
	},
	{
		"name": "H?ng Y?n",
		"iso": "VN-66"
	},
	{
		"name": "H?i D??ng",
		"iso": "VN-61"
	},
	{
		"name": "H?i Ph?ng",
		"iso": "VN-HP"
	},
	{
		"name": "H?u Giang",
		"iso": "VN-73"
	},
	{
		"name": "H? Ch? Minh",
		"iso": "VN-SG"
	},
	{
		"name": "Kh?nh H?a",
		"iso": "VN-34"
	},
	{
		"name": "Ki?n Giang",
		"iso": "VN-47"
	},
	{
		"name": "Kon Tum",
		"iso": "VN-28"
	},
	{
		"name": "Lai Ch?u",
		"iso": "VN-01"
	},
	{
		"name": "Long An",
		"iso": "VN-41"
	},
	{
		"name": "L?o Cai",
		"iso": "VN-02"
	},
	{
		"name": "L?m ??ng",
		"iso": "VN-35"
	},
	{
		"name": "L?ng S?n",
		"iso": "VN-09"
	},
	{
		"name": "Nam ??nh",
		"iso": "VN-67"
	},
	{
		"name": "Ngh? An",
		"iso": "VN-22"
	},
	{
		"name": "Ninh B?nh",
		"iso": "VN-18"
	},
	{
		"name": "Ninh Thu?n",
		"iso": "VN-36"
	},
	{
		"name": "Ph? Th?",
		"iso": "VN-68"
	},
	{
		"name": "Ph? Y?n",
		"iso": "VN-32"
	},
	{
		"name": "Qu?ng B?nh",
		"iso": "VN-24"
	},
	{
		"name": "Qu?ng Nam",
		"iso": "VN-27"
	},
	{
		"name": "Qu?ng Ng?i",
		"iso": "VN-29"
	},
	{
		"name": "Qu?ng Ninh",
		"iso": "VN-13"
	},
	{
		"name": "Qu?ng Tr?",
		"iso": "VN-25"
	},
	{
		"name": "S?c Tr?ng",
		"iso": "VN-52"
	},
	{
		"name": "S?n La",
		"iso": "VN-05"
	},
	{
		"name": "Thanh H?a",
		"iso": "VN-21"
	},
	{
		"name": "Th?i B?nh",
		"iso": "VN-20"
	},
	{
		"name": "Th?i Nguy?n",
		"iso": "VN-69"
	},
	{
		"name": "Th?a Thi?n–Hu?",
		"iso": "VN-26"
	},
	{
		"name": "Ti?n Giang",
		"iso": "VN-46"
	},
	{
		"name": "Tr? Vinh",
		"iso": "VN-51"
	},
	{
		"name": "Tuy?n Quang",
		"iso": "VN-07"
	},
	{
		"name": "T?y Ninh",
		"iso": "VN-37"
	},
	{
		"name": "V?nh Long",
		"iso": "VN-49"
	},
	{
		"name": "V?nh Ph?c",
		"iso": "VN-70"
	},
	{
		"name": "Y?n B?i",
		"iso": "VN-06"
	},
	{
		"name": "?i?n Bi?n",
		"iso": "VN-71"
	},
	{
		"name": "?? N?ng",
		"iso": "VN-DN"
	},
	{
		"name": "??k L?k",
		"iso": "VN-33"
	},
	{
		"name": "??k N?ng",
		"iso": "VN-72"
	},
	{
		"name": "??ng Nai",
		"iso": "VN-39"
	},
	{
		"name": "??ng Th?p",
		"iso": "VN-45"
	}],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Americas",
        "iso": "VG",
        "name": "Virgin Islands, British",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(VG11)[0-6][0]$"
    },
    {
        "region": "Americas",
        "iso": "VI",
        "name": "Virgin Islands, U.S.",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "WF",
        "name": "Wallis and Futuna",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "EH",
        "name": "Western Sahara",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "YE",
        "name": "Yemen",
        "hasPostalCodes": false,
        "states": [{
		"name": "'Adan",
		"iso": "YE-AD"
	},
	{
		"name": "'Amr?n",
		"iso": "YE-AM"
	},
	{
		"name": "Aby?n",
		"iso": "YE-AB"
	},
	{
		"name": "Al Bay??'",
		"iso": "YE-BA"
	},
	{
		"name": "Al Jawf",
		"iso": "YE-JA"
	},
	{
		"name": "Al Mahrah",
		"iso": "YE-MR"
	},
	{
		"name": "Al Ma?w?t",
		"iso": "YE-MW"
	},
	{
		"name": "Al ?udaydah",
		"iso": "YE-HU"
	},
	{
		"name": "A? ??li'",
		"iso": "YE-DA"
	},
	{
		"name": "Dham?r",
		"iso": "YE-DH"
	},
	{
		"name": "Ibb",
		"iso": "YE-IB"
	},
	{
		"name": "La?ij",
		"iso": "YE-LA"
	},
	{
		"name": "Ma'rib",
		"iso": "YE-MA"
	},
	{
		"name": "Raymah",
		"iso": "YE-RA"
	},
	{
		"name": "Shabwah",
		"iso": "YE-SH"
	},
	{
		"name": "T?‘izz",
		"iso": "YE-TA"
	},
	{
		"name": "?an‘?'",
		"iso": "YE-SA"
	},
	{
		"name": "?an‘?'",
		"iso": "YE-SN"
	},
	{
		"name": "??‘dah",
		"iso": "YE-SD"
	},
	{
		"name": "?ajjah",
		"iso": "YE-HJ"
	},
	{
		"name": "?a?ramawt",
		"iso": "YE-HD"
	}],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "ZM",
        "name": "Zambia",
        "hasPostalCodes": true,
        "states": [{
		"name": "Central",
		"iso": "ZM-02"
	},
	{
		"name": "Copperbelt",
		"iso": "ZM-08"
	},
	{
		"name": "Eastern",
		"iso": "ZM-03"
	},
	{
		"name": "Luapula",
		"iso": "ZM-04"
	},
	{
		"name": "Lusaka",
		"iso": "ZM-09"
	},
	{
		"name": "North-Western",
		"iso": "ZM-06"
	},
	{
		"name": "Northern",
		"iso": "ZM-05"
	},
	{
		"name": "Southern",
		"iso": "ZM-07"
	},
	{
		"name": "Western",
		"iso": "ZM-01"
	}],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "ZW",
        "name": "Zimbabwe",
        "hasPostalCodes": false,
        "states": [{
		"name": "Bulawayo",
		"iso": "ZW-BU"
	},
	{
		"name": "Harare",
		"iso": "ZW-HA"
	},
	{
		"name": "Manicaland",
		"iso": "ZW-MA"
	},
	{
		"name": "Mashonaland Central",
		"iso": "ZW-MC"
	},
	{
		"name": "Mashonaland East",
		"iso": "ZW-ME"
	},
	{
		"name": "Mashonaland West",
		"iso": "ZW-MW"
	},
	{
		"name": "Masvingo",
		"iso": "ZW-MV"
	},
	{
		"name": "Matabeleland North",
		"iso": "ZW-MN"
	},
	{
		"name": "Matabeleland South",
		"iso": "ZW-MS"
	},
	{
		"name": "Midlands",
		"iso": "ZW-MI"
	}],
        "zipRegex": ""
    }
];

export const regions: Region[] = countries.reduce((result, country) => {
    if (result.indexOf(country.region) === -1) {
        result.push(country.region)
    }

    return result;
}, [] as Region[])

export default countries;
